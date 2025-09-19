// src/admin/pages/NewsDetailsPage.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchNews } from '../../redux/actions';

const NewsDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: newsList, pending, error } = useSelector((state) => state.news);

  const [news, setNews] = useState(null);

  useEffect(() => {
    if (!newsList || newsList.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch, newsList]);

  useEffect(() => {
    if (newsList && newsList.length > 0) {
      const found = newsList.find((n) => n._id === id);
      setNews(found);
    }
  }, [id, newsList]);

  if (pending) {
    return <div className="p-8 text-center text-gray-500">Loading news...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  if (!news) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h2 className="text-2xl font-semibold">News Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-rugero-primary text-white rounded hover:bg-rugero-accent">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      {news.imageUrl && (
        <img src={news.imageUrl} alt={news.title} className="w-full h-96 object-cover rounded-lg mb-6" />
      )}

      {/* Tags */}
      {news.tags && news.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>

      {/* Reporter and Date */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm text-gray-600">
        <div>
          {news.reporter && (
            <p>
              By{' '}
              <span className="font-medium text-rugero-primary">
                {news.reporter}
              </span>
            </p>
          )}
        </div>
        <div>
          {news.createdAt && (
            <p>
              Published on:{' '}
              {new Date(news.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      </div>

      {/* Citation / Source */}
      {news.citation && (
        <span className="inline-block bg-rugero-secondary text-white text-xs font-semibold mb-4">
          Source: <span className="italic rounded-full uppercase bg-rugero-secondary/90 text-rugero-muted/50 px-3 py-1">{news.citation}</span>
        </span>
      )}

      

      {/* Description */}
      <div className="rich-text text-lg leading-relaxed text-rugero-gray1/70 mb-6" dangerouslySetInnerHTML={{ __html: news.description }} />

      {/* Back Button */}
      <Link to="/admin/news" className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300">
        ← Back
      </Link>
    </div>
  );
};

export default NewsDetailsPage;
