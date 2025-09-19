import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	// Normalize categories into a clean array of strings
	const getProductCategories = (category) => {
		if (!category) return [];
		const parseStringCats = (val) => {
			if (typeof val !== 'string') return [String(val)];
			let s = val.trim();
			if (
				(s.startsWith('"') && s.endsWith('"')) ||
				(s.startsWith("'") && s.endsWith("'"))
			) {
				s = s.slice(1, -1).trim();
			}
			if (s.startsWith('[') && s.endsWith(']')) {
				try {
					const parsed = JSON.parse(s);
					if (Array.isArray(parsed))
						return parsed.map((x) => String(x).trim());
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
			return category.flatMap(parseStringCats).filter(Boolean);
		if (typeof category === 'string')
			return parseStringCats(category).filter(Boolean);
		return [];
	};

	return (
		<div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
			<Link to={`/products/${product._id}`}>
				{product.imageUrl && (
					<div className="relative h-48 overflow-hidden">
						<img
							src={product.imageUrl}
							alt={product.title}
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				)}
			</Link>
			<div className="p-6 flex flex-col flex-1">
				<h3 className="text-xl font-bold text-gray-900 mb-2">
					<Link to={`/products/${product._id}`} className="hover:text-rugero-primary">
						{product.title}
					</Link>
				</h3>
				<div className="flex flex-wrap gap-2 mb-2">
					{getProductCategories(product.category).map((cat, idx) => (
						<span
							key={`pcat-${product._id}-${idx}`}
							className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
						>
							{cat}
						</span>
					))}
					{getProductCategories(product.category).length ===
						0 && (
						<span className="text-gray-400 text-xs italic">
							No category
						</span>
					)}
				</div>
				<div
					className="rich-text text-sm text-gray-600 mb-4 line-clamp-3"
					dangerouslySetInnerHTML={{ __html: product.description || '' }}
				/>
				<div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
					{product.price && (
						<span className="font-semibold text-rugero-accent">${product.price}</span>
					)}
					<Link
						to={`/products/${product._id}`}
						className="text-rugero-primary hover:underline flex items-center"
					>
						View details
						<svg
							className="w-4 h-4 ml-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
