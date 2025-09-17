// src/pages/ProductDetailsPage.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../redux/actions';
import SEO from '../components/SEO';

const ProductDetailsPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		data: products,
		pending,
		error,
	} = useSelector((state) => state.products);

	const [product, setProduct] = useState(null);

	useEffect(() => {
		// fetch products if store is empty
		if (!products || products.length === 0) {
			dispatch(fetchProducts());
		}
	}, [dispatch, products]);

	useEffect(() => {
		if (products && products.length > 0) {
			const found = products.find((p) => p._id === id);
			setProduct(found);
		}
	}, [id, products]);

	if (pending) {
		return (
			<>
				<SEO
					title="Loading Product..."
					description="Please wait while we load the product details."
				/>
				<div className="p-8 text-center text-gray-500">
					Loading product...
				</div>
			</>
		);
	}

	if (error) {
		return (
			<>
				<SEO
					title="Product Error"
					description="An error occurred while loading this product."
				/>
				<div className="p-8 text-center text-red-500">
					{error}
				</div>
			</>
		);
	}

	if (!product) {
		return (
			<>
				<SEO
					title="Product Not Found"
					description="The requested product could not be found."
				/>
				<div className="p-8 text-center text-gray-500">
					<h2 className="text-2xl font-semibold">
						Product Not Found
					</h2>
					<button
						onClick={() => navigate(-1)}
						className="mt-4 px-4 py-2 bg-rugero-primary text-white rounded hover:bg-rugero-accent"
					>
						Go Back
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<SEO
				title={`${product.title} | RugeroMed`}
				description={
					product.description ||
					`Discover ${product.title} at RugeroMed.`
				}
				keywords={`RugeroMed, ${product.title}, ${product.category}, medical equipment`}
			/>

			<div className="px-4 py-16 max-w-7xl mx-auto border-b">
				{/* Image */}
				<img
					src={product.imageUrl}
					alt={product.title}
					className="w-full h-96 object-cover rounded-lg shadow mb-6"
				/>

				{/* Title + Category */}
				<h1 className="text-3xl font-bold text-rugero-muted mb-2">
					Name: {product.title}
				</h1>
				<span className="inline-block bg-rugero-secondary text-white text-xs font-semibold mb-6">
					Category:{' '}
					<span className="italic rounded-full uppercase bg-rugero-muted/50 text-rugero-secondary px-3 py-1">
						{product.category}
					</span>
				</span>

				{/* Description */}
				<p className="text-lg leading-relaxed text-rugero-muted/50 mb-4">
					{product.description}
				</p>

				{/* Price */}
				{product.price && (
					<p className="text-xl font-semibold text-rugero-accent mb-6">
						Price: ${product.price}
					</p>
				)}

				{/* Back Button */}
				<Link
					to="/products"
					className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
				>
					← Back
				</Link>
			</div>
		</>
	);
};

export default ProductDetailsPage;
