export default function Loading() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 text-white animate-pulse">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-[588px] aspect-[3/4] bg-zinc-900 rounded-2xl shrink-0" />
      <div className="w-full space-y-6 flex-1">
          <div className="h-10 bg-zinc-900 rounded-lg w-3/4" />
          <div className="h-4 bg-zinc-900 rounded w-full" />
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-zinc-900 rounded-md" />
            <div className="h-6 w-16 bg-zinc-900 rounded-md" />
          </div>
          <div className="h-64 bg-zinc-900 rounded-2xl w-full" />
        </div>  
        </div>
        </div>
  );

}