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

leftover=$(grep -lE "Portfolio v4|Resume v3|Playground\.dc|Case Study\.html|Portfolio%20" *.html *.js || true)
if [ -n "$leftover" ]; then
  echo "warning: old page names still referenced in:"
  echo "$leftover"
  exit 1
fi
echo "done: pages renamed and links updated"
