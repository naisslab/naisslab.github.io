const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

const root = path.join(__dirname, '..');
const pagePath = path.join(root, 'index.html');
const original = fs.readFileSync(pagePath, 'utf8');
let html = original;

// Keep HTML and data in sync when a returning visitor has cached an older schema.
for (const asset of ['assets/site.css', 'data/research.js', 'data/people.js', 'data/publication.js', 'data/news.js']) {
    const version = createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex').slice(0, 12);
    const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(`((?:href|src)=")${escapedAsset}(?:\\?v=[a-f0-9]+)?(")`, 'g'),
        `$1${asset}?v=${version}$2`);
}

if (html !== original) fs.writeFileSync(pagePath, html);
