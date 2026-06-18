import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx', import.meta.url),
  'utf8'
);

const requiredTokens = [
  'bg-[#FFF2D8] py-20 text-[#170C08]',
  '#3B2115',
  '#A66732',
  '#C9A24D',
  '#FFF2D8',
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
  !source.includes('bg-[#170C08] py-20 text-[#FFF2D8]'),
  'Smoke black should no longer be the section base color'
);

console.log('Territory protection visual contract passed.');
