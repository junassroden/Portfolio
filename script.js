// ===== Cached DOM Elements =====
const sections = document.querySelectorAll("section");
const navMenu = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const reveals = document.querySelectorAll(
  ".skill-card, .cert-list li, .home-content, .about-section p"
);

// ===== Hamburger Menu Toggle =====
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// ===== Smooth Scroll + Close Menu =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });

    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// ===== Active Section Highlight =====
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  revealElements();
});

// ===== Scroll Reveal =====
function revealElements() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

revealElements();

// ===== Popup Notification =====
function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");

  notification.textContent = message;
  notification.className = `notification show ${type}`;

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// ===== Contact Form Submission (EmailJS) =====
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    showNotification("❌ Please fill in all fields.", "error");
    return;
  }

  emailjs.sendForm(
    "service_dt4bkla",   // Service ID
    "template_ttjyhg8",  // Template ID
    contactForm
  )
  .then(() => {
    showNotification("✅ Message sent successfully!", "success");
    contactForm.reset();
  })
  .catch(error => {
    console.error("EmailJS Error:", error);
    showNotification("❌ Failed to send message. Please try again.", "error");
  });
});
