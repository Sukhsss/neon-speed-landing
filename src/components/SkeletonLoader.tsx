import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-card/50",
        className
      )}
    />
  );
};

// Specific skeleton components for different sections
export const HeroSkeleton = () => (
  <div className="min-h-screen bg-background py-20 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-14 w-64" />
      </div>
      <Skeleton className="aspect-video w-full rounded-2xl" />
    </div>
  </div>
);

export const ProductGridSkeleton = () => (
  <div className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <Skeleton className="h-12 w-64 mx-auto mb-12" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 space-y-4">
            <Skeleton className="aspect-video w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TestimonialsSkeleton = () => (
  <div className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <Skeleton className="h-12 w-64 mx-auto mb-12" />
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 space-y-4">
            <Skeleton className="aspect-[9/16] w-full max-w-64 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skeleton;