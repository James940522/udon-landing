import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-[#ead9aa]',
  'brightness-[0.92]',
  'saturate-[0.72]',
  'bg-[#f7eddb]/48',
  'from-[#fff8eb]/68',
  'via-[#e8d4b8]/56',
  'to-[#c99676]/48',
  'bg-[#9b5b46]/92',
  'text-[#2b1b16]',
  'text-[#8f3528]',
  'bg-[#e5c8b5]/80',
  'bg-[#fff8eb]/82',
  'border border-[#d8c8b5]/90 bg-[#fffaf2]/94',
  'absolute inset-x-0 top-0 h-1 bg-[#9b5b46]',
  'rounded-full border-4 border-[#fffaf2] bg-[#9b5b46]',
  'text-[#fffaf2]',
  'bg-[#fffaf2]/96',
  'bg-[#2b1b16]/96',
  'bg-[#ead9aa]/72',
]) {
  assert.ok(source.includes(token), `Missing warm editorial token: ${token}`);
}

for (const legacyToken of [
  'bg-stone-900',
  'bg-black/75',
  'from-black/50',
  'to-black/60',
  'bg-red-600/90',
  'text-red-400',
  'text-red-300',
  'text-amber-400',
  'text-amber-300',
  'text-gray-300',
  'from-stone-900/95',
  'bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20',
  'bg-[#f7eddb]/68',
  'from-[#fff8eb]/82',
  'via-[#e8d4b8]/72',
  'to-[#c99676]/62',
  'border-2 border-[#c9a24d]/38 bg-[#fff8eb]/88',
  'text-5xl font-light text-[#c9a24d]/24',
  'bg-[#ead9aa]/65',
]) {
  assert.ok(!source.includes(legacyToken), `Legacy campaign token must be removed: ${legacyToken}`);
}

for (const copy of [
  '경쟁없이 살아남는 법',
  '현시점 배달업계 최대의 블루오션',
  '&apos;볶음우동&apos;',
  '현재 자영업자 사장님들의 최대 고민',
  '오늘은 볶음우동</span>이 해답입니다',
  '&apos;더 잘하는 것&apos;이 아니라',
  '&apos;겹치지 않는 것&apos;',
  '&quot;',
  '수익을 지키면서 성장할 수 있는 새로운 기회',
]) {
  assert.ok(source.includes(copy), `Existing copy must remain unchanged: ${copy}`);
}

for (const structure of [
  'painPoints.map((point, index)',
  'benefits.map((benefit, index)',
  'grid grid-cols-1 md:grid-cols-3',
  '<br className="sm:hidden" />',
  'delay: 1.7',
]) {
  assert.ok(source.includes(structure), `Existing structure must remain unchanged: ${structure}`);
}

console.log('Blue ocean warm editorial contract passed.');
