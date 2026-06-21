import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/contact-form/ui/ContactFormSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-[#f0e9df] py-16 text-[#2b1b16]',
  'from-[#fffaf2]/94 via-[#f0e9df]/96 to-[#d8c8b5]/92',
  'from-transparent via-transparent to-[#170c08]/38',
  'data-contact-brand-panel',
  'bg-[#2b1b16]/96',
  'absolute inset-x-0 top-0 h-1 bg-[#9b5b46]',
  'bg-[#9b5b46] px-4 py-2',
  'text-[#fffaf2]',
  'text-[#d9ad55]',
  'bg-[#fffaf2] px-5 py-3',
  'data-contact-form-card',
  'border-[#d8c8b5]/90 bg-[#fffaf2]/96',
  'border-[#d8c8b5] bg-[#fffaf2]',
  'border-[#d8c8b5]/90 bg-[#eadfce]/82',
  'data-contact-section-index',
  'FRANCHISE INQUIRY · 01',
  'data-contact-editorial-frame',
  'data-contact-vertical-label',
  'START YOUR STORE',
  'data-contact-panel-connector',
  'data-contact-response-stamp',
  '24H',
  'RESPONSE',
  'data-contact-form-label',
  'APPLICATION FORM',
  'hidden md:block',
  'lg:flex',
  'sm:absolute sm:right-5 sm:top-5',
  'pointer-events-none',
  'aria-hidden="true"',
]) {
  assert.ok(source.includes(token), `Missing warm contact token: ${token}`);
}

for (const legacyToken of [
  'bg-[#170c08] py-16 text-[#fff2d8]',
  'linear-gradient(135deg, rgba(255, 229, 172, 0.08)',
  'repeating-linear-gradient(135deg, rgba(255, 222, 151, 0.16)',
  'from-[#fff2d8]/94 via-[#f4dfb4]/92 to-[#e3bf78]/88',
  'border border-[#a66732] bg-[#fff8eb]',
  'border-[#a66732]/70 bg-[#f6e6bc]',
]) {
  assert.ok(!source.includes(legacyToken), `Legacy contact token must be removed: ${legacyToken}`);
}

for (const contract of [
  "fetch('/api/leads'",
  'sms:010-9923-9502',
  "name: ''",
  "phone: ''",
  "email: ''",
  "storeType: ''",
  "region: ''",
  "hasStore: ''",
  "message: ''",
  "isSubmitting ? '전송 중...' : '창업 문의 신청하기'",
  'privacyAgree: true',
  'hp,',
]) {
  assert.ok(source.includes(contract), `Contact behavior must remain unchanged: ${contract}`);
}

console.log('Contact warm paper contract passed.');
