// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux'; // Redux Provider
import { store } from './redux/store'; // Your Redux store

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import NewsPage from './pages/NewsPage';
import ContactUsPage from './pages/ContactUsPage';

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
			{ path: 'contact', element: <ContactUsPage /> },
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<ParallaxProvider>
				<RouterProvider router={router} />
			</ParallaxProvider>
		</Provider>
	);
}

export default App;
