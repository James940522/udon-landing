# Fixed Brand Color Scheme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the existing brand palette unchanged when Samsung Internet or another browser is used with a dark system theme.

**Architecture:** Declare the supported scheme through Next.js viewport metadata for the initial document response, then enforce `only light` at the CSS root so user-agent auto-dark algorithms cannot reinterpret page colors. Pin the document canvas to the existing `--background` token without changing component colors or the dormant `.dark` class.

**Tech Stack:** Next.js 16 App Router metadata, TypeScript, CSS Color Adjustment, Node.js assertion script

---

## File Structure

- Create `scripts/verify-color-scheme.mjs`: source-level contract test for the viewport metadata and global CSS declarations.
- Modify `src/app/layout.tsx`: emit `<meta name="color-scheme" content="light">` through the typed `viewport` export.
- Modify `src/app/globals.css`: opt the document into `only light` and explicitly color the document canvas.

### Task 1: Add the Color-Scheme Contract Test

**Files:**

- Create: `scripts/verify-color-scheme.mjs`
- Test: `scripts/verify-color-scheme.mjs`

- [x] **Step 1: Write the failing test**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const layoutSource = await readFile(new URL('../src/app/layout.tsx', import.meta.url), 'utf8');
const globalCss = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8');

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
```

- [x] **Step 2: Run the test to verify it fails**

Run: `node scripts/verify-color-scheme.mjs`

Expected: FAIL with `Viewport metadata must advertise the light color scheme`.

- [x] **Step 3: Commit the failing contract test**

```bash
git add scripts/verify-color-scheme.mjs
git commit -m "test: define fixed color scheme contract"
```

### Task 2: Enforce the Brand Color Scheme

**Files:**

- Modify: `src/app/layout.tsx:108-113`
- Modify: `src/app/globals.css:110-180`
- Modify: `src/app/globals.css:302-318`
- Test: `scripts/verify-color-scheme.mjs`

- [x] **Step 1: Add light scheme viewport metadata**

Change the viewport export to:

```ts
export const viewport: Viewport = {
  themeColor: '#170c08',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};
```

- [x] **Step 2: Reject automatic dark-mode overrides at the CSS root**

Add this declaration at the beginning of the existing `:root` block:

```css
:root {
  color-scheme: only light;

  /* existing variables remain unchanged */
}
```

- [x] **Step 3: Pin the document canvas to the brand background**

Update the existing global rules:

```css
html {
  background-color: var(--background);
  scroll-behavior: smooth;
}

body {
  background-color: var(--background);
  /* existing body declarations remain unchanged */
}
```

- [x] **Step 4: Run the focused test to verify it passes**

Run: `node scripts/verify-color-scheme.mjs`

Expected: PASS with `Fixed brand color-scheme contract passed.`

- [x] **Step 5: Run static validation**

Run: `pnpm lint`

Expected: exit code 0 with no new lint errors.

Run: `pnpm build`

Expected: exit code 0 and a successful Next.js production build.

Result: the production build passed. The focused ESLint run had no errors; the full repository
lint remains blocked by nine pre-existing errors outside this change.

- [x] **Step 6: Verify the generated HTML metadata**

Run the production server and request the home page:

```bash
pnpm start
curl -s http://localhost:3000 | rg '<meta name="color-scheme" content="light"\s*/?>'
```

Expected: one matching `color-scheme` meta tag.

- [ ] **Step 7: Commit the implementation**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "fix: preserve brand colors in dark mode browsers"
```
