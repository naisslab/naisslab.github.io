const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

const root = path.join(__dirname, '..');
const assets = ['assets/site.css', 'assets/site.js', 'assets/hero.js', 'data/research.js', 'data/people.js', 'data/publication.js', 'data/news.js'];
const versions = assets.map(asset => [asset, createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex').slice(0, 12)]);

// Keep every page and its data in sync when a returning visitor has cached an older schema.
for (const page of fs.readdirSync(root).filter(name => name.endsWith('.html'))) {
    const pagePath = path.join(root, page);
    const original = fs.readFileSync(pagePath, 'utf8');
    let html = original;
    for (const [asset, version] of versions) {
        const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        html = html.replace(new RegExp(`((?:href|src)=")${escapedAsset}(?:\\?v=[a-f0-9]+)?(")`, 'g'),
            `$1${asset}?v=${version}$2`);
    }
    if (html !== original) fs.writeFileSync(pagePath, html);
}
