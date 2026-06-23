# Success Roadmap Dark Cocoa Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recolor the six-step success roadmap with a dark cocoa background, baked-beige cards, and restrained copper and antique-gold accents.

**Architecture:** Preserve the component’s data, markup hierarchy, responsive grid, and Framer Motion behavior. Replace the light-paper contract with a dark-cocoa source contract, then update only visual utility classes and the existing background overlay.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS utilities, Framer Motion, Node.js assertions

---

### Task 1: Define the dark cocoa contract

**Files:**

- Delete: `scripts/verify-success-roadmap-light.mjs`
- Create: `scripts/verify-success-roadmap-dark-cocoa.mjs`
- Modify: `scripts/verify-clean-cohesive-sections.mjs`
- Test: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`

- [ ] **Step 1: Write the failing contract**

Require the approved palette tokens:

```js
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
]) {
  assert.ok(component.includes(token), `Missing dark cocoa roadmap token: ${token}`);
}
```

Retain assertions for `useReducedMotion`, `active={isInView}`, `data-roadmap-grid`,
`md:auto-rows-fr`, and the absence of the obsolete route and edge ornaments.
Limit the shared light-paper palette loop in `verify-clean-cohesive-sections.mjs` to the territory
and startup-benefit components while retaining its roadmap decoration-removal assertions.

- [ ] **Step 2: Verify the contract fails**

Run: `node scripts/verify-success-roadmap-dark-cocoa.mjs`

Expected: FAIL because the current section does not contain `bg-[#2a1d16]`.

### Task 2: Apply the approved palette

**Files:**

- Modify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`

- [ ] **Step 1: Recolor the section**

Use a dark cocoa class and an opaque cocoa-to-brown gradient over the existing hanji asset.
Set the heading to `#f0dfc0`, supporting copy to `#c8b69a`, and label accents to `#b56e32`.

- [ ] **Step 2: Recolor the cards**

Use `#d3b98e` card surfaces, `#a9824c` borders, `#713e25` number badges,
`#291911` headings, accessible `#594334` body copy, and cocoa-colored shadows.

- [ ] **Step 3: Recolor the CTA**

Use a `#21150f` chocolate panel with antique-gold border, copper top rule, ivory title,
and sand supporting copy.

- [ ] **Step 4: Verify the contract passes**

Run: `node scripts/verify-success-roadmap-dark-cocoa.mjs`

Expected: `Dark cocoa success roadmap contract passed.`

### Task 3: Verify the implementation

**Files:**

- Verify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`
- Verify: `scripts/verify-success-roadmap-dark-cocoa.mjs`

- [ ] **Step 1: Run ESLint**

Run:

```bash
pnpm exec eslint src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx scripts/verify-success-roadmap-dark-cocoa.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run the production build**

Run: `pnpm build`

Expected: successful Next.js production build.

- [ ] **Step 3: Inspect the page**

Run the local app and verify that desktop and mobile cards remain readable, all six cards reveal,
and the section no longer reads as white or ivory.

- [ ] **Step 4: Review the diff**

Run `git diff --check` and inspect the roadmap component and contract test diff. Do not modify or
discard unrelated Blue Ocean work already present in the workspace.
