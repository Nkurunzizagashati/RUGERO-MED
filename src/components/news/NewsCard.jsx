import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
	return (
		<div className="bg-rugero-lightGray rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all">
			<img
				src={news.image}
				alt={news.title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-1">
					{news.title}
				</h3>
				<p className="text-gray-500 text-sm mb-2">
					Category: {news.category}
				</p>
				<p className="text-gray-700 text-sm mb-3 line-clamp-2">
					{news.description}
				</p>
				<div className="flex justify-end">
					<Link
						to={`/news/${news.id}`}
						className="text-blue-600 hover:text-blue-800"
					>
						<Eye className="w-5 h-5" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
