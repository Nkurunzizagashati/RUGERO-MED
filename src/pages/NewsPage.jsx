import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchNews } from '../redux/actions';
import { Link } from 'react-router-dom';
import NewsSkeleton from '../components/news/NewsSkeleton';
import { Calendar, Tag as TagIcon, Search, X } from 'lucide-react';
import SEO from '../components/SEO'; // ✅ Import SEO

const NewsPage = () => {
	const dispatch = useDispatch();
	const {
		data: newsData = [],
		pending,
		error,
	} = useSelector((state) => state.news);

	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	const allTags = [
		...new Set(newsData.flatMap((news) => news.tags || [])),
	];

	const filteredNews = newsData.filter((news) => {
		const matchesSearch =
			news.title
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			(news.description?.toLowerCase() || '').includes(
				searchTerm.toLowerCase()
			);

		const matchesTags =
			selectedTags.length === 0 ||
			(news.tags &&
				selectedTags.every((tag) => news.tags.includes(tag)));

		return matchesSearch && matchesTags;
	});

	const toggleTag = (tag) => {
		setSelectedTags((prev) =>
			prev.includes(tag)
				? prev.filter((t) => t !== tag)
				: [...prev, tag]
		);
	};

	if (pending) {
		return (
			<>
				<SEO
					title="Latest News & Updates"
					description="Stay updated with RugeroMed's latest developments in healthcare technology and medical equipment."
					keywords="healthcare news, RugeroMed updates, medical equipment news, healthcare technology"
				/>
				<section className="px-4 py-16 max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-12 text-rugero-background">
							Latest News & Updates
						</h2>
						<p className="text-rugero-lightGray text-lg max-w-3xl mx-auto">
							Stay informed with the latest developments
							in healthcare technology and medical
							equipment.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Array.from({ length: 6 }).map((_, i) => (
							<NewsSkeleton key={i} />
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
					title="News Error"
					description="An error occurred while loading RugeroMed news."
				/>
				<div className="min-h-[60vh] flex items-center justify-center px-4">
					<div className="text-center max-w-2xl">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
							<X className="w-8 h-8 text-red-500" />
						</div>
						<h2 className="text-2xl font-bold text-gray-900 mb-2">
							Something went wrong
						</h2>
						<p className="text-gray-600 mb-6">{error}</p>
						<button
							onClick={() => window.location.reload()}
							className="px-6 py-2 bg-rugero-primary text-white rounded-lg hover:bg-rugero-accent"
						>
							Try again
						</button>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<SEO
				title="Latest News & Updates"
				description="Stay updated with RugeroMed's latest healthcare technology and medical equipment news."
				keywords="RugeroMed news, healthcare technology, medical equipment updates"
			/>
			<section className="px-4 py-12 sm:py-16 max-w-7xl mx-auto border-b">
				{/* Heading */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-12 text-rugero-background">
						Latest News & Updates
					</h2>
					<p className="text-rugero-lightGray text-lg max-w-3xl mx-auto">
						Stay informed with the latest developments in
						healthcare technology and medical equipment.
					</p>
				</div>

				{/* Search and Filter */}
				<div className="mb-10 max-w-3xl mx-auto">
					<div className="relative mb-6">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="text"
							value={searchTerm}
							onChange={(e) =>
								setSearchTerm(e.target.value)
							}
							placeholder="Search news..."
							className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-rugero-primary focus:border-transparent"
						/>
					</div>

					{allTags.length > 0 && (
						<div className="flex flex-wrap gap-2 justify-center">
							<button
								onClick={() => setSelectedTags([])}
								className={`px-4 py-2 rounded-full text-sm font-medium ${
									selectedTags.length === 0
										? 'bg-rugero-primary text-white'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}
							>
								All
							</button>
							{allTags.map((tag) => (
								<button
									key={tag}
									onClick={() => toggleTag(tag)}
									className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 ${
										selectedTags.includes(tag)
											? 'bg-rugero-primary text-white'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
									}`}
								>
									{selectedTags.includes(tag) ? (
										<X className="w-3.5 h-3.5" />
									) : (
										<TagIcon className="w-3.5 h-3.5" />
									)}
									{tag}
								</button>
							))}
						</div>
					)}
				</div>

				{/* Results count */}
				{(searchTerm || selectedTags.length > 0) && (
					<div className="mb-6 text-center text-gray-600">
						{filteredNews.length}{' '}
						{filteredNews.length === 1
							? 'result'
							: 'results'}{' '}
						found
						{searchTerm && ` for "${searchTerm}"`}
						{selectedTags.length > 0 &&
							` with tags: ${selectedTags.join(', ')}`}
					</div>
				)}

				{/* News Grid */}
				{filteredNews.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<AnimatePresence>
							{filteredNews.map((news) => (
								<motion.div
									key={news._id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg flex flex-col"
								>
									<Link to={`/news/${news._id}`}>
										{news.imageUrl && (
											<div className="relative h-48 overflow-hidden">
												<img
													src={news.imageUrl}
													alt={news.title}
													className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
												/>
											</div>
										)}
									</Link>
									<div className="p-6 flex flex-col flex-1">
										<div className="flex flex-wrap gap-2 mb-3">
											{news.tags
												?.slice(0, 3)
												.map((tag, idx) => (
													<span
														key={idx}
														className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
													>
														{tag}
													</span>
												))}
										</div>
										<Link to={`/news/${news._id}`}>
											<h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-rugero-primary">
												{news.title}
											</h2>
										</Link>
										{news.description && (
											<div
												className="text-sm text-gray-600 mb-3 line-clamp-6"
												dangerouslySetInnerHTML={{
													__html: news.description,
												}}
											/>
										)}
										<div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
											<span className="flex items-center">
												<Calendar className="w-4 h-4 mr-1" />
												{new Date(
													news.createdAt
												).toLocaleDateString(
													'en-US',
													{
														month: 'short',
														day: 'numeric',
														year: 'numeric',
													}
												)}
											</span>
											<Link
												to={`/news/${news._id}`}
												className="text-rugero-primary hover:underline flex items-center"
											>
												Read more
												<svg
													className="w-4 h-4 ml-1"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				) : (
					<div className="text-center py-16">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
							<Search className="w-8 h-8 text-gray-400" />
						</div>
						<h3 className="text-lg font-medium text-gray-900 mb-1">
							No news found
						</h3>
						<p className="text-gray-500 max-w-md mx-auto">
							{searchTerm || selectedTags.length > 0
								? 'Try adjusting your search or filters.'
								: 'There are currently no news articles available.'}
						</p>
						<button
							onClick={() => {
								setSearchTerm('');
								setSelectedTags([]);
							}}
							className="mt-4 px-4 py-2 bg-rugero-primary text-white rounded-lg hover:bg-rugero-accent"
						>
							Clear filters
						</button>
					</div>
				)}
			</section>
		</>
	);
};

export default NewsPage;
