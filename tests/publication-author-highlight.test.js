const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');

function createClassList() {
    const classes = new Set();
    return {
        add: (...names) => names.forEach(name => classes.add(name)),
        remove: (...names) => names.forEach(name => classes.delete(name)),
        toggle: (name, force) => {
            if (force === undefined) {
                if (classes.has(name)) {
                    classes.delete(name);
                    return false;
                }
                classes.add(name);
                return true;
            }

            if (force) classes.add(name);
            else classes.delete(name);
            return Boolean(force);
        },
        contains: name => classes.has(name)
    };
}

function createElement(id) {
    return {
        id,
        value: 'all',
        innerHTML: '',
        textContent: '',
        dataset: {},
        classList: createClassList(),
        children: [],
        appendChild(child) {
            this.children.push(child);
            return child;
        },
        addEventListener() {},
        querySelectorAll(selector) {
            if (selector === 'svg') {
                return [{ classList: createClassList() }, { classList: createClassList() }];
            }
            return [];
        },
        closest() {
            return null;
        },
        getAttribute() {
            return '';
        }
    };
}

const elements = new Map();
[
    'mobile-menu-button',
    'mobile-menu',
    'research-container',
    'people-container',
    'people-filter-controls',
    'publications-container',
    'news-container',
    'pub-year-filter',
    'pub-area-filter'
].forEach(id => elements.set(id, createElement(id)));

const context = {
    console,
    document: {
        documentElement: { scrollHeight: 1000 },
        addEventListener(event, callback) {
            if (event === 'DOMContentLoaded') callback();
        },
        createElement: tagName => createElement(tagName),
        getElementById: id => elements.get(id) || null,
        querySelectorAll() {
            return [];
        }
    },
    window: {
        innerHeight: 800,
        scrollY: 0,
        location: { hash: '' },
        addEventListener() {},
        setTimeout(callback) {
            callback();
        }
    }
};

vm.createContext(context);

[
    'data/research.js',
    'data/people.js',
    'data/publication.js',
    'data/news.js'
].forEach(file => {
    vm.runInContext(fs.readFileSync(path.join(repoRoot, file), 'utf8'), context, {
        filename: file
    });
});

const indexHtml = fs.readFileSync(path.join(repoRoot, 'index.html'), 'utf8');
const inlineScript = indexHtml.match(/<script>\s*([\s\S]*?)\s*<\/script>\s*<\/body>/);
assert(inlineScript, 'Expected to find the main inline script in index.html');

vm.runInContext(inlineScript[1], context, { filename: 'index.html inline script' });

const publicationsHtml = elements.get('publications-container').innerHTML;

assert.match(
    publicationsHtml,
    /<strong class="publication-author-lab-member" title="NAISS Lab member">Shinan Liu<\/strong>/,
    'Expected Shinan Liu to be highlighted as a NAISS Lab member'
);
assert.match(
    publicationsHtml,
    /<strong class="publication-author-lab-member" title="NAISS Lab member">Xinchen Zhang<\/strong>/,
    'Expected Xinchen Zhang to be highlighted as a NAISS Lab member'
);
assert.match(
    publicationsHtml,
    /<strong class="publication-author-lab-member" title="NAISS Lab member">Yining Wang\*<\/strong>/,
    'Expected Yining Wang to be highlighted as Doris Wang'
);
assert.doesNotMatch(
    publicationsHtml,
    /publication-author-lab-member[^>]*>Nick Feamster/,
    'Expected non-lab collaborators to remain unhighlighted'
);
[
    'ACM IMWUT/UbiComp 2026',
    'ACM SoCC 2026',
    'ACM CoNEXT 2026',
    'ACM CoNEXT 2025',
    'ACM VLDB 2026'
].forEach(venue => {
    assert(
        publicationsHtml.includes(venue),
        `Expected rendered publications to include ${venue}`
    );
});
