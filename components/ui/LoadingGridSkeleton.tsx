type LoadingGridSkeletonProps = {
  count?: number
}

export function LoadingGridSkeleton({ count = 6 }: LoadingGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="h-4 w-1/3 rounded bg-white/10 mb-4" />
          <div className="h-6 w-3/4 rounded bg-white/10 mb-3" />
          <div className="h-4 w-full rounded bg-white/10 mb-2" />
          <div className="h-4 w-5/6 rounded bg-white/10" />
        </div>
      ))}
    </div>
  )
}
