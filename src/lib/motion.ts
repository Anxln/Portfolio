import { motionValue } from 'motion/react';

// Singletons to prevent redundant listeners and sync issues
export const absoluteMouseX = motionValue(0);
export const absoluteMouseY = motionValue(0);
export const centeredMouseX = motionValue(0);
export const centeredMouseY = motionValue(0);

if (typeof window !== 'undefined') {
  const handleMouseMove = (e: MouseEvent) => {
    absoluteMouseX.set(e.clientX);
    absoluteMouseY.set(e.clientY);
    centeredMouseX.set(e.clientX - window.innerWidth / 2);
    centeredMouseY.set(e.clientY - window.innerHeight / 2);
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
}
