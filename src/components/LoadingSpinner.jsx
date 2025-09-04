const LoadingSpinner = () => {
	return (
		<div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-rugero-secondary to-rugero-gray3 overflow-hidden font-sans">
			{/* Background particles */}
			<div className="absolute inset-0 pointer-events-none -z-10">
				<div
					className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-30 animate-float"
					style={{
						top: '10%',
						left: '10%',
						animationDelay: '0s',
					}}
				></div>
				<div
					className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-30 animate-float"
					style={{
						top: '20%',
						right: '20%',
						animationDelay: '1s',
					}}
				></div>
				<div
					className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-30 animate-float"
					style={{
						bottom: '30%',
						left: '30%',
						animationDelay: '2s',
					}}
				></div>
				<div
					className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-30 animate-float"
					style={{
						bottom: '10%',
						right: '10%',
						animationDelay: '3s',
					}}
				></div>
				<div
					className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-30 animate-float"
					style={{
						top: '50%',
						left: '5%',
						animationDelay: '4s',
					}}
				></div>
				<div
					className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-30 animate-float"
					style={{
						top: '80%',
						right: '15%',
						animationDelay: '5s',
					}}
				></div>
			</div>

			{/* Loader */}
			<div className="flex flex-col items-center gap-5">
				<div className="relative w-20 h-20 md:w-15 md:h-15">
					{/* Rings */}
					<div className="absolute w-full h-full rounded-full border-4 border-t-emerald-500 border-r-emerald-400 animate-spin"></div>
					<div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border-3 border-t-emerald-400 border-r-emerald-300 animate-spin-reverse"></div>
					<div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 rounded-full border-2 border-t-emerald-600 border-r-emerald-700 animate-spin"></div>

					{/* Dots */}
					<div className="absolute inset-0 animate-rotate">
						<div
							className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-md animate-pulse"
							style={{
								top: 0,
								left: '50%',
								transform: 'translateX(-50%)',
								animationDelay: '0s',
							}}
						></div>
						<div
							className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-md animate-pulse"
							style={{
								top: '50%',
								right: 0,
								transform: 'translateY(-50%)',
								animationDelay: '0.25s',
							}}
						></div>
						<div
							className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-md animate-pulse"
							style={{
								bottom: 0,
								left: '50%',
								transform: 'translateX(-50%)',
								animationDelay: '0.5s',
							}}
						></div>
						<div
							className="absolute w-2 h-2 bg-emerald-500 rounded-full shadow-md animate-pulse"
							style={{
								top: '50%',
								left: 0,
								transform: 'translateY(-50%)',
								animationDelay: '0.75s',
							}}
						></div>
					</div>
				</div>

				{/* Loading Text */}
				<div className="text-emerald-500 text-lg font-medium tracking-widest animate-glow">
					LOADING
				</div>

				{/* Loading Progress */}
				<div className="relative w-30 h-1 bg-emerald-200 rounded overflow-hidden">
					<div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-loading-bar"></div>
				</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
