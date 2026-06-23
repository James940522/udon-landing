'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function BrandIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      title: '신뢰',
      subtitle: 'CONFIDENCE',
      description:
        '[오늘은 볶음우동]은 점주님들의 신뢰를 바탕으로 성장해 나가는 브랜드입니다. 점주님의 성공이 저희의 신뢰가 된다는 마음으로 모든 매장의 성장을 목표로 함께합니다.',
    },
    {
      title: '맛과 문화',
      subtitle: 'FLAVOR & CULTURE',
      description:
        '이제 음식은 배를 채우는 용도가 아닌 하나의 문화입니다. 한번 맛 보고 지나가는 음식이 아닌 "볶음우동" 이라는 음식을 생각할 때 [오늘은 볶음우동] 이라는 브랜드가 가장 먼저 생각 날 수 있도록 최고의 품질과 맛을 추구합니다.',
    },
    {
      title: '특별함',
      subtitle: 'SPECIAL',
      description:
        '저희 [오늘은 볶음우동]의 가장 큰 메리트는 "특별함"입니다. 이제는 음식 또한 더 많은 주문을 위해 광고 와 할인이 의무가 되버린 과열경쟁입니다. 과열된 음식 시장에서 특별한 메뉴인 "볶음우동"으로 점주님들에게 조금이나마 나은 환경을 만들어갑니다.',
    },
  ];

  return (
    <section
      id="brand"
      className="relative flex min-h-[clamp(48rem,92vh,64rem)] items-center overflow-hidden bg-[#ead9aa] py-24 text-[#26140e] md:py-32 lg:py-40"
      ref={ref}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 bg-[#8f3528]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 top-7 z-20 px-4 sm:top-9 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-[#c9a24d]/55 pb-3 text-[9px] font-black tracking-[0.2em] text-[#8f3528] sm:text-[10px]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24d]" aria-hidden="true" />
            01 / BRAND STORY
          </span>
          <span className="flex items-center gap-2 text-[#725744]">
            TODAY UDON ARCHIVE
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24d]" aria-hidden="true" />
          </span>
        </div>
      </div>

      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 bg-[#ead9aa]">
        {/* 이미지 컨테이너 - 원본 크기까지만 확대 */}
        <div className="relative w-full h-full max-w-[1920px] mx-auto">
          <Image
            src="/asset/menu/today-bokkeum-udon/menu-gallery/menu-gallery-09.jpg"
            alt=""
            fill
            className="object-cover brightness-[0.92] saturate-[0.82]"
            quality={90}
            aria-hidden="true"
          />
        </div>
        {/* 밝은 종이색 베일 */}
        <div className="absolute inset-0 bg-[#f6efe3]/38" aria-hidden="true" />
        {/* 사진의 온도를 남기는 웜 그라데이션 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#fff8eb]/62 via-[#d7c09b]/58 to-[#6f3028]/52"
          aria-hidden="true"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.22]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(143,53,40,0.16) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 텍스트 콘텐츠 - 모바일 좌측, 데스크톱 중앙 정렬 */}
        <motion.div
          className="space-y-10 text-left md:space-y-14 md:text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* 타이틀 */}
          <div>
            <motion.div
              className="mb-3 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-black uppercase tracking-[0.28em] text-[#8f3528] md:text-base lg:text-lg">
                About Us
              </span>
            </motion.div>
            <motion.h2
              className="mb-6 font-heading text-4xl font-black leading-tight tracking-[-0.045em] text-[#26140e] md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span>오늘은 볶음우동</span>
            </motion.h2>
          </div>

          {/* 밸류 리스트 - 가로 배치 */}
          <motion.div
            className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-3 md:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="rounded-[24px] border border-[#c9a24d]/45 bg-[#e7d6bb]/84 p-6 text-left shadow-[0_20px_50px_rgba(59,33,21,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8f3528]/35 hover:bg-[#ead9aa]/92 md:p-7 md:text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#8f3528]">
                  {value.subtitle}
                </div>
                <h3
                  className="mb-3 text-xl font-black text-[#26140e] md:text-2xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-[#725744]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#c9a24d]/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-4.5rem] left-1/2 z-20 h-24 w-[min(92rem,130vw)] -translate-x-1/2 rounded-[50%] border border-[#c9a24d]/45 bg-[#dfc9a7] shadow-[0_-12px_32px_rgba(59,33,21,0.1)]"
        aria-hidden="true"
      />
    </section>
  );
}
