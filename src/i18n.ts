import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        education: 'Education',
        experience: 'Experience',
        works: 'Work',
        contact: 'Contact',
        sub: {
          certificates: 'Certificates',
          workshops: 'Workshop',
          internships: 'Internships',
          publications: 'Publication',
          skills: 'Skills',
        }
      },
hero: {
  role: ' Software Engineer & Microsoft Dynamics Specialist | Automotive & Mechanical Engineering',
  intro: 'I am a passionate Software Engineer specializing in Microsoft Dynamics 365 and full-stack .NET development. My edge? Automobile and mechanical engineering knowledge. I bridge the gap between shop-floor operations and cloud enterprise systems — building custom plugins, integrations, and web apps that actually understand how the world works.',
  viewWork: 'View My Work',
  contactMe: 'Contact Me',
},
      education: {
        title: 'Education',
        eyebrow: 'Academic Background',
        masters: 'Master of Engineering',
        bachelors: 'Bachelor of Engineering',
        diploma: 'Diploma',
        hsc: 'HSC',
        sslc: 'SSLC',
        certifications: 'Certifications',
        workshops: 'Workshops',
        milestones: 'Milestones',
        viewCourses: 'View Courses',
        hideCourses: 'Hide Courses',
        visitWebsite: 'Visit Website',
        items: [
          // {
          //   type: 'masters',
          //   title: 'Master of Engineering',
          //   institution: 'University / Institution Name',
          //   location: 'Location Name',
          //   period: '2024 - 2026',
          //   description: 'Advanced Software Engineering',
          //   website: 'https://example.edu',     //----------(2:1 aspect ratio)(Panoramic/Landscape) (1200px x 600px) Note: Renders at h-[200px] with object-cover.
          //   image: '/images/main.webp',
          //   courses: [
          //     'Advanced Algorithms',
          //     'Cloud Architecture',
          //     'Enterprise Systems',
          //     'Deep Learning'
          //   ]
          // },
          {
            type: 'bachelors',
            title: 'Bachelor of Engineering',
            institution: 'Nandha Engineering College (Autonomous)',
            location: 'Vaikkaalmedu, Erode, Tamil Nadu',
            period: '2021 - 2024',
            description: 'Mechanical Engineering',
            website: 'https://nandhaengg.org',
            image: '/images/Nandha.webp',  //----------(2:1 aspect ratio)(Panoramic/Landscape) (1200px x 600px) Note: Renders at h-[200px] with object-cover.
            courses: [
              'Engineering Thermodynamics',
              'Fluid Mechanics',
              'Strength of Materials',
              'Manufacturing Processes',
              'Heat and Mass Transfer',
              'Dynamics of Machinery',
              'Design of Machine Elements',
              'Finite Element Analysis',
              'CAD / CAM',
              'Mechatronics',
              'Industrial Automation (SCADA & IIoT)',
              'Automobile Engineering'
            ]
          },
          {
            type: 'diploma',
            title: 'Diploma',
            institution: 'N.M.S.Kamaraj Polytechnic College',
            location: 'Pazhavilai, Kanyakumari, Tamil Nadu',
            period: '2019 - 2021',
            description: 'Diploma in Automobile Engineering',
            website: 'https://www.nmskamarajpolytechnic.com',
            image: '/images/Kamaraj.webp',  //----------(2:1 aspect ratio)(Panoramic/Landscape) (1200px x 600px) Note: Renders at h-[200px] with object-cover.
            courses: [
              'Strength of Materials',
              'Thermal Engineering',
              'Automobile Engineering',
              'Automobile Engines',
              'Automobile Chassis and Transmission',
              'Manufacturing Processes',
              'Computer Aided Design (CAD)',
              'Autotronics',
              'Industrial Management',
              'Vehicle Maintenance and Emission Control',
              'Automobile Body Building Engineering'
            ]
          },
          {
            type: 'hsc',
            title: 'Higher Secondary Certificate (HSC)',
            institution: 'Evans Matriculation Higher Secondary School',
            location: 'N.G.O. colony, Kanyakumari, Tamil Nadu',
            period: '2017 - 2019',
            description: 'Higher Secondary Education',
            website: 'https://www.evansmhss.com',
            image: '/images/Evans_2.webp',   //----------(2:1 aspect ratio)(Panoramic/Landscape) (1200px x 600px) Note: Renders at h-[200px] with object-cover.
            courses: [
              'Tamil',
              'English',
              'Physics',
              'Chemistry',
              'Mathematics',
              'Computer Science'
            ]
          },
          {
            type: 'sslc',
            title: 'Secondary School Leaving Certificate (SSLC)',
            institution: 'Evans Matriculation Higher Secondary School',
            location: 'N.G.O. colony, Kanyakumari, Tamil Nadu',
            period: '2016 - 2017',
            description: 'General Secondary Education.',
            website: 'https://www.evansmhss.com',
            image: '/images/Evans_1.webp',   //----------(2:1 aspect ratio)(Panoramic/Landscape) (1200px x 600px) Note: Renders at h-[200px] with object-cover.
            courses: [
              'Tamil',
              'English',
              'Mathematics',
              'Science',
              'Social Science'
            ]
          }
        ],
        certs: [
          // { name: 'Bachelor of Engineering (Degree)', issuer: 'Nandha Engineering College', date: '2024', image: '/images/degree-cert.webp' },
          // { name: 'Diploma in Automobile Engineering', issuer: 'N.M.S.Kamaraj Polytechnic College', date: '2021', image: '/images/diploma-cert.webp' },
          { name: 'Microsoft Certified: Dynamics 365 Fundamentals', issuer: 'Microsoft', date: '2023', image: '/images/main.webp' }
        ],
        workshopItems: [
          // { name: 'Advanced Dynamics 365 Integration', organizer: 'Microsoft Community', date: '2024' },
          // { name: 'Modern .NET Architecture', organizer: 'TechHub', date: '2023' }
        ]
      },
      experience: {
        title: 'Experience',
        eyebrow: 'Career Path',
        internshipsTitle: 'Internships',
        visitWebsite: 'Visit Website',
        items: [
          {
            company: 'Canvendor',
            role: 'Junior Software Engineer (Microsoft Practice)',
            location: 'Chennai, Tamil Nadu',
            period: 'Aug 2025 - Present',
            website: 'https://www.canvendor.com',
            image: '/images/Canvendor.webp',   //----------(16:9 aspect ratio) (1280px x 720px) Note: Uses responsive aspect-[4/3] on mobile and aspect-video on desktop.
            description: [
              '💼 Responsible for developing and maintaining integrations between Microsoft Dynamics 365 (CRM), Business Central, and external systems.',
              '🔗 Designed and implemented scalable middleware solutions using C# for seamless data exchange across systems.',
              '🔄 Managed end-to-end data flow scenarios including CRM to Business Central, external systems to CRM, and Business Central to third-party platforms.',
              '🌐 Developed and maintained RESTful APIs to ensure secure and efficient system communication.',
              '⚙️ Implemented server-side plugins and client-side customizations in Dynamics 365 for business logic and workflow automation.',
              '⚡ Worked on Microsoft Power Platform, including PowerApps and custom connectors, to extend system capabilities.',
              '🏢 Integrated enterprise applications such as HRMS, Tally, and document management systems.',
              '🧩 Ensured data consistency through validation, transformation, and synchronization processes.',
              '📊 Handled performance optimization, error handling, logging, and monitoring of integration processes.',
              '🤝 Collaborated with cross-functional teams to gather requirements and deliver scalable technical solutions.'
            ]
          },
          {
            company: 'UTsolutions',
            role: 'Programmer Analyst',
            location: 'Thirunelveli, Tamil Nadu',
            period: 'Jan 2024 - Aug 2025',
            website: 'https://www.utsolutions.co.in',
            image: '/images/UTS.webp',   //----------(16:9 aspect ratio) (1280px x 720px) Note: Uses responsive aspect-[4/3] on mobile and aspect-video on desktop.
            description: [
              '💼 Worked as a Programmer Analyst in a team of 6, primarily focusing on backend development using C# and ASP.NET Core MVC.',
              '👨‍💻 Developed and maintained application features, including bug fixes and enhancements to existing modules.',
              '🗄️ Wrote SQL queries and stored procedures to support application functionality and data operations.',
              '⚙️ Implemented data access logic using Entity Framework Core for CRUD operations and database interaction.',
              '🌐 Contributed to building web application components and supported frontend-backend integration.',
              '📦 Gained hands-on exposure to microservices architecture and modular application design.',
              '📊 Worked on CRM Sales-related modules, understanding and implementing business logic in code.',
              '🧪 Performed debugging, testing, and issue resolution to ensure application stability and performance.',
              '🔄 Followed SDLC and Agile practices, participating in daily stand-ups and working with Jira for task and ticket management.',
              '📝 Created and managed Jira tickets for tracking development tasks, bugs, and progress within the team.'
            ],
          }
        ],
        internships: [
          {
            company: 'Sakthi Auto Component Limited',
            role: 'Machine Operator Intern',
            location: 'Tiruppur, Tamil Nadu',
            period: '2023 - 2023',
            website: 'https://sakthiauto.com',
            image: '/images/Sakthi.webp',   //----------(16:9 aspect ratio) (1280px x 720px) Note: Uses responsive aspect-[4/3] on mobile and aspect-video on desktop.
            description: [
              '🔧 Completed a 3-month internship as part of academic curriculum, gaining hands-on experience in manufacturing and production operations.',
              '⚙️ Operated drilling and lathe machines for precision machining of automotive components.',
              '🏭 Worked in chassis production.',
              '📏 Performed dimensional and visual inspection using standard measuring instruments as part of quality assurance.',
              '✅ Ensured adherence to standard operating procedures (SOP) and safety guidelines in the production environment.',
              '⏱️ Contributed to achieving production targets within defined timelines through efficient machine handling.',
              '🧪 Gained practical exposure to quality assurance processes alongside production responsibilities.'
            ],
          }
        ]
      },
      projects: {
        title: 'Work',
        eyebrow: 'Selected Works',
        officialTitle: 'Official Projects',
        collegeTitle: 'College Projects',
        hobbyTitle: 'Hobby Projects',
        publications: 'Publications',
        skills: 'Skills',
        viewDetails: 'View Details',
        official: [
          {
            title: 'MoreSoak’s Beverage ERP',
            description: 'Enterprise-level ERP solution for beverage manufacturing — managing production, inventory, export logistics, and sales across multiple regions.End-to-end ERP system streamlining batch production tracking, global supply chain management, and multi-region sales workflows.',
            detailedDescription: 'Focused on Deal Management module development across multiple frameworks, including a ticket-based workflow for deal request processing. Designed and implemented core business logic for deal pricing, approval workflows, and discount hierarchies. Built data persistence layers using EF Core with complex entity relationships. Developed REST APIs to expose deal data to front-end modules and external systems. Integrated with inventory and production modules to ensure real-time deal validity based on stock availability. Optimized query performance for deal lookups across large datasets. Implemented role-based access control for deal approvals and multi-level authorization chains.',
            tags: ['C#', '.NET', 'ASP.NET Core', 'ASP.NET', 'SQL Server', 'EF Core', 'REST API', 'JavaScript', 'HTML', 'CSS', 'Jira', 'Agile', 'Postman', 'Git'],          
            details: 'Implemented sales forecasting module and multi-currency logic, reducing manual effort by 40% and enabling cross-border sales.',
            image: '/images/Moresoaks.webp'  //-----(16:10 aspect ratio) (Technical Widescreen) (1600px x 1000px)
          }
        ],
        college: [
          {
            title: "Waste Segregation System",
            description: "Automated dry/wet municipal waste segregation system using top-mounted sensor array with real-time classification and servo-driven rotary bin positioning mechanism.",
            detailedDescription: "The system uses an Arduino UNO with moisture and proximity sensors mounted at the top of the drop zone. When waste falls, the sensors detect its type (wet or dry) in real-time. Based on the reading, a servo motor rotates the bin platform to place the correct container under the drop point. The project was developed by a team of 4 members under professor guidance and published in SCOPeX as the final year project. Total project cost was approximately ₹30,000 including components, prototyping, and testing.",
            tags: ["Arduino", "C/C++", "Embedded Systems", "MCP", "IoT", "Sensor Integration", "Automation", "Waste Management"],
            details: "Team of 4 under professor guidance. Published in SCOPeX. Achieved 92% classification accuracy. Demonstrated to municipal corporation. Final year project.",
            image: "/images/Waste.webp" //-----(16:10 aspect ratio) (Technical Widescreen) (1600px x 1000px)
          },
          {
            title: "Pneumatic Air Engine",
            description: "Designed and developed a Pneumatic Air Engine that converts compressed air into mechanical motion.",
            detailedDescription: "Engineered a functional prototype of a pneumatic engine using a piston-cylinder arrangement to harness the energy of compressed air. The project involved precise mechanical calculations for valve timing and cylinder compression ratios. The prototype demonstrated the potential for clean energy alternatives in small-scale industrial applications and was presented at the college expo.",
            tags: ["Mechanical Design", "Pneumatics", "Prototyping", "Compressed Air Systems", "Alternative Energy"],
            details: "Team of 4 under professor guidance. Presented at college expo. Third year project.",
            image: '/images/Air.webp' //-----(16:10 aspect ratio) (Technical Widescreen) (1600px x 1000px)
          }
        ],
        hobby: [
          // {
          //   title: 'Tech Blog Engine',
          //   description: 'A personal blog system built to document my learning journey in .NET and Dynamics 365.',
          //   detailedDescription: 'A custom-built blogging platform focused on technical content sharing. It features a responsive layout designed for code readability, a built-in Markdown editor for easy post formatting, and a robust tagging system for content organization. Built with modern web technologies to ensure high performance, SEO optimization, and a seamless reading experience across all devices.',
          //   tags: ['React', 'Next.js', 'Tailwind'],
          //   details: 'Features a custom markdown editor and SEO optimization.',
          //   image: '/images/main.webp' //-----(16:10 aspect ratio) (Technical Widescreen) (1600px x 1000px)
          // }
        ]
      },
      contact: {
        eyebrow: 'Get in touch',
        title: "Let's build something extraordinary.",
        subtitle: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        copyEmail: 'Copy Email',
        copied: 'Copied!',
        location: {
          india: 'Nagercoil, Kanyakumari District, Tamil Nadu, India',
          // germany: 'Stuttgart, Baden-Württemberg, Germany'
        },
        about: {
          eyebrow: 'About Me',
          title: 'Innovate. Engineer. Drive.',
          bio1: 'I am a Software Engineer with a strong foundation in Mechanical and Automobile Engineering, which gives me a unique perspective on "how things work"—from physical gears to digital algorithms.',
          bio2: 'Specializing in Microsoft Dynamics 365 and the .NET ecosystem, I thrive on solving complex business problems with elegant, scalable code. My transition from hardware to software was driven by the infinite possibilities of digital architecture.',
          quotes: [
            '"Engineering is not just about building; it is about understanding the soul of the system."',
            '"Precision in mechanics, logic in software—excellence remains the same goal."',
            '"The best code is the one that solves the human problem behind the technical one."'
          ]
        }
      },
      whatIDo: {
        eyebrow: 'Expertise',
        title: 'What I Do',
        explore: 'Explore Expertise',
        items: [
          {
            "title": ".NET Full Stack Development",
            "description": "Building robust end-to-end applications with modern frameworks and scalable architectures."
          },
          {
            "title": "Microsoft Dynamics 365",
            "description": "Specialized CRM solutions tailored for complex business requirements."
          },
          {
            "title": "Business Central Integrations",
            "description": "Seamlessly integrating Business Central with other systems and third-party applications."
          },
          {
            "title": "Database Architecture",
            "description": "Optimizing SQL performance, complex query design, and efficient data modeling."
          },
          {
            "title": "System Architecture",
            "description": "Crafting the blueprint for scalable, maintainable, and high-performance digital systems."
          }
        ]
      },
      footer: {
        resume: 'View Resume',
        available: 'Available for hire',
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        education: 'Bildung',
        experience: 'Erfahrung',
        works: 'Arbeit',
        contact: 'Kontakt',
        sub: {
          certificates: 'Zertifikate',
          workshops: 'Workshops',
          internships: 'Praktika',
          publications: 'Publikation',
          skills: 'Fähigkeiten',
        }
      },
      hero: {
        role: 'Softwareentwickler & Microsoft Dynamics Spezialist',
        intro: 'Ich bin ein leidenschaftlicher Softwareentwickler, der sich auf Microsoft Dynamics 365 und Full-Stack-Webentwicklung spezialisiert hat. Ich schließe die Lücke zwischen komplexen Geschäftsanforderungen und eleganten technischen Lösungen.',
        viewWork: 'Meine Arbeit sehen',
        contactMe: 'Kontaktiere mich',
      },
      education: {
        title: 'Bildung',
        eyebrow: 'Akademischer Hintergrund',
        masters: 'Master of Engineering',
        bachelors: 'Bachelor of Engineering',
        diploma: 'Diplom',
        hsc: 'HSC',
        sslc: 'SSLC',
        certifications: 'Zertifizierungen',
        workshops: 'Workshops',
        milestones: 'Meilensteine',
        viewCourses: 'Kurse anzeigen',
        hideCourses: 'Kurse ausblenden',
        visitWebsite: 'Website besuchen',
        items: [
          // {
          //   type: 'masters',
          //   title: 'Master of Engineering',
          //   institution: 'Universität / Name der Institution',
          //   location: 'Standort Name',
          //   period: '2024 - 2026',
          //   description: 'Advanced Software Engineering',
          //   website: 'https://example.edu',
          //   image: '/images/main.webp',
          //   courses: [
          //     'Fortgeschrittene Algorithmen',
          //     'Cloud-Architektur',
          //     'Unternehmenssysteme',
          //     'Deep Learning'
          //   ]
          // },
          {
            type: 'bachelors',
            title: 'Bachelor of Engineering',
            institution: 'Nandha Engineering College (Autonom)',
            location: 'Vaikkaalmedu, Erode, Tamil Nadu',
            period: '2021 - 2024',
            description: 'Maschinenbau',
            website: 'https://nandhaengg.org',
            image: '/images/Nandha.webp',
            courses: [
              'Technische Thermodynamik',
              'Strömungsmechanik',
              'Festigkeitslehre',
              'Fertigungsprozesse',
              'Wärme- und Stoffübertragung',
              'Maschinendynamik',
              'Konstruktion von Maschinenelementen',
              'Finite-Elemente-Analyse',
              'CAD / CAM',
              'Mechatronik',
              'Industrielle Automatisierung (SCADA & IIoT)',
              'Automobiltechnik'
            ]
          },
          {
            type: 'diploma',
            title: 'Diplom',
            institution: 'N.M.S.Kamaraj Polytechnic College',
            location: 'Pazhavilai, Kanyakumari, Tamil Nadu',
            period: '2019 - 2021',
            description: 'Diplom in Automobiltechnik',
            website: 'https://www.nmskamarajpolytechnic.com',
            image: '/images/Kamaraj.webp',
            courses: [
              'Festigkeitslehre',
              'Thermische Technik',
              'Automobiltechnik',
              'Automobilmotoren',
              'Fahrwerk- und Getriebetechnik',
              'Fertigungsprozesse',
              'Computer-Aided Design (CAD)',
              'Autotronik',
              'Industrielles Management',
              'Fahrzeugwartung und Emissionskontrolle',
              'Karosseriebau-Technik'
            ]
          },
          {
            type: 'hsc',
            title: 'Höhere Sekundarstufe (HSC)',
            institution: 'Evans Matriculation Higher Secondary School',
            location: 'N.G.O. colony, Kanyakumari, Tamil Nadu',
            period: '2017 - 2019',
            description: 'Höhere Sekundarbildung',
            website: 'https://www.evansmhss.com',
            image: '/images/Evans_2.webp',
            courses: [
              'Tamil',
              'Englisch',
              'Physik',
              'Chemie',
              'Mathematik',
              'Informatik'
            ]
          },
          {
            type: 'sslc',
            title: 'Sekundarschulabschluss (SSLC)',
            institution: 'Evans Matriculation Higher Secondary School',
            location: 'N.G.O. colony, Kanyakumari, Tamil Nadu',
            period: '2016 - 2017',
            description: 'Allgemeine Sekundarbildung.',
            website: 'https://www.evansmhss.com',
            image: '/images/Evans_1.webp',
            courses: [
              'Tamil',
              'Englisch',
              'Mathematik',
              'Naturwissenschaften',
              'Sozialwissenschaften'
            ]
          }
        ],
        certs: [
          // { name: 'Bachelor of Engineering (Abschluss)', issuer: 'Nandha Engineering College', date: '2024', image: '/images/degree-cert.webp' },
          // { name: 'Diplom in Automobiltechnik', issuer: 'N.M.S.Kamaraj Polytechnic College', date: '2021', image: '/images/diploma-cert.webp' },
          { name: 'Microsoft Certified: Dynamics 365 Fundamentals', issuer: 'Microsoft', date: '2023', image: '/images/main.webp' }
        ],
        workshopItems: [
          // { name: 'Fortgeschrittene Dynamics 365 Integration', organizer: 'Microsoft Community', date: '2024' },
        ]
      },
      experience: {
        title: 'Erfahrung',
        eyebrow: 'Werdegang',
        internshipsTitle: 'Praktika',
        visitWebsite: 'Website besuchen',
        items: [
          {
            company: 'Canvendor',
            role: 'Junior Softwareentwickler (Microsoft Practice)',
            location: 'Chennai, Tamil Nadu',
            period: 'Aug 2025 - Heute',
            website: 'https://canvendor.com',
            image: '/images/Canvendor.webp',
            description: [
              '💼 Verantwortlich für die Entwicklung und Wartung von Integrationen zwischen Microsoft Dynamics 365 (CRM), Business Central und externen Systemen.',
              '🔗 Entwurf und Implementierung skalierbarer Middleware-Lösungen mit C# für den nahtlosen Datenaustausch zwischen Systemen.',
              '🔄 Verwaltung von End-to-End-Datenflussszenarien, einschließlich CRM zu Business Central, externe Systeme zu CRM und Business Central zu Drittanbieter-Plattformen.',
              '🌐 Entwicklung und Wartung von RESTful APIs zur Gewährleistung einer sicheren und effizienten Systemkommunikation.',
              '⚙️ Implementierung von serverseitigen Plugins und clientseitigen Anpassungen in Dynamics 365 für Geschäftslogik und Workflow-Automatisierung.',
              '⚡ Arbeit an der Microsoft Power Platform, einschließlich PowerApps und benutzerdefinierten Konnektoren, zur Erweiterung der Systemkapazitäten.',
              '🏢 Integration von Unternehmensanwendungen wie HRMS, Tally und Dokumentenmanagementsystemen.',
              '🧩 Sicherstellung der Datenkonsistenz durch Validierungs-, Transformations- und Synchronisationsprozesse.',
              '📊 Durchführung von Leistungsoptimierung, Fehlerbehandlung, Protokollierung und Überwachung von Integrationsprozessen.',
              '🤝 Zusammenarbeit mit funktionsübergreifenden Teams zur Erfassung von Anforderungen und Bereitstellung skalierbarer technischer Lösungen.'
            ]
          },
          {
            company: 'UTsolutions',
            role: 'Programmanalytiker',
            location: 'Thirunelveli, Tamil Nadu',
            period: 'Jan 2024 - Aug 2025',
            website: 'https://utsolutions.co.in',
            image: '/images/UTS.webp',
            description: [
              '💼 Arbeit als Programmanalytiker in einem Team von 6 Personen, primär fokussiert auf Backend-Entwicklung mit C# und ASP.NET Core MVC.',
              '👨‍💻 Entwicklung und Wartung von Anwendungsfunktionen, einschließlich Fehlerbehebungen und Erweiterungen bestehender Module.',
              '🗄️ Schreiben von SQL-Abfragen und gespeicherten Prozeduren zur Unterstützung der Anwendungsfunktionalität und Datenoperationen.',
              '⚙️ Implementierung von Datenzugriffslogik mit Entity Framework Core für CRUD-Operationen und Datenbankinteraktion.',
              '🌐 Beitrag zum Aufbau von Webanwendungskomponenten und Unterstützung der Frontend-Backend-Integration.',
              '📦 Praktische Erfahrung mit Microservices-Architektur und modularer Anwendungsgestaltung.',
              '📊 Arbeit an CRM-Vertriebsmodulen, Verständnis und Implementierung von Geschäftslogik im Code.',
              '🧪 Durchführung von Debugging, Testen und Problemlösung zur Gewährleistung der Anwendungsstabilität und -leistung.',
              '🔄 Einhaltung von SDLC- und Agile-Praktiken, Teilnahme an täglichen Stand-ups und Arbeit mit Jira für Aufgaben- und Ticketmanagement.',
              '📝 Erstellung und Verwaltung von Jira-Tickets zur Verfolgung von Entwicklungsaufgaben, Fehlern und Fortschritten im Team.'
            ],
          }
        ],
        internships: [
          {
            company: 'Sakthi Auto Component Limited',
            role: 'Maschinenbediener-Praktikant',
            location: 'Erode, Tamil Nadu',
            period: '2023 - 2023',
            website: 'https://sakthiauto.com',
            image: '/images/Sakthi.webp',
            description: [
              '🔧 Abschluss eines 3-monatigen Praktikums als Teil des akademischen Lehrplans, Erwerb praktischer Erfahrungen in Fertigungs- und Produktionsabläufen.',
              '⚙️ Bedienung von Bohr- und Drehmaschinen zur Präzisionsbearbeitung von Automobilkomponenten.',
              '🏭 Arbeit in der Fahrwerksproduktion als Bediener, Beitrag zur Erreichung der täglichen Produktionsziele.',
              '📏 Durchführung von Maß- und Sichtprüfungen mit Standardmessinstrumenten im Rahmen der Qualitätssicherung.',
              '✅ Sicherstellung der Einhaltung von Standardarbeitsanweisungen (SOP) und Sicherheitsrichtlinien in der Produktionsumgebung.',
              '⏱️ Beitrag zur Erreichung der Produktionsziele innerhalb definierter Zeitpläne durch effizine Maschinenführung.',
              '🧪 Erwerb praktischer Erfahrungen in Qualitätssicherungsprozessen neben den Produktionsaufgaben.'
            ],
          }
        ]
      },
      projects: {
        title: 'Arbeit',
        eyebrow: 'Ausgewählte Werke',
        officialTitle: 'Offizielle Projekte',
        collegeTitle: 'College-Projekte',
        hobbyTitle: 'Hobby-Projekte',
        publications: 'Publikationen',
        skills: 'Fähigkeiten',
        viewDetails: 'Details anzeigen',
        official: [
          {
            title: "MoreSoaks Getränke-ERP",
            description: "Unternehmensweites ERP-System für die Getränkeherstellung – verwaltet Produktion, Lagerbestand, Exportlogistik und Vertrieb über mehrere Regionen hinweg. End-to-End-ERP-Lösung zur Optimierung der Chargenverfolgung, des globalen Lieferkettenmanagements und von Vertriebsprozessen in verschiedenen Regionen.",
            detailedDescription: "Fokus auf die Entwicklung des Deal-Management-Moduls über mehrere Frameworks hinweg, einschließlich eines ticketbasierten Workflows zur Verarbeitung von Deal-Anfragen. Entwurf und Implementierung der zentralen Geschäftslogik für Preisgestaltung, Genehmigungsprozesse und Rabattstrukturen. Aufbau von Datenpersistenzschichten mit EF Core unter Verwendung komplexer Entitätsbeziehungen. Entwicklung von REST-APIs zur Bereitstellung von Deal-Daten für Frontend-Module und externe Systeme. Integration mit Lager- und Produktionsmodulen, um die Echtzeit-Gültigkeit von Deals basierend auf der Lagerverfügbarkeit sicherzustellen. Optimierung der Abfrageleistung für Deal-Suchen in großen Datenmengen. Implementierung von rollenbasierter Zugriffskontrolle für Genehmigungen sowie mehrstufigen Autorisierungsketten.",
            tags: ["C#", ".NET", "ASP.NET Core", "ASP.NET", "SQL Server", "EF Core", "REST API", "JavaScript", "HTML", "CSS", "Jira", "Agile", "Postman", "Git"],
            details: "Implementierung eines Verkaufsprognosemoduls sowie einer Mehrwährungslogik, wodurch der manuelle Aufwand um 40 % reduziert und grenzüberschreitende Verkäufe ermöglicht wurden.",
            image: "/images/Moresoaks.webp"
          }
        ],
        college: [
          {
            title: "Abfalltrennungssystem",
            description: "Automatisiertes System zur Trennung von trockenem und nassem kommunalem Abfall mithilfe eines oben montierten Sensorarrays mit Echtzeitklassifizierung und servo-gesteuertem Rotationsmechanismus für die Behälterpositionierung.",
            detailedDescription: "Das System verwendet ein Arduino UNO mit Feuchtigkeits- und Näherungssensoren, die oberhalb der Einwurfzone montiert sind. Wenn Abfall eingeworfen wird, erkennen die Sensoren in Echtzeit dessen Typ (nass oder trocken). Basierend auf den Messwerten dreht ein Servomotor die Plattform, um den passenden Behälter unter der Einwurfstelle zu positionieren. Das Projekt wurde von einem Team aus 4 Mitgliedern unter Anleitung eines Professors entwickelt und als Abschlussprojekt in SCOPeX veröffentlicht. Die Gesamtkosten des Projekts betrugen etwa ₹30.000, einschließlich Komponenten, Prototyping und Tests.",
            tags: ["Arduino", "C/C++", "Eingebettete Systeme", "MCP", "IoT", "Sensorintegration", "Automatisierung", "Abfallmanagement"],
            details: "Team aus 4 Mitgliedern unter Anleitung eines Professors. In SCOPeX veröffentlicht. 92 % Klassifikationsgenauigkeit erreicht. Der Stadtverwaltung vorgeführt. Abschlussprojekt.",
              image: '/images/Waste.webp'
          },
          {
            title: "Pneumatischer Luftmotor",
            description: "Entwurf und Entwicklung eines pneumatischen Luftmotors, der Druckluft in mechanische Bewegung umwandelt.",
            detailedDescription: "Entwicklung eines funktionsfähigen Prototyps eines pneumatischen Motors unter Verwendung einer Kolben-Zylinder-Anordnung zur Nutzung der Energie von Druckluft. Das Projekt umfasste präzise mechanische Berechnungen für Ventilsteuerzeiten und Zylinderkompressionsverhältnisse. Der Prototyp demonstrierte das Potenzial sauberer Energiealternativen für kleinmaßstäbliche industrielle Anwendungen und wurde auf der Hochschulmesse präsentiert.",
            tags: ["Maschinendesign", "Pneumatik", "Prototyping", "Druckluftsysteme", "Alternative Energie"],
            details: "Team von 4 Mitgliedern unter Anleitung eines Professors. Auf der Hochschulmesse präsentiert. Projekt im dritten Studienjahr.",
            image: '/images/Air.webp'
          }
        ],
        hobby: [
          // {
          //   title: 'Tech-Blog-Engine',
          //   description: 'Ein persönliches Blog-System, das gebaut wurde, um meine Lernreise in .NET und Dynamics 365 zu dokumentieren.',
          //   detailedDescription: 'Eine maßgeschneiderte Blogging-Plattform mit Fokus auf den Austausch technischer Inhalte. Sie verfügt über ein responsives Layout, das auf die Lesbarkeit von Code ausgelegt ist, einen integrierten Markdown-Editor für die einfache Formatierung von Beiträgen und ein robustes Tagging-System für die Inhaltsorganisation. Entwickelt mit modernen Webtechnologien, um hohe Leistung, SEO-Optimierung und ein nahtloses Leseerlebnis auf allen Geräten zu gewährleisten.',
          //   tags: ['React', 'Next.js', 'Tailwind'],
          //   details: 'Verfügt über einen benutzerdefinierten Markdown-Editor und SEO-Optimierung.',
          //   image: '/images/main.webp'
          // }
       ]
      },
      contact: {
        eyebrow: 'Kontakt aufnehmen',
        title: 'Lassen Sie uns etwas Außergewöhnliches bauen.',
        subtitle: 'Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Visionen zu sein.',
        copyEmail: 'E-Mail kopieren',
        copied: 'Kopiert!',
        location: {
          india: 'Nagercoil, Distrikt Kanyakumari, Tamil Nadu, Indien',
        //  germany : 'Stuttgart, Baden-Württemberg, Deutschland'
        },
        about: {
          eyebrow: 'Über mich',
          title: 'Innovation. Technik. Antrieb.',
          bio1: 'Ich bin ein Softwareentwickler mit einem starken Fundament im Maschinenbau und in der Automobiltechnik, was mir eine einzigartige Perspektive darauf gibt, „wie Dinge funktionieren“ – von physischen Zahnrädern bis hin zu digitalen Algorithmen.',
          bio2: 'Spezialisert auf Microsoft Dynamics 365 und das .NET-Ökosystem, liebe ich es, komplexe Geschäftsprobleme mit elegantem, skalierbarem Code zu lösen. Mein Übergang von Hardware zu Software wurde von den unendlichen Möglichkeiten digitaler Architektur angetrieben.',
          quotes: [
            '„Engineering bedeutet nicht nur Konstruieren; es bedeutet, die Seele des Systems zu verstehen.“',
            '„Präzision in der Mechanik, Logik in der Software – Exzellenz bleibt das gleiche Ziel.“',
            '„Der beste Code ist derjenige, der das menschliche Problem hinter dem technischen löst.“'
          ]
        }
      },
      whatIDo: {
        eyebrow: 'Expertise',
        title: 'Was ich mache',
        explore: 'Expertise erkunden',
        items: [
          {
            "title": ".NET Full-Stack-Entwicklung",
            "description": "Erstellung robuster End-to-End-Anwendungen mit modernen Frameworks und skalierbaren Architekturen."
          },
          {
            "title": "Microsoft Dynamics 365",
            "description": "Spezialisierte CRM-Lösungen, zugeschnitten auf komplexe Geschäftsanforderungen."
          },
          {
            "title": "Business Central Integrationen",
            "description": "Nahtlose Integration von Business Central mit anderen Systemen und Drittanbieter-Anwendungen."
          },
          {
            "title": "Datenbankarchitektur",
            "description": "Optimierung der SQL-Leistung, Entwicklung komplexer Abfragen und effiziente Datenmodellierung."
          },
          {
            "title": "Systemarchitektur",
            "description": "Entwurf von skalierbaren, wartbaren und leistungsstarken digitalen Systemlandschaften."
          }
        ]
      },

      footer: {
        resume: 'Lebenslauf anzeigen',
        available: 'Verfügbar für Anfragen',
      }
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
