import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const revalidate = 86400;

const CSV_RELATIVE_PATH = 'public/asset/csv/bokkeum_udon_kakao_stores_clean.csv';
const CACHE_SECONDS = 60 * 60 * 24;

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && inQuotes && nextCharacter === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (character === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
      continue;
    }

    current += character;
  }

  values.push(current.trim());
  return values;
}

export async function GET() {
  try {
    const csvPath = path.join(process.cwd(), CSV_RELATIVE_PATH);
    const csvText = await fs.readFile(csvPath, 'utf-8');
    const dataLines = csvText
      .replace(/^\uFEFF/, '')
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(1);
    const maxStoreCode = dataLines.reduce((maxCode, line) => {
      const storeCode = Number(parseCsvLine(line)[0]);
      return Number.isFinite(storeCode) ? Math.max(maxCode, storeCode) : maxCode;
    }, 0);

    return NextResponse.json(
      { total: dataLines.length, maxStoreCode },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 7}`,
        },
      }
    );
  } catch (error) {
    console.error('[stores/count] Failed to count stores:', error);
    return NextResponse.json({ error: 'Failed to count stores' }, { status: 500 });
  }
}
