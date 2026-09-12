/* ==========================================================================
   Thanga Pandiyan - Portfolio Interactive Script
   ========================================================================== */

// 1. Portfolio Configuration
const PORTFOLIO_CONFIG = {
  name: "Thanga Pandiyan",
  role: "Web Developer & AI-DS Student",
  githubUsername: "thangapandiyany88-spec",
  githubUrl: "https://github.com/thangapandiyany88-spec",
  email: "thangapandiyany88@gmail.com",
  resumePath: "assets/resume/Thanga_Pandiyan_Resume.pdf",
  certificates: {
    python: "assets/certificates/python.pdf",
    c: "assets/certificates/c.pdf",
    cpp: "assets/certificates/cpp.pdf"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollProgress();
  initActiveNavHighlight();
  initBackToTop();
  initScrollReveal();
  initContactForm();
  initDynamicYear();
  initDynamicLinks();
});

/* --------------------------------------------------------------------------
   Navbar & Mobile Navigation
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   Scroll Progress & Back to Top
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight <= 0) return;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   Active Section Highlight (Intersection Observer)
   -------------------------------------------------------------------------- */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observerInstance.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Contact Form Validation & Processing
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    statusEl.className = 'form-status';
    statusEl.innerHTML = '';
    statusEl.style.display = 'none';

    // Validation
    if (!name || !email || !message) {
      showStatus('Please fill out all fields before submitting.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Construct Web Gmail Compose & Mailto URLs
    const subject = `Portfolio Contact from ${name}`;
    const bodyContent = `${message}\n\n------------------------------\nSender Name: ${name}\nSender Email: ${email}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_CONFIG.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    // Try opening Gmail directly in a new tab
    window.open(gmailUrl, '_blank');

    // Show rich success feedback box with instant actions
    const successHTML = `
      <div style="margin-bottom: 0.8rem;">
        <strong><i class="fa-solid fa-circle-check"></i> Preparing your message!</strong><br>
        If Gmail didn't open automatically, use one of the options below:
      </div>
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
        <a href="${gmailUrl}" target="_blank" class="btn btn-primary btn-sm" style="text-decoration:none; font-size:0.8rem;">
          <i class="fa-brands fa-google"></i> Open Gmail Compose
        </a>
        <a href="${mailtoUrl}" class="btn btn-secondary btn-sm" style="text-decoration:none; font-size:0.8rem;">
          <i class="fa-solid fa-envelope"></i> Desktop Mail App
        </a>
        <button type="button" id="copy-email-btn" class="btn btn-outline btn-sm" style="font-size:0.8rem;">
          <i class="fa-solid fa-copy"></i> Copy Email
        </button>
      </div>
    `;

    showHtmlStatus(successHTML, 'success');

    // Bind copy email button
    setTimeout(() => {
      const copyBtn = document.getElementById('copy-email-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(PORTFOLIO_CONFIG.email).then(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => {
              copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy Email';
            }, 2000);
          });
        });
      }
    }, 100);

    form.reset();
  });

  function showStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = `form-status ${type}`;
    statusEl.style.display = 'block';
  }

  function showHtmlStatus(html, type) {
    statusEl.innerHTML = html;
    statusEl.className = `form-status ${type}`;
    statusEl.style.display = 'block';
  }
}

/* --------------------------------------------------------------------------
   Dynamic Links & Config Injection
   -------------------------------------------------------------------------- */
function initDynamicLinks() {
  // Bind GitHub links
  const githubElements = document.querySelectorAll('.js-github-link');
  githubElements.forEach(el => {
    el.href = PORTFOLIO_CONFIG.githubUrl;
  });

  // Bind GitHub text representations
  const githubUsernames = document.querySelectorAll('.js-github-username');
  githubUsernames.forEach(el => {
    el.textContent = PORTFOLIO_CONFIG.githubUsername;
  });

  // Bind Email links
  const emailElements = document.querySelectorAll('.js-email-link');
  emailElements.forEach(el => {
    el.href = `mailto:${PORTFOLIO_CONFIG.email}`;
    if (el.classList.contains('js-email-text')) {
      el.textContent = PORTFOLIO_CONFIG.email;
    }
  });

  // Resume Download / View Button Handlers
  const resumeDownloadBtns = document.querySelectorAll('.js-resume-download');
  resumeDownloadBtns.forEach(btn => {
    btn.href = PORTFOLIO_CONFIG.resumePath;
    btn.setAttribute('download', 'Thanga_Pandiyan_Resume.pdf');
  });

  const resumeViewBtns = document.querySelectorAll('.js-resume-view');
  resumeViewBtns.forEach(btn => {
    btn.href = PORTFOLIO_CONFIG.resumePath;
    btn.setAttribute('target', '_blank');
  });
}

function initDynamicYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
