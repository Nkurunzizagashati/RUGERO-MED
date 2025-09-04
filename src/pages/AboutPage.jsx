import OurTeam from '../components/OurTeam';

const AboutPage = () => {
	return (
		<section className="py-20 px-4 bg-rugero-secondary">
			<div className="px-4 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Side – Our Story */}
				<div className="bg-rugero-lightGray text-gray-800 p-8 rounded-2xl shadow-md">
					<h2 className="text-3xl font-bold mb-4">
						Our Story
					</h2>
					<p className="leading-relaxed text-gray-700">
						Rugero Med was born from a deep desire to
						transform healthcare access and quality across
						Rwanda and beyond. From humble beginnings, we’ve
						grown into a trusted supplier of modern medical
						equipment and solutions, partnering with
						hospitals and clinics to improve lives every
						day.
					</p>
				</div>

				{/* Right Side – Mission, Vision, Values */}
				<div className="bg-rugero-primary p-6 rounded-2xl space-y-6">
					<div className="bg-rugero-muted p-6 rounded-t-2xl shadow-sm">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Our Mission
						</h3>
						<p className="text-gray-700">
							To empower healthcare systems with
							innovative, reliable, and affordable medical
							solutions.
						</p>
					</div>

					<div className="bg-rugero-muted p-6 rounded-none shadow-sm">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Our Vision
						</h3>
						<p className="text-gray-700">
							To become the leading healthcare partner in
							East Africa, known for quality, trust, and
							impact.
						</p>
					</div>

					<div className="bg-rugero-muted p-6 rounded-b-2xl shadow-sm">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Our Values
						</h3>
						<p className="text-gray-700">
							Integrity, Innovation, Collaboration, and
							Compassion guide all that we do.
						</p>
					</div>
				</div>
			</div>
			<OurTeam />
		</section>
	);
};

export default AboutPage;
