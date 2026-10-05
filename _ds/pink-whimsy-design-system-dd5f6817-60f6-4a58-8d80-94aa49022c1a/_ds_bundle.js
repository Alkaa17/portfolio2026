/* @ds-bundle: {"format":4,"namespace":"PinkWhimsyDesignSystem_dd5f68","components":[{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Sticker","sourcePath":"components/brand/Sticker.jsx"},{"name":"Tape","sourcePath":"components/brand/Tape.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProjectCard","sourcePath":"components/surfaces/ProjectCard.jsx"}],"sourceHashes":{"components/brand/SectionHeading.jsx":"fda1a96d0aca","components/brand/Sticker.jsx":"c0dc5fbaf0f9","components/brand/Tape.jsx":"c68646504e44","components/core/Badge.jsx":"7849fe20c7d9","components/core/Button.jsx":"9f10cd9f5291","components/core/IconButton.jsx":"44456ec27ea4","components/core/Tag.jsx":"f23f6b215d47","components/feedback/Dialog.jsx":"31c310eca520","components/feedback/Toast.jsx":"dbdcc8ae2fe7","components/feedback/Tooltip.jsx":"5b70362bc925","components/forms/Checkbox.jsx":"ca504150eb1c","components/forms/Input.jsx":"4130076d296b","components/forms/Select.jsx":"efd192779580","components/forms/Switch.jsx":"0d06dfdb659d","components/forms/Textarea.jsx":"81bc7942aef9","components/navigation/NavBar.jsx":"445464373cf9","components/navigation/Tabs.jsx":"441091619b23","components/surfaces/Card.jsx":"44175889bee1","components/surfaces/ProjectCard.jsx":"dbd559e29bbd","ui_kits/portfolio/About.jsx":"696161a11d48","ui_kits/portfolio/CaseStudy.jsx":"c5b47cc7a1a6","ui_kits/portfolio/Contact.jsx":"915ec4b87d32","ui_kits/portfolio/Home.jsx":"a29b20144574","ui_kits/portfolio/Shared.jsx":"8e239bf84a86","ui_kits/portfolio/Work.jsx":"8f00a0f6ab06"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PinkWhimsyDesignSystem_dd5f68 = window.PinkWhimsyDesignSystem_dd5f68 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  script,
  align = 'left',
  size = 'l',
  style
}) {
  const fs = size === 'xl' ? 64 : size === 'm' ? 32 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 10,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--pink-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `600 ${fs}px/1.05 var(--font-display)`,
      letterSpacing: '-.01em',
      color: 'var(--ink-900)',
      textWrap: 'balance'
    }
  }, title, script && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${Math.round(fs * 1.05)}px/1 var(--font-script)`,
      color: 'var(--brand)',
      whiteSpace: 'nowrap'
    }
  }, script))));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sticker.jsx
try { (() => {
function Sticker({
  src,
  alt = '',
  size = 160,
  tilt = 0,
  wiggle = true,
  outline = false,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: size,
      width: 'auto',
      display: 'block',
      filter: outline ? 'drop-shadow(0 0 0 #fff) drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff) var(--drop-sticker)' : 'var(--drop-sticker)',
      transform: `rotate(${h && wiggle ? tilt - 4 : tilt}deg) scale(${h && wiggle ? 1.05 : 1})`,
      transition: 'transform var(--dur-slow) var(--ease-bouncy)',
      userSelect: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/brand/Tape.jsx
try { (() => {
const T = {
  pink: 'rgba(252,165,181,.92)',
  lemon: 'rgba(255,241,132,.92)',
  sky: 'rgba(114,193,226,.85)',
  matcha: 'rgba(180,181,52,.8)',
  cream: 'rgba(245,233,207,.95)'
};
function Tape({
  tone = 'pink',
  tilt = -3,
  script = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '6px 18px 8px',
      background: T[tone] || T.pink,
      color: 'var(--pink-800)',
      transform: `rotate(${tilt}deg)`,
      font: script ? '400 17px/1.15 var(--font-script)' : '600 13px/1.1 var(--font-display)',
      textTransform: script ? 'none' : 'uppercase',
      letterSpacing: script ? 0 : '.1em',
      clipPath: 'polygon(2% 0,98% 4%,100% 50%,97% 100%,3% 96%,0 50%)',
      boxShadow: '0 2px 6px rgba(59,29,42,.08)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Tape.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  pink: ['var(--pink-100)', 'var(--pink-700)'],
  hot: ['var(--brand)', 'var(--white)'],
  lemon: ['var(--maize)', 'var(--ink-900)'],
  matcha: ['#E8EBC4', '#5B5C12'],
  sky: ['#D6ECF4', '#23607A'],
  ink: ['var(--ink-900)', 'var(--cream)']
};
function Badge({
  tone = 'pink',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.pink;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  s: {
    h: 36,
    px: 16,
    fs: 13
  },
  m: {
    h: 46,
    px: 24,
    fs: 15
  },
  l: {
    h: 56,
    px: 32,
    fs: 17
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--brand)',
    fg: 'var(--text-on-brand)',
    bd: 'var(--brand)',
    hbg: 'var(--pink-600)'
  },
  secondary: {
    bg: 'var(--white)',
    fg: 'var(--pink-700)',
    bd: 'var(--pink-700)',
    hbg: 'var(--pink-50)'
  },
  candy: {
    bg: 'var(--maize)',
    fg: 'var(--ink-900)',
    bd: 'var(--ink-900)',
    hbg: 'var(--lemon)',
    shadow: 'var(--shadow-pop)'
  },
  raspberry: {
    bg: 'var(--pink-700)',
    fg: 'var(--white)',
    bd: 'var(--pink-700)',
    hbg: 'var(--pink-800)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--pink-700)',
    bd: 'transparent',
    hbg: 'var(--pink-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'm',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary,
    s = SIZES[size] || SIZES.m;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : undefined,
      borderRadius: 'var(--radius-pill)',
      border: `var(--border-w) solid ${v.bd}`,
      background: h && !disabled ? v.hbg : v.bg,
      color: v.fg,
      font: `600 ${s.fs}px/1 var(--font-display)`,
      letterSpacing: '.01em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      boxShadow: v.shadow && !p ? v.shadow : 'none',
      transform: disabled ? 'none' : p ? 'translate(2px,2px) scale(.97)' : h ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-bouncy),background var(--dur-fast),box-shadow var(--dur-fast)',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: ['var(--brand)', 'var(--white)', 'var(--brand)'],
  soft: ['var(--pink-100)', 'var(--pink-700)', 'var(--pink-100)'],
  outline: ['var(--white)', 'var(--pink-700)', 'var(--pink-700)'],
  candy: ['var(--maize)', 'var(--ink-900)', 'var(--ink-900)']
};
function IconButton({
  variant = 'soft',
  size = 44,
  label,
  children,
  disabled = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [bg, fg, bd] = V[variant] || V.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-grid',
      placeItems: 'center',
      background: bg,
      color: fg,
      border: `var(--border-w) solid ${bd}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      padding: 0,
      boxShadow: variant === 'candy' ? 'var(--shadow-pop)' : 'none',
      transform: h && !disabled ? 'rotate(-8deg) scale(1.08)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-bouncy)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const T = {
  pink: ['var(--pink-100)', 'var(--pink-700)', 'var(--pink-300)'],
  lemon: ['#FFF7C2', '#6B4A00', 'var(--lemon)'],
  matcha: ['#EEF0CF', '#55570F', 'var(--matcha)'],
  sky: ['#E0F1F8', '#23607A', 'var(--sky)'],
  tangerine: ['#FDE6CC', '#8A4A07', 'var(--tangerine)'],
  mint: ['#E1F1EC', '#2E6457', 'var(--mint)']
};
function Tag({
  tone = 'pink',
  selected = false,
  onClick,
  children,
  style
}) {
  const [bg, fg, bd] = T[tone] || T.pink;
  const [h, setH] = React.useState(false);
  const inter = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    role: inter ? 'button' : undefined,
    tabIndex: inter ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? fg : bg,
      color: selected ? 'var(--white)' : fg,
      border: `var(--border-w) solid ${selected ? fg : h && inter ? bd : 'transparent'}`,
      font: '500 14px/1 var(--font-display)',
      cursor: inter ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  script,
  children,
  footer,
  width = 520,
  sticker
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(59,29,42,.35)',
      backdropFilter: 'blur(4px)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 1000,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--cream)',
      borderRadius: 'var(--radius-xl)',
      border: 'var(--border-w) solid var(--ink-900)',
      boxShadow: '6px 6px 0 var(--pink-500)',
      padding: 32
    }
  }, sticker && /*#__PURE__*/React.createElement("img", {
    src: sticker,
    alt: "",
    style: {
      position: 'absolute',
      top: -60,
      right: -24,
      height: 120,
      filter: 'var(--drop-sticker)',
      transform: 'rotate(8deg)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--pink-100)',
      color: 'var(--pink-700)',
      font: '600 16px/1 var(--font-display)',
      cursor: 'pointer'
    }
  }, "\xD7"), (title || script) && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      font: '600 28px/1.1 var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, title, " ", script && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 30px var(--font-script)',
      color: 'var(--brand)'
    }
  }, script)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.55 var(--font-body)',
      color: 'var(--text-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  pink: ['var(--pink-500)', '#fff'],
  lemon: ['var(--maize)', 'var(--ink-900)'],
  matcha: ['var(--olivine)', '#fff'],
  ink: ['var(--ink-900)', 'var(--cream)']
};
function Toast({
  tone = 'ink',
  icon = '✦',
  children,
  onClose,
  style
}) {
  const [bg, fg] = T[tone] || T.ink;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px 12px 18px',
      borderRadius: 999,
      background: bg,
      color: fg,
      font: '500 15px/1.2 var(--font-display)',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'rgba(255,255,255,.2)',
      color: 'inherit',
      width: 26,
      height: 26,
      borderRadius: '50%',
      cursor: 'pointer',
      font: '600 14px/1 var(--font-display)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 10px)'
  } : {
    bottom: 'calc(100% + 10px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: `translateX(-50%) ${o ? 'scale(1)' : 'scale(.85)'}`,
      opacity: o ? 1 : 0,
      pointerEvents: 'none',
      background: 'var(--ink-900)',
      color: 'var(--cream)',
      font: '500 13px/1.2 var(--font-display)',
      padding: '8px 12px',
      borderRadius: 12,
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-base) var(--ease-bouncy)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  const t = () => {
    if (disabled) return;
    setC(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: '400 15px var(--font-body)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      border: `var(--border-w) solid ${on ? 'var(--pink-500)' : 'var(--pink-300)'}`,
      background: on ? 'var(--pink-500)' : 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      font: '700 13px/1 var(--font-display)',
      transition: 'all var(--dur-base) var(--ease-bouncy)',
      transform: on ? 'scale(1.06)' : 'scale(1)'
    }
  }, on ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const label = (t, id) => t ? /*#__PURE__*/React.createElement("label", {
  htmlFor: id,
  style: {
    font: '600 13px/1 var(--font-display)',
    color: 'var(--ink-900)',
    letterSpacing: '.02em'
  }
}, t) : null;
const hintEl = (t, err) => t ? /*#__PURE__*/React.createElement("span", {
  style: {
    font: '400 13px/1.3 var(--font-body)',
    color: err ? 'var(--danger)' : 'var(--text-3)'
  }
}, t) : null;
function Input({
  label: l,
  hint,
  error,
  id,
  disabled,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const i = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label(l, i), /*#__PURE__*/React.createElement("input", _extends({
    id: i,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      height: 48,
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      border: `var(--border-w) solid ${error ? 'var(--danger)' : f ? 'var(--pink-500)' : 'var(--pink-200)'}`,
      background: disabled ? 'var(--vanilla)' : 'var(--white)',
      font: '400 16px var(--font-body)',
      color: 'var(--ink-900)',
      outline: 'none',
      boxShadow: f ? '0 0 0 4px var(--pink-100)' : 'none',
      transition: 'all var(--dur-fast)',
      opacity: disabled ? .6 : 1
    }
  })), hintEl(error || hint, !!error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const label = (t, id) => t ? /*#__PURE__*/React.createElement("label", {
  htmlFor: id,
  style: {
    font: '600 13px/1 var(--font-display)',
    color: 'var(--ink-900)',
    letterSpacing: '.02em'
  }
}, t) : null;
const hintEl = (t, err) => t ? /*#__PURE__*/React.createElement("span", {
  style: {
    font: '400 13px/1.3 var(--font-body)',
    color: err ? 'var(--danger)' : 'var(--text-3)'
  }
}, t) : null;
function Select({
  label: l,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const i = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label(l, i), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: i,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      appearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 44px 0 18px',
      borderRadius: 'var(--radius-pill)',
      border: `var(--border-w) solid ${f ? 'var(--pink-500)' : 'var(--pink-200)'}`,
      background: 'var(--white)',
      font: '400 16px var(--font-body)',
      color: 'var(--ink-900)',
      outline: 'none',
      boxShadow: f ? '0 0 0 4px var(--pink-100)' : 'none',
      cursor: 'pointer'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--pink-500)',
      font: '700 12px var(--font-display)'
    }
  }, "\u25BE")), hintEl(hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  const t = () => {
    if (disabled) return;
    setC(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: '400 15px var(--font-body)',
      color: 'var(--ink-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 46,
      height: 26,
      borderRadius: 999,
      background: on ? 'var(--pink-500)' : 'var(--pink-200)',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 2px 4px rgba(59,29,42,.2)',
      transition: 'left var(--dur-base) var(--ease-bouncy)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const label = (t, id) => t ? /*#__PURE__*/React.createElement("label", {
  htmlFor: id,
  style: {
    font: '600 13px/1 var(--font-display)',
    color: 'var(--ink-900)',
    letterSpacing: '.02em'
  }
}, t) : null;
const hintEl = (t, err) => t ? /*#__PURE__*/React.createElement("span", {
  style: {
    font: '400 13px/1.3 var(--font-body)',
    color: err ? 'var(--danger)' : 'var(--text-3)'
  }
}, t) : null;
function Textarea({
  label: l,
  hint,
  error,
  id,
  rows = 5,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const i = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label(l, i), /*#__PURE__*/React.createElement("textarea", _extends({
    id: i,
    rows: rows,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      padding: '14px 18px',
      borderRadius: 'var(--radius-m)',
      border: `var(--border-w) solid ${error ? 'var(--danger)' : f ? 'var(--pink-500)' : 'var(--pink-200)'}`,
      background: 'var(--white)',
      font: '400 16px/1.5 var(--font-body)',
      color: 'var(--ink-900)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: f ? '0 0 0 4px var(--pink-100)' : 'none',
      transition: 'all var(--dur-fast)'
    }
  })), hintEl(error || hint, !!error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logoSrc,
  brand = 'alka mahapatra',
  links = [],
  active,
  onNavigate,
  ctaLabel = "let's chat",
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '16px 32px',
      background: 'var(--cream)',
      borderBottom: 'var(--border-w) solid var(--pink-100)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brand,
    style: {
      height: 44
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 26px var(--font-script)',
      color: 'var(--brand)'
    }
  }, brand)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, links.map(l => {
    const k = l.key || l.label;
    const a = active === k;
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      onClick: () => onNavigate && onNavigate(k),
      style: {
        cursor: 'pointer',
        padding: '9px 16px',
        borderRadius: 999,
        font: '500 15px/1 var(--font-display)',
        color: a ? 'var(--pink-700)' : 'var(--ink-700)',
        background: a ? 'var(--pink-100)' : 'transparent',
        transition: 'background var(--dur-fast)'
      }
    }, l.label);
  }), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "s",
    onClick: onCta,
    style: {
      marginLeft: 10
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const FOLDER = ['var(--pink-300)', 'var(--maize)', 'var(--sky)', 'var(--matcha)', 'var(--tangerine)'];
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style
}) {
  if (variant === 'folder') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'flex-end',
      ...style
    }
  }, items.map((it, i) => {
    const k = it.key || it.label;
    const a = k === value;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onChange && onChange(k),
      style: {
        border: 'none',
        cursor: 'pointer',
        padding: a ? '14px 22px 12px' : '10px 20px',
        borderRadius: '14px 14px 0 0',
        background: FOLDER[i % FOLDER.length],
        color: 'var(--ink-900)',
        font: '600 13px/1 var(--font-display)',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        boxShadow: a ? '0 -3px 8px rgba(59,29,42,.12)' : 'none',
        transition: 'padding var(--dur-base) var(--ease-bouncy)'
      }
    }, it.label);
  }));
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--pink-100)',
      borderRadius: 999,
      ...style
    }
  }, items.map(it => {
    const k = it.key || it.label;
    const a = k === value;
    return /*#__PURE__*/React.createElement("button", {
      role: "tab",
      "aria-selected": a,
      key: k,
      onClick: () => onChange && onChange(k),
      style: {
        border: 'none',
        cursor: 'pointer',
        height: 38,
        padding: '0 18px',
        borderRadius: 999,
        background: a ? 'var(--white)' : 'transparent',
        color: a ? 'var(--pink-700)' : 'var(--ink-700)',
        font: '600 14px/1 var(--font-display)',
        boxShadow: a ? '0 2px 6px rgba(176,51,85,.18)' : 'none',
        transition: 'all var(--dur-base)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  plain: {
    bg: 'var(--surface-card)',
    bd: 'var(--border-1)',
    sh: 'none'
  },
  pop: {
    bg: 'var(--surface-card)',
    bd: 'var(--ink-900)',
    sh: 'var(--shadow-pop)'
  },
  blush: {
    bg: 'var(--pink-100)',
    bd: 'transparent',
    sh: 'none'
  },
  cream: {
    bg: 'var(--vanilla)',
    bd: 'transparent',
    sh: 'none'
  },
  float: {
    bg: 'var(--surface-card)',
    bd: 'transparent',
    sh: 'var(--shadow-float)'
  }
};
function Card({
  variant = 'plain',
  padding = 24,
  radius = 'l',
  tilt = 0,
  children,
  style,
  ...rest
}) {
  const v = V[variant] || V.plain;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: v.bg,
      border: `var(--border-w) solid ${v.bd}`,
      boxShadow: v.sh,
      borderRadius: `var(--radius-${radius})`,
      padding,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      position: 'relative',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  summary,
  image,
  sticker,
  bg = 'var(--pink-100)',
  pattern,
  tape,
  tapeTone = 'lemon',
  tags = [],
  year,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      transform: h ? 'translateY(-6px) rotate(-.6deg)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-bouncy)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-l)',
      background: pattern ? `var(--pattern-${pattern})` : bg,
      backgroundColor: bg,
      overflow: 'visible',
      display: 'grid',
      placeItems: 'center',
      border: 'var(--border-w) solid ' + (h ? 'var(--ink-900)' : 'transparent'),
      boxShadow: h ? 'var(--shadow-pop)' : 'none',
      transition: 'box-shadow var(--dur-fast),border-color var(--dur-fast)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'calc(var(--radius-l) - 2px)'
    }
  }), sticker && /*#__PURE__*/React.createElement("img", {
    src: sticker,
    alt: "",
    style: {
      height: '78%',
      position: 'relative',
      filter: 'var(--drop-sticker)',
      transform: h ? 'rotate(-5deg) scale(1.05)' : 'rotate(2deg)',
      transition: 'transform var(--dur-slow) var(--ease-bouncy)'
    }
  }), tape && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -12,
      left: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tape, {
    tone: tapeTone,
    tilt: -4
  }, tape))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 24px/1.15 var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, title), year && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px var(--font-mono)',
      color: 'var(--ink-500)',
      letterSpacing: '.08em'
    }
  }, year)), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--text-2)',
      textWrap: 'pretty'
    }
  }, summary), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--pink-700)',
      background: 'var(--pink-50)',
      padding: '6px 9px',
      borderRadius: 999
    }
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
function About({
  go
}) {
  const {
    SectionHeading,
    Sticker,
    Card,
    Tag,
    Button,
    Tape
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pattern-gingham)',
      backgroundColor: 'var(--cream)',
      padding: '80px 0 96px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "pop",
    tilt: -2,
    padding: 20,
    style: {
      background: 'var(--pink-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'photos/cat-fedora.png',
    style: {
      width: '100%',
      maxWidth: 340,
      display: 'block',
      borderRadius: 16,
      background: '#fff'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -14,
      right: 30
    }
  }, /*#__PURE__*/React.createElement(Tape, {
    tone: "lemon",
    tilt: 4
  }, "that's me (sort of)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'flex-start',
      background: 'var(--cream)',
      borderRadius: 'var(--radius-xl)',
      padding: 36
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "about",
    title: "hi, I'm",
    script: "Alka!",
    size: "xl"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 18px/1.6 var(--font-body)',
      color: 'var(--text-2)'
    }
  }, "Head of Design at Needle. Placeholder bio \u2014 add your story, background and what you're into here."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "sky"
  }, "ux research"), /*#__PURE__*/React.createElement(Tag, null, "product design"), /*#__PURE__*/React.createElement(Tag, {
    tone: "lemon"
  }, "brand"), /*#__PURE__*/React.createElement(Tag, {
    tone: "matcha"
  }, "design systems")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('contact')
  }, "let's chat \u2726"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "r\xE9sum\xE9")))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const PHASES = {
  research: {
    s: 'cat-detective',
    tone: 'sky',
    h: 'listening first',
    b: 'Placeholder — what we learned from Needle’s power users, and where the experience lost them.'
  },
  define: {
    s: 'cat-graduate',
    tone: 'lemon',
    h: 'naming the problem',
    b: 'Placeholder — the core insight that unblocked growth.'
  },
  design: {
    s: 'cat-artist',
    tone: 'pink',
    h: 'clarity + personality',
    b: 'Placeholder — the redesigned flows and refreshed brand.'
  },
  ship: {
    s: 'cat-coffee',
    tone: 'matcha',
    h: 'out in the world',
    b: 'Placeholder — launch and results.'
  }
};
function CaseStudy({
  go
}) {
  const {
    Tape,
    Badge,
    Tabs,
    Card,
    Sticker,
    Button
  } = DS;
  const [ph, setPh] = React.useState('research');
  const P = PHASES[ph];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pink-300)',
      padding: '64px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "s",
    onClick: () => go('work'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }),
    style: {
      color: 'var(--pink-800)',
      marginBottom: 20
    }
  }, "all work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, "head of design"), /*#__PURE__*/React.createElement(Badge, {
    tone: "lemon"
  }, "2025")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '600 72px/1 var(--font-display)',
      color: 'var(--ink-900)',
      letterSpacing: '-.01em'
    }
  }, "Needle ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 60px var(--font-script)',
      color: 'var(--white)'
    }
  }, "with heart")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 22px/1.35 var(--font-display)',
      color: 'var(--pink-800)',
      maxWidth: 560
    }
  }, "A place to share what you're listening to \u2014 with a brand that wasn't living up to how cool its users were.")), /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/cat-detective.png',
    size: 300,
    tilt: -3
  })))), /*#__PURE__*/React.createElement(Scallop, {
    from: "var(--pink-300)",
    to: "var(--cream)"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -18,
      left: 24,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Tape, {
    tone: "lemon",
    tilt: -4
  }, "the brief")), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    padding: 40
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 19px/1.6 var(--font-body)',
      color: 'var(--text-1)',
      textWrap: 'pretty'
    }
  }, "When I joined Needle as their Head of Design, it already had a small but passionate community. Needle had power users who loved the concept behind the app. It was a place to share what they were listening to\u2026but the product itself was falling flat. The company's growth has stalled and the cofounders brought me on to help them uncover what was blocking them from virality. From my first look, the app was cluttered, the experience was confusing, and the brand wasn't living up to how cool their users were. I could feel the heart behind Needle, but it needed ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--pink-700)'
    }
  }, "clarity and focus.")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream)',
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Tabs, {
    variant: "folder",
    items: Object.keys(PHASES).map(k => ({
      key: k,
      label: k
    })),
    value: ph,
    onChange: setPh
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: ph === 'research' ? 'var(--pink-300)' : ph === 'define' ? 'var(--maize)' : ph === 'design' ? 'var(--sky)' : 'var(--matcha)',
      borderRadius: '0 24px 24px 24px',
      padding: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap',
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/' + P.s + '.png',
    size: 220,
    tilt: -4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260,
      background: 'var(--cream)',
      borderRadius: 'var(--radius-l)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      font: '600 32px/1.1 var(--font-display)'
    }
  }, P.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.55 var(--font-body)',
      color: 'var(--text-2)'
    }
  }, P.b))))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
