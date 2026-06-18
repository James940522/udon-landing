export type Store = {
  store_code: string;
  region: string;
  branch_name: string;
  display_name: string;
  open_date: string;
  address: string;
};

interface StoresApiResponse {
  stores: Store[];
  total: number;
}

interface StoreCountApiResponse {
  total: number;
  maxStoreCode: number;
}

export async function fetchStores(): Promise<Store[]> {
  try {
    const response = await fetch('/api/stores');

    if (!response.ok) {
      console.error(`[fetchStores] /api/stores responded with ${response.status}`);
      return [];
    }

    const data = (await response.json()) as StoresApiResponse;
    return data.stores ?? [];
  } catch (error) {
    console.error('[fetchStores] network error:', error);
    return [];
  }
}

export async function fetchStoreCount(): Promise<number | null> {
  try {
    const response = await fetch('/api/stores/count');

    if (!response.ok) {
      console.error(`[fetchStoreCount] /api/stores/count responded with ${response.status}`);
      return null;
    }

    const data = (await response.json()) as StoreCountApiResponse;
    return Number.isFinite(data.total) ? data.total : null;
  } catch (error) {
    console.error('[fetchStoreCount] network error:', error);
    return null;
  }
}
