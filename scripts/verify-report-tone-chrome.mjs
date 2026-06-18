import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const header = await readFile(
  new URL('../src/widgets/header/ui/Header.tsx', import.meta.url),
  'utf8'
);
const inquiry = await readFile(
  new URL('../src/features/inquiry/ui/FloatingInquiry.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'REPORT NAVIGATION',
  'bg-[#f6efe3]',
  'bg-[#8f3528]',
  'radial-gradient(circle at 1px 1px',
  "String(index + 1).padStart(2, '0')",
  '창업문의',
]) {
  assert.ok(header.includes(token), `Missing report-tone header token: ${token}`);
}

for (const token of [
  'FRANCHISE DESK',
  'bg-[#f6efe3]',
  'bg-[#8f3528]',
  'radial-gradient(circle at 1px 1px',
  'handleMobileOpen',
  'handleMobileCollapse',
  "document.getElementById('contact')",
  "document.getElementById('footer')",
  'href="tel:010-9923-9502"',
  "source: '하단 빠른 가맹문의'",
  'name="name"',
  'name="phone"',
  'name="region"',
]) {
  assert.ok(inquiry.includes(token), `Missing report-tone inquiry token: ${token}`);
}

for (const legacyToken of ['bg-stone-900', 'bg-[#26140e]/98', 'bg-[#26140e]/96']) {
  assert.ok(
    !header.includes(legacyToken),
    `Legacy dark header token must be removed: ${legacyToken}`
  );
  assert.ok(
    !inquiry.includes(legacyToken),
    `Legacy dark inquiry token must be removed: ${legacyToken}`
  );
}

console.log('Report-tone header and floating inquiry contract passed.');
