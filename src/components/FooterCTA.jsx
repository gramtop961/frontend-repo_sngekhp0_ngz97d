import { Rocket, ExternalLink } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="mx-auto mt-10 max-w-6xl px-6 pb-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-1 inline-flex items-center gap-2 text-sm text-[#d4af37]">
              <Rocket className="h-4 w-4" />
              Keep exploring
            </div>
            <h4 className="text-xl font-semibold" style={{ fontFamily: '"Roboto Slab", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
              Siap mendalami Opening, Purpose, dan Closing?
            </h4>
            <p className="mt-1 text-sm text-white/80">Gunakan struktur dan nada yang tepat untuk menulis surat yang efektif.</p>
          </div>
          <a
            href="#tones"
            className="inline-flex items-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f5e6b3] shadow hover:bg-[#d4af37]/20"
          >
            Kembali ke Tones <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/60">Designed for learners • Theme: Deep Blue — White — Gold</p>
    </footer>
  );
}
