import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-24 text-center text-white min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
      <span className="text-6xl mb-4">🏋️‍♂️</span>
      <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2">
        404 — Page Not Found
      </h1>
      <p className="text-zinc-400 text-sm max-w-md mb-8">
        The page or workout you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#c2f012] hover:bg-[#b0dc0f] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl tracking-wider transition-all">
        Back to Workouts
      </Link>
    </div>
  );
}