# About Us Muted Tone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce glare in the bright ABOUT US section while retaining its editorial structure and readable contrast.

**Architecture:** Preserve the existing section markup, dimensions, index frame, dotted texture, copy, and animation. Add a focused source-contract test, then change only image brightness, overlay colors and opacity, value-card background and shadow, and the bottom paper-curve color.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js assertions

---

### Task 1: Define the muted-tone contract

**Files:**

- Create: `scripts/verify-about-us-muted-tone.mjs`
- Modify: `scripts/verify-bright-expanded-about-us.mjs`

- [ ] **Step 1: Write a failing source-contract test**

Require:

```text
brightness-[0.92]
bg-[#f6efe3]/38
from-[#fff8eb]/62
via-[#d7c09b]/58
to-[#6f3028]/52
bg-[#e7d6bb]/84
hover:bg-[#ead9aa]/92
shadow-[0_20px_50px_rgba(59,33,21,0.22)]
bg-[#dfc9a7]
```

Reject:

```text
brightness-[1.08]
bg-[#f6efe3]/54
from-[#fff8eb]/80
via-[#ead9aa]/66
to-[#8f3528]/42
bg-[#fff8eb]/82
hover:bg-[#fffaf1]/92
shadow-[0_20px_50px_rgba(59,33,21,0.16)]
```

- [ ] **Step 2: Verify RED**

Run:

```bash
node scripts/verify-about-us-muted-tone.mjs
```

Expected: FAIL with the first missing muted-tone token.

- [ ] **Step 3: Update the existing bright-section contract**

Replace its old brightness, overlay, card, hover, shadow, and bottom-curve expectations with the
approved muted tokens so the existing regression check describes the new final design.

### Task 2: Reduce the visual brightness

**Files:**

- Modify: `src/widgets/brand-intro/ui/BrandIntroSection.tsx`

- [ ] **Step 1: Reduce image and overlay brightness**

Replace the image and overlay tokens with the approved muted values while preserving
`saturate-[0.82]`.

- [ ] **Step 2: Mute the value cards**

Use `bg-[#e7d6bb]/84`, `hover:bg-[#ead9aa]/92`, and
`shadow-[0_20px_50px_rgba(59,33,21,0.22)]`.

- [ ] **Step 3: Mute the bottom paper curve**

Replace only its background with `bg-[#dfc9a7]`.

- [ ] **Step 4: Verify GREEN**

Run:

```bash
node scripts/verify-about-us-muted-tone.mjs
```

Expected: `ABOUT US muted tone contract passed.`

### Task 3: Verify the application

**Files:**

- Verify: `src/widgets/brand-intro/ui/BrandIntroSection.tsx`
- Verify: `scripts/verify-about-us-muted-tone.mjs`

- [ ] **Step 1: Run focused contracts**

Run:

```bash
node scripts/verify-about-us-muted-tone.mjs
node scripts/verify-about-us-editorial-frame.mjs
node scripts/verify-bright-expanded-about-us.mjs
```

Expected: all three contracts pass.

- [ ] **Step 2: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/brand-intro/ui/BrandIntroSection.tsx scripts/verify-about-us-muted-tone.mjs
```

Expected: exit code 0.

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
git diff -- src/widgets/brand-intro/ui/BrandIntroSection.tsx scripts/verify-about-us-muted-tone.mjs
```

Expected: no whitespace errors and only the approved tone values change.
