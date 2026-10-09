# NAISS Lab Website

The site is static HTML, CSS, and JavaScript. GitHub Pages serves the committed files directly; Node.js is only needed to rebuild assets locally.

## Local Preview

Run `python3 -m http.server 8000` from the repository root, then open <http://localhost:8000>.

## Update Content

- Edit the lists in `data/`. Keep news newest first. The homepage shows the complete team, published paper, and news lists. Preprints show the first three matching entries in data order, with a button to expand or collapse the rest. Changing publication filters resets this preview. Each research direction links to publications in that area and resets the year filter so all related results are available.
- Choose representative papers under each `subtopics` entry in `data/research.js` using `featuredPublications`. Each subtopic has a `title` and its own paper references. Each reference supplies an `id` from `data/publication.js` and a short label, such as `[SIGMETRICS'24] NetDiffusion`. Links appear beneath their subtopic when the card is expanded and open the publication's project website when available, otherwise its paper URL. Papers without either URL link to their entry in the complete publication list and clear active filters. Keep preprints labeled as preprints.
- Add original portraits to `images/people/`, run `npm run build:images`, and reference the generated `images/people/optimized/<name>.webp` in `data/people.js`. Portraits are cropped to centered 256×256 WebP images; originals remain available for future edits. Members without photos use local SVG initials in `images/people/placeholders/`.
- Edit custom styles in `styles/input.css`. Tailwind scans `index.html` and `data/*.js`, including the JavaScript templates. Run `npm run build:css` after changing content or styles. This also refreshes the CSS and data URL versions in `index.html`, so returning visitors receive the matching assets.
- Lab logos live in `images/brand/`: green and gold for the header, white for the dark footer. The symbol and large wordmark use SVG paths. The two-line tagline uses editable text with an embedded subset of Inter Medium (renamed NAISS Logo Sans), so no font installation or external font request is needed. The subset contains the tagline's current characters; regenerate it if new text needs additional characters. See `images/brand/Inter-LICENSE.txt` for the font license. Original transparent PNGs from the lab's talk and teaching assets are kept as references.

## Build and Check

Use Node.js 22.12 or newer. Install locked dependencies with `npm ci`, then run:

```sh
npm run build
npm test
```

Commit the generated `assets/site.css` and `images/people/optimized/` files with source changes. No Tailwind CDN script or browser-side CSS compilation is needed.
