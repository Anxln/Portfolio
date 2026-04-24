import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down at least 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-40 right-10 z-[100] w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)]",
            "flex items-center justify-center text-[var(--gold-accent)] hover:text-[var(--text-primary)] transition-all duration-300 group shadow-2xl"
          )}
          aria-label="Scroll to top"
        >
          {/* Rotating Industry Gear Ring on Hover */}
          <div className="absolute inset-[-4px] border border-dashed border-[var(--gold-accent)]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_10s_linear_infinite]" />
          
          <div className="relative flex flex-col items-center">
            <ArrowUp className="w-7 h-7 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute -bottom-1 text-[8px] font-mono tracking-widest opacity-0 group-hover:opacity-40 font-black uppercase transition-opacity whitespace-nowrap">
              TOP.SYS
            </div>
          </div>
          
          {/* Digital Reticle Markings */}
          <div className="absolute top-1/2 left-0 w-2 h-[1px] bg-[var(--gold-accent)]/30 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-2 h-[1px] bg-[var(--gold-accent)]/30 -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-[var(--gold-accent)]/30 -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-[1px] h-2 bg-[var(--gold-accent)]/30 -translate-x-1/2" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
