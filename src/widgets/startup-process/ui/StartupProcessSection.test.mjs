import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('uses a dark brown premium background with one restrained image accent', async () => {
  const componentUrl = new URL('./StartupProcessSection.tsx', import.meta.url);
  const source = await readFile(componentUrl, 'utf8');

  assert.ok(source.includes('data-startup-dark-background'));
  assert.ok(source.includes('data-startup-image-accent'));
  assert.ok(source.includes('bg-[#21160f]'), 'The section should start from a dark brown base');
  assert.ok(source.includes('bg-[#35251b]'), 'The background should share the brown field from adjacent dark sections');
  assert.ok(source.includes('text-[#f0dfc0]'), 'The heading must use warm ivory on brown');
  assert.ok(source.includes('text-[#c18442]'), 'Bronze-gold must be used for branded accents');
  assert.ok(source.includes('border-[#a9824c]/45'), 'Soft bronze borders should define the premium UI');
  assert.ok(source.includes('bg-[#2b211a]/90'), 'Step cards should use translucent cocoa panels');
  assert.ok(
    source.includes('/asset/etc/hand-shake.jpg'),
    'The section should use one restrained franchise consultation image',
  );
  assert.ok(source.includes("from 'next/image'"), 'The image accent should use Next Image');
  assert.ok(source.includes('object-cover'), 'The accent image should crop cleanly inside its panel');
  assert.ok(
    source.includes('radial-gradient(circle at 18% 10%, rgba(193,132,66,0.16)'),
    'The background should be CSS atmosphere, not a bitmap',
  );
  assert.ok(!source.includes('bg-[#090504]'), 'The previous near-black base should be removed');
  assert.ok(!source.includes('bg-[#15100d]/88'), 'The previous near-black panels should be removed');
  assert.ok(
    !source.includes('/new-asset/background/startup-process-light-wood.webp'),
    'The light wood background must be removed',
  );
  assert.ok(!source.includes('process.image'), 'Process cards must not render process images');
  assert.ok(
    !source.includes('bg-[#fff8eb]/92'),
    'The old cream card surface must be removed',
  );
});

test('renders the process as a warmer dark franchise timeline', async () => {
  const source = await readFile(new URL('./StartupProcessSection.tsx', import.meta.url), 'utf8');

  assert.ok(source.includes('6 STEPS TO OPEN'));
  assert.ok(source.includes('FRANCHISE OPENING'));
  assert.ok(source.includes('OPENING WITH TODAY'));
  assert.ok(!source.includes('OPENING CONTROL ROOM'), 'The tone should not feel like a hard dashboard');
  assert.ok(source.includes('data-startup-step-rail'));
  assert.ok(source.includes('data-process-step-card'));
  assert.ok(source.includes('data-process-step-marker'));
  assert.ok(source.includes('grid-cols-1'));
  assert.ok(source.includes('md:grid-cols-2'));
  assert.ok(source.includes('lg:grid-cols-3'));
  assert.ok(source.includes('hidden lg:block'), 'The timeline rail must stay out of compact layouts');
  assert.ok(source.includes('STEP {process.number}'));
  assert.ok(source.includes('pointer-events-none'));
  assert.ok(source.includes('검토 완료'));
  assert.ok(source.includes('운영 준비'));
});
