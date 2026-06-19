import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const achievementModal = await readFile(
  new URL('../src/features/achievement-modal/ui/AchievementModal.tsx', import.meta.url),
  'utf8'
);

const storeListStart = achievementModal.indexOf('<ol className="');
const storeListEnd = achievementModal.indexOf('</ol>', storeListStart);

assert.ok(storeListStart >= 0, 'Store list <ol> must exist.');
assert.ok(storeListEnd > storeListStart, 'Store list </ol> must exist.');

const storeListMarkup = achievementModal.slice(storeListStart, storeListEnd);

for (const token of [
  'max-h-[clamp(12rem,32vh,24rem)]',
  'overflow-y-auto',
  'overscroll-contain',
]) {
  assert.ok(storeListMarkup.includes(token), `Missing store-list scroll token: ${token}`);
}

assert.ok(
  achievementModal.indexOf('STORE INDEX') < storeListStart,
  'STORE INDEX heading must remain outside and above the scrollable list.'
);
assert.ok(
  achievementModal.indexOf('FRANCHISE INQUIRY') > storeListEnd,
  'Franchise inquiry must remain outside and below the scrollable list.'
);

console.log('Achievement store index scroll contract passed.');
