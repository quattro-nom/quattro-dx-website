(function () {
  'use strict';

  const nav       = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  // Hamburger toggle
  navToggle.addEventListener('click', function () {
    var isOpen = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when a link is clicked
  navMenu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Sticky nav: add background/shadow after scrolling past hero
  window.addEventListener('scroll', function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  }, { passive: true });

  // Offset smooth scroll to account for fixed nav height
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = nav.offsetHeight + 8;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
