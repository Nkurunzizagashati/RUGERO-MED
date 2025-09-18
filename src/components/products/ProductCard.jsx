import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	return (
		<div className="bg-rugero-lightGray rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full">
			<img
				src={product.imageUrl}
				alt={product.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4 flex flex-col flex-grow">
				<h3 className="text-xl font-semibold mb-1">
					{product.title}
				</h3>
				<p className="text-gray-500 text-sm mb-2">
					Category: {product.category}
				</p>
				<div
					className="text-gray-700 text-sm mb-3 line-clamp-2"
					dangerouslySetInnerHTML={{ __html: product.description || '' }}
				/>
				<div className="mt-auto pt-2">
					<Link
						to={`/products/${product._id}`}
						className="text-rugero-green5 hover:text-rugero-green3 font-medium text-sm inline-flex items-center transition-colors"
					>
						Learn more
						<svg
							className="w-4 h-4 ml-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
