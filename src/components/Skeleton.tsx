import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SkeletonProps {
  className?: string;
  type?: 'card' | 'text' | 'title' | 'image' | 'list';
  key?: string | number;
}

export default function Skeleton({ className, type = 'text' }: SkeletonProps) {
  const variants = {
    card: "h-[400px] w-full tech-card border-[var(--border-color)]/20",
    text: "h-4 w-full rounded bg-[var(--border-color)]/10",
    title: "h-10 w-3/4 rounded bg-[var(--gold-accent)]/10",
    image: "w-full h-full bg-[var(--card-bg)]/20",
    list: "h-20 w-full rounded bg-[var(--border-color)]/5"
  };

  return (
    <div className={cn("relative overflow-hidden", variants[type], className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold-accent)]/10 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {type === 'card' && (
        <div className="p-8 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-1/4 h-4 bg-[var(--gold-accent)]/20 rounded" />
            <div className="w-3/4 h-8 bg-[var(--text-primary)]/10 rounded" />
            <div className="w-1/2 h-6 bg-[var(--text-secondary)]/10 rounded" />
          </div>
          <div className="space-y-3">
            <div className="w-full h-3 bg-[var(--border-color)]/10 rounded" />
            <div className="w-full h-3 bg-[var(--border-color)]/10 rounded" />
            <div className="w-2/3 h-3 bg-[var(--border-color)]/10 rounded" />
          </div>
          <div className="h-10 w-32 bg-[var(--gold-accent)]/10 rounded-full" />
        </div>
      )}
      {/* Industry 4.0 Technical Markings */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-20 border-t border-r border-[var(--gold-accent)]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-20 border-b border-l border-[var(--gold-accent)]" />
    </div>
  );
}
