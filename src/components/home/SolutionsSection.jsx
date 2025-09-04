const solutions = [
	{
		title: 'Hospital Equipment',
		description:
			'High-quality devices for diagnostics, treatment, and patient care in hospital settings.',
		icon: '🏥',
	},
	{
		title: 'Homecare Devices',
		description:
			'Portable and user-friendly medical tools designed for home-based care.',
		icon: '🏡',
	},
	{
		title: 'Installation & Maintenance',
		description:
			'Professional setup, calibration, and ongoing servicing of medical equipment.',
		icon: '🛠️',
	},
	{
		title: 'Medical IT Solutions',
		description:
			'Software and digital tools to streamline patient data, diagnostics, and operations.',
		icon: '💻',
	},
];

const SolutionsSection = () => {
	return (
		<section className="py-16 bg-rugero-secondary">
			<div className="px-4 max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-rugero-background">
					Our Solutions
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{solutions.map((item, index) => (
						<div
							key={index}
							className="bg-rugero-lightGray border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-300"
						>
							<div className="text-4xl mb-4">
								{item.icon}
							</div>
							<h3 className="text-xl font-semibold mb-2">
								{item.title}
							</h3>
							<p className="text-gray-600 text-sm">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SolutionsSection;
