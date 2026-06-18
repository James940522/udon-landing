# Startup Benefit Hanji Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the startup-benefit section’s dark decorative background with the supplied hanji texture, recolor the retained content for the paper surface, and add restrained entrance motion without changing the `無` stamp animation.

**Architecture:** Convert the supplied PNG into a repository WebP asset and reference it directly from the section background. Keep the existing data table and `StampMark` component, remove decorative background nodes and data, and add motion only to the retained heading, description, table rows, and footnote.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions, `cwebp`

---

## File Structure

- Create `public/new-asset/background/startup-benefit-hanji.webp`: optimized hanji texture used as the section background.
- Create `scripts/verify-startup-benefit-hanji.mjs`: source and asset contract test, including a whitespace-normalized `StampMark` preservation check.
- Modify `src/widgets/startup-benefit/ui/StartupBenefitSection.tsx`: remove background decoration, apply the hanji palette, and add content/row motion.

### Task 1: Define the Hanji Section Contract

**Files:**

- Create: `scripts/verify-startup-benefit-hanji.mjs`
- Test: `scripts/verify-startup-benefit-hanji.mjs`

- [ ] **Step 1: Write the failing contract test**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const componentUrl = new URL(
  '../src/widgets/startup-benefit/ui/StartupBenefitSection.tsx',
  import.meta.url
);
const assetUrl = new URL(
  '../public/new-asset/background/startup-benefit-hanji.webp',
  import.meta.url
);
const source = await readFile(componentUrl, 'utf8');

const stampStart = source.indexOf('function StampMark');
const stampEnd = source.indexOf('\n\nexport default function StartupBenefitSection');
assert.notEqual(stampStart, -1, 'StampMark must remain in the section');
assert.notEqual(stampEnd, -1, 'StartupBenefitSection must follow StampMark');

const expectedStampMark = `function StampMark({ index, active }: { index: number; active: boolean }) {
  return (
    <motion.span
      className="relative inline-flex h-8 w-14 rotate-[-5deg] items-center justify-center rounded-[5px] border-2 border-[#8f3528] text-lg font-black leading-none text-[#8f3528] shadow-[0_0_18px_rgba(221,38,54,0.28)] sm:h-10 sm:w-16 sm:text-2xl md:h-12 md:w-20 md:text-3xl"
      initial={{ opacity: 0, y: -28, scale: 1.7, rotate: -18 }}
      animate={
        active
          ? {
              opacity: 1,
              y: 0,
              scale: [1.7, 0.86, 1.04, 1],
              rotate: [-18, -5, -8, -5],
            }
          : { opacity: 0, y: -28, scale: 1.7, rotate: -18 }
      }
      transition={{
        delay: index * 0.18,
        duration: 0.48,
        ease: [0.2, 0.95, 0.2, 1],
      }}
    >
      <span className="absolute inset-[3px] rounded-[3px] border border-[#8f3528]/80" />
      無
    </motion.span>
  );
}`;

assert.equal(
  source.slice(stampStart, stampEnd).replace(/\s+/g, ''),
  expectedStampMark.replace(/\s+/g, ''),
  'StampMark markup and animation must remain unchanged'
);

assert.ok(
  source.includes('/new-asset/background/startup-benefit-hanji.webp'),
  'The section must use the hanji WebP background'
);
assert.ok(!source.includes('backgroundColumns'), 'Vertical marquee decoration must be removed');
assert.ok(
  !source.includes('radial-gradient(circle at 78% 18%'),
  'The old dark gradient background must be removed'
);
assert.ok(
  !source.includes('bg-linear-to-r from-transparent via-[#c9a24d]/70'),
  'The decorative top gold rule must be removed'
);
assert.ok(source.includes('<motion.tr'), 'Benefit rows must animate into view');
assert.ok(source.includes('useReducedMotion'), 'Motion-reduction preferences must be respected');

const asset = await readFile(assetUrl);
assert.equal(asset.subarray(0, 4).toString('ascii'), 'RIFF', 'Background asset must be WebP');
assert.equal(asset.subarray(8, 12).toString('ascii'), 'WEBP', 'Background asset must be WebP');

