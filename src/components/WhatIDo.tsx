import { motion } from 'motion/react';
import { Code2, Database, Cloud, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';

const icons = [Code2, Layers, Cloud, Database, Cpu];
const colors = ['text-blue-500', 'text-pink-500', 'text-cyan-500', 'text-orange-500', 'text-purple-500'];
const bgColors = ['bg-blue-500/10', 'bg-pink-500/10', 'bg-cyan-500/10', 'bg-orange-500/10', 'bg-purple-500/10'];
const images = [
  '/images/WID1.webp',
  '/images/WID2.webp',
  '/images/WID3.webp',
  '/images/WID4.webp',
  '/images/WID5.webp'
];

const ServiceCard = memo(({ service, i, Icon, color, bgColor, image, t }: any) => (
  <motion.div
    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    whileHover="hover"
    className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden tech-card hover:border-[var(--gold-accent)] transition-[border-color,transform] duration-500 will-change-transform transform-gpu"
  >
    <div className="h-[250px] lg:h-[450px] overflow-hidden relative border-r border-[var(--border-color)]/20">
      <motion.img 
        src={image} 
        alt={service.title} 
        loading="lazy"
        variants={{
          hover: { 
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" }
          }
        }}
        className="w-full h-full object-cover transition-all duration-300 shadow-xl group-hover:shadow-2xl"
        referrerPolicy="no-referrer"
      />
      {/* Schematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg)]/10" />
      <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-md rounded text-[10px] font-mono text-[var(--gold-accent)] uppercase tracking-widest border border-[var(--gold-accent)]/30 dark:border-[var(--gold-accent)]/50">
        MOD_TYPE: ARCH.0{i+1}
      </div>
    </div>

    <div className="p-10 lg:p-20 flex flex-col justify-center relative bg-[var(--card-bg)]">
      {/* Blueprint Corner Marks */}
      <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-[var(--muted)] opacity-30 dark:opacity-50">
        //SYSTEM_CORE
      </div>

      <div className="flex items-center gap-6 mb-8">
        <motion.div 
          className={`w-16 h-16 rounded-lg ${bgColor} backdrop-blur-md flex items-center justify-center border border-[var(--gold-accent)]/20 dark:border-[var(--gold-accent)]/40 shadow-2xl transition-all duration-500`}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </motion.div>
        <div className="h-px flex-1 bg-[var(--border-color)]/20" />
        <div className="text-[10px] font-mono text-[var(--gold-accent)] tracking-[3px] uppercase italic">
          Logic.Active
        </div>
      </div>

      <motion.h4 
        className="text-4xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)] transition-all duration-500 tracking-tight heading-lg"
      >
        <span className="title-primary">{service.title.split(' ')[0]}</span> <span className="title-accent">{service.title.split(' ').slice(1).join(' ')}</span>
      </motion.h4>
      <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed max-w-2xl content-text">
        {service.description}
      </p>
      
      <div className="mt-12 flex flex-wrap items-center gap-8">
        <Link to="/works" className="flex items-center gap-4 text-[var(--gold-accent)] font-bold text-xs uppercase tracking-[4px] group-hover:translate-x-4 transition-transform duration-500">
          <div className="w-12 h-px bg-[var(--gold-accent)]" />
          <span>{t('whatIDo.explore')}</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 bg-[var(--bg)] border border-[var(--border-color)] dark:border-[var(--border-color)]/60 rounded text-[9px] font-mono text-[var(--muted)]">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
          REF: 00x{i+1}
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 right-10 text-[100px] font-black text-[var(--gold-accent)]/10 dark:text-[var(--gold-accent)]/15 font-display select-none pointer-events-none transition-all duration-700"
      >
        ID_{i + 1}
      </motion.div>
    </div>
  </motion.div>
));

export default function WhatIDo() {
  const { t } = useTranslation();
  const services = useMemo(() => t('whatIDo.items', { returnObjects: true }) as any[], [t]);

  return (
    <section id="expertise" className="py-32 px-10 scroll-mt-32 overflow-hidden relative">
      <div className="w-full">
        <div className="mb-20">
          <div className="eyebrow mb-4">{t('whatIDo.eyebrow')}</div>
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)] heading-lg">
            <span className="title-primary">What</span> <span className="title-accent">I Do</span>
          </h3>
        </div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <ServiceCard 
              key={i}
              i={i}
              service={service}
              Icon={icons[i]}
              color={colors[i]}
              bgColor={bgColors[i]}
              image={images[i]}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
