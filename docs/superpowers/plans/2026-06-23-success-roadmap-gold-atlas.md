# Success Roadmap Gold Atlas Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a visible, ornate gold-atlas background system around the existing dark-cocoa six-step card grid.

**Architecture:** Use four non-interactive layers: double inset frames, large corner linework, edge-positioned number watermarks, and a brighter double-line route through the card gutters. Keep cards and copy above these layers and preserve existing responsive and motion behavior. Do not use circular title halos or circular route medals.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS utilities, inline SVG, Node.js assertions

---

### Task 1: Extend the roadmap contract

**Files:**

- Modify: `scripts/verify-success-roadmap-dark-cocoa.mjs`
- Test: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`

- [ ] **Step 1: Add failing decoration assertions**

Require the component to contain:

```js
for (const token of [
  'data-roadmap-gold-frame',
  'data-roadmap-antique-route',
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
```

- [ ] **Step 2: Verify the contract fails**

Run: `node scripts/verify-success-roadmap-dark-cocoa.mjs`

Expected: FAIL because `data-roadmap-antique-route` is missing.

### Task 2: Add the gold-atlas background layers

**Files:**

- Modify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`

- [ ] **Step 1: Add the double frame**

Add two inset border layers with decorative corner brackets. Keep the title area free of circular
halo decoration.

- [ ] **Step 2: Strengthen corner linework**

Add decorative inline SVGs at the upper-left and lower-right corners. Use antique-gold strokes,
visible 20–24% opacity, `aria-hidden`, and `pointer-events-none`.

- [ ] **Step 3: Reposition the numbered watermarks**

Render `01–06` along section edges and card gutters where portions remain visible. Use oversized
ivory text at 11% opacity.

- [ ] **Step 4: Strengthen the route**

Place a desktop-only double SVG route around the card gutters using a glow line plus a brighter
dashed copper line. Do not add circular number medals along the path.

- [ ] **Step 5: Verify the contract passes**

Run: `node scripts/verify-success-roadmap-dark-cocoa.mjs`

Expected: `Dark cocoa success roadmap contract passed.`

### Task 3: Verify rendering

**Files:**

- Verify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`
- Verify: `scripts/verify-success-roadmap-dark-cocoa.mjs`

- [ ] **Step 1: Run source checks**

Run ESLint, Prettier, the dark-cocoa contract, and the clean cohesive sections contract.

- [ ] **Step 2: Run production build**

Run: `pnpm build`

Expected: successful Next.js production build.

- [ ] **Step 3: Inspect desktop and mobile**

Confirm desktop clearly shows the double frame, route, number watermarks, and
corner linework without reducing card readability. Confirm mobile hides the route and number
watermarks, retains the frame, keeps one card column, and has no horizontal overflow.
