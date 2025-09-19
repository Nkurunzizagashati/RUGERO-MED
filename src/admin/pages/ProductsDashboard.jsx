import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Package, Grid, EyeIcon, Pencil, Trash2 } from 'lucide-react';
import ReactPaginate from 'react-paginate';

import { fetchProducts, deleteProduct } from '../../redux/actions';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatCard from '../components/common/StatCard';
import DashboardCard from '../components/common/DashboardCard';
import SkeletonCard from '../components/SkeletonCard';
import SearchFilterBar from '../components/common/SearchFilterBar';

const ProductsDashboard = () => {
  const dispatch = useDispatch();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0); // react-paginate uses 0-based index
  const productsPerPage = 9;

  const { data: products, pending, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Helper to normalize a single product's categories into an array of strings
  const getProductCategories = (category) => {
    if (!category) return [];
    const parseStringCats = (val) => {
      if (typeof val !== 'string') return [String(val)];
      let s = val.trim();
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
        s = s.slice(1, -1).trim();
      }
      if (s.startsWith('[') && s.endsWith(']')) {
        try {
          const parsed = JSON.parse(s);
          if (Array.isArray(parsed)) return parsed.map((x) => String(x).trim());
        } catch {}
      }
      if (s.includes(',')) return s.split(',').map((x) => x.trim()).filter(Boolean);
      return [s];
    };
    if (Array.isArray(category)) return category.flatMap(parseStringCats).filter(Boolean);
    if (typeof category === 'string') return parseStringCats(category).filter(Boolean);
    return [];
  };

  const stats = useMemo(() => {
    if (!products) return { totalProducts: 0, totalCategories: 0, categoriesMap: {} };
    const totalProducts = products.length;
    const categoriesMap = {};
    products.forEach((p) => {
      const cats = getProductCategories(p?.category);
      cats.forEach((cat) => {
        if (!cat) return;
        categoriesMap[cat] = (categoriesMap[cat] || 0) + 1;
      });
    });
    return { totalProducts, totalCategories: Object.keys(categoriesMap).length, categoriesMap };
  }, [products]);

  const allCategories = useMemo(() => {
    const set = new Set();
    if (products) {
      products.forEach((p) => {
        getProductCategories(p?.category).forEach((c) => set.add(c));
      });
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    const q = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const cats = getProductCategories(p?.category);
      const matchesCategory = selectedCategory ? cats.some((c) => c === selectedCategory) : true;
      if (!matchesCategory) return false;
      if (!q) return true;
      const title = String(p?.title || '').toLowerCase();
      const desc = String(p?.description || '').replace(/<[^>]*>/g, '').toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [products, searchQuery, selectedCategory]);

  const paginatedProducts = useMemo(() => {
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const pageCount = filteredProducts.length ? Math.ceil(filteredProducts.length / productsPerPage) : 0;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, selectedCategory]);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    await dispatch(deleteProduct(selectedId));
    setConfirmOpen(false);
    setSelectedId(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 text-rugero-gray1">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link to="/admin/products/create" className="bg-rugero-primary text-white px-4 py-2 rounded hover:bg-rugero-green3 transition duration-300">
          + Add Product
        </Link>
      </div>

      {error && <p className="text-red-500 h-full text-center">{error}</p>}

      {/* Stats */}
      {!pending && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <StatCard icon={<Package />} bgColor="bg-blue-100" iconColor="text-blue-600" label="Total Products" value={stats.totalProducts} />
          <StatCard icon={<Grid />} bgColor="bg-green-100" iconColor="text-green-600" label="Categories" value={stats.totalCategories} />
        </div>
      )}

      {/* Search & Filter */}
      {!pending && (
        <SearchFilterBar
          categories={allCategories}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      )}

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pending
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : paginatedProducts.length > 0
          ? paginatedProducts.map((product) => (
              <DashboardCard
                key={product._id}
                item={product}
                onDelete={handleDeleteClick}
                confirmDialog={
                  confirmOpen && (
                    <ConfirmDialog
                      message="Are you sure you want to delete this product?"
                      onConfirm={confirmDelete}
                      onCancel={() => setConfirmOpen(false)}
                    />
                  )
                }
                detailsPath="/admin/products"
                editPath="/admin/products"
                eyeIcon={<EyeIcon size={18} />}
                editIcon={<Pencil size={18} />}
                deleteIcon={<Trash2 size={18} />}
              />
            ))
          : !pending && <p className="col-span-full text-center text-gray-500">No products found</p>}
      </div>

      {/* Pagination controls */}
      {!pending && pageCount > 1 && (
        <div className="flex justify-center mt-12">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next ›"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="‹ Prev"
            forcePage={currentPage}
            containerClassName="flex items-center space-x-2"
            pageClassName="px-3 py-1 rounded bg-gray-200"
            pageLinkClassName="text-gray-700"
            previousClassName="px-3 py-1 rounded bg-gray-200"
            nextClassName="px-3 py-1 rounded bg-gray-200"
            activeClassName="bg-rugero-primary text-white"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default ProductsDashboard;
