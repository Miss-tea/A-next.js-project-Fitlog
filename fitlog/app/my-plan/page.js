'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePlan } from '@/context/PlanContext';

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved, toggleDone } = usePlan();
  const [activeTab, setActiveTab] = useState('plan'); // 'plan' | 'saved'
  const [sortBy, setSortBy] = useState('duration'); // 'duration' | 'calories' | 'rating' | 'name'
const totalExercises = plan.length;
  const totalMinutes = plan.reduce((acc, curr) => acc + (Number(curr.duration) || 0), 0);
  const totalCalories = plan.reduce((acc, curr) => acc + (Number(curr.caloriesBurned) || 0), 0);
 const currentList = activeTab === 'plan' ? plan : saved;

const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'duration') return (Number(a.duration) || 0) - (Number(b.duration) || 0);
    if (sortBy === 'calories') return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    if (sortBy === 'rating') return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 text-white min-h-[calc(100vh-160px)] flex flex-col justify-between">
      <div>
   <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
            My Plan
          </h1>
          <p className="text-zinc-400 text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">
              Exercises
            </span>
            <span className="text-4xl font-black text-[#c2f012]">{totalExercises}</span>
          </div>

          <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">
              Minutes
            </span>
            <span className="text-4xl font-black text-white">{totalMinutes}</span>
          </div>

          <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl p-6">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">
              Calories
            </span>
            <span className="text-4xl font-black text-white">{totalCalories}</span>
          </div>
        </div>
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex bg-[#121212] p-1 rounded-xl border border-zinc-800/80">
            <button
              onClick={() => setActiveTab('plan')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'plan'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'saved'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}>
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Sort By
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#121212] border border-zinc-800/80 text-white text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-[#c2f012] cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
{sortedList.length === 0 ? (
          <div className="bg-[#121212] border border-zinc-800/80 rounded-2xl px-6 py-12 text-center my-6">
            <h3 className="text-lg font-bold uppercase text-white mb-2 tracking-wider">
              Nothing Here Yet
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              You haven&apos;t added any workouts to your {activeTab === 'plan' ? 'plan' : 'saved items'} yet.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#c2f012] hover:bg-[#b0dc0f] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl tracking-wider transition-all">
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6 py-4">
            {sortedList.map((item) => (
              <div
                key={item.id}
                className={`bg-[#121212] border border-zinc-800/80 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${
                  item.done ? 'opacity-50 border-zinc-900' : ''
                }`}>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-24 h-20 bg-zinc-900 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                    <Image
                      src={item.image || '/banner.png'}
                      alt={item.name}
                      fill
                      className="object-cover"         />
                  </div>

                  <div className="min-w-0">
                    <h4
                      className={`text-base font-extrabold uppercase tracking-tight text-white mb-1 truncate ${
                        item.done ? 'line-through text-zinc-500' : ''
                      }`} >
                      {item.name}
                    </h4>
                    <p className="text-xs text-zinc-400 mb-2 truncate">
                      {item.equipment || 'No Equipment Needed'}
                    </p>

                    <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400">
                      <span>⏱ {item.duration} min</span>
                      <span>🔥 {item.caloriesBurned} kcal</span>
                      <span className="text-[#c2f012]">★ {item.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  {activeTab === 'plan' && (
                    <button
                      onClick={() => toggleDone(item.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        item.done
                          ? 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                          : 'bg-[#c2f012]/10 text-[#c2f012] border border-[#c2f012]/30 hover:bg-[#c2f012]/20'
                      }`}      >
                      {item.done ? 'Done ✓' : 'Mark as Done'}
                    </button>
                  )}

                  <Link
                    href={`/workout/${item.id}`}
                    className="bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl border border-zinc-700/60 transition-all">

                    View Details
                  </Link>
                  <button
                    onClick={() =>
                      activeTab === 'plan'
                        ? removeFromPlan(item.id): removeFromSaved(item.id)
                    }
                    className="text-zinc-500 hover:text-red-400 p-2 text-sm transition-colors cursor-pointer"
                    title="Remove" >
                    ✕
                  </button>
                </div>
                  </div>
            ))}
          </div>
           )}
         </div>
    </div>
  );
}