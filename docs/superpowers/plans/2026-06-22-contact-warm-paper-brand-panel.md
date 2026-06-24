# Contact Warm Paper Brand Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the startup-contact section with the warm paper palette while preserving a high-contrast dark brand message panel and all form behavior.

**Architecture:** Add a focused source-contract script that protects the contact form’s functional API and requires the approved visual tokens. Then change only `ContactFormSection` presentation: paper background, footer-transition gradient, dark message panel, ivory form card, neutral input borders, and existing terracotta interaction states.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

## File Structure

- Create `scripts/verify-contact-warm-paper.mjs`: verify the new palette and preserve form fields, API path, SMS link, and submission copy.
- Modify `src/widgets/contact-form/ui/ContactFormSection.tsx`: restyle backgrounds and controls without changing component state or handlers.

### Task 1: Define the Contact-Section Contract

**Files:**

- Create: `scripts/verify-contact-warm-paper.mjs`
- Test: `scripts/verify-contact-warm-paper.mjs`

- [x] **Step 1: Create the failing source contract**

Create:

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/contact-form/ui/ContactFormSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-[#f0e9df] py-16 text-[#2b1b16]',
  'from-[#fffaf2]/94 via-[#f0e9df]/96 to-[#d8c8b5]/92',
  'from-transparent via-transparent to-[#170c08]/38',
  'data-contact-brand-panel',
  'bg-[#2b1b16]/96',
  'absolute inset-x-0 top-0 h-1 bg-[#9b5b46]',
  'bg-[#9b5b46] px-4 py-2',
  'text-[#fffaf2]',
  'text-[#d9ad55]',
  'bg-[#fffaf2] px-5 py-3',
  'data-contact-form-card',
  'border-[#d8c8b5]/90 bg-[#fffaf2]/96',
  'border-[#d8c8b5] bg-[#fffaf2]',
  'border-[#d8c8b5]/90 bg-[#eadfce]/82',
]) {
  assert.ok(source.includes(token), `Missing warm contact token: ${token}`);
}

for (const legacyToken of [
  'bg-[#170c08] py-16 text-[#fff2d8]',
  'linear-gradient(135deg, rgba(255, 229, 172, 0.08)',
  'repeating-linear-gradient(135deg, rgba(255, 222, 151, 0.16)',
  'from-[#fff2d8]/94 via-[#f4dfb4]/92 to-[#e3bf78]/88',
  'border border-[#a66732] bg-[#fff8eb]',
  'border-[#a66732]/70 bg-[#f6e6bc]',
]) {
  assert.ok(!source.includes(legacyToken), `Legacy contact token must be removed: ${legacyToken}`);
}

for (const contract of [
  "fetch('/api/leads'",
  'sms:010-9923-9502',
  "name: ''",
  "phone: ''",
  "email: ''",
  "storeType: ''",
  "region: ''",
  "hasStore: ''",
  "message: ''",
  "isSubmitting ? '전송 중...' : '창업 문의 신청하기'",
  'privacyAgree: true',
  'hp,',
]) {
  assert.ok(source.includes(contract), `Contact behavior must remain unchanged: ${contract}`);
}

