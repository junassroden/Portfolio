import React, { useEffect, useRef, useState } from "react";
import { initializePortfolio } from "./portfolio.js";

const projectExhibits = [
  {
    title: "Inventory Management System",
    label: "DESKTOP APPLICATION",
    image: "Resources/Thumbnail.png",
    alt: "Inventory Management System screenshot",
    description:
      "Inventory and sales management system built in C# Windows Forms with a local SQL database for organized product tracking, sales operations, and reporting.",
    features: [
      "Product and stock management",
      "SQL-backed records",
      "Organized inventory workflow",
    ],
    tags: ["C#", "Windows Forms", "SQL"],
    demo: "https://youtu.be/1BOK69F4tgY",
  },
  {
    title: "Bus Transportation System",
    label: "TRANSPORTATION SYSTEM",
    image: "Resources/System.png",
    alt: "Bus Transportation System screenshot",
    description:
      "A C# Windows Forms application designed around bus queues, scheduling, routes, and passenger flow.",
    features: ["Queue management", "Scheduling", "Routes and passenger flow"],
    tags: ["C#", "WinForms", "Queue System"],
    demo: "https://youtu.be/rxzNKqiPfA0",
  },
  {
    title: "Mindeus Application",
    label: "INVENTORY / SALES",
    image: "Resources/barcode.png",
    alt: "Mindeus Application screenshot",
    description:
      "C# and SQL inventory and sales system with QR Code integration for quick product tracking and inventory updates.",
    features: [
      "Inventory and sales",
      "QR Code integration",
      "Product tracking",
    ],
    tags: ["C#", "SQL", "QR Code"],
    demo: "https://youtu.be/rN3H8uTWPIM",
  },
  {
    title: "Enterprise Web Portal",
    label: "WEB APPLICATION",
    image: "Resources/School ulit.png",
    alt: "Enterprise Web Portal screenshot",
    description:
      "Greenfield Academy Enrollment System for managing student registrations, enrollment records, and academic information.",
    features: [
      "Student registration",
      "Enrollment records",
      "Academic information",
    ],
    tags: ["Lavalite", "PHP", "JavaScript", "SQL", "CSS"],
    demo: "https://youtu.be/odUhFoE4CeY",
  },
  {
    title: "MinSU Scholarship System",
    label: "SCHOLARSHIP MANAGEMENT",
    image: "Resources/MinSU.png",
    alt: "MinSU Scholarship System screenshot",
    description:
      "Centralized web-based scholarship application and record management for Mindoro State University.",
    features: [
      "Scholarship applications",
      "Record management",
      "Centralized web system",
    ],
    tags: ["Lavalite", "PHP", "SQL", "JavaScript"],
    demo: "https://youtu.be/ufftpIjSSVA",
  },
  {
    title: "ScholarFlow",
    label: "RESEARCH PLATFORM",
    image: "Resources/scholarflo.png",
    alt: "ScholarFlow screenshot",
    description:
      "Laravel and SQL-powered research management platform for paper discovery, abstracts, citations, and organization.",
    features: [
      "Paper discovery",
      "Abstracts and citations",
      "Research organization",
    ],
    tags: ["Laravel", "PHP", "SQL", "JavaScript"],
    demo: "https://youtu.be/Ya7McivAlA0?si=OQBk-ZUsZ1klmfdx",
  },
];

