# Startup Process Editorial Details Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add restrained editorial framing, step labels, and a desktop-only dotted process path to the existing light-wood franchise-process section.

**Architecture:** Extend the existing source-contract test before changing the component. Implement all decoration as semantic-neutral, pointer-events-none markup inside `StartupProcessSection`, preserving the current data, motion, responsive grid, background, and CTA.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js test runner

---

## File Structure

- Modify `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`: verify the approved editorial details and responsive visibility.
- Modify `src/widgets/startup-process/ui/StartupProcessSection.tsx`: add decorative header, frame corners, dotted path, and card step labels.

### Task 1: Add the Failing Editorial Contract

**Files:**
- Modify: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`
- Test: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`

- [x] **Step 1: Add a focused failing test**

```js
test('adds restrained editorial process decorations', async () => {
  const source = await readFile(new URL('./StartupProcessSection.tsx', import.meta.url), 'utf8');

  assert.ok(source.includes('6 STEPS TO OPEN'));
  assert.ok(source.includes('data-decoration="editorial-frame"'));
  assert.ok(source.includes('data-decoration="process-path"'));
  assert.ok(source.includes('hidden md:block'), 'Large decorations must stay hidden on mobile');
  assert.ok(source.includes('STEP {process.number}'));
  assert.ok(source.includes('border-dashed'));
  assert.ok(source.includes('pointer-events-none'));
});
```

- [x] **Step 2: Run the focused test and verify RED**

Run:

```bash
node --test src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: the existing background test passes and the new editorial-decoration test fails at `6 STEPS TO OPEN`.

### Task 2: Implement the Editorial Details

**Files:**
- Modify: `src/widgets/startup-process/ui/StartupProcessSection.tsx`
- Test: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`

- [x] **Step 1: Add desktop-only corner framing**

Add two decorative wrappers immediately after the background:

```tsx
<div
  data-decoration="editorial-frame"
  className="pointer-events-none absolute inset-0 hidden md:block"
  aria-hidden="true"
>
  <div className="absolute left-8 top-10 h-24 w-24 border-l border-t border-[#c9a24d]/45 lg:left-12 lg:top-14" />
  <div className="absolute bottom-10 right-8 h-24 w-24 border-b border-r border-[#c9a24d]/45 lg:bottom-14 lg:right-12" />
</div>
```

- [x] **Step 2: Add the header eyebrow line**

Place this above the existing franchise badge:

```tsx
<div className="mx-auto mb-4 flex max-w-md items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.32em] text-[#8f3528] sm:text-xs">
  <span className="h-px flex-1 bg-[#c9a24d]/65" aria-hidden="true" />
  <span>6 STEPS TO OPEN</span>
  <span className="h-px flex-1 bg-[#c9a24d]/65" aria-hidden="true" />
</div>
```

- [x] **Step 3: Add the desktop dotted path behind the cards**

Make the grid wrapper `relative`, then add this before the grid:

```tsx
<div
  data-decoration="process-path"
  className="pointer-events-none absolute inset-x-[7%] top-[25%] bottom-[25%] hidden md:block"
  aria-hidden="true"
>
  <div className="absolute inset-x-0 top-0 border-t border-dashed border-[#a66732]/45" />
  <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-[#a66732]/45" />
  <div className="absolute bottom-0 right-0 top-0 border-r border-dashed border-[#a66732]/45" />
  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#8f3528]/70" />
  <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-[#8f3528]/70" />
</div>
```

Keep the card grid above the path with `relative z-10`.

- [x] **Step 4: Add a small step label to every card image**

Add this at the upper-right of the image:

```tsx
<div className="absolute right-2 top-2 md:right-3 md:top-3">
  <span className="inline-flex rounded-sm border border-[#a66732]/35 bg-[#fff8eb]/88 px-2 py-1 text-[0.58rem] font-black tracking-[0.14em] text-[#493229] shadow-[0_6px_16px_rgba(73,50,41,0.12)] backdrop-blur-sm md:text-[0.65rem]">
    STEP {process.number}
  </span>
</div>
```

- [x] **Step 5: Run the focused test and verify GREEN**

Run:

```bash
node --test src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: 2 tests pass and 0 fail.

### Task 3: Verify and Commit

**Files:**
- Verify: `src/widgets/startup-process/ui/StartupProcessSection.tsx`
- Verify: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`

- [x] **Step 1: Run focused lint and whitespace checks**

Run:

```bash
pnpm exec eslint src/widgets/startup-process/ui/StartupProcessSection.tsx src/widgets/startup-process/ui/StartupProcessSection.test.mjs
git diff --check
```

Expected: exit code 0.

- [x] **Step 2: Run the production build**

Run:

```bash
pnpm build
```

Expected: successful Next.js production build.

- [x] **Step 3: Review scope**

Confirm:

- `6 STEPS TO OPEN`, STEP labels, dotted path, and corner frame are present.
- Dotted path and corner frame are hidden below `md`.
- Existing background, card data, motion values, number badges, and CTA remain unchanged.
- No files outside the startup-process test/component and this plan are changed.

- [ ] **Step 4: Commit the implementation**

```bash
git add src/widgets/startup-process/ui/StartupProcessSection.tsx src/widgets/startup-process/ui/StartupProcessSection.test.mjs docs/superpowers/plans/2026-06-19-startup-process-editorial-details.md
git commit -m "feat: add editorial details to startup process"
```
