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
