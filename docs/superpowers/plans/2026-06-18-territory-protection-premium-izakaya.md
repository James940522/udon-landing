# Territory Protection Premium Izakaya Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the territory-protection section as a dark, premium izakaya editorial composition using only the supplied five-color palette.

**Architecture:** Keep the existing React component, content, image asset, and Framer Motion behavior, but replace its visual hierarchy and layout. The section will use an asymmetric header, a large framed map, and a right-side vertical comparison rail with angular clipped panels.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Node.js source verification

---

### Task 1: Add a visual contract check

**Files:**

- Create: `scripts/verify-territory-section.mjs`
- Test: `scripts/verify-territory-section.mjs`

- [x] **Step 1: Write the failing source verification**

Create a Node script that reads `TerritoryProtectionSection.tsx` and asserts:

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx', import.meta.url),
  'utf8'
);

const requiredTokens = [
  'bg-[#170C08]',
  '#3B2115',
  '#A66732',
  '#C9A24D',
  '#FFF2D8',
  'Impact',
  'PROTECTED SALES AREA',
  'lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)]',
  'gangnam-territory.png',
];

for (const token of requiredTokens) {
  assert.ok(source.includes(token), `Missing territory design token: ${token}`);
}

assert.ok(
  !source.includes('backgroundWords'),
  'Legacy vertical marquee background should be removed'
);

console.log('Territory protection visual contract passed.');
```

- [x] **Step 2: Run the verification and confirm RED**

Run: `node scripts/verify-territory-section.mjs`

Expected: FAIL with `Missing territory design token: bg-[#170C08]`.

### Task 2: Rebuild the territory section

**Files:**

- Modify: `src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx`
- Test: `scripts/verify-territory-section.mjs`

- [x] **Step 1: Replace the light centered composition**

Use `#170C08` as the section base. Add smoke-like radial gradients, narrow gold construction lines, a large low-opacity English background word, and clipped-corner framing.

- [x] **Step 2: Build the asymmetric editorial header**

Place the `03 / PROTECTED SALES AREA` label and Korean headline in a left-aligned block. Place the supporting copy and two short policy facts in a separate right column.

- [x] **Step 3: Recompose the evidence area**

Use this desktop grid:

```tsx
<div className="grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)] lg:gap-6">
```

The map occupies the large left panel. The comparison cards become a vertical right-side rail joined by a center line and ending in a gold guarantee panel.

- [x] **Step 4: Apply angular English typography**

Apply the following font stack only to English labels and large decorative text:

```tsx
style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
```

- [x] **Step 5: Run the visual contract and confirm GREEN**

Run: `node scripts/verify-territory-section.mjs`

Expected: `Territory protection visual contract passed.`

### Task 3: Verify quality and responsive rendering

**Files:**

- Verify: `src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx`

- [x] **Step 1: Run lint on the changed component**

Run: `pnpm exec eslint src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx`

Expected: exit code 0.

- [x] **Step 2: Run the production build**

Run: `pnpm build`

Expected: exit code 0.

- [x] **Step 3: Attempt desktop and mobile inspection in the local browser**

Start the local app, open the territory-protection section, and verify:

- The headline is left aligned and visually dominant.
- The palette stays within smoke black, walnut, caramel, antique gold, and rice cream.
- The map is legible and does not crop important information.
- Comparison panels stack cleanly on mobile.
- Decorative English text does not create horizontal overflow.

The local listener was denied by the managed environment. No port-binding workaround was used;
responsive coverage was retained in the source contract, lint, formatting, and production build.
