# Compact Larger Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the site header's vertical footprint while increasing its logo and desktop navigation typography.

**Architecture:** Keep all header behavior, animation, navigation, colors, and mobile sheet behavior unchanged. Add a focused source-contract test, then adjust only responsive height, logo size, typography, and vertical button padding classes in `Header.tsx`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js assertions

---

### Task 1: Define the compact header contract

**Files:**

- Create: `scripts/verify-compact-larger-header.mjs`

- [ ] **Step 1: Write a failing source-contract test**

Require the following tokens in `Header.tsx`:

```text
flex h-14 items-center
md:h-16
h-11 w-auto
md:h-14
py-1.5 text-base
px-5 py-2 font-heading text-base
text-[10px] font-black
text-[11px] font-bold
```

Reject the previous header size tokens:

```text
flex h-16 items-center
md:h-[72px]
h-10 w-auto
md:h-12
py-2 text-sm
py-2.5 font-heading text-sm
```

- [ ] **Step 2: Verify RED**

Run:

```bash
node scripts/verify-compact-larger-header.mjs
```

Expected: FAIL with the first missing compact-header token.

### Task 2: Adjust the header dimensions

**Files:**

- Modify: `src/widgets/header/ui/Header.tsx`

- [ ] **Step 1: Reduce the header height and increase the logo**

Use:

```tsx
<div className="flex h-14 items-center justify-between gap-4 md:h-16">
```

and:

```tsx
className = 'h-11 w-auto object-contain mix-blend-multiply md:h-14';
```

- [ ] **Step 2: Increase text and reduce button padding**

Use `text-[10px]` and `text-[11px]` for the two desktop brand labels. Use
`py-1.5 text-base` for navigation buttons and `py-2 font-heading text-base` for the inquiry CTA.

- [ ] **Step 3: Verify GREEN**

Run:

```bash
node scripts/verify-compact-larger-header.mjs
```

Expected: `Compact larger header contract passed.`

### Task 3: Verify the application

**Files:**

- Verify: `src/widgets/header/ui/Header.tsx`
- Verify: `scripts/verify-compact-larger-header.mjs`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/header/ui/Header.tsx scripts/verify-compact-larger-header.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run existing header contract**

Run:

```bash
node scripts/verify-report-tone-chrome.mjs
```

Expected: `Report-tone header and floating inquiry contract passed.`

- [ ] **Step 3: Run production build**

Run:

```bash
pnpm build
```

Expected: exit code 0. Do not run the development server.

- [ ] **Step 4: Review the diff**

Run:

```bash
git diff --check
git diff -- src/widgets/header/ui/Header.tsx scripts/verify-compact-larger-header.mjs
```

Expected: no whitespace errors and no changes to header behavior or mobile sheet layout.
