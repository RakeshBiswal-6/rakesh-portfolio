# Rakesh Biswal — 3D Portfolio

A responsive personal portfolio featuring the supplied cyan/magenta particle-sphere hero artwork, pointer-responsive parallax, cinematic typography, project filters, scroll reveals and mobile navigation.

## Run locally

Because the site uses JavaScript modules and an import map, run it through a local web server rather than opening `index.html` directly.

### Option 1: VS Code
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

### Option 2: Python
From this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages
1. Create or open your GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for the Pages URL to appear in Settings → Pages.

The hero artwork is stored locally in `assets/particle-sphere.png`. Google Fonts load from Google Fonts when online; the rest of the page is plain HTML/CSS and JavaScript.

## Before publishing — important checks
- Confirm the internship dates and title in the Journey section.
- Replace the three project links with the exact repositories for those projects.
- Confirm all project descriptions and any performance metrics before publishing them.
- Confirm that the displayed email and social links are the ones you want public.
- The abstract particle-sphere artwork supplied for this portfolio is stored locally in `assets/particle-sphere.png`; no personal portrait is required.
- Add a resume PDF and a download link if desired.

## Personal details currently used
The education, skills, project names and contact links are based on the files supplied for this portfolio task. The website avoids publishing unverified accuracy/R² figures as headline claims.

## Notes
- `.vercel/` is intentionally not included. Keep local Vercel project metadata private.
- Respect `prefers-reduced-motion`; the 3D scene and animations are reduced when requested by the operating system.
