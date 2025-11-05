import { Star, BookOpen, Rocket } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f] via-[#0e2744] to-[#0a1a2f]" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-6">
          <Star className="w-4 h-4 text-yellow-400" />
          Elegant Blue-Gold English Letter Writing Module
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Master Formal & Informal Letters
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Learn tones, openings, purposes, closings, and practice exercises — in one beautiful, interactive module.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => onExplore('tones')} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-yellow-400 text-[#0a1a2f] font-semibold hover:bg-yellow-300 transition shadow">
            <BookOpen className="w-5 h-5" /> Explore Tones
          </button>
          <button onClick={() => onExplore('guide')} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
            <Rocket className="w-5 h-5 text-yellow-300" /> Quick Start Guide
          </button>
        </div>
      </div>
    </section>
  );
}
