# NAISS Lab Website

The site is static HTML, CSS, and JavaScript. GitHub Pages serves the committed files directly; Node.js is only needed to rebuild assets locally.

## Local Preview

Run `python3 -m http.server 8000` from the repository root, then open <http://localhost:8000>.

## Update Content

- Edit the lists in `data/`. Keep news newest first. The homepage shows the complete team and published paper lists. The News section shows the five most recent headlines, with older entries available in a collapsible list; tapping a headline row reveals its description. Publications form one list: the first four matching preprints in data order, a button to expand or collapse the remaining preprints, then the published papers. Each entry's type badge marks it as a preprint or a paper. Changing publication filters resets this preview. The filter bar stays pinned below the header while visitors scroll the list. Each entry shows its PDF button at the top right, with code, data, and other links after the venue. The hero's ticker lists every subtopic title from `data/research.js`; its background network animation lives in `assets/hero.js`, pauses off screen, and stays still for visitors who prefer reduced motion. Each research direction links to publications in that area and resets the year filter so all related results are available.
- Choose representative papers under each `subtopics` entry in `data/research.js` using `featuredPublications`. Each subtopic has a `title` and its own paper references. Each reference supplies an `id` from `data/publication.js` and a short label, such as `[SIGMETRICS'24] NetDiffusion`; the bracketed venue renders as a small citation tag before the paper name. If the paper has an `award` in `data/publication.js`, a gold badge shows it after the link, so labels need no award emoji. Links appear beneath their subtopic when the card is expanded and open the publication's project website when available, otherwise its paper URL. Papers without either URL link to their entry in the complete publication list and clear active filters. Keep preprints labeled as preprints.
- Add original portraits to `images/people/`, run `npm run build:images`, and reference the generated `images/people/optimized/<name>.webp` in `data/people.js`. Portraits are cropped to centered 256×256 WebP images; originals remain available for future edits. Members without photos use local SVG initials in `images/people/placeholders/`.
- Edit custom styles in `styles/input.css`. Tailwind scans `index.html` and `data/*.js`, including the JavaScript templates. Run `npm run build:css` after changing content or styles. This also refreshes the CSS and data URL versions in `index.html`, so returning visitors receive the matching assets. Colors, type, and spacing follow the lab's brand: warm paper background, the logo's deep green as the accent, IBM Plex Serif headings, Inter body text, and IBM Plex Mono labels.
- Web fonts are self-hosted in `assets/fonts/`, so the page makes no third-party font requests. `inter-latin.woff2` is a Latin subset of Inter 4 (weights 400 to 700); the IBM Plex files are IBM's unmodified Latin-1 web files. See `assets/fonts/LICENSE.txt` for the license. If content needs characters outside Latin-1, regenerate the Inter subset with `pyftsubset`.
- Lab logos live in `images/brand/`: green and gold for light backgrounds, white for dark ones. The header and footer use `naiss-lab-wordmark.svg` and `naiss-lab-wordmark-light.svg`, cropped copies without the tagline, because the tagline is too small to read at header size and the page title already spells out the lab name. The full lockups (`naiss-lab-logo.svg`, `naiss-lab-logo-light.svg`) keep the tagline for larger uses. The symbol and large wordmark use SVG paths. The two-line tagline uses editable text with an embedded subset of Inter Medium (renamed NAISS Logo Sans), so no font installation or external font request is needed. The subset contains the tagline's current characters; regenerate it if new text needs additional characters. See `images/brand/Inter-LICENSE.txt` for the font license. Original transparent PNGs from the lab's talk and teaching assets are kept as references. `naiss-lab-mark.svg` holds the symbol alone and serves as the favicon; `apple-touch-icon.png` is a 180×180 rendering of it for phone home screens.
- Sponsor logos use transparent backgrounds so they sit directly on the page. Cut out any white box before adding a new logo, save a replacement logo under a new file name so browsers do not keep showing a cached copy, and give text-only wordmarks the `sponsor-wordmark` class so they match the other logos' visual size.

## Build and Check

Use Node.js 22.12 or newer. Install locked dependencies with `npm ci`, then run:

```sh
npm run build
npm test
```

Commit the generated `assets/site.css` and `images/people/optimized/` files with source changes. No Tailwind CDN script or browser-side CSS compilation is needed.
