# Territory Dark Bronze Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recolor the territory-protection section as a dark bronze map-analysis room with restrained geographic decoration.

**Architecture:** Preserve the existing content and responsive layout. Update the territory contract, separate it from the shared light-paper contract, and add non-interactive coordinate-grid, boundary-linework, and gold-frame layers below the content.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS utilities, inline SVG, Node.js assertions

---

### Task 1: Define the dark territory contract

**Files:**

- Modify: `scripts/verify-territory-section.mjs`
- Modify: `scripts/verify-clean-cohesive-sections.mjs`

- [ ] Require the dark palette, map asset, coordinate grid, boundary linework, and gold frame.
- [ ] Reject the former light-paper section and gradient tokens.
- [ ] Limit the shared light-paper palette contract to the startup-benefit section.
- [ ] Run `node scripts/verify-territory-section.mjs` and confirm failure on `bg-[#21160f]`.

### Task 2: Apply the design

**Files:**

- Modify: `src/widgets/territory-protection/ui/TerritoryProtectionSection.tsx`

- [ ] Add dark gradient, bronze glow, coordinate grid, boundary SVGs, and double frame.
- [ ] Recolor title, supporting copy, policy facts, map shell, comparison cards, and stability panel.
- [ ] Preserve the map, content, animation, and responsive layout.
- [ ] Run territory and shared-section contracts.

### Task 3: Verify

- [ ] Run ESLint and Prettier on changed source and contract files.
- [ ] Run `git diff --check`.
- [ ] Run `pnpm build`.
