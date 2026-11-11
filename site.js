/* ============================================================
   WILL JEDRZEJCZAK — site behaviour
   Reveals, header hide/show, stat counters, role accordion, menu.
   All motion is skipped when the visitor prefers reduced motion.
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll reveals ──────────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');

  if (reduce || !('IntersectionObserver' in window)) {
    for (var i = 0; i < reveals.length; i++) reveals[i].classList.add('in');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── Header: hide going down, show coming up ─────────────── */
  var nav = document.getElementById('nav');
  var lastY = window.pageYOffset;
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset;
    if (y > lastY && y > 220) nav.classList.add('hide');
    else nav.classList.remove('hide');
    lastY = y < 0 ? 0 : y;
    sweep();
    ticking = false;
  }

  /* Backstop: if the observer ever misses an element, content would stay
     invisible — unacceptable on a portfolio. Anything scrolled into view
     gets revealed regardless of what the observer did. */
  function sweep() {
    var hidden = document.querySelectorAll('.reveal:not(.in)');
    for (var j = 0; j < hidden.length; j++) {
      if (hidden[j].getBoundingClientRect().top < window.innerHeight - 40) {
        hidden[j].classList.add('in');
      }
    }
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  /* ── Stat counters ───────────────────────────────────────── */
  var stats = document.querySelectorAll('.stat-n');

  function fmt(v, dec) {
    if (dec) return v.toFixed(dec);
    return Math.round(v).toLocaleString('en-US');
  }

  function run(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';

    if (reduce) { el.textContent = fmt(target, dec) + suffix; return; }

    var dur = 1500, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased, dec) + (p === 1 ? suffix : '');
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    stats.forEach(run);
  } else {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); sio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    stats.forEach(function (el) { sio.observe(el); });
  }

  /* ── Role accordion ──────────────────────────────────────── */
  var bars = document.querySelectorAll('.role-bar');
  bars.forEach(function (bar) {
    bar.addEventListener('click', function () {
      var role = bar.parentElement;
      var open = role.classList.toggle('open');
      bar.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ── Mobile menu ─────────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
  });

  /* ── Pause the marquee when it's off screen ──────────────── */
  var track = document.querySelector('.marquee-track');
  if (track && 'IntersectionObserver' in window && !reduce) {
    new IntersectionObserver(function (entries) {
      track.style.animationPlayState = entries[0].isIntersecting ? 'running' : 'paused';
    }, { threshold: 0 }).observe(track.parentElement);
  }
})();
