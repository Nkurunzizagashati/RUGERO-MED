// src/admin/components/common/DashboardCard.jsx
import { Link } from 'react-router-dom';

const DashboardCard = ({
	item,
	onDelete,
	confirmDialog,
	detailsPath,
	editPath,
	eyeIcon,
	editIcon,
	deleteIcon,
}) => {
	return (
		<div className="bg-white shadow rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
			{/* Image */}
			<img
				src={item.imageUrl}
				alt={item.title}
				className="h-48 w-full object-cover"
			/>

			{/* Content */}
			<div className="p-4 flex flex-col flex-1">
				<h2 className="text-lg font-bold text-gray-800 mb-2">
					{item.title}
				</h2>

				{/* Reporter */}
				{item.reporter && (
					<p className="text-sm text-gray-600 mb-2">
						By {item.reporter}
					</p>
				)}

				{item.description && (
					<div
						className="rich-text text-sm text-gray-600 mb-3 line-clamp-2"
						dangerouslySetInnerHTML={{
							__html: item.description,
						}}
					/>
				)}

				{/* Categories (for products) */}
				{item.category && (
					<div className="flex flex-wrap gap-1.5 mb-3">
						{(() => {
							const parseStringCats = (val) => {
								if (typeof val !== 'string')
									return [val];
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
										const parsed = JSON.parse(s);
										if (Array.isArray(parsed))
											return parsed;
									} catch {}
								}
								if (s.includes(',')) {
									return s
										.split(',')
										.map((x) => x.trim())
										.filter(Boolean);
								}
								return [s];
							};

							let cats = [];
							if (Array.isArray(item.category)) {
								cats =
									item.category.flatMap(
										parseStringCats
									);
							} else if (
								typeof item.category === 'string'
							) {
								cats = parseStringCats(item.category);
							}
							cats = Array.from(
								new Set(
									cats.map((c) =>
										typeof c === 'string'
											? c.trim()
											: c
									)
								)
							).filter(Boolean);

							return cats.map((cat, idx) => (
								<span
									key={`cat-${idx}`}
									className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full"
								>
									{cat}
								</span>
							));
						})()}
					</div>
				)}

				{/* Tags */}
				{item.tags && item.tags.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mb-3">
						{item.tags.map((tag, index) => (
							<span
								key={index}
								className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
							>
								{tag}
							</span>
						))}
					</div>
				)}

				<div className="mt-auto pt-2 border-t border-gray-100">
					{item.price && (
						<p className="mt-2 text-sm font-semibold text-rugero-accent">
							${item.price}
						</p>
					)}
					{item.citation && (
						<p className="mt-2 text-sm text-gray-500 italic">
							{item.citation}
						</p>
					)}
				</div>
			</div>

			{/* Actions */}
			<div className="flex justify-between p-3 border-t">
				<Link
					to={`${detailsPath}/${item._id}/details`}
					className="text-blue-600 hover:text-blue-800"
				>
					{eyeIcon}
				</Link>
				<div className="flex gap-4">
					<Link
						to={`${editPath}/${item._id}/edit`}
						className="text-blue-600 hover:text-blue-800"
					>
						{editIcon}
					</Link>
					<button
						onClick={() => onDelete(item._id)}
						className="text-red-600 hover:text-red-800"
					>
						{deleteIcon}
					</button>
					{confirmDialog}
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;
