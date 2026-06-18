'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchStores, type Store } from '@/lib/stores';
import { useStoreCount } from '@/lib/use-store-count';
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
  const storeCount = useStoreCount();

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
  const displayStoreCount = storeCount ?? stores.length;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      modalId="achievement"
      position={{
        mobile: { left: 'left-[50%]', top: 'top-16', transform: 'translate-x-[-50%]' },
        desktop: { left: 'sm:left-4', top: 'sm:top-20' },
      }}
      width="w-[95vw] sm:w-[820px]"
      className="overflow-hidden rounded-[18px] border-4 border-[#a66732] bg-[#3b2115] p-0 shadow-xl sm:border-[6px]"
      header={
        <div className="relative overflow-hidden bg-linear-to-b from-[#52301f] via-[#3b2115] to-[#26140e] px-3 py-5 text-center sm:px-8 sm:py-7">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
            }}
          />
          <div className="absolute -left-16 top-5 h-20 w-56 rotate-[-11deg] bg-[#c9a24d]/18" />
          <div className="absolute -right-16 bottom-4 h-20 w-56 rotate-[10deg] bg-[#a66732]/24" />

          <div className="relative z-10">
            <p className="font-heading text-base font-black text-white/90 sm:text-2xl">
              가맹사업 시작 한 달 만에{' '}
              <span className="text-[#c9a24d] drop-shadow-[0_3px_0_rgba(42,24,15,0.85)]">
                16호점
              </span>{' '}
              돌파!
            </p>
            <h2 className="mt-2 break-keep font-heading text-[2.3rem] font-black leading-none text-[#fff2d8] drop-shadow-[0_6px_0_rgba(20,11,7,0.88)] sm:text-6xl">
              오늘은 볶음우동
              <br className="sm:hidden" />
              오픈 현황
            </h2>
            <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-[#c9a24d]/45 bg-[#fff2d8]/12 px-4 py-2 text-xs font-black text-[#f2dfb8] sm:text-sm">
              <span>전국 {displayStoreCount || '-'}개 점포</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24d]" />
              <span>오픈으로 증명한 브랜드</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="bg-linear-to-b from-[#26140e] via-[#3b2115] to-[#26140e] p-3 sm:p-5">
        {isLoading ? (
          <div className="rounded-xl bg-[#fff8eb] py-8 text-center">
            <p className="font-bold text-[#3b2115]">매장 정보를 불러오는 중...</p>
          </div>
        ) : sortedStores.length > 0 ? (
          <>
            <div className="mb-4 text-center">
              <p className="break-keep font-heading text-sm font-black text-[#f2dfb8] sm:text-base">
                볶음우동의 새로운 기준이 전국으로 넓어지는 중입니다.
              </p>
            </div>
            <div className="grid grid-cols-5 gap-1 sm:gap-2.5 lg:grid-cols-6">
              {sortedStores.map((store) => (
                <StoreItem key={store.store_code} store={store} currentDate={currentDate} />
              ))}
            </div>
            <div className="mt-5 rounded-2xl border-2 border-[#c9a24d] bg-[#fff2d8] px-3 py-3 shadow-[0_10px_24px_rgba(21,11,7,0.28)] sm:px-5">
              <div className="flex min-w-0 flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-4 lg:gap-5">
                <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#8f3528] bg-[#fff8eb] text-[10px] font-black text-[#8f3528] sm:h-10 sm:w-10 sm:text-[11px]">
                    TEL
                  </span>
                  <a
                    href="tel:010-9923-9502"
                    className="whitespace-nowrap font-heading text-[clamp(1.32rem,6.2vw,2rem)] font-black tracking-[-0.04em] text-[#8f3528] drop-shadow-[0_2px_0_rgba(58,33,22,0.18)] sm:text-[2rem] md:text-[2.35rem] lg:text-4xl"
                  >
                    010-9923-9502
                  </a>
                </div>
                <p className="min-w-0 flex-1 break-keep text-center text-[11px] font-black leading-snug text-[#3b2115] sm:text-sm md:text-left">
                  <mark className="rounded bg-[#c9a24d] px-1.5 py-0.5 font-black text-[#26140e]">
                    가맹문의 증가
                  </mark>
                  로 상담이 지연될 수 있습니다. 접수 순서대로 빠르게 연락드리겠습니다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-xl bg-[#fff8eb] py-8 text-center">
            <p className="font-bold text-[#3b2115]">등록된 매장 정보를 확인할 수 없습니다.</p>
          </div>
        )}
      </div>
    </BaseModal>
  );
}
