// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-rugero-secondary text-rugero-textOnPrimary py-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h2 className="text-xl font-semibold text-rugero-background mb-4">
							Rugero Med
						</h2>
						<p className="text-sm text-rugero-background/90">
							We design, supply, and install medical and
							surgical equipment for hospitals, clinics,
							and homecare.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold text-rugero-background mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/about"
									className="hover:text-rugero-muted"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/products"
									className="hover:text-rugero-muted"
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									to="/projects"
									className="hover:text-rugero-muted"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="hover:text-rugero-muted"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-lg font-semibold text-rugero-background mb-4">
							Our Services
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/products/cssd"
									className="hover:text-rugero-muted"
								>
									CSSD Solutions
								</Link>
							</li>
							<li>
								<Link
									to="/products/theatre"
									className="hover:text-rugero-muted"
								>
									Theatre Design
								</Link>
							</li>
							<li>
								<Link
									to="/products/home-cares"
									className="hover:text-rugero-muted"
								>
									Home Care Equipment
								</Link>
							</li>
							<li>
								<Link
									to="/products/plastic-surgery"
									className="hover:text-rugero-muted"
								>
									Plastic Surgery
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-lg font-semibold text-rugero-background mb-4">
							Contact Us
						</h3>
						<ul className="text-sm space-y-2">
							<li>
								Email:{' '}
								<a
									href="mailto:info@rugero.rw"
									className="hover:text-rugero-muted"
								>
									info@rugero.rw
								</a>
							</li>
							<li>
								Phone:{' '}
								<a
									href="tel:+250780000000"
									className="hover:text-rugero-muted"
								>
									+250 780 000 000
								</a>
							</li>
							<li>Location: Kigali, Rwanda</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-rugero-muted mt-10 pt-6 text-center text-sm text-rugero-background/70">
					© {new Date().getFullYear()} Rugero Med. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
