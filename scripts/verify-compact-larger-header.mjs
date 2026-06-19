import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const header = await readFile(
  new URL('../src/widgets/header/ui/Header.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'flex h-14 items-center',
  'md:h-16',
  'h-11 w-auto',
  'md:h-14',
  'py-1.5 text-base',
  'px-5 py-2 font-heading text-base',
  'text-[10px] font-black',
  'text-[11px] font-bold',
]) {
  assert.ok(header.includes(token), `Missing compact larger-header token: ${token}`);
}

for (const legacyToken of [
  'flex h-16 items-center',
  'md:h-[72px]',
  'h-10 w-auto',
  'md:h-12',
  'py-2 text-sm',
  'py-2.5 font-heading text-sm',
]) {
  assert.ok(!header.includes(legacyToken), `Legacy header size token must be removed: ${legacyToken}`);
}

console.log('Compact larger header contract passed.');
