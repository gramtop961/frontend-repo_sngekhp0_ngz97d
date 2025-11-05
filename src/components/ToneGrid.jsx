import { Mail, ThumbsUp, HeartHandshake, Megaphone, Smile, PartyPopper, HelpingHand, Laugh } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 'professional',
    title: 'Formal • Professional/Neutral',
    color: 'from-[#0f255a] to-[#132b6f]',
    icon: Mail,
    type: 'formal',
  },
  {
    id: 'persuasive',
    title: 'Formal • Persuasive/Assertive',
    color: 'from-[#0f255a] to-[#1b3a8a]',
    icon: Megaphone,
    type: 'formal',
  },
  {
    id: 'apologetic',
    title: 'Formal • Apologetic/Conciliatory',
    color: 'from-[#0f255a] to-[#27459b]',
    icon: HeartHandshake,
    type: 'formal',
  },
  {
    id: 'appreciative',
    title: 'Formal • Appreciative/Grateful',
    color: 'from-[#0f255a] to-[#3152b0]',
    icon: ThumbsUp,
    type: 'formal',
  },
  {
    id: 'friendly',
    title: 'Informal • Friendly/Casual',
    color: 'from-[#0b1b3f] to-[#0f255a]',
    icon: Smile,
    type: 'informal',
  },
  {
    id: 'excited',
    title: 'Informal • Excited/Enthusiastic',
    color: 'from-[#0b1b3f] to-[#15306b]',
    icon: PartyPopper,
    type: 'informal',
  },
  {
    id: 'supportive',
    title: 'Informal • Sympathetic/Supportive',
    color: 'from-[#0b1b3f] to-[#19377a]',
    icon: HelpingHand,
    type: 'informal',
  },
  {
    id: 'humorous',
    title: 'Informal • Humorous/Playful',
    color: 'from-[#0b1b3f] to-[#1e4190]',
    icon: Laugh,
    type: 'informal',
  },
];

export default function ToneGrid({ onSelect }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white" style={{ fontFamily: '"Roboto Slab", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          Part 1 • Tone Variations
        </h2>
        <span className="rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs text-[#d4af37]">8 Tones</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => onSelect(c.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-4 text-left text-white shadow-lg`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/15 text-[#d4af37]">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-white/70">{c.type}</div>
                <div className="mt-0.5 text-sm font-medium leading-snug">{c.title}</div>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-xs text-[#d4af37] decoration-[#d4af37]/60 underline-offset-4 group-hover:underline">
              Lihat deskripsi <span aria-hidden>→</span>
            </span>
            <GradientGlow />
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function GradientGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#d4af37]/20 blur-2xl" />
  );
}
