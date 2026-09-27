import Image from "next/image";
import Hero from '@/components/Hero';
export default async function HomePage() {
 
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Hero/>
        <section id="library" className="scroll-mt-8">
           <h2 className="text-brand font-bold text-xs tracking-widest uppercase mb-6">
            THE LIBRARY
           </h2>

        </section>
        </div>
  
  );
}
