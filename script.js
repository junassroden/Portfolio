/* =========================================================
   JHONAS RODEN CABAÑERO — PORTFOLIO
   Interactive JavaScript
   Taste editorial portfolio redesign
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       ELEMENTS
       ========================================================= */

    const body = document.body;

    const themeToggle = document.querySelector("[data-theme-toggle]");
    const themeIcon = document.querySelector("[data-theme-icon]");

    const menuToggle = document.querySelector("[data-menu-toggle]");
    const mobileNav = document.querySelector("[data-mobile-nav]");

    const navLinks = document.querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    );

    const sections = document.querySelectorAll("section[id]");

    const revealElements = document.querySelectorAll(
        "[data-reveal], .reveal"
    );

    const heroPortrait = document.querySelector("[data-hero-portrait]");

    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    const certificateButtons = document.querySelectorAll(
        "[data-certificate]"
    );

    const certificateModal = document.querySelector(
        "[data-certificate-modal]"
    );

    const certificateModalImage = document.querySelector(
        "[data-certificate-image]"
    );

    const certificateModalTitle = document.querySelector(
        "[data-certificate-title]"
    );

    const certificateModalClose = document.querySelector(
        "[data-certificate-close]"
    );

    const currentYearElements = document.querySelectorAll(
        "[data-current-year]"
    );


    /* =========================================================
       CURRENT YEAR
       ========================================================= */

    const currentYear = new Date().getFullYear();

    currentYearElements.forEach((element) => {
        element.textContent = currentYear;
    });


    /* =========================================================
       THEME
       ========================================================= */

    const THEME_KEY = "jhonas-portfolio-theme";

    function getPreferredTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);

        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) {
            return;
        }

        if (theme === "dark") {
            themeIcon.textContent = "☼";
            themeToggle?.setAttribute(
                "aria-label",
                "Switch to light mode"
            );
        } else {
            themeIcon.textContent = "◐";
            themeToggle?.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );
        }
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            body.setAttribute("data-theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            body.setAttribute("data-theme", "light");
        }

        updateThemeIcon(theme);
    }

    const initialTheme = getPreferredTheme();

    applyTheme(initialTheme);

    themeToggle?.addEventListener("click", () => {
        const currentTheme =
            body.getAttribute("data-theme") === "dark"
                ? "dark"
                : "light";

        const nextTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        applyTheme(nextTheme);

        localStorage.setItem(THEME_KEY, nextTheme);
    });


    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    function closeMobileNavigation() {
        if (!mobileNav || !menuToggle) {
            return;
        }

        mobileNav.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        body.classList.remove("menu-open");
    }

    function openMobileNavigation() {
        if (!mobileNav || !menuToggle) {
            return;
        }

        mobileNav.classList.add("is-open");

        menuToggle.setAttribute("aria-expanded", "true");

        body.classList.add("menu-open");
    }

    menuToggle?.addEventListener("click", () => {
        const isOpen =
            mobileNav?.classList.contains("is-open");

        if (isOpen) {
            closeMobileNavigation();
        } else {
            openMobileNavigation();
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeMobileNavigation();
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileNavigation();
        }
    });


    /* =========================================================
       SMOOTH SCROLLING
       ========================================================= */

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navHeight =
                document.querySelector(".site-nav")
                    ?.offsetHeight || 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navHeight -
                20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

            window.history.replaceState(
                null,
                "",
                targetId
            );
        });
    });


    /* =========================================================
       SCROLL REVEAL
       ========================================================= */

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });
    }


    /* =========================================================
       ACTIVE NAVIGATION
       ========================================================= */

    if (
        "IntersectionObserver" in window &&
        sections.length > 0
    ) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const sectionId =
                        entry.target.getAttribute("id");

                    if (!sectionId) {
                        return;
                    }

                    document
                        .querySelectorAll(
                            `.site-nav a[href="#${sectionId}"]`
                        )
                        .forEach((link) => {
                            document
                                .querySelectorAll(
                                    ".site-nav a"
                                )
                                .forEach((navLink) => {
                                    navLink.classList.remove(
                                        "is-active"
                                    );
                                });

                            link.classList.add("is-active");
                        });
                });
            },
            {
                threshold: 0.25,
                rootMargin: "-15% 0px -60% 0px"
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }


    /* =========================================================
       HERO PORTRAIT POINTER DEPTH
       ========================================================= */

    if (heroPortrait && window.matchMedia(
        "(pointer: fine)"
    ).matches) {

        let animationFrame = null;

        heroPortrait.addEventListener("pointermove", (event) => {
            const rect =
                heroPortrait.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateY =
                (x - 0.5) * 5;

            const rotateX =
                (0.5 - y) * 5;

            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            animationFrame = requestAnimationFrame(() => {
                heroPortrait.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(0)`;
            });
        });

        heroPortrait.addEventListener("pointerleave", () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }

            heroPortrait.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    }


    /* =========================================================
       PROJECT IMAGE INTERACTION
       ========================================================= */

    const projectCards = document.querySelectorAll(
        ".project-card"
    );

    projectCards.forEach((card) => {
        const image = card.querySelector("img");

        if (!image) {
            return;
        }

        card.addEventListener("mouseenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("is-hovered");
        });
    });


    /* =========================================================
       CERTIFICATE MODAL
       ========================================================= */

    function openCertificateModal(button) {
        if (!certificateModal) {
            return;
        }

        const image =
            button.getAttribute("data-certificate");

        const title =
            button.getAttribute("data-certificate-title") ||
            "Certificate";

        if (certificateModalImage && image) {
            certificateModalImage.src = image;
            certificateModalImage.alt = title;
        }

        if (certificateModalTitle) {
            certificateModalTitle.textContent = title;
        }

        certificateModal.classList.add("is-open");

        certificateModal.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add("modal-open");

        certificateModalClose?.focus();
    }

    function closeCertificateModal() {
        if (!certificateModal) {
            return;
        }

        certificateModal.classList.remove("is-open");

        certificateModal.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove("modal-open");

        if (certificateModalImage) {
            certificateModalImage.removeAttribute("src");
        }
    }

    certificateButtons.forEach((button) => {
        button.addEventListener("click", () => {
            openCertificateModal(button);
        });
    });

    certificateModalClose?.addEventListener(
        "click",
        closeCertificateModal
    );

    certificateModal?.addEventListener(
        "click",
        (event) => {
            if (
                event.target === certificateModal ||
                event.target.hasAttribute(
                    "data-certificate-backdrop"
                )
            ) {
                closeCertificateModal();
            }
        }
    );

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            certificateModal?.classList.contains("is-open")
        ) {
            closeCertificateModal();
        }
    });


    /* =========================================================
       CONTACT FORM
       ========================================================= */

    /*
       EmailJS configuration
       -------------------------------------
       Service ID:  service_dt4bkla
       Template ID: template_ttjyhg8
       Public Key:  TKer_Rd14MfG1l6mj
    */

    const EMAILJS_PUBLIC_KEY =
        "TKer_Rd14MfG1l6mj";

    const EMAILJS_SERVICE_ID =
        "service_dt4bkla";

    const EMAILJS_TEMPLATE_ID =
        "template_ttjyhg8";


    function setFormStatus(message, type = "default") {
        if (!formStatus) {
            return;
        }

        formStatus.textContent = message;

        formStatus.classList.remove(
            "success",
            "error",
            "loading"
        );

        if (type !== "default") {
            formStatus.classList.add(type);
        }
    }


    if (
        contactForm &&
        typeof emailjs !== "undefined"
    ) {

        try {
            emailjs.init({
                publicKey: EMAILJS_PUBLIC_KEY
            });
        } catch (error) {
            console.error(
                "EmailJS initialization failed:",
                error
            );
        }


        contactForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();

                const submitButton =
                    contactForm.querySelector(
                        'button[type="submit"]'
                    );

                const originalButtonText =
                    submitButton?.textContent ||
                    "Send message";


                /* -----------------------------------------
                   BASIC VALIDATION
                   ----------------------------------------- */

                const nameInput =
                    contactForm.querySelector(
                        '[name="name"]'
                    );

                const emailInput =
                    contactForm.querySelector(
                        '[name="email"]'
                    );

                const messageInput =
                    contactForm.querySelector(
                        '[name="message"]'
                    );


                if (
                    !nameInput?.value.trim() ||
                    !emailInput?.value.trim() ||
                    !messageInput?.value.trim()
                ) {

                    setFormStatus(
                        "Please complete all required fields.",
                        "error"
                    );

                    return;
                }


                /* -----------------------------------------
                   EMAIL FORMAT VALIDATION
                   ----------------------------------------- */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailPattern.test(
                        emailInput.value.trim()
                    )
                ) {

                    setFormStatus(
                        "Please enter a valid email address.",
                        "error"
                    );

                    emailInput.focus();

                    return;
                }


                /* -----------------------------------------
                   LOADING STATE
                   ----------------------------------------- */

                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.setAttribute(
                        "aria-busy",
                        "true"
                    );

                    submitButton.textContent =
                        "Sending...";
                }

                setFormStatus(
                    "Sending your message...",
                    "loading"
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


                    /* -------------------------------------
                       SUCCESS
                       ------------------------------------- */

                    setFormStatus(
                        "Message sent successfully. Thank you for reaching out.",
                        "success"
                    );

                    contactForm.reset();


                } catch (error) {

                    console.error(
                        "EmailJS error:",
                        error
                    );


                    /* -------------------------------------
                       ERROR
                       ------------------------------------- */

                    setFormStatus(
                        "Something went wrong while sending your message. Please try again or email me directly.",
                        "error"
                    );

                } finally {

                    if (submitButton) {

                        submitButton.disabled =
                            false;

                        submitButton.removeAttribute(
                            "aria-busy"
                        );

                        submitButton.textContent =
                            originalButtonText;
                    }
                }
            }
        );

    } else if (contactForm) {

        console.warn(
            "EmailJS is not loaded. " +
            "Make sure the EmailJS browser SDK is included."
        );

        contactForm.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                setFormStatus(
                    "Email service is currently unavailable. Please contact me directly by email.",
                    "error"
                );
            }
        );
    }


    /* =========================================================
       CONTACT FORM INPUT EFFECTS
       ========================================================= */

    const formInputs = document.querySelectorAll(
        ".contact-form input, .contact-form textarea"
    );

    formInputs.forEach((input) => {

        input.addEventListener("focus", () => {
            input.closest(".field")?.classList.add(
                "is-focused"
            );
        });

        input.addEventListener("blur", () => {
            input.closest(".field")?.classList.remove(
                "is-focused"
            );

            if (input.value.trim()) {
                input.closest(".field")?.classList.add(
                    "has-value"
                );
            } else {
                input.closest(".field")?.classList.remove(
                    "has-value"
                );
            }
        });

    });


    /* =========================================================
       EXTERNAL LINKS
       ========================================================= */

    const externalLinks = document.querySelectorAll(
        'a[href^="http"]'
    );

    externalLinks.forEach((link) => {

        const href =
            link.getAttribute("href");

        if (!href) {
            return;
        }

        try {
            const url =
                new URL(href, window.location.href);

            if (
                url.hostname !==
                window.location.hostname
            ) {
                link.setAttribute(
                    "target",
                    "_blank"
                );

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );
            }

        } catch (error) {
            // Ignore invalid URLs.
        }
    });


    /* =========================================================
       IMAGE LOAD HANDLING
       ========================================================= */

    const images =
        document.querySelectorAll("img");

    images.forEach((image) => {

        if (image.complete) {
            image.classList.add("is-loaded");
            return;
        }

        image.addEventListener(
            "load",
            () => {
                image.classList.add("is-loaded");
            },
            {
                once: true
            }
        );

        image.addEventListener(
            "error",
            () => {
                image.classList.add("is-error");
            },
            {
                once: true
            }
        );
    });


    /* =========================================================
       REDUCED MOTION
       ========================================================= */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    function handleReducedMotion() {

        if (reducedMotion.matches) {
            body.classList.add(
                "reduce-motion"
            );
        } else {
            body.classList.remove(
                "reduce-motion"
            );
        }
    }

    handleReducedMotion();

    if (
        typeof reducedMotion.addEventListener ===
        "function"
    ) {
        reducedMotion.addEventListener(
            "change",
            handleReducedMotion
        );
    }


    /* =========================================================
       SCROLL PROGRESS
       ========================================================= */

    const scrollProgress =
        document.querySelector(
            "[data-scroll-progress]"
        );

    if (scrollProgress) {

        let ticking = false;

        function updateScrollProgress() {

            const scrollTop =
                window.scrollY;

            const documentHeight =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            const progress =
                documentHeight > 0
                    ? scrollTop / documentHeight
                    : 0;

            scrollProgress.style.transform =
                `scaleX(${progress})`;

            ticking = false;
        }

        window.addEventListener(
            "scroll",
            () => {

                if (!ticking) {

                    window.requestAnimationFrame(
                        updateScrollProgress
                    );

                    ticking = true;
                }

            },
            {
                passive: true
            }
        );

        updateScrollProgress();
    }


    /* =========================================================
       EXTERNAL PROJECT DEMO LINKS
       ========================================================= */

    const projectLinks =
        document.querySelectorAll(
            ".project-card a"
        );

    projectLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                link.classList.add(
                    "is-clicked"
                );

                window.setTimeout(() => {
                    link.classList.remove(
                        "is-clicked"
                    );
                }, 250);

            }
        );
    });


    /* =========================================================
       PAGE READY
       ========================================================= */

    requestAnimationFrame(() => {
        body.classList.add("page-ready");
    });

});