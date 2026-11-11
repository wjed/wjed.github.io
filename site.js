/* ============================================================
   WILL JEDRZEJCZAK — motion, dependency-free

   Ollivere, Remix, Work Louder and Cosmos all run native scroll:
   no Lenis, no GSAP. This does the same. Nothing hijacks the wheel,
   and nothing runs per-frame except a cursor that idles when still.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raf = requestAnimationFrame;

  function showAll() {
    document.querySelectorAll('.mi').forEach(function (n) { n.style.transform = 'none'; });
    document.querySelectorAll('[data-fade]').forEach(function (n) { n.classList.add('in'); });
    var bar = document.querySelector('.redact .bar');
    if (bar) bar.style.transform = 'scaleX(0)';
    document.querySelectorAll('.n[data-to]').forEach(function (n) {
      n.textContent = (n.dataset.pre || '') + n.dataset.to + (n.dataset.suf || '');
    });
    var l = document.getElementById('load');
    if (l && l.parentNode) l.parentNode.removeChild(l);
    document.body.classList.add('ready');
  }

  /* Nothing can leave the page unreadable. */
  var net = setTimeout(showAll, 4000);

  /* ── Loader ────────────────────────────────────────────────── */
  function intro() {
    var load = document.getElementById('load');
    var num = document.getElementById('loadNum');
    var bar = document.querySelector('.load-bar i');
    if (!load) { afterIntro(); return; }

    var t0 = null, DUR = 1100;
    function tick(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / DUR, 1);
      var e = 1 - Math.pow(1 - p, 3);
      if (num) num.textContent = String(Math.round(e * 100)).padStart(3, '0');
      if (bar) bar.style.right = (100 - e * 100) + '%';
      if (p < 1) raf(tick);
      else {
        load.classList.add('out');
        setTimeout(function () {
          if (load.parentNode) load.parentNode.removeChild(load);
        }, 800);
        afterIntro();
      }
    }
    raf(tick);
  }

  function afterIntro() {
    clearTimeout(net);
    document.body.classList.add('ready');          // CSS drives the hero reveal
    setTimeout(function () {
      var bar = document.querySelector('.redact .bar');
      if (bar) bar.style.transform = 'scaleX(0)';
    }, 520);
  }

  if (reduce) { clearTimeout(net); showAll(); }
  else intro();

  /* ── Reveals: one observer, CSS does the animating ─────────── */
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    document.querySelectorAll('[data-fade], .sec .m, .band .m, .end .m')
      .forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.mi').forEach(function (n) { n.style.transform = 'none'; });
    document.querySelectorAll('[data-fade]').forEach(function (n) { n.classList.add('in'); });
  }

  /* ── Counters ──────────────────────────────────────────────── */
  var nums = document.querySelectorAll('.n[data-to]');
  function runCount(el) {
    var to = parseFloat(el.dataset.to), pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    if (reduce) { el.textContent = pre + to + suf; return; }
    var t0 = null, DUR = 1400;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / DUR, 1);
      el.textContent = pre + Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf(step); else el.textContent = pre + to + suf;
    }
    raf(step);
  }
  if ('IntersectionObserver' in window) {
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); nio.unobserve(e.target); } });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { nio.observe(n); });
  } else nums.forEach(runCount);

  /* ── Nav: hide going down. Passive listener, rAF-throttled. ── */
  var nav = document.getElementById('nav'), last = 0, queued = false;
  addEventListener('scroll', function () {
    if (queued) return;
    queued = true;
    raf(function () {
      var y = pageYOffset;
      if (y > last && y > 300) nav.classList.add('up'); else nav.classList.remove('up');
      last = y < 0 ? 0 : y;
      sweep();
      queued = false;
    });
  }, { passive: true });

  /* Backstop: a fast flick can outrun the observer. Anything already in
     view gets revealed regardless, so content can never stay hidden. */
  function sweep() {
    var hidden = document.querySelectorAll('[data-fade]:not(.in), .m:not(.in)');
    for (var i = 0; i < hidden.length; i++) {
      if (hidden[i].getBoundingClientRect().top < innerHeight - 30) hidden[i].classList.add('in');
    }
  }

  /* ── Gallery masonry ───────────────────────────────────────── */
  function layoutGallery() {
    var gal = document.querySelector('.gal');
    if (!gal) return;
    var cs = getComputedStyle(gal);
    if (cs.gridTemplateColumns.split(' ').length < 2) {
      gal.querySelectorAll('figure').forEach(function (f) { f.style.gridRowEnd = ''; });
      return;
    }
    var row = parseFloat(cs.gridAutoRows) || 8;
    var gap = parseFloat(cs.rowGap) || 0;
    gal.querySelectorAll('figure').forEach(function (f) {
      f.style.gridRowEnd = 'auto';
      f.style.gridRowEnd = 'span ' + Math.ceil((f.getBoundingClientRect().height + gap) / (row + gap));
    });
  }
  layoutGallery();
  addEventListener('load', layoutGallery);
  var rt;
  addEventListener('resize', function () {
    clearTimeout(rt); rt = setTimeout(layoutGallery, 120);
  }, { passive: true });
  document.querySelectorAll('.gal img').forEach(function (img) {
    if (!img.complete) img.addEventListener('load', layoutGallery, { once: true });
  });

  /* ── Cursor: only runs while the ring is catching up ───────── */
  var cur = document.querySelector('.cur');
  if (cur && matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
    var dot = cur.querySelector('.cur-dot'), ring = cur.querySelector('.cur-ring');
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, live = 0;

    function loop() {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0) translate(-50%,-50%)';
      ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) translate(-50%,-50%)';
      live = (Math.abs(mx - rx) > .2 || Math.abs(my - ry) > .2) ? raf(loop) : 0;
    }

    addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!live) live = raf(loop);
    }, { passive: true });

    document.querySelectorAll('[data-c]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cur.classList.add('on'); });
      el.addEventListener('mouseleave', function () { cur.classList.remove('on'); });
    });
  }

  /* ── Accordion ─────────────────────────────────────────────── */
  document.querySelectorAll('.job-bar').forEach(function (bar) {
    bar.addEventListener('click', function () {
      var on = bar.parentElement.classList.toggle('on');
      bar.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
  });

  /* ── Menu ──────────────────────────────────────────────────── */
  var burger = document.getElementById('burger'), menu = document.getElementById('menu');
  if (burger && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      burger.classList.toggle('x', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
    });
  }
})();
