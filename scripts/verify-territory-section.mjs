import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx', import.meta.url),
  'utf8'
);

const requiredTokens = [
  'bg-[#f3ede4] py-20 text-[#2b1b16]',
  '#493229',
  '#9b5b46',
  '#d8c8b5',
  '#fffaf2',
  'Impact',
  'PROTECTED SALES AREA',
  'lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)]',
  'gangnam-territory.png',
];

for (const token of requiredTokens) {
  assert.ok(source.includes(token), `Missing territory design token: ${token}`);
}

assert.ok(
  !source.includes('backgroundWords'),
  'Legacy vertical marquee background should be removed'
);

assert.ok(
  !source.includes('repeating-linear-gradient'),
  'Decorative texture lines should be removed from the section background'
);

assert.ok(!source.includes('PROTECTED\n'), 'Oversized background lettering should be removed');

console.log('Territory protection visual contract passed.');
