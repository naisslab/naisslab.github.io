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

const publicationsData = vm.runInContext('publicationsData', context);
const privacyImplicationsPapers = publicationsData.filter(
    publication => publication.title === 'Quantifying the Privacy Implications of High-Fidelity Synthetic Network Traffic'
);
assert.strictEqual(
    privacyImplicationsPapers.length,
    1,
    'Expected exactly one Quantifying the Privacy Implications publication'
);
assert.deepStrictEqual(
    {
        year: privacyImplicationsPapers[0].year,
        type: privacyImplicationsPapers[0].type,
        venue: privacyImplicationsPapers[0].venue
    },
    {
        year: 2026,
        type: 'Conference',
        venue: 'ACM IMC 2026'
    },
    'Expected Quantifying the Privacy Implications to be published at ACM IMC 2026'
);

const indexHtml = fs.readFileSync(path.join(repoRoot, 'index.html'), 'utf8');
const inlineScript = indexHtml.match(/<script>\s*([\s\S]*?)\s*<\/script>\s*<\/body>/);
assert(inlineScript, 'Expected to find the main inline script in index.html');

vm.runInContext(inlineScript[1], context, { filename: 'index.html inline script' });

const publicationsHtml = elements.get('publications-container').innerHTML;
const newsHtml = elements.get('news-container').innerHTML;

assert(
    newsHtml.startsWith(`
                        <article class="news-item">
                            <p class="news-date">Jul 2026</p>`),
    'Expected the GhostAccess acceptance to be the newest news item'
);
assert(
    newsHtml.includes('Our paper "GhostAccess: Attacking the GPU on the Multi-tenant Cloud via CPU LLC under Unified Memory" is accepted at IEEE/ACM MICRO 2026!'),
    'Expected news to announce the GhostAccess MICRO 2026 acceptance'
);
assert(
    newsHtml.includes('Congratulations to Zihao Dan on this first-authored work'),
    'Expected news to congratulate Zihao for first-authoring GhostAccess'
);
assert(
    newsHtml.includes('GPU workloads can be inferred through a CPU last-level cache side channel under unified memory'),
    'Expected news to summarize the GhostAccess attack'
);
assert(
    !newsHtml.includes('his first paper'),
    'Expected news not to describe GhostAccess as Zihao\'s first paper'
);

assert(
    publicationsHtml.includes('TabQueryBench: A Query-Centric Benchmark for Synthetic Tabular Data'),
    'Expected rendered publications to include TabQueryBench'
);
assert(
    publicationsHtml.indexOf('TabQueryBench: A Query-Centric Benchmark for Synthetic Tabular Data') <
        publicationsHtml.indexOf('TraceCodec: A Compiler-Backed Neural Codec for Stateful Multi-Flow Network Traffic Traces'),
    'Expected TabQueryBench to render before the other preprints'
);
assert(
    publicationsHtml.includes('href="https://arxiv.org/pdf/2607.03926"'),
    'Expected rendered publications to include the TabQueryBench arXiv PDF link'
);
assert.match(
    publicationsHtml,
    /<strong class="publication-author-lab-member" title="NAISS Lab member">Shinan Liu<\/strong>/,
    'Expected Shinan Liu to be highlighted as a NAISS Lab member'
);
assert.match(
    publicationsHtml,
    /<strong class="publication-author-lab-member" title="NAISS Lab member">Zihao Dan<\/strong>/,
    'Expected Zihao Dan to be highlighted as a NAISS Lab member'
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
assert(
    publicationsHtml.includes('GhostAccess: Attacking the GPU on the Multi-tenant Cloud via CPU LLC under Unified Memory'),
    'Expected rendered publications to include GhostAccess'
);
[
    'IEEE/ACM MICRO 2026',
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
