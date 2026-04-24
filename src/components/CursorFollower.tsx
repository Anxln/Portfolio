import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { absoluteMouseX, absoluteMouseY } from '../lib/motion';

export default function CursorFollower() {
  const springConfig = { damping: 35, stiffness: 500, mass: 0.1 };
  
  // Create 5 trailing points for sleek industry-standard performance (Reduced from 12 for lag optimization)
  const p0x = useSpring(absoluteMouseX, springConfig);
  const p0y = useSpring(absoluteMouseY, springConfig);
  const p1x = useSpring(p0x, springConfig);
  const p1y = useSpring(p0y, springConfig);
  const p2x = useSpring(p1x, springConfig);
  const p2y = useSpring(p1y, springConfig);
  const p3x = useSpring(p2x, springConfig);
  const p3y = useSpring(p2y, springConfig);
  const p4x = useSpring(p3x, springConfig);
  const p4y = useSpring(p3y, springConfig);

  const points = [
    { x: p0x, y: p0y }, { x: p1x, y: p1y }, { x: p2x, y: p2y }, 
    { x: p3x, y: p3y }, { x: p4x, y: p4y }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Logic for initial visibility and hover state only
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dynamic Serpentine Tail (Digital Dragon) */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] will-change-transform transform-gpu"
          style={{
            x: point.x,
            y: point.y,
            left: -5,
            top: -5,
            width: 10 - i * 1.5,
            height: 10 - i * 1.5,
            backgroundColor: 'var(--gold-accent)',
            opacity: Math.max(0.05, 0.4 - i * 0.08),
            scale: 1 - i * 0.1,
          }}
        />
      ))}

      {/* Main Cursor 'Head' */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-[var(--gold-accent)] rounded-full pointer-events-none z-[9999]"
        style={{
          x: points[0].x,
          y: points[0].y,
          left: -16,
          top: -16,
          scale: isHovering ? 1.4 : 1,
          opacity: 0.9,
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 450 }}
      />
    </>
  );
}
