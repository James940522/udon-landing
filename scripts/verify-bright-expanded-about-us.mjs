import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const aboutUs = await readFile(
  new URL('../src/widgets/brand-intro/ui/BrandIntroSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'min-h-[clamp(48rem,92vh,64rem)]',
  'items-center',
  'bg-[#ead9aa]',
  'py-24',
  'md:py-32',
  'lg:py-40',
  'brightness-[0.92]',
  'saturate-[0.82]',
  'bg-[#f6efe3]/38',
  'from-[#fff8eb]/62',
  'via-[#d7c09b]/58',
  'to-[#6f3028]/52',
  'max-w-6xl',
  'bg-[#e7d6bb]/84',
  'text-[#26140e]',
  'text-[#725744]',
]) {
  assert.ok(aboutUs.includes(token), `Missing bright ABOUT US token: ${token}`);
}

for (const legacyToken of [
  'bg-amber-900',
  'bg-black/60',
  'from-black/40',
  'to-black/50',
  'bg-[#fff8eb]/10',
  'text-gray-300',
]) {
  assert.ok(!aboutUs.includes(legacyToken), `Legacy dark ABOUT US token must be removed: ${legacyToken}`);
}

console.log('Bright expanded ABOUT US contract passed.');
