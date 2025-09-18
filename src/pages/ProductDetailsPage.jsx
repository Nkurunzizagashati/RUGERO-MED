// src/pages/ProductDetailsPage.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import SEO from '../components/SEO';

const ProductDetailsPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data: products = [], isLoading: pending, error } = useProducts();
	const product = useMemo(
		() => products.find((p) => p._id === id),
		[products, id]
	);

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

	if (!pending && !error && !product) {
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
					(product.description
						?.replace(/<[^>]+>/g, '')
						.slice(0, 160)) || `Discover ${product.title} at RugeroMed.`
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
				<div
					className="text-lg leading-relaxed text-rugero-muted/50 mb-4"
					dangerouslySetInnerHTML={{ __html: product.description }}
				/>

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
