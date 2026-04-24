import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import CustomPointer from './components/CustomPointer';
import SplashScreen from './components/SplashScreen';
import Logo from './components/Logo';
import { centeredMouseX, centeredMouseY } from './lib/motion';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const EducationPage = lazy(() => import('./pages/EducationPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading fallback - Highly Optimized with Industry 4.0 visual feel
const PageLoader = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] gap-6"
  >
    <div className="relative">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-2 border-[var(--gold-accent)]/20 border-t-[var(--gold-accent)] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.1)]" 
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-[var(--gold-accent)] rounded-full animate-pulse" />
      </div>
    </div>
    <div className="text-[10px] font-mono text-[var(--gold-accent)] tracking-[6px] uppercase font-bold animate-pulse">
      Syncing_Logic
    </div>
  </motion.div>
);

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const { t } = useTranslation();

  // HIGH PERFORMANCE GLOBAL MOUSE TRACKING
  const sprX = useSpring(centeredMouseX, { damping: 100, stiffness: 40, mass: 1 });
  const sprY = useSpring(centeredMouseY, { damping: 100, stiffness: 40, mass: 1 });

  const bgX = useTransform(sprX, [-1000, 1000], [-30, 30]);
  const bgY = useTransform(sprY, [-1000, 1000], [-30, 30]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const triggerSplash = () => setShowSplash(true);

  // Scroll Lock for Splash Screen
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [showSplash]);

  // Dynamic Title Update
  useEffect(() => {
    const path = location.pathname;
    let title = 'Ancelin Portfolio';
    
    switch (path) {
      case '/':
        title = 'Ancelin Portfolio | Home';
        break;
      case '/education':
        title = 'Ancelin Portfolio | Education';
        break;
      case '/experience':
        title = 'Ancelin Portfolio | Experience';
        break;
      case '/works':
        title = 'Ancelin Portfolio | Work';
        break;
      case '/contact':
        title = 'Ancelin Portfolio | Contact';
        break;
      default:
        title = 'Ancelin Portfolio';
    }
    
    document.title = title;
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative bg-[var(--bg)] overflow-hidden">
      {/* GLOBAL PARALLAX BACKGROUND LAYER - Optimized with transform-gpu */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="fixed inset-[-10%] pointer-events-none z-0 opacity-20 will-change-transform transform-gpu overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-[radial-gradient(circle,var(--gold-accent)_0%,transparent_70%)] blur-[80px] opacity-15" />
        <div className="absolute bottom-1/4 right-1/4 w-[30%] h-[30%] bg-[radial-gradient(circle,var(--accent)_0%,transparent_70%)] blur-[80px] opacity-10" />
      </motion.div>

      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />
      <CustomPointer />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} triggerSplash={triggerSplash} />
      
      <main className="relative z-10 w-full">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.33, 1, 0.68, 1] 
            }}
          >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <footer className="relative z-10 py-12 px-10 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 group">
          <button
            onClick={triggerSplash}
            className="cursor-pointer"
          >
            <Logo className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
          </button>
          <div className="text-[18px] font-normal tracking-[2px] font-audiowide text-[var(--gold-accent)] uppercase">Ancelin</div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-[12px] text-[var(--muted)] uppercase tracking-widest">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
            {t('footer.available')}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
