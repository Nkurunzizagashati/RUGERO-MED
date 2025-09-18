import { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import ProductSkeleton from '../components/products/ProductSkeleton';
import FilterBar from '../components/products/FilterBar';
import ReactPaginate from 'react-paginate';
import SEO from '../components/SEO';
import { useProducts } from '../hooks/useProducts';

const ProductsPage = () => {
    // React Query state
    const { data: products = [], isLoading: pending, error } = useProducts();

    const [filteredProducts, setFilteredProducts] = useState([]);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    // Update filtered products when products change
    useEffect(() => {
        setFilteredProducts(products);
        setCurrentPage(0); // reset page on filter change
    }, [products]);

    // Extract categories dynamically
    const categories = [
        'All',
        ...new Set(products.map((p) => p.category)),
    ];

    // Filter handler
    const handleFilter = ({ search, category }) => {
        const filtered = products.filter((p) => {
            const matchCategory =
                category === 'All' || p.category === category;
            const matchSearch = p.title
                .toLowerCase()
                .includes(search.toLowerCase());
            return matchCategory && matchSearch;
        });

        setFilteredProducts(filtered);
        setCurrentPage(0);
    };

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
                <section className="px-4 py-16 max-w-7xl mx-auto border-b">
                    <h2 className="text-3xl font-bold mb-6 text-rugero-textOnPrimary">
                        Our Products
                    </h2>
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

            <section className="px-4 py-16 max-w-7xl mx-auto border-b">
                <h2 className="text-3xl font-bold mb-6 text-rugero-textOnPrimary">
                    Our Products
                </h2>

                <FilterBar
                    categories={categories}
                    onFilter={handleFilter}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {currentProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>

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
