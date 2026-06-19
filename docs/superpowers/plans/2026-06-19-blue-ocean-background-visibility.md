# Blue Ocean Background Visibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reveal more of the blue-ocean section’s existing background image by reducing only the four paper-overlay opacity values.

**Architecture:** Update the existing source-contract test first so it requires the approved lower-opacity tokens and rejects the current values. Then change the same four Tailwind tokens in `BlueOceanAdvantageSection`, preserving image treatment, cards, copy, layout, and motion.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js assertions

---

## File Structure

- Modify `scripts/verify-blue-ocean-warm-editorial.mjs`: require the new overlay opacity tokens and reject the four previous values.
- Modify `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`: change only the paper veil and vertical gradient opacity values.

### Task 1: Update the Background Visibility Contract

**Files:**

- Modify: `scripts/verify-blue-ocean-warm-editorial.mjs`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Replace the expected overlay tokens**

Replace:

```js
'bg-[#f7eddb]/68',
'from-[#fff8eb]/82',
'via-[#e8d4b8]/72',
'to-[#c99676]/62',
```

with:

```js
'bg-[#f7eddb]/48',
'from-[#fff8eb]/68',
'via-[#e8d4b8]/56',
'to-[#c99676]/48',
```

Add these four previous values to the rejected-token loop:

```js
'bg-[#f7eddb]/68',
'from-[#fff8eb]/82',
'via-[#e8d4b8]/72',
'to-[#c99676]/62',
```

- [x] **Step 2: Run the contract and verify RED**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: FAIL with `Missing warm editorial token: bg-[#f7eddb]/48`.

### Task 2: Reduce Only the Background Overlay Opacity

**Files:**

- Modify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx:66-71`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Apply the approved opacity values**

Replace the background overlays with:

```tsx
<div className="absolute inset-0 bg-[#f7eddb]/48" aria-hidden="true" />
<div
  className="absolute inset-0 bg-gradient-to-b from-[#fff8eb]/68 via-[#e8d4b8]/56 to-[#c99676]/48"
  aria-hidden="true"
/>
```

Do not change `brightness-[0.92]`, `saturate-[0.72]`, or any content-panel token.

- [x] **Step 2: Run the contract and verify GREEN**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: `Blue ocean warm editorial contract passed.`

### Task 3: Verify and Commit

**Files:**

- Verify: `scripts/verify-blue-ocean-warm-editorial.mjs`
- Verify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`
- Modify: `docs/superpowers/plans/2026-06-19-blue-ocean-background-visibility.md`

- [x] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: exit code 0.

- [x] **Step 2: Run the production build**

Run:

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [x] **Step 3: Review exact scope**

Run:

```bash
git diff --check
git diff -- src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected:

- Exactly four opacity tokens change in the component.
- The contract requires those four new values and rejects the previous values.
- Card backgrounds, image brightness and saturation, copy, layout, and animation remain unchanged.

- [x] **Step 4: Mark this plan complete and commit**

Change every checkbox in this plan to `[x]`, then run:

```bash
git add docs/superpowers/plans/2026-06-19-blue-ocean-background-visibility.md scripts/verify-blue-ocean-warm-editorial.mjs src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx
git commit -m "style: reveal blue ocean background image"
```
