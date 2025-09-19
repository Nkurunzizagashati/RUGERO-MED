// src/pages/ProductDetailsPage.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import SEO from '../components/SEO';
import NotFound from './NotFound';

const ProductDetailsPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		data: products = [],
		isLoading: pending,
		error,
	} = useProducts();
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
		return <NotFound />;
	}

	return (
		<>
			<SEO
				title={`${product.title} | RugeroMed`}
				description={
					product.description
						?.replace(/<[^>]+>/g, '')
						.slice(0, 160) ||
					`Discover ${product.title} at RugeroMed.`
				}
				keywords={`RugeroMed, ${product.title}, ${product.category}, medical equipment`}
			/>

			<div className="px-4 py-16 max-w-7xl mx-auto border-b">
				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8">
				{/* Image */}
				<img
					src={product.imageUrl}
					alt={product.title}
					className="w-full h-96 object-cover rounded-lg shadow mb-6"
				/>

				{/* Title + Category */}
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					Name: {product.title}
				</h1>
				{/* Normalized Category Chips */}
				<div className="mb-6">
					<p className="text-rugero-muted/50 text-xs font-semibold mb-2">
						Categories:
					</p>
					<div className="flex flex-wrap gap-2">
						{(() => {
							const getProductCategories = (category) => {
								if (!category) return [];
								const parseStringCats = (val) => {
									if (typeof val !== 'string')
										return [String(val)];
									let s = val.trim();
									if (
										(s.startsWith('"') &&
											s.endsWith('"')) ||
										(s.startsWith("'") &&
											s.endsWith("'"))
									) {
										s = s.slice(1, -1).trim();
									}
									if (
										s.startsWith('[') &&
										s.endsWith(']')
									) {
										try {
											const parsed =
												JSON.parse(s);
											if (Array.isArray(parsed))
												return parsed.map((x) =>
													String(x).trim()
												);
										} catch {}
									}
									if (s.includes(','))
										return s
											.split(',')
											.map((x) => x.trim())
											.filter(Boolean);
									return [s];
								};
								if (Array.isArray(category))
									return category
										.flatMap(parseStringCats)
										.filter(Boolean);
								if (typeof category === 'string')
									return parseStringCats(
										category
									).filter(Boolean);
								return [];
							};
							return getProductCategories(product.category).map((cat, idx) => (
								<span
									key={`pdet-cat-${idx}`}
									className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
								>
									{cat}
								</span>
							));
						})()}
						{(() => {
							const arr = Array.isArray(product.category)
								? product.category
								: typeof product.category === 'string'
								? [product.category]
								: [];
							if (arr.length === 0) {
								return (
									<span className="text-gray-500 text-sm italic">
										No categories
									</span>
								);
							}
							return null;
						})()}
					</div>
				</div>

				{/* Description */}
				<div
					className="rich-text text-lg leading-relaxed text-gray-700 mb-4"
					dangerouslySetInnerHTML={{
						__html: product.description,
					}}
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
			</div>
		</>
	);
};

export default ProductDetailsPage;
