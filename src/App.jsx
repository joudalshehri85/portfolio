import { content } from './content';
import logo from './assets/logo1.jpeg';
import dentekPreview from './assets/Dentek (2).png';
import { useEffect, useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
    setSelectedProject(null);
    setActiveSkill(null);
  };

  const t = content[lang];

  // Get all projects except title and featured Dentek
  const projectList = Object.entries(t.projects)
    .filter(
      ([key, item]) =>
        key !== 'title' &&
        key !== 'dentek' &&
        typeof item === 'object'
    )
    .map(([key, item]) => ({ key, ...item }));

  const featuredProject = t.projects.dentek;

  // Other projects only
  const otherProjects = projectList;

  const skillCategories = Object.values(t.skills.categories);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const getRelatedProjects = (skill) => {
    return [...projectList, { key: 'dentek', ...featuredProject }].filter(
      (project) =>
        project.technologies?.some((tech) =>
          tech.toLowerCase().includes(skill.toLowerCase())
        )
    );
  };

  const buildSteps =
    lang === 'ar'
      ? [
        {
          number: '01',
          title: 'أفهم',
          text: 'أحدد المشكلة واحتياجات المستخدم قبل البدء في بناء الحل.'
        },
        {
          number: '02',
          title: 'أصمم',
          text: 'أحوّل الفكرة إلى واجهات واضحة وتجربة استخدام بسيطة.'
        },
        {
          number: '03',
          title: 'أطوّر',
          text: 'أبني الواجهة والخدمات الخلفية وأربط مكونات النظام معًا.'
        },
        {
          number: '04',
          title: 'أدمج',
          text: 'أربط APIs وقواعد البيانات وحلول الذكاء الاصطناعي عند الحاجة.'
        },
        {
          number: '05',
          title: 'أحسّن',
          text: 'أختبر النظام وأراجع التفاصيل حتى يكون أكثر استقرارًا وسهولة.'
        }
      ]
      : [
        {
          number: '01',
          title: 'Understand',
          text: 'I define the problem and user needs before building the solution.'
        },
        {
          number: '02',
          title: 'Design',
          text: 'I turn the idea into clear interfaces and simple user experiences.'
        },
        {
          number: '03',
          title: 'Develop',
          text: 'I build the frontend and backend and connect the system components.'
        },
        {
          number: '04',
          title: 'Integrate',
          text: 'I connect APIs, databases, and AI solutions when needed.'
        },
        {
          number: '05',
          title: 'Improve',
          text: 'I test the system and refine the details for better stability and usability.'
        }
      ];

  const roleText =
    lang === 'ar'
      ? 'ساهمت في تطوير النظام، وربط الواجهة الأمامية بالخلفية، وإدارة بيانات المرضى وعرض نتائج التحليل.'
      : 'Contributed to system development, frontend-backend integration, patient data management, and displaying AI analysis results.';

  return (
    <div dir={t.dir} className="portfolio-app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar-container">
      <a href="#hero" className="nav-logo-btn" aria-label="Home">
        <img src={logo} alt="Joud logo" />
      </a>

      <nav className="nav-links-group">
        <a href="#about" className="nav-item">
          {t.nav.about}
        </a>

        <a href="#projects" className="nav-item">
          {t.nav.projects}
        </a>

        <a href="#skills" className="nav-item">
          {t.nav.skills}
        </a>

        <a href="#experience" className="nav-item">
          {t.nav.experience}
        </a>

        <a href="#certificates" className="nav-item">
          {t.nav.certificates}
        </a>

        <a href="#contact" className="nav-item">
          {t.nav.contact}
        </a>
      </nav>

      <button onClick={toggleLanguage} className="lang-capsule">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>

        <span>{t.langBtn}</span>
      </button>
    </header>

      {/* ================= HERO ================= */ }
  <section id="hero" className="hero-section">
    <div className="hero-content">

      <div className="hero-badge">
        <span className="status-dot"></span>
        {t.hero.role}
      </div>

      <h1 className="hero-title">
        {t.hero.greeting}
        <br />
        <span className="hero-name">
          {t.hero.name}
        </span>
      </h1>

      <p className="hero-bio">
        {t.hero.bio}
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          {t.hero.viewProjects}
        </a>

        <a href="#contact" className="btn-secondary">
          {t.hero.contactMe}
        </a>
      </div>

      <div className="hero-mini-info">
        <span>AI</span>
        <span>•</span>
        <span>Full-Stack</span>
        <span>•</span>
        <span>Web Development</span>
      </div>
    </div>

    {/* Developer Terminal */}
    <div className="terminal-card">
      <div className="terminal-top">
        <div className="terminal-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="terminal-title">
          joud@portfolio ~ %
        </span>
      </div>

      <div className="terminal-body">
        <p>
          <span className="terminal-pink">$</span> whoami
        </p>

        <p className="terminal-output">
          Joud Alshehri — IT Graduate
        </p>

        <p>
          <span className="terminal-pink">$</span> focus
        </p>

        <p className="terminal-output">
          AI + Full-Stack Development
        </p>

        <p>
          <span className="terminal-pink">$</span> current_project
        </p>

        <p className="terminal-output">
          Dentek
        </p>

        <p>
          <span className="terminal-pink">$</span> status
          <span className="terminal-cursor">_</span>
        </p>

        <p className="terminal-success">
          ● {lang === 'ar' ? 'متاحة للفرص' : 'Open to opportunities'}
        </p>
      </div>
    </div>
  </section>

  {/* ================= ABOUT ================= */ }
  <section id="about" className="section-container">
    <div className="section-header">
      <span className="section-kicker">
        {lang === 'ar' ? 'تعرف عليّ' : 'GET TO KNOW ME'}
      </span>

      <h2 className="section-title">
        {t.about.title}
      </h2>
    </div>

    <div className="about-grid">

      <div className="about-card">
        <div className="card-number">01</div>

        <p className="about-text">
          {t.about.text}
        </p>
      </div>

      <div className="education-card">
        <div className="card-number">02</div>

        <span className="card-badge">
          {t.education.honors}
        </span>

        <h3 className="card-title">
          {t.education.degree}
        </h3>

        <p className="card-subtitle">
          {t.education.university} — {t.education.location}
        </p>

        <div className="education-meta">
          <span>{t.education.date}</span>

          <span className="gpa-pill">
            GPA: {t.education.gpa}
          </span>
        </div>
      </div>

    </div>
  </section>

  {/* ================= HOW I BUILD ================= */ }
  <section className="section-container build-section">
    <div className="section-header">

      <span className="section-kicker">
        {lang === 'ar' ? 'طريقة عملي' : 'MY PROCESS'}
      </span>

      <h2 className="section-title">
        {lang === 'ar' ? 'كيف أبني الأنظمة' : 'How I Build'}
      </h2>

      <p className="section-subtitle">
        {lang === 'ar'
          ? 'من الفكرة إلى نظام قابل للاستخدام.'
          : 'From an idea to a practical, usable system.'}
      </p>

    </div>

    <div className="build-grid">
      {buildSteps.map((step) => (
        <div className="build-card" key={step.number}>

          <span className="build-number">
            {step.number}
          </span>

          <h3>{step.title}</h3>

          <p>{step.text}</p>

        </div>
      ))}
    </div>
  </section>

  {/* ================= PROJECTS ================= */ }
  <section id="projects" className="section-container">

    <div className="section-header">

      <span className="section-kicker">
        {t.projects.featuredLabel}
      </span>

      <h2 className="section-title">
        {t.projects.title}
      </h2>

      <p className="section-subtitle">
        {t.projects.subtitle}
      </p>

    </div>

    {/* ================= FEATURED DENTEK ================= */}
    <div className="featured-project">

      <div className="featured-project-image">

        <img
          src={dentekPreview}
          alt={featuredProject.title}
        />

        <div className="image-overlay">
          <span>
            {featuredProject.type}
          </span>
        </div>

      </div>

      <div className="featured-project-content">

        <div className="featured-project-top">

          <span className="project-type">
            {featuredProject.type}
          </span>

          <span className="project-date">
            {featuredProject.date}
          </span>

        </div>

        <h3 className="featured-project-title">
          {featuredProject.title}
        </h3>

        <p className="featured-project-subtitle">
          {featuredProject.subtitle}
        </p>

        <p className="featured-project-desc">
          {featuredProject.description}
        </p>

        <div className="featured-highlights">

          {featuredProject.highlights.map(
            (highlight, index) => (
              <div
                className="featured-highlight"
                key={index}
              >
                <span className="highlight-icon">
                  ✦
                </span>

                <span>{highlight}</span>
              </div>
            )
          )}

        </div>

        <div className="project-tags featured-tags">

          {featuredProject.technologies.map(
            (tech, index) => (
              <span
                className="project-tag"
                key={index}
              >
                {tech}
              </span>
            )
          )}

        </div>

        <button
          className="case-study-btn"
          onClick={() =>
            setSelectedProject({
              key: 'dentek',
              ...featuredProject
            })
          }
        >
          {featuredProject.caseStudyButton}
          <span>→</span>
        </button>

      </div>
    </div>

    {/* ================= OTHER PROJECTS ================= */}
    <div className="other-projects">

      <div className="other-projects-heading">
        <h3>
          {t.projects.otherProjects}
        </h3>
      </div>

      <div className="projects-grid">

        {otherProjects.map((proj) => (

          <div
            key={proj.key}
            className="project-card"
          >

            <div>

              <div className="project-meta-top">

                <span className="project-type">
                  {proj.type}
                </span>

                <span className="project-date">
                  {proj.date}
                </span>

              </div>

              <h3 className="project-title">
                {proj.title}
              </h3>

              <h4 className="project-tagline">
                {proj.subtitle}
              </h4>

              <p className="project-desc">
                {proj.description}
              </p>

              <ul className="project-highlights">

                {proj.highlights?.map(
                  (hl, hIdx) => (
                    <li key={hIdx}>
                      {hl}
                    </li>
                  )
                )}

              </ul>

            </div>

            <div className="project-footer-area">

              <div className="project-tags">

                {proj.technologies?.map(
                  (tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="project-tag"
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>

  </section>

  {/* ================= SKILLS ================= */ }
  <section id="skills" className="section-container">

    <div className="section-header">

      <span className="section-kicker">
        {lang === 'ar' ? 'أدواتي' : 'MY TOOLKIT'}
      </span>

      <h2 className="section-title">
        {t.skills.title}
      </h2>

      <p className="section-subtitle">
        {lang === 'ar'
          ? 'اضغطي على أي مهارة لمعرفة أين استخدمتها.'
          : 'Click a skill to see where I used it.'}
      </p>

    </div>

    <div className="skills-grid">

      {skillCategories.map((cat, idx) => (

        <div
          key={idx}
          className="skill-cat-card"
        >

          <h3 className="skill-cat-title">
            {cat.title}
          </h3>

          <div className="skill-tags">

            {cat.items.map((skill, sIdx) => (

              <button
                key={sIdx}
                className={`skill-item-pill ${activeSkill === skill
                    ? 'active'
                    : ''
                  }`}
                onClick={() =>
                  setActiveSkill(
                    activeSkill === skill
                      ? null
                      : skill
                  )
                }
              >
                {skill}
              </button>

            ))}

          </div>
        </div>

      ))}

    </div>

    {activeSkill && (

      <div className="skill-result-box">

        <div className="skill-result-header">

          <div>

            <span className="section-kicker">
              {lang === 'ar'
                ? 'استخدمتها في'
                : 'USED IN'}
            </span>

            <h3>{activeSkill}</h3>

          </div>

          <button
            className="close-skill"
            onClick={() =>
              setActiveSkill(null)
            }
          >
            ×
          </button>

        </div>

        <div className="related-projects">

          {getRelatedProjects(activeSkill).length > 0 ? (

            getRelatedProjects(activeSkill).map(
              (project, index) => (

                <button
                  key={index}
                  className="related-project"
                  onClick={() =>
                    setSelectedProject(project)
                  }
                >
                  <span>
                    {project.title}
                  </span>

                  <span>↗</span>
                </button>

              )
            )

          ) : (

            <p>
              {lang === 'ar'
                ? 'هذه المهارة موجودة ضمن أدواتي، لكن لا يوجد مشروع مرتبط بها مباشرة في الموقع.'
                : 'This skill is part of my toolkit, but no directly linked project is listed.'}
            </p>

          )}

        </div>
      </div>
    )}

  </section>

  {/* ================= EXPERIENCE ================= */ }
  <section id="experience" className="section-container">

    <div className="section-header">

      <span className="section-kicker">
        {lang === 'ar'
          ? 'خبرتي'
          : 'EXPERIENCE'}
      </span>

      <h2 className="section-title">
        {t.experience.title}
      </h2>

    </div>

    <div className="experience-card">

      <div className="experience-line"></div>

      <div className="experience-header">

        <div>

          <span className="experience-label">
            {lang === 'ar'
              ? 'تدريب تعاوني / صيفي'
              : 'INTERNSHIP'}
          </span>

          <h3 className="card-title">
            {t.experience.sallamTech.role}
          </h3>

          <p className="card-subtitle">
            {t.experience.sallamTech.company} •{' '}
            {t.experience.sallamTech.location}
          </p>

        </div>

        <span className="experience-date">
          {t.experience.sallamTech.date}
        </span>

      </div>

      <p className="card-desc">
        {t.experience.sallamTech.description}
      </p>

      <ul className="experience-list">

        {t.experience.sallamTech.responsibilities.map(
          (resp, idx) => (
            <li key={idx}>
              {resp}
            </li>
          )
        )}

      </ul>

    </div>
  </section>

  {/* ================= CERTIFICATES ================= */ }
  <section id="certificates" className="section-container">

    <div className="section-header">

      <span className="section-kicker">
        {lang === 'ar'
          ? 'التعلم المستمر'
          : 'CONTINUOUS LEARNING'}
      </span>

      <h2 className="section-title">
        {t.certificates.title}
      </h2>

    </div>

    <div className="certificates-grid">

      {t.certificates.items.map(
        (cert, idx) => (

          <div
            key={idx}
            className="certificate-card"
          >

            <div className="cert-icon">
              <span>✦</span>
            </div>

            <div>

              <h3 className="cert-title">
                {cert.title}
              </h3>

              <p className="cert-issuer">
                {cert.issuer}
              </p>

            </div>

            <span className="certificate-arrow">
              ↗
            </span>

          </div>

        )
      )}

    </div>

  </section>

  {/* ================= SINGLE CASE STUDY MODAL ================= */ }
  {
    selectedProject && (

      <div
        className="modal-overlay"
        onClick={() =>
          setSelectedProject(null)
        }
      >

        <div
          className="project-modal"
          onClick={(e) =>
            e.stopPropagation()
          }
        >

          <button
            className="modal-close"
            onClick={() =>
              setSelectedProject(null)
            }
            aria-label="Close"
          >
            ×
          </button>

          {/* Dentek image only */}
          {selectedProject.key === 'dentek' && (

            <div className="modal-image">

              <img
                src={dentekPreview}
                alt={selectedProject.title}
              />

            </div>

          )}

          <div className="modal-content">

            <div className="modal-top">

              <span className="project-type">
                {selectedProject.type}
              </span>

              <span className="project-date">
                {selectedProject.date}
              </span>

            </div>

            <h2>
              {selectedProject.title}
            </h2>

            <p className="modal-subtitle">
              {selectedProject.subtitle}
            </p>

            <div className="modal-divider"></div>

            <div className="case-study-grid">

              {/* Problem */}
              <div>

                <span className="case-label">
                  {lang === 'ar'
                    ? 'المشكلة'
                    : 'THE PROBLEM'}
                </span>

                <p>
                  {selectedProject.caseStudy?.problem ||
                    selectedProject.description}
                </p>

              </div>

              {/* Solution */}
              <div>

                <span className="case-label">
                  {lang === 'ar'
                    ? 'الحل'
                    : 'THE SOLUTION'}
                </span>

                <ul>

                  {selectedProject.caseStudy?.solution
                    ? (
                      <p>
                        {selectedProject.caseStudy.solution}
                      </p>
                    )
                    : (
                      selectedProject.highlights?.map(
                        (highlight, index) => (
                          <li key={index}>
                            {highlight}
                          </li>
                        )
                      )
                    )}

                </ul>

              </div>

              {/* Dentek contribution */}
              {selectedProject.key === 'dentek' && (

                <div>

                  <span className="case-label">
                    {lang === 'ar'
                      ? 'مساهمتي'
                      : 'MY CONTRIBUTION'}
                  </span>

                  <p>
                    {roleText}
                  </p>

                </div>

              )}

              {/* Technologies */}
              <div>

                <span className="case-label">
                  {lang === 'ar'
                    ? 'التقنيات المستخدمة'
                    : 'TECH STACK'}
                </span>

                <div className="modal-tags">

                  {selectedProject.technologies?.map(
                    (tech, index) => (

                      <span key={index}>
                        {tech}
                      </span>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* Case Study details */}
            {selectedProject.caseStudy && (

              <>

                {selectedProject.caseStudy.workflow && (

                  <div className="case-study-section">

                    <h3>
                      {selectedProject.caseStudy.workflowTitle}
                    </h3>

                    <div className="workflow">

                      {selectedProject.caseStudy.workflow.map(
                        (step, index) => (

                          <div
                            className="workflow-step"
                            key={index}
                          >

                            <span className="workflow-number">
                              0{index + 1}
                            </span>

                            <span>
                              {step}
                            </span>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                )}

              </>

            )}

            {/* Project link */}
            {selectedProject.link && (

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="modal-project-link"
              >
                {selectedProject.button} ↗
              </a>

            )}

          </div>

        </div>

      </div>

    )
  }

  {/* ================= CONTACT ================= */ }
  <section
    id="contact"
    className="section-container contact-section"
  >

    <div className="contact-box">

      <span className="section-kicker">
        {lang === 'ar'
          ? 'لنتحدث'
          : "LET'S CONNECT"}
      </span>

      <h2 className="section-title">
        {t.contact.title}
      </h2>

      <p className="section-subtitle">
        {t.contact.subtitle}
      </p>

      <div className="contact-links">

        <a
          href="mailto:joudalshehri85@gmail.com"
          className="contact-pill"
        >
          ✉ {t.contact.email}
        </a>

        <a
          href="https://www.linkedin.com/in/joud-alshehri85/"
          target="_blank"
          rel="noreferrer"
          className="contact-pill"
        >
          &nbsp; {t.contact.linkedin}
        </a>

        <a
          href="https://github.com/joudalshehri85"
          target="_blank"
          rel="noreferrer"
          className="contact-pill"
        >
          ◇ {t.contact.github}
        </a>

        <a
          href="/cv.pdf"
          download="Joud_Alshehri_CV.pdf"
          className="contact-pill contact-cv"
        >
          ↓ {t.contact.cv}
        </a>

      </div>

    </div>

  </section>

  {/* ================= FOOTER ================= */ }
  <footer className="footer-container">

    <p>
      {t.footer.text}
    </p>

    <small>
      © {new Date().getFullYear()} — {t.footer.rights}
    </small>

  </footer>

    </div >
  );
}