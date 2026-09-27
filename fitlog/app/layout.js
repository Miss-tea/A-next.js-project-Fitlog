import "./globals.css";
import Navbar from '@/components/Navbar';
import { PlanProvider } from "@/context/PlanContext";
import {Bebas_Neue } from 'next/font/google'
import Image from 'next/image';

const displayFont = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});
export const metadata = {
  title: 'FitLog',
  description: 'Workout Library & Daily Planner',
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className="{displayFont.variable}">  
      <body className="bg-black text-white min-h-screen">
        <PlanProvider>
        <Navbar />
        <main>{children}</main>
       
        <footer className="w-full border-t border-zinc-900 bg-black mt-20">
  <div className="max-w-[1280px] mx-auto py-16 px-6 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Image src="/logo.png"
                width={24}
                height={24}
                alt="Fitlog Logo"
                className="object-contain"  
                />
                <span className="font-extrabold text-xl tracking-wider text-white">FITLOG</span>
             </div>

    <p className="text-xs text-zinc-500 font-medium">
      © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>
  </div>
</footer>
</PlanProvider>
</body>
    </html>
  );
}
