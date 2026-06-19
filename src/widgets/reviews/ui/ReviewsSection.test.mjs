import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('keeps the review marquee below the phone previews on mobile', async () => {
  const source = await readFile(new URL('./ReviewsSection.tsx', import.meta.url), 'utf8');

  assert.match(
    source,
    /className="relative z-20 -mt-12 overflow-hidden pt-20 sm:-mt-56/,
  );
});
