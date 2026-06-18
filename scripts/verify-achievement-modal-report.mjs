import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const modal = await readFile(
  new URL('../src/features/achievement-modal/ui/AchievementModal.tsx', import.meta.url),
  'utf8'
);
const storeItem = await readFile(
  new URL('../src/features/achievement-modal/ui/StoreItem.tsx', import.meta.url),
  'utf8'
);
const baseModal = await readFile(
  new URL('../src/shared/ui/BaseModal.tsx', import.meta.url),
  'utf8'
);
const globalCss = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8');

for (const token of [
  'OPENING REPORT',
  '전국 오픈 리포트',
  '<ol',
  'sm:grid-cols-2',
  'bg-[#f6efe3]',
  'footerVariant="report"',
]) {
  assert.ok(modal.includes(token), `Missing opening report token: ${token}`);
}

for (const token of [
  'grid-cols-[2.5rem_minmax(0,1fr)_auto]',
  'store.store_code.padStart(2,',
  'border-b border-[#ddcfbb]',
]) {
  assert.ok(storeItem.includes(token), `Missing report row token: ${token}`);
}

assert.ok(
  baseModal.includes("footerVariant?: 'default' | 'report'"),
  'BaseModal must expose a report footer variant'
);
assert.ok(
  baseModal.includes('className={`fixed ${mobileLeft}'),
  'Promotion modals must stay fixed to the viewport while the page is scrolled'
);
assert.ok(
  !baseModal.includes('className={`absolute ${mobileLeft}'),
  'The legacy document-positioned modal shell must be removed'
);

for (const legacyToken of [
  'grid grid-cols-5',
  'from-[#52301f] via-[#3b2115] to-[#26140e]',
  'store-current-month-status__shine',
]) {
  assert.ok(!modal.includes(legacyToken), `Legacy modal token must be removed: ${legacyToken}`);
  assert.ok(!storeItem.includes(legacyToken), `Legacy store token must be removed: ${legacyToken}`);
}

for (const selector of [
  '.store-current-month-status',
  '.store-current-month-status__shine',
  '@keyframes store-current-month-glow',
  '@keyframes store-current-month-shine',
]) {
  assert.ok(!globalCss.includes(selector), `Unused animation CSS must be removed: ${selector}`);
}

console.log('Achievement modal opening report contract passed.');
