const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

async function buildImages() {
    const sourceDirectory = path.join(__dirname, '..', 'images', 'people');
    const outputDirectory = path.join(sourceDirectory, 'optimized');
    await fs.mkdir(outputDirectory, { recursive: true });
    const photos = (await fs.readdir(sourceDirectory))
        .filter(filename => /\.(jpe?g|png)$/i.test(filename)).sort();
    let originalBytes = 0;
    let optimizedBytes = 0;

    for (const filename of photos) {
        const source = path.join(sourceDirectory, filename);
        const output = path.join(outputDirectory, `${path.parse(filename).name}.webp`);
        const result = await sharp(source)
            .rotate()
            .resize(256, 256, { fit: 'cover', position: 'centre' })
            .webp({ quality: 82, effort: 6 })
            .toFile(output);
        originalBytes += (await fs.stat(source)).size;
        optimizedBytes += result.size;
    }

    console.log(`${photos.length} portraits: ${(originalBytes / 1000000).toFixed(2)} MB → ${(optimizedBytes / 1000).toFixed(0)} KB (${(100 * (1 - optimizedBytes / originalBytes)).toFixed(1)}% smaller).`);
}

buildImages().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
