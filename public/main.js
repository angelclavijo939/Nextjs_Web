/* ============================================================
   NEXUS TECH — main.js
   ============================================================ */

/* ── PRELOADER ─────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    setTimeout(() => pre.classList.add('hide'), 800);
    setTimeout(() => pre.remove(), 1400);
  }
});

/* ── HEADER SCROLL ──────────────────────────────────────────── */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── HAMBURGER MENU ─────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!header.contains(e.target) && navMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ── PARTÍCULAS HERO ────────────────────────────────────────── */
const particleContainer = document.getElementById('heroParticles');
if (particleContainer) {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation-delay:${Math.random() * 6}s;
      animation-duration:${Math.random() * 4 + 4}s;
    `;
    particleContainer.appendChild(p);
  }
}

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── BLOG LIKES ─────────────────────────────────────────────── */
function toggleLike(el) {
  const countEl = el.querySelector('.like-count');
  const isLiked = el.classList.toggle('liked');
  const count   = parseInt(countEl.textContent, 10);
  countEl.textContent = isLiked ? count + 1 : count - 1;
  el.querySelector('span').textContent = isLiked ? '♥' : '♡';
}

/* ── NEWSLETTER ─────────────────────────────────────────────── */
function subscribeNewsletter(btn) {
  const input = btn.previousElementSibling;
  const val   = input.value.trim();
  if (!val || !val.includes('@')) {
    input.style.borderColor = '#ff4d6d';
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  btn.textContent = '✓';
  btn.style.background = '#25d366';
  input.value = '';
  input.placeholder = '¡Suscrito!';
}

/* ── SMOOTH SCROLL para anclas ──────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
