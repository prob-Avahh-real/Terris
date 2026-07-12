# Terris

A classic Tetris game built as a single HTML page — no dependencies required.

## Features

- Classic Tetris gameplay with falling blocks
- Touch and keyboard controls
- Mobile-friendly responsive design
- Score tracking and level progression
- Ghost piece preview
- Next piece preview

## Tech Stack

- **Language:** JavaScript (ES6)
- **Markup:** HTML5
- **Styling:** CSS3 with CSS variables
- **Platform:** Any modern browser (iOS, Android, Desktop)

## Project Structure

```
index.html          — Single-page game (HTML + CSS + JS)
start-mobile.sh     — Mobile dev server script
scripts/validate.js — HTML/JS validation script
```

## Development

```bash
# Serve locally
npx serve .

# Validate
node scripts/validate.js

# Or open directly
open index.html
```
