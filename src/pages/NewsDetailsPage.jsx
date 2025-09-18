// src/pages/NewsDetailsPage.jsx
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import SEO from '../components/SEO';
import { useNews, useNewsItem } from '../hooks/useNews';

const NewsDetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const passed = location.state?.news;
    const navigate = useNavigate();
    const { data: list = [], isLoading: listLoading } = useNews({ staleTime: 5 * 60 * 1000 });
    const { data: item, isLoading: pending, error } = useNewsItem(id);
    const news = useMemo(
        () => passed || item || list.find((n) => n._id === id),
        [passed, item, list, id]
    );

    if (pending && !news) {
        return (
            <>
                <SEO
                    title="Loading News..."
                    description="Loading RugeroMed news details."
                />
                <div className="p-8 text-center text-gray-500">
                    Loading news...
                </div>
            </>
        );
    }

    if (error && !news && !listLoading) {
        return (
            <>
                <SEO
                    title="Error Loading News"
                    description="An error occurred while loading RugeroMed news."
                />
                <div className="p-8 text-center text-red-500">
                    {error.message || String(error)}
                </div>
            </>
        );
    }

    if (!pending && !error && !news) {
        return (
            <>
                <SEO
                    title="News Not Found"
                    description="The requested news article could not be found."
                />
                <div className="p-8 text-center text-gray-500">
                    <h2 className="text-2xl font-semibold">
                        News Not Found
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
            {/* ✅ Dynamic SEO for this article */}
            <SEO
                title={news.title}
                description={news.description
                    ?.replace(/<[^>]+>/g, '')
                    .slice(0, 160)} // strip HTML & limit length
                keywords={(news.tags || []).join(', ')}
                image={news.imageUrl}
            />

			<div className="px-4 py-16 max-w-7xl mx-auto border-b">
				{/* Image */}
				{news.imageUrl && (
					<img
						src={news.imageUrl}
						alt={news.title}
						className="w-full h-96 object-cover rounded-lg shadow mb-6"
					/>
				)}

				{/* Title */}
				<h1 className="text-3xl font-bold text-rugero-muted mb-2">
					{news.title}
				</h1>

				{/* Citation / Source */}
				{news.citation && (
					<span className="inline-block bg-rugero-secondary text-white text-xs font-semibold mb-4">
						Source:{' '}
						<span className="italic rounded-full uppercase bg-rugero-muted/50 text-rugero-secondary px-3 py-1">
							{news.citation}
						</span>
					</span>
				)}

				{/* Publisher + Date */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm text-gray-500">
					{news.reporter && (
						<p>
							Published by:{' '}
							<span className="font-medium text-rugero-primary">
								{news.reporter}
							</span>
						</p>
					)}
					<p>
						Published on:{' '}
						{new Date(news.createdAt).toLocaleDateString()}
					</p>
				</div>

				{/* Description */}
				<div
					className="text-lg leading-relaxed text-rugero-muted/50 mb-6"
					dangerouslySetInnerHTML={{
						__html: news.description,
					}}
				></div>

				{/* Back Button */}
				<Link
					to="/news"
					className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
				>
					← Back
				</Link>
			</div>
		</>
	);
};

export default NewsDetailsPage;
