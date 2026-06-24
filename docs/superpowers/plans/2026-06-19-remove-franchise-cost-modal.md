# FranchiseCostModal Removal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the franchise cost popup and open only the nationwide store-list modal after the existing one-second delay.

**Architecture:** Replace the two-item promotion queue in `Home` with one boolean state dedicated to `AchievementModal`. Preserve the achievement modal's local-storage suppression behavior, delete the unused franchise-cost feature, and add a source-contract script that verifies the simplified flow and deleted files.

**Tech Stack:** Next.js 16, React 19, TypeScript, Node.js assertions

---

### Task 1: Define the single-modal startup contract

**Files:**

- Create: `scripts/verify-franchise-cost-modal-removal.mjs`

- [ ] **Step 1: Write the failing source-contract test**

Create the following script:

```js
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const homePage = await readFile(new URL('../src/app/page.tsx', import.meta.url), 'utf8');

for (const token of [
  'const [showAchievementModal, setShowAchievementModal] = useState(false);',
  "const hideAchievementModal = localStorage.getItem('hideModal_achievement');",
  'setShowAchievementModal(!hideAchievementModal || parseInt(hideAchievementModal) < now);',
  'isOpen={showAchievementModal}',
  'onClose={() => setShowAchievementModal(false)}',
]) {
  assert.ok(homePage.includes(token), `Missing single achievement-modal flow token: ${token}`);
}

for (const legacyToken of [
  'FranchiseCostModal',
  'PromotionModalId',
  'promotionModalQueue',
  'activePromotionModal',
  'handlePromotionModalClose',
  'hideModal_franchise-cost',
]) {
  assert.ok(
    !homePage.includes(legacyToken),
    `Legacy modal queue token must be removed: ${legacyToken}`
  );
}

for (const deletedFeatureFile of [
  '../src/features/franchise-cost-modal/index.ts',
  '../src/features/franchise-cost-modal/ui/FranchiseCostModal.tsx',
]) {
  await assert.rejects(
    access(new URL(deletedFeatureFile, import.meta.url)),
    (error) => error?.code === 'ENOENT',
    `Franchise cost feature file must be deleted: ${deletedFeatureFile}`
  );
}

console.log('Franchise cost modal removal contract passed.');
```

- [ ] **Step 2: Run the contract and verify RED**

Run:

```bash
node scripts/verify-franchise-cost-modal-removal.mjs
```

Expected: FAIL with `Missing single achievement-modal flow token` because the home page still uses the promotion queue.

### Task 2: Remove the franchise-cost flow

**Files:**

- Modify: `src/app/page.tsx`
- Delete: `src/features/franchise-cost-modal/index.ts`
- Delete: `src/features/franchise-cost-modal/ui/FranchiseCostModal.tsx`

- [ ] **Step 1: Replace the modal queue with achievement state**

Remove the `FranchiseCostModal` import and `PromotionModalId` type. Replace the queue state and active item with:

```tsx
const [showAchievementModal, setShowAchievementModal] = useState(false);
```

Update the startup effect to preserve only the achievement suppression key:

```tsx
useEffect(() => {
  const achievementModalTimer = setTimeout(() => {
    const hideAchievementModal = localStorage.getItem('hideModal_achievement');
    const now = new Date().getTime();

    setShowAchievementModal(!hideAchievementModal || parseInt(hideAchievementModal) < now);
  }, 1000);

  return () => clearTimeout(achievementModalTimer);
}, []);
```

Delete `handlePromotionModalClose`. In `handleNavigateToContact`, replace the queue reset with:

```tsx
setShowAchievementModal(false);
```

Remove the `FranchiseCostModal` render and update the achievement render to:

```tsx
<AchievementModal isOpen={showAchievementModal} onClose={() => setShowAchievementModal(false)} />
```

- [ ] **Step 2: Delete the obsolete feature files**

Delete:

```text
src/features/franchise-cost-modal/index.ts
src/features/franchise-cost-modal/ui/FranchiseCostModal.tsx
```

- [ ] **Step 3: Run the contract and verify GREEN**

Run:

```bash
node scripts/verify-franchise-cost-modal-removal.mjs
```

Expected: `Franchise cost modal removal contract passed.`

### Task 3: Verify the application

**Files:**

- Verify: `src/app/page.tsx`
- Verify: `scripts/verify-franchise-cost-modal-removal.mjs`

- [ ] **Step 1: Run focused lint**

Run:

```bash
pnpm exec eslint src/app/page.tsx scripts/verify-franchise-cost-modal-removal.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run the production build**

Run:

```bash
pnpm build
```

Expected: exit code 0.

- [ ] **Step 3: Confirm all franchise-cost references are gone**

Run:

```bash
rg -n "FranchiseCostModal|franchise-cost-modal|hideModal_franchise-cost|promotionModalQueue|PromotionModalId" src
```

Expected: exit code 1 with no matches.

- [ ] **Step 4: Review the final diff**

Run:

```bash
git diff --check
git diff -- src/app/page.tsx src/features/franchise-cost-modal scripts/verify-franchise-cost-modal-removal.mjs
```

Expected: no whitespace errors and only the planned modal-flow changes.
