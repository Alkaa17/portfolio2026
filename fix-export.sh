#!/bin/bash
# Run after exporting from Claude Design: moves the exported pages onto
# their clean deploy names and rewrites links to match. Safe to re-run.
set -euo pipefail
cd "$(dirname "$0")"

PAGES=(
  "Portfolio v4.dc.html:index.html"
  "Resume v3.dc.html:resume.html"
  "Playground.dc.html:playground.html"
  "Poe Case Study.html:poe.html"
  "Frontier Case Study.html:frontier.html"
  "Ayurveda Case Study.html:ayurveda.html"
  "NCCI Case Study.html:ncci.html"
)

for pair in "${PAGES[@]}"; do
  old="${pair%%:*}"
  new="${pair##*:}"
  if [ -e "$old" ]; then
    mv -f "$old" "$new"
    echo "renamed: $old -> $new"
  fi
done

# Rewrite links to the old names in every page and script.
sed_args=(-e "s/Portfolio v4\.dc\.html#work/index.html#work/g")
for pair in "${PAGES[@]}"; do
  old="${pair%%:*}"
  new="${pair##*:}"
  old_re="${old//./\\.}"
  sed_args+=(-e "s/'$old_re'/'$new'/g")
done
sed -i '' "${sed_args[@]}" *.html *.js

# Home-page check in the nav: match / and /index.html instead of the old filename.
sed -i '' 's#var isHome = function () { return .*#var isHome = function () { return /(^|\\/)(index\\.html)?$/.test(location.pathname); };#' site-chrome.js

leftover=$(grep -lE "Portfolio v4|Resume v3|Playground\.dc|Case Study\.html|Portfolio%20" *.html *.js || true)
if [ -n "$leftover" ]; then
  echo "warning: old page names still referenced in:"
  echo "$leftover"
  exit 1
fi
echo "done: pages renamed and links updated"
