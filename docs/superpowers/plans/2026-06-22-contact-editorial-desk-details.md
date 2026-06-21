# Contact Editorial Desk Details Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add clear editorial consultation-desk details to the warm contact section without changing its palette, form behavior, or neighboring sections.

**Architecture:** Extend the existing source contract first, then add decorative markup around the current two-panel layout. Keep all decorations non-interactive and hidden from assistive technology, while retaining the section index, response stamp, and form label on mobile.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Node.js assertions

---

### Task 1: Define the editorial-detail contract

**Files:**

- Modify: `scripts/verify-contact-warm-paper.mjs`

- [ ] **Step 1: Add required editorial tokens**

Require the following source tokens:

```text
data-contact-section-index
FRANCHISE INQUIRY · 01
data-contact-editorial-frame
data-contact-vertical-label
START YOUR STORE
data-contact-panel-connector
data-contact-response-stamp
24H
RESPONSE
data-contact-form-label
APPLICATION FORM
hidden md:block
lg:flex
sm:absolute sm:right-5 sm:top-5
pointer-events-none
aria-hidden="true"
```

- [ ] **Step 2: Verify RED**

Run:

```bash
node scripts/verify-contact-warm-paper.mjs
```

Expected: FAIL with the first missing editorial token.

### Task 2: Add section-level editorial framing

**Files:**

- Modify: `src/widgets/contact-form/ui/ContactFormSection.tsx`

- [ ] **Step 1: Add desktop corner frames and vertical label**

Add a non-interactive desktop-only frame layer with thin terracotta L corners and a low-opacity
`START YOUR STORE` vertical label behind the content.

- [ ] **Step 2: Add the section index**

Wrap the existing grid in the current max-width container and add a centered
`FRANCHISE INQUIRY · 01` index with short terracotta rules above it.

- [ ] **Step 3: Add the desktop panel connector**

Make the panel grid relative and add a desktop-only dashed connector and arrow behind both cards.
Give both cards an explicit foreground z-index.

### Task 3: Add panel-specific editorial details

**Files:**

- Modify: `src/widgets/contact-form/ui/ContactFormSection.tsx`

- [ ] **Step 1: Add the response stamp**

Add a slightly rotated `24H RESPONSE` circular stamp to the brand panel. Keep it in normal flow on
mobile and position it at the upper-right from the small breakpoint upward.

- [ ] **Step 2: Add the form label**

Add a small `APPLICATION FORM` label and rule between the form card's top bar and the existing form.

- [ ] **Step 3: Preserve behavior and accessibility**

Keep the form, handlers, phone SMS link, copy, palette, and neighboring sections unchanged. Mark
every new decorative element with `pointer-events-none` and `aria-hidden="true"`.

- [ ] **Step 4: Verify GREEN**

Run:

```bash
node scripts/verify-contact-warm-paper.mjs
```

Expected: `Contact warm paper contract passed.`

### Task 4: Verify and commit the implementation

**Files:**

- Verify: `src/widgets/contact-form/ui/ContactFormSection.tsx`
- Verify: `scripts/verify-contact-warm-paper.mjs`
- Verify: `docs/superpowers/plans/2026-06-22-contact-editorial-desk-details.md`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/widgets/contact-form/ui/ContactFormSection.tsx scripts/verify-contact-warm-paper.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run current source contracts**

Run every `scripts/verify-*.mjs` contract except the known stale
`scripts/verify-report-tone-chrome.mjs`, whose header color expectation predates the existing
`#efe5d4` header.

Expected: all current contracts pass.

- [ ] **Step 3: Run Node tests and production build**

Run:

```bash
node --test
pnpm build
```

Expected: all Node tests pass and the build exits 0.

- [ ] **Step 4: Review the diff**

Run:

```bash
git diff --check
git diff -- src/widgets/contact-form/ui/ContactFormSection.tsx scripts/verify-contact-warm-paper.mjs docs/superpowers/plans/2026-06-22-contact-editorial-desk-details.md
```

Expected: no whitespace errors and only the approved editorial decorations and contract changes.

- [ ] **Step 5: Commit**

Commit the plan, contract, and component changes with:

```text
style: add editorial details to contact section
```

Do not push without the repository security approval phrase required for this external remote.
