# Repeat Order Dark Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the repeat-order proof section as a warm charcoal data dashboard that separates the surrounding light paper sections.

**Architecture:** Keep the existing static order data and graph assets in one component. Replace the decorative background and orange summary card with an editorial header, an actual repeat-order count, compact metric cells, and three dark-framed graph reports.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

### Task 1: Add a failing dark dashboard contract

**Files:**

- Create: `scripts/verify-repeat-order-dark-dashboard.mjs`
- Test: `scripts/verify-repeat-order-dark-dashboard.mjs`

- [ ] Assert that the section uses `useReducedMotion`, a warm charcoal base, the `재주문 488건` KPI, and the new dashboard grid.
- [ ] Assert that each graph report includes the actual repeat-order count and the original graph asset.
- [ ] Assert that percentage labels and calculated rate fields are absent.
- [ ] Assert that the legacy `backgroundWords`, clipped red footer shape, orange summary panel, and old large background text are absent.
- [ ] Run `node scripts/verify-repeat-order-dark-dashboard.mjs` and confirm it fails on the current design.

### Task 2: Implement the dark dashboard

**Files:**

- Modify: `src/widgets/repeat-order-proof/ui/RepeatOrderProofSection.tsx`
- Test: `scripts/verify-repeat-order-dark-dashboard.mjs`

- [ ] Add typed summary and graph-card data with numeric order counts.
- [ ] Add the 463 new-order count derived from the supplied total and repeat-order data.
- [ ] Replace the background with a warm charcoal gradient, restrained grid, and edge separators.
- [ ] Build the editorial heading and large repeat-order-count block.
- [ ] Add compact total-order and new-order metric cells.
- [ ] Reframe the three graph images inside dark report panels with responsive stagger.
- [ ] Use `useReducedMotion` for all entry and hover motion.
- [ ] Run the focused contract and confirm it passes.

### Task 3: Verify

**Files:**

- Verify: `src/widgets/repeat-order-proof/ui/RepeatOrderProofSection.tsx`
- Verify: `scripts/verify-repeat-order-dark-dashboard.mjs`

- [ ] Run Prettier and ESLint on the changed files.
- [ ] Inspect the section at desktop and mobile widths between its neighboring light sections.
- [ ] Run `pnpm build`.
- [ ] Run `git diff --check` and review the final diff.
