// src/components/news/NewsSkeleton.jsx
import { Skeleton } from '../ui/skeleton';

const NewsSkeleton = () => {
	return (
		<div className="bg-rugero-lightGray rounded-lg shadow-md overflow-hidden flex flex-col">
			<Skeleton className="w-full h-56" />{' '}
			{/* Image placeholder */}
			<div className="p-6 flex flex-col flex-1 space-y-3">
				<Skeleton className="h-6 w-3/4" /> {/* Title */}
				<Skeleton className="h-4 w-1/2" /> {/* Citation */}
				<Skeleton className="h-4 w-full" /> {/* Description */}
				<Skeleton className="h-4 w-1/4 mt-auto" />{' '}
				{/* Read More */}
			</div>
		</div>
	);
};

export default NewsSkeleton;
