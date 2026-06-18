# Achievement Modal Opening Report Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the poster-like store achievement modal with a light editorial opening report and numbered store rows.

**Architecture:** Keep the existing store fetch and sorting flow. Restyle the modal shell and header, convert `StoreItem` from a tile into a horizontal report row, and add a report-specific footer variant to `BaseModal` without changing other modals.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js assertions

---

### Task 1: Add the failing visual contract

**Files:**

- Create: `scripts/verify-achievement-modal-report.mjs`

- [ ] Assert that the modal contains the new `OPENING REPORT`, `전국 오픈 리포트`, numbered list, light paper shell, and report footer variant.
- [ ] Assert that `StoreItem` is a horizontal list row with a three-column information layout.
- [ ] Assert that the old five-column tile grid, dark gradient header, current-month shine class, and obsolete global animation selectors are absent.
- [ ] Run `node scripts/verify-achievement-modal-report.mjs` and confirm it fails against the current implementation.

### Task 2: Implement the report layout

**Files:**

- Modify: `src/features/achievement-modal/ui/AchievementModal.tsx`
- Modify: `src/features/achievement-modal/ui/StoreItem.tsx`
- Modify: `src/shared/ui/BaseModal.tsx`
- Modify: `src/app/globals.css`

- [ ] Replace the dark framed modal with a light paper shell and restrained border.
- [ ] Build an asymmetric editorial header with the total store count and opening report title.
- [ ] Render stores in a semantic ordered list that becomes two columns on desktop.
- [ ] Convert store tiles into numbered horizontal rows with compact status badges.
- [ ] Replace the large phone banner with a slim inquiry strip.
- [ ] Add a `report` footer variant that preserves the existing hide-for-today and close behavior.
- [ ] Remove the unused current-month glow and shine CSS.

### Task 3: Verify

**Files:**

- Verify: `scripts/verify-achievement-modal-report.mjs`
- Verify: changed TypeScript files

- [ ] Run the focused visual contract and confirm it passes.
- [ ] Run ESLint on the changed TypeScript files.
- [ ] Run `pnpm build`.
- [ ] Review the final diff for unrelated changes.
