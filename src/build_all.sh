#!/bin/sh
# Rebuild all pages: packs/<n>-<name>.js -> ../<name>.html, then the main page.
# New picture names: python3 engine/icons.py <path to Noto icons.json>  (npm pack @iconify-json/noto)
set -e
cd "$(dirname "$0")"
for f in packs/*.js; do n=$(basename "$f" .js); python3 engine/build.py "$f" "../${n#*-}.html"; done
python3 hub.py
