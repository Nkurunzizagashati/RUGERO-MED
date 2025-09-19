import { useRef } from 'react';
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

const Manufacturers = () => {
    const containerRef = useRef(null);

    const scrollByViewport = (dir = 1) => {
        const el = containerRef.current;
        if (!el) return;
        const amount = el.clientWidth * 0.9; // scroll ~90% of viewport width
        el.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    return (
        <section className="py-16 bg-rugero-secondary">
            <div className="px-4 py-16 max-w-7xl mx-auto relative border-b">
                <h2 className="text-3xl font-bold text-center text-rugero-textOnPrimary mb-10">
                    Our Manufacturers
                </h2>

                <div className="relative group">
                    {/* Left fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-rugero-secondary to-transparent z-10" />
                    {/* Right fade */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-rugero-secondary to-transparent z-10" />

                    {/* Controls */}
                    <button
                        type="button"
                        aria-label="Previous manufacturers"
                        onClick={() => scrollByViewport(-1)}
                        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next manufacturers"
                        onClick={() => scrollByViewport(1)}
                        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </button>

                    {/* Scrollable container (pauses animation on hover) */}
                    <div ref={containerRef} className="overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
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
            </div>
        </section>
    );
};

export default Manufacturers;
