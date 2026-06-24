# Achievement Total Store Count Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the nationwide opening report total equal the number of valid stores rendered in its store index.

**Architecture:** Use the fetched `stores` array as the modal's single source of truth. Remove the independent count hook from the modal so stale or differently parsed count responses cannot override the list count.

**Tech Stack:** Next.js 16, React 19, TypeScript, Node.js assertion scripts

---

### Task 1: Add a store-count regression contract

**Files:**

- Modify: `scripts/verify-achievement-modal-report.mjs`

- [ ] **Step 1: Write the failing assertions**

Add assertions requiring `const displayStoreCount = stores.length;` and rejecting both the `useStoreCount` import and invocation.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node scripts/verify-achievement-modal-report.mjs`

Expected: FAIL because the modal still contains `useStoreCount`.

### Task 2: Use the store list as the single source of truth

**Files:**

- Modify: `src/features/achievement-modal/ui/AchievementModal.tsx`

- [ ] **Step 1: Remove the independent count dependency**

Delete the `useStoreCount` import and hook invocation.

- [ ] **Step 2: Calculate the displayed total from the list**

Set:

```ts
const displayStoreCount = stores.length;
```

- [ ] **Step 3: Run the focused test and verify GREEN**

Run: `node scripts/verify-achievement-modal-report.mjs`

Expected: `Achievement modal opening report contract passed.`

### Task 3: Verify the application

**Files:**

- Verify only

- [ ] **Step 1: Run lint**

Run: `pnpm lint`

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run: `pnpm build`

Expected: exit code 0 with `/api/stores` and the application compiled successfully.
