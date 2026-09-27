'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav  className="w-full bg-[#0a0a0a] text-white border-b border-zinc-800/80 px-8 py-4 flex items-center justify-between">
      
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png"
          width={24}
          height={24}
          alt="Fitlog Logo"
          className="object-contain"  
          />
          <span className="font-extrabold text-xl tracking-wider text-white">FITLOG</span>
        </Link>


    <div className="flex items-center gap-2 bg-[#121212] p-1.5 rounded-full border border-zinc-800/50">
        <Link href="/" className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
            pathname === '/' 
              ? 'bg-[#1f2f09] text-[#a3e635]' 
              : 'text-zinc-400 hover:text-white'
          }`}>
          Workouts
        </Link>
  

         <Link href="/my-plan" className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
            pathname === '/my-plan' 
              ? 'bg-[#1f2f09] text-[#a3e635]' 
              : 'text-zinc-400 hover:text-white'
          }`}>
         <span>My Plan</span>
            </Link>
      </div>
      <div className="flex items-center gap-6"> 
          <Link href="/my-plan" className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white">
          <span>Plan</span>
          <span className="w-5 h-5 rounded-full bg-[#a3e635] text-black text-xs font-bold flex items-center justify-center">
            0
          </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white">
          <span> Saved</span>
          <span className="w-5 h-5 rounded-full bg-zinc-800 text-zinc-300 text-xs font-bold flex items-center justify-center border border-zinc-700">
            0
            </span>
            </Link>

          </div>
    </nav>
  );
}
