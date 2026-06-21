import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('keeps the review marquee below the phone previews on mobile', async () => {
  const source = await readFile(new URL('./ReviewsSection.tsx', import.meta.url), 'utf8');

  assert.match(
    source,
    /className="relative z-20 -mt-12 overflow-hidden pt-20 sm:-mt-56/,
  );
});

test('uses a warm paper surface with a dark phone stage', async () => {
  const source = await readFile(new URL('./ReviewsSection.tsx', import.meta.url), 'utf8');

  for (const token of [
    'bg-[#f0e9df] text-[#2b1b16]',
    'from-[#fffaf2]/92 via-[#f0e9df]/94 to-[#e5d5c1]/96',
    'text-[#9b5b46]',
    'text-[#2b1b16]',
    'text-[#8f3528]',
    'data-review-phone-stage',
    'bg-[#2b1b16]/96',
    'border-[#9b5b46]/45',
    'bg-[#9b5b46]',
    'border-[#d8c8b5]/90 bg-[#fffaf2]',
  ]) {
    assert.ok(source.includes(token), `Missing warm reviews token: ${token}`);
  }

  for (const legacyToken of [
    'bg-[#170c08] text-[#ead8bb]',
    'radial-gradient(circle at 50% 0%, rgba(161, 63, 20, 0.36)',
    'repeating-linear-gradient(90deg, rgba(255, 218, 140, 0.06)',
    'text-[#fff2d8]',
    'bg-[#3b2115]',
    'border-[#d4b45f]/80',
  ]) {
    assert.ok(!source.includes(legacyToken), `Legacy reviews token must be removed: ${legacyToken}`);
  }
});
