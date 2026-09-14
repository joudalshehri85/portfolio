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
      bio: 'خريجة تقنية معلومات شغوفة بالذكاء الاصطناعي وتطوير تطبيقات الويب، وأسعى إلى بناء أنظمة عملية تجمع بين الذكاء وسهولة الاستخدام.',
      viewProjects: 'تصفح المشاريع',
      contactMe: 'تواصل معي'
    },

    about: {
      title: 'نبذة عني',
      text: 'خريجة من جامعة الملك عبدالعزيز بتخصص تقنية المعلومات، حاصلة على مرتبة الشرف الأولى. مهتمة بتطوير تطبيقات الويب والذكاء الاصطناعي، ولدي خبرة في العمل على عدة مشاريع تقنية، من أبرزها مشروع التخرج Dentek، وهي منصة ويب تساعد أطباء الأسنان في تحليل صور الأشعة السينية باستخدام نماذج الذكاء الاصطناعي. كما اكتسبت خلال التدريب في شركة سلم تك خبرة في تطوير تطبيقات الويب وبناء روبوتات المحادثة.'
    },

    skills: {
      title: 'المهارات',

      categories: {
        ai: {
          title: 'الذكاء الاصطناعي والرؤية الحاسوبية',
          items: [
            'YOLOv8 OBB',
            'Deep Learning',
            'Image Processing'
          ]
        },

        fullStack: {
          title: 'تطوير الويب المتكامل',
          items: [
            'React',
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
            'JavaScript',
            'PHP'
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
        subtitle: 'منصة تحليل صور الأشعة السنية بالذكاء الاصطناعي',
        type: 'مشروع التخرج',
        date: '2025 – 2026',

        description:
          'منصة ويب تعتمد على الذكاء الاصطناعي لتحليل صور الأشعة السنية وعرض النتائج والتوصيات لمساعدة أطباء الأسنان في عملية التشخيص.',

        highlights: [
          'تطوير نموذج YOLOv8 OBB لتحليل صور الأشعة والكشف عن الحالات المرضية.',
          'ربط نموذج الذكاء الاصطناعي بواجهات النظام لعرض نتائج التحليل للطبيب.',
          'دمج Groq AI لتوليد توصيات للطبيب بناءً على نتائج التحليل.',
          'تصميم وتطوير واجهات المنصة باستخدام React.',
          'تطوير واجهة التقرير لعرض النتائج والتوصيات مع إمكانية تنزيل التقرير بصيغة PDF وإضافة ملاحظات الطبيب.'
        ],

        technologies: [
          'YOLOv8 OBB',
          'React',
          'Groq AI',
          'Python'
        ],

        caseStudyButton: 'استكشاف المشروع',

        caseStudy: {
          problemTitle: 'المشكلة',
          problem:
            'تحتاج مراجعة صور الأشعة السنية إلى وقت وخبرة، وقد يساعد توفير نظام ذكي في تسريع تحليل الصور ومراجعة النتائج.',

          solutionTitle: 'الحل',
          solution:
            'تم تطوير منصة ويب تجمع بين تحليل صور الأشعة باستخدام الذكاء الاصطناعي وواجهة تفاعلية تتيح للطبيب رفع الصور ومراجعة نتائج التحليل والتوصيات والتقرير.',

          roleTitle: 'دوري في المشروع',
          role:
            'ساهمت في تطوير نموذج الذكاء الاصطناعي باستخدام YOLOv8 OBB، وربطه بواجهات النظام، وتصميم وتطوير واجهات المنصة، ودمج Groq AI لتوليد التوصيات، بالإضافة إلى تطوير واجهة التقرير وإتاحة تنزيله بصيغة PDF وإضافة ملاحظات الطبيب.',

          workflowTitle: 'كيف يعمل النظام؟',

          workflow: [
            'رفع صورة الأشعة',
            'معالجة وتحليل الصورة',
            'استخراج نتائج التحليل',
            'عرض النتائج والتوصيات للطبيب',
            'إنشاء التقرير وتنزيله بصيغة PDF'
          ],

          techTitle: 'التقنيات المستخدمة'
        }
      },

      agricultural: {
        title: 'المنصة الزراعية',
        subtitle: 'منصة لربط المزارعين بالجهات التمويلية والمشترين والموردين',
        type: 'مشروع التدريب',
        date: '2025',

        description:
          'منصة ويب تهدف إلى تسهيل التواصل بين المزارعين والجهات التمويلية والمشترين والموردين، مع توفير خدمات رقمية للمستخدمين.',

        highlights: [
          'تصميم وتطوير جزء من واجهات المنصة باستخدام React.',
          'تصميم وتطوير روبوت محادثة باستخدام Botpress لدعم خدمة العملاء والإجابة عن الأسئلة المتكررة.',
          'ربط روبوت المحادثة بقاعدة البيانات باستخدام Supabase لاسترجاع المعلومات المطلوبة.',
          'ربط روبوت المحادثة بواجهات المنصة لتمكين المستخدمين من الوصول إلى خدمة المحادثة.'
        ],

        technologies: [
          'React',
          'Botpress',
          'Supabase'
        ],

        button: 'عرض المشروع',
        link: 'https://github.com/joudalshehri85/Dentek'
      },

      mustarad: {
        title: 'مسترد',
        subtitle: 'منصة ويب جامعية للإبلاغ عن المفقودات والموجودات',
        type: 'مشروع ويب جامعي',
        date: '2024',

        description:
          'منصة ويب جامعية تهدف إلى تسهيل الإبلاغ عن المفقودات والموجودات ومساعدة الطلاب في الوصول إلى البلاغات.',

        highlights: [
          'تصميم وتطوير واجهتي تسجيل الدخول والصفحة الرئيسية للمنصة.',
          'تطوير وظائف باستخدام PHP للتحقق من صحة المدخلات ومعالجة بيانات المستخدمين.',
          'المساهمة في تطوير منصة للإبلاغ عن المفقودات والموجودات.'
        ],

        technologies: [
          'PHP',
          'JavaScript',
          'HTML',
          'CSS'
        ],

        button: 'عرض المشروع',
        link: 'https://github.com/joudalshehri85/Mustarad'
      }
    },

    experience: {
      title: 'الخبرة',

      sallamTech: {
        role: 'متدربة تطوير Full-Stack وذكاء اصطناعي',
        company: 'SallamTech',
        location: 'جدة',
        date: '05/2025 – 07/2025',

        description:
          'تجربة تدريبية عملية ركزت على تطوير واجهات الويب، وبناء روبوتات المحادثة، وربطها بقواعد البيانات وواجهات المنصة.',

        responsibilities: [
          'تصميم وتطوير جزء من واجهات المنصة الزراعية باستخدام React.',
          'تصميم وتطوير روبوت محادثة باستخدام Botpress لدعم خدمة العملاء والإجابة عن الأسئلة المتكررة.',
          'ربط روبوت المحادثة بقاعدة البيانات باستخدام Supabase لاسترجاع المعلومات المطلوبة وتقديم إجابات للمستخدمين.',
          'ربط روبوت المحادثة بواجهات المنصة لتمكين المستخدمين من الوصول إلى خدمة المحادثة مباشرة.'
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
          issuer: 'أكاديمية سيسكو للشبكات (Cisco)',
          link:'https://www.credly.com/badges/e9bd872a-a985-4ba9-8799-320bc0fc254b/public_url'
        },
        {
          title: 'أساسيات جافاسكربت 2 (JavaScript Essentials 2)',
          issuer: 'أكاديمية سيسكو للشبكات (Cisco)',
           link:'https://www.credly.com/badges/e184df81-420d-47c6-9680-6d591a975840/public_url'
        },
        {
          title: 'مقدمة إلى النماذج اللغوية الكبيرة (LLMs)',
          issuer: 'IBM SkillsBuild',
          link:'https://drive.google.com/file/d/1XnLmniPYU5wMVYlWX9cWlIyn1s50yl3W/view?pli=1'
        },
        {
          title: 'استخدام الذكاء الاصطناعي التوليدي في تطوير البرمجيات',
          issuer: 'IBM SkillsBuild',
           link:'https://drive.google.com/file/d/1bN78JCB1XFcnZEuPeKjf8V1rCHLPNllR/view'
        },
        {
          title: 'بناء أول روبوت محادثة باستخدام الذكاء الاصطناعي',
          issuer: 'IBM SkillsBuild',
           link:'https://drive.google.com/file/d/16qAPheIKswrxcgetgzwInh-1RGJMrYrO/view'
        }
      ],

      button: 'عرض الشهادة'
    },

    contact: {
      title: 'تواصل معي',
      subtitle: 'هل لديك فرصة أو مشروع؟ يسعدني التواصل معك.',
      email: 'البريد الإلكتروني',
      linkedin: 'لينكد إن',
      github: 'جيت هب',
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
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact Me'
    },

    hero: {
      role: 'Software and AI Developer',
      greeting: "Hello, I'm",
      name: 'Joud',
      bio: 'An Information Technology graduate passionate about artificial intelligence and web application development, seeking to build practical systems that combine intelligence and ease of use.',
      viewProjects: 'Browse Projects',
      contactMe: 'Contact Me'
    },

    about: {
      title: 'About Me',
      text: 'Information Technology graduate with First-Class Honors from King Abdulaziz University, passionate about web development and artificial intelligence. I have hands-on experience working on various technical projects, most notably my graduation project, Dentek—a web platform that assists dentists in analyzing X-ray images using AI models. Additionally, during my internship at Salamtech, I gained practical experience in developing web applications and building chatbots.'
    },

    skills: {
      title: 'Skills',

      categories: {
        ai: {
          title: 'Artificial Intelligence and Computer Vision',
          items: [
            'YOLOv8 OBB',
            'Deep Learning',
            'Image Processing'
          ]
        },

        fullStack: {
          title: 'Full-Stack Web Development',
          items: [
            'React',
            'API Integration',
            'HTML',
            'CSS',
            'JavaScript'
          ]
        },

        databases: {
          title: 'Databases and Cloud Services',
          items: [
            'Supabase',
            'PostgreSQL'
          ]
        },

        programming: {
          title: 'Programming Languages',
          items: [
            'Python',
            'JavaScript',
            'PHP'
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
          title: 'Soft Skills',
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
      subtitle: 'Projects combining artificial intelligence and practical systems development.',

      dentek: {
        title: 'Dentek',
        subtitle: 'AI-Powered Dental X-Ray Image Analysis Platform',
        type: 'Graduation Project',
        date: '2025 – 2026',

        description:
          'A web platform powered by artificial intelligence to analyze dental X-ray images and present results and recommendations to assist dentists in the diagnosis process.',

        highlights: [
          'Developing a YOLOv8 OBB model to analyze X-ray images and detect pathological conditions.',
          'Integrating the AI model with system interfaces to display analysis results to the doctor.',
          'Integrating Groq AI to generate recommendations for the doctor based on analysis results.',
          'Designing and developing platform interfaces using React.',
          'Developing the report interface to display findings and recommendations, with the ability to download the report as PDF and add doctor notes.'
        ],

        technologies: [
          'YOLOv8 OBB',
          'React',
          'Groq AI',
          'Python'
        ],

        caseStudyButton: 'Explore Project',

        caseStudy: {
          problemTitle: 'The Problem',
          problem:
            'Reviewing dental X-ray images requires time and expertise, and providing an intelligent system can help speed up image analysis and review results.',

          solutionTitle: 'The Solution',
          solution:
            'A web platform was developed that combines AI-based X-ray image analysis with an interactive interface allowing doctors to upload images and review analysis results, recommendations, and reports.',

          roleTitle: 'My Role in the Project',
          role:
            'Contributed to developing the AI model using YOLOv8 OBB, integrating it with system interfaces, designing and developing platform interfaces, integrating Groq AI to generate recommendations, in addition to developing the report interface, enabling PDF downloads, and adding doctor notes.',

          workflowTitle: 'How Does the System Work?',

          workflow: [
            'Upload X-ray image',
            'Process and analyze image',
            'Extract analysis results',
            'Display results and recommendations to the doctor',
            'Generate and download report as PDF'
          ],

          techTitle: 'Technologies Used'
        }
      },

      agricultural: {
        title: 'Agricultural Platform',
        subtitle: 'A platform to connect farmers with financing bodies, buyers, and suppliers',
        type: 'Internship Project',
        date: '2025',

        description:
          'A web platform aimed at facilitating communication between farmers, financing entities, buyers, and suppliers, while providing digital services to users.',

        highlights: [
          'Designing and developing part of the platform interfaces using React.',
          'Designing and developing a chatbot using Botpress to support customer service and answer frequently asked questions.',
          'Connecting the chatbot to the database using Supabase to retrieve requested information.',
          'Integrating the chatbot with platform interfaces to enable users to access the chat service.'
        ],

        technologies: [
          'React',
          'Botpress',
          'Supabase'
        ],

        button: 'View Project',
        link: 'https://github.com/joudalshehri85/Dentek'
      },

      mustarad: {
        title: 'Mustarad',
        subtitle: 'University web platform for reporting lost and found items',
        type: 'University Web Project',
        date: '2024',

        description:
          'A university web platform designed to simplify reporting lost and found items and help students access reports.',

        highlights: [
          'Designing and developing the login and homepage interfaces for the platform.',
          'Developing functions using PHP to validate inputs and process user data.',
          'Contributing to developing a platform for reporting lost and found items.'
        ],

        technologies: [
          'PHP',
          'JavaScript',
          'HTML',
          'CSS'
        ],

        button: 'View Project',
        link: 'https://github.com/joudalshehri85/Mustarad'
      }
    },

    experience: {
      title: 'Experience',

      sallamTech: {
        role: 'Full-Stack & AI Developer Intern',
        company: 'SallamTech',
        location: 'Jeddah',
        date: '05/2025 – 07/2025',

        description:
          'A practical internship focused on developing web interfaces, building chatbots, and connecting them with databases and platform interfaces.',

        responsibilities: [
          'Designing and developing part of the agricultural platform interfaces using React.',
          'Designing and developing a chatbot using Botpress to support customer service and answer frequently asked questions.',
          'Connecting the chatbot to the database using Supabase to retrieve requested information and provide answers to users.',
          'Integrating the chatbot with platform interfaces to enable users to access the chat service directly.'
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
          issuer: 'Cisco Networking Academy (Cisco)',
          link:'https://www.credly.com/badges/e9bd872a-a985-4ba9-8799-320bc0fc254b/public_url'
        },
        {
          title: 'JavaScript Essentials 2',
          issuer: 'Cisco Networking Academy (Cisco)',
         link:'https://www.credly.com/badges/e184df81-420d-47c6-9680-6d591a975840/public_url'

        },
        {
          title: 'Introduction to Large Language Models (LLMs)',
          issuer: 'IBM SkillsBuild',
          link:'https://drive.google.com/file/d/1XnLmniPYU5wMVYlWX9cWlIyn1s50yl3W/view?pli=1'
        },
        {
          title: 'Using Generative AI for Software Development',
          issuer: 'IBM SkillsBuild',
          link:'https://drive.google.com/file/d/1bN78JCB1XFcnZEuPeKjf8V1rCHLPNllR/view'
        },
        {
          title: 'Build Your First AI Chatbot',
          issuer: 'IBM SkillsBuild',
          link:'https://drive.google.com/file/d/16qAPheIKswrxcgetgzwInh-1RGJMrYrO/view'
        }
      ],

      button: 'View Certificate'
    },

    contact: {
      title: 'Contact Me',
      subtitle: 'Do you have an opportunity or a project? I would be happy to connect with you.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Download CV'
    },

    footer: {
      text: 'Joud Alshehri — Software and AI Developer',
      rights: 'All rights reserved.'
    }
 }}