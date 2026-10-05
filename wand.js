// Magic-wand effects shared by every page: click sound, click burst, star trail.
(function () {
  if (window.AMWand) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COLORS = ['#FA4A7B', '#F4AF30', '#FCA5B5', '#72C1E2', '#FFF184', '#D9B8D6'];
  // C-major pentatonic, C6 upward
  const P = [1046.5, 1174.7, 1318.5, 1568, 1760, 2093, 2349.3, 2637, 3136, 3520, 4186];
  const cfg = { sound: localStorage.getItem('am-wand-sound') !== 'off', style: 'shimmer', trail: true };
  let ac, out, started = false, lastT = 0, lx = -99, ly = -99, live = 0;

  function audio() {
    if (!ac) {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      out = ac.createGain(); out.gain.value = 0.9;
      out.connect(ac.destination);
      // Soft feedback echo gives the "sparkle hanging in the air" tail
      const d = ac.createDelay(1), fb = ac.createGain(), lp = ac.createBiquadFilter(), wet = ac.createGain();
      d.delayTime.value = 0.14; fb.gain.value = 0.42; lp.type = 'lowpass'; lp.frequency.value = 5200; wet.gain.value = 0.4;
      out.connect(d); d.connect(lp); lp.connect(fb); fb.connect(d); lp.connect(wet); wet.connect(ac.destination);
    }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  function tone(f, t, dur, vol, type, partials) {
    (partials || [[1, 1]]).forEach(([r, a]) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type || 'sine'; o.frequency.value = f * r;
      const d = dur / Math.sqrt(r);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol * a, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + d + 0.05);
    });
  }
  const rnd = (n) => Math.floor(Math.random() * n);
  const SOUNDS = {
    // quick rising sprinkle of glassy notes
    fairy() { const t = ac.currentTime, s = rnd(3);
      for (let i = 0; i < 6; i++) tone(P[s + i], t + i * 0.042, 0.8, 0.045, 'sine', [[1, 1], [2, 0.18]]); },
    // a single struck glass bell with a soft fifth
    chime() { const t = ac.currentTime, f = P[2 + rnd(4)], bell = [[1, 1], [2.76, 0.4], [5.4, 0.18], [8.93, 0.08]];
      tone(f, t, 1.8, 0.07, 'sine', bell); tone(f * 1.5, t + 0.09, 1.4, 0.03, 'sine', bell); },
    // a harp glissando up the scale
    harp() { const t = ac.currentTime;
      for (let i = 0; i < 9; i++) tone(P[i] / 2, t + i * 0.028, 1.1, 0.04, 'triangle', [[1, 1], [2, 0.12]]); },
    // an airy shimmer: filtered noise swell + twinkling highs
    shimmer() { const t = ac.currentTime, len = 0.7;
      const buf = ac.createBuffer(1, ac.sampleRate * len, ac.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
      const n = ac.createBufferSource(), bp = ac.createBiquadFilter(), g = ac.createGain();
      n.buffer = buf; bp.type = 'bandpass'; bp.Q.value = 9;
      bp.frequency.setValueAtTime(4500, t); bp.frequency.exponentialRampToValueAtTime(10000, t + len);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.12); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      n.connect(bp); bp.connect(g); g.connect(out); n.start(t);
      [P[7], P[9], P[10]].forEach((f, i) => tone(f, t + 0.06 + i * 0.07, 0.9, 0.022, 'sine')); }
  };
  function play(style) {
    try { audio(); (SOUNDS[style || cfg.style] || SOUNDS.fairy)(); } catch (e) {}
  }
  function star(x, y, size, dx, dy, dur) {
    if (live > 60) return;
    live++;
    const s = document.createElement('span');
    s.setAttribute('aria-hidden', 'true'); s.textContent = '✦';
    Object.assign(s.style, { position: 'fixed', left: x + 'px', top: y + 'px', font: `400 ${size}px/1 Fredoka, system-ui, sans-serif`,
      color: COLORS[rnd(COLORS.length)], pointerEvents: 'none', zIndex: 9999, textShadow: '0 0 6px rgba(255,255,255,.9)' });
    document.body.appendChild(s);
    const a = s.animate([
      { transform: 'translate(-50%,-50%) scale(1) rotate(0deg)', opacity: 1 },
      { transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.2) rotate(${rnd(180) - 90}deg)`, opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'forwards' });
    a.onfinish = () => { s.remove(); live--; };
  }
  function onMove(e) {
    if (!cfg.trail || reduced || e.pointerType !== 'mouse') return;
    const now = performance.now();
    if (now - lastT < 26 || Math.hypot(e.clientX - lx, e.clientY - ly) < 10) return;
    lastT = now; lx = e.clientX; ly = e.clientY;
    // offset to the wand's star tip (cursor hotspot is the tip already)
    star(e.clientX, e.clientY, 8 + rnd(9), rnd(24) - 12, 14 + rnd(24), 650 + rnd(350));
  }
  function onDown(e) {
    if (cfg.sound) play();
    if (reduced) return;
    for (let i = 0; i < 7; i++) {
      const ang = (i / 7) * Math.PI * 2 + Math.random() * 0.5, r = 26 + rnd(22);
      star(e.clientX, e.clientY, 10 + rnd(8), Math.cos(ang) * r, Math.sin(ang) * r, 600 + rnd(250));
    }
  }
  window.AMWand = {
    init() { if (started) return; started = true;
      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerdown', onDown); },
    set(o) { Object.assign(cfg, o); if ('sound' in o) localStorage.setItem('am-wand-sound', o.sound ? 'on' : 'off'); },
    get() { return { ...cfg }; },
    play
  };
})();
