# FloatJet Feedback Tools

## Overview
A collection of lightweight, experimental feedback tools designed for young people and adults to share thoughts in creative, low-pressure ways.

## Project Structure
- `index.html` — Main hub/landing page listing all tools
- `projector.html` — Project vision form tool (generates downloadable RTF reports)
- `drawback.html` — Minimalist drawing/sketching tool with color palette
- `gallery.html` — Gallery of drawings submitted via Drawback
- `TotesEmote.html` — Emoji feedback + drawing canvas sandbox
- `Projectourist.html` — Gallery of saved Projector entries
- `script.js` — Legacy JS for the Projector form (RTF generation + localStorage)
- `assets/style.css` — Global stylesheet
- `server.py` — Simple Python HTTP server for local development

## Tech Stack
- Pure static HTML/CSS/JavaScript (no build system)
- Tailwind CSS via CDN
- React 18 via CDN (used in drawback.html, gallery.html, TotesEmote.html)
- Babel standalone for JSX transpilation in-browser
- Data persistence via browser localStorage

## Running Locally
The app is served by a Python HTTP server:
```
python server.py
```
Runs on port 5000 at 0.0.0.0.

## Deployment
Configured as a static site deployment with `publicDir: "."`.

## Notes
- No backend or database — all data stored in browser localStorage
- The Drawback gallery and Projector gallery are local to each user's browser
- `assets/style.css` is the shared stylesheet (some HTML pages previously referenced it incorrectly as `style.css` — fixed)