function Contact() {
  const {
    SectionHeading,
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    Card,
    Sticker,
    Dialog,
    Toast
  } = DS;
  const [o, setO] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const copy = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pattern-checker-candy)',
      backgroundColor: 'var(--pink-200)',
      padding: '80px 0 96px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -70,
      right: -40,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/magic-wand.png',
    size: 150,
    tilt: 14
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "pop",
    padding: 44,
    radius: "xl",
    style: {
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "contact",
    title: "let's make something",
    script: "sweet"
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setO(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "your name",
    placeholder: "e.g. Sandy",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "email",
    type: "email",
    placeholder: "you@studio.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "what's up?",
    options: ['a new project', 'a full-time role', 'just saying hi'],
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "tell me everything",
    placeholder: "the dream, the deadline\u2026",
    style: {
      gridColumn: '1/-1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      gridColumn: '1/-1',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "product"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "brand"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "research"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "ghost",
    onClick: copy,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "copy",
      size: 16
    })
  }, "copy email"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "candy",
    size: "l"
  }, "send it \u2726"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: o,
    onClose: () => setO(false),
    title: "message",
    script: "sent!",
    sticker: A + 'stickers/cat-coffee.png',
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setO(false)
    }, "yay")
  }, "Thanks for reaching out \u2014 I'll get back to you soon."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 28,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 900
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "pink"
  }, "email copied!"))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PROJECTS = [{
  key: 'needle',
  title: 'Needle',
  year: '2025',
  tape: 'head of design',
  tapeTone: 'lemon',
  sticker: A + 'stickers/cat-detective.png',
  pattern: 'checker',
  tags: ['product', 'brand', 'research'],
  summary: 'A music-sharing app with a passionate community and a product that was falling flat. Finding the heart, then the focus.'
}, {
  key: 'soon1',
  title: 'Case study two',
  year: 'soon',
  tape: 'coming soon',
  tapeTone: 'sky',
  sticker: A + 'stickers/cat-artist.png',
  bg: 'var(--maize)',
  pattern: 'dots',
  tags: ['placeholder'],
  summary: 'Placeholder — swap in a real project.'
}, {
  key: 'soon2',
  title: 'Case study three',
  year: 'soon',
  tape: 'coming soon',
  tapeTone: 'pink',
  sticker: A + 'stickers/cat-graduate.png',
  bg: '#D6ECF4',
  pattern: 'checker-sky',
  tags: ['placeholder'],
  summary: 'Placeholder — swap in a real project.'
}];
function Home({
  go
}) {
  const {
    Button,
    Sticker,
    SectionHeading,
    ProjectCard,
    Tag
  } = DS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pattern-checker)',
      backgroundColor: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      minHeight: 560,
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '4%',
      top: 60
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/cat-detective.png',
    size: 200,
    tilt: -8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '4%',
      top: 40
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/magic-wand.png',
    size: 170,
    tilt: 10
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '8%',
      bottom: 30
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/cat-artist.png',
    size: 190,
    tilt: 5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      background: 'rgba(255,252,245,.88)',
      padding: '36px 44px',
      borderRadius: 'var(--radius-xl)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'logo-script.png',
    alt: "Alka Mahapatra",
    style: {
      width: '100%',
      maxWidth: 520
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 26px/1.3 var(--font-display)',
      color: 'var(--ink-900)',
      textWrap: 'balance'
    }
  }, "product designer helping teams find the ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 30px var(--font-script)',
      color: 'var(--brand)'
    }
  }, "heart"), " of what they're building"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    onClick: () => go('work')
  }, "see my work"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "secondary",
    onClick: () => go('contact')
  }, "let's chat \u2726"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "selected work",
    title: "take a peek at",
    script: "my projects",
    align: "center",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 32
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.key
  }, p, {
    onClick: p.key === 'needle' ? () => go('needle') : undefined
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pink-100)'
    }
  }, /*#__PURE__*/React.createElement(Scallop, {
    from: "var(--cream)",
    to: "var(--pink-100)"
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: '72px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    src: A + 'stickers/cat-coffee.png',
    size: 260,
    tilt: -4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "hello there",
    title: "nice to",
    script: "meet you"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 18px/1.55 var(--font-body)',
      color: 'var(--text-2)',
      maxWidth: 520
    }
  }, "I'm Alka \u2014 Head of Design at Needle. I love untangling cluttered products and giving them back their personality."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "sky"
  }, "ux research"), /*#__PURE__*/React.createElement(Tag, null, "product design"), /*#__PURE__*/React.createElement(Tag, {
    tone: "lemon"
  }, "brand"), /*#__PURE__*/React.createElement(Tag, {
    tone: "matcha"
  }, "design systems")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('about'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "more about me")))));
}
Object.assign(window, {
  Home,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shared.jsx
try { (() => {
const DS = window.PinkWhimsyDesignSystem_dd5f68;
const A = '../../assets/';
function Icon({
  name,
  size = 20,
  stroke = 2,
  style
}) {
  const r = React.useRef(null);
  React.useEffect(() => {
    if (!r.current || !window.lucide) return;
    r.current.innerHTML = '<i data-lucide="' + name + '"></i>';
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      }
    });
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
function Scallop({
  from,
  to
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20,
      color: from,
      background: 'var(--scallop-bottom)',
      backgroundColor: to
    }
  });
}
function Wrap({
  children,
  style,
  narrow
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container)',
      margin: '0 auto',
      padding: '0 32px',
      ...style
    }
  }, children);
}
function Footer({
  go
}) {
  const {
    IconButton,
    Tooltip
  } = DS;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pink-300)'
    }
  }, /*#__PURE__*/React.createElement(Scallop, {
    from: "var(--cream)",
    to: "var(--pink-300)"
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: '48px 32px 36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'logo-script.png',
    style: {
      height: 48,
      filter: 'brightness(0) invert(1)',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-display)',
      color: 'var(--pink-800)'
    }
  }, "made with heart (and a little glitter) \u2726")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [['linkedin', 'LinkedIn'], ['dribbble', 'Dribbble'], ['instagram', 'Instagram'], ['mail', 'Email']].map(([n, l]) => /*#__PURE__*/React.createElement(Tooltip, {
    key: n,
    content: l
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: l,
    variant: "soft",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      font: '500 14px var(--font-display)'
    }
  }, ['work', 'about', 'contact'].map(k => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go(k),
    style: {
      cursor: 'pointer',
      color: 'var(--pink-800)'
    }
  }, k)))));
}
Object.assign(window, {
  DS,
  A,
  Icon,
  Scallop,
  Wrap,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Work({
  go
}) {
  const {
    SectionHeading,
    ProjectCard,
    Tabs
  } = DS;
  const [t, setT] = React.useState('all');
  const list = PROJECTS.filter(p => t === 'all' || p.tags.includes(t));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream)',
      padding: '72px 0 96px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "work \xB7 2022 \u2014 now",
    title: "all the",
    script: "good stuff",
    size: "xl"
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      key: 'all',
      label: 'all'
    }, {
      key: 'product',
      label: 'product'
    }, {
      key: 'brand',
      label: 'brand'
    }, {
      key: 'research',
      label: 'research'
    }],
    value: t,
    onChange: setT
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 32
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.key
  }, p, {
    onClick: p.key === 'needle' ? () => go('needle') : undefined
  })))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      font: '500 18px var(--font-display)',
      color: 'var(--ink-500)'
    }
  }, "nothing here yet \u2661")));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Tape = __ds_scope.Tape;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
