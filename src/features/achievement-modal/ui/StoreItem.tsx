import type { Store } from '@/lib/stores';

interface StoreItemProps {
  store: Store;
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

export default function StoreItem({ store, currentDate }: StoreItemProps) {
  const openDate = store.open_date?.trim() ?? '';
  const { label, upcoming, isCurrentMonthOpen } = getOpenStatus(openDate, currentDate);
  const statusClass = isCurrentMonthOpen
    ? 'store-current-month-status bg-linear-to-r from-[#b7783d] via-[#c9a24d] to-[#ead9aa] text-[#26140e]'
    : upcoming
      ? 'bg-[#c9a24d] text-[#412312]'
      : 'bg-[#8f3528] text-white';
  const anonymizedBranchName = `${store.region || '전국'} OO점`;

  return (
    <div className="flex h-[58px] w-full flex-col overflow-hidden rounded-[5px] border border-[#d9c49f]/70 bg-[#fff8eb] shadow-[0_3px_0_rgba(27,15,9,0.3)] sm:h-[76px] sm:rounded-[7px] sm:shadow-[0_4px_0_rgba(27,15,9,0.32)]">
      <div className="flex min-h-0 flex-1 items-center justify-center px-0.5 text-center sm:px-1.5">
        <p className="max-w-full whitespace-normal font-heading text-[9px] font-black leading-[1.05] text-[#2b160d] [overflow-wrap:anywhere] [word-break:normal] sm:text-[13px] sm:leading-tight">
          {anonymizedBranchName}
        </p>
      </div>
      <div
        className={`relative flex h-[18px] items-center justify-center overflow-hidden whitespace-nowrap font-heading text-[9px] font-black leading-none sm:h-7 sm:text-[13px] ${statusClass}`}
      >
        {isCurrentMonthOpen ? (
          <span className="store-current-month-status__shine" aria-hidden="true" />
        ) : null}
        <span className="relative z-10">{label}</span>
      </div>
    </div>
  );
}
