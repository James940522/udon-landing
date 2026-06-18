import type { Store } from '@/lib/stores';

interface StoreItemProps {
  store: Store;
  index: number;
  currentDate: {
    year: number;
    month: number;
  } | null;
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function getOpenStatus(openDate: string, currentDate: StoreItemProps['currentDate']) {
  if (!DATE_PATTERN.test(openDate) || currentDate === null) {
    return { label: '오픈완료', upcoming: false, isCurrentMonthOpen: false };
  }

  const [year, month] = openDate.split('-').map(Number);
  const monthDifference = (year - currentDate.year) * 12 + month - currentDate.month;
  const isCurrentMonthOpen = monthDifference === 0;

  if (monthDifference > 0) {
    return { label: `${month}월 오픈`, upcoming: true, isCurrentMonthOpen: false };
  }

  if (isCurrentMonthOpen) {
    return { label: `${month}월 오픈`, upcoming: false, isCurrentMonthOpen: true };
  }

  return { label: '오픈완료', upcoming: false, isCurrentMonthOpen: false };
}

export default function StoreItem({ store, currentDate, index }: StoreItemProps) {
  const openDate = store.open_date?.trim() ?? '';
  const { label, upcoming, isCurrentMonthOpen } = getOpenStatus(openDate, currentDate);
  const statusClass = isCurrentMonthOpen
    ? 'bg-[#8f3528] text-[#fff8eb]'
    : upcoming
      ? 'bg-[#ead9aa] text-[#5c3a22]'
      : 'border border-[#cdbb9f] bg-transparent text-[#80624c]';
  const anonymizedBranchName = `${store.region || '전국'} OO점`;
  const storeNumber = store.store_code.padStart(2, '0');

  return (
    <li className="grid min-h-14 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-[#ddcfbb] py-3">
      <span className="font-heading text-[10px] font-black tracking-[0.08em] text-[#a28670]">
        {storeNumber}
      </span>
      <div className="min-w-0">
        <p className="truncate font-heading text-sm font-black text-[#26140e] sm:text-[15px]">
          {anonymizedBranchName}
        </p>
        <p className="mt-0.5 text-[9px] font-bold tracking-[0.1em] text-[#9a7d67]">
          STORE {String(index + 1).padStart(2, '0')}
        </p>
      </div>
      <span
        className={`inline-flex min-w-[62px] items-center justify-center rounded-full px-2.5 py-1.5 text-[9px] font-black whitespace-nowrap sm:text-[10px] ${statusClass}`}
      >
        {label}
      </span>
    </li>
  );
}
