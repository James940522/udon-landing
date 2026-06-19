import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const header = await readFile(
  new URL('../src/widgets/header/ui/Header.tsx', import.meta.url),
  'utf8'
);
const footer = await readFile(
  new URL('../src/widgets/footer/ui/Footer.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-[#efe5d4]/98',
  'bg-[#efe5d4]/92',
  'border-l border-[#cdbb9f] bg-[#efe5d4] p-0',
  'border-t border-[#ddcfbb] bg-[#efe5d4]/94 p-6',
]) {
  assert.ok(header.includes(token), `Missing darker header token: ${token}`);
}

assert.ok(
  footer.includes('<footer id="footer" className="bg-[#170c08] pt-16 pb-8">'),
  'Footer must use the approved dark brown background'
);

for (const legacyToken of [
  'bg-[#f6efe3]/98',
  'bg-[#f6efe3]/92',
  'bg-[#f6efe3] p-0',
  'bg-[#f6efe3]/94',
]) {
  assert.ok(!header.includes(legacyToken), `Legacy header background must be removed: ${legacyToken}`);
}

assert.ok(!footer.includes('bg-stone-900'), 'Legacy footer background must be removed');

for (const protectedToken of [
  'flex h-14 items-center',
  'md:h-16',
  'h-11 w-auto',
  'md:h-14',
  'py-1.5 text-base',
  'px-5 py-2 font-heading text-base',
]) {
  assert.ok(header.includes(protectedToken), `Protected header sizing token changed: ${protectedToken}`);
}

console.log('Darker header and footer color contract passed.');
