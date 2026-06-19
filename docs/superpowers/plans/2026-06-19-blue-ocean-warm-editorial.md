# Blue Ocean Warm Editorial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recolor the blue-ocean section from an isolated black campaign banner into a warm cream, terracotta, and gold editorial section while preserving its copy, content structure, and motion.

**Architecture:** Keep `BlueOceanAdvantageSection` as one component and change only its visual tokens and decorative layers. Add a focused Node.js source-contract test first, then replace the dark overlay, warning colors, panels, cards, and final message while retaining one dark brown quote card as the section’s visual anchor.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

## File Structure

- Create `scripts/verify-blue-ocean-warm-editorial.mjs`: enforce the approved warm palette, reject the legacy black/red/amber campaign tokens, and protect the existing content and responsive structure.
- Modify `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`: apply the warm editorial palette without changing data, copy, layout, or animation timing.

### Task 1: Define the Warm Editorial Contract

**Files:**

- Create: `scripts/verify-blue-ocean-warm-editorial.mjs`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Write the failing source-contract test**

Create the file with this complete content:

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(
  new URL('../src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx', import.meta.url),
  'utf8'
);

for (const token of [
  'bg-[#ead9aa]',
  'brightness-[0.92]',
  'saturate-[0.72]',
  'bg-[#f7eddb]/68',
  'from-[#fff8eb]/82',
  'via-[#e8d4b8]/72',
  'to-[#c99676]/62',
  'bg-[#9b5b46]/92',
  'text-[#2b1b16]',
  'text-[#8f3528]',
  'bg-[#e5c8b5]/80',
  'bg-[#fff8eb]/82',
  'bg-[#fff8eb]/88',
  'bg-[#2b1b16]/96',
  'bg-[#ead9aa]/72',
]) {
  assert.ok(source.includes(token), `Missing warm editorial token: ${token}`);
}

for (const legacyToken of [
  'bg-stone-900',
  'bg-black/75',
  'from-black/50',
  'to-black/60',
  'bg-red-600/90',
  'text-red-400',
  'text-red-300',
  'text-amber-400',
  'text-amber-300',
  'text-gray-300',
  'from-stone-900/95',
  'bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20',
]) {
  assert.ok(!source.includes(legacyToken), `Legacy campaign token must be removed: ${legacyToken}`);
}

for (const copy of [
  '경쟁없이 살아남는 법',
  '현시점 배달업계 최대의 블루오션',
  "'볶음우동'",
  '현재 자영업자 사장님들의 최대 고민',
  '오늘은 볶음우동</span>이 해답입니다',
  "'겹치지 않는 것'",
  '수익을 지키면서 성장할 수 있는 새로운 기회',
]) {
  assert.ok(source.includes(copy), `Existing copy must remain unchanged: ${copy}`);
}

for (const structure of [
  'painPoints.map((point, index)',
  'benefits.map((benefit, index)',
  'grid grid-cols-1 md:grid-cols-3',
  '<br className="sm:hidden" />',
  'delay: 1.7',
]) {
  assert.ok(source.includes(structure), `Existing structure must remain unchanged: ${structure}`);
}

