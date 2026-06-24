# Reviews Warm Paper Stage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the customer-review section into a warm paper layout with a focused dark-brown phone stage while preserving all review assets and responsive behavior.

**Architecture:** Extend the existing `ReviewsSection` source-contract test before changing markup. Replace the section-wide dark campaign background with a restrained paper treatment, wrap the existing phone grid in a dark stage, and neutralize the review-marquee card borders without changing data, image dimensions, marquee order, or animation.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js test runner

---

## File Structure

- Modify `src/widgets/reviews/ui/ReviewsSection.test.mjs`: enforce the warm paper palette, dark phone stage, headline contrast, and existing mobile marquee position.
- Modify `src/widgets/reviews/ui/ReviewsSection.tsx`: restyle the section background, heading, phone stage, labels, and marquee cards.

### Task 1: Define the Reviews Tone Contract

**Files:**

- Modify: `src/widgets/reviews/ui/ReviewsSection.test.mjs`
- Test: `src/widgets/reviews/ui/ReviewsSection.test.mjs`

- [x] **Step 1: Add a failing warm-paper test**

Add this complete test:

```js
test('uses a warm paper surface with a dark phone stage', async () => {
  const source = await readFile(new URL('./ReviewsSection.tsx', import.meta.url), 'utf8');

  for (const token of [
    'bg-[#f0e9df] text-[#2b1b16]',
    'from-[#fffaf2]/92 via-[#f0e9df]/94 to-[#e5d5c1]/96',
    'text-[#9b5b46]',
    'text-[#2b1b16]',
    'text-[#8f3528]',
    'data-review-phone-stage',
    'bg-[#2b1b16]/96',
    'border-[#9b5b46]/45',
    'bg-[#9b5b46]',
    'border-[#d8c8b5]/90 bg-[#fffaf2]',
  ]) {
    assert.ok(source.includes(token), `Missing warm reviews token: ${token}`);
  }

  for (const legacyToken of [
    'bg-[#170c08] text-[#ead8bb]',
    'radial-gradient(circle at 50% 0%, rgba(161, 63, 20, 0.36)',
    'repeating-linear-gradient(90deg, rgba(255, 218, 140, 0.06)',
    'text-[#fff2d8]',
    'bg-[#3b2115]',
    'border-[#d4b45f]/80',
  ]) {
    assert.ok(
      !source.includes(legacyToken),
      `Legacy reviews token must be removed: ${legacyToken}`
    );
  }
});
```

- [x] **Step 2: Run the focused test and verify RED**

Run:

```bash
node --test src/widgets/reviews/ui/ReviewsSection.test.mjs
```

Expected: the existing mobile-order test passes and the new test fails at
`bg-[#f0e9df] text-[#2b1b16]`.

### Task 2: Implement the Warm Header and Paper Background

**Files:**

- Modify: `src/widgets/reviews/ui/ReviewsSection.tsx:93-190`
- Test: `src/widgets/reviews/ui/ReviewsSection.test.mjs`

- [x] **Step 1: Recolor the phone labels**

Replace the label class with:

```tsx
className =
  'inline-flex rounded-md border border-[#fffaf2]/25 bg-[#9b5b46] px-2.5 py-1.5 text-[0.68rem] font-extrabold leading-tight tracking-[-0.01em] text-[#fffaf2] shadow-[0_10px_24px_rgba(43,27,22,0.2)] sm:px-4 sm:py-2 sm:text-sm md:text-base';
```

- [x] **Step 2: Replace the section background**

Use:

```tsx
className = 'relative overflow-hidden bg-[#f0e9df] text-[#2b1b16]';
```

Replace all existing background ornaments before the content wrapper with:

```tsx
<div
  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffaf2]/92 via-[#f0e9df]/94 to-[#e5d5c1]/96"
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute inset-0 opacity-[0.2]"
  style={{
    backgroundImage:
      'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.16) 1px, transparent 0)',
    backgroundSize: '24px 24px',
  }}
  aria-hidden="true"
/>
<div
  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#9b5b46]/45 to-transparent"
  aria-hidden="true"
/>
```

- [x] **Step 3: Recolor the header**

Use:

```tsx
<span className="absolute -left-2 -top-12 hidden text-8xl font-black uppercase tracking-[0.08em] text-[#9b5b46]/8 md:block">
```

