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

					{/* Solutions */}
					<div>
						<h3 className="text-lg font-semibold text-rugero-background mb-4">
							Our Solutions
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/#solutions"
									className="hover:text-rugero-muted flex items-start gap-2"
								>
									<span>🏥</span>
									<span>
										Medical Equipment & Procurement
									</span>
								</Link>
							</li>
							<li>
								<Link
									to="/#solutions"
									className="hover:text-rugero-muted flex items-start gap-2"
								>
									<span>👨‍🏫</span>
									<span>
										On-Site Technical Support &
										Training
									</span>
								</Link>
							</li>
							<li>
								<Link
									to="/#solutions"
									className="hover:text-rugero-muted flex items-start gap-2"
								>
									<span>💉</span>
									<span>
										Medical & Surgical Consumables
									</span>
								</Link>
							</li>
							<li>
								<Link
									to="/#solutions"
									className="hover:text-rugero-muted flex items-start gap-2"
								>
									<span>🔧</span>
									<span>
										Installation of Medical
										Equipment
									</span>
								</Link>
							</li>
							<li>
								<Link
									to="/#solutions"
									className="hover:text-rugero-muted flex items-start gap-2"
								>
									<span>💻</span>
									<span>
										Preventive Maintenance & Repair
									</span>
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-lg font-semibold text-rugero-background mb-4">
							Contact Us
						</h3>
						<ul className="text-sm space-y-3">
							<li className="flex items-start gap-2">
								<span>📍</span>
								<span>
									KG 607 ST, Rugando Kimihurura,
									<br />
									Gasabo, Kigali - Rwanda
								</span>
							</li>
							<li className="flex items-center gap-2">
								<span>📞</span>
								<a
									href="tel:+250791590051"
									className="hover:text-rugero-muted"
								>
									(+250) 791 590 051
								</a>
							</li>
							<li className="flex items-center gap-2">
								<span>📧</span>
								<a
									href="mailto:info@rugeromed.com"
									className="hover:text-rugero-muted"
								>
									info@rugeromed.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-rugero-muted mt-10 pt-6 text-center text-sm text-rugero-background/70">
					&copy; {new Date().getFullYear()} Rugero Med. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
