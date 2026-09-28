'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePlan } from '@/context/PlanContext';
import Image from 'next/image';
export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="border-b border-zinc-800/80 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-wider text-white">
          <Image src="/logo.png"
                          width={24}
                          height={24}
                          alt="Fitlog Logo"
                          className="object-contain"  
                          />
                          <span className="font-extrabold text-xl tracking-wider text-white">FITLOG</span>
                      </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname === '/' ? 'text-[#c2f012]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
              pathname === '/my-plan' ? 'text-[#c2f012]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan?tab=plan"
            className="bg-[#c2f012] hover:bg-[#b0dc0f] text-black font-black text-xs uppercase px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all"
          >
            <span>Plan</span>
            <span className="bg-black text-[#c2f012] px-2 py-0.5 rounded-full text-[10px] font-extrabold">
              {plan?.length || 0}
            </span>
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="border border-zinc-700/80 hover:border-zinc-500 text-zinc-300 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all"
          >
            <span>Saved</span>
            <span className="bg-zinc-800 text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold">
              {saved?.length || 0}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}