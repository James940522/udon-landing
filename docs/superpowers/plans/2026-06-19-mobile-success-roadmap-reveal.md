# Mobile Success Roadmap Reveal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure all six success-roadmap cards reveal on mobile without changing their layout or staggered motion.

**Architecture:** Reuse the section-level `useInView` signal, which is reachable at every viewport size, as the activation source for the six cards. Remove the separate whole-grid observer whose 35% threshold is impossible for the tall one-column mobile grid.

**Tech Stack:** Next.js 16, React 19, TypeScript, Framer Motion, Node.js assertions

---

### Task 1: Replace the unreachable mobile reveal threshold

**Files:**

- Modify: `scripts/verify-success-roadmap-light.mjs`
- Modify: `src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx`

- [ ] **Step 1: Add a failing mobile reveal contract**

Add these assertions after the existing `useReducedMotion` assertion in
`scripts/verify-success-roadmap-light.mjs`:

```js
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
```

- [ ] **Step 2: Run the focused contract and confirm RED**

Run:

```bash
node scripts/verify-success-roadmap-light.mjs
```

Expected: FAIL with `Roadmap cards must not depend on the full grid intersection ratio`.

- [ ] **Step 3: Implement the minimal reveal fix**

In `SuccessionPlanningSectionV2`, remove the unused timeline ref and grid observer:

```tsx
const sectionRef = useRef<HTMLElement | null>(null);
const reduceMotion = Boolean(useReducedMotion());

const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -22% 0px' });
```

Remove `ref={timelineRef}` from the roadmap wrapper and pass the section signal to each card:

```tsx
<TimelineItem
  key={strength.number}
  strength={strength}
  index={index}
  active={isInView}
  reduceMotion={reduceMotion}
/>
```

- [ ] **Step 4: Run focused contracts and confirm GREEN**

Run:

```bash
node scripts/verify-success-roadmap-light.mjs
node scripts/verify-clean-cohesive-sections.mjs
```

Expected: both commands exit successfully.

- [ ] **Step 5: Verify code quality and production compilation**

Run:

```bash
pnpm exec eslint src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx scripts/verify-success-roadmap-light.mjs
pnpm exec prettier --check src/widgets/succession-planning-v2/ui/SuccessionPlanningSectionV2.tsx scripts/verify-success-roadmap-light.mjs
pnpm build
```

Expected: ESLint, Prettier, and the production build all pass.

- [ ] **Step 6: Verify the mobile browser behavior**

At a 390×844 viewport, navigate to the success roadmap through the mobile menu. Inspect the
six direct children of `[data-roadmap-grid]`.

Expected: every child finishes with `opacity: 1`; none remains at the initial
`transform: matrix(0.97, 0, 0, 0.97, 0, 28)`.
