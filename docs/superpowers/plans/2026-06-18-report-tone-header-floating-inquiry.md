# Report-Tone Header and Floating Inquiry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the fixed header and floating franchise inquiry as light editorial report surfaces matching the nationwide opening report modal while preserving all existing behavior.

**Architecture:** Keep component state, section navigation, visibility observers, validation, and API submission unchanged. Add a focused source-contract script first, then replace only presentation markup and Tailwind classes in `Header.tsx` and `FloatingInquiry.tsx`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Radix Sheet, Node.js assertions

---

### Task 1: Define the report-tone UI contract

**Files:**

- Create: `scripts/verify-report-tone-chrome.mjs`

- [ ] **Step 1: Write a failing source-contract test**

Create assertions that require `REPORT NAVIGATION`, `FRANCHISE DESK`, the paper background `bg-[#f6efe3]`, the lacquer accent `bg-[#8f3528]`, and the dotted editorial texture. Require the existing mobile expansion handlers, contact/footer visibility checks, phone link, lead source, and all three inquiry fields. Reject the old full-width dark shell tokens `bg-stone-900`, `bg-[#26140e]/98`, and `bg-[#26140e]/96`.

- [ ] **Step 2: Run the contract and verify RED**

Run:

```bash
node scripts/verify-report-tone-chrome.mjs
```

Expected: FAIL with the first missing report-tone token.

### Task 2: Restyle the header

**Files:**

- Modify: `src/widgets/header/ui/Header.tsx`

- [ ] **Step 1: Replace the dark header shell**

Use a light paper background, subtle transparency before scroll, a stronger solid paper background after scroll, a thin lacquer top rule, a warm border, and a restrained shadow.

- [ ] **Step 2: Rebuild desktop navigation hierarchy**

Add a small `REPORT NAVIGATION` label near the logo, use ink-colored navigation buttons with lacquer hover states, and render the contact button as a lacquer CTA with cream text.

- [ ] **Step 3: Restyle the mobile sheet**

Use the same paper background and dotted pattern, numbered navigation rows, warm dividers, and a lacquer contact CTA while preserving `Sheet` state and section scrolling.

### Task 3: Restyle the floating inquiry

**Files:**

- Modify: `src/features/inquiry/ui/FloatingInquiry.tsx`

- [ ] **Step 1: Rebuild the collapsed mobile card**

Create a compact paper card with a lacquer top rule, `FRANCHISE DESK` label, phone number, and lacquer open button.

- [ ] **Step 2: Rebuild the expanded mobile sheet**

Use a paper shell, dotted texture, editorial title block, warm input fields, compact privacy row, and lacquer submit button. Preserve safe-area padding, collapse behavior, field names, validation, and payload.

- [ ] **Step 3: Rebuild the desktop desk bar**

Create a slim paper report bar with an editorial identity block, single-row fields, privacy checkbox, and lacquer CTA. Preserve the existing responsive breakpoints and all form behavior.

- [ ] **Step 4: Run the contract and verify GREEN**

Run:

```bash
node scripts/verify-report-tone-chrome.mjs
```

Expected: `Report-tone header and floating inquiry contract passed.`

### Task 4: Verify behavior and presentation

**Files:**

- Verify: `src/widgets/header/ui/Header.tsx`
- Verify: `src/features/inquiry/ui/FloatingInquiry.tsx`
- Verify: `scripts/verify-report-tone-chrome.mjs`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/header/ui/Header.tsx src/features/inquiry/ui/FloatingInquiry.tsx
```

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run:

```bash
pnpm build
```

Expected: exit code 0.

- [ ] **Step 3: Inspect desktop and mobile UI**

Run the local app and verify the header at page top and after scrolling, the desktop inquiry bar, the mobile collapsed card, the mobile expanded sheet, and the mobile navigation sheet. Confirm that contact/footer intersection still hides the inquiry.

- [ ] **Step 4: Review the final diff**

Run:

```bash
git diff --check
git diff -- src/widgets/header/ui/Header.tsx src/features/inquiry/ui/FloatingInquiry.tsx scripts/verify-report-tone-chrome.mjs
```

Expected: no whitespace errors and no unrelated behavior changes.
