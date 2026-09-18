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
        listeners: {},
        classList: createClassList(),
        children: [],
        appendChild(child) {
            this.children.push(child);
            return child;
        },
        addEventListener(event, callback) {
            this.listeners[event] = callback;
        },
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

const spiPapers = publicationsData.filter(
    publication => publication.title === 'SPI: Query-Depth-Adaptive Indexing for Streaming RAG in Vector Databases'
);
assert.strictEqual(spiPapers.length, 1, 'Expected exactly one SPI workshop publication');
assert.deepStrictEqual(
    {
        year: spiPapers[0].year,
        type: spiPapers[0].type,
        authors: spiPapers[0].authors,
        venue: spiPapers[0].venue,
        pdf: spiPapers[0].links.pdf
    },
    {
        year: 2026,
        type: 'Workshop',
        authors: 'Dong Liu, Yanxuan Yu, Shinan Liu',
        venue: 'VLDB VecDB 2026',
        pdf: 'https://openreview.net/pdf?id=heBvuxO9vq'
    },
    'Expected SPI to include the supplied VecDB venue and PDF'
);
assert(
    spiPapers[0].area.includes('ml-for-systems'),
    'Expected SPI to appear under ML for Systems'
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
                            <p class="news-date">Sep 2026</p>`),
    'Expected the September announcements to appear first'
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
assert(
    publicationsHtml.includes('SPI: Query-Depth-Adaptive Indexing for Streaming RAG in Vector Databases'),
    'Expected rendered publications to include SPI'
);
assert(
    publicationsHtml.includes('VLDB VecDB 2026'),
    'Expected rendered publications to include the shortened SPI venue'
);
assert(
    publicationsHtml.includes('href="https://openreview.net/pdf?id=heBvuxO9vq"'),
    'Expected rendered publications to link to the SPI PDF'
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

assert.strictEqual((publicationsHtml.match(/<article /g) || []).length, publicationsData.length,
    'The homepage should retain the complete publication list');
assert.strictEqual((newsHtml.match(/<article /g) || []).length, vm.runInContext('newsData.length', context),
    'The homepage should retain the complete news list');
assert.strictEqual((elements.get('people-container').innerHTML.match(/<img /g) || []).length,
    vm.runInContext('peopleData.length + alumniData.length', context), 'The homepage should retain the complete team');

for (const area of vm.runInContext('researchData', context)) {
    assert(!area.featuredPublications, 'Selected work belongs to individual subtopics');
    for (const subtopic of area.subtopics) {
        assert(subtopic.title && subtopic.featuredPublications.length, 'Each subtopic needs a title and representative work');
        for (const featured of subtopic.featuredPublications) {
            const matches = publicationsData.filter(pub => pub.id === featured.id);
            assert.strictEqual(matches.length, 1, `Featured publication must resolve uniquely: ${featured.id}`);
            assert(matches[0].area.includes(area.id), `Featured publication must belong to ${area.id}`);
            const url = matches[0].links.website || matches[0].links.pdf || `#publication-${featured.id}`;
            assert(elements.get('research-container').innerHTML.includes(`href="${url}"`));
            if (url.startsWith('#')) {
                assert(publicationsHtml.includes(`id="publication-${featured.id}"`), 'Internal paper links need an existing target');
            }
        }
    }
    assert(elements.get('research-container').innerHTML.includes(`data-research-area="${area.id}"`));
    elements.get('pub-year-filter').value = '2017';
    const link = { dataset: { researchArea: area.id } };
    elements.get('research-container').listeners.click({
        target: { closest: selector => selector === '[data-research-area]' ? link : null }
    });
    assert.strictEqual(elements.get('pub-year-filter').value, 'all', 'Research links reset the year filter');
    assert.strictEqual(elements.get('pub-area-filter').value, area.id);
    const filteredHtml = elements.get('publications-container').innerHTML;
    const expected = publicationsData.filter(pub => pub.area.includes(area.id));
    assert.strictEqual((filteredHtml.match(/<article /g) || []).length, expected.length);
    expected.forEach(pub => assert(filteredHtml.includes(pub.title), `Missing related paper: ${pub.title}`));
}

// A selected paper without a public URL must remain reachable from any filter state.
elements.get('pub-year-filter').value = '2017';
elements.get('pub-area-filter').value = 'cps';
elements.get('research-container').listeners.click({
    target: { closest: selector => selector === '[data-publication-id]'
        ? { dataset: { publicationId: 'ghostaccess' } } : null }
});
assert.strictEqual(elements.get('pub-year-filter').value, 'all');
assert.strictEqual(elements.get('pub-area-filter').value, 'all');
assert(elements.get('publications-container').innerHTML.includes('id="publication-ghostaccess"'));
assert.strictEqual((elements.get('publications-container').innerHTML.match(/<article /g) || []).length, publicationsData.length);

for (const photo of vm.runInContext('[...peopleData, ...alumniData].map(person => person.photo)', context)) {
    assert(fs.existsSync(path.join(repoRoot, photo)), `Missing optimized portrait: ${photo}`);
}
assert(!indexHtml.includes('cdn.tailwindcss.com'));
assert(fs.existsSync(path.join(repoRoot, 'assets/site.css')));
console.log('Complete homepage lists, research links, publication content, and local assets passed.');
