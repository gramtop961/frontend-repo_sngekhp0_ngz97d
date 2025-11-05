import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderHero from './components/HeaderHero';
import ToneGrid from './components/ToneGrid';
import ToneDetail from './components/ToneDetail';
import FooterCTA from './components/FooterCTA';

export default function App() {
  const [selectedTone, setSelectedTone] = useState(null);

  // Load Roboto Slab dynamically into document head
  useEffect(() => {
    const id = 'roboto-slab-font';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  const reset = () => setSelectedTone(null);

  return (
    <div className="min-h-screen bg-[#0b1b3f]">
      <HeaderHero onReset={reset} />

      <main id="tones" className="relative">
        <AnimatePresence mode="wait">
          {!selectedTone ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <ToneGrid onSelect={setSelectedTone} />
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <ToneDetail selected={selectedTone} onBack={reset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FooterCTA />
    </div>
  );
}
