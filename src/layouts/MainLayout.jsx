import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
	return (
		<>
			<ScrollToTop />
			<Header />
			<main className="pt-14 min-h-screen bg-rugero-secondary text-rugero-text">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;
