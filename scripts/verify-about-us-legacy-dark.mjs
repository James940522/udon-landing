import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const aboutUs = await readFile(
  new URL('../src/widgets/brand-intro/ui/BrandIntroSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-amber-900',
  'bg-black/60',
  'from-black/40',
  'to-black/50',
  'bg-[#fff8eb]/10',
  'text-gray-300',
  '/asset/menu/today-bokkeum-udon/menu-gallery/menu-gallery-09.jpg',
]) {
  assert.ok(aboutUs.includes(token), `Missing legacy dark ABOUT US token: ${token}`);
}

for (const redesignedToken of [
  'min-h-[clamp(48rem,92vh,64rem)]',
  'bg-[#ead9aa]',
  'TODAY UDON ARCHIVE',
  'bg-[#e7d6bb]/84',
  'bg-[#dfc9a7]',
]) {
  assert.ok(
    !aboutUs.includes(redesignedToken),
    `Redesigned ABOUT US token must be removed: ${redesignedToken}`
  );
}

console.log('Legacy dark ABOUT US contract passed.');
