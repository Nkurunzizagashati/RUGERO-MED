import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	return (
		<div className="bg-rugero-lightGray rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
			<img
				src={product.imageUrl}
				alt={product.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-1">
					{product.title}
				</h3>
				<p className="text-gray-500 text-sm mb-2">
					Category: {product.category}
				</p>
				<p className="text-gray-700 text-sm mb-3 line-clamp-2">
					{product.description}
				</p>
				<div className="flex justify-end">
					<Link
						to={`/products/${product._id}`}
						className="text-blue-600 hover:text-blue-800"
					>
						<Eye className="w-5 h-5" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
