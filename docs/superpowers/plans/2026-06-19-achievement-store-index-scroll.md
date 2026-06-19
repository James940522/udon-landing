# Achievement Store Index Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the opening-report header and inquiry card fixed while making only the growing store list vertically scrollable.

**Architecture:** Preserve the existing `BaseModal` structure and store data flow. Add a focused source-contract test, then apply a responsive maximum height, vertical overflow, and overscroll containment directly to the store `<ol>`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js assertions

---

### Task 1: Define the store-list scrolling contract

**Files:**

- Create: `scripts/verify-achievement-store-index-scroll.mjs`

- [ ] **Step 1: Write the failing test**

Read `AchievementModal.tsx`, isolate the opening `<ol>` tag, and require:

```text
max-h-[clamp(12rem,32vh,24rem)]
overflow-y-auto
overscroll-contain
```

Also assert that `STORE INDEX` appears before the `<ol>` and `FRANCHISE INQUIRY` appears after
its closing tag.

- [ ] **Step 2: Verify RED**

Run:

```bash
node scripts/verify-achievement-store-index-scroll.mjs
```

Expected: FAIL because the list does not yet include `overflow-y-auto`.

### Task 2: Make only the store rows scroll

**Files:**

- Modify: `src/features/achievement-modal/ui/AchievementModal.tsx`

- [ ] **Step 1: Add the list-only scroll styles**

Change the store `<ol>` class to:

```tsx
className="grid max-h-[clamp(12rem,32vh,24rem)] grid-cols-1 gap-x-8 overflow-y-auto overscroll-contain border-t border-[#8f3528] pr-1 sm:grid-cols-2 sm:pr-2"
```

Do not move `STORE INDEX`, `FRANCHISE INQUIRY`, loading UI, empty UI, or store sorting logic.

- [ ] **Step 2: Verify GREEN**

Run:

```bash
node scripts/verify-achievement-store-index-scroll.mjs
```

Expected: `Achievement store index scroll contract passed.`

### Task 3: Verify the application

**Files:**

- Verify: `src/features/achievement-modal/ui/AchievementModal.tsx`
- Verify: `scripts/verify-achievement-store-index-scroll.mjs`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/features/achievement-modal/ui/AchievementModal.tsx scripts/verify-achievement-store-index-scroll.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run:

```bash
pnpm build
```

Expected: exit code 0.

- [ ] **Step 3: Review the diff**

Run:

```bash
git diff --check
git diff -- src/features/achievement-modal/ui/AchievementModal.tsx scripts/verify-achievement-store-index-scroll.mjs
```

Expected: no whitespace errors, the existing 20-store copy remains intact, and only the list
receives scroll-related classes.
