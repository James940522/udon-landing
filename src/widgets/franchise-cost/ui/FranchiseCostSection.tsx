'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FranchiseCostSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="franchise-cost" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 타이틀 */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-amber-600 text-lg md:text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            투명한 비용 공개
          </motion.p>
          <motion.h2
            className="typo-h1 text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            가맹비용
          </motion.h2>
          <motion.p
            className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            고객에게 합리적인 가격과 최고의 제품을 통한 최적화된 수익 구조를 제공합니다
          </motion.p>
        </motion.div>

        {/* 가맹비용 표 */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* 테이블 헤더 */}
              <thead className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800">
                <tr>
                  <th className="py-5 px-6 text-left text-lg md:text-xl font-bold text-white" style={{ width: '25%' }}>
                    구분
                  </th>
                  <th className="py-5 px-6 text-left text-lg md:text-xl font-bold text-white" style={{ width: '25%' }}>
                    항목
                  </th>
                  <th
                    className="py-5 px-6 text-center text-lg md:text-xl font-bold text-white"
                    style={{ width: '30%' }}
                  >
                    배달점(12평)
                  </th>
                  <th
                    className="py-5 px-6 text-left text-lg md:text-xl font-bold text-white"
                    style={{ width: '20%' }}
                  >
                    내용
                  </th>
                </tr>
              </thead>

              {/* 테이블 바디 */}
              <tbody>
                {costItems.map((category, categoryIndex) => (
                  <>
                    {category.items.map((item, itemIndex) => (
                      <motion.tr
                        key={`${categoryIndex}-${itemIndex}`}
                        className={`border-b border-gray-200 hover:bg-amber-50/50 transition-colors ${
                          itemIndex % 2 === 0 ? 'bg-white' : 'bg-amber-50/20'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                      >
                        {/* 구분 (첫 번째 항목에만 표시) */}
                        {itemIndex === 0 && (
                          <td
                            className="py-6 px-6 font-bold text-gray-900 text-base md:text-lg bg-amber-100/50 align-middle"
                            rowSpan={category.items.length}
                          >
                            {category.category}
                          </td>
                        )}

                        {/* 항목 */}
                        <td className="py-6 px-6 font-medium text-gray-700 text-base md:text-lg">{item.name}</td>

                        {/* 금액 */}
                        <td className="py-6 px-6 text-center">
                          {item.isExempt ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="relative inline-block">
                                <span className="text-gray-400 text-base md:text-lg font-medium">
                                  {item.amount}
                                  {item.unit && <span className="ml-1">{item.unit}</span>}
                                </span>
                                {/* 빨간 취소선 */}
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-600 transform -translate-y-1/2" />
                              </div>
                              <span className="text-red-600 font-bold text-lg md:text-xl">면제</span>
                            </div>
                          ) : (
                            <span className="text-gray-900 text-lg md:text-xl font-bold">
                              {item.amount}
                              {item.unit && (
                                <span className="text-base md:text-lg font-normal ml-1">({item.unit})</span>
                              )}
                            </span>
                          )}
                        </td>

                        {/* 내용 */}
                        <td className="py-6 px-6 text-gray-600 text-sm md:text-base">{item.note || '-'}</td>
                      </motion.tr>
                    ))}
                  </>
                ))}
              </tbody>

              {/* 합계 행 */}
              <tfoot className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800">
                <tr>
                  <td colSpan={2} className="py-6 px-6 text-white text-xl md:text-2xl font-bold text-center">
                    합계
                  </td>
                  <td className="py-6 px-6 text-center">
                    <span className="text-yellow-400 text-2xl md:text-3xl font-bold">700만원</span>
                  </td>
                  <td className="py-6 px-6 text-white text-sm md:text-base">면제 (VAT 별도)</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* 하단 안내사항 */}
          <div className="bg-amber-50/50 px-6 py-4 border-t-2 border-amber-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm text-gray-700">
                  ✓ 별도 공사 : 냉난방기 | 가스 | 전기 | 간판 | 주방조리도구 | 작업대 외 일체
                </p>
                <p className="text-sm text-gray-700">
                  ✓ 예시 금액은 매물정보에 따라 달라질 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 추가 안내 */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 text-sm md:text-base">
            * 상기 비용은 12평 기준 배달점 예상 비용이며, 매장 조건에 따라 달라질 수 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
