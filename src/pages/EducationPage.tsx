import { motion } from 'motion/react';
import Education from '../components/Education';
import { memo } from 'react';

const EducationPage = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Education />
    </motion.div>
  );
});

export default EducationPage;
