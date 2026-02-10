'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function BlueOceanAdvantageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const painPoints = [
    {
      problem: '과도한 할인 경쟁',
      impact: '배달앱 수수료 + 할인 쿠폰 + 이벤트 프로모션',
      result: '매출은 늘어도 실제 수익은 감소',
    },
    {
      problem: '리뷰 전쟁',
      impact: '같은 메뉴를 파는 경쟁업체와 끝없는 비교',
      result: '고객 확보 비용 증가',
    },
    {
      problem: '원가 압박',
      impact: '할인으로 인한 마진 축소 + 식자재 가격 상승',
      result: '운영 스트레스 극대화',
    },
  ];

  const benefits = [
    {
      title: '독점적 시장 포지션',
      description:
        '치킨, 피자, 중국집이 서로 경쟁하는 동안 볶음우동은 배달앱에서 독자적인 카테고리를 형성합니다.',
      highlight: '직접 비교 대상 없음',
    },
    {
      title: '마진 깎이는 할인에서 해방',
      description:
        '과열 경쟁으로 인한 할인 압박이 적어 안정적인 단가를 유지하고, 실질적인 수익을 보호할 수 있습니다.',
      highlight: '수익성 보장',
    },
    {
      title: '빠른 주문 전환',
      description:
        '고객이 배달앱에서 선택할 때 비교 검토 시간이 짧아 주문 전환율이 높고 재주문율도 우수합니다.',
      highlight: '고객 결정 용이',
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
          src="/asset/bg-1/sec3-bg.png"
          alt=""
          fill
          className="object-cover"
          quality={90}
          aria-hidden="true"
        />
        {/* 다크 오버레이 */}
        <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
        {/* 그라데이션 오버레이 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"
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
          <motion.div
            className="inline-block mb-6 px-6 py-3 bg-red-600/90 backdrop-blur-sm rounded-full border border-red-400/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white font-bold text-sm md:text-base tracking-wider">
              과열 경쟁이 너무 심해진 현재 배달업계
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            경쟁없이 살아남는 법
            <br />
            <span className="text-amber-400">현시점 배달업계 최대의 블루오션</span>
            <br />
            <span className="text-amber-300">'볶음우동'</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-red-400 font-semibold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            마진 깎이는 할인에서 벗어나는 현명한 선택
          </motion.p>
        </motion.div>

        {/* 문제 제기 단락 */}
        <motion.div
          className="max-w-5xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-stone-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-red-500/30">
            <h3
              className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-red-400">현재 자영업자 사장님들의 최대 고민</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-stone-900/80 rounded-xl p-6 border border-stone-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-red-400 font-bold text-lg mb-3">{point.problem}</div>
                  <div className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {point.impact}
                  </div>
                  <div className="text-red-300 text-sm font-semibold pt-3 border-t border-stone-700">
                    → {point.result}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-white/90 text-base md:text-lg leading-relaxed">
              대부분의 배달 브랜드는 같은 배달 상권에서 치열하게 경쟁합니다.
              <br />
              가격 경쟁, 쿠폰 할인, 리뷰 전쟁에 에너지를 쏟다 보면
              <br className="hidden sm:block" />
              <span className="text-red-400 font-semibold">
                마진은 줄어들고 운영 스트레스만 쌓입니다.
              </span>
            </p>
          </div>
        </motion.div>

        {/* 해결책: 블루오션 타이틀 */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-amber-400">오늘은 볶음우동</span>이 해답입니다
          </h3>
          <p className="text-lg text-white/80">
            경쟁에 소모되는 대신, 운영과 매출에 집중할 수 있습니다
          </p>
        </motion.div>

        {/* 핵심 포인트 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
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
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
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

              {/* 하이라이트 배지 */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
                  {benefit.highlight}
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
          className="max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
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

        {/* 최종 강조 메시지 */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <div className="bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-amber-500/30">
            <p className="text-center text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-4">
              <span className="text-amber-400 font-bold text-xl md:text-2xl">
                오늘은 볶음우동
              </span>
              은 배달을 위해 설계된 브랜드입니다.
            </p>
            <p className="text-center text-white/80 text-base md:text-lg leading-relaxed">
              할인 경쟁에 지친 사장님들께
              <br className="sm:hidden" />
              <span className="sm:inline"> </span>
              <span className="text-amber-300 font-semibold">
                수익을 지키면서 성장할 수 있는 새로운 기회
              </span>
              를 제공합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
