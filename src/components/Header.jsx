import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeAllMenus = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="bg-rugero-secondary text-rugero-textOnPrimary shadow-md fixed top-0 left-0 w-full z-50">
			<div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center gap-2 hover:text-rugero-green3 transition-colors duration-200 text-rugero-primary"
				>
					<img
						src="/assets/logo-transparent.png"
						alt="RugeroMed Logo"
						className="h-10 w-auto bg-rugero-muted rounded-sm"
					/>
					<span className="text-lg font-bold tracking-wide">
						RugeroMed
					</span>
				</Link>

				{/* Hamburger Button */}
				<button
					className="flex flex-col justify-center items-center w-8 h-8 md:hidden"
					onClick={toggleMobileMenu}
					aria-label="Toggle navigation menu"
				>
					<span className="w-6 h-0.5 bg-white mb-1 rounded"></span>
					<span className="w-6 h-0.5 bg-white mb-1 rounded"></span>
					<span className="w-6 h-0.5 bg-white rounded"></span>
				</button>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-6 items-center font-medium">
					<Link
						to="/"
						className="hover:text-rugero-lightGray"
					>
						Home
					</Link>
					<Link
						to="/projects"
						className="hover:text-rugero-lightGray"
					>
						Projects
					</Link>
					<Link
						to="/products"
						className="hover:text-rugero-lightGray"
					>
						Products
					</Link>
					<Link
						to="/about"
						className="hover:text-rugero-lightGray"
					>
						About Us
					</Link>
					<Link
						to="/news"
						className="hover:text-rugero-lightGray"
					>
						News
					</Link>
					<Link
						to="/contact"
						className="hover:bg-rugero-green3 transition-colors duration-200 bg-rugero-primary text-rugero-textOnPrimary px-4 py-2 rounded-md"
					>
						Get In Touch
					</Link>
				</nav>
			</div>

			{/* Mobile Slide-In Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-rugero-primary shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
					isMobileMenuOpen
						? 'translate-x-0'
						: 'translate-x-full'
				}`}
			>
				<div className="flex flex-col justify-center items-center h-full space-y-6 font-medium text-center">
					<Link
						to="/"
						onClick={closeAllMenus}
						className="hover:text-rugero-lightGray transition-colors"
					>
						Home
					</Link>
					<Link
						to="/projects"
						onClick={closeAllMenus}
						className="hover:text-rugero-lightGray transition-colors"
					>
						Projects
					</Link>
					<Link
						to="/products"
						onClick={closeAllMenus}
						className="hover:text-rugero-lightGray transition-colors"
					>
						Products
					</Link>
					<Link
						to="/about"
						onClick={closeAllMenus}
						className="hover:text-rugero-lightGray transition-colors"
					>
						About Us
					</Link>
					<Link
						to="/news"
						onClick={closeAllMenus}
						className="hover:text-rugero-lightGray transition-colors"
					>
						News
					</Link>
					<Link
						to="/contact"
						onClick={closeAllMenus}
						className="bg-rugero-primary hover:bg-rugero-green3 text-rugero-textOnPrimary px-4 py-2 rounded-md transition-colors"
					>
						Get In Touch
					</Link>
				</div>
			</div>

			{/* Mobile Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-40"
					onClick={closeAllMenus}
				></div>
			)}
		</header>
	);
};

export default Header;
