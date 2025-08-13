const testimonials = [
	{
		name: 'Dr. Jean Uwimana',
		role: 'Director, Kigali Health Center',
		quote: 'Rugero Med delivered and installed our diagnostic equipment flawlessly. Their team was professional, efficient, and responsive throughout.',
	},
	{
		name: 'Nadine Umutoni',
		role: 'Head Nurse, Nyamata Clinic',
		quote: 'Thanks to Rugero Med’s homecare solutions, our patient monitoring process is now smoother and more reliable.',
	},
	{
		name: 'Eric Murenzi',
		role: 'Procurement Manager, Rwamagana Hospital',
		quote: 'We’ve worked with many suppliers, but Rugero Med stands out for its speed, support, and quality equipment.',
	},
];

const TestimonialsSection = () => {
	return (
		<section className="py-20 bg-rugero-secondary">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12 text-rugero-textOnPrimary">
					What Our Clients Say
				</h2>
				<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((item, index) => (
						<div
							key={index}
							className="bg-rugero-lightGray border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-300"
						>
							<p className="text-rugero-gray3 italic mb-4">
								"{item.quote}"
							</p>
							<div className="text-sm font-semibold text-rugero-gray5">
								{item.name}
							</div>
							<div className="text-xs text-gray-500">
								{item.role}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
