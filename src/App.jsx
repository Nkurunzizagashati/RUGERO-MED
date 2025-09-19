import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Suspense, lazy } from 'react';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

// Admin imports
import ProtectedRoute from './admin/components/auth/ProtectedRoute';
const AdminLayout = lazy(() => import('./admin/layouts/MainLayout'));
const LoginPage = lazy(() => import('./admin/pages/LoginPage'));
const ProductsDashboard = lazy(() =>
	import('./admin/pages/ProductsDashboard')
);
const CreateProductPage = lazy(() =>
	import('./admin/pages/CreateProductPage')
);
const EditProductPage = lazy(() =>
	import('./admin/pages/EditProductPage')
);
const ProductDetailsPageAdmin = lazy(() =>
	import('./admin/pages/ProductDetailsPage')
);
const NewsDashboard = lazy(() => import('./admin/pages/NewsDashboard'));
const PostNewsPage = lazy(() => import('./admin/pages/PostNewsPage'));
const EditNewsPage = lazy(() => import('./admin/pages/EditNewsPage'));
const NewsDetailsPageAdmin = lazy(() =>
	import('./admin/pages/NewsDetailsPage')
);
const SettingsPage = lazy(() => import('./admin/pages/SettingsPage'));

const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() =>
	import('./pages/ProductDetailsPage')
);
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailsPage = lazy(() => import('./pages/NewsDetailsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
	// Public site
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
			{ path: '*', element: <NotFound /> },
		],
	},
	// Admin auth
	{ path: '/login', element: <LoginPage /> },
	// Admin protected area
	{
		path: '/admin',
		element: <ProtectedRoute />,
		children: [
			{
				path: '/admin',
				element: <AdminLayout />,
				children: [
					{ index: true, element: <ProductsDashboard /> },
					{
						path: 'products',
						element: <ProductsDashboard />,
					},
					{
						path: 'products/create',
						element: <CreateProductPage />,
					},
					{
						path: 'products/:id/edit',
						element: <EditProductPage />,
					},
					{
						path: 'products/:id/details',
						element: <ProductDetailsPageAdmin />,
					},
					{ path: 'news', element: <NewsDashboard /> },
					{ path: 'news/create', element: <PostNewsPage /> },
					{
						path: 'news/:id/edit',
						element: <EditNewsPage />,
					},
					{
						path: 'news/:id/details',
						element: <NewsDetailsPageAdmin />,
					},
					{ path: 'settings', element: <SettingsPage /> },
				],
			},
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
