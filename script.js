// ===== Cached DOM Elements =====
const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const reveals = document.querySelectorAll(
  '.skill-card, .cert-list li, .home-content, .about-section p'
);

// ===== Hamburger Menu Toggle =====
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// ===== Smooth Scroll + Close Menu =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });

    // Close mobile menu
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===== Active Section Highlight =====
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
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
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

revealElements();

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert("❌ Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      contactForm.reset();
      formStatus.textContent = "";
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Server error. Make sure the server is running.");
  }
});
