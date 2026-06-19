# Startup Process Light Wood Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the franchise-process section background with the supplied light wood image in WebP format and restyle every text, badge, card, and CTA color with the site's warm brand palette.

**Architecture:** Keep the existing `StartupProcessSection` data, motion behavior, responsive grid, and links intact. Add one optimized background asset and one source-contract test that verifies the asset format and the required light-section color treatment.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js test runner, `cwebp`

---

## File Structure

- Create `public/new-asset/background/startup-process-light-wood.webp`: optimized light wood background.
- Create `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`: source and WebP format contract.
- Modify `src/widgets/startup-process/ui/StartupProcessSection.tsx`: background and brand-palette presentation only.

### Task 1: Add the Failing Startup Process Visual Contract

**Files:**
- Create: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`
- Test: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`

- [x] **Step 1: Write the failing test**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('uses the light wood WebP and the light brand palette', async () => {
  const componentUrl = new URL('./StartupProcessSection.tsx', import.meta.url);
  const source = await readFile(componentUrl, 'utf8');

  assert.ok(
    source.includes('/new-asset/background/startup-process-light-wood.webp'),
    'The section must use the supplied light wood WebP background',
  );
  assert.ok(source.includes("backgroundSize: 'cover'"));
  assert.ok(source.includes("backgroundRepeat: 'no-repeat'"));
  assert.ok(source.includes('text-[#2b1b16]'), 'The heading must use brand ink');
  assert.ok(source.includes('bg-[#493229]'), 'The section label must use deep brown');
  assert.ok(source.includes('text-[#c9a24d]'), 'Gold must be used for branded accents');
  assert.ok(source.includes('bg-[#8f3528]'), 'Number badges must use lacquer red');
  assert.ok(source.includes('bg-[#fff8eb]/92'), 'Cards must use a translucent cream surface');
  assert.ok(!source.includes('bg-black/30'), 'The old dark overlay must be removed');
  assert.ok(!source.includes('text-white drop-shadow'), 'The old white heading treatment must be removed');

  const asset = await readFile(
    new URL('../../../../public/new-asset/background/startup-process-light-wood.webp', import.meta.url),
  );
  assert.equal(asset.subarray(0, 4).toString('ascii'), 'RIFF');
  assert.equal(asset.subarray(8, 12).toString('ascii'), 'WEBP');
});
```

- [x] **Step 2: Run the test and verify the expected failure**

Run:

```bash
node --test src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: FAIL at the new background-path assertion because the section still references `/asset/bg-1/sec5-bg.png`.

### Task 2: Convert the Background and Restyle the Section

