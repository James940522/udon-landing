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
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-amber-900"
      ref={ref}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 bg-amber-900">
        {/* 이미지 컨테이너 - 원본 크기까지만 확대 */}
        <div className="relative w-full h-full max-w-[1920px] mx-auto">
          <Image
            src="/asset/menu/오늘은_볶음우동/메뉴모음컷/메뉴모음컷 9.jpg"
            alt=""
            fill
            className="object-cover"
            quality={90}
            aria-hidden="true"
          />
        </div>
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        {/* 그라데이션 오버레이 - 진중한 느낌 강화 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 텍스트 콘텐츠 - 모바일 좌측, 데스크톱 중앙 정렬 */}
        <motion.div
          className="space-y-8 md:space-y-10 text-left md:text-center"
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
              <span className="text-sm md:text-base lg:text-lg text-white/80 font-bold tracking-widest uppercase">
                About Us
              </span>
            </motion.div>
            <motion.h2
              className="typo-h2 text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-yellow-400">오늘은 볶음우동</span>
            </motion.h2>
          </div>

          {/* 밸류 리스트 - 가로 배치 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 text-left md:text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-xs text-yellow-400/90 font-semibold uppercase tracking-wider mb-2">
                  {value.subtitle}
                </div>
                <h3
                  className="text-lg md:text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h3>
                <p className="typo-body-sm text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
