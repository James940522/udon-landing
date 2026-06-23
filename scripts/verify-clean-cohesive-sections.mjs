import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const componentPaths = [
  '../src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx',
  '../src/widgets/startup-benefit/ui/StartupBenefitSection.tsx',
  '../src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx',
];

const components = await Promise.all(
  componentPaths.map((path) => readFile(new URL(path, import.meta.url), 'utf8'))
);

const [territory, startupBenefit, roadmap] = components;

for (const [index, component] of [startupBenefit].entries()) {
  for (const token of ['#2b1b16', '#746054', '#9b5b46', '#d8c8b5', '#fffaf2']) {
    assert.ok(
      component.includes(token),
      `${componentPaths[index + 1]} must use the shared clean-section color: ${token}`
    );
  }
}

for (const [index, component] of components.entries()) {
  for (const oldAccent of ['#C9A24D', '#A66732', '#c9a24d', '#a66732']) {
    assert.ok(
      !component.includes(oldAccent),
      `${componentPaths[index]} must remove the louder legacy accent: ${oldAccent}`
    );
  }
}

assert.ok(territory.includes('bg-[#21160f]'), 'Territory section must use its dark bronze palette');

assert.ok(
  startupBenefit.includes('linear-gradient(180deg, rgba(255,250,242,0.82)'),
  'Startup benefit must soften the hanji image with a shared paper overlay'
);

for (const decoration of [
  'data-roadmap-edge-frame',
  'data-roadmap-edge-motif',
  'data-roadmap-seal',
  'Operational success system',
  'Today&apos;s Bokkeum Udon · Roadmap',
  'blur-3xl',
]) {
  assert.ok(
    !roadmap.includes(decoration),
    `Roadmap background decoration must be removed: ${decoration}`
  );
}

console.log('Clean cohesive section color contract passed.');
