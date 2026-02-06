'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function BlueOceanAdvantageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      title: '경쟁 강도 완화',
      description:
        '같은 배달 상권에서 치킨, 피자, 중국집이 서로 경쟁하는 동안 볶음우동은 독자적인 포지션을 유지합니다.',
    },
    {
      title: '마진 보호',
      description:
        '할인 압박과 쿠폰 경쟁에서 자유로워 안정적인 단가를 유지하고, 수익성을 지킬 수 있습니다.',
    },
    {
      title: '블루오션 포지셔닝',
      description:
        '배달앱에서 고객이 선택할 때 직접 비교 대상이 적어 주문 전환율이 높고 의사결정이 빠릅니다.',
    },
  ];

  return (
    <section
      id="blue-ocean"
      className="relative overflow-hidden py-20 md:py-32 bg-stone-900"
      ref={ref}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/bg-1/sec4-bg.jpg"
          alt=""
          fill
          className="object-cover"
          quality={90}
          aria-hidden="true"
        />
        {/* 다크 오버레이 */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        {/* 그라데이션 오버레이 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 메인 헤드라인 */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            언제까지 경쟁에 치일 건가요?
            <br />
            <span className="text-amber-400">에너지 낭비 없는 배달 창업</span>, 볶음우동입니다
          </motion.h2>
        </motion.div>

        {/* 문제 제기 단락 */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            대부분의 배달 브랜드는 같은 배달 상권에서 치열하게 경쟁합니다.
            <br />
            가격 경쟁, 쿠폰 할인, 리뷰 전쟁에 에너지를 쏟다 보면
            <br className="hidden sm:block" />
            마진은 줄어들고 운영 스트레스만 쌓입니다.
          </p>
        </motion.div>

        {/* 핵심 포인트 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-r from-stone-900/95 to-stone-800/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-transparent hover:border-amber-500/50 transition-all duration-300 shadow-2xl"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(28, 25, 23, 0.95) 0%, rgba(41, 37, 36, 0.95) 100%)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(245, 158, 11, 0.2)',
              }}
            >
              {/* 불꽃 테두리 효과 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              {/* 번호 배지 - 미니멀 */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-5xl md:text-6xl font-light text-amber-500/20 group-hover:text-amber-500/30 transition-colors duration-300">
                  0{index + 1}
                </span>
              </div>

              {/* 카드 내용 */}
              <div className="pt-6 relative">
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 하이라이트 인용구 */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="relative bg-stone-900/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border-4 border-amber-500/40 shadow-2xl">
            {/* 좌측 인용 부호 */}
            <div className="absolute -top-6 left-8 text-8xl text-amber-400/30 font-serif leading-none">
              "
            </div>

            <p
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-relaxed relative z-10"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              경쟁의 해답은
              <br className="sm:hidden" />
              <span className="sm:inline"> </span>'더 잘하는 것'이 아니라
              <br />
              <span className="text-amber-400">'겹치지 않는 것'</span>
            </p>

            {/* 우측 인용 부호 */}
            <div className="absolute -bottom-2 right-8 text-8xl text-amber-400/30 font-serif leading-none">
              "
            </div>

            {/* 글로우 효과 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-yellow-500/5 pointer-events-none" />
          </div>
        </motion.div>

        {/* 마무리 단락 */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            <span className="text-amber-400 font-semibold">오늘은 볶음우동</span>은 배달을 위해
            설계된 브랜드입니다.
            <br />
            경쟁에 소모되는 대신, 운영과 매출에 집중할 수 있는 환경을 만들어드립니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
