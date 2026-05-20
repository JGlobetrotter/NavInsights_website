// Navbar scroll behaviour
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile nav toggle
const navToggle  = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
if (navToggle && navOverlay) {
  navToggle.addEventListener('click', () => {
    const open = navOverlay.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('.nav-overlay a').forEach(link => {
    link.addEventListener('click', () => {
      navOverlay.classList.remove('open');
      navToggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Desktop dropdown (click-based for accessibility)
document.querySelectorAll('.nav-item').forEach(item => {
  const toggle = item.querySelector('.dropdown-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const isOpen = item.classList.toggle('dropdown-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!item.contains(e.target)) {
      item.classList.remove('dropdown-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Lead magnet / newsletter form
function setupEmailForm(formId, successId) {
  const form    = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"], input[type="submit"]');
    const orig = btn ? btn.textContent || btn.value : '';
    if (btn) { btn.disabled = true; if (btn.tagName === 'BUTTON') btn.textContent = 'Sending…'; else btn.value = 'Sending…'; }
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        if (success) success.style.display = 'block';
      } else {
        throw new Error('non-ok');
      }
    } catch {
      alert('Something went wrong — please try again or email us directly.');
      if (btn) { btn.disabled = false; if (btn.tagName === 'BUTTON') btn.textContent = orig; else btn.value = orig; }
    }
  });
}

setupEmailForm('leadMagnetForm',  'leadMagnetSuccess');
setupEmailForm('freeStuffForm',   'freeStuffSuccess');
setupEmailForm('contactForm',     'contactSuccess');

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
