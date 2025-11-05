import { BookOpen, Mail, Scroll, Heart, PenTool, Sparkles } from 'lucide-react';

const items = [
  { id: 'tones', title: 'Tone Variations', desc: 'Formal vs informal tones with examples', Icon: Sparkles },
  { id: 'openings', title: 'Opening Variations', desc: 'Choose the right opening line', Icon: Mail },
  { id: 'purposes', title: 'Purposes & Samples', desc: 'Requests, complaints, invitations, thanks, apologies', Icon: Scroll },
  { id: 'closings', title: 'Closings', desc: 'Finish strong with proper sign-offs', Icon: Heart },
  { id: 'exercises', title: 'Practice', desc: 'Quick exercises with answers', Icon: PenTool },
  { id: 'guide', title: 'Quick Guide', desc: 'Decision tree and essentials', Icon: BookOpen },
];

export default function SectionNav({ onNavigate }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore the Module</h2>
      <p className="text-white/70 mt-2">Tap a card to dive into a specific topic. Smooth transitions guide your learning.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ id, title, desc, Icon }) => (
          <button key={id} onClick={() => onNavigate(id)} className="group text-left rounded-xl p-5 bg-white/5 hover:bg-white/10 border border-white/10 transition shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-400/20 border border-yellow-400/30">
                <Icon className="w-5 h-5 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="text-white/70 mt-2 text-sm">{desc}</p>
            <span className="inline-block mt-3 text-yellow-300 text-sm group-hover:translate-x-1 transition">Learn more →</span>
          </button>
        ))}
      </div>
    </section>
  );
}
