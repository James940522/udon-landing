const MENU_ROOT = '/asset/menu/오늘은_볶음우동/';

const decomposedFilenameCategories = new Set(['김치볶음우동', '철판 볶음밥', '사이드']);
const decomposedFilenameOverrides = new Set(['우삼겹 볶음우동.jpg']);

export function normalizeMenuImagePath(path: string) {
  if (!path.startsWith(MENU_ROOT)) {
    return path;
  }

  const [category, ...filenameParts] = path.slice(MENU_ROOT.length).split('/');
  const filename = filenameParts.join('/');

  if (!category || !filename) {
    return path;
  }

  const normalizedFilename =
    decomposedFilenameCategories.has(category) || decomposedFilenameOverrides.has(filename)
      ? filename.normalize('NFD')
      : filename;

  return `${MENU_ROOT}${category.normalize('NFD')}/${normalizedFilename}`;
}
