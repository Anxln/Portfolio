import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Zap, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, memo, useCallback, useMemo, useEffect } from 'react';
import Skeleton from './Skeleton';

const ProjectCard = memo(({ project, i, type, expandedId, setExpandedId, t }: any) => {
  const cardId = `${type}-${i}`;
  const isExpanded = expandedId === cardId;

  return (
    <motion.div
      key={cardId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      whileHover="hover"
      className="group will-change-transform transform-gpu"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--card-bg)] mb-8 border border-[var(--gold-accent)]/30 tech-card">
        <motion.img
          src={project.image || `/images/main.webp`}
          alt={project.title}
          loading="lazy"
          onError={(e: any) => { e.target.src = '/images/main.webp' }}
          variants={{
            hover: { 
              scale: 1.15,
              filter: "grayscale(0)",
              transition: { duration: 0.3, ease: "easeOut" }
            }
          }}
          initial={{ filter: "grayscale(1)" }}
          className="object-cover w-full h-full transition-all duration-300 shadow-xl group-hover:shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold-accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      <div className="flex flex-col gap-4 px-4">
        <div className="flex justify-between items-start gap-6">
          <div className="flex-1">
            <motion.h4 
              variants={{
                hover: { x: 5, color: "var(--gold-accent)" }
              }}
              className="text-3xl font-bold mb-3 transition-all duration-300 text-[var(--text-primary)] heading-lg"
            >
              {project.title}
            </motion.h4>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl content-text">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
            {project.tags.map((tag: string, tIdx: number) => (
              <motion.span 
                key={tag}
                variants={{
                  hover: { 
                    y: -2, 
                    backgroundColor: "var(--gold-accent)", 
                    color: "#000",
                    transition: { delay: tIdx * 0.05 }
                  }
                }}
                className="text-[10px] uppercase tracking-widest text-[var(--muted)] dark:text-[var(--gold-accent)]/80 border border-[var(--border-color)] px-3 py-1 rounded-full font-bold transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center mt-2">
          <button
            onClick={() => setExpandedId(isExpanded ? null : cardId)}
            className="flex items-center gap-2 text-[var(--gold-accent)] font-bold text-xs uppercase tracking-[2px] py-2 px-6 rounded-full border border-[var(--gold-accent)]/30 hover:bg-[var(--gold-accent)]/10 transition-all"
          >
            <Info size={14} />
            <span>{isExpanded ? t('projects.hideDetails') || 'Hide Details' : t('projects.viewDetails')}</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-8 bg-[var(--card-bg)] border border-[var(--border-color)] relative tech-card">
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed italic border-l-2 border-[var(--gold-accent)]/30 pl-6">
                  {project.detailedDescription}
                </p>
                {project.details && (
                  <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                    <div className="text-xs font-mono text-[var(--gold-accent)] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                       Project Highlights
                    </div>
                    <p className="text-lg text-[var(--text-secondary)]">{project.details}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const officialProjects = useMemo(() => t('projects.official', { returnObjects: true }) as any[], [t]);
  const collegeProjects = useMemo(() => t('projects.college', { returnObjects: true }) as any[], [t]);
  const hobbyProjects = useMemo(() => t('projects.hobby', { returnObjects: true }) as any[], [t]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSetExpanded = useCallback((id: string | null) => {
    setExpandedId(id);
  }, []);

  const skillsList = useMemo(() => [
    'Microsoft Dynamics 365', 'Business Central', 'AL Language', 'C#', 'ASP.NET Core', 
    'SQL Server', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Azure', 'Docker', 
    'Git', 'Agile', 'Entity Framework', 'RESTful APIs', 'Power Platform'
  ], []);

  return (
    <section id="projects" className="py-32 px-10">
      <div className="w-full">
        <div className="mb-20">
          <div className="eyebrow mb-4">{t('projects.eyebrow')}</div>
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight heading-lg">
            <span className="title-primary">Selected</span> <span className="title-accent">Works</span>
          </h3>
        </div>

        <div className="space-y-32">
          {/* Official Projects Section */}
          <div id="official" className="scroll-mt-32">
            <h4 className="text-4xl font-bold mb-16 font-display text-[var(--gold-accent)] flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[var(--gold-accent)]" />
              {t('projects.officialTitle')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} type="card" className="h-[500px]" />)
              ) : (
                officialProjects.map((p, i) => (
                  <ProjectCard 
                    key={`official-${i}`}
                    project={p}
                    i={i}
                    type="official"
                    expandedId={expandedId}
                    setExpandedId={handleSetExpanded}
                    t={t}
                  />
                ))
              )}
            </div>
          </div>

          {/* College Projects Section */}
          <div id="college" className="scroll-mt-32">
            <h4 className="text-4xl font-bold mb-16 font-display text-[var(--gold-accent)] flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[var(--gold-accent)]" />
              {t('projects.collegeTitle')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {isLoading ? (
                Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} type="card" className="h-[500px]" />)
              ) : (
                collegeProjects.map((p, i) => (
                  <ProjectCard 
                    key={`college-${i}`}
                    project={p}
                    i={i}
                    type="college"
                    expandedId={expandedId}
                    setExpandedId={handleSetExpanded}
                    t={t}
                  />
                ))
              )}
            </div>
          </div>

          {/* Hobby Projects Section */}
          <div id="hobby" className="scroll-mt-32">
            <h4 className="text-4xl font-bold mb-16 font-display text-[var(--gold-accent)] flex items-center gap-4">
              <span className="w-8 h-[2px] bg-[var(--gold-accent)]" />
              {t('projects.hobbyTitle')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {isLoading ? (
                Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} type="card" className="h-[500px]" />)
              ) : (
                hobbyProjects.map((p, i) => (
                  <ProjectCard 
                    key={`hobby-${i}`}
                    project={p}
                    i={i}
                    type="hobby"
                    expandedId={expandedId}
                    setExpandedId={handleSetExpanded}
                    t={t}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="mb-16">
            <h4 className="text-4xl font-bold font-display flex items-center gap-4">
              <BookOpen className="text-[var(--gold-accent)]" />
              {t('projects.publications')}
            </h4>
          </div>         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">                   {/* ------------publication data  */}     
            {[1].map((pub) => (
              <motion.div
                key={pub}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-[var(--card-bg)] border border-[var(--border-color)] group hover:border-[var(--gold-accent)] transition-all duration-300 tech-card"
              >
                <div className="text-[12px] font-mono text-[var(--gold-accent)] mb-4 font-bold uppercase tracking-widest opacity-70 dark:opacity-90">Journal / Conference 2023</div>
                <h5 className="text-2xl font-bold mb-4 font-display group-hover:text-[var(--gold-accent)] transition-colors"></h5>
                <p className="text-[var(--muted)] mb-6 leading-relaxed"></p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="skills" className="mt-32 scroll-mt-32">
          <div className="mb-16">
            <h4 className="text-4xl font-bold font-display flex items-center gap-4">
              <Zap className="text-[var(--gold-accent)]" />
              {t('projects.skills')}
            </h4>
          </div>
          <div className="flex flex-wrap gap-4">
            {skillsList.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="relative px-6 py-3 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--accent)] font-medium transition-all duration-300 cursor-default group overflow-hidden"
              >
                <div className="relative flex items-center gap-2">
                  <Zap size={14} className="text-[var(--gold-accent)]/60 dark:text-[var(--gold-accent)] group-hover:text-[var(--gold-accent)] transition-colors" />
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
