
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Basic form enhancement: add honeypot field
  const form = document.querySelector('.contact-form');
  if (form) {
    const hp = document.createElement('input');
    hp.type = 'text'; hp.name = '_gotcha'; hp.style.display = 'none';
    form.appendChild(hp);
  }
});
