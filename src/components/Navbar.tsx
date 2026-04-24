// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
// import { useState, useMemo } from 'react';
// import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { cn } from '../lib/utils';
// import Logo from './Logo';

// interface NavbarProps {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
//   triggerSplash: () => void;
// }

// export default function Navbar({ isDarkMode, toggleTheme, triggerSplash }: NavbarProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const { t, i18n } = useTranslation();
  
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 50 && !isScrolled) setIsScrolled(true);
//     else if (latest <= 50 && isScrolled) setIsScrolled(false);
//   });

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'en' ? 'de' : 'en';
//     i18n.changeLanguage(newLang);
//   };

//   const navLinks = useMemo(() => [
//     { 
//       name: t('nav.home'), 
//       href: '/',
//     },
//     { 
//       name: t('nav.education'), 
//       href: '/education',
//     },
//     { 
//       name: t('nav.experience'), 
//       href: '/experience',
//     },
//     { 
//       name: t('nav.works'), 
//       href: '/works',
//     },
//     { 
//       name: t('nav.contact'), 
//       href: '/contact',
//     },
//   ], [t]);

//   const handleLinkClick = (href: string) => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-transform duration-500 px-10 py-8',
//         isScrolled ? 'translate-y-[-100%] pointer-events-none' : 'translate-y-0 bg-transparent'
//       )}
//     >
//       <div className="w-full flex items-center justify-between">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="flex items-center gap-6 group"
//         >
//           <button
//             onClick={triggerSplash}
//             className="relative cursor-pointer"
//           >
//             <Logo className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
//             <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-status-blink border-2 border-[var(--bg)]" />
//           </button>
          
//           <div className="flex flex-col">
//             <Link
//               to="/"
//               className="text-[20px] font-black text-[var(--gold-accent)] tracking-[3px] uppercase leading-none"
//             >
//               Ancelin
//             </Link>
//           </div>
//         </motion.div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-[32px]">
//           {navLinks.map((link, i) => (
//             <Link
//               key={link.href}
//               to={link.href}
//               className={cn(
//                 "text-[16px] font-semibold transition-colors nav-link-hover uppercase tracking-widest",
//                 location.pathname === link.href ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--accent)]"
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           <div className="flex items-center gap-2 ml-4">
//             <button
//               onClick={toggleLanguage}
//               className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)] flex items-center gap-2 text-xs font-bold"
//               aria-label="Toggle language"
//             >
//               <Languages size={18} />
//               <span className="uppercase">{i18n.language}</span>
//             </button>

//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)]"
//               aria-label="Toggle theme"
//             >
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="flex items-center gap-4 md:hidden">
//           <button
//             onClick={toggleLanguage}
//             className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)]"
//           >
//             <Languages size={20} />
//           </button>
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)]"
//           >
//             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//           <button
//             className="text-[var(--muted)] hover:text-[var(--accent)]"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
//           >
//             <div className="flex flex-col p-6 gap-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   to={link.href}
//                   onClick={() => handleLinkClick(link.href)}
//                   className={cn(
//                     "text-xl font-bold uppercase tracking-[2px]",
//                     location.pathname === link.href ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--accent)]"
//                   )}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useMemo } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  triggerSplash: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme, triggerSplash }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    else if (latest <= 50 && isScrolled) setIsScrolled(false);
  });

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = useMemo(() => [
    { 
      name: t('nav.home'), 
      href: '/',
    },
    { 
      name: t('nav.education'), 
      href: '/education',
      sublinks: [
        { name: t('nav.sub.certificates'), href: '/education#certificates' },
        { name: t('nav.sub.workshops'), href: '/education#workshops' },
      ]
    },
    { 
      name: t('nav.experience'), 
      href: '/experience',
      sublinks: [
        { name: t('nav.sub.internships'), href: '/experience#internships' },
      ]
    },
    { 
      name: t('nav.works'), 
      href: '/works',
      sublinks: [
        { name: t('nav.sub.publications'), href: '/works#publications' },
        { name: t('nav.sub.skills'), href: '/works#skills' },
      ]
    },
    { 
      name: t('nav.contact'), 
      href: '/contact',
    },
  ], [t]);

  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle hash links
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-500 px-10 py-8',
        isScrolled ? 'translate-y-[-100%] pointer-events-none' : 'translate-y-0 bg-transparent'
      )}
    >
      <div className="w-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6 group"
        >
          <button
            onClick={triggerSplash}
            className="relative cursor-pointer"
          >
            <Logo className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-status-blink border-2 border-[var(--bg)]" />
          </button>
          
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-[20px] font-black text-[var(--gold-accent)] font-audiowide tracking-[3px] uppercase leading-none"
            >
              Ancelin
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[9px] font-mono text-[var(--muted)] tracking-[2px] uppercase opacity-60">System.01a</span>
              <div className="w-10 h-[1px] bg-[var(--gold-accent)]/20" />
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[32px]">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredPath(link.href)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-[16px] font-semibold transition-colors nav-link-hover uppercase tracking-widest flex items-center gap-2",
                  location.pathname === link.href ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--accent)]"
                )}
              >
                {link.name}
              </Link>

              {/* Dropdown / Subfolder Menu */}
              <AnimatePresence>
                {hoveredPath === link.href && link.sublinks && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50 min-w-[240px]"
                  >
                    <div className="bg-[var(--card-bg)] backdrop-blur-3xl border border-[var(--gold-accent)]/20 p-6 rounded-none tech-card shadow-2xl overflow-hidden relative group/dropdown">
                      {/* Technical Blueprint Accent */}
                      <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-[var(--muted)] opacity-30 select-none">
                        //SUB_MOD_24
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent opacity-50" />
                      
                      <div className="flex flex-col gap-1 relative z-10">
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => handleLinkClick(sub.href)}
                            className="group/item flex items-center justify-center p-3 hover:bg-[var(--gold-accent)]/10 transition-all border-b border-[var(--border-color)]/10 last:border-0 text-center"
                          >
                            <span className="text-[12px] font-mono font-bold text-[var(--muted)] group-hover/item:text-[var(--gold-accent)] uppercase tracking-widest leading-none">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)] flex items-center gap-2 text-xs font-bold"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              <span className="uppercase">{i18n.language}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)]"
          >
            <Languages size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--accent)]/10 transition-colors text-[var(--accent)]"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-[var(--muted)] hover:text-[var(--accent)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col gap-4">
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      "text-xl font-bold uppercase tracking-[2px]",
                      location.pathname === link.href ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--accent)]"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && (
                    <div className="flex flex-col gap-3 pl-6 border-l border-[var(--border-color)]">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => handleLinkClick(sub.href)}
                          className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] uppercase tracking-widest"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}