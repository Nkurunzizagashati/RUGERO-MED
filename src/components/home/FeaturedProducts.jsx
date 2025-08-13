import { Link } from 'react-router-dom';

const products = [
	{
		name: 'Digital X-Ray Machine',
		description:
			'Advanced imaging system with high-resolution output and low radiation exposure.',
		image: '/assets/optimized_xray.jpg',
	},
	{
		name: 'Patient Monitor',
		description:
			'Real-time monitoring of vital signs with easy-to-use interface and alarms.',
		image: '/assets/optimized_patient_monitor.jpg',
	},
	{
		name: 'Infusion Pump',
		description:
			'Precision-controlled fluid delivery system for hospitals and homecare.',
		image: '/assets/optimized_infusion_pump.jpg',
	},
	{
		name: 'ECG Machine',
		description:
			'Portable and high-accuracy ECG for clinical and emergency settings.',
		image: '/assets/optimized_ecg_machine.jpg',
	},
];

const FeaturedProducts = () => {
	return (
		<section className="py-20 bg-rugero-secondary">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12 text-rugero-textOnPrimary">
					Featured Products
				</h2>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{products.map((product, index) => (
						<div
							key={index}
							className="bg-rugero-lightGray border border-gray-200 rounded-xl shadow hover:shadow-md transition duration-300"
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-48 object-cover rounded-t-xl"
								loading="lazy"
							/>
							<div className="p-4">
								<h3 className="text-lg font-semibold mb-2">
									{product.name}
								</h3>
								<p className="text-sm text-gray-600">
									{product.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-12">
					<Link
						href="/products"
						className="inline-block bg-rugero-primary hover:bg-rugero-green3 text-rugero-textOnPrimary font-medium px-6 py-3 rounded-lg transition duration-300"
					>
						View All Products
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
