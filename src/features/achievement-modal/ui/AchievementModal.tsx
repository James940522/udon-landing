'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchStores, type Store } from '@/lib/stores';
import { BaseModal } from '@/shared/ui';
import StoreItem from './StoreItem';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function getSortTime(store: Store) {
  const openDate = store.open_date?.trim() ?? '';
  if (!DATE_PATTERN.test(openDate)) return 0;
  return new Date(`${openDate}T00:00:00+09:00`).getTime();
}

export default function AchievementModal({ isOpen, onClose }: AchievementModalProps) {
  const [stores, setStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState<{ year: number; month: number } | null>(null);

  useEffect(() => {
    const now = new Date();
    setCurrentDate({
      year: now.getFullYear(),
      month: now.getMonth() + 1,
    });
  }, []);

  useEffect(() => {
    async function loadStores() {
      try {
        setStores(await fetchStores());
      } finally {
        setIsLoading(false);
      }
    }

    loadStores();
  }, []);

  const sortedStores = useMemo(
    () =>
      [...stores].sort((storeA, storeB) => {
        const timeDifference = getSortTime(storeA) - getSortTime(storeB);
        if (timeDifference !== 0) return timeDifference;
        return Number(storeA.store_code) - Number(storeB.store_code);
      }),
    [stores]
  );
  const displayStoreCount = stores.length;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      modalId="achievement"
      position={{
        mobile: { left: 'left-[50%]', top: 'top-16', transform: 'translate-x-[-50%]' },
        desktop: { left: 'sm:left-4', top: 'sm:top-20' },
      }}
      width="w-[94vw] sm:w-[860px]"
      maxHeight="max-h-[calc(100vh-5rem)]"
      className="overflow-hidden rounded-[26px] border border-[#cdbb9f] bg-[#f6efe3] p-0 shadow-[0_24px_70px_rgba(38,20,14,0.3)]"
      footerVariant="report"
      header={
        <div className="relative overflow-hidden border-b border-[#ddcfbb] bg-[#f6efe3] px-4 pb-4 pt-6 sm:px-9 sm:pb-7 sm:pt-9">
          <div className="absolute inset-x-0 top-0 h-2 bg-[#8f3528]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(143,53,40,0.22) 1px, transparent 0)',
              backgroundSize: '18px 18px',
            }}
          />

          <div className="relative grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-10">
            <div>
              <p className="font-heading text-[9px] font-black tracking-[0.28em] text-[#8f3528] sm:text-xs">
                2026 · OPENING REPORT
              </p>
              <p className="mt-2.5 text-xs font-bold text-[#80624c] sm:mt-3 sm:text-base">
                오늘은 볶음우동
              </p>
              <h2 className="mt-1 break-keep font-heading text-[1.75rem] font-black leading-[1.05] tracking-[-0.045em] text-[#26140e] sm:text-[3.35rem]">
                전국 오픈 리포트
              </h2>
              <p className="mt-2.5 max-w-xl break-keep text-[11px] font-semibold leading-[1.65] text-[#725744] sm:mt-3 sm:text-sm sm:leading-relaxed">
                가맹사업 시작 한 달 만에 20호점 돌파. 숫자보다 선명한 성장의 기록을 지역별 오픈
                현황으로 확인하세요.
              </p>
            </div>

            <div className="flex items-end gap-2.5 border-l-0 border-[#cdbb9f] sm:gap-3 sm:border-l sm:pl-8">
              <strong className="font-heading text-[3.5rem] font-black leading-[0.78] tracking-[-0.08em] text-[#8f3528] sm:text-[6.4rem]">
                {displayStoreCount || '-'}
              </strong>
              <span className="pb-0.5 text-[9px] font-black leading-tight tracking-[0.16em] text-[#80624c] sm:pb-2 sm:text-xs">
                TOTAL
                <br />
                STORES
              </span>
            </div>
          </div>

          <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#ddcfbb] pt-3 text-[9px] font-bold text-[#725744] sm:mt-5 sm:gap-x-5 sm:pt-4 sm:text-xs">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8f3528] sm:h-2 sm:w-2" />
              이번 달 오픈
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24d] sm:h-2 sm:w-2" />
              오픈 예정
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full border border-[#9b8069] bg-transparent sm:h-2 sm:w-2" />
              오픈 완료
            </span>
          </div>
        </div>
      }
    >
      <div className="bg-[#f6efe3] px-5 py-4 sm:px-9 sm:py-6">
        {isLoading ? (
          <div className="rounded-2xl border border-[#ddcfbb] bg-[#fffaf1] py-10 text-center">
            <p className="font-bold text-[#725744]">매장 정보를 불러오는 중...</p>
          </div>
        ) : sortedStores.length > 0 ? (
          <>
            <div className="mb-2 flex items-end justify-between gap-4">
              <p className="font-heading text-xs font-black tracking-[0.12em] text-[#8f3528] sm:text-sm">
                STORE INDEX
              </p>
              <p className="text-right text-[10px] font-semibold text-[#937661] sm:text-xs">
                오픈일 순으로 정리된 전국 매장 현황
              </p>
            </div>
            <ol className="grid max-h-[clamp(12rem,32vh,24rem)] grid-cols-1 gap-x-8 overflow-y-auto overscroll-contain border-t border-[#8f3528] pr-1 sm:grid-cols-2 sm:pr-2">
              {sortedStores.map((store, index) => (
                <StoreItem
                  key={store.store_code}
                  store={store}
                  currentDate={currentDate}
                  index={index}
                />
              ))}
            </ol>

            <div className="mt-5 flex flex-col gap-2 rounded-2xl bg-[#8f3528] px-4 py-3 text-[#fff8eb] sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div>
                <p className="text-[10px] font-black tracking-[0.16em] text-[#efd49e]">
                  FRANCHISE INQUIRY
                </p>
                <p className="mt-0.5 break-keep text-xs font-semibold text-[#fff2d8] sm:text-sm">
                  신규 출점 상담은 접수 순서대로 안내드립니다.
                </p>
              </div>
              <a
                href="tel:010-9923-9502"
                className="shrink-0 font-heading text-xl font-black tracking-[-0.035em] text-white sm:text-2xl"
              >
                010-9923-9502
              </a>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-[#ddcfbb] bg-[#fffaf1] py-10 text-center">
            <p className="font-bold text-[#725744]">등록된 매장 정보를 확인할 수 없습니다.</p>
          </div>
        )}
      </div>
    </BaseModal>
  );
}
