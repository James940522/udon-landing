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
assert.ok(
  !component.includes('isTimelineInView'),
  'Roadmap cards must not depend on the full grid intersection ratio'
);
assert.ok(
  !component.includes('amount: 0.35'),
  'Roadmap reveal must not use an unreachable threshold on the mobile one-column grid'
);
assert.ok(
  component.includes('active={isInView}'),
  'Roadmap cards must activate from the viewport-safe section reveal signal'
);
assert.ok(component.includes('bg-[#fffaf2]/92'), 'Roadmap cards must use the shared ivory color');
assert.ok(component.includes('text-[#2b1b16]'), 'Roadmap content must use the shared ink color');
assert.ok(
  component.includes('data-roadmap-grid'),
  'Roadmap cards must use the aligned grid container'
);
assert.ok(
  !component.includes('data-roadmap-edge-motif') &&
    !component.includes('data-roadmap-edge-frame') &&
    !component.includes('data-roadmap-seal'),
  'Roadmap background ornaments must be removed'
);
assert.ok(component.includes('md:auto-rows-fr'), 'Desktop roadmap rows must share equal height');
assert.ok(
  !component.includes('<motion.path'),
  'The mismatched route through the center of the cards must be removed'
);
assert.ok(!component.includes('isRaised'), 'Roadmap cards must not use staggered vertical offsets');

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
