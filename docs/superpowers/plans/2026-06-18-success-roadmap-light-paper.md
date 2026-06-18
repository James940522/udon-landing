# Success Roadmap Light Paper Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the six-step success roadmap into a warm light-paper section with readable cream cards, a terracotta route, and restrained motion.

**Architecture:** Reuse the existing hanji WebP with a beige overlay, remove the dark decorative data and DOM, and restyle the existing six-card data flow. Keep animation inside Framer Motion and remove global CSS that becomes unused.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

### Task 1: Add a failing roadmap design contract

**Files:**

- Create: `scripts/verify-success-roadmap-light.mjs`
- Test: `scripts/verify-success-roadmap-light.mjs`

- [ ] Assert that the section references `startup-benefit-hanji.webp`, uses `useReducedMotion` and `motion.path`, and no longer contains `ROADMAP_KEYWORDS`, `NOREN_PANELS`, `izakaya-roadmap-bg`, or the old dark section class.
- [ ] Assert that the component contains the light card tokens `bg-[#fff8eb]/90`, `text-[#26140e]`, and the terracotta route stroke `#A66732`.
- [ ] Assert that the obsolete `.izakaya-roadmap-bg`, `.roadmap-ribbon-left`, and `.roadmap-ribbon-right` selectors are absent from `globals.css`.
- [ ] Run `node scripts/verify-success-roadmap-light.mjs` and confirm it fails on the current dark design.

### Task 2: Implement the light paper roadmap

**Files:**

- Modify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`
- Modify: `src/app/globals.css`
- Test: `scripts/verify-success-roadmap-light.mjs`

- [ ] Remove the dark background arrays, noren panels, ribbons, glow blobs, and gold framing nodes.
- [ ] Add `useReducedMotion` and pass the preference into each timeline card.
- [ ] Apply the hanji background with a warm beige gradient overlay.
- [ ] Restyle the heading, cards, number badges, descriptions, and closing panel using ink, terracotta, cream, and soft brown.
- [ ] Replace the static gold SVG path with a terracotta `motion.path`.
- [ ] Change the responsive grid to one, two, and three columns.
- [ ] Remove now-unused roadmap CSS selectors and keyframes.
- [ ] Run the focused contract and confirm it passes.

### Task 3: Verify

**Files:**

- Verify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`
- Verify: `src/app/globals.css`
- Verify: `scripts/verify-success-roadmap-light.mjs`

- [ ] Run focused Prettier and ESLint checks.
- [ ] Run the startup-benefit contract to ensure the shared background work remains intact.
- [ ] Run `pnpm build`.
- [ ] Review the final diff for unrelated changes.
