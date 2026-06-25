import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('renders the menu as a light premium menu book', async () => {
  const source = await readFile(new URL('./MenuSection.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(source, /sec6-bg\.jpg/);
  assert.doesNotMatch(source, /브랜드를 선택하고 다양한 메뉴를 확인하세요/);
  assert.doesNotMatch(source, /whileHover=\{\{ scale: 1\.05/);

  assert.match(source, /bg-\[#f7f0e4\]/);
  assert.match(source, /SIGNATURE MENU/);
  assert.match(source, /오늘의 한 그릇을 고르는 즐거움/);
  assert.match(source, /overflow-x-auto border-y border-\[#d8c8b5\]/);
  assert.match(source, /MENU ITEMS/);
  assert.match(source, /currentCategory\.items\.length/);
  assert.match(source, /grid-cols-2 md:grid-cols-3 xl:grid-cols-4/);
  assert.match(source, /bg-\[#fffaf2\]/);
  assert.doesNotMatch(source, /normalizeMenuImagePath/);
  assert.match(source, /src=\{item\.image\}[\s\S]*?unoptimized/);
  assert.match(source, /\/asset\/menu\/today-bokkeum-udon\//);
});

test('uses slightly larger typography across mobile and desktop menu surfaces', async () => {
  const source = await readFile(new URL('./MenuSection.tsx', import.meta.url), 'utf8');

  for (const token of [
    'pb-4 text-xs font-black tracking-[0.22em] text-[#9b5b46] sm:text-sm',
    'mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#9b5b46] sm:text-base',
    'font-heading text-[3rem] font-bold leading-[1.08]',
    'sm:text-[3.4rem] md:text-[4.1rem] lg:text-[4.9rem]',
    'max-w-lg text-base font-semibold leading-8 text-[#746054] sm:text-lg sm:leading-9',
    'block text-[10px] font-black tracking-[0.18em] text-[#9b5b46]/70 sm:text-xs',
    'mt-1 block whitespace-nowrap font-heading text-base font-bold sm:text-lg',
    'text-xs font-black tracking-[0.24em] text-[#9b5b46]',
    'font-heading text-3xl font-bold tracking-[-0.04em] text-[#2b1b16] md:text-4xl',
    'border-b border-[#9b5b46]/45 pb-1 font-heading text-base font-bold text-[#746054]',
    'flex min-h-24 items-start gap-3 border-t border-[#e4d7c6] p-3 sm:min-h-28',
    'mt-0.5 text-[10px] font-black tracking-[0.12em] text-[#9b5b46] sm:text-xs',
    'break-keep font-heading text-base font-bold leading-[1.45]',
    'sm:text-lg',
    'pt-5 text-[10px] font-black tracking-[0.2em] text-[#9b5b46]/70 sm:text-xs',
  ]) {
    assert.ok(source.includes(token), `Missing enlarged menu typography token: ${token}`);
  }

  for (const oldToken of [
    'pb-4 text-[10px] font-black tracking-[0.22em]',
    'font-heading text-[2.7rem] font-bold leading-[1.08]',
    'max-w-lg text-sm font-semibold leading-7',
    'mt-1 block whitespace-nowrap font-heading text-sm font-bold sm:text-base',
    'font-heading text-2xl font-bold tracking-[-0.04em]',
    'flex min-h-20 items-start gap-3 border-t',
    'break-keep font-heading text-sm font-bold leading-[1.45]',
    'pt-5 text-[9px] font-black tracking-[0.2em]',
  ]) {
    assert.ok(!source.includes(oldToken), `Old smaller menu typography must be removed: ${oldToken}`);
  }
});