```tsx
<p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#9b5b46]">
```

```tsx
<h2 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#2b1b16] md:text-6xl">
  고객들이
  <br />
  <span className="text-[#8f3528]">다시 찾는 볶음우동</span>
</h2>
```

Use `text-[#8f3528]` for the right-side subheading and `text-[#746054]` for its body.

### Task 3: Add the Dark Phone Stage and Neutral Review Cards

**Files:**

- Modify: `src/widgets/reviews/ui/ReviewsSection.tsx:192-238`
- Test: `src/widgets/reviews/ui/ReviewsSection.test.mjs`

- [x] **Step 1: Wrap the phone grid in a dark stage**

Replace the phone-grid wrapper with:

```tsx
<div
  data-review-phone-stage
  className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#9b5b46]/45 bg-[#2b1b16]/96 px-2 pt-8 shadow-[0_30px_80px_rgba(43,27,22,0.28)] sm:px-8 sm:pt-12 lg:min-h-[620px] lg:px-12"
>
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        'radial-gradient(circle at 24% 18%, rgba(155,91,70,0.3), transparent 30%), radial-gradient(circle at 78% 24%, rgba(201,162,77,0.16), transparent 28%)',
    }}
    aria-hidden="true"
  />
  <div className="relative z-10 grid grid-cols-2 items-start justify-items-center gap-1.5 sm:gap-8 lg:gap-16">
    {phoneScreens.map((screen, index) => (
      <PhonePreview
        key={screen.src}
        src={screen.src}
        alt={screen.alt}
        label={screen.label}
        width={screen.width}
        height={screen.height}
        priority={index === 0}
      />
    ))}
  </div>
</div>
```

Keep the existing `PhonePreview` mapping arguments exactly as they are.

- [x] **Step 2: Preserve the marquee position and paper fade**

Keep this wrapper unchanged:

```tsx
className =
  'relative z-20 -mt-12 overflow-hidden pt-20 sm:-mt-56 sm:pt-32 md:-mt-72 md:pt-40 lg:-mt-[26rem] lg:pt-44';
```

Keep the existing paper fade and side fades.

- [x] **Step 3: Neutralize review-card borders**

Use:

```tsx
className =
  'relative flex h-[214px] w-auto shrink-0 overflow-hidden rounded-lg border border-[#d8c8b5]/90 bg-[#fffaf2] shadow-[0_18px_42px_rgba(73,50,41,0.14)] sm:h-[246px] md:h-[282px]';
```

- [x] **Step 4: Run the focused test and verify GREEN**

Run:

```bash
node --test src/widgets/reviews/ui/ReviewsSection.test.mjs
```

Expected: 2 tests pass and 0 fail.

### Task 4: Verify, Commit, and Push

**Files:**

- Verify: `src/widgets/reviews/ui/ReviewsSection.tsx`
- Verify: `src/widgets/reviews/ui/ReviewsSection.test.mjs`
- Modify: `docs/superpowers/plans/2026-06-22-reviews-warm-paper-stage.md`

- [x] **Step 1: Run focused lint**

```bash
pnpm exec eslint src/widgets/reviews/ui/ReviewsSection.tsx src/widgets/reviews/ui/ReviewsSection.test.mjs
```

Expected: exit code 0.

- [x] **Step 2: Run repository Node tests**

```bash
node --test src/widgets/menu/ui/MenuSection.test.mjs src/widgets/menu/ui/normalize-menu-image-path.test.mjs src/widgets/reviews/ui/ReviewsSection.test.mjs src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: 6 tests pass and 0 fail.

- [x] **Step 3: Run production build**

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [x] **Step 4: Review exact scope**

```bash
git diff --check
git diff -- src/widgets/reviews/ui/ReviewsSection.tsx src/widgets/reviews/ui/ReviewsSection.test.mjs
```

Expected: only review-section palette, phone-stage markup, and its contract change. Review data,
image dimensions, marquee animation and responsive ordering remain unchanged.

- [x] **Step 5: Complete the plan, commit, and push**

Change all checkboxes to `[x]`, then run:

```bash
git add docs/superpowers/plans/2026-06-22-reviews-warm-paper-stage.md src/widgets/reviews/ui/ReviewsSection.tsx src/widgets/reviews/ui/ReviewsSection.test.mjs
git commit -m "style: align reviews with warm paper tone"
git push origin develop
```
