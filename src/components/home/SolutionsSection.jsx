const solutions = [
	{
		title: 'Medical Equipment & Procurement',
		description:
			'We help hospitals and clinics acquire advanced medical devices, tailored to their specific needs and budgets. From diagnostic tools to monitoring systems, we identify and deliver best-in-class solutions from leading global manufacturers',
		icon: '🏥', // Medical equipment
	},
	{
		title: 'On-Site Technical Support & Training',
		description:
			'We offer staff training and hands-on technical support for all installed  equipment. Our aim is to empower  healthcare professionals to use devices  confidently and effectively from day one',
		icon: '👨‍🏫', // Training and support
	},
	{
		title: 'Supply of Medical & Surgical Consumables',
		description:
			'We supply a wide range of high-quality consumables, including syringes, gloves, surgical gowns, disinfectants, and patient care items. All products are sourced from trusted manufacturers and meet global safety and quality standards. ',
		icon: '💉', // Medical supplies
	},
	{
		title: ' Installation of Medical Equipment',
		description:
			' We don’t just deliver—we install. Our technical team ensures that every piece of  equipment is installed correctly, tested  thoroughly, and ready for immediate use.  For example, our successful setup of the  ENT Otopront System at RMH is a  testament to our hands-on support..',
		icon: '🔧', // Installation
	},
	{
		title: 'Preventive Maintenance & Repair',
		description:
			' RugeroMed provides routine equipment checkups, calibration, and maintenance services to ensure ongoing safety and  performance. We also offer quick-response repair services to minimize downtime',
		icon: '💻',
	},
];

const SolutionsSection = () => {
	return (
		<section className="py-16 bg-rugero-secondary" id="solutions">
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
