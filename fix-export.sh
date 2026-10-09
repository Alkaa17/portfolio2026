#!/bin/bash
# Run after exporting from Claude Design: moves the exported pages onto
# their clean deploy names and rewrites links to match. Safe to re-run.
set -euo pipefail
cd "$(dirname "$0")"

# exported name : file on disk : clean URL used in links (see vercel.json)
PAGES=(
  "Portfolio v4.dc.html:index.html:/"
  "Resume v3.dc.html:about.html:/aboutme"
  "Playground.dc.html:playground.html:/playground"
  "Poe Case Study.html:poe.html:/poe"
  "Frontier Case Study.html:frontier.html:/frontier"
  "Ayurveda Case Study.html:ayurveda.html:/ayurveda"
  "NCCI Case Study.html:ncci.html:/ncci"
)

for pair in "${PAGES[@]}"; do
  old="${pair%%:*}"
  rest="${pair#*:}"
  new="${rest%%:*}"
  if [ -e "$old" ]; then
    mv -f "$old" "$new"
    echo "renamed: $old -> $new"
  fi
done

# Rewrite links to the old names (and old .html names) to clean URLs in every page and script.
sed_args=(-e "s|Portfolio v4\.dc\.html#work|/#projects|g" -e "s|'index\.html#work'|'/#projects'|g")
for pair in "${PAGES[@]}"; do
  old="${pair%%:*}"
  rest="${pair#*:}"
  file="${rest%%:*}"
  url="${rest#*:}"
  old_re="${old//./\\.}"
  file_re="${file//./\\.}"
  sed_args+=(-e "s|'$old_re'|'$url'|g" -e "s|'$file_re'|'$url'|g")
done
sed -i '' "${sed_args[@]}" *.html *.js

# Home-page work section is addressed as /#projects.
sed -i '' -e 's/<section id="work" /<section id="projects" /' \
  -e "s/if (location.hash === '#work') this.landOnWork/if (location.hash === '#projects' || location.hash === '#work') this.landOnWork/" \
  -e "s/getElementById('work')/getElementById('projects')/g" \
  -e "s/scrollToId('work')/scrollToId('projects')/g" index.html
sed -i '' -e "s/getElementById('work')/getElementById('projects')/g" -e "s|HOME + '#work'|HOME + '#projects'|" site-chrome.js

# Home-page check in the nav: match / and /index.html instead of the old filename.
sed -i '' 's#var isHome = function () { return .*#var isHome = function () { return /(^|\\/)(index\\.html)?$/.test(location.pathname); };#' site-chrome.js

# Favicon: add the link tag after the viewport meta if a page doesn't have it.
for f in *.html; do
  grep -q 'rel="icon"' "$f" || sed -i '' '/<meta name="viewport"/a\
<link rel="icon" type="image/png" href="assets/favicon.png">\
<link rel="apple-touch-icon" href="assets/favicon.png">
' "$f"
done

# Home-page first-fold speed. Nothing paints until support.js pulls React from unpkg,
# so start that download (and the hero art + fonts) from the <head> instead of waiting.
if ! grep -q 'perf:preload' index.html; then
  DS=_ds/pink-whimsy-design-system-dd5f6817-60f6-4a58-8d80-94aa49022c1a/fonts
  sed -i '' '/<meta name="view-transition"/a\
<!-- perf:preload -->\
<link rel="preconnect" href="https://unpkg.com" crossorigin>\
<link rel="preload" as="script" href="https://unpkg.com/react@18.3.1/umd/react.production.min.js" integrity="sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z" crossorigin="anonymous">\
<link rel="preload" as="script" href="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" integrity="sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1" crossorigin="anonymous">\
<link rel="preload" as="image" href="./assets/alka-walk-1.png" fetchpriority="high">\
<link rel="preload" as="image" href="./assets/alka-walk-2.png">\
<link rel="preload" as="image" href="./assets/ds/logo-script.png">\
<link rel="preload" as="font" type="font/woff2" href="'"$DS"'/Fredoka-400.woff2" crossorigin>\
<link rel="preload" as="font" type="font/woff2" href="'"$DS"'/Figtree-400.woff2" crossorigin>\
<link rel="preload" as="font" type="font/woff2" href="'"$DS"'/Pacifico-400.woff2" crossorigin>
' index.html
fi
# .image-slots.state.json holds every page's images (~1.7MB); the home page only uses the
# testimonial avatars, so give it a trimmed copy instead of starving the hero on mobile.
python3 - <<'PY'
import json
slots = json.load(open('.image-slots.state.json'))
home = {k: v for k, v in slots.items() if k.startswith(('avatar-', 'research-cover-', 'cover-work-'))}
json.dump(home, open('.image-slots.home.json', 'w'), separators=(',', ':'))
PY
sed -i '' "s#return (m\&\&r\&\&r\[m.getAttribute('data-resource-id')\])||p;};#return (m\&\&r\&\&r[m.getAttribute('data-resource-id')])||(p==='.image-slots.state.json'?'.image-slots.home.json':p);};#" index.html

# Hero walk frames (the mobile LCP element) are served as WebP, about half the size of the PNGs.
sed -i '' 's/alka-walk-\([12]\)\.png/alka-walk-\1.webp/g' index.html

# Below-the-fold media shouldn't compete with the hero for bandwidth.
sed -i '' -e "s/playsInline: true, preload: 'auto'/playsInline: true, preload: 'metadata'/g" \
  -e 's|<img src="./assets/covers/thryve-pitch2win.png" alt=|<img src="./assets/covers/thryve-pitch2win.png" loading="lazy" decoding="async" alt=|' index.html

leftover=$(grep -lE "Portfolio v4|Resume v3|Playground\.dc|Case Study\.html|Portfolio%20" *.html *.js || true)
if [ -n "$leftover" ]; then
  echo "warning: old page names still referenced in:"
  echo "$leftover"
  exit 1
fi
echo "done: pages renamed and links updated"
