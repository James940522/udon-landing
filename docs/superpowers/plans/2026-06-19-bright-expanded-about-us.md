# Bright Expanded About Us Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the ABOUT US section and replace its heavy black treatment with a warm, bright photo-led report tone.

**Architecture:** Keep the existing image, content, responsive three-card grid, and Framer Motion behavior. Add a source-contract test first, then change only section sizing, background treatment, content width, typography colors, and card presentation in `BrandIntroSection.tsx`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

### Task 1: Define the bright ABOUT US contract

**Files:**

- Create: `scripts/verify-bright-expanded-about-us.mjs`

- [ ] **Step 1: Write a failing source-contract test**

Require these tokens in `BrandIntroSection.tsx`:

```text
min-h-[clamp(48rem,92vh,64rem)]
items-center
bg-[#ead9aa]
py-24
md:py-32
lg:py-40
brightness-[1.08]
saturate-[0.82]
bg-[#f6efe3]/54
from-[#fff8eb]/80
via-[#ead9aa]/66
to-[#8f3528]/42
max-w-6xl
bg-[#fff8eb]/82
text-[#26140e]
text-[#725744]
```

Reject these legacy dark tokens:

```text
bg-amber-900
bg-black/60
from-black/40
to-black/50
bg-[#fff8eb]/10
text-gray-300
```

- [ ] **Step 2: Verify RED**

Run:

```bash
node scripts/verify-bright-expanded-about-us.mjs
```

Expected: FAIL with the first missing bright ABOUT US token.

### Task 2: Expand and brighten the section

**Files:**

- Modify: `src/widgets/brand-intro/ui/BrandIntroSection.tsx`

- [ ] **Step 1: Expand the section shell**

Use:

```tsx
className =
  'relative flex min-h-[clamp(48rem,92vh,64rem)] items-center overflow-hidden bg-[#ead9aa] py-24 text-[#26140e] md:py-32 lg:py-40';
```

- [ ] **Step 2: Replace the dark image treatment**

Apply `brightness-[1.08] saturate-[0.82]` to the image. Replace both black overlays with:

```tsx
<div className="absolute inset-0 bg-[#f6efe3]/54" aria-hidden="true" />
<div
  className="absolute inset-0 bg-gradient-to-b from-[#fff8eb]/80 via-[#ead9aa]/66 to-[#8f3528]/42"
  aria-hidden="true"
/>
```

- [ ] **Step 3: Restyle content and cards**

Change the content width to `max-w-6xl`, increase the main spacing to `space-y-10 md:space-y-14`,
use ink and lacquer colors for the heading, and use:

```text
rounded-[24px]
border-[#c9a24d]/45
bg-[#fff8eb]/82
p-6 md:p-7
shadow-[0_20px_50px_rgba(59,33,21,0.16)]
```

for the value cards. Keep all content and animations unchanged.

- [ ] **Step 4: Verify GREEN**

Run:

```bash
node scripts/verify-bright-expanded-about-us.mjs
```

Expected: `Bright expanded ABOUT US contract passed.`

### Task 3: Verify the application

**Files:**

- Verify: `src/widgets/brand-intro/ui/BrandIntroSection.tsx`
- Verify: `scripts/verify-bright-expanded-about-us.mjs`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/brand-intro/ui/BrandIntroSection.tsx scripts/verify-bright-expanded-about-us.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run:

```bash
pnpm build
```

Expected: exit code 0. Do not run the development server.

- [ ] **Step 3: Review the diff**

Run:

```bash
git diff --check
git diff -- src/widgets/brand-intro/ui/BrandIntroSection.tsx scripts/verify-bright-expanded-about-us.mjs
```

Expected: no whitespace errors, unchanged copy and animation behavior, and no edits to the other
planned sections.
