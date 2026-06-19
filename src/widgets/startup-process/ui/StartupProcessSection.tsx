'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function StartupProcessSection() {
  const ref = useRef(null);
  const processGridRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -22% 0px' });
  const isProcessInView = useInView(processGridRef, { once: true, amount: 0.58 });

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
      image: '/asset/etc/process-2.png',
    },
    {
      number: '03',
      title: '본사 계약체결',
      description: '개설의사 확정 후 본사와 가맹계약체결',
      image: '/asset/etc/process-3.jpg',
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
      {/* 배경 - 밝은 우드 텍스처 이미지 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/new-asset/background/startup-process-light-wood.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#fff8eb]/28" aria-hidden="true" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <span className="rounded-full bg-[#493229] px-6 py-2 text-sm font-bold tracking-wider text-[#c9a24d]">
              FRANCHISE PROCESS
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-black text-[#2b1b16] md:text-6xl">
            가맹절차
          </h2>
          <div className="inline-block rounded-lg border border-[#a66732]/25 bg-[#fff8eb]/72 px-8 py-4 shadow-[0_14px_34px_rgba(73,50,41,0.12)] backdrop-blur-[1px]">
            <p className="text-xl font-black leading-relaxed text-[#4a2412] md:text-2xl">
              상담부터 오픈까지, 체계적인 6단계 완벽 시스템
            </p>
          </div>
          <div className="mx-auto mt-8 h-2 w-24 rounded-full bg-[#8f3528]" />
        </motion.div>

        {/* 프로세스 리스트 */}
        <div ref={processGridRef} className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 34, scale: 0.96, filter: 'blur(10px)' }}
                animate={
                  isProcessInView
                    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                    : {}
                }
                transition={{
                  duration: 0.68,
                  delay: index * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* 카드 */}
                <div className="group h-full overflow-hidden rounded-lg border border-[#a66732]/32 bg-[#fff8eb]/92 shadow-[0_18px_45px_rgba(73,50,41,0.14)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#8f3528]/45 hover:shadow-[0_24px_55px_rgba(73,50,41,0.2)]">
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
                    <div className="absolute left-2 top-2 md:left-3 md:top-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#8f3528] text-sm font-black text-[#fff2d8] shadow-[0_10px_24px_rgba(143,53,40,0.28)] md:h-12 md:w-12 md:text-lg">
                        {process.number}
                      </div>
                    </div>
                  </div>

                  {/* 컨텐츠 영역 */}
                  <div className="p-3.5 md:p-5">
                    {/* 제목 */}
                    <h3 className="mb-2 break-keep text-base font-black leading-snug text-[#2b1b16] md:text-xl">
                      {process.title}
                    </h3>

                    {/* 설명 */}
                    <p className="text-xs font-bold leading-5 text-[#6e5745] md:text-sm md:leading-6">
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
          <p className="mb-6 text-lg font-black text-[#4a2412] md:text-xl">
            체계적인 창업 시스템으로 성공적인 오픈을 약속드립니다
          </p>
          <a
            href="tel:01099239502"
            className="inline-block rounded-full bg-[#26140e] px-8 py-4 text-lg font-black text-[#c9a24d] shadow-[0_16px_38px_rgba(38,20,14,0.24)] transition-all duration-300 hover:scale-105 hover:text-[#e2b957] hover:shadow-[0_22px_48px_rgba(38,20,14,0.3)]"
          >
            창업 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
