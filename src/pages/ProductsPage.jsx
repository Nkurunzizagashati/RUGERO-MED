import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import FilterBar from '../components/products/FilterBar';
import { fetchProducts } from '../redux/actions';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductsPage = () => {
	const dispatch = useDispatch();

	// Get products state from Redux
	const {
		data: products,
		pending,
		error,
	} = useSelector((state) => state.products);

	const [filteredProducts, setFilteredProducts] = useState([]);

	// Fetch products from DB on mount
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	// Set filtered products when products are loaded
	useEffect(() => {
		setFilteredProducts(products);
	}, [products]);

	// Extract categories dynamically
	const categories = [
		'All',
		...new Set(products.map((p) => p.category)),
	];

	const handleFilter = ({ search, category }) => {
		const filtered = products.filter((p) => {
			const matchCategory =
				category === 'All' || p.category === category;
			const matchSearch = p.name
				.toLowerCase()
				.includes(search.toLowerCase());
			return matchCategory && matchSearch;
		});
		setFilteredProducts(filtered);
	};

	if (pending) return <LoadingSpinner />;
	if (error) return <div className="error-message">{error}</div>;

	if (error) {
		return (
			<p className="text-center py-10 text-red-500">{error}</p>
		);
	}

	return (
		<section className="px-4 py-16 max-w-7xl mx-auto border-b">
			<h2 className="text-3xl font-bold mb-6 text-rugero-textOnPrimary">
				Our Products
			</h2>
			<FilterBar
				categories={categories}
				onFilter={handleFilter}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default ProductsPage;
