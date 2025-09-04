import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
	{ label: 'Satisfied Clients', value: '100+' },
	{ label: 'Successful Projects', value: '50+' },
	{ label: 'Years of Experience', value: '10+' },
	{ label: 'Countries Served', value: '5+' },
];

const fadeLeft = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1 },
	},
};

const fadeRight = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1 },
	},
};

const HeroSection = () => {
	return (
		<section className="relative h-[80vh] flex items-center overflow-hidden">
			{/* Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source
					src="/assets/medical_video_4.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />

			{/* Content */}
			<div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full px-4 max-w-7xl mx-auto">
				{/* Left - Text */}
				<motion.div
					className="text-white text-left md:w-1/2"
					initial="hidden"
					animate="visible"
					variants={fadeLeft}
				>
					<h1 className="text-4xl sm:text-5xl font-bold mb-6">
						Empowering Healthcare Excellence
					</h1>
					<p className="text-lg sm:text-xl mb-8 text-rugero-muted">
						We design, supply, and install advanced medical
						equipment for hospitals, clinics, and homecare.
					</p>
					<Link
						to="/products"
						className="inline-block bg-rugero-primary hover:bg-rugero-green3 text-rugero-textOnPrimary font-medium px-6 py-3 rounded-lg transition duration-300"
					>
						Explore Our Solutions
					</Link>
				</motion.div>

				{/* Right - Stats Cards */}
				<motion.div
					className="grid grid-cols-2 gap-4 mt-10 md:mt-0 md:ml-10 md:w-1/2"
					initial="hidden"
					animate="visible"
					variants={fadeRight}
				>
					{stats.map((stat, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center"
						>
							<h2 className="text-3xl font-bold mb-2">
								{stat.value}
							</h2>
							<p className="text-sm uppercase tracking-wide">
								{stat.label}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
