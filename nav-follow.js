// Mobile: keep the active section link visible in horizontally-scrolling case-study navs.
(function () {
  if (window.__amNavFollow) return; window.__amNavFollow = true;
  const mq = matchMedia('(max-width: 767px)');
  const ACTIVE = '.active,[aria-current="true"],[aria-current="location"],[aria-current="page"],.is-active,.on,.current';
  const scroller = (el) => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const ox = getComputedStyle(p).overflowX;
      if ((ox === 'auto' || ox === 'scroll') && p.scrollWidth > p.clientWidth + 1) return p;
    }
    return null;
  };
  const follow = (nav) => {
    if (!mq.matches) return;
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const a = links.find((l) => l.matches(ACTIVE));
    if (!a || a === nav.__amLast) return;
    nav.__amLast = a;
    const sc = scroller(a); if (!sc) return;
    const sr = sc.getBoundingClientRect(), ar = a.getBoundingClientRect();
    const target = sc.scrollLeft + (ar.left - sr.left) - (sr.width - ar.width) / 2;
    sc.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  };
  const init = () => {
    const navs = [...document.querySelectorAll('nav')].filter((n) => n.querySelectorAll('a[href^="#"]').length >= 3 && !n.closest('site-header'));
    navs.forEach((nav) => {
      let raf = 0;
      new MutationObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => follow(nav)); })
        .observe(nav, { subtree: true, attributes: true, attributeFilter: ['class', 'aria-current'] });
      follow(nav);
    });
    mq.addEventListener && mq.addEventListener('change', () => navs.forEach((n) => { n.__amLast = null; follow(n); }));
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
