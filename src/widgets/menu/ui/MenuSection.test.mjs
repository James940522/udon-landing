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
