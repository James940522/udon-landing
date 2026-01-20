'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { BaseModal } from '@/shared/ui';

interface FranchiseCostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export default function FranchiseCostModal({ isOpen, onClose, onNavigateToContact }: FranchiseCostModalProps) {
  const costItems = [
    {
      category: '가맹비용',
      items: [
        { name: '가맹비', amount: '700', unit: '만원', isExempt: true },
        { name: '교육비', amount: '300', unit: '만원', isExempt: true },
        { name: '로열티', amount: '3%', unit: '', isExempt: true },
        { name: '계약이행보증금', amount: '200', unit: '만원', isExempt: true },
      ],
    },
    {
      category: '시설비용',
      items: [
        { name: '인테리어', amount: '자체시공', unit: '', isExempt: false },
        { name: '주방기기', amount: '500', unit: '만원', isExempt: false },
        { name: '가구', amount: '-', unit: '', isExempt: false },
        { name: '간판', amount: '200', unit: '만원', isExempt: false, note: '자체시공 가능' },
        { name: '포스장비', amount: '임대', unit: '', isExempt: false },
      ],
    },
  ];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      modalId="franchise-cost"
      position={{
        mobile: { left: 'left-[50%]', top: 'top-16', transform: 'translate-x-[-50%]' },
        desktop: { left: 'sm:left-8', top: 'sm:top-20' },
      }}
      width="w-[90vw] sm:w-[600px]"
      className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border-2 border-amber-600/40 rounded-2xl p-4 shadow-2xl"
      header={
        <div className="text-center py-3 px-3">
          {/* 로고 */}
          <div className="relative w-64 h-20 mx-auto mb-4">
            <Image
              src="/asset/logo/오늘은_볶음우동_문구.png"
              alt="오늘은 볶음우동"
              fill
              className="object-contain"
            />
          </div>

          {/* 타이틀 */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl px-4 py-2 mb-3 shadow-lg">
            <p className="text-sm font-bold text-stone-900" style={{ fontFamily: 'var(--font-heading)' }}>
              선착순 60호점 가맹비용 전액 면제
            </p>
          </div>

          {/* 혜택 간단 표시 */}
          <div className="grid grid-cols-4 gap-2 mb-2">
            <div className="bg-stone-800/80 border border-amber-600/20 rounded-lg p-2">
              <p className="text-xs text-white">가맹비</p>
              <p className="text-sm font-bold text-amber-400">면제</p>
            </div>
            <div className="bg-stone-800/80 border border-amber-600/20 rounded-lg p-2">
              <p className="text-xs text-white">교육비</p>
              <p className="text-sm font-bold text-amber-400">면제</p>
            </div>
            <div className="bg-stone-800/80 border border-amber-600/20 rounded-lg p-2">
              <p className="text-xs text-white">로열티</p>
              <p className="text-sm font-bold text-amber-400">면제</p>
            </div>
            <div className="bg-stone-800/80 border border-amber-600/20 rounded-lg p-2">
              <p className="text-xs text-white">보증금</p>
              <p className="text-sm font-bold text-amber-400">면제</p>
            </div>
          </div>
        </div>
      }
    >
      {/* Content */}
      <div className="px-3 pb-3">

        {/* 가맹비용 표 */}
        <div className="bg-stone-800 rounded-xl shadow-lg overflow-hidden border border-amber-500/30 mb-3">
          <table className="w-full text-xs">
            {/* 테이블 헤더 */}
            <thead className="bg-stone-950">
              <tr>
                <th className="py-2 px-2 text-left text-xs font-bold text-amber-400">구분</th>
                <th className="py-2 px-2 text-left text-xs font-bold text-amber-400">항목</th>
                <th className="py-2 px-2 text-center text-xs font-bold text-amber-400">배달점</th>
              </tr>
            </thead>

            {/* 테이블 바디 */}
            <tbody>
              {costItems.map((category, categoryIndex) => (
                <Fragment key={categoryIndex}>
                  {category.items.map((item, itemIndex) => (
                    <tr
                      key={`${categoryIndex}-${itemIndex}`}
                      className={`border-b border-stone-700 ${itemIndex % 2 === 0 ? 'bg-stone-800' : 'bg-stone-800/50'}`}
                    >
                      {itemIndex === 0 && (
                        <td
                          className="py-2 px-2 font-bold text-amber-400 text-xs bg-stone-900/50 align-middle"
                          rowSpan={category.items.length}
                        >
                          {category.category}
                        </td>
                      )}
                      <td className="py-2 px-2 font-medium text-gray-300 text-xs">{item.name}</td>
                      <td className="py-2 px-2 text-center">
                        {item.isExempt ? (
                          <div className="flex flex-col items-center">
                            <div className="relative inline-block">
                              <span className="text-gray-500 text-xs">
                                {item.amount}
                                {item.unit && <span className="ml-1">{item.unit}</span>}
                              </span>
                              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-500 transform -translate-y-1/2" />
                            </div>
                            <span className="text-amber-400 font-bold text-xs">면제</span>
                          </div>
                        ) : (
                          <span className="text-gray-200 text-xs font-bold">
                            {item.amount}
                            {item.unit && <span className="font-normal ml-1">({item.unit})</span>}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>

            {/* 합계 행 */}
            <tfoot className="bg-stone-950">
              <tr>
                <td colSpan={2} className="py-2 px-2 text-amber-400 text-sm font-bold text-center">합계</td>
                <td className="py-2 px-2 text-center">
                  <span className="text-yellow-400 text-sm font-bold">700만원 면제</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="px-4 pb-4">
        <button
          onClick={onNavigateToContact}
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-stone-900 font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-sm">특별 혜택 신청하기</span>
        </button>

        {/* 추가 안내 */}
        <p className="text-center text-gray-400 text-xs mt-2">
          선착순 60호점 한정 / 12평 기준 배달점 예상 비용
        </p>
      </div>
    </BaseModal>
  );
}
