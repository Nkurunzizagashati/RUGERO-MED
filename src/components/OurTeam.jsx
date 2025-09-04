// src/components/OurTeam.jsx
import { motion } from 'framer-motion';

const teamMembers = [
	{
		id: 1,
		name: 'Jane Doe',
		role: 'CEO & Founder',
		imageUrl: '/assets/extracted-image-040.jpg',
		bio: 'Visionary leader with 10+ years in the tech industry.',
	},
	{
		id: 2,
		name: 'John Smith',
		role: 'CTO',
		imageUrl: '/assets/extracted-image-041.jpg',
		bio: 'Tech strategist passionate about scalable software.',
	},
	{
		id: 3,
		name: 'Alice Brown',
		role: 'Product Manager',
		imageUrl: '/assets/extracted-image-042.jpg',
		bio: 'Focused on building products that users love.',
	},
	{
		id: 4,
		name: 'Michael Lee',
		role: 'Lead Developer',
		imageUrl: '/assets/extracted-image-043.jpg',
		bio: 'Full-stack engineer who loves problem-solving.',
	},
];

const OurTeam = () => {
	return (
		<section className="max-w-7xl mx-auto px-6 py-16">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-rugero-primary mb-4">
					Meet Our Team
				</h2>
				<p className="text-gray-600">
					Passionate people behind our success.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{teamMembers.map((member) => (
					<motion.div
						key={member.id}
						className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
						whileHover={{ scale: 1.05 }}
					>
						<img
							src={member.imageUrl}
							alt={member.name}
							className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
						/>
						<h3 className="text-lg font-semibold text-gray-800">
							{member.name}
						</h3>
						<p className="text-sm text-rugero-primary font-medium mb-2">
							{member.role}
						</p>
						<p className="text-sm text-gray-600">
							{member.bio}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default OurTeam;
