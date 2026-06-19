import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const aboutUs = await readFile(
  new URL('../src/widgets/brand-intro/ui/BrandIntroSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'brightness-[0.92]',
  'bg-[#f6efe3]/38',
  'from-[#fff8eb]/62',
  'via-[#d7c09b]/58',
  'to-[#6f3028]/52',
  'bg-[#e7d6bb]/84',
  'hover:bg-[#ead9aa]/92',
  'shadow-[0_20px_50px_rgba(59,33,21,0.22)]',
  'bg-[#dfc9a7]',
]) {
  assert.ok(aboutUs.includes(token), `Missing ABOUT US muted-tone token: ${token}`);
}

for (const legacyToken of [
  'brightness-[1.08]',
  'bg-[#f6efe3]/54',
  'from-[#fff8eb]/80',
  'via-[#ead9aa]/66',
  'to-[#8f3528]/42',
  'bg-[#fff8eb]/82',
  'hover:bg-[#fffaf1]/92',
  'shadow-[0_20px_50px_rgba(59,33,21,0.16)]',
]) {
  assert.ok(!aboutUs.includes(legacyToken), `Bright ABOUT US token must be reduced: ${legacyToken}`);
}

console.log('ABOUT US muted tone contract passed.');
