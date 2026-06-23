'use client';

import Image from 'next/image';
import { BaseModal } from '@/shared/ui';

interface OwnerRecruitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export default function OwnerRecruitmentModal({
  isOpen,
  onClose,
  onNavigateToContact,
}: OwnerRecruitmentModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      modalId="owner-recruitment"
      position={{
        mobile: { left: 'left-[50%]', top: 'top-16', transform: 'translate-x-[-50%]' },
        desktop: { left: 'sm:left-4', top: 'sm:top-20' },
      }}
      width="w-[90vw] sm:w-[400px]"
      className="rounded-3xl border-4 border-[#c9a24d] bg-linear-to-br from-[#170c08] via-[#26140e] to-[#3b2115] p-3 shadow-xl sm:border-[6px] sm:p-6"
      header={
        <div className="text-center py-4 px-4">
          <p
            className="mb-3 text-xs font-bold text-[#c9a24d] sm:text-sm"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            정직브랜드 1위
          </p>

          <h2
            className="mb-3 text-lg font-bold leading-tight text-[#fff2d8] sm:text-xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            오늘은 볶음우동
            <br />
            오너 모집 시작!
          </h2>

          <div
            className="mb-2 text-5xl font-bold text-[#c9a24d] drop-shadow-md sm:text-6xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            2026
          </div>

          {/* 로고 이미지 */}
          <div className="relative w-48 h-16 mx-auto mb-2">
            <Image
              src="/asset/logo/오므라이스_문구.png"
              alt="오늘은 볶음우동"
              fill
              className="object-contain"
            />
          </div>

          <div
            className="mb-3 text-xl font-bold text-[#fff2d8] sm:text-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            오너 모집 공고
          </div>

          {/* 추가 문구 */}
          <div className="mb-2 rounded-xl border border-[#d4b45f]/45 bg-[#c9a24d] p-3 shadow-lg">
            <p
              className="text-sm font-bold leading-tight text-[#170c08] sm:text-base"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              대한민국 1등 볶음우동
              <br />
              선착순 창업혜택 이벤트
            </p>
          </div>

          <div className="rounded-lg border border-[#c9a24d]/28 bg-linear-to-r from-[#3b2115] to-[#5a3421] p-2 shadow-md">
            <p
              className="text-xs font-medium text-[#ead8bb] sm:text-sm"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              모든 창업고민 해결
            </p>
            <a
              href="tel:010-9923-9502"
              className="text-base font-bold text-[#d4b45f] transition-colors hover:text-[#fff2d8] sm:text-lg"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              010-9923-9502
            </a>
          </div>
        </div>
      }
    >
      {/* Content */}
      <div className="px-4 sm:px-6 pb-4">
        {/* 메뉴 이미지 */}
        {/* <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-4 shadow-lg border-4 border-orange-300">
          <Image
            src="/asset/menu/today-bokkeum-udon/menu-gallery/menu-gallery-09.jpg"
            alt="오늘은 볶음우동 메뉴"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div> */}

        {/* 혜택 박스들 - 그룹 */}
        <div className="mb-4 rounded-2xl border-2 border-[#c9a24d]/60 bg-[#fff8eb]/94 p-4 shadow-lg backdrop-blur-sm">
          <h3
            className="mb-3 text-center text-base font-bold text-[#765421] sm:text-lg"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            창업 특별 혜택
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="rounded-xl bg-[#ead9aa] p-3 text-center text-[#26140e] shadow-md sm:p-4">
              <p
                className="text-sm sm:text-base font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                교육비 면제
              </p>
            </div>
            <div className="rounded-xl bg-[#ead9aa] p-3 text-center text-[#26140e] shadow-md sm:p-4">
              <p
                className="text-sm sm:text-base font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                로열티 면제
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#ead9aa] p-3 text-center text-[#26140e] shadow-md sm:p-4">
            <p
              className="text-sm sm:text-base font-bold"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              인테리어 자율시공
            </p>
          </div>
        </div>

        {/* 공고 지원하기 버튼 */}
        <button
          onClick={onNavigateToContact}
          className="w-full transform rounded-2xl border-2 border-[#c9a24d]/42 bg-[#8f3528] px-6 py-4 font-bold text-[#fff2d8] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#71271f]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-lg sm:text-xl">공고 지원하기</span>
        </button>
      </div>
    </BaseModal>
  );
}
