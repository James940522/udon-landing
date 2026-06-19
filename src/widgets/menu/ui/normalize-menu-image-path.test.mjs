import assert from 'node:assert/strict';
import test from 'node:test';

test('matches menu image URLs to the unicode form stored in public assets', async () => {
  let normalizeMenuImagePath;

  try {
    ({ normalizeMenuImagePath } = await import('./normalize-menu-image-path.ts'));
  } catch {
    normalizeMenuImagePath = undefined;
  }

  assert.equal(typeof normalizeMenuImagePath, 'function');

  const regular = normalizeMenuImagePath(
    '/asset/menu/오늘은_볶음우동/볶음우동/돈까스 볶음우동.jpg',
  );
  const decomposedFilename = normalizeMenuImagePath(
    '/asset/menu/오늘은_볶음우동/볶음우동/우삼겹 볶음우동.jpg',
  );
  const decomposedCategory = normalizeMenuImagePath(
    '/asset/menu/오늘은_볶음우동/김치볶음우동/돈까스 김치볶음우동.jpeg',
  );

  assert.equal(regular.split('/')[4], '볶음우동'.normalize('NFD'));
  assert.equal(regular.split('/')[5], '돈까스 볶음우동.jpg');
  assert.equal(decomposedFilename.split('/')[5], '우삼겹 볶음우동.jpg'.normalize('NFD'));
  assert.equal(decomposedCategory.split('/')[4], '김치볶음우동'.normalize('NFD'));
  assert.equal(
    decomposedCategory.split('/')[5],
    '돈까스 김치볶음우동.jpeg'.normalize('NFD'),
  );
});
