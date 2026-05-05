# Floop Feedback Tools

A collection of lightweight, experimental tools designed to help young people and adults share their thoughts in creative, low-pressure ways.

## Pages

| Page | File | Description |
|---|---|---|
| Hub | `index.html` | Main landing page linking to all tools and pages |
| Projector | `projector.html` | Six-question form that generates a downloadable RTF project summary |
| Drawback | `drawback.html` | HTML5 canvas drawing tool with a four-colour palette |
| Gallery | `gallery.html` | Grid view of drawings submitted via Drawback |
| About AAC | `aac.html` | Informational page on Augmentative & Alternative Communication with embedded videos and resource links |
| Suggest a Tool | `suggest-tool.html` | Eight-question form for submitting tool ideas — posts to Google Sheets |
| Site Wireframes | `wireframe.html` | Visual site map showing wireframe mockups of every page |

## Tech Stack

- Pure static HTML, CSS, and JavaScript — no build step
- [Tailwind CSS](https://tailwindcss.com) via CDN
- [React 18](https://react.dev) via CDN with Babel standalone for JSX (Drawback, Gallery)
- Browser `localStorage` for data persistence (drawings, Projector entries)
- Google Apps Script web app endpoint for Suggest a Tool submissions

## Running Locally

Served by a simple Python HTTP server:

```bash
python server.py
```

Runs at `http://0.0.0.0:5000`.

## Data & Integrations

- **Drawback gallery** — drawings are saved to `localStorage` under the key `sandbox-gallery`
- **Projectourist** — Projector form entries saved to `localStorage` under `projectourist_data`
- **Suggest a Tool** — form submissions are POSTed as JSON to a Google Apps Script endpoint, which appends a row to a connected Google Sheet. A localStorage backup is also kept locally.

## Planned

- Reflection Box — guided text prompt for deeper feedback
- Totes Emote standalone page
- Projectourist Gallery page for browsing saved Projector entries

## Deployment

Configured as a static site (`publicDir: "."`). No server-side processing required.
