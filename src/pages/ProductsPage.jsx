import { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import ProductSkeleton from '../components/products/ProductSkeleton';
import ReactPaginate from 'react-paginate';
import SEO from '../components/SEO';
import { useProducts } from '../hooks/useProducts';

const ProductsPage = () => {
    // React Query state
    const { data: products = [], isLoading: pending, error } = useProducts();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    // Update filtered products when products change
    useEffect(() => {
        setFilteredProducts(products);
        setCurrentPage(0); // reset page on filter change
    }, [products]);

    // Normalize a product's categories into an array of strings
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

    // Extract categories dynamically from normalized values
    const categories = [
        'All',
        ...Array.from(new Set(products.flatMap((p) => getProductCategories(p.category))))
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b)),
    ];

    // Recompute filtered products whenever inputs change
    useEffect(() => {
        const filtered = products.filter((p) => {
            const cats = getProductCategories(p.category);
            const matchCategory =
                selectedCategory === 'All' || cats.includes(selectedCategory);
            const title = (p.title || '').toLowerCase();
            const desc = (p.description || '').replace(/<[^>]+>/g, '').toLowerCase();
            const q = searchTerm.trim().toLowerCase();
            const matchSearch = !q || title.includes(q) || desc.includes(q);
            return matchCategory && matchSearch;
        });
        setFilteredProducts(filtered);
        setCurrentPage(0);
    }, [products, searchTerm, selectedCategory]);

    // Pagination calculations
    const pageCount = Math.ceil(
        filteredProducts.length / productsPerPage
    );
    const offset = currentPage * productsPerPage;
    const currentProducts = filteredProducts.slice(
        offset,
        offset + productsPerPage
    );

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Loading skeleton
    if (pending) {
        return (
            <>
                <SEO
                    title="Our Products"
                    description="Explore RugeroMed’s wide range of medical equipment and healthcare products."
                    keywords="RugeroMed products, medical equipment, healthcare supplies"
                />
                <section className="px-4 py-12 sm:py-16 max-w-7xl mx-auto border-b">
                    <h2 className="text-3xl font-bold mb-6 text-rugero-background">Our Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <ProductSkeleton key={i} />
                        ))}
                    </div>
                </section>
            </>
        );
    }

    if (error) {
        return (
            <>
                <SEO
                    title="Products Error"
                    description="An error occurred while loading RugeroMed products."
                />
                <div className="text-center h-screen content-center text-red-500">
                    {error.message || String(error)}
                </div>
            </>
        );
    }

    return (
        <>
            <SEO
                title="Our Products"
                description="Discover RugeroMed’s selection of high-quality healthcare products and medical equipment designed to improve patient care."
                keywords="RugeroMed products, healthcare equipment, medical devices, patient care"
            />

            <section className="px-4 py-12 sm:py-16 max-w-7xl mx-auto border-b">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-12 text-rugero-background">
                        Our Products
                    </h2>
                    <p className="text-rugero-lightGray text-lg max-w-3xl mx-auto">
                        Discover RugeroMed’s selection of high-quality healthcare products and medical equipment.
                    </p>
                </div>

                {/* Search and Category Filter */}
                <div className="mb-10 max-w-3xl mx-auto">
                    <div className="relative mb-6">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..."
                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-rugero-primary focus:border-transparent"
                        />
                    </div>

                    {categories.length > 1 && (
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                                        selectedCategory === cat
                                            ? 'bg-rugero-primary text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Results count */}
                {(searchTerm || selectedCategory !== 'All') && (
                    <div className="mb-6 text-center text-gray-600">
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
                        {searchTerm && ` for "${searchTerm}"`}
                        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    </div>
                )}

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            {searchTerm || selectedCategory !== 'All'
                                ? 'Try adjusting your search or category filter.'
                                : 'There are currently no products available.'}
                        </p>
                        {(searchTerm || selectedCategory !== 'All') && (
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="mt-4 px-4 py-2 bg-rugero-primary text-white rounded-lg hover:bg-rugero-accent"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
                )}

                {/* Pagination */}
                {pageCount > 1 && (
                    <div className="mt-8 flex justify-center">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next ›"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="‹ Prev"
                            forcePage={currentPage} // keep in sync
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
            </section>
        </>
    );
};

export default ProductsPage;
