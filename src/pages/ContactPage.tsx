import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { memo } from 'react';

const ContactPage = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <Contact />
    </motion.div>
  );
});

export default ContactPage;
