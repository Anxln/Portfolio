import { motion } from 'motion/react';
import Logo from './Logo';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] cursor-pointer overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } }}
      onClick={onComplete}
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-accent)]/5 via-transparent to-[var(--gold-accent)]/5" />
      
      {/* Royal Frame Accents */}
      <div className="absolute inset-10 border border-[var(--gold-accent)]/10 pointer-events-none" />
      <div className="absolute inset-12 border border-[var(--gold-accent)]/5 pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-4xl w-full px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <Logo 
            className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_50px_rgba(212,175,55,0.15)]" 
            interactive={true}
          />
        </motion.div>
        
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-[80px] font-audiowide tracking-[0.1em] mb-4 leading-none uppercase text-gradient">
              Ancelin <span className="text-[var(--gold-accent)]">Nishanth</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0px" }}
            animate={{ opacity: 1, letterSpacing: "12px" }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-[var(--text-primary)] text-xs md:text-sm uppercase tracking-[12px] font-display mt-8 border-y border-[var(--gold-accent)]/30 py-4 inline-block px-12 font-bold backdrop-blur-sm bg-white/5"
          >
            Code Architect & Software Engineer<br/><br/>
            Automotive | Mechanical | .NET | D365
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-16 flex flex-col items-center gap-6"
      >
        <div className="w-12 h-px bg-[var(--gold-accent)]/30" />
        <span className="text-[var(--muted)] text-[11px] uppercase tracking-[12px] font-mono font-bold">
          Click to Enter
        </span>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[var(--gold-accent)]/20" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[var(--gold-accent)]/20" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[var(--gold-accent)]/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[var(--gold-accent)]/20" />
    </motion.div>
  );
}
