# Blue Ocean Legacy Dark Restore Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the Blue Ocean section to the dark campaign design that existed immediately before commit `72d5d48`.

**Architecture:** Keep the component structure, copy, data arrays, and animations intact. Replace only the visual treatment with the exact legacy version and protect it with a source-contract test.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS utilities, Node.js assertions

---

### Task 1: Define the legacy dark contract

**Files:**

- Create: `scripts/verify-blue-ocean-legacy-dark.mjs`
- Test: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`

- [ ] **Step 1: Write the failing contract**

Create a Node assertion script that requires the legacy dark tokens:

```js
for (const token of [
  'bg-stone-900',
  'bg-black/75',
  'from-black/50',
  'to-black/60',
  'bg-red-600/90',
  'text-red-400',
  'text-amber-400',
  'text-gray-300',
  'from-stone-900/95',
]) {
  assert.ok(source.includes(token), `Missing legacy dark Blue Ocean token: ${token}`);
}
```

It must also reject the current warm tokens `bg-[#ead9aa]`, `bg-[#f7eddb]/48`,
`bg-[#9b5b46]/92`, `bg-[#e5c8b5]/80`, and `bg-[#fffaf2]/94`.

- [ ] **Step 2: Verify the contract fails**

Run: `node scripts/verify-blue-ocean-legacy-dark.mjs`

Expected: FAIL because the current section does not contain `bg-stone-900`.

### Task 2: Restore the component

**Files:**

- Modify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`

- [ ] **Step 1: Restore the source**

Use `72d5d48^:src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx` as the
exact source of truth. Preserve HTML-safe apostrophe and quote entities so current ESLint rules pass.

- [ ] **Step 2: Verify the dark contract**

Run: `node scripts/verify-blue-ocean-legacy-dark.mjs`

Expected: `Legacy dark Blue Ocean contract passed.`

### Task 3: Verify the change

**Files:**

- Verify: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`
- Verify: `scripts/verify-blue-ocean-legacy-dark.mjs`

- [ ] **Step 1: Run ESLint**

Run:

```bash
pnpm exec eslint src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-legacy-dark.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Run the production build**

Run: `pnpm build`

Expected: successful Next.js production build.

- [ ] **Step 3: Review the diff**

Run:

```bash
git diff --check
git diff -- src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx scripts/verify-blue-ocean-legacy-dark.mjs
```

Expected: only the Blue Ocean restoration and its contract test are present.
