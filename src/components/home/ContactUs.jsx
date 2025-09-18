const bgImage = '/assets/extracted-image-033.jpg';

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

			<div className="relative z-10 px-4 max-w-7xl mx-auto text-white">
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
								(+250) 791590051
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
							title="RugeroMed Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5173000000003!2d30.0917!3d-1.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76b8a1d8e1f%3A0x5f5f5f5f5f5f5f5f!2sKG%20607%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1620000000000!5m2!1sen!2srw"
							loading="lazy"
							allowFullScreen=""
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
