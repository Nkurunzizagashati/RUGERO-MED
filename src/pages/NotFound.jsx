// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO title="404 - Not Found" description="The page you are looking for could not be found." />
      <section className="px-4 py-20 sm:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rugero-secondary mb-6 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-10 h-10 text-rugero-primary"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M13 13h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-rugero-muted/80 mb-3">
            Page not found
          </h1>
          <p className="text-rugero-muted/50 text-lg mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-lg bg-rugero-primary text-white hover:bg-rugero-green3 transition-colors duration-300"
            >
              Go to Home
            </Link>
            <Link
              to="/products"
              className="px-5 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
            >
              Browse Products
            </Link>
            <Link
              to="/news"
              className="px-5 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
            >
              Read News
            </Link>
          </div>

          {/* Decorative illustration */}
          <div className="mt-12">
            <svg
              viewBox="0 0 600 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-2xl mx-auto text-gray-200"
            >
              <g fill="currentColor">
                <circle cx="70" cy="120" r="4" />
                <circle cx="120" cy="90" r="3" />
                <circle cx="180" cy="130" r="5" />
                <circle cx="240" cy="80" r="3" />
                <circle cx="300" cy="120" r="4" />
                <circle cx="360" cy="95" r="3" />
                <circle cx="420" cy="125" r="5" />
                <circle cx="480" cy="85" r="3" />
                <circle cx="540" cy="115" r="4" />
              </g>
              <rect x="100" y="150" width="400" height="6" rx="3" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
