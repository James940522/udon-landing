import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const layoutSource = await readFile(
  new URL('../src/app/layout.tsx', import.meta.url),
  'utf8'
);
const globalCss = await readFile(
  new URL('../src/app/globals.css', import.meta.url),
  'utf8'
);

assert.match(
  layoutSource,
  /export const viewport: Viewport = \{[\s\S]*?colorScheme:\s*'light'/,
  'Viewport metadata must advertise the light color scheme'
);

assert.match(
  globalCss,
  /:root\s*\{[\s\S]*?color-scheme:\s*only light;/,
  'The root element must reject automatic dark-mode color overrides'
);

assert.match(
  globalCss,
  /html\s*\{[\s\S]*?background-color:\s*var\(--background\);/,
  'The document canvas must use the brand background color'
);

assert.match(
  globalCss,
  /body\s*\{[\s\S]*?background-color:\s*var\(--background\);/,
  'The body must use the brand background color'
);

console.log('Fixed brand color-scheme contract passed.');
