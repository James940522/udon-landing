# About Us Editorial Frame Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add restrained editorial framing above and below the bright ABOUT US section without changing its content or cards.

**Architecture:** Keep the existing photo, overlays, content container, and motion components intact. Add four decorative sibling layers inside the section: a top lacquer rule, a top index row, a dotted texture, and a bottom divider with a centered paper ellipse.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js assertions

---

### Task 1: Define the editorial-frame contract

**Files:**

- Create: `scripts/verify-about-us-editorial-frame.mjs`

- [ ] **Step 1: Write a failing source-contract test**

Require these tokens in `BrandIntroSection.tsx`:

```text
01 / BRAND STORY
TODAY UDON ARCHIVE
absolute inset-x-0 top-0 z-20 h-1 bg-[#8f3528]
bg-[#c9a24d]
radial-gradient(circle at 1px 1px, rgba(143,53,40,0.16) 1px, transparent 0)
backgroundSize: '22px 22px'
absolute inset-x-0 bottom-0 z-20 h-px bg-[#c9a24d]/70
bottom-[-4.5rem]
h-24
rounded-[50%]
bg-[#fff8eb]
```

- [ ] **Step 2: Verify RED**

Run:

```bash
node scripts/verify-about-us-editorial-frame.mjs
```

Expected: FAIL because the index label does not yet exist.

### Task 2: Add the top and bottom frame

**Files:**

- Modify: `src/widgets/brand-intro/ui/BrandIntroSection.tsx`

- [ ] **Step 1: Add the top lacquer rule and index row**

Immediately inside the section, add a 4px lacquer rule. Add an absolutely positioned
`max-w-6xl` row with the approved labels and gold dots.

- [ ] **Step 2: Add the dotted texture**

Add a pointer-events-none absolute layer with:

```tsx
style={{
  backgroundImage:
    'radial-gradient(circle at 1px 1px, rgba(143,53,40,0.16) 1px, transparent 0)',
  backgroundSize: '22px 22px',
}}
```

Use low opacity so the image and text remain dominant.

- [ ] **Step 3: Add the lower divider and paper curve**

Add a gold bottom line and a centered absolute ellipse using `bottom-[-4.5rem]`, `h-24`,
`rounded-[50%]`, and `bg-[#fff8eb]`.

- [ ] **Step 4: Verify GREEN**

Run:

```bash
node scripts/verify-about-us-editorial-frame.mjs
```

Expected: `ABOUT US editorial frame contract passed.`

### Task 3: Verify the application

**Files:**

- Verify: `src/widgets/brand-intro/ui/BrandIntroSection.tsx`
- Verify: `scripts/verify-about-us-editorial-frame.mjs`

- [ ] **Step 1: Run both ABOUT US contracts**

Run:

```bash
node scripts/verify-bright-expanded-about-us.mjs
node scripts/verify-about-us-editorial-frame.mjs
```

Expected: both contracts pass.

- [ ] **Step 2: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/brand-intro/ui/BrandIntroSection.tsx scripts/verify-about-us-editorial-frame.mjs
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
git diff -- src/widgets/brand-intro/ui/BrandIntroSection.tsx scripts/verify-about-us-editorial-frame.mjs
```

Expected: no whitespace errors and no changes to the cards, copy, or other sections.
