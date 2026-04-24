import Projects from '../components/Projects';
import { motion } from 'motion/react';
import { memo } from 'react';

const Works = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      <Projects />
    </motion.div>
  );
});

export default Works;
