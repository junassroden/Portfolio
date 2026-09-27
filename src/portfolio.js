import emailjs from "@emailjs/browser";

export function initializePortfolio() {
  "use strict";

  /* =========================================================
     ELEMENT REFERENCES
  ========================================================= */

  const body = document.body;

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector("[data-theme-icon]");

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  const revealItems = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("main section[id]");

  const progress = document.querySelector("[data-scroll-progress]");

  const heroStage = document.querySelector("[data-hero-stage]");
  const heroPortrait = document.querySelector("[data-hero-portrait]");
  const depthObjects = document.querySelectorAll("[data-depth]");

  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");


  /* =========================================================
     THEME SYSTEM
  ========================================================= */

  const THEME_KEY = "jhonas-portfolio-theme";

  function preferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    body.classList.toggle("dark-mode", theme === "dark");

    body.dataset.theme = theme;

    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☼" : "◐";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      );
    }
  }

  applyTheme(preferredTheme());

  themeToggle?.addEventListener("click", () => {
    const nextTheme =
      body.dataset.theme === "dark"
        ? "light"
        : "dark";

    applyTheme(nextTheme);

    localStorage.setItem(THEME_KEY, nextTheme);
  });


  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  function closeMenu() {
    mobileNav?.classList.remove("is-open");

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    body.classList.remove("menu-open");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen =
      mobileNav?.classList.toggle("is-open") ?? false;

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    body.classList.toggle(
      "menu-open",
      isOpen
    );
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });


  /* =========================================================
     SMOOTH ANCHOR SCROLLING
  ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {
        const id = link.getAttribute("href");

        if (!id || id === "#") {
          return;
        }

        const target = document.querySelector(id);

        if (!target) {
          return;
        }

        event.preventDefault();

        const nav = document.querySelector(".site-nav");

        const offset =
          (nav?.offsetHeight || 0) + 25;

        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          offset;

        const reducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

        window.scrollTo({
          top,
          behavior: reducedMotion
            ? "auto"
            : "smooth"
        });

        history.replaceState(
          null,
          "",
          id
        );
      });
    });


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );
          });

        },
        {
          threshold: 0.1,
          rootMargin:
            "0px 0px -45px 0px"
        }
      );

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

  }


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  if ("IntersectionObserver" in window) {

    const navLinks =
      document.querySelectorAll(
        ".desktop-nav a"
      );

    const sectionObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            navLinks.forEach((link) => {

              link.classList.toggle(
                "is-active",
                link.getAttribute("href") ===
                  `#${entry.target.id}`
              );

            });
            });

        },
        {
          threshold: 0.2,
          rootMargin:
            "-30% 0px -55% 0px"
        }
      );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }


  /* =========================================================
     SCROLL PROGRESS BAR
  ========================================================= */

  let progressTicking = false;

  function updateProgress() {

    if (!progress) {
      return;
    }

    const max =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const amount =
      max > 0
        ? window.scrollY / max
        : 0;

    progress.style.transform =
      `scaleX(${amount})`;

    progressTicking = false;
  }

  window.addEventListener(
    "scroll",
    () => {

      if (!progressTicking) {

        requestAnimationFrame(
          updateProgress
        );

        progressTicking = true;
      }

    },
    {
      passive: true
    }
  );

  updateProgress();


  /* =========================================================
     HERO 3D DEPTH INTERACTION
  ========================================================= */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

  const finePointer =
    window.matchMedia(
      "(pointer: fine)"
    );

  if (
    heroStage &&
    heroPortrait &&
    finePointer.matches &&
    !reducedMotion.matches
  ) {

    let frame = null;

    heroStage.addEventListener(
      "pointermove",
      (event) => {

        const rect =
          heroStage.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        if (frame) {
          cancelAnimationFrame(frame);
        }

        frame =
          requestAnimationFrame(() => {

            heroPortrait.style.transform =
              `
              translate(-50%, -50%)
              rotateX(${y * -7}deg)
              rotateY(${x * 9}deg)
              translateZ(30px)
              `;

            depthObjects.forEach(
              (object) => {

                const depth =
                  Number(
                    object.dataset.depth || 1
                  );

                const tx =
                  x * 20 * depth;

                const ty =
                  y * -15 * depth;

                object.style.translate =
                  `${tx}px ${ty}px`;
              }
            );

          });

      }
    );

    heroStage.addEventListener(
      "pointerleave",
      () => {

        if (frame) {
          cancelAnimationFrame(frame);
        }

        heroPortrait.style.transform =
          `
          translate(-50%, -50%)
          rotateX(0deg)
          rotateY(0deg)
          translateZ(0)
          `;

        depthObjects.forEach(
          (object) => {
            object.style.translate = "0 0";
          }
        );

      }
    );
  }


  /* =========================================================
     CREDENTIAL / CERTIFICATION LIGHTBOX
  ========================================================= */

  const credentials =
    document.querySelectorAll(
      "[data-certificate]"
    );

  const modal =
    document.querySelector(
      "[data-certificate-modal]"
    );

  const modalImage =
    document.querySelector(
      "[data-certificate-image]"
    );

  const modalTitle =
    document.querySelector(
      "[data-certificate-title]"
    );

  const modalIssuer =
    document.querySelector(
      "[data-certificate-issuer]"
    );

  const modalClose =
    document.querySelector(
      "[data-certificate-close]"
    );

  let lastFocusedCredential = null;


  function openCredential(button) {

    if (!modal) {
      return;
    }

    const image =
      button.dataset.certificate;

    const title =
      button.dataset.title ||
      "Credential";

    const issuer =
      button.dataset.issuer ||
      "";

    lastFocusedCredential =
      button;

    if (modalImage) {
      modalImage.src = image;

      modalImage.alt =
        `${title} certificate`;
    }

    if (modalTitle) {
      modalTitle.textContent =
        title;
    }

    if (modalIssuer) {
      modalIssuer.textContent =
        issuer;
    }

    modal.classList.add(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    body.classList.add(
      "modal-open"
    );

    requestAnimationFrame(() => {
      modalClose?.focus();
    });
  }


  function closeCredential() {

    if (!modal) {
      return;
    }

    modal.classList.remove(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    body.classList.remove(
      "modal-open"
    );

    modalImage?.removeAttribute(
      "src"
    );

    lastFocusedCredential?.focus();

    lastFocusedCredential = null;
  }


  credentials.forEach(
    (credential) => {

      credential.addEventListener(
        "click",
        () => {
          openCredential(
            credential
          );
        }
      );

    }
  );


  modalClose?.addEventListener(
    "click",
    closeCredential
  );


  modal?.addEventListener(
    "click",
    (event) => {

      if (
        event.target.matches(
          "[data-certificate-backdrop]"
        )
      ) {
        closeCredential();
      }

    }
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal?.classList.contains(
          "is-open"
        )
      ) {
        closeCredential();
      }

    }
  );


  /* =========================================================
     IMAGE ERROR HANDLING
  ========================================================= */

  document
    .querySelectorAll("img")
    .forEach((image) => {

      image.addEventListener(
        "error",
        () => {
          image.classList.add(
            "image-error"
          );
        },
        {
          once: true
        }
      );

    });


  /* =========================================================
     EMAILJS CONTACT FORM
  ========================================================= */

  const EMAILJS_PUBLIC_KEY =
    "TKer_Rd14MfG1l6mj";

  const EMAILJS_SERVICE_ID =
    "service_dt4bkla";

  const EMAILJS_TEMPLATE_ID =
    "template_ttjyhg8";


  emailjs.init({
    publicKey:
      EMAILJS_PUBLIC_KEY
  });


  function status(
    message,
    type = ""
  ) {

    if (!formStatus) {
      return;
    }

    formStatus.textContent =
      message;

    formStatus.className =
      `form-status ${type}`.trim();
  }


  contactForm?.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      const submit =
        contactForm.querySelector(
          'button[type="submit"]'
        );

      const originalText =
        submit?.innerHTML ||
        "Get in touch <span>↗</span>";


      /* -----------------------------------------
         GET FORM VALUES
      ----------------------------------------- */

      const name =
        contactForm.elements.name
          ?.value
          .trim();

      const email =
        contactForm.elements.email
          ?.value
          .trim();

      const message =
        contactForm.elements.message
          ?.value
          .trim();


      /* -----------------------------------------
         VALIDATION
      ----------------------------------------- */

      if (
        !name ||
        !email ||
        !message
      ) {

        status(
          "Please complete all fields.",
          "error"
        );

        return;
      }


      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (
        !emailPattern.test(email)
      ) {

        status(
          "Please enter a valid email address.",
          "error"
        );

        contactForm.elements.email.focus();

        return;
      }


      /* -----------------------------------------
         CHECK EMAILJS
      ----------------------------------------- */

      if (
        typeof emailjs ===
        "undefined"
      ) {

        status(
          "Email service is unavailable. Please use the email address shown above.",
          "error"
        );

        return;
      }


      /* -----------------------------------------
         DISABLE SUBMIT BUTTON
      ----------------------------------------- */

      if (submit) {

        submit.disabled = true;

        submit.innerHTML =
          "Sending…";
      }


      status(
        "Sending your message…"
      );


      /* -----------------------------------------
         SEND EMAIL
      ----------------------------------------- */

      try {

        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          contactForm
        );


        /* SUCCESS */

        contactForm.reset();

        status(
          "Message sent successfully. Thank you for reaching out.",
          "success"
        );


      } catch (error) {

        console.error(
          "EmailJS error:",
          error
        );

        status(
          "Something went wrong. Please try again or email me directly.",
          "error"
        );


      } finally {

        if (submit) {

          submit.disabled =
            false;

          submit.innerHTML =
            originalText;
        }

      }

    }
  );


  /* =========================================================
     CURRENT YEAR
  ========================================================= */

  document
    .querySelectorAll(
      "[data-current-year]"
    )
    .forEach((element) => {

      element.textContent =
        new Date().getFullYear();

    });

}