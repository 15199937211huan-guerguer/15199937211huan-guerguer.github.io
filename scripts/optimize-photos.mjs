import { readdir, mkdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const PHOTOS_DIR = fileURLToPath(new URL("../public/photos/", import.meta.url));
const THUMBS_DIR = join(PHOTOS_DIR, "thumbs");

const THUMB_WIDTH = 640;
const THUMB_QUALITY = 68;
const FULL_MAX = 1600;
const FULL_QUALITY = 82;

async function main() {
  await mkdir(THUMBS_DIR, { recursive: true });
  const entries = await readdir(PHOTOS_DIR);
  const images = entries.filter((f) => /\.(jpe?g|png)$/i.test(f));

  let beforeTotal = 0;
  let afterFull = 0;
  let afterThumb = 0;

  for (const file of images) {
    const src = join(PHOTOS_DIR, file);
    const name = basename(file, extname(file));
    const thumbOut = join(THUMBS_DIR, `${name}.jpg`);

    const before = (await stat(src)).size;
    beforeTotal += before;

    // thumbnail (small, slightly soft — used in the resting sphere)
    await sharp(src)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
      .toFile(thumbOut);
    afterThumb += (await stat(thumbOut)).size;

    // compressed full image (sharp on focus) — overwrite original as .jpg
    const buf = await sharp(src)
      .rotate()
      .resize({ width: FULL_MAX, height: FULL_MAX, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: FULL_QUALITY, mozjpeg: true })
      .toBuffer();

    const fullOut = join(PHOTOS_DIR, `${name}.jpg`);
    await sharp(buf).toFile(fullOut);
    afterFull += buf.length;

    // remove leftover .png original if we just wrote a .jpg twin
    if (/\.png$/i.test(file)) {
      const { unlink } = await import("node:fs/promises");
      await unlink(src).catch(() => {});
    }

    console.log(
      `${file}  ${(before / 1e6).toFixed(1)}MB -> full ${(buf.length / 1e3).toFixed(0)}KB, thumb ${((await stat(thumbOut)).size / 1e3).toFixed(0)}KB`
    );
  }

  const mb = (n) => (n / 1e6).toFixed(1);
  console.log(`\n${images.length} images`);
  console.log(`originals: ${mb(beforeTotal)}MB`);
  console.log(`full(compressed): ${mb(afterFull)}MB  +  thumbs: ${mb(afterThumb)}MB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
