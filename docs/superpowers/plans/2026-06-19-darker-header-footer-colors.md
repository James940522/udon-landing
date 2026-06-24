# Darker Header and Footer Colors Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Darken only the header, mobile navigation, and footer backgrounds while preserving all existing typography, controls, borders, effects, and in-progress header sizing changes.

**Architecture:** Keep the change local to the existing `Header` and `Footer` presentational components. Add a source-contract verification script that checks the approved background tokens, rejects the legacy background tokens, and guards the already-present compact larger-header sizing tokens.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4 arbitrary color utilities, Node.js assertions

---

## File Structure

- Create `scripts/verify-darker-header-footer-colors.mjs`: source-contract test for approved and legacy background tokens plus protected header sizing tokens.
- Modify `src/widgets/header/ui/Header.tsx`: replace only the desktop header and mobile sheet background color tokens.
- Modify `src/widgets/footer/ui/Footer.tsx`: replace only the footer root background token.

### Task 1: Add a failing color contract

**Files:**

- Create: `scripts/verify-darker-header-footer-colors.mjs`
- Read: `src/widgets/header/ui/Header.tsx`
- Read: `src/widgets/footer/ui/Footer.tsx`

- [ ] **Step 1: Write the failing source-contract test**

Create `scripts/verify-darker-header-footer-colors.mjs` with:

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const header = await readFile(
  new URL('../src/widgets/header/ui/Header.tsx', import.meta.url),
  'utf8'
);
const footer = await readFile(
  new URL('../src/widgets/footer/ui/Footer.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-[#efe5d4]/98',
  'bg-[#efe5d4]/92',
  'border-l border-[#cdbb9f] bg-[#efe5d4] p-0',
  'border-t border-[#ddcfbb] bg-[#efe5d4]/94 p-6',
]) {
  assert.ok(header.includes(token), `Missing darker header token: ${token}`);
}

assert.ok(
  footer.includes('<footer id="footer" className="bg-[#170c08] pt-16 pb-8">'),
  'Footer must use the approved dark brown background'
);

for (const legacyToken of [
  'bg-[#f6efe3]/98',
  'bg-[#f6efe3]/92',
  'bg-[#f6efe3] p-0',
  'bg-[#f6efe3]/94',
]) {
  assert.ok(
    !header.includes(legacyToken),
    `Legacy header background must be removed: ${legacyToken}`
  );
}

assert.ok(!footer.includes('bg-stone-900'), 'Legacy footer background must be removed');

for (const protectedToken of [
  'flex h-14 items-center',
  'md:h-16',
  'h-11 w-auto',
  'md:h-14',
  'py-1.5 text-base',
  'px-5 py-2 font-heading text-base',
]) {
  assert.ok(
    header.includes(protectedToken),
    `Protected header sizing token changed: ${protectedToken}`
  );
}

console.log('Darker header and footer color contract passed.');
```

- [ ] **Step 2: Run the contract to verify it fails**

Run:

```bash
node scripts/verify-darker-header-footer-colors.mjs
```

Expected: FAIL with `Missing darker header token: bg-[#efe5d4]/98`.

### Task 2: Apply the approved background colors

**Files:**

- Modify: `src/widgets/header/ui/Header.tsx:46-50,131-133,174-175`
- Modify: `src/widgets/footer/ui/Footer.tsx:4-6`
- Test: `scripts/verify-darker-header-footer-colors.mjs`

- [ ] **Step 1: Replace only the header background tokens**

In `src/widgets/header/ui/Header.tsx`, make these exact replacements:

```tsx
isScrolled
  ? 'bg-[#efe5d4]/98 shadow-[0_12px_34px_rgba(38,20,14,0.14)] backdrop-blur-xl'
  : 'bg-[#efe5d4]/92 shadow-[0_8px_24px_rgba(38,20,14,0.1)] backdrop-blur-md';
```

```tsx
className =
  'z-[120] w-[88vw] max-w-sm gap-0 overflow-hidden border-l border-[#cdbb9f] bg-[#efe5d4] p-0 text-[#26140e] [&_[data-slot=sheet-close]]:rounded-full [&_[data-slot=sheet-close]]:border [&_[data-slot=sheet-close]]:border-[#cdbb9f] [&_[data-slot=sheet-close]]:bg-[#fffaf1] [&_[data-slot=sheet-close]]:p-2 [&_[data-slot=sheet-close]]:text-[#8f3528]';
```

```tsx
<div className="relative border-t border-[#ddcfbb] bg-[#efe5d4]/94 p-6">
```

Do not alter any other header class, especially the existing height, logo size, navigation text size, opacity, blur, shadow, border, or button tokens.

- [ ] **Step 2: Replace only the footer root background**

In `src/widgets/footer/ui/Footer.tsx`, set the root element to:

```tsx
<footer id="footer" className="bg-[#170c08] pt-16 pb-8">
```

Do not alter footer typography, links, borders, spacing, or hover colors.

- [ ] **Step 3: Run the focused contract**

Run:

```bash
node scripts/verify-darker-header-footer-colors.mjs
```

Expected: PASS with `Darker header and footer color contract passed.`

- [ ] **Step 4: Review the focused diff**

Run:

```bash
git diff --check -- scripts/verify-darker-header-footer-colors.mjs src/widgets/header/ui/Header.tsx src/widgets/footer/ui/Footer.tsx
git diff -- scripts/verify-darker-header-footer-colors.mjs src/widgets/header/ui/Header.tsx src/widgets/footer/ui/Footer.tsx
```

Expected: no whitespace errors; the functional diff contains only the new contract and four approved background-token replacements. The pre-existing uncommitted header sizing diff remains untouched.

### Task 3: Run project verification

**Files:**

- Verify: `scripts/verify-darker-header-footer-colors.mjs`
- Verify: `src/widgets/header/ui/Header.tsx`
- Verify: `src/widgets/footer/ui/Footer.tsx`

- [ ] **Step 1: Run the focused contract again**

Run:

```bash
node scripts/verify-darker-header-footer-colors.mjs
```

Expected: PASS with `Darker header and footer color contract passed.`

- [ ] **Step 2: Run ESLint on the changed source files**

Run:

```bash
pnpm exec eslint src/widgets/header/ui/Header.tsx src/widgets/footer/ui/Footer.tsx scripts/verify-darker-header-footer-colors.mjs
```

Expected: exit code 0.

- [ ] **Step 3: Run the production build**

Run:

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [ ] **Step 4: Confirm final workspace scope**

Run:

```bash
git status --short
```

Expected: the new verification script and the two requested component edits are visible alongside unrelated pre-existing user changes. Do not stage or commit the implementation because `Header.tsx` already contains overlapping uncommitted user work; report the completed files and verification results instead.
