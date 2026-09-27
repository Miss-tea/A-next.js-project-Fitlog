import Image from "next/image";
import Link from "next/link";
import {notFound} from 'next/navigation';

async function getWorkout(id) {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog`);

  if (!res.ok) return null;
  const workouts = await res.json();

  return workouts.find((item) => String(item.id) === String(id))||null;

}

export default async function WorkDetailPage({params}) {
    const resolvedParams = await params;
    const workout = await getWorkout(resolvedParams.id);    
    if (!workout) {notFound();}
    const {
        name,
        image,
        muscleGroups = [],
        equipment,
        difficulty,
        duration,
        caloriesBurned,
        sets,
        reps,
        rating,
        description,
        instructions =[],
    } = workout;
    return (
        <div className="max-w-[1232px] mx-auto px-6 py-10 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-[588px_1fr] gap-10 items-start">
            <div className="relative w-full aspect-[3/4] bg-[#121212] rounded-2xl overflow-hidden border border-zinc-800/80">
             <Image src={image || '/banner.png'} alt={name} fill className="object-cover"/>
                </div>
            
            <div className="space-y-6">
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
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Equipment
              </span>
              <span className="text-zinc-200 font-medium">{equipment}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Difficulty
              </span>
              <span className="text-zinc-200 font-medium">{difficulty}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Sets
              </span>
              <span className="text-zinc-200 font-medium">{sets}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Reps
              </span>
              <span className="text-zinc-200 font-medium">{reps}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Duration
              </span>
              <span className="text-zinc-200 font-medium">{duration} min</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Calories
              </span>
              <span className="text-zinc-200 font-medium">{caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase font-semibold text-xs tracking-wider">
                Rating
              </span>
              <span className="text-[#c2f012] font-bold">{rating}</span>
              </div>
          </div>
            {instructions.length > 0 && (
                    <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand">
                Instructions
              </h3> 
              <ol className="space-y-2 list-decimal list-inside text-sm text-zinc-300">
                {instructions.map((step,idx) => (
                    <li key={idx}>
                    <span>{step}</span>
                  </li>
                  ))}
              </ol>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-3 pt-4">
           
            <button className="bg-[#c2f012] hover:bg-[#b0dc0f] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
                <span>📋</span> Add to today's plan  </button>
             <button className="border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
              <span>🔖</span> Save for later
            </button>   
          </div>
          </div>
          </div>   
          </div>  
             );
    }

