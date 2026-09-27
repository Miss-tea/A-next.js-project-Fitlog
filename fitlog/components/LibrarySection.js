'use client';
import WorkoutCard from '@/components/WorkoutCard';
import { useState } from 'react';

export default function LibrarySection({ workouts = []}) {
    const [search , setSearch] = useState('');
    const [sortBy, setSortBy] = useState('default');

    const filteredWorkouts = workouts.filter((workout) => 
        workout.name?.toLowerCase().includes(search.toLowerCase()) ||
        workout.equipment?.toLowerCase().includes(search.toLowerCase()) ||
        workout.muscleGroups?.some((group) => group.toLowerCase().includes(search.toLowerCase()))
    
);

    const sortedWorkouts =[...filteredWorkouts].sort((a, b) => {
         if (sortBy === 'name') {
             return a.name.localeCompare(b.name);
         }
         if (sortBy === 'rating') {
             return (b.rating || 0) - (a.rating || 0);
         }
         if (sortBy === 'duration') {
            return (parseInt(b.duration) || 0) - (parseInt(b.duration) || 0);
         }
         return 0;
        });
        return (
            <section id="library" className="max-w-[1232px] mx-auto p-14 scroll-mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                    <span className="text-brand font-bold text-xs tracking-widest uppercase block mb-1">
            THE LIBRARY
          </span>
           <h2 className="text-2xl font-black uppercase text-white tracking-tight">
            Browse Workouts
          </h2>
          </div>
          <div clasName="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input 
              type="text"
              placeholder="Search workouts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#121212] border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand transition-all placeholder:text-zinc-500 w-full sm:w-64"/>
             <select
             value={sortBy}
             onChange={(e) => setSortBy(e.target.value)} className="bg-[#121212] border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-brand transition-all cursor-pointer">
                
            <option value="default">Sort by: Default</option>
            <option value="name">Name (A-Z)</option>
            <option value="rating">Highest Rated</option>
            <option value="duration">Shortest Duration</option>
          </select>
          </div>
          </div>
          {sortedWorkouts.length > 0? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
          </div>
          ) : (
            <div className="text-center py-16 bg-[#121212] border border-zinc-800/80 rounded-2xl">
          <p className="text-zinc-400 text-sm">
            No workouts found matching &quot;{search}&quot;.
          </p>
          </div>
         )}
            </section>
        );
        }