console.log('Contact warm paper contract passed.');
```

- [x] **Step 2: Run the contract and verify RED**

```bash
node scripts/verify-contact-warm-paper.mjs
```

Expected: FAIL with `Missing warm contact token: bg-[#f0e9df] py-16 text-[#2b1b16]`.

### Task 2: Replace the Section Background and Brand Panel

**Files:**

- Modify: `src/widgets/contact-form/ui/ContactFormSection.tsx:85-143`
- Test: `scripts/verify-contact-warm-paper.mjs`

- [x] **Step 1: Replace the section and decorative background**

Use:

```tsx
className = 'relative overflow-hidden bg-[#f0e9df] py-16 text-[#2b1b16] md:py-24';
```

Replace all background ornament nodes before the content grid with:

```tsx
<div
  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffaf2]/94 via-[#f0e9df]/96 to-[#d8c8b5]/92"
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute inset-0 opacity-[0.18]"
  style={{
    backgroundImage:
      'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.16) 1px, transparent 0)',
    backgroundSize: '24px 24px',
  }}
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#170c08]/38"
  aria-hidden="true"
/>
```

- [x] **Step 2: Restyle the brand panel**

Use:

```tsx
className =
  'relative mx-auto w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-[#9b5b46]/45 bg-[#2b1b16]/96 p-6 shadow-[0_30px_80px_rgba(43,27,22,0.28)] backdrop-blur-sm md:p-8';
```

Add `data-contact-brand-panel` to the panel and insert:

```tsx
<div className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]" aria-hidden="true" />
```

Use these inner classes:

```tsx
<span className="mb-4 inline-flex rounded-full bg-[#9b5b46] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#fffaf2]">
```

```tsx
<h2 className="text-4xl font-black leading-[1.12] text-[#fffaf2] md:text-6xl">
```

Use `text-[#d9ad55]` on both `오늘은` and `볶음우동`. Use `text-[#d8c8b5]` for the paragraph.

- [x] **Step 3: Restyle the phone CTA**

Use:

```tsx
className =
  'mt-6 inline-flex items-center gap-3 rounded-md bg-[#fffaf2] px-5 py-3 text-3xl font-black text-[#8f3528] shadow-[0_18px_44px_rgba(0,0,0,0.28)] transition-transform hover:scale-[1.02] hover:bg-[#f0e9df]';
```

### Task 3: Restyle the Form Surface and Neutral Controls

**Files:**

- Modify: `src/widgets/contact-form/ui/ContactFormSection.tsx:145-327`
- Test: `scripts/verify-contact-warm-paper.mjs`

- [x] **Step 1: Restyle the form card**

Add `data-contact-form-card` and use:

```tsx
className =
  'relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.5rem] border border-[#d8c8b5]/90 bg-[#fffaf2]/96 p-5 shadow-[0_30px_80px_rgba(73,50,41,0.18)] backdrop-blur-[2px] md:p-6';
```

Insert this before the form:

```tsx
<div className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]" aria-hidden="true" />
```

- [x] **Step 2: Neutralize text inputs, textarea, and inactive option buttons**

Replace every exact:

```tsx
border border-[#a66732] bg-[#fff8eb]
```

with:

```tsx
border border-[#d8c8b5] bg-[#fffaf2]
```

Keep focus borders, focus rings, text colors, selected button styles, handlers, names, and values unchanged.

- [x] **Step 3: Restyle the privacy notice**

Use:

```tsx
className = 'rounded-md border border-[#d8c8b5]/90 bg-[#eadfce]/82 p-4';
```

- [x] **Step 4: Run the contract and verify GREEN**

```bash
node scripts/verify-contact-warm-paper.mjs
```

Expected: `Contact warm paper contract passed.`

### Task 4: Verify, Commit, and Push

**Files:**

- Verify: `src/widgets/contact-form/ui/ContactFormSection.tsx`
- Verify: `scripts/verify-contact-warm-paper.mjs`
- Modify: `docs/superpowers/plans/2026-06-22-contact-warm-paper-brand-panel.md`

- [x] **Step 1: Run focused lint**

```bash
pnpm exec eslint src/widgets/contact-form/ui/ContactFormSection.tsx scripts/verify-contact-warm-paper.mjs
```

Expected: exit code 0.

- [x] **Step 2: Run source contracts and Node tests**

```bash
for test in scripts/verify-*.mjs; do
  if [ "$(basename "$test")" = "verify-report-tone-chrome.mjs" ]; then
    continue
  fi
  node "$test"
done
node --test src/widgets/menu/ui/MenuSection.test.mjs src/widgets/menu/ui/normalize-menu-image-path.test.mjs src/widgets/reviews/ui/ReviewsSection.test.mjs src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: all current contracts except the pre-existing stale `verify-report-tone-chrome.mjs` contract
pass, and 6 Node tests pass. That legacy contract still expects header color `#f6efe3`, which commit
`153fcb0` previously changed to `#efe5d4`; this contact-section task does not modify header scope.

- [x] **Step 3: Run production build**

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [x] **Step 4: Review exact scope**

```bash
git diff --check
git diff -- src/widgets/contact-form/ui/ContactFormSection.tsx scripts/verify-contact-warm-paper.mjs
```

Expected: only contact-section presentation and its contract change. Form state, event handlers, API path,
SMS link, field names, submission copy, reviews, and footer remain unchanged.

- [x] **Step 5: Complete the plan and commit**

Change all checkboxes to `[x]`, then run:

```bash
git add docs/superpowers/plans/2026-06-22-contact-warm-paper-brand-panel.md scripts/verify-contact-warm-paper.mjs src/widgets/contact-form/ui/ContactFormSection.tsx
git commit -m "style: align contact section with warm paper tone"
```

- [ ] **Step 6: Push after external-remote approval**

After the user explicitly re-approves sending repository contents to the external GitHub remote:

```bash
git push origin develop
```
