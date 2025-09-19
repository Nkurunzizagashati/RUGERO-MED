// src/admin/components/SkeletonCard.jsx
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm space-y-3">
      {/* Image placeholder */}
      <Skeleton className="h-40 w-full rounded-xl" />

      {/* Title */}
      <Skeleton className="h-5 w-3/4" />

      {/* Description */}
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />

      {/* Footer actions */}
      <div className="flex justify-between mt-4">
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </div>
  );
}
