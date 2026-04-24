import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

export default function CustomPointer() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance spring (near-zero lag but smooth)
  const springConfig = { damping: 40, stiffness: 450, mass: 0.1 };
  const sprX = useSpring(mouseX, springConfig);
  const sprY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is text-heavy or interactive
      const isInteraction = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteraction);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden mix-blend-difference md:block hidden">
      {/* Minimalistic Core Tip */}
      <motion.div
        style={{
          x: sprX,
          y: sprY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 4 : 1,
          width: isHovering ? 24 : 10,
          height: isHovering ? 24 : 10,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
        }}
        className="absolute bg-white rounded-full flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Inner Detail (Technical Point) */}
        <AnimatePresence>
          {!isHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-0.5 h-0.5 bg-black rounded-full"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Click Feedback Ripple */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            className="absolute w-8 h-8 rounded-full border border-white"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
