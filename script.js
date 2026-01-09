// ===== Initialize Lucide Icons =====
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== Navbar Scroll Effect =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  // Add/remove scrolled class
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
  
  // Update active nav link
  updateActiveNavLink();
  
  // Trigger reveal animations
  revealElements();
});

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// ===== Smooth Scroll Navigation =====
navLinkItems.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ===== Update Active Nav Link =====
function updateActiveNavLink() {
  let current = 'home';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ===== Scroll Reveal Animation =====
function revealElements() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

// Initial call for elements already in view
revealElements();

// ===== Scroll Indicator Click =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
}

// ===== Toast Notification =====
function showToast(message, type = 'success') {
  toastMessage.textContent = message;
  toast.className = `toast show ${type}`;
  
  // Re-initialize icons for toast
  lucide.createIcons();
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ===== Contact Form Submission =====
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = contactForm.querySelector('#name').value.trim();
  const email = contactForm.querySelector('#email').value.trim();
  const message = contactForm.querySelector('#message').value.trim();
  
  // Basic validation
  if (!name || !email || !message) {
    showToast('Please fill in all fields.', 'error');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }
  
  // Get submit button
  const submitBtn = contactForm.querySelector('.btn-submit');
  const originalContent = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10" stroke-opacity="0.3"></circle>
      <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
      </path>
    </svg>
    Sending...
  `;
  
  // Simulate form submission (replace with actual EmailJS or backend)
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
  } catch (error) {
    showToast('Failed to send message. Please try again.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalContent;
    lucide.createIcons();
  }
});

// ===== Close Mobile Menu on Outside Click =====
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// ===== Keyboard Navigation (ESC closes menu) =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// ===== Performance: Throttled Scroll =====
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      revealElements();
      ticking = false;
    });
    ticking = true;
  }
});

// ===== Intersection Observer for Better Performance =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

reveals.forEach(element => {
  observer.observe(element);
});

// ===== Certificate Card Lightbox =====
const certCards = document.querySelectorAll('.cert-card');
const certLightbox = document.getElementById('certLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

// Open lightbox on card click
certCards.forEach(card => {
  card.addEventListener('click', function() {
    const certSrc = this.getAttribute('data-cert');
    if (certSrc && certLightbox && lightboxImage) {
      lightboxImage.src = certSrc;
      lightboxImage.alt = this.querySelector('h3')?.textContent || 'Certificate';
      certLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close lightbox functions
function closeLightbox() {
  if (certLightbox) {
    certLightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close on button click
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

// Close on backdrop click
if (certLightbox) {
  certLightbox.addEventListener('click', function(e) {
    if (e.target === certLightbox) {
      closeLightbox();
    }
  });
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

console.log('🚀 Portfolio loaded successfully!');
