import { motion } from 'motion/react';
import { 
  Code2, Database, Cloud, Cpu, Globe, 
  Layers, Zap, Terminal, Server, Shield, 
  Smartphone, Layout, GitBranch, Settings
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React / Next.js', level: 90, icon: Globe },
      { name: 'TypeScript', level: 85, icon: Code2 },
      { name: 'Tailwind CSS', level: 95, icon: Layers },
      { name: 'Framer Motion', level: 80, icon: Zap }
    ]
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'C# / .NET Core', level: 85, icon: Terminal },
      { name: 'SQL Server', level: 90, icon: Database },
      { name: 'Entity Framework', level: 85, icon: GitBranch },
      { name: 'RESTful APIs', level: 90, icon: Settings }
    ]
  },
  {
    title: 'Microsoft Practice',
    icon: Cpu,
    skills: [
      { name: 'Dynamics 365 CRM', level: 80, icon: Layers },
      { name: 'Business Central', level: 75, icon: Database },
      { name: 'AL Language', level: 70, icon: Code2 },
      { name: 'Power Platform', level: 75, icon: Zap }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Azure Services', level: 75, icon: Cloud },
      { name: 'Docker', level: 70, icon: Shield },
      { name: 'CI/CD Pipelines', level: 75, icon: GitBranch },
      { name: 'Firebase', level: 85, icon: Zap }
    ]
  }
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-32 px-10 bg-[var(--card-bg)]/30">
      <div className="w-full">
        <div className="mb-20">
          <div className="eyebrow mb-4">Expertise</div>
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight heading-lg">
            <span className="title-primary">Technical</span> <span className="title-accent">Arsenal</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
             className="p-10 border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--gold-accent)]/30 transition-[border-color] duration-500 group tech-card"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-[var(--gold-accent)]/10 flex items-center justify-center text-[var(--gold-accent)] group-hover:scale-110 transition-transform duration-500">
                  <category.icon size={32} />
                </div>
                <h4 className="text-3xl font-bold text-[var(--accent)] heading-lg">{category.title}</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon size={18} className="text-[var(--gold-accent)]" />
                        <span className="font-medium text-lg content-text">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-[var(--muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[var(--border-color)]/50 dark:bg-[var(--border-color)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                        className="h-full bg-gradient-to-r from-[var(--gold-accent)] to-[var(--accent)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
