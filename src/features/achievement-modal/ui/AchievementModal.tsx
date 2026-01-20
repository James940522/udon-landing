'use client';

import Image from 'next/image';
import { BaseModal } from '@/shared/ui';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export default function AchievementModal({ isOpen, onClose, onNavigateToContact }: AchievementModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      modalId="achievement"
      position={{
        mobile: { left: 'left-[50%]', top: 'top-16', transform: 'translate-x-[-50%]' },
        desktop: { left: 'sm:left-[calc(600px+4rem)]', top: 'sm:top-20' },
      }}
      width="w-[90vw] sm:w-[400px]"
      className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border-2 border-amber-600/40 rounded-2xl p-4 shadow-2xl"
      header={
        <div className="text-center py-3 px-3">
          {/* 로고 */}
          <div className="relative w-48 h-16 mx-auto mb-3">
            <Image
              src="/asset/logo/오늘은_볶음우동_문구.png"
              alt="오늘은 볶음우동"
              fill
              className="object-contain"
            />
          </div>

          {/* 타이틀 */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl px-4 py-3 mb-4 shadow-lg">
            <p className="text-xs font-bold text-stone-800 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              대한민국 볶음우동 프랜차이즈
            </p>
            <p className="text-lg font-bold text-stone-900 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              가맹사업 시작
              <br />
              한달만에 16호점 돌파
            </p>
          </div>
        </div>
      }
    >
      {/* Content */}
      <div className="px-3 pb-3">
        {/* 성과 강조 */}
        <div className="bg-stone-800 rounded-xl p-6 mb-4 text-center shadow-lg border border-amber-600/20">
          <div className="mb-4">
            <div className="text-5xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              16
            </div>
            <div className="text-sm text-gray-300 font-semibold">가맹점 돌파</div>
          </div>
          <div className="border-t border-stone-700 pt-4">
            <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              1개월
            </div>
            <div className="text-xs text-gray-400">빠른 성장</div>
          </div>
        </div>

        {/* 포인트 */}
        <div className="space-y-2 mb-4">
          <div className="bg-stone-800/80 rounded-lg p-3 border border-amber-600/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <p className="text-sm text-white font-semibold">검증된 비즈니스 모델</p>
            </div>
          </div>
          <div className="bg-stone-800/80 rounded-lg p-3 border border-amber-600/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <p className="text-sm text-white font-semibold">빠른 매장 오픈 지원</p>
            </div>
          </div>
          <div className="bg-stone-800/80 rounded-lg p-3 border border-amber-600/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <p className="text-sm text-white font-semibold">전국 가맹점 확대 중</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="px-3 pb-3">
        <button
          onClick={onNavigateToContact}
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-stone-900 font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-sm">가맹 문의하기</span>
        </button>

        {/* 추가 안내 */}
        <p className="text-center text-gray-400 text-xs mt-2">
          지금 함께 성장하세요
        </p>
      </div>
    </BaseModal>
  );
}
