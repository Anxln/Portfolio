import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import { motion } from 'motion/react';
import { memo } from 'react';

const Home = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Hero />
      <WhatIDo />
    </motion.div>
  );
});

export default Home;
