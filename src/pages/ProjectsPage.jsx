import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const projects = [
	{
		title: 'Airvo 2 Humidifier Nasal High Flow system',
		description:
			'We provided hands-on training on the Airvo 2 Humidifier Nasal High Flow system, ensuring healthcare professionals are well-equipped to deliver effective respiratory support to patients ',
		images: [
			'/assets/rugero_med_projects4.jpg',
			'/assets/rugero_med_projects3.jpg',
		],
	},
	{
		title: 'Hospital Automation System',
		description:
			'We designed and deployed a hospital automation system to streamline operations and enhance patient care.',
		images: [
			'/assets/rugero_med_projects1.jpg',
			'/assets/rugero_med_projects2.jpg',
			'/assets/rugero_med_projects3.jpg',
		],
	},

	{
		title: 'Telemedicine Infrastructure',
		description:
			'We established a full telemedicine infrastructure connecting regional hospitals with specialists.',
		images: [
			'/assets/optimized_xray.jpg',
			'/assets/optimized_infusion_pump.jpg',
		],
	},
];

const fadeInLeft = {
	initial: { opacity: 0, x: -100 },
	whileInView: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};

const fadeInRight = {
	initial: { opacity: 0, x: 100 },
	whileInView: { opacity: 1, x: 0 },
	transition: { duration: 0.8 },
};

const ProjectsPage = () => {
	return (
		<>
			<SEO
				title="Our Projects"
				description="Explore our healthcare projects and innovative medical solutions at RugeroMed"
				keywords="medical projects, healthcare solutions, hospital equipment, medical technology, healthcare innovation"
			/>
			<section className="px-4 py-16 max-w-7xl mx-auto border-b">
				{/* Intro Section */}
				<div className="bg-rugero-lightGray py-20 px-6 md:text-center text-start">
					<h1 className="text-4xl font-bold mb-4">
						Transforming Healthcare Through Innovation
					</h1>
					<p className="text-lg max-w-3xl mx-auto text-gray-700 ">
						At RugeroMed, we go beyond product delivery—we
						offer comprehensive medical supply solutions
						that support healthcare providers in delivering
						exceptional care. Our services are built on a
						foundation of quality, precision, and
						professional expertise
					</p>
				</div>

				{/* Projects Grid */}
				{projects.map((project, index) => {
					const isEven = index % 2 === 0;

					return (
						<div
							key={index}
							className="grid md:grid-cols-2 w-full min-h-[24rem]"
						>
							{isEven ? (
								<>
									<motion.div
										{...fadeInLeft}
										viewport={{
											once: true,
											amount: 0.3,
										}}
										className="h-full"
									>
										<ProjectTextCard
											project={project}
										/>
									</motion.div>
									<motion.div
										{...fadeInRight}
										viewport={{
											once: true,
											amount: 0.3,
										}}
										className="h-full"
									>
										<ImageSlider
											images={project.images}
										/>
									</motion.div>
								</>
							) : (
								<>
									<motion.div
										{...fadeInLeft}
										viewport={{
											once: true,
											amount: 0.3,
										}}
										className="h-full"
									>
										<ImageSlider
											images={project.images}
										/>
									</motion.div>
									<motion.div
										{...fadeInRight}
										viewport={{
											once: true,
											amount: 0.3,
										}}
										className="h-full"
									>
										<ProjectTextCard
											project={project}
										/>
									</motion.div>
								</>
							)}
						</div>
					);
				})}
			</section>
		</>
	);
};

const ProjectTextCard = ({ project }) => (
	<div className="bg-rugero-secondary text-white p-8 flex flex-col justify-center h-full">
		<h2 className="text-2xl font-bold mb-2">{project.title}</h2>
		<p className="text-base text-white/90">{project.description}</p>
	</div>
);

const ImageSlider = ({ images }) => {
	const [index, setIndex] = useState(0);

	const nextImage = () => {
		setIndex((prev) => (prev + 1) % images.length);
	};

	return (
		<div
			className="relative h-full w-full max-h-96 overflow-hidden group cursor-pointer"
			onClick={nextImage}
		>
			<img
				src={images[index]}
				alt="project"
				className="object-cover w-full h-full max-h-96 transition duration-500"
			/>
			<div className="absolute bottom-2 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded">
				{index + 1} / {images.length}
			</div>
		</div>
	);
};

export default ProjectsPage;
