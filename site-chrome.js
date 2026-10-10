/* Global site chrome: <site-header active="work|resume|playground"> and <site-footer>. Single source for every page. */
(function () {
  if (customElements.get('site-header')) return;
  var HOME = '/';
  var LINKS = [{ key: 'work', label: 'work', href: HOME + '#projects' }, { key: 'resume', label: 'about me', href: '/aboutme' }, { key: 'playground', label: 'playground', href: '/playground' }];
  var EMAIL = 'alkamahapatra99@gmail.com';
  var CAL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ17eQf9wzg3K0u9CMDXwZlbNp9Bmsvc-OJ-10tZGEf5sOO54zEkWEoEdCYMKohAlRRW5dqphsPh?gv=true';
  var EASE = 'cubic-bezier(.34,1.56,.64,1)';
  var css = document.createElement('style');
  css.textContent =
    'site-header,site-footer{display:block}' +
    'site-header[shrink]{position:sticky;top:0;z-index:40}' +
    '.sc-nav{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:16px 32px;background:var(--cream,#FFFCF5);border-bottom:2px solid var(--pink-100,#FFE3EA);transition:padding 320ms cubic-bezier(.22,.61,.36,1)}' +
    '.sc-logo img{transition:height 320ms cubic-bezier(.22,.61,.36,1)}.sc-link,.sc-cta{transition:padding 320ms cubic-bezier(.22,.61,.36,1),height 320ms cubic-bezier(.22,.61,.36,1),background 140ms,transform 220ms ' + EASE + '}' +
    'site-header.sc-compact .sc-nav{padding:8px 32px}site-header.sc-compact .sc-logo img{height:30px}site-header.sc-compact .sc-link{padding:7px 14px}site-header.sc-compact .sc-cta{height:32px}' +
    'site-header.sc-mobile.sc-compact .sc-nav{padding:8px 16px}site-header.sc-mobile.sc-compact .sc-logo img{height:46px !important}' +
    '.sc-mobile .sc-nav{padding:12px 16px;position:relative}' +
    'site-header.sc-mobile .sc-logo img{height:56px !important;max-width:calc(100vw - 96px);object-fit:contain;width:auto !important}' +
    '.sc-burger{display:none;width:44px;height:44px;border-radius:999px;border:2px solid var(--pink-200,#FCC6D3);background:#fff;color:var(--pink-700,#B03355);align-items:center;justify-content:center;cursor:pointer;flex:none;transition:background 140ms,border-color 140ms}' +
    '.sc-burger svg{width:20px;height:20px}.sc-burger .x{display:none}' +
    '.sc-mobile .sc-burger{display:inline-flex}' +
    '.sc-mobile.sc-open .sc-burger{background:var(--pink-100,#FFE3EA);border-color:var(--pink-700,#B03355)}.sc-mobile.sc-open .sc-burger .b{display:none}.sc-mobile.sc-open .sc-burger .x{display:block}' +
    '.sc-mobile .sc-links{position:absolute;top:calc(100% + 2px);left:0;right:0;flex-direction:column;align-items:stretch;gap:4px;padding:12px 16px 18px;background:var(--cream,#FFFCF5);border-bottom:2px solid var(--pink-100,#FFE3EA);box-shadow:0 18px 30px -18px rgba(59,29,42,.35);opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity 220ms,transform 220ms ' + EASE + ',visibility 0s 220ms}' +
    '.sc-mobile.sc-open .sc-links{opacity:1;visibility:visible;transform:none;transition:opacity 220ms,transform 220ms ' + EASE + ',visibility 0s}' +
    '.sc-mobile .sc-link{padding:14px 16px;font-size:18px}' +
    'site-header.sc-mobile .sc-cta{display:inline-flex;margin:8px 0 0;height:48px;font-size:16px}' +
    'site-header.sc-mobile.sc-compact .sc-link{padding:14px 16px}site-header.sc-mobile.sc-compact .sc-cta{height:48px}' +
    '.sc-logo{display:flex;align-items:center}.sc-logo img{height:44px;width:auto;display:block;transition:height 320ms cubic-bezier(.22,.61,.36,1)}' +
    '.sc-links{display:flex;align-items:center;gap:6px}' +
    '.sc-link{padding:9px 16px;border-radius:999px;font:500 15px/1 var(--font-display,sans-serif);color:var(--ink-700,#5E3847);text-decoration:none;transition:background 140ms}' +
    '.sc-link:hover{color:var(--ink-700,#5E3847)}' +
    '.sc-link[aria-current="page"]{color:var(--pink-700,#B03355);background:var(--pink-100,#FFE3EA)}' +
    '.sc-cta{display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 16px;margin-left:10px;border-radius:999px;border:2px solid var(--brand,#FA4A7B);background:var(--brand,#FA4A7B);color:#fff;font:600 13px/1 var(--font-display,sans-serif);letter-spacing:.01em;cursor:pointer;transition:transform 220ms ' + EASE + ',background 140ms}' +
    '.sc-cta:hover{background:var(--pink-600,#D6085D);transform:translateY(-2px)}.sc-cta:active{transform:translate(2px,2px) scale(.97)}' +
    
    '.sc-scrim{position:fixed;inset:0;background:rgba(59,29,42,.35);backdrop-filter:blur(4px);display:grid;place-items:center;z-index:1000;padding:24px}' +
    '.sc-dialog{position:relative;width:100%;max-width:760px;background:var(--cream,#FFFCF5);border-radius:36px;border:2px solid var(--ink-900,#3B1D2A);box-shadow:6px 6px 0 var(--pink-500,#FA4A7B);padding:32px}' +
    '.sc-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;border:0;background:var(--pink-100,#FFE3EA);color:var(--pink-700,#B03355);font:600 16px/1 var(--font-display,sans-serif);cursor:pointer}' +
    '.sc-dialog h3{margin:0 0 12px;font:600 28px/1.1 var(--font-display,sans-serif);color:var(--ink-900,#3B1D2A)}' +
    '.sc-dialog h3 span{font:400 30px var(--font-script,cursive);color:var(--brand,#FA4A7B)}' +
    '.sc-dialog p{margin:0 0 16px;font:400 16px/1.55 var(--font-body,sans-serif);color:var(--ink-700,#5E3847)}' +
    '.sc-dialog iframe{display:block;width:100%;height:min(620px,calc(100vh - 220px));border:2px solid var(--pink-200,#FCC6D3);border-radius:16px;background:#fff}' +
    '.sc-foot{position:relative;background:var(--brand,#FA4A7B);color:#fff;padding:28px 24px 32px;text-align:center}' +
    'site-footer{display:block;width:100%}.sc-foot .sc-row{justify-content:center;margin-left:auto;margin-right:auto}.sc-foot p{max-width:none;margin-left:auto;margin-right:auto;text-align:center}' +
    '.sc-scallop{position:absolute;left:0;right:0;top:-20px;height:20px;color:var(--brand,#FA4A7B);background:radial-gradient(circle at 20px 0,transparent 19px,currentColor 20px) 0 0/40px 20px repeat-x}' +
    '.sc-row{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:16px}' +
    '.sc-li{display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 24px;border-radius:999px;border:2px solid var(--pink-700,#B03355);background:#fff;color:var(--pink-700,#B03355);font:600 15px/1 var(--font-display,sans-serif);text-decoration:none;transition:transform 220ms ' + EASE + ',background 140ms}' +
    '.sc-li:hover{background:var(--pink-50,#FFF4F7);color:var(--pink-700,#B03355);transform:translateY(-2px)}' +
    '.sc-mail{display:flex;align-items:center;gap:10px;max-width:100%;padding:10px 16px;border-radius:999px;border:2px solid var(--pink-200,#FCC6D3);background:#fff;color:var(--pink-700,#B03355);font:500 17px/1.2 var(--font-display,sans-serif);cursor:pointer;transition:transform 220ms ' + EASE + ',border-color 140ms}' +
    '.sc-mail:hover{transform:translateY(-2px);border-color:var(--pink-700,#B03355)}' +
    '.sc-mail .sc-addr{overflow-wrap:anywhere;text-align:left}' +
    '.sc-copy{flex:none;padding:4px 10px;border-radius:999px;background:var(--pink-100,#FFE3EA);color:var(--pink-700,#B03355);font:500 11px/1 var(--font-mono,monospace);letter-spacing:.1em;text-transform:uppercase;transition:background 140ms}' +
    '.sc-copy.on{background:var(--brand,#FA4A7B);color:#fff}' +
    '@media (max-width:767px){.sc-li{font-size:14px;height:38px;padding:0 20px;gap:6px}.sc-li svg{width:15px;height:15px}.sc-mail{font-size:13.5px;padding:8px 12px;gap:8px}.sc-mail .sc-addr{overflow-wrap:normal;word-break:keep-all}.sc-copy{font-size:10px;padding:4px 8px}.sc-tag{font-size:15px}}' +
    '.sc-tag{margin:0;font:600 18px/1.4 var(--font-display,sans-serif)}.sc-tag span{color:var(--maize,#FFF184)}';
  document.head.appendChild(css);

  var mq = matchMedia('(max-width: 767px)');
  var isHome = function () { return /(^|\/)(index\.html)?$/.test(location.pathname); };
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var go = function (url) { if (window.AMGo) window.AMGo(url); else location.href = url; };

  class SiteHeader extends HTMLElement {
    static get observedAttributes() { return ['active']; }
    set active(v) { this._active = v; this.paint(); }
    get active() { return this._active != null ? this._active : this.getAttribute('active'); }
    attributeChangedCallback() { this.paint(); }
    connectedCallback() {
      if (this._built) return; this._built = true;
      this.innerHTML =
        '<nav class="sc-nav" aria-label="Main"><a class="sc-logo" href="' + HOME + '" data-k="home"><img src="' + (window.__res ? __res('./assets/ds/logo-script.png') : './assets/ds/logo-script.png') + '" alt="alka mahapatra"></a>' +
        '<div class="sc-links">' + LINKS.map(function (l) { return '<a class="sc-link" data-k="' + l.key + '" href="' + l.href + '">' + l.label + '</a>'; }).join('') +
        '<button type="button" class="sc-cta">let\u2019s chat \u2726</button></div>' +
        '<button type="button" class="sc-burger" aria-label="Open menu" aria-expanded="false"><svg class="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg><svg class="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></nav>';
      this.addEventListener('click', this.onClick.bind(this));
      this.querySelector('.sc-cta').addEventListener('click', this.openChat.bind(this));
      var hdr = this, burger = this.querySelector('.sc-burger');
      this.setMenu = function (open) { hdr.classList.toggle('sc-open', open); burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
      burger.addEventListener('click', function () { hdr.setMenu(!hdr.classList.contains('sc-open')); });
      document.addEventListener('click', function (e) { if (!hdr.contains(e.target)) hdr.setMenu(false); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hdr.setMenu(false); });
      this._mq = this.paint.bind(this); mq.addEventListener('change', this._mq);
      this.paint();
      if (this.hasAttribute('shrink')) {
        var self = this;
        var setH = function () { document.documentElement.style.setProperty('--hdr-h', self.offsetHeight + 'px'); };
        this._onScroll = function () { var sc = document.getElementById('scroller'); var y = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, sc ? sc.scrollTop : 0); self.classList.toggle('sc-compact', y > 24); setH(); };
        document.addEventListener('scroll', this._onScroll, { capture: true, passive: true });
        window.addEventListener('scroll', this._onScroll, { passive: true });
        window.addEventListener('resize', setH);
        this.addEventListener('transitionend', setH);
        if (window.ResizeObserver) new ResizeObserver(setH).observe(this);
        requestAnimationFrame(this._onScroll);
        setH(); window.addEventListener('load', setH);
      }
    }
    disconnectedCallback() { if (this._mq) mq.removeEventListener('change', this._mq); this.closeChat(); }
    paint() {
      if (!this._built) return;
      var a = this.active, m = mq.matches;
      this.classList.toggle('sc-mobile', m); if (!m && this.setMenu) this.setMenu(false);
      this.querySelectorAll('.sc-link').forEach(function (el) {
        var k = el.dataset.k;
        el.style.display = '';
        if (k === a) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
      });
    }
    onClick(e) {
      var a = e.target.closest('a[data-k]'); if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var k = a.dataset.k; if (this.setMenu) this.setMenu(false);
      if (isHome() && (k === 'home' || k === 'work')) {
        e.preventDefault();
        var top = 0;
        if (k === 'work') { var w = document.getElementById('projects'); if (w) top = w.getBoundingClientRect().top + scrollY - this.offsetHeight + 2; }
        scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
        return;
      }
      e.preventDefault(); go(a.getAttribute('href'));
    }
    openChat() {
      if (this._dlg) return; if (this.setMenu) this.setMenu(false);
      var d = document.createElement('div');
      d.className = 'sc-scrim';
      d.innerHTML = '<div class="sc-dialog" role="dialog" aria-modal="true" aria-label="let\u2019s chat"><button class="sc-close" aria-label="close">\u00d7</button><h3>let\u2019s <span>chat</span></h3><p>Grab a time that works for you \u2661</p><iframe src="' + CAL + '" title="Book a chat with Alka"></iframe></div>';
      var self = this;
      d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('.sc-close')) self.closeChat(); });
      this._esc = function (e) { if (e.key === 'Escape') self.closeChat(); };
      document.addEventListener('keydown', this._esc);
      document.body.appendChild(d); this._dlg = d;
      d.querySelector('.sc-close').focus();
    }
    closeChat() {
      if (!this._dlg) return;
      this._dlg.remove(); this._dlg = null;
      document.removeEventListener('keydown', this._esc);
      var c = this.querySelector('.sc-cta'); if (c) c.focus();
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      if (this._built) return; this._built = true;
      this.innerHTML =
        '<footer class="sc-foot"><div class="sc-scallop" aria-hidden="true"></div><div class="sc-row">' +
        '<a class="sc-li" href="https://www.linkedin.com/in/alka-mahapatra" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>linkedin</a>' +
        '<button type="button" class="sc-mail" aria-label="Copy email address ' + EMAIL + '"><span class="sc-addr">' + EMAIL + '</span><span class="sc-copy" aria-live="polite">copy</span></button>' +
        '</div><p class="sc-tag">lovechild of Alka and Claude <span>\u2665</span></p></footer>';
      var chip = this.querySelector('.sc-copy'), t;
      this.querySelector('.sc-mail').addEventListener('click', function () {
        var done = function () { chip.textContent = 'copied \u2726'; chip.classList.add('on'); clearTimeout(t); t = setTimeout(function () { chip.textContent = 'copy'; chip.classList.remove('on'); }, 1800); };
        if (navigator.clipboard) navigator.clipboard.writeText(EMAIL).then(done, fallback); else fallback();
        function fallback() { var ta = document.createElement('textarea'); ta.value = EMAIL; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove(); done(); }
      });
    }
  }
  customElements.define('site-header', SiteHeader);
  customElements.define('site-footer', SiteFooter);
})();
