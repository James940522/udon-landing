import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('uses the light wood WebP and the light brand palette', async () => {
  const componentUrl = new URL('./StartupProcessSection.tsx', import.meta.url);
  const source = await readFile(componentUrl, 'utf8');

  assert.ok(
    source.includes('/new-asset/background/startup-process-light-wood.webp'),
    'The section must use the supplied light wood WebP background',
  );
  assert.ok(source.includes("backgroundSize: 'cover'"));
  assert.ok(source.includes("backgroundRepeat: 'no-repeat'"));
  assert.ok(source.includes('text-[#2b1b16]'), 'The heading must use brand ink');
  assert.ok(source.includes('bg-[#493229]'), 'The section label must use deep brown');
  assert.ok(source.includes('text-[#c9a24d]'), 'Gold must be used for branded accents');
  assert.ok(source.includes('bg-[#8f3528]'), 'Number badges must use lacquer red');
  assert.ok(source.includes('bg-[#fff8eb]/92'), 'Cards must use a translucent cream surface');
  assert.ok(!source.includes('bg-black/30'), 'The old dark overlay must be removed');
  assert.ok(
    !source.includes('text-white drop-shadow'),
    'The old white heading treatment must be removed',
  );

  const asset = await readFile(
    new URL(
      '../../../../public/new-asset/background/startup-process-light-wood.webp',
      import.meta.url,
    ),
  );
  assert.equal(asset.subarray(0, 4).toString('ascii'), 'RIFF');
  assert.equal(asset.subarray(8, 12).toString('ascii'), 'WEBP');
});

test('adds restrained editorial process decorations', async () => {
  const source = await readFile(new URL('./StartupProcessSection.tsx', import.meta.url), 'utf8');

  assert.ok(source.includes('6 STEPS TO OPEN'));
  assert.ok(source.includes('data-decoration="editorial-frame"'));
  assert.ok(source.includes('data-decoration="process-path"'));
  assert.ok(source.includes('hidden md:block'), 'Large decorations must stay hidden on mobile');
  assert.ok(source.includes('STEP {process.number}'));
  assert.ok(source.includes('border-dashed'));
  assert.ok(source.includes('pointer-events-none'));
});
