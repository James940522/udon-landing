import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/repeat-order-proof/ui/RepeatOrderProofSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'useReducedMotion',
  'data-repeat-order-black-gold',
  'bg-[#080504]',
  'text-[#f0dfc0]',
  'text-[#c9a24d]',
  'border-[#a9824c]/35',
  'bg-[#d3b98e]/95',
  'bg-[#15100d]/92',
  'text-[#7f8a63]',
  'REPEAT ORDERS',
  '다시 선택된 주문',
  '3 STORE SAMPLE',
  'lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]',
  'grid-cols-3',
  'md:grid-cols-3',
  'items-stretch',
  'grid grid-rows-[auto_minmax(0,1fr)_auto]',
  'aspect-[553/292]',
  'object-contain',
  'data-repeat-order-mobile-compact',
  'sm:hidden',
  'hidden sm:block',
  'hidden sm:grid',
  'sizes="(max-width: 768px) 33vw, 33vw"',
  'DATA REPORT',
  '재주문 {card.repeatOrders}건',
]) {
  assert.ok(source.includes(token), `Missing repeat-order dashboard token: ${token}`);
}

for (const asset of [
  '/new-asset/reorder/reorder-graph-01.webp',
  '/new-asset/reorder/reorder-graph-02.webp',
  '/new-asset/reorder/reorder-graph-03.webp',
]) {
  assert.ok(source.includes(asset), `Graph asset must remain: ${asset}`);
}

for (const legacyToken of [
  '/new-asset/background/startup-benefit-hanji.webp',
  'bg-[#f0e9df]',
  'text-[#2b1b16]',
  'border-[#d8c8b5]',
  'bg-[#181311]',
  'bg-[#211917]',
  'const backgroundWords',
  'clipPath',
  'bg-[#a66732] text-[#26140e]',
  'text-[8rem]',
  '51.3%',
  'REPEAT ORDER RATE',
  'repeatRate',
  '전체 주문 중 재주문 비율',
  '{card.repeatRate}%',
  'md:-translate-y-5',
  'index === 1 ? -25 : -5',
]) {
  assert.ok(
    !source.includes(legacyToken),
    `Legacy repeat-order token must be removed: ${legacyToken}`
  );
}

console.log('Repeat-order black gold contract passed.');
