import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchNews } from '../redux/actions';
import { Link } from 'react-router-dom';

const NewsPage = () => {
	const dispatch = useDispatch();
	const {
		data: newsData,
		pending,
		error,
	} = useSelector((state) => state.news);

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	if (pending) return <LoadingSpinner />;
	if (error)
		return (
			<p className="text-center py-10 text-red-500 font-medium">
				{error}
			</p>
		);

	return (
		<section className="px-4 py-16 max-w-7xl mx-auto border-b">
			{/* Heading */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-2 text-rugero-textOnPrimary">
					Stay Up To Date with the latest news in healthcare
					equipments
				</h1>
				<p className="text-rugero-lightGray text-lg">
					Explore the latest news and updates in healthcare
					and innovation.
				</p>
			</div>

			{/* News Grid */}
			<div className="grid md:grid-cols-2 gap-10">
				{newsData.map((news, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-rugero-lightGray rounded-lg shadow-lg overflow-hidden flex flex-col"
					>
						<img
							src={news.imageUrl}
							alt={news.title}
							className="w-full h-56 object-cover"
						/>
						<div className="p-6 flex flex-col flex-1">
							<h2 className="text-2xl font-bold mb-1">
								{news.title}
							</h2>
							<p className="text-sm text-gray-500 mb-3 italic">
								{news.citation}
							</p>
							<p className="text-gray-700 flex-1">
								{news.description}
							</p>
							<Link
								to={`/news/${news._id}`}
								className="mt-4 inline-block text-rugero-secondary font-medium hover:underline"
							>
								Read More →
							</Link>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default NewsPage;
