export const content = {
  ar: {
    dir: 'rtl',
    langBtn: 'English',

    nav: {
      about: 'نبذة عني',
      projects: 'المشاريع',
      skills: 'المهارات',
      experience: 'الخبرة',
      certificates: 'الشهادات',
      contact: 'تواصل معي'
    },

    hero: {
      role: 'مطورة برمجيات وذكاء اصطناعي',
      greeting: 'أهلاً، أنا',
      name: 'جود',
      bio: 'خريجة تقنية معلومات شغوفة بالذكاء الاصطناعي وتطوير تطبيقات الويب المتكاملة، وأسعى إلى بناء أنظمة عملية تجمع بين الذكاء وسهولة الاستخدام.',
      viewProjects: 'تصفح المشاريع',
      contactMe: 'تواصل معي'
    },

    about: {
      title: 'نبذة عني',
      text: 'أنا جود الشهري، خريجة تقنية معلومات من جامعة الملك عبدالعزيز مع مرتبة الشرف الأولى. أهتم بتطوير تطبيقات الويب والذكاء الاصطناعي، وأستمتع بتحويل الأفكار إلى أنظمة عملية وسهلة الاستخدام. لدي خبرة في تطوير تطبيقات Full-Stack وربط الواجهات الأمامية بالخدمات الخلفية وواجهات الذكاء الاصطناعي.'
    },

    skills: {
      title: 'المهارات',

      categories: {
        ai: {
          title: 'الذكاء الاصطناعي والرؤية الحاسوبية',
          items: [
            'YOLOv8 OBB',
            'ResNet18',
            'Deep Learning',
            'Image Processing',
           
          ]
        },

        fullStack: {
          title: 'تطوير الويب المتكامل',
          items: [
            'React',
            'Django REST Framework',
            'API Integration',
            'HTML',
            'CSS',
            'JavaScript'
          ]
        },

        databases: {
          title: 'قواعد البيانات والخدمات السحابية',
          items: [
            'Supabase',
            'PostgreSQL'
          ]
        },

        programming: {
          title: 'لغات البرمجة',
          items: [
            'Python',
            'JavaScript'
          ]
        },

        aiTools: {
          title: 'أدوات الذكاء الاصطناعي',
          items: [
            'Groq AI',
            'Botpress'
          ]
        },

        professional: {
          title: 'المهارات الشخصية',
          items: [
            'حل المشكلات',
            'العمل الجماعي',
            'التواصل',
            'التعلم السريع',
            'القيادة'
          ]
        }
      }
    },

    projects: {
      featuredLabel: 'مشروع مميز',
     otherProjects: 'مشاريع أخرى',

      title: 'المشاريع',
      subtitle: 'مشاريع تجمع بين الذكاء الاصطناعي وتطوير الأنظمة العملية.',

     dentek: {
  title: 'Dentek',
  subtitle: 'نظام ذكي لتحليل صور الأشعة السنية',
  type: 'مشروع التخرج',
  date: '2025 – 2026',

  description:
    'منصة ويب تعتمد على الذكاء الاصطناعي لتحليل صور الأشعة السنية واستخراج النتائج والتوصيات لمساعدة أطباء الأسنان في عملية التشخيص.',

  highlights: [
    'تطوير نماذج YOLOv8 OBB وResNet18 لمهام الكشف والتصنيف.',
    'دمج Groq AI لتوليد توصيات آلية بناءً على نتائج التحليل.',
    'تطوير تطبيق Full-Stack باستخدام Django REST Framework وReact.'
  ],

  technologies: [
    'YOLOv8 OBB',
    'ResNet18',
    'Django REST Framework',
    'React',
    'Groq AI',
    'Python'
  ],

  caseStudyButton: 'استكشاف المشروع',

  caseStudy: {
    problemTitle: 'المشكلة',
    problem:
      'تحتاج عملية مراجعة صور الأشعة السنية إلى وقت وخبرة، وقد يكون من المفيد توفير نظام يساعد طبيب الأسنان في تحليل الصور ومراجعة النتائج بشكل أسرع.',

    solutionTitle: 'الحل',
    solution:
      'تم تطوير منصة ويب تجمع بين تحليل صور الأشعة باستخدام نماذج الذكاء الاصطناعي وواجهة تفاعلية تتيح للطبيب رفع الصور ومراجعة نتائج التحليل والتقارير.',

    roleTitle: 'دوري في المشروع',
    role:
      'شاركت في تطوير النظام وربط الواجهة الأمامية بالواجهة الخلفية، وإدارة بيانات المرضى، وعرض نتائج تحليل الأشعة داخل المنصة.',

    workflowTitle: 'كيف يعمل النظام؟',

    workflow: [
      'رفع صورة الأشعة',
      'معالجة وتحليل الصورة',
      'استخراج نتائج التحليل',
      'عرض النتائج للطبيب',
      'إنشاء التقرير'
    ],

    techTitle: 'التقنيات المستخدمة'
  }
},
      agricultural: {
        title: 'منصة الاستثمار الزراعي',
        subtitle: 'منصة لربط المزارعين بالجهات التمويلية والمشترين والموردين',
        type: 'مشروع التدريب',
        date: '2025',
        description: 'منصة ويب تهدف إلى تسهيل التواصل بين المزارعين والجهات التمويلية والمشترين والموردين، مع توفير أدوات لإدارة طلبات التمويل والخطط الزراعية.',
        highlights: [
          'تطوير واجهات الويب باستخدام React.',
          'بناء chatbot باستخدام Botpress.',
          'إدارة قواعد البيانات والخدمات الخلفية باستخدام Supabase.',
          'ربط الواجهات الأمامية مع APIs وخدمات الذكاء الاصطناعي.'
        ],
        technologies: [
          'React',
          'Botpress',
          'Supabase',
          'APIs'
        ],
        button: 'عرض المشروع',
        link:'https://github.com/joudalshehri85/Dentek'
      },

      mustarad: {
        title: ' منصة مسترد',
        subtitle: 'منصة ويب جامعية للإبلاغ عن المفقودات واستعادتها داخل الحرم الجامعي',
        type: 'مشروع ويب جامعي',
        date: '2024',
        description: 'غياب منصة موحدة أو مكان محدد في الجامعة للإبلاغ عن المفقودات واستعادتها، مما يؤدي إلى تشتت الطلاب وضياع مقتنياتهم',
        highlights: [
          'تطوير واجهات تسجيل الدخول والصفحة الرئيسية وبناء تجربة مستخدم متناسقة.',
          'بناء نظام متكامل للإبلاغ عن المفقودات يتضمن رفع الصور وتحديد المواقع.',
          'توفير تصفية ذكية للمفقودات (أجهزة، ملابس، أخرى) ومحرك بحث بالكلمات المفتاحية.',
          'العمل ضمن فريق طلابي متكامل وتوزيع المهام وفق أحدث ممارسات الويب.'
        ],
        technologies: [
          'React.js',
          'JavaScript',
          'Node.js',
          'Express',
          'Multer',
          'HTML & CSS'
        ],
        button: 'عرض المشروع',
        link: 'https://github.com/joudalshehri85/Mustarad' // ضعي رابط مستودع المشروع إن وجد
      }
    },

    experience: {
      title: 'الخبرة',

      sallamTech: {
        role: 'متدربة تطوير Full-Stack وذكاء اصطناعي',
        company: 'SallamTech',
        location: 'جدة',
        date: '05/2025 – 07/2025',
        description: 'تجربة تدريبية عملية ركزت على تطوير تطبيقات الويب المتكاملة ودمج حلول الذكاء الاصطناعي والخدمات السحابية.',
        responsibilities: [
          'تطوير تطبيقات ويب متجاوبة باستخدام React.',
          'بناء حلول chatbot باستخدام Botpress.',
          'إدارة قواعد البيانات والخدمات الخلفية باستخدام Supabase.',
          'ربط الواجهات الأمامية مع APIs وخدمات الذكاء الاصطناعي.'
        ]
      }
    },

    education: {
      title: 'التعليم',

      degree: 'بكالوريوس تقنية المعلومات',
      university: 'جامعة الملك عبدالعزيز',
      location: 'جدة',
      date: '2022 – 2026',
      gpa: '4.84 / 5.00',
      honors: 'مرتبة الشرف الأولى'
    },

    certificates: {
      title: 'الشهادات',

      items: [
        {
          title: 'أساسيات جافاسكربت 1 (JavaScript Essentials 1)',
          issuer: 'أكاديمية سيسكو للشبكات (Cisco)'
        },
        {
          title: 'أساسيات جافاسكربت 2 (JavaScript Essentials 2)',
          issuer: 'أكاديمية سيسكو للشبكات (Cisco)'
        },
        {
          title: 'مقدمة في النماذج اللغوية الكبيرة (LLMs)',
          issuer: 'آي بي إم (IBM SkillsBuild)'
        },
        {
          title: 'استخدام الذكاء الاصطناعي التوليدي في تطوير البرمجيات',
          issuer: 'آي بي إم (IBM SkillsBuild)'
        },
        {
          title: 'بناء أول روبوت محادثة ذكي (Chatbot)',
          issuer: 'آي بي إم (IBM SkillsBuild)'
        }
      ],

      button: 'عرض الشهادة'
    },

    contact: {
      title: 'تواصل معي',
      subtitle: 'هل لديك فرصة أو مشروع؟ يسعدني التواصل معك.',
      email: 'البريد الإلكتروني',
      linkedin:'لينكد ان',
      github: 'قيت هب',
      cv: 'تحميل السيرة الذاتية'
    },

    footer: {
      text: 'جود الشهري — مطورة برمجيات وذكاء اصطناعي',
      rights: 'جميع الحقوق محفوظة.'
    }
  },

  en: {
    dir: 'ltr',
    langBtn: 'العربية',

    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact'
    },

    hero: {
      role: 'Full-Stack & AI Developer',
      greeting: "Hello, I'm",
      name: 'Joud',
      bio: 'An Information Technology graduate passionate about Artificial Intelligence and Full-Stack Web Development, building practical systems that combine intelligent solutions with intuitive user experiences.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me'
    },

    about: {
      title: 'About Me',
      text: "I'm Joud Alshehri, an Information Technology graduate from King Abdulaziz University with First Class Honors. I'm interested in Artificial Intelligence and Full-Stack Web Development, and I enjoy turning ideas into practical and user-friendly systems. I have experience building full-stack applications and integrating frontend interfaces with backend services and AI solutions."
    },

    skills: {
      title: 'Skills',

      categories: {
        ai: {
          title: 'AI & Computer Vision',
          items: [
            'YOLOv8 OBB',
            'ResNet18',
            'Deep Learning',
            'Image Processing',
           
          ]
        },

        fullStack: {
          title: 'Full-Stack Development',
          items: [
            'React',
            'Django REST Framework',
            'API Integration',
            'HTML',
            'CSS',
            'JavaScript'
          ]
        },

        databases: {
          title: 'Databases & Cloud',
          items: [
            'Supabase',
            'PostgreSQL'
          ]
        },

        programming: {
          title: 'Programming',
          items: [
            'Python',
            'JavaScript'
          ]
        },

        aiTools: {
          title: 'AI Tools',
          items: [
            'Groq AI',
            'Botpress'
          ]
        },

        professional: {
          title: 'Professional Skills',
          items: [
            'Problem Solving',
            'Teamwork',
            'Communication',
            'Fast Learning',
            'Leadership'
          ]
        }
      }
    },

    projects: {
      featuredLabel: 'Featured Project',
      otherProjects: 'Other Projects',
      title: 'Projects',
      subtitle: 'Projects combining Artificial Intelligence with practical web development.',

      dentek: {
  title: 'Dentek',
  subtitle: 'AI-Powered Dental X-Ray Analysis System',
  type: 'Graduation Project',
  date: '2025 – 2026',

  description:
    'A web-based platform that uses Artificial Intelligence to analyze dental X-ray images and generate findings and recommendations to support dentists in the diagnostic process.',

  highlights: [
    'Developed YOLOv8 OBB and ResNet18 models for detection and classification tasks.',
    'Integrated Groq AI to generate automated recommendations based on analysis results.',
    'Built the full-stack web application using Django REST Framework and React.'
  ],

  technologies: [
    'YOLOv8 OBB',
    'ResNet18',
    'Django REST Framework',
    'React',
    'Groq AI',
    'Python'
  ],

  caseStudyButton: 'Explore Case Study',

  caseStudy: {
    problemTitle: 'The Problem',
    problem:
      'Reviewing dental X-ray images can require significant time and clinical expertise. An intelligent system can help dentists review image analysis and findings more efficiently.',

    solutionTitle: 'The Solution',
    solution:
      'Dentek combines AI-based dental X-ray analysis with an interactive web platform where dentists can upload X-rays, review analysis results, and access generated reports.',

    roleTitle: 'My Contribution',
    role:
      'Contributed to system development, frontend-backend integration, patient data management, and displaying X-ray analysis results within the platform.',

    workflowTitle: 'How It Works',

    workflow: [
      'Upload X-ray',
      'Process and analyze image',
      'Extract analysis results',
      'Display findings',
      'Generate report'
    ],

    techTitle: 'Technologies'
  }
},
      agricultural: {
        title: 'Agricultural Investment Platform',
        subtitle: 'A platform connecting farmers with financiers, buyers, and suppliers',
        type: 'Training Project',
        date: '2025',
        description: 'A web platform designed to connect farmers with financiers, buyers, and suppliers while providing tools for managing funding requests and agricultural plans.',
        highlights: [
          'Developed responsive web interfaces using React.',
          'Built an AI chatbot using Botpress.',
          'Managed databases and backend services using Supabase.',
          'Integrated frontend interfaces with APIs and AI services.'
        ],
        technologies: [
          'React',
          'Botpress',
          'Supabase',
          'APIs'
        ],
        button: 'View Project',
        link: 'https://github.com/joudalshehri85/Dentek'
      },

     mustarad: {
        title: 'Mustarad',
        subtitle: 'Campus Lost and Found Web Application',
        type: 'University Web Project',
        date: '2024',
        description: 'A web platform enabling university students to efficiently report lost items and browse found ones, featuring intuitive keyword search, category filtering, and image upload capabilities.',
        highlights: [
          'Developed the authentication/login flow and responsive landing page experience.',
          'Implemented reporting workflows allowing photo uploads via Multer and precise location tagging.',
          'Engineered item discovery features with category filtering (Devices, Clothing, Other) and live keyword search.',
          'Collaborated in a multidisciplinary team to ensure unified design patterns and API connectivity.'
        ],
        technologies: [
          'React.js',
          'JavaScript',
          'Node.js',
          'Express',
          'Multer',
          'HTML & CSS'
        ],
        button: 'View Project',
        link: 'https://github.com/joudalshehri85/Mustarad' // ضعي رابط مستودع المشروع إن وجد
      }
    },

    experience: {
      title: 'Experience',

      sallamTech: {
        role: 'Full-Stack & AI Developer Intern',
        company: 'SallamTech',
        location: 'Jeddah',
        date: '05/2025 – 07/2025',
        description: 'A hands-on internship focused on full-stack web development, AI solutions, and cloud-based services.',
        responsibilities: [
          'Developed responsive full-stack web applications using React.',
          'Built AI chatbot solutions using Botpress.',
          'Managed cloud databases and backend services using Supabase.',
          'Integrated frontend interfaces with backend APIs and AI services.'
        ]
      }
    },

    education: {
      title: 'Education',

      degree: 'Bachelor of Information Technology',
      university: 'King Abdulaziz University',
      location: 'Jeddah',
      date: '2022 – 2026',
      gpa: '4.84 / 5.00',
      honors: 'First Class Honors'
    },

    certificates: {
      title: 'Certificates',

      items: [
        {
          title: 'JavaScript Essentials 1',
          issuer: 'Cisco Networking Academy'
        },
        {
          title: 'JavaScript Essentials 2',
          issuer: 'Cisco Networking Academy'
        },
        {
          title: 'Introduction to Large Language Models',
          issuer: 'IBM SkillsBuild'
        },
        {
          title: 'Use Generative AI for Software Development',
          issuer: 'IBM SkillsBuild'
        },
        {
          title: 'Build Your First Chatbot',
          issuer: 'IBM SkillsBuild'
        }
      ],

      button: 'View Certificate'
    },

    contact: {
      title: 'Get in Touch',
      subtitle: "Have an opportunity or a project in mind? I'd be happy to connect.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Download CV'
    },

    footer: {
      text: 'Joud Alshehri — Full-Stack & AI Developer',
      rights: 'All rights reserved.'
    }
  }
};