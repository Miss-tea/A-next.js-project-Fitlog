export default function Loading() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 text-white animate-pulse">
      <div className="flex flex-col md:flex-row gap-10 items-start">
       <div className="w-full md:w-[588px] aspect-[3/4] bg-zinc-900 rounded-2xl shrink-0" />
 <div className="w-full space-y-6 flex-1">
          <div className="h-10 bg-zinc-900 rounded-xl w-3/4" />
          <div className="h-16 bg-zinc-900 rounded-xl w-full" />
          <div className="h-48 bg-zinc-900 rounded-2xl w-full" />
          <div className="h-12 bg-zinc-900 rounded-xl w-1/2" />
        </div>
      </div>
    </div>
  );
}