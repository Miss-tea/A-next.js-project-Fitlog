'use client';

import Link from 'next/link';
import { usePlan } from '@/context/PlanContext';
import Image from 'next/image';
export default function Navbar() {
  const { plan, saved } = usePlan();

  return (
    <header className="w-full border-b border-zinc-900 bg-black sticky top-0 z-40">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png"
                          width={24}
                          height={24}
                          alt="Fitlog Logo"
                          className="object-contain"  
                          />
                          <span className="font-extrabold text-xl tracking-wider text-white">FITLOG</span>
                    </Link>

        <nav className="flex items-center bg-zinc-900/80 p-1 rounded-full border border-zinc-800">
          <Link
            href="/"
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors">
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors">
            My Plan
          </Link>
        </nav>
 <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2 text-zinc-300">
            <span>Plan</span>
            <span className="bg-[#c2f012] text-black w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[11px]">
              {plan.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-300">
            <span>Saved</span>
            <span className="bg-zinc-800 text-zinc-300 w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[11px]">
              {saved.length}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}