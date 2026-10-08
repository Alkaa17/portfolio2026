/* Fullscreen page-transition + loading curtain. window.AMGo(url) navigates with the curtain; same-origin page-link clicks (clean URLs or *.html) are intercepted. */
(function () {
  if (window.AMGo) return;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var BOUNCE = 'cubic-bezier(.34,1.56,.64,1)';
  var css = document.createElement('style');
  css.textContent =
    '@keyframes amtWiggle{0%,100%{transform:rotate(-8deg) scale(1)}50%{transform:rotate(8deg) scale(1.06)}}' +
    '@keyframes amtHop{0%,100%{transform:translateY(0);opacity:.55}40%{transform:translateY(-9px);opacity:1}}' +
    '@keyframes amtTwinkle{0%,100%{transform:scale(.6) rotate(0);opacity:0}50%{transform:scale(1) rotate(45deg);opacity:1}}' +
    '#am-curtain{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;' +
    'background-color:var(--cream,#FFFCF5);background-image:radial-gradient(var(--pink-200,#FCC6D3) 4px,transparent 4.5px),radial-gradient(var(--maize,#FFF184) 4px,transparent 4.5px),radial-gradient(var(--mint,#95CBBD) 3.5px,transparent 4px),radial-gradient(var(--sky,#72C1E2) 3px,transparent 3.5px),radial-gradient(var(--lilac,#D9B8D6) 3.5px,transparent 4px);' +
    'background-size:96px 96px;background-position:0 0,48px 24px,24px 60px,72px 72px,60px 12px;opacity:1;' +
    'color:var(--ink-700,#5E3847);pointer-events:none;transition:opacity 1100ms cubic-bezier(.4,0,.2,1)}' +
    '#am-curtain.amt-hidden{opacity:0}' +
    '#am-curtain .amt-inner{display:flex;flex-direction:column;align-items:center;gap:18px;transition:opacity 900ms ease,transform 1100ms ' + BOUNCE + '}' +
    '#am-curtain.amt-hidden .amt-inner{opacity:0;transform:scale(.94)}' +
    '#am-curtain .amt-wand{position:relative;width:96px;height:96px}' +
    '#am-curtain .amt-wand img{width:100%;height:100%;object-fit:contain;animation:amtWiggle 1800ms ease-in-out infinite;filter:drop-shadow(0 4px 6px rgba(217,184,214,.9))}' +
    '#am-curtain .amt-star{position:absolute;font:600 18px/1 var(--font-display,sans-serif);animation:amtTwinkle 2.6s ease-in-out infinite}' +
    '#am-curtain .amt-logo{height:56px;width:auto}' +
    '#am-curtain .amt-label{display:flex;gap:10px;align-items:center;font:500 13px/1 var(--font-mono,monospace);letter-spacing:.24em;text-transform:uppercase}' +
    '#am-curtain .amt-dots{display:flex;gap:6px}#am-curtain .amt-dots span{animation:amtHop 1600ms ease-in-out infinite}' +
    '@media (prefers-reduced-motion: reduce){#am-curtain *{animation:none !important}}';
  document.head.appendChild(css);

  var el = document.createElement('div');
  el.id = 'am-curtain';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.innerHTML =
    '<div class="amt-inner">' +
      '<div class="amt-wand"><img src="' + (window.__res ? __res('./assets/ds/wand-sm.png') : './assets/ds/wand-sm.png') + '" alt="">' +
        '<span class="amt-star" style="left:-14px;top:6px;color:var(--pink-500)">✦</span>' +
        '<span class="amt-star" style="right:-12px;top:-4px;animation-delay:.45s;color:var(--lemon)">✦</span>' +
        '<span class="amt-star" style="right:-4px;bottom:0;font-size:12px;animation-delay:.9s;color:var(--sky)">✦</span></div>' +
      '<img class="amt-logo" src="' + (window.__res ? __res('./assets/ds/logo-script.png') : './assets/ds/logo-script.png') + '" alt="Alka Mahapatra">' +
      '<div class="amt-label"><span>sprinkling magic</span><span class="amt-dots" aria-hidden="true">' +
        '<span style="color:var(--pink-500)">✦</span><span style="animation-delay:.15s;color:var(--tangerine)">✦</span><span style="animation-delay:.3s;color:var(--olivine)">✦</span><span style="animation-delay:.45s;color:var(--sea)">✦</span></span></div>' +
    '</div>';
  el.classList.add('amt-hidden');
  (document.body || document.documentElement).appendChild(el);

  // Show only if the first screen isn't painted after DELAY; content streams top→bottom underneath.
  var DELAY = 900, MIN_SHOWN = 900, shownAt = 0, done = false;
  function aboveFoldReady() {
    if (document.readyState === 'complete') return true;
    if (!document.querySelector('nav')) return false;
    var imgs = document.querySelectorAll('img, video'), h = innerHeight;
    for (var i = 0; i < imgs.length; i++) {
      var m = imgs[i]; if (el.contains(m)) continue;
      var r = m.getBoundingClientRect();
      if (r.bottom <= 0 || r.top >= h || r.width === 0) continue;
      if (m.tagName === 'IMG' ? !m.complete : m.readyState < 2) return false;
    }
    return true;
  }
  function hide() {
    if (done) return; done = true;
    clearInterval(poll); clearTimeout(showT);
    if (!shownAt) { el.remove(); return; }
    setTimeout(function () {
      el.classList.add('amt-hidden');
      el.style.pointerEvents = 'none';
      el.setAttribute('aria-hidden', 'true');
      setTimeout(function () { el.remove(); }, 1400);
    }, Math.max(0, MIN_SHOWN - (performance.now() - shownAt)));
  }
  var showT = setTimeout(function () {
    if (done || aboveFoldReady()) return hide();
    shownAt = performance.now();
    el.style.pointerEvents = 'all';
    el.classList.remove('amt-hidden');
  }, DELAY);
  var poll = setInterval(function () { if (aboveFoldReady()) hide(); }, 150);
  window.addEventListener('load', hide);
  setTimeout(hide, 8000);

  window.AMGo = function (url) { location.href = url; };

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    var u = new URL(a.getAttribute('href'), location.href);
    if (u.origin !== location.origin || !/(\.html|\/[^.]*)$/i.test(u.pathname)) return;
    if (u.pathname === location.pathname) return;
    e.preventDefault();
    window.AMGo(u.href);
  });
})();
