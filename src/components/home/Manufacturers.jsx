const emtel1 = '/assets/emtel-1.jpg';
const emtel2 = '/assets/emtel-2.jpg';
const emtel3 = '/assets/emtel-3.jpg';
const emtel4 = '/assets/emtel-4.jpg';
const emtel5 = '/assets/emtel-5.jpg';
const emtel6 = '/assets/emtel-6.jpg';
const emtel7 = '/assets/emtel-7.jpg';
const emtel8 = '/assets/emtel-8.jpg';
const emtel9 = '/assets/emtel-9.jpg';
const emtel10 = '/assets/emtel-10.jpg';
const emtel11 = '/assets/emtel-11.jpg';
const emtel12 = '/assets/emtel-12.jpg';

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
		<div className="px-4 py-16 max-w-7xl mx-auto relative border-b">
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
							className="w-48 mx-6"
						/>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default Manufacturers;
