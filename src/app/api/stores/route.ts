import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const revalidate = 86400;

const CSV_RELATIVE_PATH = 'public/asset/csv/bokkeum_udon_kakao_stores_clean.csv';
const CACHE_SECONDS = 60 * 60 * 24;

interface Store {
  store_code: string;
  region: string;
  branch_name: string;
  display_name: string;
  open_date: string;
  address: string;
}

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

function parseCsv(csvText: string): Store[] {
  const lines = csvText
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]).map((header) => header.replace(/^\uFEFF/, '').trim());
  const columnIndex = (name: string) => headers.indexOf(name);

  return lines.slice(1).flatMap((line) => {
    const values = parseCsvLine(line);
    const store = {
      store_code: values[columnIndex('store_code')] ?? '',
      region: values[columnIndex('region')] ?? '',
      branch_name: values[columnIndex('branch_name')] ?? '',
      display_name: values[columnIndex('display_name')] ?? '',
      open_date: values[columnIndex('open_date')] ?? '',
      address: values[columnIndex('address')] ?? '',
    };

    if (!store.store_code || !store.branch_name || store.branch_name === 'nan') {
      return [];
    }

    return [
      {
        store_code: store.store_code.trim(),
        region: store.region.trim(),
        branch_name: store.branch_name.trim(),
        display_name: store.display_name.trim(),
        open_date: store.open_date.trim(),
        address: store.address.trim(),
      },
    ];
  });
}

export async function GET() {
  try {
    const csvPath = path.join(process.cwd(), CSV_RELATIVE_PATH);
    const csvText = await fs.readFile(csvPath, 'utf-8');
    const stores = parseCsv(csvText);

    return NextResponse.json(
      { stores, total: stores.length },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 7}`,
        },
      }
    );
  } catch (error) {
    console.error('[stores] Failed to load store CSV:', error);
    return NextResponse.json({ error: 'Failed to load stores' }, { status: 500 });
  }
}
