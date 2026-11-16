Sources for the Go Getter 3 trainers (grade 5, with pictures).
packs/<n>-<name>.js — one vocabulary topic each (→ ../<name>.html)
engine/             — shared engine (from Spotlight 4) + pictures (Noto Emoji, Apache 2.0; own drawings in custom.json)
toc.tsv             — list for the main page (section, title, words, file)
Rebuild all:  sh build_all.sh
New picture names → python3 engine/icons.py path/to/icons.json  (npm pack @iconify-json/noto)
