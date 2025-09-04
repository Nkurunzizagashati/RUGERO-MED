import extractedImage from '../../assets/extracted-image-009.jpg';

const reasons = [
	{
		title: 'Certified & Trusted',
		description:
			'We work only with certified manufacturers and meet all international medical equipment standards.',
		icon: '✅',
	},
	{
		title: 'Expert Installation',
		description:
			'Our trained engineers ensure precise equipment setup, calibration, and staff training.',
		icon: '🧑‍🔧',
	},
	{
		title: 'Reliable Support',
		description:
			'We offer full after-sales support, maintenance, and emergency repairs to ensure uptime.',
		icon: '📞',
	},
	{
		title: 'Local & Global Reach',
		description:
			'We serve hospitals, clinics, and homes across Rwanda and the wider East African region.',
		icon: '🌍',
	},
];

const WhyChooseUs = () => {
	return (
		<section
			className="relative py-20 bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${extractedImage})`,
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

			<div className="relative z-10 px-4 max-w-7xl mx-auto text-white">
				<h2 className="text-3xl font-bold text-center mb-12">
					Why Choose Rugero Med?
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{reasons.map((reason, index) => (
						<div
							key={index}
							className="bg-white bg-opacity-10 border border-white/20 backdrop-blur rounded-xl p-6 shadow text-center hover:bg-opacity-20 transition duration-300"
						>
							<div className="text-4xl mb-4">
								{reason.icon}
							</div>
							<h3 className="text-lg font-semibold mb-2">
								{reason.title}
							</h3>
							<p className="text-sm text-white/80">
								{reason.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
