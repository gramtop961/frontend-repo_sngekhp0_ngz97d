import { BookOpen, Mail, Home, Sparkles } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0a1a2fcc]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div onClick={() => onNavigate(null)} className="flex items-center gap-2 cursor-pointer select-none">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <span className="font-semibold text-white tracking-wide">LetterLab</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <button onClick={() => onNavigate(null)} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <Home className="w-4 h-4" /> Home
          </button>
          <button onClick={() => onNavigate('tones')} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <BookOpen className="w-4 h-4" /> Tones
          </button>
          <button onClick={() => onNavigate('openings')} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <Mail className="w-4 h-4" /> Openings
          </button>
          <button onClick={() => onNavigate('exercises')} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
            <Sparkles className="w-4 h-4" /> Exercises
          </button>
        </nav>
        <a href="#start" onClick={(e)=>{e.preventDefault(); onNavigate('guide');}} className="text-xs sm:text-sm font-medium text-[#0a1a2f] bg-yellow-400 hover:bg-yellow-300 transition px-3 py-2 rounded-md">
          Quick Guide
        </a>
      </div>
    </header>
  );
}
