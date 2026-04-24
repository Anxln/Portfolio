import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Github, Linkedin, Twitter, Instagram, Facebook, ExternalLink, MessageCircle, Send, MapPin, Home } from 'lucide-react';
import { useState, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

const ContactCard = memo(({ title, sub, desc, Icon, i, id, t }: any) => (
  <div id={id} className="scroll-mt-32 flex-1 p-8 bg-[var(--card-bg)] border border-[var(--border-color)] group hover:border-[var(--gold-accent)] transition-all tech-card">
    <div className="text-[14px] font-mono text-[var(--gold-accent)] mb-4 font-bold uppercase tracking-widest flex items-center gap-2">
      <Icon size={18} className={id === 'germany' ? 'animate-bounce' : ''} />
      {title}
    </div>
    <h5 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">{sub}</h5>
    <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{desc}</p>
  </div>
));

const SocialLink = memo(({ link }: any) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "flex items-center gap-3 text-[var(--muted)] transition-all duration-300 group p-4 rounded-2xl hover:bg-[var(--card-bg)]",
      link.color
    )}
  >
    <link.icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm font-bold uppercase tracking-widest">{link.name}</span>
  </a>
));

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();
  const email = 'ancelinnish@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = useMemo(() => [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ancelinnishanth', color: 'hover:text-[#0077B5]' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Anxln', color: 'hover:text-[#333]' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919080993680', color: 'hover:text-[#25D366]' },
    { name: 'Telegram', icon: Send, href: 'https://t.me/ancelinnish', color: 'hover:text-[#0088cc]' },
    { name: 'X', icon: Twitter, href: 'https://x.com/AncelinNishanth', color: 'hover:text-[#000000]' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/anxln_nish', color: 'hover:text-[#E4405F]' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ancelin.nishanth.3', color: 'hover:text-[#1877F2]' },
  ], []);

  return (
    <section id="contact" className="py-32 px-10 relative overflow-hidden">
      <div className="w-full text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--gold-accent)]/20 bg-[var(--card-bg)]/5 backdrop-blur-xl group tech-card"
            >
              <motion.img
                src={`/images/Contact${i + 1}.webp`}
                alt="Portfolio Work"
                loading="lazy"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover transition-all duration-300 shadow-xl group-hover:shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Distributive About Me Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative w-full py-40 mb-32 text-left"
        >
          {/* Background Decorative Gradient - Subtle & Integrated */}
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(circle,var(--gold-accent)_0%,transparent_80%)] opacity-[0.03] pointer-events-none" />

          <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            {/* Full Width Top Row: Eyebrow & Main Title */}
            <div className="lg:col-span-12 space-y-8 mb-12 relative px-2">
              <div className="text-2xl xl:text-3xl font-black tracking-[12px] uppercase text-[var(--gold-accent)] flex items-center gap-6">
                 <span className="w-16 h-[2px] bg-[var(--gold-accent)]" />
                {t('contact.about.eyebrow')}
              </div>
              <h4 className="text-4xl md:text-6xl xl:text-[5.5rem] font-bold text-[var(--text-primary)] leading-tight xl:leading-none tracking-tighter heading-lg">
                <span className="title-primary">Innovation.</span> <span className="title-accent">Engineering.</span> <span className="title-primary">Driven.</span>
              </h4>
              <div className="absolute top-0 right-0 font-mono text-[10px] text-[var(--muted)] opacity-20 hidden lg:block vertical-rl">
                REF_SPEC_V.04 // IND4.0_READY
              </div>
            </div>

            {/* Left Column: Technical Context (Columns 1-3) */}
            <div className="lg:col-span-3 space-y-12">
              <div className="tech-card p-10 space-y-10 border-l-4 border-l-[var(--gold-accent)]">
                <div className="space-y-3">
                  <div className="text-[11px] uppercase tracking-[4px] text-[var(--muted)] font-black flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)]" />
                    Foundation
                  </div>
                  <div className="text-lg font-mono text-[var(--text-primary)] font-bold">Mechanical & Auto</div>
                </div>
                <div className="space-y-3">
                  <div className="text-[11px] uppercase tracking-[4px] text-[var(--muted)] font-black flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)]" />
                    Specialization
                  </div>
                  <div className="text-lg font-mono text-[var(--text-primary)] font-bold">D365 | .NET Framework</div>
                </div>
                <div className="space-y-3">
                  <div className="text-[11px] uppercase tracking-[4px] text-[var(--muted)] font-black flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)]" />
                    Methodology
                  </div>
                  <div className="text-lg font-mono text-[var(--text-primary)] font-bold">Systemic Engineering Logic</div>
                </div>
              </div>
            </div>

            {/* Center Column: Expansive Narrative (Columns 4-9) - bio1 in 2 lines */}
            <div className="lg:col-span-6 space-y-16">
              <div className="space-y-10 relative">
                {/* Blueprint Mark Overlay */}
                <div className="absolute -top-10 -left-10 text-[var(--gold-accent)]/10 font-mono text-[100px] pointer-events-none select-none">
                  01
                </div>
                <p className="text-2xl xl:text-[2.2rem] text-[var(--text-primary)] font-medium leading-tight xl:leading-[1.1] tracking-tight relative z-10 heading-lg">
                  {t('contact.about.bio1')}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-1.5 bg-[var(--gold-accent)] rounded-full" />
                  <div className="flex-1 h-[1px] bg-[var(--border-color)]" />
                </div>
                <p className="text-xl xl:text-2xl text-[var(--text-secondary)] leading-relaxed opacity-80 max-w-[95%] font-light italic content-text">
                  {t('contact.about.bio2')}
                </p>
              </div>
            </div>

            {/* Right Column: Visual Core (Columns 10-12) */}
            <div className="lg:col-span-3 space-y-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square w-full max-w-[280px] ml-auto group"
              >
                {/* Visualizing Engineering Depth with stacked orbits */}
                <div className="absolute -inset-8 border border-dashed border-[var(--gold-accent)]/10 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute -inset-4 border border-[var(--gold-accent)]/20 rounded-full animate-[spin_40s_linear_reverse_infinite]" />
                <div className="absolute inset-0 border border-[var(--gold-accent)]/30 rounded-full" />
                
                <div className="relative w-full h-full tech-card p-1 aspect-square">
                  <img 
                    src="/images/Engineer.webp"   
                    alt="Ancelin Nishanth Bio Visual"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-115 group-hover:shadow-2xl grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Digital Crosshair Layer */}
                  <div className="absolute inset-0 border border-[var(--gold-accent)]/20 pointer-events-none mix-blend-overlay" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-[var(--gold-accent)] text-white px-8 py-3 font-mono text-[12px] uppercase tracking-[6px] font-black shadow-2xl skew-x-[-12deg]">
                  ENGINEER
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="eyebrow mb-4">{t('contact.eyebrow')}</div>
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-[var(--text-primary)] heading-lg">
            <span className="title-primary">Let's</span> <span className="title-accent">Connect.</span>
          </h3>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-12 content-text">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-12 mb-16 text-left max-w-4xl mx-auto"> 
            {/*  Update once I move to Germany 
              
              <ContactCard 
              id="germany"
              title="Current Location"
              sub="Stuttgart, Germany"
              desc={t('contact.location.germany')}
              Icon={MapPin}
              
            /> */}
            <ContactCard 
              id="india"
              title="Home Base"
              sub="Tamil Nadu, India"
              desc={t('contact.location.india')}
              Icon={Home}
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <a
              href="https://drive.google.com/file/d/1_T9CidHskkH2-uS_xJ5Y6_L8XmYI8W_x/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[var(--gold-accent)] text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl no-underline"
            >
              <ExternalLink size={24} />
              <span className="text-lg font-bold uppercase tracking-[2px]">{t('footer.resume')}</span>
            </a>
          </motion.div>

          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a href={`mailto:${email}`} className="btn btn-primary flex items-center gap-3 px-10 py-6 text-lg">
                <Mail size={24} />
                {email}
              </a>
              <button onClick={copyToClipboard} className="btn btn-secondary p-6" title={t('contact.copyEmail')}>
                {copied ? <Check className="text-green-500" /> : <Copy />}
              </button>
            </div>
            {copied && <span className="text-sm text-green-500 font-medium">{t('contact.copied')}</span>}
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link) => <SocialLink key={link.name} link={link} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
