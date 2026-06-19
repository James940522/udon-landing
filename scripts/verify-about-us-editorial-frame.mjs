import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const aboutUs = await readFile(
  new URL('../src/widgets/brand-intro/ui/BrandIntroSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  '01 / BRAND STORY',
  'TODAY UDON ARCHIVE',
  'absolute inset-x-0 top-0 z-20 h-1 bg-[#8f3528]',
  'bg-[#c9a24d]',
  'radial-gradient(circle at 1px 1px, rgba(143,53,40,0.16) 1px, transparent 0)',
  "backgroundSize: '22px 22px'",
  'absolute inset-x-0 bottom-0 z-20 h-px bg-[#c9a24d]/70',
  'bottom-[-4.5rem]',
  'h-24',
  'rounded-[50%]',
  'bg-[#dfc9a7]',
]) {
  assert.ok(aboutUs.includes(token), `Missing ABOUT US editorial-frame token: ${token}`);
}

console.log('ABOUT US editorial frame contract passed.');
