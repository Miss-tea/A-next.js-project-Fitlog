import Image from "next/image";
import Hero from '@/components/Hero';
import LibrarySection from '@/components/LibrarySection';
async function getWorkouts() {
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
  if (!res.ok){
    throw new Error('Failed to fetch workouts');
  }
  return res.json();
}
export default async function HomePage() {
 const workouts = await getWorkouts();
  return (
    <main className="min-h-screen bg-black text-white py-8">
      <Hero />
      <LibrarySection workouts={workouts} />
    </main>
  );
}
