'use client';
import { usePlan } from '@/context/PlanContext';
export default function WorkoutActionButtons({ workout }) {
  const { addToPlan, addToSaved } = usePlan();
  return (
    <div className="flex items-center gap-3 pt-2">
      <button
        onClick={() => addToPlan(workout)}
        className="bg-[#c2f012] hover:bg-[#b0dc0f] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
            
        <span>📋</span> Add to today&apos;s plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="border border-zinc-800 hover:bg-zinc-800/60 text-zinc-300 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all">
        <span>🔖</span> Save for later
      </button>
    </div>
  );
}