'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

export default function StartupProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const processes = [
    {
      number: '01',
      title: '창업상담',
      description: '전화로 상담 예약 접수 후, 본사에 내방하여 상권분석 및 예상 매출자료 등에 대해 상담',
      image: '/asset/etc/process-1.png',
    },
    {
      number: '02',
      title: '계약체결',
      description: '개설의사 확정 후 본사와 가맹계약체결',
      image: '/asset/etc/process-2.jpg',
    },
    {
      number: '03',
      title: '상권분석',
      description: '개설 희망지역, 본사 추천지역 등 상권 입지 조사 및 분석 후 점포 선정',
      image: '/asset/etc/process-3.png',
    },
    {
      number: '04',
      title: '교육진행',
      description: '성공창업을 위한 조리부터 서비스까지 다양한 교육 진행',
      image: '/asset/etc/process-4.png',
    },
    {
      number: '05',
      title: '그랜드오픈',
      description: '성공적으로 매장 오픈',
      image: '/asset/etc/process-5.png',
    },
  ];

  return (
    <section
      id="startup-process"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* 배경 - 톤앤매너에 맞는 그라데이션 */}
      <div className="absolute inset-0 bg-linear-to-br from-stone-800 via-stone-900 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <span className="bg-stone-700 text-amber-100 px-6 py-2 rounded-full text-sm font-bold tracking-wider">
              FRANCHISE PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">가맹절차</h2>
          <div className="inline-block bg-black/50 backdrop-blur-sm px-8 py-4 rounded-2xl">
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed">
              상담부터 오픈까지, 체계적인 5단계 완벽 시스템
            </p>
          </div>
          <div className="w-24 h-2 bg-amber-600 mx-auto rounded-full mt-8 shadow-lg" />
        </motion.div>

        {/* 프로세스 리스트 - 1열 레이아웃 */}
        <div className="max-w-4xl mx-auto">
          {processes.map((process, index) => (
            <div key={index}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* 카드 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-stone-300/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
                  {/* 이미지 영역 */}
                  <div className="relative h-72 md:h-80 lg:h-96 bg-stone-200">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  {/* 번호 배지 - 크게 */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <div className="bg-linear-to-r from-amber-500 to-yellow-500 text-stone-900 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold text-xl md:text-3xl shadow-xl">
                      {process.number}
                    </div>
                  </div>
                </div>

                {/* 컨텐츠 영역 */}
                <div className="p-4 md:p-6">
                  {/* 제목 */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-gray-900">
                    {process.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* 화살표 (마지막 제외) */}
            {index < processes.length - 1 && (
              <motion.div
                className="flex justify-center py-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
              >
                <div className="text-amber-500">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg md:text-xl text-white mb-6 font-semibold drop-shadow-lg">
            체계적인 창업 시스템으로 성공적인 오픈을 약속드립니다
          </p>
          <a
            href="tel:010-0000-0000"
            className="inline-block bg-linear-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            창업 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
