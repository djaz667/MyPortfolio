export default function Loading() {
  return (
    <div className="flex flex-col gap-12 pb-24 px-6 max-w-7xl mx-auto w-full pt-12 animate-pulse">
      {/* Skeleton Navigation */}
      <div className="w-32 h-6 bg-secondary rounded-full" />

      {/* Skeleton Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="w-24 h-4 bg-secondary rounded-full" />
            <div className="w-full h-12 bg-secondary rounded-xl" />
          </div>
          <div className="w-full h-24 bg-secondary rounded-xl" />
          
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-border/50">
            <div className="h-12 bg-secondary rounded-xl" />
            <div className="h-12 bg-secondary rounded-xl" />
          </div>
        </div>

        <div className="aspect-square lg:aspect-4/5 rounded-[2.5rem] bg-secondary" />
      </div>

      {/* Skeleton Content */}
      <div className="flex flex-col gap-8 mt-12">
        <div className="w-48 h-8 bg-secondary rounded-xl" />
        <div className="space-y-4">
          <div className="w-full h-4 bg-secondary rounded-full" />
          <div className="w-full h-4 bg-secondary rounded-full" />
          <div className="w-3/4 h-4 bg-secondary rounded-full" />
        </div>
      </div>
    </div>
  );
}
