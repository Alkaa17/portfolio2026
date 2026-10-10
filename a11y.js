// Accessibility fixes for markup that comes from Claude Design exports. fix-export.sh adds
// this to every page. Each fix is idempotent and re-runs after renders, since the home,
// about and playground pages are drawn by React after load.
(function () {
  function fix() {
    // Elements named with aria-label need a role that allows a name.
    var seats = document.getElementById('seats');
    if (seats && !seats.hasAttribute('role')) seats.setAttribute('role', 'img');
    document.querySelectorAll('div[aria-label]:not([role]),span[aria-label]:not([role])').forEach(function (el) {
      el.setAttribute('role', 'group');
    });

    // Frontier psych journey: buttons can't take role="listitem", so the bars become a labelled group.
    var psych = document.getElementById('psychViz');
    if (psych && psych.getAttribute('role') === 'list') {
      psych.setAttribute('role', 'group');
      psych.setAttribute('aria-label', 'Psych journey score for each booking step');
    }
    document.querySelectorAll('.pcol[role="listitem"]').forEach(function (b) { b.removeAttribute('role'); });

    // Frontier journey curve: role="img" hides its focusable points from screen readers.
    var curve = document.querySelector('#journeyViz svg[role="img"]');
    if (curve) curve.setAttribute('role', 'group');

    // Heading levels that skip a step.
    document.querySelectorAll('h4.heard,h4.changed,.stat>h4').forEach(function (h) { h.setAttribute('aria-level', '3'); });
    document.querySelectorAll('a.method>h3').forEach(function (h) { h.setAttribute('aria-level', '2'); });
    // Headings inside the recreated airline screens belong to the mock site, not this page's outline.
    document.querySelectorAll('h4.rd-title').forEach(function (h) { h.setAttribute('role', 'none'); });

    // Every page needs one h1 (Playground has none). Wait until the page has rendered its
    // headings inside <main>, so React pages that bring their own h1 don't get a second one.
    var main = document.querySelector('main');
    if (main && main.querySelector('h2') && !document.querySelector('h1')) {
      var h1 = document.createElement('h1');
      h1.className = 'a11y-sr';
      h1.textContent = document.title.split('|')[0].trim();
      main.prepend(h1);
    }

    // Scrollable landing-page preview on Ayurveda must be reachable by keyboard.
    var lp = document.getElementById('lpScroll');
    if (lp && !lp.hasAttribute('tabindex')) {
      lp.setAttribute('tabindex', '0');
      lp.setAttribute('role', 'region');
      lp.setAttribute('aria-label', 'Landing page preview, scrollable');
    }

    // Frontier mockups that scroll sideways on phones need a tab stop so keyboard users can scroll them.
    [['.fr-x', 'Original fare page, scrolls sideways'], ['.fr-tw', 'Fare table, scrolls sideways'],
     ['.ba-wrap', 'Before and after comparison, scrolls sideways']].forEach(function (pair) {
      var all = document.querySelectorAll(pair[0]);
      all.forEach(function (el, i) {
        var scrolls = el.scrollWidth > el.clientWidth + 1;
        if (scrolls && !el.hasAttribute('tabindex')) {
          el.setAttribute('tabindex', '0'); el.setAttribute('role', 'region');
          el.setAttribute('aria-label', all.length > 1 ? pair[1] + ' (' + (i + 1) + ' of ' + all.length + ')' : pair[1]);
        } else if (!scrolls && el.getAttribute('tabindex') === '0') {
          el.removeAttribute('tabindex'); el.removeAttribute('role'); el.removeAttribute('aria-label');
        }
      });
    });

    // NCCI details list: the link row must sit in a <dd>, not straight in the <div>.
    document.querySelectorAll('dl>div>a').forEach(function (a) {
      var dd = document.createElement('dd');
      a.replaceWith(dd);
      dd.appendChild(a);
    });

    // Sound-button tooltips repeat the button's own aria-label; hide them from screen readers.
    document.querySelectorAll('span[role="tooltip"]').forEach(function (t) {
      var btn = t.parentElement && t.parentElement.querySelector('button[aria-label]');
      if (btn) { t.removeAttribute('role'); t.setAttribute('aria-hidden', 'true'); }
    });
  }

  var queued = false;
  function queue() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; fix(); });
  }
  function start() {
    fix();
    addEventListener('resize', queue);
    new MutationObserver(queue).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
