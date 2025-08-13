import emtel1 from '../../assets/emtel-1.jpg';
import emtel2 from '../../assets/emtel-2.jpg';
import emtel3 from '../../assets/emtel-3.jpg';
import emtel4 from '../../assets/emtel-4.jpg';
import emtel5 from '../../assets/emtel-5.jpg';
import emtel6 from '../../assets/emtel-6.jpg';
import emtel7 from '../../assets/emtel-7.jpg';
import emtel8 from '../../assets/emtel-8.jpg';
import emtel9 from '../../assets/emtel-9.jpg';
import emtel10 from '../../assets/emtel-10.jpg';
import emtel11 from '../../assets/emtel-11.jpg';
import emtel12 from '../../assets/emtel-12.jpg';

const logos = [
	emtel1,
	emtel2,
	emtel3,
	emtel4,
	emtel5,
	emtel6,
	emtel7,
	emtel8,
	emtel9,
	emtel10,
	emtel11,
	emtel12,
];

const Manufacturers = () => (
	<section className="py-16 bg-rugero-secondary">
		<div className="max-w-6xl mx-auto px-6 relative">
			<h2 className="text-3xl font-bold text-center text-rugero-textOnPrimary mb-10">
				Our Manufacturers
			</h2>
			<div className="overflow-hidden relative group">
				{/* Left fade */}
				<div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-rugero-secondary to-transparent pointer-events-none z-10" />

				{/* Right fade */}
				<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-rugero-secondary to-transparent pointer-events-none z-10" />

				<div
					className="flex whitespace-nowrap animate-scroll group-hover:[animation-play-state:paused]"
					style={{ animationDuration: '40s' }}
				>
					{[...logos, ...logos].map((src, i) => (
						<img
							key={i}
							src={src}
							alt={`Manufacturer ${i + 1}`}
							className="w-48 mx-6 grayscale hover:grayscale-0 transition duration-300"
						/>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default Manufacturers;
