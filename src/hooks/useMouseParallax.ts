import { motion } from 'motion/react';
import { useSpring, useTransform } from 'motion/react';
import { centeredMouseX, centeredMouseY } from '../lib/motion';

/**
 * A highly efficient hook for mouse-based parallax effects.
 * It uses shared global MotionValues to bypass React re-renders and eliminate redundant listeners.
 */
export function useMouseParallax(
  rangeX: [number, number] = [-20, 20],
  rangeY: [number, number] = [-20, 20],
  springConfig = { damping: 30, stiffness: 200 }
) {
  // Use springs on the global values for smooth movement per component
  const sprX = useSpring(centeredMouseX, springConfig);
  const sprY = useSpring(centeredMouseY, springConfig);

  const x = useTransform(sprX, [-500, 500], rangeX);
  const y = useTransform(sprY, [-500, 500], rangeY);

  return { x, y };
}
