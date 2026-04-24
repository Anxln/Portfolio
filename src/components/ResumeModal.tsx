import { motion, AnimatePresence } from 'motion/react';
import { Download, X } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // macOS System Logic: Scroll Lock & Global UI cleanup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Hide Back-to-Top Button
      const scrollToTopBtn = document.querySelector('button[aria-label="Scroll to top"]');
      if (scrollToTopBtn) (scrollToTopBtn as HTMLElement).style.opacity = '0';
      if (scrollToTopBtn) (scrollToTopBtn as HTMLElement).style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      const scrollToTopBtn = document.querySelector('button[aria-label="Scroll to top"]');
      if (scrollToTopBtn) (scrollToTopBtn as HTMLElement).style.opacity = '';
      if (scrollToTopBtn) (scrollToTopBtn as HTMLElement).style.pointerEvents = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const scrollToTopBtn = document.querySelector('button[aria-label="Scroll to top"]');
      if (scrollToTopBtn) (scrollToTopBtn as HTMLElement).style.opacity = '';
      if (scrollToTopBtn) (scrollToTopBtn as HTMLElement).style.pointerEvents = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 40 }}
            transition={{ 
              type: "spring", 
              damping: 28, 
              stiffness: 260, 
              mass: 0.8 
            }}
            className="fixed inset-0 bg-[var(--bg)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* macOS Style Dynamic Header */}
            <div className="relative h-20 bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--border-color)] flex items-center justify-between px-8 z-30">
              <div className="flex items-center gap-6">
                <div className="px-3 py-1 bg-[var(--gold-accent)]/10 border border-[var(--gold-accent)]/30 rounded text-[10px] font-mono font-bold text-[var(--gold-accent)] uppercase tracking-[3px]">
                  Portfolio.CV.v4
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-sm font-bold text-[var(--text-primary)] tracking-tight">Ancelin_Nishanth_Resume.pdf</span>
                  <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest opacity-60">System_Authenticated_Secure</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="/resume.pdf"
                  download="Ancelin_Nishanth_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[var(--gold-accent)] text-white text-xs font-bold uppercase tracking-[2px] rounded-lg hover:scale-[1.05] active:scale-[0.95] transition-all no-underline shadow-xl"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
                
                <button 
                  onClick={onClose}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-[var(--text-primary)] group"
                  aria-label="Close Preview"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Seamless PDF Fullscreen Viewport */}
            <div className="flex-1 w-full bg-zinc-900 relative">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black/20 to-transparent z-10" />
              <iframe 
                src="/resume.pdf#toolbar=0&navpanes=0&view=FitH" 
                className="w-full h-full border-none"
                title="Resume Fullscreen View"
                loading="eager"
              />
            </div>
            
            {/* Minimal Engineering Overlay */}
            <div className="absolute bottom-8 left-8 pointer-events-none z-20">
               <div className="flex items-center gap-3 text-[9px] font-mono text-[var(--muted)] tracking-[4px] uppercase opacity-40">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Live_Documentation_Active
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