console.log('Startup benefit hanji contract passed.');
```

- [ ] **Step 2: Run the test and verify the first failure**

Run: `node scripts/verify-startup-benefit-hanji.mjs`

Expected: FAIL because `startup-benefit-hanji.webp` does not exist or because the component does not reference it.

### Task 2: Convert the Supplied Background Asset

**Files:**

- Create: `public/new-asset/background/startup-benefit-hanji.webp`
- Test: `scripts/verify-startup-benefit-hanji.mjs`

- [ ] **Step 1: Create the asset directory**

Run: `mkdir -p public/new-asset/background`

- [ ] **Step 2: Convert the supplied PNG to WebP**

Run:

```bash
cwebp -q 84 -m 6 -mt "/Users/james/Library/Mobile Documents/com~apple~CloudDocs/볶음우동/new 랜딩/ChatGPT Image 2026년 6월 18일 오후 01_46_23.png" -o public/new-asset/background/startup-benefit-hanji.webp
```

Expected: a valid 1672×941 WebP file substantially smaller than the PNG.

- [ ] **Step 3: Run the contract test again**

Run: `node scripts/verify-startup-benefit-hanji.mjs`

Expected: FAIL because the component has not yet referenced the asset.

### Task 3: Restyle and Animate the Section

**Files:**

- Modify: `src/widgets/startup-benefit/ui/StartupBenefitSection.tsx`
- Test: `scripts/verify-startup-benefit-hanji.mjs`

- [ ] **Step 1: Add reduced-motion support**

Change the import and initialize the preference:

```tsx
import { motion, useInView, useReducedMotion } from 'framer-motion';

const reduceMotion = useReducedMotion();
```

Do not change any line inside `StampMark`.

- [ ] **Step 2: Remove decorative background data and nodes**

Delete the `backgroundColumns` array, old gradient background `<div>`, three gold rule `<div>` elements, and vertical marquee container. Keep the section content and data unchanged.

- [ ] **Step 3: Apply the hanji section background and heading palette**

Use:

```tsx
<section
  id="startup-benefit"
  ref={sectionRef}
  className="relative overflow-hidden bg-[#f7f0e4] bg-cover bg-center bg-no-repeat py-20 text-[#26140e] md:py-28"
  style={{
    backgroundImage: "url('/new-asset/background/startup-benefit-hanji.webp')",
  }}
>
```

Set the eyebrow to `#8f3528`, title to `#26140e`, and description to `#725744`. Keep their layout and use short opacity/vertical entrance transitions whose `y` value becomes `0` when `reduceMotion` is true.

- [ ] **Step 4: Recolor the table and add row motion**

Use a translucent cream outer panel with a subtle brown shadow. Use `#3b2115` for the header, category, amount, and total-label cells; `#fff8eb` for content cells; and low-opacity `#c9a24d` borders.

Replace each body `<tr>` with:

```tsx
<motion.tr
  key={row.category}
  className="border-t border-[#c9a24d]/28"
  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{
    duration: reduceMotion ? 0.01 : 0.45,
    delay: reduceMotion ? 0 : index * 0.06,
    ease: [0.22, 1, 0.36, 1],
  }}
>
```

The `StampMark` invocation remains:

```tsx
<StampMark index={index} active={tableInView} />
```

- [ ] **Step 5: Animate the footnote**

Convert the footnote to `motion.p`, use `#725744`, and reveal it after the table with a short opacity/vertical transition that respects `reduceMotion`.

- [ ] **Step 6: Run the focused contract**

Run: `node scripts/verify-startup-benefit-hanji.mjs`

Expected: PASS with `Startup benefit hanji contract passed.`

### Task 4: Verify Rendering and Build

**Files:**

- Verify: `src/widgets/startup-benefit/ui/StartupBenefitSection.tsx`
- Verify: `public/new-asset/background/startup-benefit-hanji.webp`

- [ ] **Step 1: Run formatting and focused lint**

Run:

```bash
pnpm exec prettier --check src/widgets/startup-benefit/ui/StartupBenefitSection.tsx scripts/verify-startup-benefit-hanji.mjs docs/superpowers/plans/2026-06-18-startup-benefit-hanji-background.md
pnpm exec eslint src/widgets/startup-benefit/ui/StartupBenefitSection.tsx scripts/verify-startup-benefit-hanji.mjs
```

Expected: both commands exit with code 0.

- [ ] **Step 2: Run the production build**

Run: `pnpm build`

Expected: Next.js production build exits with code 0.

- [ ] **Step 3: Inspect desktop and mobile rendering**

Start the local application, open the home page, and verify:

- the hanji texture covers the full section;
- no vertical marquee or gold framing remains;
- title, description, table, and footnote remain readable at desktop and mobile widths;
- table rows reveal in order;
- `無` stamps retain the existing drop/scale/rotate animation.

- [ ] **Step 4: Commit only this feature’s files**

```bash
git add public/new-asset/background/startup-benefit-hanji.webp scripts/verify-startup-benefit-hanji.mjs src/widgets/startup-benefit/ui/StartupBenefitSection.tsx docs/superpowers/plans/2026-06-18-startup-benefit-hanji-background.md
git commit -m "feat: restyle startup benefit with hanji background"
```
