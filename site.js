/* ============================================================
   WILL JEDRZEJCZAK — minimal behaviour
   Native scroll. No libraries. Reveals are CSS; JS toggles a class.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showAll() {
    document.querySelectorAll('.r').forEach(function (n) { n.classList.add('in'); });
    document.body.classList.add('ready');
  }

  /* Hero: a timer, not requestAnimationFrame. rAF is suspended in a
     background tab, which would leave the headline invisible until the
     visitor focused the page. */
  setTimeout(function () { document.body.classList.add('ready'); }, 60);

  /* Backstop: reveal whatever is actually on screen, in case the
     observer never fires (background tab, odd engine). Only touches
     what is in view, so scroll reveals further down still play. */
  function sweep() {
    document.querySelectorAll('.r:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < innerHeight - 20) el.classList.add('in');
    });
  }
  var net = setTimeout(sweep, 1200);

  if (reduce || !('IntersectionObserver' in window)) {
    clearTimeout(net);
    showAll();
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });

    document.querySelectorAll('.r').forEach(function (el) { io.observe(el); });

    /* A fast flick can outrun the observer — sweep anything in view.
       Throttled on a timestamp, not rAF: a safety net must not depend
       on the same frame loop that can be suspended. */
    var lastSweep = 0;
    addEventListener('scroll', function () {
      var now = Date.now();
      if (now - lastSweep < 120) return;
      lastSweep = now;
      sweep();
    }, { passive: true });
  }

  /* ── Counters ──────────────────────────────────────────────── */
  function runCount(el) {
    var to = parseFloat(el.dataset.to);
    var dec = parseInt(el.dataset.dec || '0', 10);
    var pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    var out = function (v) { return pre + (dec ? v.toFixed(dec) : Math.round(v)) + suf; };
    if (reduce) { el.textContent = out(to); return; }
    var t0 = null, DUR = 1500;
    (function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / DUR, 1);
      el.textContent = pre + (dec ? (to * (1 - Math.pow(1 - p, 3))).toFixed(dec)
                                  : Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step); else el.textContent = out(to);
    })(performance.now());
  }

  var nums = document.querySelectorAll('.n[data-to]');
  if (reduce || !('IntersectionObserver' in window)) {
    nums.forEach(runCount);
  } else {
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); nio.unobserve(e.target); }
      });
    }, { threshold: 0.35 });
    nums.forEach(function (n) { nio.observe(n); });
    /* counters depend on rAF; if it never runs, still show the value */
    setTimeout(function () {
      nums.forEach(function (n) {
        if (n.textContent === '0') n.textContent =
          (n.dataset.pre || '') + n.dataset.to + (n.dataset.suf || '');
      });
    }, 3500);
  }

  /* ── Work rows ─────────────────────────────────────────────── */
  document.querySelectorAll('.row').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.parentElement.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ── Menu ──────────────────────────────────────────────────── */
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');
  if (btn && menu) {
    var set = function (open) {
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      btn.textContent = open ? 'Close' : 'Menu';
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };
    btn.addEventListener('click', function () { set(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { set(false); });
    });
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) set(false);
    });
  }
})();
