import Image from 'next/image';
import Link from 'next/link';

export default function WorkoutCard({ workout }) {
    const {
        id,
        name,
        image,
        muscleGroups = [],
        equipment,
        duration,
        caloriesBurned,
        rating,
    } = workout;
    return (
        <Link
        href={`/workout/${id}`}
      className="group bg-[#121212] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300 flex flex-col">
        <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
          <Image 
          src={image || '/banner.png'}
          alt = {name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"/>
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {muscleGroups.map((group, idx) => (
            <span
              key={idx}
              className="bg-brand text-black font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-md tracking-wider">
                {group}
                </span>
          )) }    

        
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1 justify-between gap-4">
            <div>
                <h3 className="font-extrabold text-lg text-white group-hover:text-brand transition-colors uppercase tracking-tight line-clamp-1">
                    {name}</h3>
            <p className="text-xs text-zinc-400 mt-1 font-medium">
                {equipment || 'Bodyweight'}
                </p>       

            </div>
        <div className="flex items-center justify-between text-zinc-400 pt-3 border-t border-zinc-800/60 font-medium">
           <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{duration || '15 mins'}</span>
        </div>    
        <div className="flex items-center gap-1">
            <span>🔥</span>
            <span>{caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1 text-brand font-bold">
            <span>★</span>
            <span>{rating}</span>
            </div>
        </div>

         </div>

    

      </Link>
        );
    }