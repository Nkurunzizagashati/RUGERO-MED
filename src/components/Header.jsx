import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

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

				{/* Navigation */}
				<nav
					className={`md:flex gap-6 items-center font-medium ${
						isMobileMenuOpen
							? 'absolute top-full left-0 w-full bg-rugero-primary flex flex-col items-start p-4 shadow-md'
							: 'hidden'
					} md:static md:bg-transparent`}
				>
					<Link
						to="/projects"
						className="hover:text-rugero-lightGray transition-colors duration-300"
						onClick={closeAllMenus}
					>
						Projects
					</Link>
					<Link
						to="/products"
						className="hover:text-rugero-lightGray transition-colors duration-300"
						onClick={closeAllMenus}
					>
						Products
					</Link>
					<Link
						to="/about"
						className="hover:text-rugero-lightGray transition-colors duration-300"
						onClick={closeAllMenus}
					>
						About Us
					</Link>
					<Link
						to="/news"
						className="hover:text-rugero-lightGray transition-colors duration-300"
						onClick={closeAllMenus}
					>
						News
					</Link>
					<Link
						to="/contact"
						className="hover:bg-rugero-green3 transition-colors duration-200 bg-rugero-primary text-rugero-textOnPrimary px-4 py-2 rounded-md"
						onClick={closeAllMenus}
					>
						Get In Touch
					</Link>
				</nav>
			</div>

			{/* Mobile Overlay */}
			{isMobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
					onClick={closeAllMenus}
				></div>
			)}
		</header>
	);
};

export default Header;
