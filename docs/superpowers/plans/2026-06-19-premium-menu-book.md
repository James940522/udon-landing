# Premium Menu Book Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark, background-image-driven menu section with a clean cream and beige premium menu-book layout.

**Architecture:** Preserve the existing menu data and category state while removing the single-brand selector and its redundant state. Rebuild only the `MenuSection` presentation with an editorial header, horizontally scrollable category navigation, category summary, and a responsive image-card grid.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js test runner

---

### Task 1: Define the menu-book design contract

**Files:**

- Create: `src/widgets/menu/ui/MenuSection.test.mjs`

- [ ] **Step 1: Write the failing source-contract test**

The test must require the cream section background, editorial labels, horizontal category
navigation, selected-category count, and responsive `2 / 3 / 4` column grid. It must reject the
old `sec6-bg.jpg`, brand-selection copy, and scale-up card hover.

- [ ] **Step 2: Verify RED**

Run:

```bash
node --test src/widgets/menu/ui/MenuSection.test.mjs
```

Expected: FAIL because the old section still contains the background image and lacks the new
menu-book tokens.

### Task 2: Rebuild the menu section

**Files:**

- Modify: `src/widgets/menu/ui/MenuSection.tsx`
- Create: `src/widgets/menu/ui/normalize-menu-image-path.ts`
- Create: `src/widgets/menu/ui/normalize-menu-image-path.test.mjs`

- [ ] **Step 1: Remove redundant single-brand behavior**

Remove `activeBrand`, the brand-change handler, the logo selector, and the scroll-to-top helper.
Keep the existing menu data and use its first brand as the current brand.

- [ ] **Step 2: Build the editorial header**

Use a `#f7f0e4` section background, a thin top rule, an index label, a left-aligned title, and a
right-side introduction. Do not render a background image.

- [ ] **Step 3: Build category navigation and summary**

Render all category buttons in a horizontally scrollable border row. Use dark brown text and an
underlined `#9b5b46` active state, then show the selected category and item count below.

- [ ] **Step 4: Build the premium card grid**

Use two columns on mobile, three on medium screens, and four on extra-large screens. Give cards
an ivory background, thin beige border, restrained shadow, two-digit index, and translate-only
hover motion.

- [ ] **Step 5: Normalize menu image paths**

Normalize category folders to NFD and normalize filenames for the asset groups stored in NFD.
Render menu card images as unoptimized static assets so Next.js does not reject the normalized
paths through its image proxy.

- [ ] **Step 6: Verify GREEN**

Run:

```bash
node --test src/widgets/menu/ui/MenuSection.test.mjs src/widgets/menu/ui/normalize-menu-image-path.test.mjs
```

Expected: PASS.

### Task 3: Verify the application

**Files:**

- Verify: `src/widgets/menu/ui/MenuSection.tsx`
- Verify: `src/widgets/menu/ui/MenuSection.test.mjs`
- Verify: `src/widgets/menu/ui/normalize-menu-image-path.ts`
- Verify: `src/widgets/menu/ui/normalize-menu-image-path.test.mjs`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/menu/ui/MenuSection.tsx src/widgets/menu/ui/MenuSection.test.mjs src/widgets/menu/ui/normalize-menu-image-path.ts src/widgets/menu/ui/normalize-menu-image-path.test.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run the production build**

Run:

```bash
pnpm build
```

Expected: exit code 0.

- [ ] **Step 3: Inspect the rendered page**

Open the local page and verify the menu at desktop and mobile widths. Confirm the background
image and brand selector are absent, category tabs remain usable, no card overflows, and rendered
menu images have non-zero natural dimensions.

- [ ] **Step 4: Review the diff**

Run:

```bash
git diff --check
git diff -- src/widgets/menu/ui/MenuSection.tsx src/widgets/menu/ui/MenuSection.test.mjs
```

Expected: no whitespace errors and no unrelated file changes.