console.log('Blue ocean warm editorial contract passed.');
```

- [x] **Step 2: Run the contract and verify RED**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: FAIL with `Missing warm editorial token: bg-[#ead9aa]`.

- [x] **Step 3: Commit the failing contract**

```bash
git add scripts/verify-blue-ocean-warm-editorial.mjs
git commit -m "test: define warm blue ocean palette"
```

### Task 2: Replace the Dark Background and Headline Palette

**Files:**

- Modify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx:50-116`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Replace the section and background classes**

Change the section class to:

```tsx
className="relative overflow-hidden bg-[#ead9aa] py-20 text-[#2b1b16] md:py-32"
```

Change the image class to:

```tsx
className="object-cover brightness-[0.92] saturate-[0.72]"
```

Replace the two dark overlays with:

```tsx
<div className="absolute inset-0 bg-[#f7eddb]/68" aria-hidden="true" />
<div
  className="absolute inset-0 bg-gradient-to-b from-[#fff8eb]/82 via-[#e8d4b8]/72 to-[#c99676]/62"
  aria-hidden="true"
/>
```

- [x] **Step 2: Recolor the warning badge and headline**

Use these complete class replacements:

```tsx
className="mb-6 inline-block rounded-full border border-[#8f3528]/25 bg-[#9b5b46]/92 px-6 py-3 shadow-[0_12px_30px_rgba(73,50,41,0.16)] backdrop-blur-sm"
```

```tsx
className="text-sm font-bold tracking-wider text-[#fff8eb] md:text-base"
```

```tsx
className="mb-6 text-3xl font-bold leading-tight text-[#2b1b16] sm:text-4xl md:text-5xl lg:text-6xl"
```

Change the two headline highlights to:

```tsx
<span className="text-[#a66732]">현시점 배달업계 최대의 블루오션</span>
```

```tsx
<span className="text-[#8f3528]">'볶음우동'</span>
```

Change the subtitle class to:

```tsx
className="text-lg font-semibold text-[#8f3528] md:text-xl"
```

- [x] **Step 3: Run the contract and confirm it still fails later**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: FAIL on a later missing token such as `bg-[#e5c8b5]/80`; it must no longer fail on `bg-[#ead9aa]`.

### Task 3: Recolor the Problem and Benefit Cards

**Files:**

- Modify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx:118-237`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Recolor the problem panel**

Replace its outer panel class with:

```tsx
className="rounded-3xl border border-[#8f3528]/20 bg-[#e5c8b5]/80 p-8 shadow-[0_24px_70px_rgba(73,50,41,0.16)] backdrop-blur-sm md:p-12"
```

Use `text-[#8f3528]` for the panel heading.

Replace each problem card class with:

```tsx
className="rounded-xl border border-[#c9a24d]/35 bg-[#fff8eb]/82 p-6 shadow-[0_14px_34px_rgba(73,50,41,0.1)]"
```

Use the following classes inside each card:

```tsx
<div className="mb-3 text-lg font-bold text-[#8f3528]">{point.problem}</div>
<div className="mb-3 text-sm leading-relaxed text-[#725744]">{point.impact}</div>
<div className="border-t border-[#c9a24d]/30 pt-3 text-sm font-semibold text-[#9b5b46]">
  → {point.result}
</div>
```

Use this class structure for the paragraph below the cards:

```tsx
<p className="text-center text-base leading-relaxed text-[#493229] md:text-lg">
```

Keep its highlighted conclusion with:

```tsx
<span className="font-semibold text-[#8f3528]">
```

- [x] **Step 2: Recolor the solution heading**

Use:

```tsx
className="mb-4 text-3xl font-bold text-[#2b1b16] md:text-4xl"
```

```tsx
<span className="text-[#a66732]">오늘은 볶음우동</span>이 해답입니다
```

```tsx
<p className="text-lg text-[#725744]">
```

- [x] **Step 3: Replace each benefit card with a light editorial card**

Use this card class:

```tsx
className="group relative rounded-2xl border-2 border-[#c9a24d]/38 bg-[#fff8eb]/88 p-8 shadow-[0_22px_55px_rgba(73,50,41,0.14)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8f3528]/35"
```

Remove the inline `backgroundImage` style and remove the decorative flame-gradient child entirely.

Replace `whileHover` with:

```tsx
whileHover={{
  boxShadow: '0 26px 60px rgba(73, 50, 41, 0.18)',
}}
```

Use these card content classes:

```tsx
<span className="text-5xl font-light text-[#c9a24d]/24 transition-colors duration-300 group-hover:text-[#c9a24d]/38 md:text-6xl">
```

```tsx
<span className="inline-block rounded-full border border-[#c9a24d]/45 bg-[#ead9aa]/65 px-3 py-1 text-xs font-semibold text-[#8f3528]">
```

```tsx
className="mb-4 text-xl font-bold text-[#2b1b16] transition-colors duration-300 group-hover:text-[#8f3528] md:text-2xl"
```

```tsx
<p className="text-sm leading-relaxed text-[#725744] md:text-base">
```

- [x] **Step 4: Run the contract and confirm only the closing panels remain**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: FAIL on `bg-[#2b1b16]/96` or `bg-[#ead9aa]/72`.

### Task 4: Preserve One Dark Quote Card and Lighten the Final Message

**Files:**

- Modify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx:239-297`
- Test: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Restyle the quote card as the only dark anchor**

Use:

```tsx
className="relative rounded-3xl border-4 border-[#c9a24d]/45 bg-[#2b1b16]/96 p-8 shadow-[0_28px_75px_rgba(43,27,22,0.28)] backdrop-blur-md md:p-12"
```

Use `text-[#c9a24d]/28` for both quote marks.

Use this class for the quotation:

```tsx
className="relative z-10 text-center text-2xl font-bold leading-relaxed text-[#fff8eb] md:text-3xl lg:text-4xl"
```

Use:

```tsx
<span className="text-[#d9ad55]">'겹치지 않는 것'</span>
```

Replace the old amber/orange glow with:

```tsx
<div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-[#8f3528]/12 via-transparent to-[#c9a24d]/10" />
```

- [x] **Step 2: Restyle the final message as a light panel**

Use:

```tsx
className="rounded-2xl border border-[#c9a24d]/45 bg-[#ead9aa]/72 p-8 shadow-[0_20px_50px_rgba(73,50,41,0.13)] backdrop-blur-sm md:p-10"
```

Use these text classes:

```tsx
<p className="mb-4 text-center text-base leading-relaxed text-[#493229] md:text-lg lg:text-xl">
```

```tsx
<span className="text-xl font-bold text-[#8f3528] md:text-2xl">
```

```tsx
<p className="text-center text-base leading-relaxed text-[#725744] md:text-lg">
```

```tsx
<span className="font-semibold text-[#a66732]">
```

- [x] **Step 3: Run the contract and verify GREEN**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: `Blue ocean warm editorial contract passed.`

- [x] **Step 4: Commit the implementation**

```bash
git add src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx
git commit -m "feat: warm blue ocean section palette"
```

### Task 5: Verify the Complete Change

**Files:**

- Verify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`
- Verify: `scripts/verify-blue-ocean-warm-editorial.mjs`

- [x] **Step 1: Run the focused contract**

Run:

```bash
node scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: `Blue ocean warm editorial contract passed.`

- [x] **Step 2: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected: exit code 0 with no lint errors.

- [x] **Step 3: Run the production build**

Run:

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [x] **Step 4: Review scope and whitespace**

Run:

```bash
git diff --check
git diff -- src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-warm-editorial.mjs
```

Expected:

- No whitespace errors.
- Only the approved palette and decorative treatments change.
- `painPoints`, `benefits`, all Korean copy, responsive grid classes, mobile line breaks, and animation timings remain unchanged.
- No image asset or dependency changes are present.

- [x] **Step 5: Commit the verified plan state**

```bash
git add docs/superpowers/plans/2026-06-19-blue-ocean-warm-editorial.md
git commit -m "docs: plan warm blue ocean section"
```
