import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const component = await readFile(
  new URL(
    '../src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx',
    import.meta.url
  ),
  'utf8'
);
const globalCss = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8');

assert.ok(
  component.includes('/new-asset/background/startup-benefit-hanji.webp'),
  'Roadmap must use the shared hanji background'
);
assert.ok(component.includes('useReducedMotion'), 'Roadmap must respect reduced-motion settings');
assert.ok(component.includes('<motion.path'), 'Roadmap route must animate into view');
assert.ok(component.includes('stroke="#A66732"'), 'Roadmap route must use terracotta');
assert.ok(component.includes('bg-[#fff8eb]/90'), 'Roadmap cards must use the cream paper color');
assert.ok(component.includes('text-[#26140e]'), 'Roadmap content must use the ink color');

for (const legacyToken of [
  'ROADMAP_KEYWORDS',
  'NOREN_PANELS',
  'izakaya-roadmap-bg',
  'bg-[#170c08] py-20 text-[#fff2d8]',
]) {
  assert.ok(
    !component.includes(legacyToken),
    `Legacy roadmap token must be removed: ${legacyToken}`
  );
}

for (const legacySelector of [
  '.izakaya-roadmap-bg',
  '.roadmap-ribbon-left',
  '.roadmap-ribbon-right',
]) {
  assert.ok(
    !globalCss.includes(legacySelector),
    `Unused roadmap CSS must be removed: ${legacySelector}`
  );
}

console.log('Light paper success roadmap contract passed.');
