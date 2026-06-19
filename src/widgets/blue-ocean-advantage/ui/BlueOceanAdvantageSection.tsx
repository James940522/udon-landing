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
      className="relative overflow-hidden bg-[#ead9aa] py-20 text-[#2b1b16] md:py-32"
      ref={ref}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/bg-1/sec3-bg.png"
          alt=""
          fill
          className="object-cover brightness-[0.92] saturate-[0.72]"
          quality={90}
          aria-hidden="true"
        />
        {/* 따뜻한 종이색 베일 */}
        <div className="absolute inset-0 bg-[#f7eddb]/48" aria-hidden="true" />
        {/* 앞뒤 섹션을 잇는 웜 그라데이션 */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#fff8eb]/68 via-[#e8d4b8]/56 to-[#c99676]/48"
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
            className="mb-6 inline-block rounded-full border border-[#8f3528]/25 bg-[#9b5b46]/92 px-6 py-3 shadow-[0_12px_30px_rgba(73,50,41,0.16)] backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-bold tracking-wider text-[#fff8eb] md:text-base">
              과열 경쟁이 너무 심해진 현재 배달업계
            </span>
          </motion.div>

          <motion.h2
            className="mb-6 text-3xl font-bold leading-tight text-[#2b1b16] sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            경쟁없이 살아남는 법
            <br />
            <span className="text-[#a66732]">현시점 배달업계 최대의 블루오션</span>
            <br />
            <span className="text-[#8f3528]">&apos;볶음우동&apos;</span>
          </motion.h2>

          <motion.p
            className="text-lg font-semibold text-[#8f3528] md:text-xl"
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
          <div className="rounded-3xl border border-[#8f3528]/20 bg-[#e5c8b5]/80 p-8 shadow-[0_24px_70px_rgba(73,50,41,0.16)] backdrop-blur-sm md:p-12">
            <h3
              className="mb-8 text-center text-2xl font-bold text-[#8f3528] md:text-3xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              현재 자영업자 사장님들의 최대 고민
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-[#c9a24d]/35 bg-[#fff8eb]/82 p-6 shadow-[0_14px_34px_rgba(73,50,41,0.1)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="mb-3 text-lg font-bold text-[#8f3528]">{point.problem}</div>
                  <div className="mb-3 text-sm leading-relaxed text-[#725744]">
                    {point.impact}
                  </div>
                  <div className="border-t border-[#c9a24d]/30 pt-3 text-sm font-semibold text-[#9b5b46]">
                    → {point.result}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-base leading-relaxed text-[#493229] md:text-lg">
              대부분의 배달 브랜드는 같은 배달 상권에서 치열하게 경쟁합니다.
              <br />
              가격 경쟁, 쿠폰 할인, 리뷰 전쟁에 에너지를 쏟다 보면
              <br className="hidden sm:block" />
              <span className="font-semibold text-[#8f3528]">
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
            className="mb-4 text-3xl font-bold text-[#2b1b16] md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-[#a66732]">오늘은 볶음우동</span>이 해답입니다
          </h3>
          <p className="text-lg text-[#725744]">
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
              className="group relative overflow-hidden rounded-[1.25rem] border border-[#d8c8b5]/90 bg-[#fffaf2]/94 p-8 pt-24 shadow-[0_22px_58px_rgba(73,50,41,0.18)] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{
                boxShadow: '0 28px 64px rgba(155, 91, 70, 0.22)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]"
                aria-hidden="true"
              />

              {/* 번호 배지 */}
              <div className="absolute left-6 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#fffaf2] bg-[#9b5b46] shadow-[0_7px_18px_rgba(73,50,41,0.2)]">
                <span className="text-sm font-black tracking-[-0.04em] text-[#fffaf2]">
                  0{index + 1}
                </span>
              </div>

              {/* 하이라이트 배지 */}
              <div className="absolute right-6 top-7 z-10">
                <span className="inline-block rounded-full border border-[#d8c8b5] bg-[#fffaf2]/96 px-3 py-1 text-xs font-bold text-[#8f3528] shadow-[0_6px_16px_rgba(73,50,41,0.1)]">
                  {benefit.highlight}
                </span>
              </div>

              {/* 카드 내용 */}
              <div className="relative">
                <h3
                  className="mb-4 text-xl font-bold text-[#2b1b16] transition-colors duration-300 group-hover:text-[#8f3528] md:text-2xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#725744] md:text-base">
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
          <div className="relative rounded-3xl border-4 border-[#c9a24d]/45 bg-[#2b1b16]/96 p-8 shadow-[0_28px_75px_rgba(43,27,22,0.28)] backdrop-blur-md md:p-12">
            {/* 좌측 인용 부호 */}
            <div className="absolute -top-6 left-8 font-serif text-8xl leading-none text-[#c9a24d]/28">
              &quot;
            </div>

            <p
              className="relative z-10 text-center text-2xl font-bold leading-relaxed text-[#fff8eb] md:text-3xl lg:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              경쟁의 해답은
              <br className="sm:hidden" />
              <span className="sm:inline"> </span>&apos;더 잘하는 것&apos;이 아니라
              <br />
              <span className="text-[#d9ad55]">&apos;겹치지 않는 것&apos;</span>
            </p>

            {/* 우측 인용 부호 */}
            <div className="absolute -bottom-2 right-8 font-serif text-8xl leading-none text-[#c9a24d]/28">
              &quot;
            </div>

            {/* 은은한 브랜드색 베일 */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-[#8f3528]/12 via-transparent to-[#c9a24d]/10" />
          </div>
        </motion.div>

        {/* 최종 강조 메시지 */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <div className="rounded-2xl border border-[#c9a24d]/45 bg-[#ead9aa]/72 p-8 shadow-[0_20px_50px_rgba(73,50,41,0.13)] backdrop-blur-sm md:p-10">
            <p className="mb-4 text-center text-base leading-relaxed text-[#493229] md:text-lg lg:text-xl">
              <span className="text-xl font-bold text-[#8f3528] md:text-2xl">
                오늘은 볶음우동
              </span>
              은 배달을 위해 설계된 브랜드입니다.
            </p>
            <p className="text-center text-base leading-relaxed text-[#725744] md:text-lg">
              할인 경쟁에 지친 사장님들께
              <br className="sm:hidden" />
              <span className="sm:inline"> </span>
              <span className="font-semibold text-[#a66732]">
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
