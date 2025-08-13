import bgImage from '../../assets/extracted-image-033.jpg';

const ContactUs = () => {
	return (
		<section
			id="contact"
			className="relative py-20 bg-center bg-cover"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>

			<div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-rugero-lightGray rounded-2xl shadow-lg p-8">
					{/* Left: Contact Info and Map */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bolb text-rugero-text mb-4">
							Get in touch
						</h3>

						<div className="flex items-start gap-3">
							<span className="text-2xl">📍</span>
							<p className="text-rugero-text">
								KG 607 ST, Rugando Kimihurura, Gasabo,
								Kigali - Rwanda
							</p>
						</div>

						<div className="flex items-start gap-3">
							<span className="text-2xl">📞</span>
							<p className="text-rugero-text">
								(+250) 787 541 188
							</p>
						</div>

						<div className="flex items-start gap-3">
							<span className="text-2xl">📧</span>
							<p className="text-rugero-text">
								info@rugeromed.com
							</p>
						</div>

						<iframe
							className="w-full h-60 rounded-lg border-none"
							title="Kigali Map"
							src="https://maps.google.com/maps?q=Kigali,%20Rwanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
							loading="lazy"
						></iframe>
					</div>

					{/* Right: Contact Form */}
					<form className="bg-rugero-secondary rounded-2xl p-6 space-y-4">
						<h3 className="text-xl font-semibold text-white">
							Send us a message
						</h3>
						<p className="text-sm text-gray-100">
							Our team is committed to providing
							exceptional customer service
						</p>

						<input
							type="text"
							placeholder="Name"
							required
							className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rugero-muted"
						/>
						<input
							type="email"
							placeholder="Email"
							required
							className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rugero-muted"
						/>
						<input
							type="text"
							placeholder="Subject"
							required
							className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rugero-muted"
						/>
						<textarea
							placeholder="Message"
							rows="4"
							required
							className="w-full px-4 py-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rugero-muted"
						></textarea>

						<button
							type="submit"
							className="w-full bg-rugero-primary hover:bg-rugero-green3 text-rugero-textOnPrimary font-semibold py-3 px-6 rounded-lg transition duration-300"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
