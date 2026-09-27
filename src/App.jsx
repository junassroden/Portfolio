import React, { useEffect } from "react";
import { initializePortfolio } from "./portfolio.js";

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
    <section className="section projects" id="projects">
      <div className="section-kicker reveal">03 — SELECTED WORK</div>
      <div className="projects-heading">
        <div className="reveal">
          <p className="eyebrow">Software I’ve actually built</p>
          <h2>Projects with <em>purpose.</em></h2>
        </div>
        <p className="projects-note reveal">Screenshots are the proof. The details explain the work.</p>
      </div>
      <div className="project-list">
        <article className="project-feature reveal">
          <div className="project-visual">
            <div className="browser-frame">
              <div className="browser-top">
                <span className="browser-controls"><i /><i /><i /></span>
                <span>Inventory Management System</span>
                <span>01</span>
              </div>
              <img src="Resources/Thumbnail.png" alt="Inventory Management System screenshot" loading="lazy" />
            </div>
            <div className="project-number">01</div>
          </div>
          <div className="project-info">
            <p className="project-label">DESKTOP APPLICATION</p>
            <h3>Inventory Management System</h3>
            <p>
              Inventory and sales management system built in C# Windows Forms with
              a local SQL database for organized product tracking, sales operations,
              and reporting.
            </p>
            <ul className="feature-list">
              <li>Product and stock management</li>
              <li>SQL-backed records</li>
              <li>Organized inventory workflow</li>
            </ul>
            <div className="project-tags"><span>C#</span><span>Windows Forms</span><span>SQL</span></div>
            <a className="text-link" href="https://youtu.be/1BOK69F4tgY" target="_blank" rel="noopener noreferrer">Watch project demo <span>↗</span></a>
          </div>
        </article>
        <article className="project-split reveal">
          <div className="project-visual">
            <div className="browser-frame compact">
              <div className="browser-top"><span className="browser-controls"><i /><i /><i /></span><span>Bus Transportation System</span><span>02</span></div>
              <img src="Resources/System.png" alt="Bus Transportation System screenshot" loading="lazy" />
            </div>
          </div>
          <div className="project-info">
            <p className="project-label">TRANSPORTATION SYSTEM</p>
            <h3>Bus Transportation System</h3>
            <p>A C# Windows Forms application designed around bus queues, scheduling, routes, and passenger flow.</p>
            <div className="project-tags"><span>C#</span><span>WinForms</span><span>Queue System</span></div>
            <a className="text-link" href="https://youtu.be/rxzNKqiPfA0" target="_blank" rel="noopener noreferrer">Watch project demo <span>↗</span></a>
          </div>
        </article>
        <article className="project-split reverse reveal">
          <div className="project-visual">
            <div className="browser-frame compact">
              <div className="browser-top"><span className="browser-controls"><i /><i /><i /></span><span>Mindeus Application</span><span>03</span></div>
              <img src="Resources/barcode.png" alt="Mindeus Application screenshot" loading="lazy" />
            </div>
          </div>
          <div className="project-info">
            <p className="project-label">INVENTORY / SALES</p>
            <h3>Mindeus Application</h3>
            <p>C# and SQL inventory and sales system with QR Code integration for quick product tracking and inventory updates.</p>
            <div className="project-tags"><span>C#</span><span>SQL</span><span>QR Code</span></div>
            <a className="text-link" href="https://youtu.be/rN3H8uTWPIM" target="_blank" rel="noopener noreferrer">Watch project demo <span>↗</span></a>
          </div>
        </article>
        <article className="project-wide reveal">
          <div className="project-wide-image">
            <img src="Resources/School ulit.png" alt="Enterprise Web Portal screenshot" loading="lazy" />
          </div>
          <div className="project-wide-info">
            <div>
              <p className="project-label">WEB APPLICATION</p>
              <h3>Enterprise Web Portal</h3>
            </div>
            <div>
              <p>Greenfield Academy Enrollment System for managing student registrations, enrollment records, and academic information.</p>
              <div className="project-tags"><span>Lavalite</span><span>PHP</span><span>JavaScript</span><span>SQL</span><span>CSS</span></div>
              <a className="text-link" href="https://youtu.be/odUhFoE4CeY" target="_blank" rel="noopener noreferrer">Watch project demo <span>↗</span></a>
            </div>
          </div>
        </article>
        <div className="project-pair">
          <article className="project-mini reveal">
            <div className="mini-project-image"><img src="Resources/MinSU.png" alt="MinSU Scholarship System screenshot" loading="lazy" /></div>
            <p className="project-label">SCHOLARSHIP MANAGEMENT</p>
            <h3>MinSU Scholarship System</h3>
            <p>Centralized web-based scholarship application and record management for Mindoro State University.</p>
            <div className="project-tags"><span>Lavalite</span><span>PHP</span><span>SQL</span><span>JavaScript</span></div>
            <a className="text-link" href="https://youtu.be/ufftpIjSSVA" target="_blank" rel="noopener noreferrer">Watch demo <span>↗</span></a>
          </article>
          <article className="project-mini dark-project reveal">
            <div className="mini-project-image"><img src="Resources/scholarflo.png" alt="ScholarFlow screenshot" loading="lazy" /></div>
            <p className="project-label">RESEARCH PLATFORM</p>
            <h3>ScholarFlow</h3>
            <p>Laravel and SQL-powered research management platform for paper discovery, abstracts, citations, and organization.</p>
            <div className="project-tags"><span>Laravel</span><span>PHP</span><span>SQL</span><span>JavaScript</span></div>
            <a className="text-link" href="https://youtu.be/Ya7McivAlA0?si=OQBk-ZUsZ1klmfdx" target="_blank" rel="noopener noreferrer">Watch demo <span>↗</span></a>
          </article>
        </div>
      </div>
    </section>
    {/* CREDENTIALS */}
    <section className="section credentials" id="credentials">
      <div className="section-kicker reveal">04 — CREDENTIALS</div>
      <div className="credentials-heading">
        <div className="reveal">
          <p className="eyebrow">Certificates &amp; training</p>
          <h2>A collection of <em>proof.</em></h2>
        </div>
        <p className="credentials-note reveal">Actual credential visuals from my project resources. Select any certificate to inspect it at full size.</p>
      </div>
      <div className="credential-gallery">
        <button className="credential featured-credential reveal" data-certificate="Resources/TesdaNC3.jpg" data-title="Programming NC III" data-issuer="TESDA National Certificate" type="button">
          <span className="credential-image"><img src="Resources/TesdaNC3.jpg" alt="Programming NC III certificate" /></span>
          <span className="credential-meta"><strong>Programming NC III</strong><small>TESDA National Certificate</small><b>View credential ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/Networking-Basics.png" data-title="Networking Basics" data-issuer="Cisco Networking Academy" type="button">
          <span className="credential-image"><img src="Resources/Networking-Basics.png" alt="Networking Basics certificate" /></span>
          <span className="credential-meta"><strong>Networking Basics</strong><small>Cisco Networking Academy</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/Introduction-to-Cybersecurity.png" data-title="Introduction to Cybersecurity" data-issuer="Cisco Networking Academy" type="button">
          <span className="credential-image"><img src="Resources/Introduction-to-Cybersecurity.png" alt="Introduction to Cybersecurity certificate" /></span>
          <span className="credential-meta"><strong>Introduction to Cybersecurity</strong><small>Cisco Networking Academy</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-portrait reveal" data-certificate="Resources/Operating-System-Basics.png" data-title="Operating System Basics" data-issuer="Cisco Networking Academy" type="button">
          <span className="credential-image"><img src="Resources/Operating-System-Basics.png" alt="Operating System Basics certificate" /></span>
          <span className="credential-meta"><strong>Operating System Basics</strong><small>Cisco Networking Academy</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-portrait reveal" data-certificate="Resources/computer-hardware-basics.png" data-title="Computer Hardware Basics" data-issuer="Cisco Networking Academy" type="button">
          <span className="credential-image"><img src="Resources/computer-hardware-basics.png" alt="Computer Hardware Basics certificate" /></span>
          <span className="credential-meta"><strong>Computer Hardware Basics</strong><small>Cisco Networking Academy</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/sql.png" data-title="Introduction to SQL" data-issuer="Simply Learn" type="button">
          <span className="credential-image"><img src="Resources/sql.png" alt="Introduction to SQL certificate" /></span>
          <span className="credential-meta"><strong>Introduction to SQL</strong><small>Simply Learn</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/python.png" data-title="Python Essentials 1" data-issuer="Cisco Networking Academy" type="button">
          <span className="credential-image"><img src="Resources/python.png" alt="Python Essentials 1 certificate" /></span>
          <span className="credential-meta"><strong>Python Essentials 1</strong><small>Cisco Networking Academy</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/python2.png" data-title="Python Essentials 2" data-issuer="Cisco Networking Academy" type="button">
          <span className="credential-image"><img src="Resources/python2.png" alt="Python Essentials 2 certificate" /></span>
          <span className="credential-meta"><strong>Python Essentials 2</strong><small>Cisco Networking Academy</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/dashboard.png" data-title="Excel Dashboards (Beginner)" data-issuer="Simply Learn" type="button">
          <span className="credential-image"><img src="Resources/dashboard.png" alt="Excel Dashboards certificate" /></span>
          <span className="credential-meta"><strong>Excel Dashboards (Beginner)</strong><small>Simply Learn</small><b>View ↗</b></span>
        </button>
        <button className="credential credential-landscape reveal" data-certificate="Resources/machinelearning.png" data-title="Machine Learning using Python" data-issuer="IBM / Coursera" type="button">
          <span className="credential-image"><img src="Resources/machinelearning.png" alt="Machine Learning using Python certificate" /></span>
          <span className="credential-meta"><strong>Machine Learning using Python</strong><small>IBM / Coursera</small><b>View ↗</b></span>
        </button>
      </div>
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
