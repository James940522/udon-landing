# Blue Ocean Card Contrast Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the three blue-ocean benefit cards the roadmap section’s clear terracotta, ivory, and brown visual hierarchy.

**Architecture:** Extend the existing blue-ocean source contract before changing production markup. Restyle only the mapped benefit cards with an ivory surface, beige border, terracotta top rule, filled circular number badge, and restrained hover shadow while preserving all surrounding sections, copy, layout, and motion timing.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

## File Structure

- Modify `scripts/verify-blue-ocean-warm-editorial.mjs`: require the roadmap-inspired benefit-card tokens and reject the former low-contrast card and number styles.
- Modify `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`: restyle only the three `benefits.map` cards.

### Task 1: Define the Benefit-Card Contrast Contract

**Files:**

- Modify: `scripts/verify-blue-ocean-warm-editorial.mjs`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Add required card tokens**

Add these values to the required-token list:

```js
'border border-[#d8c8b5]/90 bg-[#fffaf2]/94',
'absolute inset-x-0 top-0 h-1 bg-[#9b5b46]',
'rounded-full border-4 border-[#fffaf2] bg-[#9b5b46]',
'text-[#fffaf2]',
'bg-[#fffaf2]/96',
```

- [x] **Step 2: Reject the former low-contrast styles**

Add these values to the rejected-token list:

```js
'border-2 border-[#c9a24d]/38 bg-[#fff8eb]/88',
'text-5xl font-light text-[#c9a24d]/24',
'bg-[#ead9aa]/65',
```

- [x] **Step 3: Run the contract and verify RED**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: FAIL with `Missing warm editorial token: border border-[#d8c8b5]/90 bg-[#fffaf2]/94`.

### Task 2: Restyle the Benefit Cards

**Files:**

- Modify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx:190-227`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Replace the card surface**

Use:

```tsx
className =
  'group relative overflow-hidden rounded-[1.25rem] border border-[#d8c8b5]/90 bg-[#fffaf2]/94 p-8 pt-24 shadow-[0_22px_58px_rgba(73,50,41,0.18)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1';
```

Keep the existing entrance animation and use this hover shadow:

```tsx
whileHover={{
  boxShadow: '0 28px 64px rgba(155, 91, 70, 0.22)',
}}
```

- [x] **Step 2: Add the terracotta top rule**

Insert this as the first child of each card:

```tsx
<div className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]" aria-hidden="true" />
```

- [x] **Step 3: Replace the large faded number**

Replace the former large-number wrapper with:

```tsx
<div className="absolute left-6 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#fffaf2] bg-[#9b5b46] shadow-[0_7px_18px_rgba(73,50,41,0.2)]">
  <span className="text-sm font-black tracking-[-0.04em] text-[#fffaf2]">0{index + 1}</span>
</div>
```

- [x] **Step 4: Strengthen the highlight badge**

Use:

```tsx
<div className="absolute right-6 top-7 z-10">
  <span className="inline-block rounded-full border border-[#d8c8b5] bg-[#fffaf2]/96 px-3 py-1 text-xs font-bold text-[#8f3528] shadow-[0_6px_16px_rgba(73,50,41,0.1)]">
    {benefit.highlight}
  </span>
</div>
```

Change the content wrapper to:

```tsx
<div className="relative">
```

- [x] **Step 5: Run the contract and verify GREEN**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: `Blue ocean warm editorial contract passed.`

### Task 3: Verify, Commit, and Push

**Files:**

- Verify: `scripts/verify-blue-ocean-warm-editorial.mjs`
- Verify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`
- Modify: `docs/superpowers/plans/2026-06-19-blue-ocean-card-contrast.md`

- [x] **Step 1: Run focused lint**

```bash
pnpm exec eslint src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: exit code 0.

- [x] **Step 2: Run repository Node tests**

```bash
node --test src/widgets/menu/ui/MenuSection.test.mjs src/widgets/menu/ui/normalize-menu-image-path.test.mjs src/widgets/reviews/ui/ReviewsSection.test.mjs src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: 5 tests pass and 0 fail.

- [x] **Step 3: Run the production build**

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [x] **Step 4: Review exact scope**

```bash
git diff --check
git diff -- src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: only the three benefit cards and their contract change; surrounding background, problem panel, quote card, copy, grid, and animation timings remain unchanged.

- [x] **Step 5: Mark the plan complete, commit, and push**

Change every checkbox in this plan to `[x]`, then run:

```bash
git add docs/superpowers/plans/2026-06-19-blue-ocean-card-contrast.md scripts/verify-blue-ocean-warm-editorial.mjs src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx
git commit -m "style: strengthen blue ocean card contrast"
git push origin develop
```
