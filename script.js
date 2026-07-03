/* Karin's Kreations — interactions
   Kept lightweight, dependency-free, and reduced-motion aware. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- mobile menu (side drawer + scrim) ---- */
  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('navDrawer');
  var menu = document.getElementById('mobileMenu');
  var scrim = document.getElementById('navScrim');

  /* Relocate the drawer clip-wrapper to be a direct child of <body> so no
     backdrop-filter / transform / filter ancestor (e.g. .site-header) can
     collapse its position:fixed to the header box. */
  if (drawer && drawer.parentNode !== document.body) document.body.appendChild(drawer);

  function closeMenu() {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    if (menu) menu.classList.remove('open');
    if (scrim) scrim.classList.remove('open');
    toggle.setAttribute('aria-label', 'Open menu');
    if (header) header.classList.remove('nav-open');
  }
  function openMenu() {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    // force reflow so the slide-in / fade-in transitions run from the closed state
    void drawer.offsetWidth;
    if (menu) menu.classList.add('open');
    if (scrim) scrim.classList.add('open');
    toggle.setAttribute('aria-label', 'Close menu');
    if (header) { header.classList.remove('header-hidden'); header.classList.add('nav-open'); }
  }
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      open ? closeMenu() : openMenu();
    });
    if (menu) menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    if (scrim) scrim.addEventListener('click', closeMenu);
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ---- header: shrink + hide-on-scroll-down / reveal-on-scroll-up ---- */
  var lastKnown = window.scrollY || 0, ticking = false;
  function onScroll() {
    var y = window.scrollY || 0;
    header.classList.toggle('scrolled', y > 24);
    var menuOpen = drawer && drawer.classList.contains('open');
    if (menuOpen || y <= header.offsetHeight || y < lastKnown) {
      header.classList.remove('header-hidden');   // top / scrolling up
    } else if (y > lastKnown) {
      header.classList.add('header-hidden');       // scrolling down
    }
    lastKnown = y;
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- auto-load real photos if dropped into assets/photos/ ----
     Any element with data-photo gets that image as a background once it
     successfully loads; otherwise the on-brand fallback stays visible. */
  document.querySelectorAll('[data-photo]').forEach(function (el) {
    var src = el.getAttribute('data-photo');
    if (!src) return;
    var probe = new Image();
    probe.onload = function () {
      el.style.backgroundImage = 'url("' + src + '")';
      el.classList.add('has-photo');
      var tag = el.querySelector('.fallback-tag');
      if (tag) tag.style.display = 'none';
      var illus = el.querySelector('svg');
      if (illus && el.classList.contains('photo-fallback')) illus.style.opacity = '0';
    };
    probe.src = src;
  });

  /* ---- inquiry form (real, non-wired) ---- */
  var form = document.getElementById('inquiryForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      ['name', 'phone', 'occasion'].forEach(function (id) {
        var input = document.getElementById(id);
        var field = input.closest('.field');
        if (!input.value.trim()) {
          field.classList.add('invalid');
          ok = false;
        } else {
          field.classList.remove('invalid');
        }
      });
      if (!ok) {
        note.textContent = 'Please add your name, phone and an occasion so we can follow up.';
        note.classList.remove('success');
        return;
      }
      var name = document.getElementById('name').value.trim().split(' ')[0];
      note.textContent = 'Thank you' + (name ? ', ' + name : '') +
        '! Your request is ready — we’ll be in touch during shop hours. ' +
        'Need it sooner? Call (225) 403-1099.';
      note.classList.add('success');
      form.querySelector('button[type="submit"]').textContent = 'Request sent ✓';
      /* No backend is wired (per pitch); this confirms the interaction locally. */
    });

    form.querySelectorAll('input, select').forEach(function (el) {
      el.addEventListener('input', function () {
        var field = el.closest('.field');
        if (field) field.classList.remove('invalid');
      });
    });
  }
})();
