import { motion } from 'motion/react';

export default function Logo({ className = "w-12 h-12", interactive = false }: { className?: string, interactive?: boolean }) {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={interactive ? { scale: 1.1, rotate: 5 } : {}}
      transition={{ duration: 0.5 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
        {/* Minimalist Premium Frame - Two Intersecting Lines */}
        <motion.path
          d="M20 20 L80 80 M80 20 L20 80"
          stroke="var(--gold-accent)"
          strokeWidth="0.5"
          className="opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        />
        
        {/* The Monogram - Intertwined A and N in a more abstract way */}
        <motion.path
          d="M30 70 L50 25 L70 70"
          stroke="var(--gold-accent)"
          strokeWidth="4"
          strokeLinecap="square"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "reverse"
          }}
        />
        
        <motion.path
          d="M30 70 L30 25 L70 70 L70 25"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="opacity-40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 1,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "reverse"
          }}
        />

        {/* Floating Accents */}
        <motion.rect
          x="48" y="15" width="4" height="4"
          fill="var(--gold-accent)"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ 
            opacity: [0, 1, 0],
            rotate: [45, 405],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
      
      {/* Premium Glow */}
      <motion.div 
        className="absolute inset-0 bg-[var(--gold-accent)] rounded-full blur-3xl opacity-5"
        animate={interactive ? {
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