const credentialExhibits = [
  {
    image: "Resources/TesdaNC3.jpg",
    title: "Programming NC III",
    issuer: "TESDA National Certificate",
    category: "Programming",
  },
  {
    image: "Resources/computer-hardware-basics.png",
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    category: "Hardware",
  },
  {
    image: "Resources/Networking-Basics.png",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    category: "Networking",
  },
  {
    image: "Resources/Introduction-to-Cybersecurity.png",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
  },
  {
    image: "Resources/Operating-System-Basics.png",
    title: "Operating System Basics",
    issuer: "Cisco Networking Academy",
    category: "Operating Systems",
  },
  {
    image: "Resources/python.png",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    category: "Python",
  },
  {
    image: "Resources/python2.png",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    category: "Python",
  },
  {
    image: "Resources/sql.png",
    title: "Introduction to SQL",
    issuer: "Simply Learn",
    category: "SQL",
  },
  {
    image: "Resources/machinelearning.png",
    title: "Machine Learning using Python",
    issuer: "IBM / Coursera",
    category: "Machine Learning",
  },
  {
    image: "Resources/dashboard.png",
    title: "Excel Dashboards (Beginner)",
    issuer: "Simply Learn",
    category: "Data / Excel",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Interfaces built around semantic HTML, responsive CSS, JavaScript, and component-based development.",
    skills: [
      ["HTML5", "HTML5", "https://cdn.simpleicons.org/html5/E34F26"],
      ["CSS3", "CSS3", "https://cdn.simpleicons.org/css/1572B6"],
      [
        "JavaScript",
        "JavaScript",
        "https://cdn.simpleicons.org/javascript/F7DF1E",
      ],
      ["React", "React", "https://cdn.simpleicons.org/react/61DAFB"],
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Application logic and server-side systems using PHP, Laravel, C#, and .NET technologies.",
    skills: [
      ["PHP", "PHP", "https://cdn.simpleicons.org/php/777BB4"],
      ["Laravel", "Laravel", "https://cdn.simpleicons.org/laravel/FF2D20"],
      [
        "C#",
        "C#",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      ],
      [".NET", ".NET", "https://cdn.simpleicons.org/dotnet/512BD4"],
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Structured data and application persistence for web and desktop projects.",
    skills: [
      ["MySQL", "MySQL", "https://cdn.simpleicons.org/mysql/4479A1"],
      [
        "SQL",
        "SQL",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      ],
      [
        "SQL Server",
        "SQL Server",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      ],
    ],
  },
  {
    number: "04",
    title: "Workflow",
    description:
      "Development workflow and collaboration tools used throughout academic and personal projects.",
    skills: [
      ["Git", "Git", "https://cdn.simpleicons.org/git/F05032"],
      ["GitHub", "GitHub", "https://cdn.simpleicons.org/github/181717"],
      [
        "VS Code",
        "Visual Studio Code",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      ],
    ],
  },
];

const logoMap = {
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  "Windows Forms": "https://cdn.simpleicons.org/dotnet/512BD4",
  WinForms: "https://cdn.simpleicons.org/dotnet/512BD4",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  "Queue System": "https://cdn.simpleicons.org/dotnet/512BD4",
  "QR Code":
    "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/solid/qrcode.svg",
  Lavalite: "https://cdn.simpleicons.org/php/777BB4",
  PHP: "https://cdn.simpleicons.org/php/777BB4",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  CSS: "https://cdn.simpleicons.org/css/1572B6",
  Laravel: "https://cdn.simpleicons.org/laravel/FF2D20",
};

function projectIndex(index, length) {
  return (index + length) % length;
}

function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStart = useRef(null);
  const project = projectExhibits[active];

  const selectProject = (index) => {
    setActive(projectIndex(index, projectExhibits.length));
    setDragOffset(0);
  };

  const step = (direction) => {
    selectProject(active + direction);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const section = document.querySelector("#projects");
      if (!section || !section.matches(":hover")) return;
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || pointerStart.current === null) return;
    setDragOffset(event.clientX - pointerStart.current);
  };

  const handlePointerUp = (event) => {
    if (!isDragging || pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    const threshold = Math.min(
      120,
      Math.max(55, event.currentTarget.clientWidth * 0.12),
    );
    if (Math.abs(delta) > threshold) step(delta < 0 ? 1 : -1);
    setDragOffset(0);
    setIsDragging(false);
    pointerStart.current = null;
  };

  const positionFor = (index) => {
    const length = projectExhibits.length;
    let delta = index - active;
    if (delta > length / 2) delta -= length;
    if (delta < -length / 2) delta += length;
    return delta;
  };

  return (
    <div className="project-showcase reveal">
      <div className="project-showcase-topline">
        <span>SELECTED WORK / {String(active + 1).padStart(2, "0")}</span>
        <span>{String(projectExhibits.length).padStart(2, "0")} PROJECTS</span>
      </div>

      <div
        className={`project-carousel ${isDragging ? "is-dragging" : ""}`}
        tabIndex="0"
        aria-label="Project showcase. Use left and right arrow keys or drag to change project."
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="project-track">
          {projectExhibits.map((item, index) => {
            const position = positionFor(index);
            const visible = Math.abs(position) <= 2;
            return (
              <article
                key={item.title}
                className={`project-plane ${position === 0 ? "is-active" : ""}`}
                data-position={position}
                aria-hidden={position !== 0}
                style={{
                  "--drag": `${position === 0 ? dragOffset : 0}px`,
                  "--delay": `${Math.abs(position) * 35}ms`,
                }}
              >
                <div className="project-plane-frame">
                  <div className="project-browser-bar">
                    <span className="browser-controls">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>{item.title}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  {visible && (
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      draggable="false"
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="project-carousel-grid" aria-hidden="true" />
        <div className="project-carousel-mark">DRAG / SWIPE</div>
      </div>

      <div className="project-showcase-controls">
        <div className="project-counter">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <span />
          <small>{String(projectExhibits.length).padStart(2, "0")}</small>
        </div>
        <div className="project-controls">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      <div className="project-detail">
        <div className="project-detail-main">
          <p className="project-label">{project.label}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-detail-side">
          <div>
            <span className="detail-label">FUNCTIONALITY</span>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="detail-label">TECHNOLOGY</span>
            <div className="project-tech">
              {project.tags.map((tag) => (
                <span className="tech-chip" key={tag}>
                  {logoMap[tag] && (
                    <img src={logoMap[tag]} alt="" aria-hidden="true" />
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="project-index" aria-label="Project navigation">
        {projectExhibits.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === active ? "is-active" : ""}
            onClick={() => selectProject(index)}
            aria-current={index === active ? "true" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
            <i>↗</i>
          </button>
        ))}
      </div>

      <a
        className="project-demo"
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch project demo <span>↗</span>
      </a>
    </div>
  );
}

function CredentialShowcase() {
  const [active, setActive] = useState(0);
  const credential = credentialExhibits[active];

  const selectCredential = (index) => {
    setActive(projectIndex(index, credentialExhibits.length));
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const section = document.querySelector("#credentials");
      if (!section || !section.matches(":hover")) return;
      if (event.key === "ArrowLeft") selectCredential(active - 1);
      if (event.key === "ArrowRight") selectCredential(active + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <div className="credential-showcase reveal">
      <div className="credential-stage">
        <div className="credential-stage-meta">
          <span>ARCHIVE / {String(active + 1).padStart(2, "0")}</span>
          <span>{credential.category}</span>
        </div>
        <button
          type="button"
          className="credential-document"
          data-certificate={credential.image}
          data-title={credential.title}
          data-issuer={credential.issuer}
          aria-label={`Open ${credential.title}`}
        >
          <span className="credential-corner credential-corner-a" />
          <span className="credential-corner credential-corner-b" />
          <img src={credential.image} alt={`${credential.title} certificate`} />
          <span className="credential-open">OPEN DOCUMENT ↗</span>
        </button>
        <div className="credential-caption">
          <div>
            <p>{credential.category}</p>
            <h3>{credential.title}</h3>
            <span>{credential.issuer}</span>
          </div>
          <small>DOCUMENTED PROOF</small>
        </div>
      </div>

      <aside className="credential-index">
        <div className="credential-index-head">
          <span>LEARNING ARCHIVE</span>
          <span>{credentialExhibits.length} RECORDS</span>
        </div>
        <div className="credential-list">
          {credentialExhibits.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => selectCredential(index)}
              aria-current={index === active ? "true" : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <small>{item.category}</small>
              <i>↗</i>
            </button>
          ))}
        </div>
        <div className="credential-controls">
          <button
            type="button"
            onClick={() => selectCredential(active - 1)}
            aria-label="Previous certificate"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => selectCredential(active + 1)}
            aria-label="Next certificate"
          >
            →
          </button>
        </div>
      </aside>
    </div>
  );
}

function SkillRail() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <div className="skills-system reveal">
      <div
        className="skill-rail"
        role="tablist"
        aria-label="Technology categories"
      >
        {skillGroups.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{item.number}</span>
            <strong>{item.title}</strong>
            <i>↗</i>
          </button>
        ))}
      </div>

      <div className="skill-detail" role="tabpanel">
        <div className="skill-detail-intro">
          <span>{group.number} / 04</span>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
        </div>
        <div className="skill-logo-field">
          {group.skills.map(([name, alt, src]) => (
            <button
              className="skill-logo-item"
              key={name}
              type="button"
              title={name}
            >
              <span className="skill-logo">
                <img src={src} alt={`${alt} logo`} loading="lazy" />
              </span>
              <strong>{name}</strong>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    initializePortfolio();
  }, []);

  return (
    <div className="portfolio-shell">
      <div className="scroll-progress" data-scroll-progress />

      <header className="site-nav" id="site-nav">
        <div className="nav-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Jhonas Roden Cabañero home"
          >
            <span className="brand-mark">JR</span>
            <span className="brand-name">Jhonas Roden Cabañero</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#credentials">Certificates</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              data-theme-toggle
              type="button"
              aria-label="Switch to dark mode"
            >
              <span data-theme-icon aria-hidden="true">
                ◐
              </span>
            </button>
            <button
              className="menu-toggle"
              data-menu-toggle
              type="button"
              aria-expanded="false"
              aria-controls="mobile-nav"
              aria-label="Open navigation"
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          className="mobile-nav"
          id="mobile-nav"
          data-mobile-nav
          aria-label="Mobile navigation"
        >
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#credentials">Certificates</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span /> BSIT STUDENT · DEVELOPER
              </p>
              <h1>
                Software built with <em>purpose.</em>
              </h1>
              <p className="hero-lead">
                I'm Jhonas Roden Cabañero, a BSIT student at Mindoro State
                University focused on web development, application development,
                databases, and practical systems.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-dark">
                  View projects <span>↗</span>
                </a>
                <a href="#contact" className="button button-light">
                  Get in touch <span>→</span>
                </a>
              </div>
              <div className="hero-stack" aria-label="Primary technologies">
                <span>PHP</span>
                <span>Laravel</span>
                <span>React</span>
                <span>C#</span>
                <span>SQL</span>
              </div>
            </div>

            <div
              className="hero-stage"
              data-hero-stage
              aria-label="Interactive developer workspace visual"
            >
              <div className="hero-photo-wrap" data-hero-portrait>
                <div className="hero-photo-shadow" />
                <img
                  src="Resources/graduation.jpeg"
                  alt="Jhonas Roden Cabañero"
                />
              </div>

              <div className="three-card three-terminal" data-depth="1.3">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                  <b>terminal</b>
                </div>
                <pre>
                  <code>
                    {
                      "$ whoami\njhonas@dev:~$ build\n✓ database connected\n✓ application ready\n$ _"
                    }
                  </code>
                </pre>
              </div>

              <div className="three-card three-browser" data-depth="0.8">
                <div className="browser-bar">
                  <span className="browser-dot" />
                  <span className="browser-url">localhost:8080/dashboard</span>
                </div>
                <div className="browser-ui">
                  <div className="mini-sidebar" />
                  <div className="mini-content">
                    <i />
                    <i />
                    <i />
                    <strong />
                  </div>
                </div>
              </div>

              <div className="three-chip chip-csharp" data-depth="1.8">
                C#
              </div>
              <div className="three-chip chip-sql" data-depth="1.4">
                SQL
              </div>
              <div className="three-chip chip-php" data-depth="1.1">
                PHP
              </div>
              <div className="hero-coordinate">
                DEV / CALAPAN
                <br />
                PORTFOLIO / 2026
              </div>
              <div className="hero-line hero-line-one" />
              <div className="hero-line hero-line-two" />
            </div>
          </div>

          <div className="hero-bottom">
            <span>SELECTED WORK / 2026</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-kicker reveal">01 — ABOUT</div>
          <div className="about-grid">
            <div className="section-heading reveal">
              <p className="eyebrow">
                A student developer with a practical mindset.
              </p>
              <h2>
                Learning by <em>building.</em>
              </h2>
            </div>
            <div className="about-copy reveal">
              <p className="large-copy">
                I’m a second-year BSIT student at Mindoro State University,
                currently looking for opportunities to turn classroom knowledge
                into practical development experience.
              </p>
              <p>
                I enjoy working across frontend interfaces, backend logic,
                databases, and desktop applications. My projects have given me
                hands-on experience with PHP, Laravel, React, C#, SQL, and
                Windows Forms.
              </p>
              <div className="about-facts">
                <div>
                  <span>01</span>
                  <strong>Software development</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Web &amp; database systems</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>OJT / internship experience</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-kicker reveal">02 — CAPABILITIES</div>
          <div className="skills-heading reveal">
            <p className="eyebrow">Technical toolkit</p>
            <h2>
              Tools I use to turn ideas into <em>working systems.</em>
            </h2>
          </div>
          <SkillRail />
        </section>

        <section className="section projects" id="projects">
          <div className="section-kicker reveal">03 — SELECTED WORK</div>
          <div className="projects-heading reveal">
            <div>
              <p className="eyebrow">Software I’ve actually built</p>
              <h2>
                Projects with <em>purpose.</em>
              </h2>
            </div>
            <p>
              Real project visuals, real technologies, and the functionality
              behind each build.
            </p>
          </div>
          <ProjectShowcase />
        </section>

        <section className="section credentials" id="credentials">
          <div className="section-kicker reveal">04 — CERTIFICATES</div>
          <div className="credentials-heading reveal">
            <div>
              <p className="eyebrow">Certificates &amp; training</p>
              <h2>
                Evidence of <em>learning.</em>
              </h2>
            </div>
            <p>
              A visual archive of technical training and credentials collected
              throughout my development journey.
            </p>
          </div>
          <CredentialShowcase />
        </section>

        <section className="section experience" id="experience">
          <div className="section-kicker reveal">05 — EXPERIENCE</div>
          <div className="experience-heading reveal">
            <p className="eyebrow">Where I’ve learned by doing.</p>
            <h2>
              Experience &amp; <em>education.</em>
            </h2>
          </div>

          <div className="experience-layout">
            <div className="experience-intro reveal">
              <span className="experience-stamp">FIELD NOTES / 01</span>
              <h3>From classroom concepts to working systems.</h3>
              <p>
                My development journey has been shaped by academic software
                projects, practical application building, and workplace exposure
                through OJT.
              </p>
            </div>

            <div className="timeline">
              <article className="timeline-item reveal">
                <div className="timeline-date">OJT / INTERNSHIP</div>
                <div>
                  <h3>Zuhqui Homes</h3>
                  <p>
                    Practical workplace experience and exposure to professional
                    workflows.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal">
                <div className="timeline-date">ACADEMIC / FREELANCE</div>
                <div>
                  <h3>Development Projects</h3>
                  <p>
                    Hands-on work across web systems, desktop applications,
                    databases, and academic software projects.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal">
                <div className="timeline-date">EDUCATION</div>
                <div>
                  <h3>Mindoro State University</h3>
                  <p>
                    BS Information Technology student building a foundation in
                    software development, databases, networking, and systems
                    analysis.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">06 — CONTACT</p>
              <h2>
                Let's build something <em>useful.</em>
              </h2>
              <p>
                I’m open to development opportunities, freelance work,
                collaborations, internships, and other relevant opportunities
                where I can keep learning while contributing to real projects.
              </p>

              <div className="contact-links">
                <a
                  href="mailto:cabanerojhoas@gmail.com"
                  className="contact-link"
                >
                  <span className="contact-icon">@</span>
                  <span>
                    <small>Email</small>
                    <strong>cabanerojhoas@gmail.com</strong>
                  </span>
                  <b>↗</b>
                </a>
                <a
                  href="https://github.com/junassroden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">
                    <img
                      src="https://cdn.simpleicons.org/github/181717"
                      alt=""
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <small>GitHub</small>
                    <strong>github.com/junassroden</strong>
                  </span>
                  <b>↗</b>
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">in</span>
                  <span>
                    <small>LinkedIn</small>
                    <strong>LinkedIn profile</strong>
                  </span>
                  <b>↗</b>
                </a>
              </div>
            </div>

            <div className="contact-form-wrap reveal">
              <div className="contact-form-header">
                <span>START A CONVERSATION</span>
                <span>01 / 01</span>
              </div>
              <form id="contact-form" className="contact-form">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows={5} required defaultValue="" />
                </label>
                <button type="submit" className="button button-accent">
                  Send message <span>↗</span>
                </button>
                <p
                  id="form-status"
                  className="form-status"
                  role="status"
                  aria-live="polite"
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      <div className="lightbox" data-certificate-modal aria-hidden="true">
        <div className="lightbox-backdrop" data-certificate-backdrop />
        <div
          className="lightbox-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
        >
          <button
            className="lightbox-close"
            data-certificate-close
            type="button"
            aria-label="Close credential preview"
          >
            ×
          </button>
          <div className="lightbox-label">CREDENTIAL PREVIEW</div>
          <h2 id="certificate-title" data-certificate-title>
            Certificate
          </h2>
          <p className="lightbox-issuer" data-certificate-issuer />
          <div className="lightbox-image-wrap">
            <img data-certificate-image alt="" />
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <span>
          © <span data-current-year /> Jhonas Roden Cabañero
        </span>
        <span>Built with React · CSS · JavaScript</span>
      </footer>
    </div>
  );
}
