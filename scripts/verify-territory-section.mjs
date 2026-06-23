import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx', import.meta.url),
  'utf8'
);

const requiredTokens = [
  'bg-[#21160f] py-20 text-[#f0dfc0]',
  '#35251b',
  '#c18442',
  '#c4ae91',
  '#a9824c',
  '#2b211a',
  '#71422f',
  '#c5a77b',
  'Impact',
  'PROTECTED SALES AREA',
  'lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)]',
  'gangnam-territory.png',
  'data-territory-coordinate-grid',
  'data-territory-boundary-linework',
  'data-territory-gold-frame',
  'rgba(193,132,66,0.08)',
  'rgba(193,132,66,0.16)',
];

for (const token of requiredTokens) {
  assert.ok(source.includes(token), `Missing territory design token: ${token}`);
}

assert.ok(
  !source.includes('backgroundWords'),
  'Legacy vertical marquee background should be removed'
);

assert.ok(
  !source.includes('bg-[#f3ede4]'),
  'Former light-paper section background must be removed'
);

assert.ok(
  !source.includes('rgba(255,250,242,0.78)'),
  'Former light-paper gradient must be removed'
);

console.log('Territory protection visual contract passed.');
