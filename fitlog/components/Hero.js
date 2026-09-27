import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-[#121212] rounded-2xl border border-zinc-800/60 p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6 text-left">
                <span className="text-brand font-bold text-xs tracking-widest uppercase inline-block">
                    WORKOUT LIBRARY
                </span>
            <h1 className="font-['Bebas_Neue',sans-serif] text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                TRAIN WITH INTENT. LOG EVERY SET.
                </h1>  
             <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
             </p>
            <div>
                <Link
                href="#library"
                className="inline-block bg-brand hover:bg-brand/90 text-black font-extrabold text-sm px-6 py-3.5 rounded-md uppercase tracking-wider transition-all">
                    BROWSE WORKOUTS
                </Link>
                </div>
    </div>
    <div className="flex-1 w-full flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm md:max-w-md aspect-square">
            <Image
            src="/banner.png"
            alt="Fitlog Hero Illusatration"
            fill
            priority
            className="object-contain"/>

        </div>
        </div>
        </div>
        </section>
  );
}
