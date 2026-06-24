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
  'bg-[#efe5d4]',
  'bg-[#8f3528]',
  'radial-gradient(circle at 1px 1px',
  "String(index + 1).padStart(2, '0')",
  '창업문의',
]) {
  assert.ok(header.includes(token), `Missing report-tone header token: ${token}`);
}

for (const token of [
  'FRANCHISE DESK',
  'bg-[#fffaf2]/98',
  'bg-white/95',
  'border-[#eadfce]',
  'shadow-[0_-16px_42px_rgba(43,27,22,0.14)]',
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

for (const legacyInquiryToken of [
  'bg-[#f6efe3]/98',
  'border-[#cdbb9f]',
  'shadow-[0_-16px_42px_rgba(38,20,14,0.22)]',
  'shadow-[0_-20px_52px_rgba(38,20,14,0.28)]',
]) {
  assert.ok(
    !inquiry.includes(legacyInquiryToken),
    `Legacy beige inquiry token must be removed: ${legacyInquiryToken}`
  );
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
