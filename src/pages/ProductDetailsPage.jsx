// src/pages/ProductDetailsPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const dummyProducts = [
	{
		id: 1,
		name: 'Digital X-ray Machine',
		category: 'Radiology',
		description:
			'High-resolution digital X-ray imaging machine for hospitals.',
		image: '/assets/optimized_xray.jpg',
	},
	{
		id: 2,
		name: 'Ultrasound Scanner',
		category: 'Radiology',
		description: 'Portable and high-quality ultrasound scanner.',
		image: '/assets/optimized_patient_monitor.jpg',
	},
	{
		id: 3,
		name: 'Hospital Bed',
		category: 'Furniture',
		description: 'Adjustable hospital bed with safety side rails.',
		image: '/assets/optimized_ecg_machine.jpg',
	},
];

const ProductDetailsPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		// Simulate fetching the product by ID
		const found = dummyProducts.find((p) => p.id === Number(id));
		setProduct(found);
	}, [id]);

	if (!product) {
		return (
			<div className="p-8 pt-20 text-center text-gray-500">
				<h2 className="text-2xl font-semibold">
					Product Not Found
				</h2>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto p-6 pt-11">
			<img
				src={product.image}
				alt={product.name}
				className="w-full h-96 object-cover rounded-lg mb-6 shadow"
			/>
			<h1 className="text-3xl font-bold text-rugero-primary mb-2">
				{product.name}
			</h1>

			<span className="flex italic font-semibold gap-2">
				Category:
				<span className="inline-block bg-rugero-secondary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4">
					{product.category}
				</span>
			</span>

			<p className="text-lg leading-relaxed text-rugero-text">
				{product.description}
			</p>
		</div>
	);
};

export default ProductDetailsPage;
