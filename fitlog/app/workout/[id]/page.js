import Image from 'next/image';
import Link from 'next/link';

async function getWorkout(id) {
  try {

    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    if (!res.ok) return null;

    const workouts = await res.json();
    return workouts.find((item) => String(item.id) === String(id)) || null;
  } catch (error) {

    return null;
  }
}

export default async function WorkoutDetailPage({ params }) {
  const resolvedParams = await params;
  const workout = await getWorkout(resolvedParams.id);

  if (!workout) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-20 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Workout Not Found</h2>
        <p className="text-zinc-400 mb-6">
          We couldn't find the workout you were looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#c2f012] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl tracking-wider">

          Back to Workouts
        </Link>
      </div>
    );
  }

  const {
    name,
    image,
    muscleGroups = [],
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions = [],
  } = workout;

  const specs = [
    { label: 'EQUIPMENT', value: equipment },
    { label: 'DIFFICULTY', value: difficulty },
    { label: 'SETS', value: sets },
    { label: 'REPS', value: reps },
    { label: 'DURATION', value: `${duration} min` },
    { label: 'CALORIES', value: `${caloriesBurned} kcal` },
    { label: 'RATING', value: rating, isRating: true },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 text-white">
      <div className="flex flex-col md:flex-row gap-10 items-start">
 <div className="relative w-full md:w-[588px] aspect-[3/4] bg-[#121212] rounded-2xl overflow-hidden border border-zinc-800/80 shrink-0">
          <Image
            src={image || '/banner.png'}
            alt={name}
            fill
            priority
            className="object-cover"/>
        </div>
<div className="w-full space-y-6 flex-1 min-w-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
              {name}
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {muscleGroups.map((group, idx) => (
                <span
                  key={idx}
                  className="bg-[#c2f012] text-black font-extrabold text-[11px] uppercase px-3 py-1 rounded-md tracking-wider">

                  {group}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 divide-y divide-zinc-800/60 text-sm">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 text-xs">
                <span className="text-zinc-500 font-bold uppercase tracking-wider">
                  {spec.label}
                </span>
                <span
                  className={
                    spec.isRating
                      ? 'text-[#c2f012] font-bold'
                      : 'text-zinc-200 font-semibold'
                  }
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
          {instructions.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#c2f012]">
                Instructions
              </h3>
              <ol className="space-y-2.5 list-decimal list-inside text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {instructions.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="flex items-center gap-3 pt-2">
            <button className="bg-[#c2f012] hover:bg-[#b0dc0f] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
              <span>📋</span> Add to today&apos;s plan
            </button>
            <button className="border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
              <span>🔖</span> Save for later
            </button>
          </div>
           </div>
         </div>
    </div>
  );
}