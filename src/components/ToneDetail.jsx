import { motion, AnimatePresence } from 'framer-motion';
import { Info, Quote, ArrowLeft } from 'lucide-react';

const CONTENT = {
  professional: {
    title: 'Formal • Professional / Neutral Tone',
    characteristics: ['Polite', 'Respectful', 'Objective', 'Clear'],
    usage: ['Job applications', 'Business correspondence', 'Official requests'],
    phrases: [
      'I am writing to inquire about...',
      'I would appreciate your consideration of...',
      'Thank you for your attention to this matter.',
    ],
  },
  persuasive: {
    title: 'Formal • Persuasive / Assertive Tone',
    characteristics: ['Confident', 'Convincing', 'Strong but respectful'],
    usage: ['Proposals', 'Recommendations', 'Sales letters'],
    phrases: [
      'I strongly recommend that...',
      'The evidence clearly demonstrates...',
      'This opportunity presents significant advantages...',
    ],
  },
  apologetic: {
    title: 'Formal • Apologetic / Conciliatory Tone',
    characteristics: ['Regretful', 'Understanding', 'Solution-focused'],
    usage: ['Complaint responses', 'Apology letters', 'Conflict resolution'],
    phrases: [
      'We sincerely apologize for any inconvenience caused...',
      'I deeply regret that...',
      'Please accept our heartfelt apologies...',
    ],
  },
  appreciative: {
    title: 'Formal • Appreciative / Grateful Tone',
    characteristics: ['Thankful', 'Warm yet professional', 'Acknowledging'],
    usage: ['Thank you letters', 'Recognition letters', 'Acknowledgments'],
    phrases: [
      'I am truly grateful for...',
      'Your contribution has been invaluable...',
      'We greatly appreciate your continued support...',
    ],
  },
  friendly: {
    title: 'Informal • Friendly / Casual Tone',
    characteristics: ['Warm', 'Relaxed', 'Conversational'],
    usage: ['Letters to friends', 'Casual acquaintances'],
    phrases: [
      "Hey! How's it going?",
      "I've been meaning to tell you...",
      "You won't believe what happened!",
    ],
  },
  excited: {
    title: 'Informal • Excited / Enthusiastic Tone',
    characteristics: ['Energetic', 'Joyful', 'Animated'],
    usage: ['Sharing good news', 'Invitations', 'Celebrations'],
    phrases: [
      "I'm so thrilled to share...",
      'This is incredible news!',
      "I can't wait for you to hear about...",
    ],
  },
  supportive: {
    title: 'Informal • Sympathetic / Supportive Tone',
    characteristics: ['Caring', 'Understanding', 'Comforting'],
    usage: ['Condolence letters', 'Support during difficult times'],
    phrases: [
      'I was so sorry to hear about...',
      "You're in my thoughts during this difficult time...",
      "I'm here for you whenever you need me...",
    ],
  },
  humorous: {
    title: 'Informal • Humorous / Playful Tone',
    characteristics: ['Light-hearted', 'Witty', 'Fun'],
    usage: ['Close friends', 'Casual updates'],
    phrases: [
      "You're not going to believe this crazy story...",
      'Remember when we thought we were cool? Well...',
      'So there I was, trying not to embarrass myself...',
    ],
  },
};

export default function ToneDetail({ selected, onBack }) {
  const data = CONTENT[selected];
  return (
    <AnimatePresence mode="wait">
      {data && (
        <motion.section
          key={selected}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl px-6 py-8"
        >
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 text-[#d4af37]" /> Kembali
          </button>

          <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: '"Roboto Slab", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
            {data.title}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card title="Characteristics" items={data.characteristics} />
            <Card title="When to use" items={data.usage} />
            <Examples phrases={data.phrases} />
          </div>

          <div className="mt-8 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 p-4 text-[#f5e6b3]">
            Tip: Sesuaikan nada dengan hubungan Anda dengan penerima dan tujuan surat.
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="mb-2 flex items-center gap-2 text-sm text-[#d4af37]">
        <Info className="h-4 w-4" />
        <span className="font-medium">{title}</span>
      </div>
      <ul className="list-disc space-y-1 pl-5 text-sm text-white/90">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Examples({ phrases }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="mb-2 flex items-center gap-2 text-sm text-[#d4af37]">
        <Quote className="h-4 w-4" />
        <span className="font-medium">Example phrases</span>
      </div>
      <ul className="space-y-2">
        {phrases.map((p, i) => (
          <li key={i} className="rounded-lg bg-white/5 p-3 text-sm text-white/90">
            “{p}”
          </li>
        ))}
      </ul>
    </div>
  );
}
