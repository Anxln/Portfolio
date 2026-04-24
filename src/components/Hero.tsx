import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { memo, useMemo } from 'react';

// Perfectly mirrored layout logic for symmetrical visual weight - 4 cards per side (8 total)
const CARD_LAYOUTS = [
  { x: 620, y: -380, rotate: 6, scale: 0.72 },
  { x: 860, y: -120, rotate: 18, scale: 0.8 },
  { x: 780, y: 180, rotate: -8, scale: 0.75 },
  { x: 650, y: 440, rotate: 12, scale: 0.7 },
];

const BackgroundFan = memo(({ bgParallax }: { bgParallax: any }) => {
  const allBackgrounds = useMemo(() => {
    const left = CARD_LAYOUTS.map((layout, i) => ({
      src: [`/images/Leftside_1.webp`, `/images/Leftside_2.webp`, `/images/Leftside_3.webp`, `/images/Leftside_4.webp`][i % 4],
      x: -layout.x,
      y: layout.y,
      rotate: -layout.rotate,
      scale: layout.scale
    }));
    const right = CARD_LAYOUTS.map((layout, i) => ({
      src: [`/images/Rightside_1.webp`, `/images/Rightside_2.webp`, `/images/Rightside_3.webp`, `/images/Rightside_4.webp`][i % 4],
      x: layout.x,
      y: layout.y,
      rotate: layout.rotate,
      scale: layout.scale
    }));
    return [...left, ...right];
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none hidden xl:block">
      {allBackgrounds.map((img, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: img.scale * 0.8 }}
          animate={{ opacity: 1, scale: img.scale }}
          style={{ 
            x: bgParallax.x,
            y: bgParallax.y,
            left: '50%',
            top: '50%',
            translateX: `calc(-50% + ${img.x}px)`,
            translateY: `calc(-50% + ${img.y}px)`,
            rotate: img.rotate,
          }}
          transition={{ duration: 0.8, delay: i * 0.03 }}
          className="absolute w-[340px] h-[210px] will-change-transform transform-gpu"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[24px] border border-[var(--gold-accent)]/30 shadow-2xl transition-all duration-700">
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              fetchPriority="low"
              referrerPolicy="no-referrer"
              onError={(e: any) => { e.target.src = '/images/MainFrame.webp' }}   
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
});

export default function Hero() {
  const { t } = useTranslation();

  // Optimized Mouse tracking for parallax effect using centralized hook
  const mainParallax = useMouseParallax([-15, 15], [-15, 15]);
  
  // High-interpolation "trailing" spring for the background cards (Kali-inspired delay)
  const bgParallax = useMouseParallax([-40, 40], [-40, 40], { damping: 50, stiffness: 30 });

  return (
    <section className="relative min-h-[140vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="w-full px-10 relative z-10 text-center">
        {/* Profile Image Frame Section */}
        <div className="relative flex items-center justify-center mb-32">
          
          {/* Dynamic Background Image Fan with Trailing Parallax */}
          <BackgroundFan bgParallax={bgParallax} />

          {/* Main Central Image Frame - ONLY THIS IS ANIMATED */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{ x: mainParallax.x, y: mainParallax.y }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            whileHover="hover"
            className="relative w-[320px] h-[400px] md:w-[480px] md:h-[600px] group z-20 cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
            >
              {/* Two Orbiting Elements */}
              {/* Outer Orbit: Industrial Schematic */}
              <motion.div 
                animate={{ rotateZ: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 md:-inset-24 border border-dashed border-[var(--gold-accent)]/20 rounded-full will-change-transform transform-gpu pointer-events-none opacity-40 dark:opacity-90 dark:border-[var(--gold-accent)]/40 dark:shadow-[0_0_30px_rgba(212,175,55,0.2)]" 
                style={{ transform: 'rotateX(75deg) translateZ(-80px)' }}
              />

              {/* Inner Orbit: Digital Guard */}
              <motion.div 
                animate={{ rotateZ: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 md:-inset-16 border-2 border-[var(--gold-accent)]/30 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] dark:shadow-[0_0_40px_rgba(212,175,55,0.4)] will-change-transform transform-gpu pointer-events-none z-20 dark:border-[var(--gold-accent)]/60" 
                style={{ transform: 'rotateX(-70deg) translateZ(80px)' }}
              />
              
              <motion.div 
                variants={{
                  hover: { 
                    rotateY: 8,
                    rotateX: -5,
                    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                  }
                }}
                className="relative w-full h-full [transform:translateZ(0px)] flex items-center justify-center overflow-hidden rounded-[24px] shadow-2xl bg-[var(--card-bg)]"
              >
                {/* Subtle Atmospheric Glow remains */}
                <div className="absolute inset-0 bg-[var(--gold-accent)]/5 blur-[120px] rounded-full scale-150 pointer-events-none opacity-0 dark:opacity-50 transition-opacity duration-1000" />
                
                <img
                  src="/images/MainImage.webp"   
                  alt="Ancelin Nishanth"
                  className="w-full h-full object-cover will-change-transform transform-gpu group-hover:scale-105 transition-all duration-700"
                  style={{ 
                    maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                  }}
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  loading="eager"
                  onError={(e: any) => { e.target.src = '/images/main.webp' }}
                />

                {/* Corner Mask Elements for Frame Definition */}
                <div className="absolute inset-0 border-[20px] border-transparent pointer-events-none">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[var(--gold-accent)]/30 rounded-tl-[24px]" />
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[var(--gold-accent)]/30 rounded-tr-[24px]" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[var(--gold-accent)]/30 rounded-bl-[24px]" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[var(--gold-accent)]/30 rounded-br-[24px]" />
                </div>
              </motion.div>
              
              {/* Hardware Status Bar */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-1.5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full backdrop-blur-md">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-status-blink" />
                <span className="text-[10px] font-mono tracking-widest text-[var(--muted)]">ACT_LOGIC: ONLINE</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="eyebrow mb-8">
          {t('hero.role')}
        </div>

        <h1 className="text-7xl md:text-[140px] leading-[0.85] tracking-[-5px] mb-10 w-full heading-xl">
          <span className="title-primary">An</span><span className="title-accent">cel</span><span className="title-primary">in</span> <span className="title-accent">Nis</span><span className="title-primary">han</span><span className="title-accent">th</span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-12 leading-relaxed content-text">
          {t('hero.intro')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/works" className="btn btn-primary">{t('hero.viewWork')}</Link>
          <Link to="/contact" className="btn btn-secondary">{t('hero.contactMe')}</Link>
        </div>
      </div>
    </section>
  );
}
