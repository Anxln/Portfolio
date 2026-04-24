import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MoreSoak’s Beverage ERP',
    description: 'Enterprise-level ERP solution for beverage manufacturing — managing production, inventory, export logistics, and sales across multiple regions.End-to-end ERP system streamlining batch production tracking, global supply chain management, and multi-region sales workflows.',
    tags: ['C#', '.NET', 'ASP.NET Core', 'ASP.NET', 'SQL Server', 'EF Core', 'REST API', 'JavaScript', 'HTML', 'CSS', 'Jira', 'Agile', 'Postman', 'Git']           
  },
  {
    id: '2',
    title: 'Waste Segregation System',
    description: 'Automated system to separate dry and wet municipal waste using Arduino UNO and multiple sensors (IR, moisture, LDR).',
    tags: ['Arduino', 'C/C++', 'Embedded Systems', 'Sensors']
  },
  {
    id: '3',
    title: 'Pneumatic Air Engine',
    description: 'Designed and developed a Pneumatic Air Engine that converts compressed air into mechanical motion using a piston-cylinder mechanism.',
    tags: ['Mechanical Design', 'Pneumatics', 'Fabrication']
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Canvendor',
    role: 'Junior Software Engineer (Microsoft Practice)',
    period: 'Aug 2025 - Present',
    description: [
      'Developing and supporting Microsoft Dynamics 365 (CRM and Business Central) solutions.',
      'Working on system integrations between Business Central and multiple external applications.',
      'Developing and maintaining APIs for smooth data exchange across systems.',
      'Implementing workflows and automation in the Customer Service module.',
    ],
  },
  {
    id: '2',
    company: 'UTsolutions',
    role: 'Programmer Analyst',
    period: 'Jan 2024 - Aug 2025',
    description: [
      'Worked on web applications using C# and ASP.NET Core MVC.',
      'Handled database tasks like writing SQL queries, stored procedures, and performance tuning.',
      'Used Entity Framework Core for data operations and supported frontend development.',
      'Participated in development, testing, and deployment activities in an Agile environment.',
    ],
  },
  {
    id: '3',
    company: 'Sakthi Auto Component Limited',
    role: 'Machine Operator Intern',
    period: '2023 - 2023',
    description: [
      'Operated drilling machines for precision machining of automotive components.',
      'Performed dimensional and visual inspection using measuring instruments.',
      'Maintained adherence to standard operating procedures (SOP) and safety guidelines.',
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: 'C#', icon: 'Code2', category: 'Backend' },
  { name: 'ASP.NET Core', icon: 'Globe', category: 'Backend' },
  { name: 'Dynamics 365', icon: 'Database', category: 'Tools' },
  { name: 'SQL Server', icon: 'Database', category: 'Backend' },
  { name: 'TypeScript', icon: 'FileJson', category: 'Frontend' },
  { name: 'Arduino', icon: 'Cpu', category: 'Other' },
  { name: 'Mechanical Design', icon: 'Settings', category: 'Other' },
  { name: 'Agile/Jira', icon: 'Layout', category: 'Tools' },
];
