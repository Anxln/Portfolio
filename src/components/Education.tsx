import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, BookOpen, School, ExternalLink } from 'lucide-react';
import { useState, memo, useMemo, useEffect } from 'react';
import { cn } from '../lib/utils';
import Skeleton from './Skeleton';

const icons: Record<string, any> = {
  masters: GraduationCap,
  bachelors: BookOpen,
  diploma: Award,
  hsc: School,
  sslc: School
};

const EduCard = memo(({ edu, i, expandedId, setExpandedId, t }: any) => {
  const Icon = icons[edu.type];
  const isEven = i % 2 === 0;
  const isExpanded = expandedId === edu.type;

  return (
    <motion.div 
      id={edu.type}
      className="relative group/edu scroll-mt-32 will-change-transform"
      whileHover="hover"
    >
      <motion.div 
        variants={{
          hover: { 
            scale: 1.2,
            rotate: edu.type === 'masters' ? [0, -15, 15, 0] : (edu.type === 'bachelors' ? 360 : 15),
            y: [0, -8, 0],
            transition: { duration: 0.5, rotate: { duration: edu.type === 'bachelors' ? 0.8 : 0.4 } }
          }
        }}
        className="absolute left-6 md:left-1/2 top-10 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--bg)] border-2 border-[var(--gold-accent)] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform duration-300"
      >
        <Icon size={24} className="text-[var(--gold-accent)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex flex-col md:flex-row items-start gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        <div className="w-full md:w-1/2 pl-16 md:pl-0 relative">
          <div className="bg-[var(--card-bg)] border border-[var(--gold-accent)]/20 overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover/edu:border-[var(--gold-accent)]/40 relative tech-card">
            <div className="h-[200px] overflow-hidden relative">
              <motion.img 
                src={edu.image} 
                alt={edu.institution} 
                variants={{
                  hover: { 
                    scale: 1.15,
                    filter: "grayscale(0)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }
                }}
                initial={{ filter: "grayscale(1)" }}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-all duration-300 shadow-xl group-hover/edu:shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
            </div>

            <div className={cn(
              "p-8 -mt-12 relative z-10 flex flex-col",
              !isEven ? "items-end text-right" : "items-start text-left"
            )}>
              <div className={cn(
                "flex flex-col md:flex-row justify-between gap-x-8 gap-y-4 mb-8 w-full",
                !isEven ? "md:flex-row-reverse" : "md:flex-row"
              )}>
                <div className={cn(
                  "space-y-1 font-display flex-1 min-w-0",
                  !isEven ? "text-right" : "text-left"
                )}>
                  <motion.h4 className="text-2xl md:text-[32px] font-bold text-[var(--gold-accent)] leading-[1.2] truncate heading-lg" title={edu.title}>{edu.title}</motion.h4>
                  <div className="text-lg font-medium text-[var(--text-primary)] opacity-80 truncate content-text" title={edu.institution}>{edu.institution}</div>
                </div>
              </div>
              
              <p className={cn(
                "text-[var(--text-secondary)] leading-relaxed mb-8 text-lg font-light italic content-text",
                !isEven ? "text-right" : "text-left"
              )}>{edu.description}</p>
              
              <div className={cn(
                "flex flex-wrap gap-6 items-center",
                !isEven ? "justify-end" : "justify-start"
              )}>
                <motion.button
                  onClick={() => setExpandedId(isExpanded ? null : edu.type)}
                  className={`btn ${isExpanded ? 'btn-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'btn-secondary'} !py-2 !px-6 !text-xs uppercase tracking-[2px] font-bold transition-all duration-300`}
                >
                  <span>{isExpanded ? t('education.hideCourses') : t('education.viewCourses')}</span>
                </motion.button>

                {edu.website && (
                  <a href={edu.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] font-bold text-xs uppercase tracking-[2px] hover:text-[var(--gold-accent)] transition-colors">
                    <span>Website</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
              <div className="md:hidden">
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <ul className="mt-8 pt-8 border-t border-[var(--border-color)] grid grid-cols-1 gap-4">
                        {edu.courses.map((course: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-accent)]" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className={`hidden md:flex md:w-1/2 flex-col pt-12 ${isEven ? 'pl-24 items-start' : 'pr-24 items-end'}`}>
          <div className={`flex flex-col mb-8 ${isEven ? 'items-start' : 'items-end'}`}>
            <div className="text-xl font-mono text-[var(--gold-accent)] font-black uppercase tracking-[4px] leading-none mb-1.5">{edu.period}</div>
            <div className="text-sm text-[var(--text-secondary)] font-bold uppercase tracking-[2px] opacity-70 dark:opacity-90 flex items-center gap-2 transition-opacity">
              {isEven && <div className="w-1.5 h-[2px] bg-[var(--gold-accent)]/40 dark:bg-[var(--gold-accent)]/70 rounded-full" />}
              {edu.location}
              {!isEven && <div className="w-1.5 h-[2px] bg-[var(--gold-accent)]/40 dark:bg-[var(--gold-accent)]/70 rounded-full" />}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.98 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                transition={{ duration: 0.3 }} 
                className={cn(
                  "bg-[var(--card-bg)]/40 backdrop-blur-2xl border border-[var(--gold-accent)]/20 p-8 w-full md:w-[120%] max-w-[95vw] md:max-w-[800px] tech-card z-[30]",
                  isEven ? "origin-left md:translate-x-0" : "origin-right md:translate-x-0"
                )}
              >
                <h5 className={cn(
                  "text-[var(--gold-accent)] text-lg font-bold uppercase tracking-[3px] mb-6 flex items-center gap-2",
                  isEven ? "justify-end" : "justify-start"
                )}>
                  {!isEven && <BookOpen size={18} />}
                  Courses
                  {isEven && <BookOpen size={18} />}
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                  {edu.courses.map((course: string, idx: number) => (
                    <motion.li key={idx} className={cn(
                      "group/course flex gap-3 p-2 rounded-xl hover:bg-[var(--gold-accent)]/5 transition-colors border border-transparent hover:border-[var(--gold-accent)]/10",
                      isEven ? "flex-row-reverse text-right items-start" : "flex-row text-left items-start"
                    )}>
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold-accent)] flex-shrink-0" />
                      <span className="text-sm font-medium text-[var(--text-secondary)] leading-relaxed group-hover/course:text-[var(--text-primary)] transition-colors">{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
});

const CertCard = memo(({ cert, i }: any) => (
  <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.05, duration: 0.5 }} className="bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col group hover:border-[var(--gold-accent)] transition-[border-color] duration-500 relative overflow-hidden h-full tech-card">
    {cert.image && (
      <div className="h-48 overflow-hidden relative">
        <motion.img 
          src={cert.image} 
          alt={cert.name} 
          variants={{
            hover: { 
              scale: 1.15,
              filter: "grayscale(0)",
              transition: { duration: 0.3, ease: "easeOut" }
            }
          }}
          initial={{ filter: "grayscale(1)" }}
          className="w-full h-full object-cover transition-all duration-300 shadow-lg group-hover:shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent opacity-60 pointer-events-none" />
      </div>
    )}
    <div className="p-10 relative z-10 flex-1 flex flex-col">
      <div className="-mt-16 mb-8 p-4 w-14 h-14 rounded-2xl bg-[var(--gold-accent)]/10 flex items-center justify-center text-[var(--gold-accent)] group-hover:bg-[var(--gold-accent)] group-hover:text-black transition-all duration-300 relative border border-[var(--gold-accent)]/20 dark:border-[var(--gold-accent)]/40 shadow-xl backdrop-blur-md">
        <Award size={28} />
      </div>
      <div className="font-bold text-2xl mb-3 leading-tight group-hover:text-[var(--gold-accent)] transition-colors text-[var(--text-primary)]">{cert.name}</div>
      <div className="text-lg text-[var(--text-secondary)] font-medium opacity-80">{cert.issuer}</div>
      <div className="mt-auto pt-8 flex items-center justify-between border-t border-[var(--border-color)]/30">
        <div className="text-sm font-mono text-[var(--gold-accent)] font-bold tracking-widest uppercase opacity-70 dark:opacity-100 transition-opacity">Date: {cert.date}</div>
        <div className="w-8 h-[2px] bg-[var(--gold-accent)]/30 group-hover:w-16 transition-all duration-500" />
      </div>
    </div>
  </motion.div>
));

const WorkshopCard = memo(({ workshop, i }: any) => (
  <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.05, duration: 0.5 }} className="p-10 bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col justify-between group hover:border-[var(--gold-accent)] transition-[border-color] duration-500 relative overflow-hidden h-full tech-card">
    <div className="relative z-10 flex-1">
      <div className="mb-8 p-4 w-14 h-14 rounded-2xl bg-[var(--gold-accent)]/10 flex items-center justify-center text-[var(--gold-accent)] group-hover:bg-[var(--gold-accent)] group-hover:text-black transition-all duration-300">
        <BookOpen size={28} />
      </div>
      <div className="font-bold text-2xl mb-3 leading-tight group-hover:text-[var(--gold-accent)] transition-colors text-[var(--text-primary)]">{workshop.name}</div>
      <div className="text-lg text-[var(--text-secondary)] font-medium opacity-80">{workshop.organizer}</div>
    </div>
    <div className="relative z-10 mt-10 flex items-center justify-between pt-8 border-t border-[var(--border-color)]/30">
      <div className="text-sm font-mono text-[var(--gold-accent)] font-bold tracking-widest uppercase opacity-70 dark:opacity-100 transition-opacity">Date: {workshop.date}</div>
      <div className="w-8 h-[2px] bg-[var(--gold-accent)]/30 group-hover:w-12 transition-all duration-500" />
    </div>
  </motion.div>
));

export default function Education() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const educationData = useMemo(() => t('education.items', { returnObjects: true }) as any[], [t]);
  const certifications = useMemo(() => t('education.certs', { returnObjects: true }) as any[], [t]);
  const workshops = useMemo(() => t('education.workshopItems', { returnObjects: true }) as any[], [t]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="education" className="py-32 px-4 md:px-10 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="w-full px-4 md:px-12 lg:px-24">
        <div className="mb-20 text-center">
          <div className="eyebrow mb-4">{t('education.eyebrow')}</div>
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-primary)] heading-lg">
            <span className="title-primary">Academic</span> <span className="title-accent">Foundation</span>
          </h3>
        </div>

        <div className="relative mb-32">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 z-0 hidden md:block">
            <div className="h-full w-full bg-[var(--border-color)]/20 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[var(--gold-accent)]/40 to-transparent will-change-transform transform-gpu" 
                animate={{ y: ['-100%', '800%'] }} 
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
              />
            </div>
          </div>
          
          <div className="absolute left-6 md:hidden top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--gold-accent)] via-[var(--gold-accent)]/50 to-transparent z-0" />
          
          <div className="space-y-20 relative">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-12">
                  <Skeleton type="card" className="flex-1" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))
            ) : (
              educationData.map((edu, i) => (
                <EduCard key={edu.type} edu={edu} i={i} expandedId={expandedId} setExpandedId={setExpandedId} t={t} />
              ))
            )}
          </div>
        </div>

        <div className="flex flex-col gap-32">
          <div id="certificates" className="space-y-16 scroll-mt-32">
            <div className="flex items-end gap-6 border-l-4 border-[var(--gold-accent)] pl-8 py-2">
              <Award className="text-[var(--gold-accent)]" size={48} />
              <div>
                <h4 className="text-4xl md:text-5xl font-bold font-display text-[var(--text-primary)]">{t('education.certifications')}</h4>
                <div className="text-[var(--gold-accent)] font-mono text-sm tracking-[5px] uppercase mt-2 opacity-60 dark:opacity-80 transition-opacity">Verified Credentials</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} type="card" />)
              ) : (
                certifications.map((cert, i) => <CertCard key={i} cert={cert} i={i} />)
              )}
            </div>
          </div>

          <div id="workshops" className="space-y-16 scroll-mt-32">
            <div className="flex items-end gap-6 border-l-4 border-[var(--gold-accent)] pl-8 py-2">
              <BookOpen className="text-[var(--gold-accent)]" size={48} />
              <div>
                <h4 className="text-4xl md:text-5xl font-bold font-display text-[var(--text-primary)]">{t('education.workshops')}</h4>
                <div className="text-[var(--gold-accent)] font-mono text-sm tracking-[5px] uppercase mt-2 opacity-60 dark:opacity-80 transition-opacity">Professional Development</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} type="card" />)
              ) : (
                workshops.map((workshop, i) => <WorkshopCard key={i} workshop={workshop} i={i} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
