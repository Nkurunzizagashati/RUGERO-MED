// src/components/products/ProductSkeleton.jsx

import { Skeleton } from '../ui/skeleton';

const ProductSkeleton = () => {
	return (
		<div className="bg-rugero-lightGray rounded-xl shadow-md overflow-hidden">
			{/* Image placeholder */}
			<Skeleton className="w-full h-48" />
			<div className="p-4 space-y-3">
				{/* Title placeholder */}
				<Skeleton className="h-6 w-3/4" />
				{/* Category placeholder */}
				<Skeleton className="h-4 w-1/2" />
				{/* Description placeholder */}
				<Skeleton className="h-4 w-full" />
			</div>
		</div>
	);
};

export default ProductSkeleton;
