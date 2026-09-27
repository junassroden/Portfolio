import React, { useEffect, useState } from "react";
import { initializePortfolio } from "./portfolio.js";

const projectExhibits = [
  {
    title: "Inventory Management System",
    label: "DESKTOP APPLICATION",
    image: "Resources/Thumbnail.png",
    alt: "Inventory Management System screenshot",
    description: "Inventory and sales management system built in C# Windows Forms with a local SQL database for organized product tracking, sales operations, and reporting.",
    features: ["Product and stock management", "SQL-backed records", "Organized inventory workflow"],
    tags: ["C#", "Windows Forms", "SQL"],
    demo: "https://youtu.be/1BOK69F4tgY"
  },
  {
    title: "Bus Transportation System",
    label: "TRANSPORTATION SYSTEM",
    image: "Resources/System.png",
    alt: "Bus Transportation System screenshot",
    description: "A C# Windows Forms application designed around bus queues, scheduling, routes, and passenger flow.",
    features: ["Queue management", "Scheduling", "Routes and passenger flow"],
    tags: ["C#", "WinForms", "Queue System"],
    demo: "https://youtu.be/rxzNKqiPfA0"
  },
  {
    title: "Mindeus Application",
    label: "INVENTORY / SALES",
    image: "Resources/barcode.png",
    alt: "Mindeus Application screenshot",
    description: "C# and SQL inventory and sales system with QR Code integration for quick product tracking and inventory updates.",
    features: ["Inventory and sales", "QR Code integration", "Product tracking"],
    tags: ["C#", "SQL", "QR Code"],
    demo: "https://youtu.be/rN3H8uTWPIM"
  },
  {
    title: "Enterprise Web Portal",
    label: "WEB APPLICATION",
    image: "Resources/School ulit.png",
    alt: "Enterprise Web Portal screenshot",
    description: "Greenfield Academy Enrollment System for managing student registrations, enrollment records, and academic information.",
    features: ["Student registration", "Enrollment records", "Academic information"],
    tags: ["Lavalite", "PHP", "JavaScript", "SQL", "CSS"],
    demo: "https://youtu.be/odUhFoE4CeY"
  },
  {
    title: "MinSU Scholarship System",
    label: "SCHOLARSHIP MANAGEMENT",
    image: "Resources/MinSU.png",
    alt: "MinSU Scholarship System screenshot",
    description: "Centralized web-based scholarship application and record management for Mindoro State University.",
    features: ["Scholarship applications", "Record management", "Centralized web system"],
    tags: ["Lavalite", "PHP", "SQL", "JavaScript"],
    demo: "https://youtu.be/ufftpIjSSVA"
  },
  {
    title: "ScholarFlow",
    label: "RESEARCH PLATFORM",
    image: "Resources/scholarflo.png",
    alt: "ScholarFlow screenshot",
    description: "Laravel and SQL-powered research management platform for paper discovery, abstracts, citations, and organization.",
    features: ["Paper discovery", "Abstracts and citations", "Research organization"],
    tags: ["Laravel", "PHP", "SQL", "JavaScript"],
    demo: "https://youtu.be/Ya7McivAlA0?si=OQBk-ZUsZ1klmfdx"
  }
];

