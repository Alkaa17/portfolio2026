# Pink Whimsy — Alka Mahapatra Design System
Personal brand + portfolio system for **Alka Mahapatra**, product designer (Head of Design at Needle). "Pink Whimsy": candy-shop pinks, die-cut cat stickers, a bubbly script wordmark and warm, confident, playful copy. One product surface: the **portfolio website** (case studies, about, contact).

## Sources
- `uploads/` (copied into `assets/`): script logo PNG, 4 cat-mascot stickers + a fedora cat, magic-wand sticker (2 versions), original plush photo, moodboard slide ("Slide 16_9 - 6"), 4 inspiration screenshots (checker creative-studio site, pink Canva web template, layered-tab collage, pink boutique).
- Artifact link given: https://claude.ai/artifact/Uq193y2ZdPecnP3BsZmQ1R — **not readable** (client-rendered); nothing from it is reflected here.
- No codebase, Figma, or font files were provided. Everything is authored from the imagery above.

## Index
- `styles.css` — entry point (imports only) → `tokens/{fonts,colors,typography,spacing,effects,patterns}.css`
- `fonts/` — self-hosted Google Fonts (Pacifico, Fredoka, Figtree, DM Mono)
- `assets/` — `logo-script.png` (transparent), `logo-script-white-bg.png`, `stickers/` (cat-detective, cat-artist, cat-graduate, cat-coffee, magic-wand), `photos/` (cat-fedora, cat-original), `reference/` (moodboard + inspiration, reference only)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one card per folder
- `ui_kits/portfolio/` — click-through portfolio site
- `SKILL.md` — agent-skill entry

## Components
- core: **Button**, **IconButton**, **Badge**, **Tag**
- brand: **Sticker**, **Tape**, **SectionHeading**
- surfaces: **Card**, **ProjectCard**
- forms: **Input**, **Textarea**, **Select**, **Checkbox**, **Switch**
- navigation: **NavBar**, **Tabs** (pill + folder)
- feedback: **Dialog**, **Toast**, **Tooltip**

No source component library existed, so this is an authored standard set sized for a portfolio. Brand-specific additions: Sticker, Tape, SectionHeading, ProjectCard (the portfolio's core motifs).

## UI kits
- `ui_kits/portfolio/index.html` — Home, Work, Needle case study, About, Contact.

---
## CONTENT FUNDAMENTALS
- **Voice:** first person, warm, candid, a little cheeky. "I" for Alka, "you" for the reader. Confident about craft, never corporate.
- **Real sample (Needle brief):** "I could feel the heart behind Needle, but it needed clarity and focus." — plain storytelling, short sentences, emotional verbs (feel, loved, heart), ellipses allowed for voice ("…but the product itself was falling flat").
- **Casing:** UI labels, buttons, nav and headings are **lowercase** ("see my work", "let's chat ✦", "take a peek at *my projects*"). Proper nouns keep caps (Needle, Alka). Eyebrows/badges are UPPERCASE mono with wide tracking.
- **Script accents:** one to three words per heading get the Pacifico treatment — the emotional word ("heart", "meet you", "sweet").
- **Glyphs:** ✦ (sparkle, echoes the logo) and ♡ are the house punctuation. Emoji are avoided in UI; sparingly acceptable in social copy.
- **Length:** buttons ≤ 3 words; card summaries 1–2 sentences; case-study prose in short paragraphs.
- **Metaphors:** sweets, magic, stickers, sparkle — "a sprinkle of", "sweet", "design magic". Use lightly, one per section.

## VISUAL FOUNDATIONS
- **Color:** bubblegum `--pink-500 #FA4A7B` (sampled from the logo) is the brand. Deep raspberry `#B03355` for accent text; wand magenta `#D6085D` for hover/danger. Candy accents from the moodboard (maize, lemon, tangerine, matcha, olivine, mint, sky, sea) appear as section fills, tag tones and folder tabs — never more than 2 accents per section. Neutrals are warm: cream `#FFFCF5` paper, vanilla, butter; text is plum ink `#3B1D2A`, never pure black/grey.
- **Type:** Pacifico (script accents only), Fredoka (rounded display, 500–600), Figtree (body), DM Mono (eyebrows, metadata). Headlines tight (1.05) and lowercase; body 1.55.
- **Backgrounds:** flat color bands stacked vertically, separated by **scalloped edges**. Patterns via CSS: pink/cream checkerboard (hero), candy checker, gingham, dots. No gradients, no photos full-bleed except inside cards.
- **Imagery:** die-cut stickers with white outline + lilac drop shadow (Sandy the plush cat in role hats, the magic wand). Warm, saturated, toy-like, soft studio light. Photos sit inside rounded cards, never raw.
- **Corner radii:** everything soft — cards 24px, dialogs 36px, inputs/buttons pill, small chips 999px, checkboxes 7px.
- **Cards:** white w/ 2px pink-200 hairline (plain), or ink 2px border + 4px ink offset shadow (pop). Tinted variants blush/cream have no border. No left-border accents.
- **Shadows:** flat offset "pop" shadows (4px 4px 0) rather than blurry elevation; one soft float shadow for toasts/overlays; sticker drop-shadow filter.
- **Borders:** 2px everywhere; ink for emphasis, pink-200 for quiet.
- **Motion:** bouncy — `cubic-bezier(.34,1.56,.64,1)` 220ms. Hover: buttons lift 2px, stickers wiggle ±4° and scale 1.05, project cards lift 6px + tilt −0.6° and gain pop shadow. Press: translate(2px,2px) scale(.97) (button presses "into" its shadow). Fades use ease-soft 420ms.
- **Transparency/blur:** only the dialog scrim (plum 35% + 4px blur) and washi tape (slightly translucent).
- **Tilt:** decorative items (stickers, tape, pop cards) rotate −6°…6°. Forms and text never rotate.
- **Layout:** 1200px container, 760px narrow reading column, 24–32px gutters, 96px between sections. Sticky cream nav. Stickers break out of the grid and overlap section edges.

## ICONOGRAPHY
- No icon set was provided. **Substitute: Lucide** (CDN `lucide@0.453.0`), 2px stroke, rounded caps — matches the soft, rounded type. Used at 16–20px in pink-700 or inherit.
- Unicode ✦ and ♡ act as brand glyphs (sparkle mirrors the logo's stars). Use inline in copy and buttons.
- Illustrations = PNG stickers in `assets/stickers/`. Don't draw new ones; ask for more hats/poses.
- No emoji in UI.

## Logo
`assets/logo-script.png` — pink script "Alka Mahapatra" with sparkles. Use on white/cream, or turned white (CSS `filter:brightness(0) invert(1)`) on bubblegum/candy pink. Min height 32px. Never redraw or re-typeset it in Pacifico as a stand-in when the PNG is available.

## Font substitutions (flag)
Original font files weren't provided. Pacifico approximates the logo script; Fredoka approximates the rounded "alka mahapatra" display lockup on the moodboard; Figtree for body. Replace with licensed originals if they exist.
