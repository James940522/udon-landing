# Repeat Order Warm Paper Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the repeat-order proof section with the same warm paper palette used by its adjacent sections without changing its data, layout, assets, or motion behavior.

**Architecture:** Keep the existing React component and data model intact. Replace only presentation tokens in the section, KPI card, graph cards, and insight row, and protect the result with a source-contract verification script.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Node.js assertions

---

### Task 1: Define the warm paper palette contract

**Files:**

- Move: `scripts/verify-repeat-order-dark-dashboard.mjs` to `scripts/verify-repeat-order-warm-paper.mjs`
- Test: `scripts/verify-repeat-order-warm-paper.mjs`

- [ ] **Step 1: Write the failing palette contract**

Require the component to contain the shared hanji background asset, cream surface `bg-[#fffaf2]`, ink text `text-[#2b1b16]`, lacquer accent `text-[#9b5b46]`, beige border `border-[#d8c8b5]`, and olive new-order accent `text-[#596348]`. Reject the former dark background tokens `bg-[#181311]`, `bg-[#211917]`, and `text-[#fff8eb]`.

- [ ] **Step 2: Run the contract and verify RED**

Run: `node scripts/verify-repeat-order-warm-paper.mjs`

Expected: FAIL with a missing warm paper token because the component still uses the dark dashboard palette.

### Task 2: Apply the shared warm paper palette

**Files:**

- Modify: `src/widgets/repeat-order-proof/ui/RepeatOrderProofSection.tsx`
- Test: `scripts/verify-repeat-order-warm-paper.mjs`

- [ ] **Step 1: Replace the section background**

Use the shared `/new-asset/background/startup-benefit-hanji.webp` asset with a light cream overlay and change section text to ink brown.

- [ ] **Step 2: Restyle the title and KPI panel**

Use lacquer red for labels and key accents, ink brown for the `488` KPI, cream for the panel surface, beige for borders, and warm brown for supporting copy and shadows.

- [ ] **Step 3: Restyle the graph panels and insight row**

Use cream graph-card surfaces, beige dividers, lacquer repeat-order accents, and olive new-order accents while preserving graph image backgrounds.

- [ ] **Step 4: Run the focused contract and verify GREEN**

Run: `node scripts/verify-repeat-order-warm-paper.mjs`

Expected: `Repeat-order warm paper contract passed.`

### Task 3: Verify the production result

**Files:**

- Verify: `src/widgets/repeat-order-proof/ui/RepeatOrderProofSection.tsx`
- Verify: `scripts/verify-repeat-order-warm-paper.mjs`

- [ ] **Step 1: Run lint**

Run: `pnpm lint`

Expected: exit code 0.

- [ ] **Step 2: Run the production build**

Run: `pnpm build`

Expected: exit code 0.

- [ ] **Step 3: Inspect the rendered page**

Open the local landing page at desktop and mobile widths. Confirm the section joins the adjacent warm paper sections, the KPI and graph cards remain readable, and no dark dashboard surface remains.
