import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/repeat-order-proof/ui/RepeatOrderProofSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'useReducedMotion',
  '/new-asset/background/startup-benefit-hanji.webp',
  'bg-[#f0e9df]',
  'bg-[#fffaf2]',
  'text-[#2b1b16]',
  'text-[#9b5b46]',
  'border-[#d8c8b5]',
  'text-[#596348]',
  'REPEAT ORDERS',
  '다시 선택된 주문',
  '3 STORE SAMPLE',
  'lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]',
  'md:grid-cols-3',
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
  'bg-[#181311]',
  'bg-[#211917]',
  'text-[#fff8eb]',
  'const backgroundWords',
  'clipPath',
  'bg-[#a66732] text-[#26140e]',
  'text-[8rem]',
  '51.3%',
  'REPEAT ORDER RATE',
  'repeatRate',
  '전체 주문 중 재주문 비율',
  '{card.repeatRate}%',
]) {
  assert.ok(
    !source.includes(legacyToken),
    `Legacy repeat-order token must be removed: ${legacyToken}`
  );
}

console.log('Repeat-order warm paper contract passed.');