**Files:**
- Create: `public/new-asset/background/startup-process-light-wood.webp`
- Modify: `src/widgets/startup-process/ui/StartupProcessSection.tsx`
- Test: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`

- [x] **Step 1: Convert the supplied PNG to WebP**

Run:

```bash
cwebp -q 84 -m 6 '/Users/james/Library/Mobile Documents/com~apple~CloudDocs/볶음우동/new 랜딩/0b80e225-7182-4579-ba3b-df7cb6964364.png' -o public/new-asset/background/startup-process-light-wood.webp
```

Expected: a valid 1672×941 WebP file in `public/new-asset/background/`.

- [x] **Step 2: Replace the background treatment**

Use the new asset with `cover`, centered positioning, no repeat, and a subtle cream overlay:

```tsx
<div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/new-asset/background/startup-process-light-wood.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-[#fff8eb]/28" aria-hidden="true" />
</div>
```

- [x] **Step 3: Apply the approved brand palette**

Update presentation classes without changing content or motion:

```tsx
<span className="rounded-full bg-[#493229] px-6 py-2 text-sm font-bold tracking-wider text-[#c9a24d]">
  FRANCHISE PROCESS
</span>

<h2 className="mb-6 text-4xl font-black text-[#2b1b16] md:text-6xl">
  가맹절차
</h2>

<div className="inline-block rounded-lg border border-[#a66732]/25 bg-[#fff8eb]/72 px-8 py-4 shadow-[0_14px_34px_rgba(73,50,41,0.12)] backdrop-blur-[1px]">
  <p className="text-xl font-black leading-relaxed text-[#4a2412] md:text-2xl">
    상담부터 오픈까지, 체계적인 6단계 완벽 시스템
  </p>
</div>
<div className="mx-auto mt-8 h-2 w-24 rounded-full bg-[#8f3528]" />
```

Use these card and CTA classes:

```tsx
className="group h-full overflow-hidden rounded-lg border border-[#a66732]/32 bg-[#fff8eb]/92 shadow-[0_18px_45px_rgba(73,50,41,0.14)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#8f3528]/45 hover:shadow-[0_24px_55px_rgba(73,50,41,0.2)]"

className="flex h-9 w-9 items-center justify-center rounded-md bg-[#8f3528] text-sm font-black text-[#fff2d8] shadow-[0_10px_24px_rgba(143,53,40,0.28)] md:h-12 md:w-12 md:text-lg"

className="mb-2 break-keep text-base font-black leading-snug text-[#2b1b16] md:text-xl"

className="text-xs font-bold leading-5 text-[#6e5745] md:text-sm md:leading-6"

className="mb-6 text-lg font-black text-[#4a2412] md:text-xl"

className="inline-block rounded-full bg-[#26140e] px-8 py-4 text-lg font-black text-[#c9a24d] shadow-[0_16px_38px_rgba(38,20,14,0.24)] transition-all duration-300 hover:scale-105 hover:text-[#e2b957] hover:shadow-[0_22px_48px_rgba(38,20,14,0.3)]"
```

- [x] **Step 4: Run the focused test and verify it passes**

Run:

```bash
node --test src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: PASS, 1 test and 0 failures.

- [x] **Step 5: Inspect the focused diff**

Run:

```bash
git diff -- src/widgets/startup-process/ui/StartupProcessSection.tsx src/widgets/startup-process/ui/StartupProcessSection.test.mjs
git status --short public/new-asset/background/startup-process-light-wood.webp
```

Expected: only the planned startup-process source, test, and WebP asset are shown.

### Task 3: Verify the Production Result

**Files:**
- Verify: `src/widgets/startup-process/ui/StartupProcessSection.tsx`
- Verify: `src/widgets/startup-process/ui/StartupProcessSection.test.mjs`
- Verify: `public/new-asset/background/startup-process-light-wood.webp`

- [x] **Step 1: Verify the generated asset**

Run:

```bash
file public/new-asset/background/startup-process-light-wood.webp
sips -g pixelWidth -g pixelHeight -g format public/new-asset/background/startup-process-light-wood.webp
```

Expected: WebP, 1672×941.

- [x] **Step 2: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/startup-process/ui/StartupProcessSection.tsx src/widgets/startup-process/ui/StartupProcessSection.test.mjs
```

Expected: exit code 0 with no errors.

- [x] **Step 3: Run the production build**

Run:

```bash
pnpm build
```

Expected: exit code 0 and a successful Next.js production build.

- [x] **Step 4: Review requirement coverage**

Confirm all of the following:

- The supplied image is stored and referenced as WebP.
- The background is light, centered, cover-sized, and non-repeating.
- Header label, heading, subtitle, rule, card text, number badges, closing copy, and CTA all use the site's warm brand palette.
- Existing content, six process cards, animations, responsive grid, and telephone link remain unchanged.
- Existing menu and review worktree changes remain untouched.

- [x] **Step 5: Commit only the startup-process implementation**

```bash
git add public/new-asset/background/startup-process-light-wood.webp src/widgets/startup-process/ui/StartupProcessSection.tsx src/widgets/startup-process/ui/StartupProcessSection.test.mjs docs/superpowers/plans/2026-06-19-startup-process-light-wood.md
git commit -m "feat: refresh startup process with light wood"
```
