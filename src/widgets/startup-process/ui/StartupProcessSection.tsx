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
      image: '/asset/process/step-1.jpg',
    },
    {
      number: '02',
      title: '계약체결',
      description: '개설의사 확정 후 본사와 가맹계약체결',
      image: '/asset/process/step-2.jpg',
    },
    {
      number: '03',
      title: '상권분석',
      description: '개설 희망지역, 본사 추천지역 등 상권 입지 조사 및 분석 후 점포 선정',
      image: '/asset/process/step-3.jpg',
    },
    {
      number: '04',
      title: '실측 및 인테리어',
      description: '본사 구조에 따라 실측, 인테리어 및 설비공사',
      image: '/asset/process/step-4.jpg',
    },
    {
      number: '05',
      title: '교육진행',
      description: '성공창업을 위한 조리부터 서비스까지 다양한 교육 진행',
      image: '/asset/process/step-5.jpg',
    },
    {
      number: '06',
      title: '시설세팅',
      description: '주방 및 각종 집기, 기기정비, 가구세팅, 초도 물품 등 오픈을 위한 완벽한 세팅',
      image: '/asset/process/step-6.jpg',
    },
    {
      number: '07',
      title: '오픈 리허설',
      description: '최종적으로 매장운영에 대한 모든 상황을 점검하고 가오픈 실시',
      image: '/asset/process/step-7.jpg',
    },
    {
      number: '08',
      title: '그랜드오픈',
      description: '성공적으로 매장 오픈',
      image: '/asset/process/step-8.jpg',
    },
  ];

  return (
    <section
      id="startup-process"
      className="py-20 md:py-32 relative overflow-hidden bg-[#D4C4A8]"
      ref={ref}
    >
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">가맹절차</h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            오픈 후에도 지속적이며서 관리와 트렌드에 맞는 메뉴 개발, 나아가 점포가 변천하도록 꾸준히 유지하도록 안내하는 것이 오늘은 볶음우동의 창업절차입니다.
          </p>
          <div className="w-24 h-2 bg-stone-700 mx-auto rounded-full mt-8" />
        </motion.div>

        {/* 프로세스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* 카드 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-stone-300/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group h-full">
                {/* 이미지 영역 */}
                <div className="relative h-48 md:h-56 bg-stone-200">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  {/* 번호 배지 - 작게 */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-md">
                      {process.number}
                    </div>
                  </div>
                </div>

                {/* 컨텐츠 영역 */}
                <div className="p-6">
                  {/* 제목 */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                    {process.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg md:text-xl text-gray-800 mb-6 font-semibold">
            체계적인 창업 시스템으로 성공적인 오픈을 약속드립니다
          </p>
          <a
            href="tel:010-0000-0000"
            className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            창업 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
