// Floating wand-sound toggle for static pages (hidden on mobile, where sound is off).
(function () {
  if (window.__amSoundToggle) return; window.__amSoundToggle = true;
  const ON = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
  const OFF = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
  const css = document.createElement('style');
  css.textContent =
    '.am-snd{position:fixed;right:24px;bottom:24px;z-index:60;display:flex;align-items:center;gap:12px}' +
    '.am-snd-tip{background:var(--ink-900,#3B1D2A);color:var(--cream,#FFFCF5);font:500 13px/1.2 var(--font-display,sans-serif);padding:8px 12px;border-radius:12px;white-space:nowrap;pointer-events:none;opacity:0;transform:translateX(8px);transition:opacity 220ms ease,transform 220ms cubic-bezier(.34,1.56,.64,1)}' +
    '.am-snd:hover .am-snd-tip,.am-snd:focus-within .am-snd-tip{opacity:1;transform:none}' +
    '.am-snd button{width:52px;height:52px;border-radius:50%;border:0;padding:0;display:grid;place-items:center;background:var(--maize,#FFF184);color:#6B4A00;box-shadow:0 6px 16px rgba(176,120,0,.22),0 1px 3px rgba(59,29,42,.1);cursor:pointer;transition:background 220ms ease,transform 220ms cubic-bezier(.34,1.56,.64,1)}' +
    '.am-snd button:hover{background:#FFEA5C;transform:scale(1.06)}' +
    '@media (max-width:767px){.am-snd{display:none}}';
  document.head.appendChild(css);
  const mount = () => {
    const wrap = document.createElement('div'); wrap.className = 'am-snd';
    wrap.innerHTML = '<span class="am-snd-tip" role="tooltip"></span><button type="button"></button>';
    const tip = wrap.firstChild, btn = wrap.lastChild;
    let on = localStorage.getItem('am-wand-sound') !== 'off';
    const paint = () => {
      btn.innerHTML = on ? ON : OFF;
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.setAttribute('aria-label', on ? 'Mute wand sound' : 'Turn on wand sound');
      tip.textContent = on ? 'Wand sound is on · click to mute' : 'Wand sound is off · click to turn on';
    };
    btn.addEventListener('click', () => {
      on = !on;
      if (window.AMWand) window.AMWand.set({ sound: on }); else localStorage.setItem('am-wand-sound', on ? 'on' : 'off');
      paint();
    });
    paint(); document.body.appendChild(wrap);
  };
  document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);
})();
