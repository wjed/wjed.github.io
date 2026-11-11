/* ============================================================
   WILL JEDRZEJCZAK — motion
   Lenis inertia + GSAP/ScrollTrigger. Every hidden element has a
   guaranteed path back to visible: if a CDN is blocked or motion
   is reduced, showAll() runs and the page renders plainly.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';
  var hasLenis = typeof window.Lenis !== 'undefined';

  function showAll() {
    document.querySelectorAll('.mi').forEach(function (n) { n.style.transform = 'none'; });
    document.querySelectorAll('[data-fade]').forEach(function (n) { n.style.opacity = 1; });
    var bar = document.querySelector('.redact .bar');
    if (bar) bar.style.transform = 'scaleX(0)';
    var l = document.getElementById('load');
    if (l) l.remove();
    document.querySelectorAll('.n[data-to]').forEach(function (n) {
      n.textContent = (n.dataset.pre || '') + n.dataset.to + (n.dataset.suf || '');
    });
  }

  /* Hard safety net — if anything below throws or never runs, the page
     becomes readable on its own. Must sit clear of the intro timeline
     (~3.5s) or it would cut the reveal short; onComplete clears it. */
  var armed = setTimeout(showAll, 6000);

  if (reduce || !hasGSAP) { clearTimeout(armed); showAll(); initBasics(); return; }

  gsap.registerPlugin(ScrollTrigger);

  /* ── Smooth scroll ─────────────────────────────────────────── */
  var lenis = null;
  if (hasLenis) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ── Loader → hero ─────────────────────────────────────────── */
  var load = document.getElementById('load');
  var num = document.getElementById('loadNum');
  var counter = { v: 0 };

  var intro = gsap.timeline({
    onStart: function () { if (lenis) lenis.stop(); },
    onComplete: function () {
      clearTimeout(armed);
      if (lenis) lenis.start();
      ScrollTrigger.refresh();
    }
  });

  intro
    .to(counter, {
      v: 100, duration: 1.5, ease: 'power2.inOut',
      onUpdate: function () {
        num.textContent = String(Math.round(counter.v)).padStart(3, '0');
      }
    }, 0)
    .to('.load-bar i', { right: '0%', duration: 1.5, ease: 'power2.inOut' }, 0)
    .to('.load-meta', { opacity: 0, duration: .3 }, 1.5)
    .to(load, {
      clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'expo.inOut',
      onComplete: function () { load.remove(); }
    }, 1.65)
    // hero type rises out of its masks
    .to('.hero-h1 .mi', { y: '0%', duration: 1.1, ease: 'expo.out', stagger: .085 }, 2.05)
    // the declassify beat
    .to('.redact .bar', { scaleX: 0, duration: .85, ease: 'expo.inOut', transformOrigin: 'right' }, 2.55)
    .to('.hero-top, .hero-foot', { opacity: 1, duration: .6 }, 2.5)
    .to('.hero-col .mi', { y: '0%', duration: .9, ease: 'expo.out', stagger: .06 }, 2.6)
    .from('.nav', { y: -40, opacity: 0, duration: .7, ease: 'expo.out' }, 2.5);

  gsap.set('.hero-top, .hero-foot', { opacity: 0 });

  /* ── Masked headline reveals ───────────────────────────────── */
  gsap.utils.toArray('.sec .m, .band .m, .end .m').forEach(function (el) {
    gsap.to(el.querySelector('.mi'), {
      y: '0%', duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* ── Fades ─────────────────────────────────────────────────── */
  gsap.utils.toArray('[data-fade]').forEach(function (el, i) {
    gsap.to(el, {
      opacity: 1, y: 0, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' }
    });
    gsap.set(el, { y: 24 });
  });

  /* ── Image parallax ────────────────────────────────────────── */
  gsap.utils.toArray('[data-par] img').forEach(function (img) {
    gsap.fromTo(img, { yPercent: -8, scale: 1.14 }, {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  /* ── Stat counters ─────────────────────────────────────────── */
  gsap.utils.toArray('.n[data-to]').forEach(function (el) {
    var target = parseFloat(el.dataset.to);
    var pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    var o = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: function () {
        gsap.to(o, {
          v: target, duration: 1.8, ease: 'power2.out',
          onUpdate: function () { el.textContent = pre + Math.round(o.v); },
          onComplete: function () { el.textContent = pre + target + suf; }
        });
      }
    });
  });

  /* ── Ticker: constant drift + scroll-velocity push ─────────── */
  var row = document.getElementById('tickRow');
  if (row) {
    var x = 0, half = row.scrollWidth / 2, vel = 0;
    ScrollTrigger.create({
      onUpdate: function (self) { vel = self.getVelocity() / 260; }
    });
    gsap.ticker.add(function () {
      vel *= 0.92;
      x -= (0.9 + Math.abs(vel));
      if (half && -x >= half) x += half;
      row.style.transform = 'translateX(' + x + 'px)';
    });
  }

  /* ── Nav hide on the way down ──────────────────────────────── */
  var nav = document.getElementById('nav'), last = 0;
  ScrollTrigger.create({
    onUpdate: function (self) {
      var y = self.scroll();
      if (y > last && y > 300) nav.classList.add('up'); else nav.classList.remove('up');
      last = y;
    }
  });

  initBasics();

  /* ── Cursor, accordion, menu, anchors ──────────────────────── */
  function initBasics() {
    /* cursor */
    var cur = document.querySelector('.cur');
    if (cur && matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
      var dot = cur.querySelector('.cur-dot'),
          ring = cur.querySelector('.cur-ring'),
          label = cur.querySelector('.cur-label');
      var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

      addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });

      (function loop() {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
        requestAnimationFrame(loop);
      })();

      document.querySelectorAll('[data-c]').forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          cur.classList.add('on');
          label.textContent = el.getAttribute('data-c') || '';
        });
        el.addEventListener('mouseleave', function () {
          cur.classList.remove('on');
          label.textContent = '';
        });
      });
    }

    /* job accordion */
    document.querySelectorAll('.job-bar').forEach(function (bar) {
      bar.addEventListener('click', function () {
        var on = bar.parentElement.classList.toggle('on');
        bar.setAttribute('aria-expanded', on ? 'true' : 'false');
        if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 650);
      });
    });

    /* menu */
    var burger = document.getElementById('burger'), menu = document.getElementById('menu');
    function setMenu(open) {
      menu.classList.toggle('open', open);
      burger.classList.toggle('x', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (lenis) open ? lenis.stop() : lenis.start();
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false); });

    /* anchors through Lenis so smooth scroll owns the motion */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(t, { offset: 0, duration: 1.4 });
        else t.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
})();
