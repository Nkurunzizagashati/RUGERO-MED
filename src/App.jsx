import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Suspense, lazy } from 'react';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() =>
    import('./pages/ProductDetailsPage')
);
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailsPage = lazy(() => import('./pages/NewsDetailsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:id', element: <ProductDetailsPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'projects', element: <ProjectsPage /> },
            { path: 'news', element: <NewsPage /> },
            { path: 'news/:id', element: <NewsDetailsPage /> },
            { path: 'contact', element: <ContactUsPage /> },
        ],
    },
]);

function App() {
    return (
        <ParallaxProvider>
            {/* Suspense fallback shows while lazy components load */}
            <Suspense
                fallback={
                    <div className="p-6 text-center">Loading…</div>
                }
            >
                <RouterProvider router={router} />
            </Suspense>
        </ParallaxProvider>
    );
}

export default App;
