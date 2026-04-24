import Experience from '../components/Experience';
import { motion } from 'motion/react';
import { memo } from 'react';

const ExperiencePage = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Experience />
    </motion.div>
  );
});

export default ExperiencePage;