function ProjectExhibition() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tech, setTech] = useState(null);
  const project = projectExhibits[active];

  const selectProject = (index) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setTech(null);
    setActive(index);
  };

  return (
    <div className="project-exhibition reveal">
      <div className="project-exhibition-main">
        <div className={`exhibit-artifact exhibit-direction-${direction}`} key={project.title}>
          <div className="artifact-topline">
            <span>EXHIBIT / {String(active + 1).padStart(2, "0")}</span>
            <span>{project.label}</span>
          </div>
          <div className="artifact-stage" data-project-stage>
            <div className="artifact-line artifact-line-a" />
            <div className="artifact-line artifact-line-b" />
            <span className="artifact-note artifact-note-a">SCREENSHOT / PROOF</span>
            <span className="artifact-note artifact-note-b">ACTUAL PROJECT VISUAL</span>
            <div className="artifact-browser">
              <div className="artifact-browser-bar">
                <span className="browser-controls"><i /><i /><i /></span>
                <span>{project.title}</span>
                <span>0{active + 1}</span>
              </div>
              <img src={project.image} alt={project.alt} loading={active === 0 ? "eager" : "lazy"} />
            </div>
          </div>
        </div>

        <div className="project-exhibition-copy">
          <div className="exhibit-counter"><span>{String(active + 1).padStart(2, "0")}</span><i /> <span>{String(projectExhibits.length).padStart(2, "0")}</span></div>
          <p className="project-label">{project.label}</p>
          <h3>{project.title}</h3>
          <p className="exhibit-description">{project.description}</p>

          <div className="exhibit-functionality">
            <span>FUNCTIONALITY</span>
            <ul>
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>

          <div className="exhibit-tech-block">
            <span className="exhibit-small-label">TECHNOLOGY</span>
            <div className="exhibit-tech-list">
              {project.tags.map((tag) => (
                <button
                  type="button"
                  className={tech === tag ? "tech-marker is-active" : "tech-marker"}
                  key={tag}
                  onMouseEnter={() => setTech(tag)}
                  onMouseLeave={() => setTech(null)}
                  onFocus={() => setTech(tag)}
                  onBlur={() => setTech(null)}
                  aria-label={`Highlight ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <p className="tech-hint" aria-live="polite">
              {tech ? `${tech} is part of this project.` : "Hover or focus a technology to inspect it."}
            </p>
          </div>

          <a className="project-action exhibit-demo" href={project.demo} target="_blank" rel="noopener noreferrer">
            <span>Watch project demo</span><span>↗</span>
          </a>
        </div>
      </div>

      <div className="project-exhibition-index" aria-label="Project exhibition index">
        <div className="index-heading"><span>EXHIBITION INDEX</span><span>{projectExhibits.length} WORKS</span></div>
        <div className="index-list">
          {projectExhibits.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === active ? "index-item is-active" : "index-item"}
              onClick={() => selectProject(index)}
              aria-current={index === active ? "true" : undefined}
            >
              <span className="index-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="index-title">{item.title}</span>
              <span className="index-arrow">↗</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const credentialExhibits = [
  { image: "Resources/TesdaNC3.jpg", title: "Programming NC III", issuer: "TESDA National Certificate", category: "Programming" },
  { image: "Resources/computer-hardware-basics.png", title: "Computer Hardware Basics", issuer: "Cisco Networking Academy", category: "Hardware" },
  { image: "Resources/Networking-Basics.png", title: "Networking Basics", issuer: "Cisco Networking Academy", category: "Networking" },
  { image: "Resources/Introduction-to-Cybersecurity.png", title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", category: "Cybersecurity" },
  { image: "Resources/Operating-System-Basics.png", title: "Operating System Basics", issuer: "Cisco Networking Academy", category: "Operating Systems" },
  { image: "Resources/python.png", title: "Python Essentials 1", issuer: "Cisco Networking Academy", category: "Python" },
  { image: "Resources/python2.png", title: "Python Essentials 2", issuer: "Cisco Networking Academy", category: "Python" },
  { image: "Resources/sql.png", title: "Introduction to SQL", issuer: "Simply Learn", category: "SQL" },
  { image: "Resources/machinelearning.png", title: "Machine Learning using Python", issuer: "IBM / Coursera", category: "Machine Learning" },
  { image: "Resources/dashboard.png", title: "Excel Dashboards (Beginner)", issuer: "Simply Learn", category: "Data / Excel" }
];

function CredentialExhibition() {
  const [active, setActive] = useState(0);
  const credential = credentialExhibits[active];

  const selectCredential = (index) => setActive(index);

  return (
    <div className="credential-exhibition reveal">
      <div className="credential-feature-stage">
        <div className="credential-feature-meta">
          <span>ARCHIVE / {String(active + 1).padStart(2, "0")}</span>
          <span>{credential.category}</span>
        </div>
        <button
          type="button"
          className="credential-feature-image"
          data-certificate={credential.image}
          data-title={credential.title}
          data-issuer={credential.issuer}
          aria-label={`Open ${credential.title}`}
        >
          <img src={credential.image} alt={`${credential.title} certificate`} />
          <span className="credential-open">OPEN CREDENTIAL ↗</span>
        </button>
        <div className="credential-feature-caption">
          <div>
            <p className="credential-category">{credential.category}</p>
            <h3>{credential.title}</h3>
            <p>{credential.issuer}</p>
          </div>
          <span className="credential-proof">DOCUMENTED PROOF</span>
        </div>
      </div>

      <aside className="credential-archive" aria-label="Certificate archive">
        <div className="archive-heading"><span>LEARNING ARCHIVE</span><span>{credentialExhibits.length} RECORDS</span></div>
        <div className="archive-list">
          {credentialExhibits.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={index === active ? "archive-item is-active" : "archive-item"}
              onClick={() => selectCredential(index)}
              onDoubleClick={() => {
                const target = document.querySelector(`[data-certificate="${item.image}"]`);
                target?.click();
              }}
              aria-current={index === active ? "true" : undefined}
            >
              <span className="archive-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="archive-copy"><strong>{item.title}</strong><small>{item.category} · {item.issuer}</small></span>
              <span className="archive-arrow">↗</span>
            </button>
          ))}
        </div>
        <p className="archive-hint">Select a record to feature it. Open the featured document to inspect it at full size.</p>
      </aside>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    initializePortfolio();
  }, []);

  return (
<div>
  <div className="scroll-progress" data-scroll-progress />
  <header className="site-nav" id="site-nav">
    <div className="nav-inner">
      <a href="#home" className="brand" aria-label="Jhonas Roden Cabañero home">
        <span className="brand-mark">JR</span>
        <span className="brand-name">Jhonas Roden</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#credentials">Credentials</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" data-theme-toggle type="button" aria-label="Switch to dark mode">
          <span data-theme-icon aria-hidden="true">◐</span>
        </button>
        <button className="menu-toggle" data-menu-toggle type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation">
          <span /><span />
        </button>
      </div>
    </div>
    <nav className="mobile-nav" id="mobile-nav" data-mobile-nav aria-label="Mobile navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#credentials">Credentials</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    {/* HERO */}
    <section className="hero section" id="home">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> BSIT STUDENT · DEVELOPER</p>
          <h1>I build software that <em>solves real problems.</em></h1>
          <p className="hero-lead">
            I'm Jhonas Roden Cabañero, a BSIT student at Mindoro State University
            focused on web development, application development, databases, and
            practical systems that people can actually use.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">View projects <span>↗</span></a>
            <a href="#contact" className="button button-light">Get in touch <span>→</span></a>
          </div>
          <div className="hero-stack">
            <span>PHP</span><span>Laravel</span><span>React</span><span>C#</span><span>SQL</span>
          </div>
        </div>
        <div className="hero-stage" data-hero-stage aria-label="Interactive developer workspace visual">
          <div className="hero-photo-wrap" data-hero-portrait>
            <div className="hero-photo-shadow" />
            <img src="Resources/graduation.jpeg" alt="Jhonas Roden Cabañero" />
          </div>
          <div className="three-card three-terminal" data-depth="1.3">
            <div className="window-bar"><span /><span /><span /><b>terminal</b></div>
            <pre><code>$ whoami{"\n"}jhonas@dev:~$ build{"\n"}✓ database connected{"\n"}✓ application ready{"\n"}$ _</code></pre>
          </div>
          <div className="three-card three-browser" data-depth="0.8">
            <div className="browser-bar">
              <span className="browser-dot" />
              <span className="browser-url">localhost:8080/dashboard</span>
            </div>
            <div className="browser-ui">
              <div className="mini-sidebar" />
              <div className="mini-content">
                <i /><i /><i /><strong />
              </div>
            </div>
          </div>
          <div className="three-chip chip-csharp" data-depth="1.8">C#</div>
          <div className="three-chip chip-sql" data-depth="1.4">SQL</div>
          <div className="three-chip chip-php" data-depth="1.1">PHP</div>
          <div className="hero-coordinate">14.5995° N<br />120.9842° E</div>
          <div className="hero-line hero-line-one" />
          <div className="hero-line hero-line-two" />
        </div>
      </div>
      <div className="hero-bottom">
        <span>SELECTED WORK / 2026</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
    {/* ABOUT */}
    <section className="section about" id="about">
      <div className="section-kicker reveal">01 — ABOUT</div>
      <div className="about-grid">
        <div className="section-heading reveal">
          <p className="eyebrow">A student developer with a practical mindset.</p>
          <h2>Learning by <em>building.</em></h2>
        </div>
        <div className="about-copy reveal">
          <p className="large-copy">
            I’m a second-year BSIT student at Mindoro State University, currently
            looking for opportunities to turn classroom knowledge into practical
            development experience.
          </p>
          <p>
            I enjoy working across frontend interfaces, backend logic, databases,
            and desktop applications. My projects have given me hands-on experience
            with PHP, Laravel, React, C#, SQL, and Windows Forms.
          </p>
          <div className="about-facts">
            <div><span>01</span><strong>Software development</strong></div>
            <div><span>02</span><strong>Web &amp; database systems</strong></div>
            <div><span>03</span><strong>OJT / internship experience</strong></div>
          </div>
        </div>
      </div>
    </section>
    {/* SKILLS */}
    <section className="section skills" id="skills">
      <div className="section-kicker reveal">02 — CAPABILITIES</div>
      <div className="skills-heading reveal">
        <p className="eyebrow">Technical toolkit</p>
        <h2>Tools I use to turn ideas into <em>working systems.</em></h2>
      </div>
      <div className="skills-layout">
        <div className="skill-intro reveal">
          <span className="skill-index">01 / 04</span>
          <h3>Frontend</h3>
          <p>Interfaces built around semantic HTML, responsive CSS, JavaScript, and component-based development.</p>
          <div className="skill-list"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span></div>
        </div>
        <div className="skill-intro reveal">
          <span className="skill-index">02 / 04</span>
          <h3>Backend</h3>
          <p>Application logic and server-side systems using PHP, Laravel, C#, and .NET technologies.</p>
          <div className="skill-list"><span>PHP</span><span>Laravel</span><span>C#</span><span>.NET</span></div>
        </div>
        <div className="skill-intro reveal">
          <span className="skill-index">03 / 04</span>
          <h3>Database</h3>
          <p>Structured data and application persistence for web and desktop projects.</p>
          <div className="skill-list"><span>MySQL</span><span>SQL</span><span>SQL Server</span></div>
        </div>
        <div className="skill-intro reveal">
          <span className="skill-index">04 / 04</span>
          <h3>Tools</h3>
          <p>Development workflow and collaboration tools used throughout academic and personal projects.</p>
          <div className="skill-list"><span>Git</span><span>GitHub</span><span>VS Code</span></div>
        </div>
      </div>
    </section>
    {/* PROJECTS */}
    <section className="section projects exhibition-projects" id="projects">
      <div className="section-kicker reveal">03 — SELECTED WORK</div>
      <div className="projects-heading exhibition-heading">
        <div className="reveal">
          <p className="eyebrow">Software I’ve actually built</p>
          <h2>Projects with <em>purpose.</em></h2>
        </div>
        <p className="projects-note reveal">Screenshots are the proof. The details explain the work.</p>
      </div>
      <ProjectExhibition />
    </section>
    {/* CREDENTIALS */}
    <section className="section credentials exhibition-credentials" id="credentials">
      <div className="section-kicker reveal">04 — CREDENTIALS</div>
      <div className="credentials-heading exhibition-heading">
        <div className="reveal">
          <p className="eyebrow">Certificates &amp; training</p>
          <h2>Evidence of <em>learning.</em></h2>
        </div>
        <p className="credentials-note reveal">A curated archive of technical training and credentials collected throughout my development journey.</p>
      </div>
      <CredentialExhibition />
    </section>
    {/* EXPERIENCE */}
    <section className="section experience" id="experience">
      <div className="section-kicker reveal">05 — EXPERIENCE</div>
      <div className="experience-heading reveal">
        <p className="eyebrow">Where I’ve learned by doing.</p>
        <h2>Experience &amp; <em>education.</em></h2>
      </div>
      <div className="timeline">
        <article className="timeline-item reveal">
          <div className="timeline-date">OJT / INTERNSHIP</div>
          <div>
            <h3>Zuhqui Homes</h3>
            <p>Practical workplace experience and exposure to professional workflows.</p>
          </div>
        </article>
        <article className="timeline-item reveal">
          <div className="timeline-date">ACADEMIC / FREELANCE</div>
          <div>
            <h3>Development Projects</h3>
            <p>Hands-on work across web systems, desktop applications, databases, and academic software projects.</p>
          </div>
        </article>
        <article className="timeline-item reveal">
          <div className="timeline-date">EDUCATION</div>
          <div>
            <h3>Mindoro State University</h3>
            <p>BS Information Technology student building a foundation in software development, databases, networking, and systems analysis.</p>
          </div>
        </article>
      </div>
    </section>
    {/* CONTACT */}
    <section className="contact section" id="contact">
      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />
      <div className="contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">06 — CONTACT</p>
          <h2>Let's build something <em>useful.</em></h2>
          <p>
            I’m open to development opportunities, freelance work, collaborations,
            internships, and other relevant opportunities where I can keep learning
            while contributing to real projects.
          </p>
          <div className="contact-links">
            <a href="mailto:cabanerojhoas@gmail.com" className="contact-link">
              <span className="contact-icon">@</span>
              <span><small>Email</small><strong>cabanerojhoas@gmail.com</strong></span>
              <b>↗</b>
            </a>
            <a href="https://github.com/junassroden" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">GH</span>
              <span><small>GitHub</small><strong>github.com/junassroden</strong></span>
              <b>↗</b>
            </a>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">in</span>
              <span><small>LinkedIn</small><strong>LinkedIn profile</strong></span>
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
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={5} required defaultValue={""} />
            </label>
            <button type="submit" className="button button-accent">
              Get in touch <span>↗</span>
            </button>
            <p id="form-status" className="form-status" role="status" aria-live="polite" />
          </form>
        </div>
      </div>
    </section>
  </main>
  {/* CREDENTIAL LIGHTBOX */}
  <div className="lightbox" data-certificate-modal aria-hidden="true">
    <div className="lightbox-backdrop" data-certificate-backdrop />
    <div className="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
      <button className="lightbox-close" data-certificate-close type="button" aria-label="Close credential preview">×</button>
      <div className="lightbox-label">CREDENTIAL PREVIEW</div>
      <h2 id="certificate-title" data-certificate-title>Certificate</h2>
      <p className="lightbox-issuer" data-certificate-issuer />
      <div className="lightbox-image-wrap">
          <img data-certificate-image alt="" />
      </div>
    </div>
  </div>
  <footer className="site-footer">
    <span>© <span data-current-year /> Jhonas Roden Cabañero</span>
    <span>Built with HTML · CSS · JavaScript</span>
  </footer>
</div>

  );
}
