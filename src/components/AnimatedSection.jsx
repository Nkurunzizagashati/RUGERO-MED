import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
			whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			style={{
				width: '100%',
				willChange: 'filter, opacity, transform',
			}}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
