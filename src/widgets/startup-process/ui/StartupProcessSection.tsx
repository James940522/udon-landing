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
      description:
        '전화로 상담 예약 접수 후, 본사에 내방하여 상권분석 및 예상 매출자료 등에 대해 상담',
      image: '/asset/etc/process-1.png',
    },
    {
      number: '02',
      title: '가게계약',
      description: '점포 선정 및 조건 협의 후 가맹계약 및 임대차계약 진행',
      image: '/asset/etc/process-2.jpg',
    },
    {
      number: '03',
      title: '본사 계약체결',
      description: '개설의사 확정 후 본사와 가맹계약체결',
      image: '/asset/etc/process-2.jpg',
    },
    {
      number: '04',
      title: '상권분석',
      description: '개설 희망지역, 본사 추천지역 등 상권 입지 조사 및 분석 후 점포 선정',
      image: '/asset/etc/process-4.png',
    },
    {
      number: '05',
      title: '교육진행',
      description: '성공창업을 위한 조리부터 서비스까지 다양한 교육 진행',
      image: '/asset/etc/process-5.png',
    },
    {
      number: '06',
      title: '그랜드오픈',
      description: '성공적으로 매장 오픈',
      image: '/asset/etc/process-6.png',
    },
  ];

  return (
    <section id="startup-process" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            가맹절차
          </h2>
          <div className="inline-block bg-black/50 backdrop-blur-sm px-8 py-4 rounded-2xl">
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed">
              상담부터 오픈까지, 체계적인 6단계 완벽 시스템
            </p>
          </div>
          <div className="w-24 h-2 bg-amber-600 mx-auto rounded-full mt-8 shadow-lg" />
        </motion.div>

        {/* 프로세스 리스트 - 2열 그리드 레이아웃 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index % 2) }}
              >
                {/* 카드 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-stone-300/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group h-full">
                  {/* 이미지 영역 */}
                  <div className="relative aspect-[4/3] bg-stone-200">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                    {/* 번호 배지 */}
                    <div className="absolute top-2 left-2 md:top-4 md:left-4">
                      <div className="bg-linear-to-r from-amber-500 to-yellow-500 text-stone-900 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-base md:text-xl lg:text-2xl shadow-xl">
                        {process.number}
                      </div>
                    </div>
                  </div>

                  {/* 컨텐츠 영역 */}
                  <div className="p-3 md:p-5 lg:p-6">
                    {/* 제목 */}
                    <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 text-gray-900">
                      {process.title}
                    </h3>

                    {/* 설명 */}
                    <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
