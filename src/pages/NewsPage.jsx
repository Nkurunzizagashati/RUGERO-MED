// // src/pages/NewsPage.jsx
// import { motion } from 'framer-motion';

// const newsData = [
// 	{
// 		title: 'New Telemedicine Project Launched',
// 		citation: 'By HealthTimes • July 2025',
// 		description:
// 			'Our team partnered with regional hospitals to establish a cutting-edge telemedicine system...',
// 		image: '/assets/optimized_ecg_machine.jpg',
// 		link: 'https://example.com/news/telemedicine',
// 	},
// 	{
// 		title: 'Remote Units Reach Remote Villages',
// 		citation: 'Ministry of Health • June 2025',
// 		description:
// 			'RugeroMed deployed mobile health units to serve remote areas, impacting over 10,000 people.',
// 		image: '/assets/optimized_infusion_pump.jpg',
// 		link: 'https://example.com/news/mobile-units',
// 	},
// 	// Add more news items...
// ];

// const NewsPage = () => {
// 	return (
// 		<section className="px-4 py-16 max-w-7xl mx-auto">
// 			{/* Heading */}
// 			<div className="text-center mb-12">
// 				<h1 className="text-4xl font-bold mb-2">
// 					Stay Up To Date
// 				</h1>
// 				<p className="text-gray-600 text-lg">
// 					Explore the latest news and updates in healthcare
// 					and innovation.
// 				</p>
// 			</div>

// 			{/* News Grid */}
// 			<div className="grid md:grid-cols-2 gap-10">
// 				{newsData.map((news, index) => (
// 					<motion.div
// 						key={index}
// 						initial={{ opacity: 0, y: 40 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						viewport={{ once: true }}
// 						transition={{ duration: 0.6 }}
// 						className="bg-rugero-background rounded-lg shadow-lg overflow-hidden flex flex-col"
// 					>
// 						<img
// 							src={news.image}
// 							alt={news.title}
// 							className="w-full h-56 object-cover"
// 						/>
// 						<div className="p-6 flex flex-col flex-1">
// 							<h2 className="text-2xl font-bold mb-1">
// 								{news.title}
// 							</h2>
// 							<p className="text-sm text-gray-500 mb-3 italic">
// 								{news.citation}
// 							</p>
// 							<p className="text-gray-700 flex-1">
// 								{news.description}
// 							</p>
// 							<a
// 								href={news.link}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="mt-4 inline-block text-rugero-secondary font-medium hover:underline"
// 							>
// 								Read More →
// 							</a>
// 						</div>
// 					</motion.div>
// 				))}
// 			</div>
// 		</section>
// 	);
// };

// export default NewsPage;

// src/pages/NewsPage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchNews } from '../redux/actions';

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
					Stay Up To Date
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
						className="bg-rugero-background rounded-lg shadow-lg overflow-hidden flex flex-col"
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
							<a
								href={news.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 inline-block text-rugero-secondary font-medium hover:underline"
							>
								Read More →
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default NewsPage;
