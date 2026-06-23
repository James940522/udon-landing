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

for (const token of [
  'bg-[#2a1d16]',
  'text-[#f0dfc0]',
  'text-[#c8b69a]',
  'bg-[#d3b98e]/95',
  'text-[#291911]',
  'text-[#594334]',
  'bg-[#713e25]',
  'bg-[#b56e32]',
  'border-[#a9824c]/70',
  'bg-[#21150f]/94',
  'rgba(18,10,6,0.38)',
]) {
  assert.ok(component.includes(token), `Missing dark cocoa roadmap token: ${token}`);
}

for (const lightToken of [
  'bg-[#f0e9df]',
  'rgba(255,250,242,0.84)',
  'bg-[#fffaf2]/92',
  'text-[#746054]',
]) {
  assert.ok(
    !component.includes(lightToken),
    `Light paper roadmap token must be removed: ${lightToken}`
  );
}

for (const token of [
  'data-roadmap-gold-frame',
  'data-roadmap-title-halo',
  'data-roadmap-antique-route',
  'data-roadmap-route-medal',
  'data-roadmap-number-watermarks',
  'data-roadmap-corner-linework',
  'strokeDasharray="9 12"',
  'text-[#f0dfc0]/[0.11]',
  'text-[#d29a52]/[0.36]',
  'hidden md:grid',
  'hidden md:block',
]) {
  assert.ok(component.includes(token), `Missing antique roadmap decoration: ${token}`);
}

assert.ok(
  component.includes('/new-asset/background/startup-benefit-hanji.webp'),
  'Roadmap must retain the shared hanji texture'
);
assert.ok(component.includes('useReducedMotion'), 'Roadmap must respect reduced-motion settings');
assert.ok(
  component.includes('active={isInView}'),
  'Roadmap cards must activate from the viewport-safe section reveal signal'
);
assert.ok(
  component.includes('data-roadmap-grid'),
  'Roadmap cards must retain the aligned grid container'
);
assert.ok(component.includes('md:auto-rows-fr'), 'Desktop roadmap rows must share equal height');
assert.ok(
  !component.includes('isTimelineInView') && !component.includes('amount: 0.35'),
  'Roadmap must retain the mobile-safe reveal behavior'
);
assert.ok(
  !component.includes('<motion.path') && !component.includes('isRaised'),
  'Roadmap must not restore the obsolete route or staggered offsets'
);
assert.ok(
  !component.includes('data-roadmap-edge-motif') &&
    !component.includes('data-roadmap-edge-frame') &&
    !component.includes('data-roadmap-seal'),
  'Roadmap background ornaments must remain removed'
);

for (const legacySelector of [
  '.izakaya-roadmap-bg',
  '.roadmap-ribbon-left',
  '.roadmap-ribbon-right',
]) {
  assert.ok(
    !globalCss.includes(legacySelector),
    `Unused roadmap CSS must remain removed: ${legacySelector}`
  );
}

console.log('Dark cocoa success roadmap contract passed.');
