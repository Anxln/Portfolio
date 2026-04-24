import { motion, AnimatePresence } from 'motion/react';
import { memo, useRef, useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import Skeleton from './Skeleton';

const ExperienceCard = memo(({ exp, i, isInternship, hoveredIdx, setHoveredIdx, experiencesCount, t }: any) => {
  const cardId = isInternship ? `intern-${i}` : `exp-${i}`;
  const uniqueIdx = isInternship ? experiencesCount + i : i;

  return (
    <motion.div
      key={cardId}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      onMouseEnter={() => setHoveredIdx(uniqueIdx)}
      onMouseLeave={() => setHoveredIdx(null)}
      whileHover="hover"
      className="relative grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-16 group"
    >
      <div className="relative">
        <div className="absolute right-[-62px] top-0 bottom-[-96px] w-[6px] hidden md:block z-0 pointer-events-none">
          <div className="w-full h-full bg-[#3d2b1f] rounded-full relative shadow-inner overflow-hidden border border-black/20">
             <div className="absolute inset-0 opacity-40" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.5) 5px, rgba(0,0,0,0.5) 10px)',
                 backgroundSize: '10px 10px'
               }} 
             />
             <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-black/40" />
          </div>

          <AnimatePresence>
            {hoveredIdx === uniqueIdx && (
              <motion.div 
                initial={{ top: "100%", opacity: 0 }}
                animate={{ top: "0%", opacity: 1 }}
                exit={{ top: "-20%", opacity: 0 }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut",
                  opacity: { duration: 0.3 }
                }}
                className="absolute left-1/2 -translate-x-1/2 -mt-6 z-10 flex flex-col items-center"
              >
                <motion.div 
                  animate={{ 
                    rotate: [-8, 8, -8],
                    x: [-3, 3, -3],
                    y: [0, -4, 0]
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full border-2 border-[var(--gold-accent)]/80 shadow-[0_0_20px_rgba(212,175,55,0.6)] overflow-hidden bg-[var(--bg)] hover:scale-125 transition-transform duration-200"
                >
                  <img 
                    src="/images/Climber.webp" 
                    alt="Climber" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e: any) => { e.target.src = '/images/main.webp' }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden mb-6 border border-[var(--gold-accent)]/30 relative">
          <motion.img 
            src={exp.image} 
            alt={exp.company} 
            loading="lazy"
            variants={{
              hover: { 
                scale: 1.15,
                filter: "grayscale(0)",
                transition: { duration: 0.3, ease: "easeOut" }
              }
            }}
            initial={{ filter: "grayscale(1)" }}
            className="w-full h-full object-cover transition-all duration-300 shadow-xl group-hover:shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-[16px] font-mono text-[var(--gold-accent)] mb-3 font-bold tracking-widest uppercase flex justify-between items-center">
          <span>{exp.period}</span>
          <span className="text-sm text-[var(--text-secondary)] border border-[var(--border-color)] px-3 py-1 rounded-full">{exp.location}</span>
        </div>
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <motion.h4 
            variants={{
              hover: { x: 5 }
            }}
            className="text-3xl font-bold text-[var(--gold-accent)] leading-tight transition-transform duration-300 heading-lg"
          >
            {exp.company}
          </motion.h4>
          {exp.website && (
            <a 
              href={exp.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--gold-accent)] hover:border-[var(--gold-accent)] transition-all"
              title={t('experience.visitWebsite')}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <div className="bg-[var(--card-bg)] p-10 border border-[var(--border-color)] group-hover:border-[var(--gold-accent)]/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-700 bg-gradient-to-br from-[var(--card-bg)] to-transparent tech-card">
        <h5 className="text-3xl font-bold mb-8 text-[var(--text-primary)] heading-lg">{exp.role}</h5>
        <ul className="space-y-6">
          {exp.description.map((item: string, idx: number) => (
            <li key={idx} className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed flex gap-4 content-text">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
});

export default function Experience() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const experiences = useMemo(() => t('experience.items', { returnObjects: true }) as any[], [t]);
  const internships = useMemo(() => t('experience.internships', { returnObjects: true }) as any[], [t]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-32 px-10 overflow-hidden relative">
      <div className="w-full">
        <div className="mb-20">
          <div className="eyebrow mb-4">{t('experience.eyebrow')}</div>
          <h3 className="text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-primary)] heading-lg">
            <span className="title-primary">Career</span> <span className="title-accent">Journey</span>
          </h3>
        </div>

        <div ref={containerRef} className="relative space-y-24">
          <div id="professional" className="scroll-mt-32 space-y-24">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-16">
                  <Skeleton type="card" className="aspect-video" />
                  <Skeleton type="card" />
                </div>
              ))
            ) : (
              experiences.map((exp, i) => (
                <ExperienceCard 
                  key={`exp-${i}`}
                  exp={exp}
                  i={i}
                  hoveredIdx={hoveredIdx}
                  setHoveredIdx={setHoveredIdx}
                  experiencesCount={experiences.length}
                  t={t}
                />
              ))
            )}
          </div>
          
          <div id="internships" className="pt-20 scroll-mt-32">
            <h4 className="text-4xl font-bold mb-16 font-display text-[var(--gold-accent)] uppercase tracking-[4px]">
              {t('experience.internshipsTitle')}
            </h4>
            <div className="space-y-24">
              {isLoading ? (
                Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-16">
                    <Skeleton type="card" className="aspect-video" />
                    <Skeleton type="card" />
                  </div>
                ))
              ) : (
                internships.map((exp, i) => (
                  <ExperienceCard 
                    key={`intern-${i}`}
                    exp={exp}
                    i={i}
                    isInternship={true}
                    hoveredIdx={hoveredIdx}
                    setHoveredIdx={setHoveredIdx}
                    experiencesCount={experiences.length}
                    t={t}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
