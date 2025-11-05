import { Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeaderHero({ onReset }) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1b3f] via-[#0f255a] to-[#0b1b3f]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-[#d4af37]" />
          Mastering English Letters • Formal & Informal
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          style={{ fontFamily: '"Roboto Slab", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
        >
          Comprehensive Letter Writing Module
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80"
        >
          Tones • Openings • Purposes • Closings — disajikan menarik, kreatif, dan informatif.
          Klik tautan untuk menjelajah detail tiap bagian.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <HeroPill icon={<BookOpen className="h-5 w-5" />} title="Formal vs Informal" desc="Perbedaan nada & contoh frasa" />
          <HeroPill icon={<Sparkles className="h-5 w-5" />} title="Praktik Menulis" desc="Mulai dari pembukaan hingga penutup" />
          <button onClick={onReset} className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left text-white/90 transition hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">↻</div>
            <div>
              <div className="font-medium">Kembali ke Beranda</div>
              <div className="text-sm text-white/70">Reset pilihan dan jelajah ulang</div>
            </div>
          </button>
        </motion.div>
      </div>

      <Decoration />
    </header>
  );
}

function HeroPill({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left text-white/90">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
        {icon}
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-white/70">{desc}</div>
      </div>
    </div>
  );
}

function Decoration() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#d4af37]/10 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-2xl" />
    </div>
  );
}
