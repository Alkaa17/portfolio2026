// <am-bookshelf> — interactive bookshelf, Pink Whimsy styling. Edit BOOKS below.
(function () {
  if (customElements.get('am-bookshelf')) return;

  const BOOKS = [
    {"title":"Napoleon's Glance","author":"William Duggan","quote":"Progress is cumulative, but never guaranteed. We draw from history to improve our chances of making history—but we can never know how the story ends until it is over.","spine":"#B03355","ink":"#FFFFFF","height":288,"width":46,"depth":26},
    {"title":"Emotional Design","author":"Don Norman","quote":"What happens when robots act as independent, sentient beings, with their own hopes, dreams, and aspirations?","spine":"#F08C21","ink":"#3B1D2A","height":252,"width":38,"depth":20},
    {"title":"Steal Like an Artist","author":"Austin Kleon","quote":"Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams, random conversations, architecture, bridges, street signs, trees, clouds, bodies of water, light and shadows. Select only things to steal from that speak directly to your soul. If you do this, your work (and theft) will be authentic. — Jim Jarmusch","spine":"#F4AF30","ink":"#3B1D2A","height":272,"width":34,"depth":22},
    {"title":"Buyology","author":"Martin Lindstrom","quote":"I discovered that consumers don't think their way to a purchase, they feel their way. Through my research, I proved that traditional user testing only captures the rationalized afterthoughts of a decision your subconscious mind already made.","spine":"#84B98B","ink":"#3B1D2A","height":300,"width":52,"depth":30},
    {"title":"Sapiens","author":"Yuval Noah Harari","quote":"We did not domesticate wheat. It domesticated us.","spine":"#72C1E2","ink":"#3B1D2A","height":240,"width":36,"depth":19},
    {"title":"The Design of Everyday Things","author":"Don Norman","quote":"Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible, serving us without drawing attention to itself. Bad design, on the other hand, screams out its inadequacies, making itself very noticeable.","spine":"#FA4A7B","ink":"#3B1D2A","height":280,"width":44,"depth":24}
  ];

  const CSS = `
  :host{display:block;font-family:var(--font-body,"Figtree",sans-serif);color:var(--ink-900,#3B1D2A)}
  *{box-sizing:border-box}
  .shelf-section{max-width:720px;margin:0 auto;padding:8px 0 16px}
  .shelf-hint{position:absolute;left:0;bottom:122px;width:150px;margin:0;display:flex;flex-direction:column;align-items:flex-end;gap:2px;pointer-events:none;color:var(--pink-700,#B03355);opacity:.6;transition:opacity .35s ease}
  .shelf-hint-text{font:400 16px/1.35 var(--font-script,"Pacifico",cursive);text-align:left;align-self:stretch}
  .shelf-fit{position:relative}
  .shelf-scale{position:relative;width:620px;transform-origin:0 0;margin:0 auto}
  .shelf-rail{display:flex;align-items:flex-end;justify-content:center;gap:2px;min-height:320px;perspective:1600px;perspective-origin:50% 62%}
  .deco{flex:0 0 auto;line-height:0;pointer-events:none;margin:0 18px}
  .book{position:relative;display:block;border:0;padding:0;margin:0;cursor:inherit;font-family:inherit;color:var(--ink);
    border-radius:4px 6px 6px 4px;transform-style:preserve-3d;transform:rotateY(-9deg);transform-origin:50% 100%;
    transition:transform .42s cubic-bezier(.34,1.56,.64,1),filter .42s ease;
    background:linear-gradient(90deg,rgba(59,29,42,.28) 0%,rgba(59,29,42,.06) 14%,rgba(255,255,255,.22) 36%,rgba(255,255,255,.08) 60%,rgba(59,29,42,.14) 84%,rgba(59,29,42,.34) 100%),var(--spine);
    box-shadow:inset 0 10px 0 -8px rgba(255,255,255,.4),inset 0 -10px 0 -8px rgba(59,29,42,.25),0 4px 6px rgba(59,29,42,.18)}
  .book::before{content:"";position:absolute;left:2px;right:2px;top:-2px;height:3px;background:rgba(255,255,255,.45);border-radius:2px 2px 0 0}
  .book-cover{position:absolute;top:0;right:0;height:100%;width:var(--depth);background:var(--spine);box-shadow:inset 0 0 0 999px rgba(59,29,42,.25);transform-origin:100% 50%;transform:rotateY(-90deg);border-radius:1px}
  .book-cover::after{content:"";position:absolute;inset:2px 3px 2px 0;background:repeating-linear-gradient(90deg,#FFFCF5 0 2px,#F5E9CF 2px 3px);opacity:.7}
  .book-spine{position:relative;writing-mode:vertical-rl;height:100%;width:100%;display:flex;align-items:center;justify-content:flex-start;gap:12px;padding:16px 0;
    font:600 11px/1 var(--font-display,"Fredoka",sans-serif);letter-spacing:.12em;text-transform:uppercase}
  .book-author{font:500 9px/1 var(--font-mono,monospace);opacity:.85;letter-spacing:.1em}
  .book:hover{transform:translateY(-8px) translateZ(18px) rotateY(-13deg)}
  .book:focus-visible{outline:3px solid var(--sky,#72C1E2);outline-offset:5px}
  .book[aria-expanded="true"]{transform:translateY(-18px) translateZ(46px) rotateX(-13deg) rotateY(-19deg);filter:drop-shadow(10px 18px 18px rgba(176,51,85,.25));z-index:5}
  .plank{height:16px;background:var(--plush,#E9D6C0);border:2px solid var(--ink-900,#3B1D2A);border-radius:8px;box-shadow:4px 4px 0 var(--ink-900,#3B1D2A);position:relative;z-index:6}
  .stem,.leaf{transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(.02);opacity:0}
  .head{transform-box:fill-box;transform-origin:50% 50%;transform:scale(.05);opacity:0}
  .is-blooming .stem,.is-blooming .leaf{animation:grow 1.5s var(--d,0s) cubic-bezier(.2,.9,.3,1) forwards}
  .is-blooming .head{animation:bloom 1.9s var(--d,0s) cubic-bezier(.2,.9,.3,1) forwards}
  .is-blooming .bouquet{animation:sway 7s 4.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
  @keyframes grow{to{transform:scaleY(1);opacity:1}}
  @keyframes bloom{0%{transform:scale(.05);opacity:0}65%{transform:scale(1.08);opacity:1}100%{transform:scale(1);opacity:1}}
  @keyframes sway{0%,100%{transform:rotate(-1.4deg)}50%{transform:rotate(1.4deg)}}
  .quote-slot{position:relative;min-height:200px;margin-top:44px}
  .quote-card{position:relative;margin:0;background:var(--white,#fff);border:2px solid var(--ink-900,#3B1D2A);border-radius:24px;box-shadow:4px 4px 0 var(--ink-900,#3B1D2A);
    padding:32px 56px 26px 36px;opacity:0;transform:translateY(10px);pointer-events:none;transition:opacity .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
  .quote-card.is-visible{opacity:1;transform:translateY(0);pointer-events:auto}
  .quote-card::before{content:"";position:absolute;top:-11px;left:var(--arrow-x,50%);width:18px;height:18px;margin-left:-9px;background:var(--white,#fff);
    border-top:2px solid var(--ink-900,#3B1D2A);border-left:2px solid var(--ink-900,#3B1D2A);transform:rotate(45deg);transition:left .3s ease;border-radius:4px 0 0 0}
  .quote-meta,.quote-text,.shelf-hint{text-wrap-style:pretty}
  .quote-text{font:500 clamp(19px,2.5vw,26px)/1.35 var(--font-display,"Fredoka",sans-serif);margin:0 0 20px;max-width:60ch;text-wrap:pretty}
  .quote-text::before{content:"\\201C";display:block;font:400 44px/.6 var(--font-script,cursive);color:var(--brand,#FA4A7B);margin:8px 0 6px}
  .quote-meta{display:flex;flex-wrap:wrap;align-items:center;gap:10px;font:500 12px/1.4 var(--font-mono,monospace);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-500,#8A6572)}
  .quote-dot{width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid var(--ink-900,#3B1D2A)}
  .quote-author{color:var(--pink-700,#B03355)}
  .quote-sep{opacity:.4}
  .quote-close{position:absolute;top:14px;right:14px;width:40px;height:40px;border:0;background:var(--pink-100,#FFE3EA);color:var(--pink-700,#B03355);cursor:inherit;
    font:400 22px/1 var(--font-display,sans-serif);border-radius:50%;display:grid;place-items:center;transition:transform .22s cubic-bezier(.34,1.56,.64,1)}
  .quote-close:hover{transform:rotate(-8deg) scale(1.08)}
  .quote-close:focus-visible{outline:3px solid var(--sky,#72C1E2);outline-offset:3px}
  @media (max-width:640px){.quote-card{padding:28px 52px 24px 22px}.quote-slot{min-height:230px;margin-top:32px}}
  @media (prefers-reduced-motion:reduce){
    .book,.quote-card,.quote-card::before,.shelf-hint{transition:none}
    .book:hover{transform:rotateY(-9deg)}
    .stem,.leaf,.head{transform:none;opacity:1}
    .is-blooming .stem,.is-blooming .leaf,.is-blooming .head,.is-blooming .bouquet{animation:none}}`;

  const HTML = `
  <section class="shelf-section">
    <div class="shelf-fit"><div class="shelf-scale">
    <p class="shelf-hint"><span class="shelf-hint-text">pick a book ✦ the line inside is why it stayed with me</span><svg width="44" height="36" viewBox="0 0 44 36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 3c4 16 16 26 34 28"/><path d="M33 25.5 39 31l-6.5 4"/></svg></p>
    <div class="shelf-rail">
      <div class="deco" aria-hidden="true">
        <svg width="118" height="96" viewBox="0 0 118 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(-7 16 74)"><rect x="2" y="52" width="30" height="36" rx="1.5" fill="#E8DCC8" stroke="#C9B896"/><rect x="5" y="55" width="24" height="21" fill="#9BB5C9"/><path d="M5 70l7-7 6 6 5-4 6 5v6H5z" fill="#B0C9A0"/><circle cx="23" cy="60" r="2.6" fill="#D4C041"/></g>
          <rect x="34" y="24" width="80" height="64" rx="11" fill="#DDB0C4" stroke="#C975A5"/><rect x="34" y="24" width="80" height="13" rx="11" fill="#D998A8"/><rect x="46" y="21" width="56" height="4" rx="2" fill="#B97499"/>
          <rect x="41" y="41" width="13" height="10" rx="2.5" fill="#E8DCC8" stroke="#C9B896"/><rect x="96" y="41" width="12" height="9" rx="2" fill="#1A1A1A"/>
          <circle cx="74" cy="60" r="23" fill="#DDB0C4" stroke="#C975A5"/><circle cx="74" cy="60" r="17" fill="#B97499"/><circle cx="74" cy="60" r="11" fill="#A87098"/><circle cx="74" cy="60" r="6" fill="#8E6177"/><circle cx="70.5" cy="56.5" r="2.2" fill="#E8DCC8" opacity=".85"/>
          <circle cx="98" cy="70" r="5" fill="#D998A8"/><rect x="30" y="34" width="5" height="8" rx="2" fill="#C9B896"/><rect x="113" y="34" width="5" height="8" rx="2" fill="#C9B896"/>
        </svg>
      </div>
      <div class="deco vase-deco" aria-hidden="true">
        <svg class="vase" width="132" height="230" viewBox="0 0 132 230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g class="bouquet">
            <path class="stem" style="--d:.15s" d="M66 176V96" stroke="#5C7A5E" stroke-width="3" stroke-linecap="round"/>
            <path class="stem" style="--d:.35s" d="M66 176C60 148 44 132 38 112" stroke="#5C7A5E" stroke-width="2.6" stroke-linecap="round"/>
            <path class="stem" style="--d:.55s" d="M66 176c6-28 22-42 28-62" stroke="#5C7A5E" stroke-width="2.6" stroke-linecap="round"/>
            <path class="stem" style="--d:.75s" d="M66 176c-3-24-14-38-16-58" stroke="#6B8A6C" stroke-width="2.2" stroke-linecap="round"/>
            <path class="stem" style="--d:.95s" d="M66 176c4-22 13-34 15-54" stroke="#6B8A6C" stroke-width="2.2" stroke-linecap="round"/>
            <path class="leaf" style="--d:1.1s" d="M62 150c-12-2-18-10-19-18 9 1 17 7 19 18z" fill="#C4E24A"/>
            <path class="leaf" style="--d:1.3s" d="M71 138c11-3 16-11 16-19-9 2-15 8-16 19z" fill="#C4E24A"/>
            <path class="leaf" style="--d:1.5s" d="M64 126c-9-3-13-10-13-17 7 2 12 8 13 17z" fill="#C4E24A"/>
            <g class="head" style="--d:1.7s"><circle cx="66" cy="86" r="9" fill="#C97FA8"/><circle cx="57" cy="93" r="8.5" fill="#C97FA8"/><circle cx="75" cy="93" r="8.5" fill="#C97FA8"/><circle cx="60" cy="103" r="8" fill="#A87098"/><circle cx="72" cy="103" r="8" fill="#A87098"/><circle cx="66" cy="96" r="6" fill="#F0E6E0"/></g>
            <g class="head" style="--d:2.05s"><circle cx="38" cy="102" r="8" fill="#D4C041"/><circle cx="30" cy="109" r="7.5" fill="#D4C041"/><circle cx="46" cy="109" r="7.5" fill="#D4C041"/><circle cx="34" cy="118" r="7" fill="#D9934D"/><circle cx="43" cy="118" r="7" fill="#D9934D"/><circle cx="38" cy="110" r="5.2" fill="#F0E6E0"/></g>
            <g class="head" style="--d:2.4s"><circle cx="94" cy="88" r="8" fill="#D998A8"/><circle cx="86" cy="95" r="7.5" fill="#D998A8"/><circle cx="102" cy="95" r="7.5" fill="#D998A8"/><circle cx="90" cy="104" r="7" fill="#C97FA8"/><circle cx="99" cy="104" r="7" fill="#C97FA8"/><circle cx="94" cy="96" r="5.2" fill="#F0E6E0"/></g>
            <g class="head" style="--d:2.75s"><circle cx="50" cy="66" r="6.5" fill="#5BA69A"/><circle cx="43" cy="72" r="6" fill="#5BA69A"/><circle cx="57" cy="72" r="6" fill="#5BA69A"/><circle cx="47" cy="80" r="5.5" fill="#7AACA9"/><circle cx="54" cy="80" r="5.5" fill="#7AACA9"/><circle cx="50" cy="73" r="4" fill="#F0E6E0"/></g>
            <g class="head" style="--d:3.1s"><circle cx="81" cy="68" r="6.5" fill="#8E8FC9"/><circle cx="74" cy="74" r="6" fill="#8E8FC9"/><circle cx="88" cy="74" r="6" fill="#8E8FC9"/><circle cx="78" cy="82" r="5.5" fill="#9B9DC4"/><circle cx="85" cy="82" r="5.5" fill="#9B9DC4"/><circle cx="81" cy="75" r="4" fill="#F0E6E0"/></g>
          </g>
          <path d="M48 172h36l-5 44a10 10 0 0 1-10 9H63a10 10 0 0 1-10-9l-5-44z" fill="#5BA69A"/><path d="M48 172h36l-1.6 14H49.6L48 172z" fill="#7AACA9"/>
          <path d="M60 178c-2 14-2 30 1 44" stroke="#E0D6CC" stroke-width="3" stroke-linecap="round" opacity=".8"/><rect x="45" y="168" width="42" height="7" rx="3.5" fill="#5BA69A"/><ellipse cx="66" cy="225" rx="21" ry="3" fill="#000" opacity=".08"/>
        </svg>
      </div>
    </div><div class="plank"></div></div></div>
    <div class="quote-slot">
      <figure class="quote-card" aria-live="polite">
        <button class="quote-close" type="button" aria-label="Close quote">×</button>
        <blockquote class="quote-text"></blockquote>
        <figcaption class="quote-meta"><span class="quote-dot"></span><span class="quote-author"></span><span class="quote-sep">/</span><span class="quote-title"></span></figcaption>
      </figure>
    </div>
  </section>`;

  class AMBookshelf extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${CSS}</style>${HTML}`;
      const $ = (s) => root.querySelector(s);
      const rail = $('.shelf-rail'), section = $('.shelf-section'), card = $('.quote-card'), fit = $('.shelf-fit'), scaleBox = $('.shelf-scale'), vase = $('.vase');
      const vaseDeco = $('.vase-deco');
      let openIndex = null;

      BOOKS.forEach((book, i) => {
        const btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'book'; btn.id = 'book-' + i;
        btn.setAttribute('aria-expanded', 'false');
        btn.style.setProperty('--spine', book.spine);
        btn.style.setProperty('--ink', book.ink);
        btn.style.setProperty('--depth', book.depth + 'px');
        btn.style.height = book.height + 'px'; btn.style.width = book.width + 'px';
        btn.innerHTML = '<span class="book-cover"></span><span class="book-spine"><span class="book-title"></span><span class="book-author"></span></span>';
        btn.querySelector('.book-title').textContent = book.title;
        btn.querySelector('.book-author').textContent = book.author;
        btn.addEventListener('click', () => (openIndex === i ? close() : open(i)));
        rail.insertBefore(btn, vaseDeco);
      });

      const positionArrow = (i) => {
        const b = root.getElementById('book-' + i); if (!b) return;
        const r = b.getBoundingClientRect(), c = card.getBoundingClientRect();
        const x = Math.max(28, Math.min(r.left + r.width / 2 - c.left, c.width - 28));
        card.style.setProperty('--arrow-x', x + 'px');
      };
      const open = (i) => {
        const book = BOOKS[i];
        rail.querySelectorAll('.book').forEach((b, n) => b.setAttribute('aria-expanded', n === i ? 'true' : 'false'));
        $('.quote-text').textContent = book.quote;
        $('.quote-author').textContent = book.author;
        $('.quote-title').textContent = book.title;
        card.style.setProperty('--accent', book.spine);
        card.classList.add('is-visible'); section.classList.add('is-open');
        const wasOpen = openIndex !== null;
        positionArrow(i); openIndex = i;
        requestAnimationFrame(() => {
          const c = card.getBoundingClientRect(), vh = window.innerHeight, over = c.bottom + 32 - vh;
          if (over > 0) window.scrollBy({ top: Math.min(over, Math.max(0, c.top - 120)), behavior: wasOpen ? 'auto' : 'smooth' });
        });
      };
      const close = () => {
        rail.querySelectorAll('.book').forEach((b) => b.setAttribute('aria-expanded', 'false'));
        card.classList.remove('is-visible'); openIndex = null;
      };
      $('.quote-close').addEventListener('click', () => { const back = openIndex; close(); if (back !== null) root.getElementById('book-' + back).focus(); });
      this._onKey = (e) => { if (e.key === 'Escape' && openIndex !== null) { const back = openIndex; close(); root.getElementById('book-' + back).focus(); } };
      document.addEventListener('keydown', this._onKey);

      const fitShelf = () => {
        const s = Math.min(1, fit.clientWidth / 620);
        scaleBox.style.transform = `scale(${s})`;
        scaleBox.style.marginLeft = s < 1 ? '0' : 'auto';
        fit.style.height = scaleBox.offsetHeight * s + 'px';
        if (openIndex !== null) positionArrow(openIndex);
      };
      this._ro = new ResizeObserver(fitShelf); this._ro.observe(fit); fitShelf();

      this._io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { vase.classList.add('is-blooming'); this._io.disconnect(); } });
      }, { threshold: 0.3 });
      this._io.observe(vase);
    }
    disconnectedCallback() {
      document.removeEventListener('keydown', this._onKey);
      this._ro && this._ro.disconnect(); this._io && this._io.disconnect();
    }
  }
  customElements.define('am-bookshelf', AMBookshelf);
})();
