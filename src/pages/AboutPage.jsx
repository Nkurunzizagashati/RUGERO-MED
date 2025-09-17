import OurTeam from '../components/OurTeam';
import SEO from '../components/SEO'; // ✅ import SEO

const AboutPage = () => {
	return (
		<>
			<SEO
				title="About RugeroMed"
				description="Learn about RugeroMed’s story, mission, vision, and values. Discover how we are transforming healthcare in East Africa with innovation, integrity, and compassion."
				keywords="RugeroMed, About RugeroMed, healthcare Rwanda, medical equipment, healthcare innovation"
			/>

			<section className="py-20 px-4 bg-rugero-secondary">
				<div className="px-4 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left Side – Our Story */}
					<div className="bg-rugero-lightGray text-gray-800 p-8 rounded-2xl shadow-md">
						<h2 className="text-3xl font-bold mb-4">
							Our Story
						</h2>
						<blockquote className="relative p-8 pl-12 bg-rugero-muted rounded-lg shadow-md">
							<svg
								className="absolute left-4 top-4 h-8 w-8 text-rugero-primary"
								fill="currentColor"
								viewBox="0 0 32 32"
							>
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p className="text-lg italic text-gray-700 mb-4">
								"It started with an idea, a dream."
							</p>
							<div className="text-gray-700 leading-relaxed space-y-4">
								<p>
									When I founded RugeroMed in 2011, my
									vision was simple yet ambitious: to
									bridge the gap between healthcare
									providers and access to reliable,
									high-quality medical supplies.
								</p>
								<p>
									As a clinical engineer, I had
									witnessed firsthand the critical
									role that the right equipment plays
									in saving lives and improving
									outcomes. I knew that Rwanda
									deserved better tools, better
									systems, and better service.
								</p>
								<p>
									Today, RugeroMed stands as a trusted
									partner to hospitals, clinics, and
									healthcare organizations across the
									country. We are proud to provide not
									just products, but solutions
									grounded in innovation, integrity,
									and a deep commitment to public
									health.
								</p>
								<p>
									Every item we deliver and every
									service we provide reflects our
									mission to strengthen Rwanda's
									healthcare infrastructure, empower
									medical professionals, and
									contribute to a healthier, more
									resilient future for our
									communities.
								</p>
							</div>
							<footer className="mt-6 text-right">
								<cite className="not-italic font-semibold text-gray-900">
									Patrick Higiro
									<address className="block not-italic text-gray-600">
										Founder & CEO, RugeroMed Ltd
									</address>
								</cite>
							</footer>
						</blockquote>
					</div>

					{/* Right Side – Mission, Vision, Values */}
					<div className="bg-rugero-primary p-6 rounded-2xl space-y-6">
						<div className="bg-rugero-muted p-6 rounded-t-2xl shadow-sm">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Our Mission
							</h3>
							<p className="text-gray-700">
								To become the leading East African
								company enabling modern healthcare to be
								availed at affordable price to
								healthcare providers. We are committed
								to: Conducting business with integrity,
								humility, fairness, and transparency.
							</p>
						</div>

						<div className="bg-rugero-muted p-6 rounded-none shadow-sm">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Our Vision
							</h3>
							<p className="text-gray-700">
								To be the leading force in transforming
								East African healthcare by providing
								innovative, accessible, and affordable
								medical solutions.
							</p>
							<p className="mt-2">
								We strive to empower healthcare
								providers with the latest advancements
								in technology, fostering enduring
								partnerships that ensure excellence in
								service and contribute significantly to
								the improvement of health outcomes
								across the region.
							</p>
							<p className="mt-2">
								Our commitment to integrity, innovation,
								and outstanding service sets the
								standard for quality and accessibility
								in healthcare.
							</p>
						</div>

						<div className="bg-rugero-muted p-6 rounded-b-2xl shadow-sm">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Our Values
							</h3>
							<p className="text-gray-700">
								Integrity, Innovation, Collaboration,
								and Compassion guide all that we do.
							</p>
						</div>
					</div>
				</div>
				<OurTeam />
			</section>
		</>
	);
};

export default AboutPage;
