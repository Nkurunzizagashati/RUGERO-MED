// src/components/OurTeam.jsx
import { motion } from 'framer-motion';

const teamMembers = [
	{
		id: 1,
		name: 'Patrick HIGIRO',
		role: 'CEO / Founder',
		imageUrl: '/assets/higiro.jpg',
	},
	{
		id: 2,
		name: 'Delphin Kalisa',
		role: 'Managing Director',
		imageUrl: '/assets/delphe.jpg',
	},
	{
		id: 3,
		name: 'Sandra Kwizera',
		role: 'Sales and Recovery Manager',
		imageUrl: '/assets/sandra.jpg',
	},
	{
		id: 4,
		name: 'Ines Iradukunda',
		role: 'Operations Manager',
		imageUrl: '/assets/ines.jpg',
	},
	{
		id: 5,
		name: ' Sergine Inema Buragatare',
		role: 'Office Manager',
		imageUrl: '/assets/inema.jpg',
	},
	{
		id: 6,
		name: ' Nouriath Umuhire',
		role: 'Biomedical engineer and Regulatory Officer',
		imageUrl: '/assets/umuhire.jpg',
	},
	{
		id: 7,
		name: 'Eduige Muhayuwera',
		role: 'Operations Coordinator',
		imageUrl: '/assets/eduige.jpg',
	},
	{
		id: 8,
		name: 'Pacifique HABINSHUTI',
		role: 'Logistics Officer / Driver',
		imageUrl: '/assets/pacifique.jpg',
	},
	{
		id: 9,
		name: 'PacifiquMugisha Irene HABINSHUTI',
		role: 'Driver',
		imageUrl: '/assets/irene.jpg',
	},
];

const OurTeam = () => {
	return (
		<section className="max-w-7xl mx-auto px-6 py-16 border-b">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-rugero-primary mb-4">
					Meet Our Team
				</h2>

				<div className="flex justify-center">
					<p className="text-rugero-muted/70 w-[70%]">
						Together, we are not just supplying medical
						products—we are building a stronger, safer, and
						more responsive healthcare future for our
						communities. Thank you for being part of the
						RugeroMed story.
					</p>
				</div>
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
							loading="lazy"
							decoding="async"
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
