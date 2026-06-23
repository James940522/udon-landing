import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-stone-900',
  'bg-black/75',
  'from-black/50',
  'to-black/60',
  'bg-red-600/90',
  'text-red-400',
  'text-amber-400',
  'text-amber-300',
  'text-gray-300',
  'from-stone-900/95',
  'border-amber-500/40',
  'from-amber-600/20',
]) {
  assert.ok(source.includes(token), `Missing legacy dark Blue Ocean token: ${token}`);
}

for (const redesignedToken of [
  'bg-[#ead9aa]',
  'bg-[#f7eddb]/48',
  'from-[#fff8eb]/68',
  'bg-[#9b5b46]/92',
  'bg-[#e5c8b5]/80',
  'bg-[#fffaf2]/94',
  'bg-[#2b1b16]/96',
]) {
  assert.ok(
    !source.includes(redesignedToken),
    `Warm editorial Blue Ocean token must be removed: ${redesignedToken}`
  );
}

for (const copy of [
  '경쟁없이 살아남는 법',
  '현시점 배달업계 최대의 블루오션',
  '&apos;볶음우동&apos;',
  '현재 자영업자 사장님들의 최대 고민',
  '오늘은 볶음우동</span>이 해답입니다',
  '&apos;더 잘하는 것&apos;이 아니라',
  '&apos;겹치지 않는 것&apos;',
  '수익을 지키면서 성장할 수 있는 새로운 기회',
]) {
  assert.ok(source.includes(copy), `Existing Blue Ocean copy must remain: ${copy}`);
}

for (const structure of [
  'painPoints.map((point, index)',
  'benefits.map((benefit, index)',
  'grid grid-cols-1 md:grid-cols-3',
  '<br className="sm:hidden" />',
  'delay: 1.7',
]) {
  assert.ok(source.includes(structure), `Existing Blue Ocean structure must remain: ${structure}`);
}

console.log('Legacy dark Blue Ocean contract passed.');
