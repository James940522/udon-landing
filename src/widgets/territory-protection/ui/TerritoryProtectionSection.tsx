'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisonCards = [
  {
    number: '01',
    eyebrow: 'OPEN COMPETITION',
    label: '일반 브랜드',
    title: '한 상권에 여러 지점',
    description: '같은 배달권역 안에서 2개 이상 지점이 매출을 나눠 갖는 구조',
    background: '#493229',
  },
  {
    number: '02',
    eyebrow: 'EXCLUSIVE TERRITORY',
    label: '오늘은 볶음우동',
    title: '배달 구역 보장',
    description: '신규 출점 제한지역을 두고 상권 충돌을 최소화합니다.',
    background: '#9b5b46',
  },
];

const policyFacts = [
  { value: 'ONE', label: '상권 단위 보호' },
  { value: 'ZERO', label: '무리한 중복 출점' },
];

const angularDisplayFont = {
  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
} as const;

export default function TerritoryProtectionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -18% 0px' });

  return (
    <section
      id="territory-protection"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3ede4] py-20 text-[#2b1b16] md:py-28 lg:py-32"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(255,250,242,0.78) 0%, rgba(243,237,228,0.96) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-10 lg:mb-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-11 w-px bg-[#9b5b46]/45" aria-hidden="true" />
              <div>
                <p
                  className="text-sm leading-none tracking-[0.18em] text-[#2b1b16] md:text-base"
                  style={angularDisplayFont}
                >
                  PROTECTED SALES AREA
                </p>
                <p className="mt-2 text-[0.68rem] font-bold tracking-[0.28em] text-[#9b5b46]">
                  TERRITORY POLICY
                </p>
              </div>
            </div>

            <h2 className="font-heading text-[2.65rem] font-bold leading-[1.18] tracking-[-0.055em] text-[#2b1b16] sm:text-5xl md:text-6xl lg:text-[4.65rem]">
              안정적인 매출은
              <br />
              <span className="relative mt-2 inline-block text-[#9b5b46]">
                상권 보장
                <span className="text-[#2b1b16]">부터</span>
              </span>
              <br />
              시작됩니다.
            </h2>
          </motion.div>

          <motion.div
            className="border-l border-[#d8c8b5] pl-6 md:pl-9 lg:mb-2 lg:pl-12"
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.12 }}
          >
            <p className="max-w-2xl text-base font-semibold leading-8 text-[#746054] md:text-lg md:leading-9">
              오늘은 볶음우동은 배달 상권 기준으로 신규 출점 제한지역을 설정합니다.
              <span className="text-[#2b1b16]">
                {' '}
                매장 수보다 한 점주의 운영 안정성을 먼저 생각합니다.
              </span>
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-2 border-y border-[#d8c8b5]">
              {policyFacts.map((fact, index) => (
                <div
                  key={fact.value}
                  className={`py-5 ${index === 1 ? 'border-l border-[#d8c8b5] pl-6' : 'pr-6'}`}
                >
                  <p
                    className="text-3xl leading-none tracking-[0.04em] text-[#9b5b46] md:text-4xl"
                    style={angularDisplayFont}
                  >
                    {fact.value}
                  </p>
                  <p className="mt-2 text-xs font-bold tracking-[-0.01em] text-[#746054] md:text-sm">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)] lg:gap-6">
          <motion.div
            className="relative min-w-0"
            initial={{ opacity: 0, y: 34 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.78, delay: 0.2 }}
          >
            <div className="relative bg-[#d8c8b5] p-px sm:[clip-path:polygon(0_0,calc(100%_-_34px)_0,100%_34px,100%_100%,34px_100%,0_calc(100%_-_34px))]">
              <div className="relative overflow-hidden bg-[#493229] p-2 sm:p-3 sm:[clip-path:polygon(0_0,calc(100%_-_33px)_0,100%_33px,100%_100%,33px_100%,0_calc(100%_-_33px))]">
                <div className="flex items-center justify-between border-b border-[#d8c8b5]/25 px-2 pb-3 pt-1 sm:px-3">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-[#9b5b46]" aria-hidden="true" />
                    <p
                      className="text-xs tracking-[0.16em] text-[#fffaf2] sm:text-sm"
                      style={angularDisplayFont}
                    >
                      GANGNAM DELIVERY MAP
                    </p>
                  </div>
                  <p
                    className="text-[0.65rem] tracking-[0.12em] text-[#d8c8b5] sm:text-xs"
                    style={angularDisplayFont}
                  >
                    AREA ANALYSIS / 2026
                  </p>
                </div>

                <div className="relative mt-2 flex w-full items-center justify-center overflow-hidden bg-[#fffaf2]">
                  <Image
                    src="/new-asset/territory/gangnam-territory.png"
                    alt="강남구 배달 상권 비교 지도"
                    width={1672}
                    height={941}
                    className="h-auto w-full max-w-full select-none object-contain"
                    sizes="(max-width: 1024px) 100vw, 850px"
                    quality={92}
                  />

                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#2b1b16]/15" />
                  <div className="pointer-events-none absolute left-1/2 top-[58%] z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#d8c8b5] bg-[#2b1b16] text-lg text-[#fffaf2] shadow-[0_12px_35px_rgba(43,27,22,0.28)] sm:h-16 sm:w-16 sm:text-2xl md:h-20 md:w-20 md:text-3xl">
                    <span style={angularDisplayFont}>VS</span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="border-r border-[#d8c8b5]/25 bg-[#2b1b16] px-3 py-4 sm:px-5">
                    <p
                      className="text-[0.62rem] tracking-[0.14em] text-[#d8c8b5]/75 sm:text-xs"
                      style={angularDisplayFont}
                    >
                      MULTIPLE STORES
                    </p>
                    <p className="mt-1 text-xs font-bold text-[#fffaf2]/65 sm:text-sm">
                      복수 지점 경쟁
                    </p>
                  </div>
                  <div className="bg-[#9b5b46] px-3 py-4 sm:px-5">
                    <p
                      className="text-[0.62rem] tracking-[0.14em] text-[#fffaf2]/70 sm:text-xs"
                      style={angularDisplayFont}
                    >
                      GUARANTEED ZONE
                    </p>
                    <p className="mt-1 text-xs font-bold text-[#fffaf2] sm:text-sm">
                      배달 구역 보장
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.76, delay: 0.32 }}
          >
            <div
              className="pointer-events-none absolute bottom-20 left-[1.45rem] top-9 hidden w-px bg-[#d8c8b5] sm:block lg:left-[1.65rem]"
              aria-hidden="true"
            />

            {comparisonCards.map((card, index) => (
              <div
                key={card.number}
                className="relative flex-1 border border-[#d8c8b5]/45 p-5 sm:pl-16 lg:p-7 lg:pl-[4.75rem]"
                style={{
                  backgroundColor: card.background,
                  clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)',
                }}
              >
                <div className="absolute left-4 top-6 hidden h-5 w-5 items-center justify-center bg-[#fffaf2] text-[#493229] sm:flex lg:left-4 lg:top-8">
                  <span className="text-xs" style={angularDisplayFont}>
                    {index + 1}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-xs tracking-[0.13em] text-[#d8c8b5] lg:text-sm"
                      style={angularDisplayFont}
                    >
                      {card.eyebrow}
                    </p>
                    <p className="mt-2 text-xs font-bold text-[#fffaf2]/58">{card.label}</p>
                  </div>
                  <span
                    className="text-4xl leading-none text-[#fffaf2]/10 lg:text-5xl"
                    style={angularDisplayFont}
                  >
                    {card.number}
                  </span>
                </div>

                <h3 className="mt-8 font-heading text-2xl font-bold leading-tight tracking-[-0.04em] text-[#fffaf2] md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-[#fffaf2]/70">
                  {card.description}
                </p>
              </div>
            ))}

            <div
              className="relative overflow-hidden bg-[#d8c8b5] px-5 py-5 text-[#2b1b16] lg:px-7"
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)',
              }}
            >
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs tracking-[0.14em]" style={angularDisplayFont}>
                    SALES STABILITY
                  </p>
                  <p className="mt-2 text-lg font-black tracking-[-0.03em]">
                    상권 간섭은 낮추고
                    <br />
                    운영 안정성은 높입니다.
                  </p>
                </div>
                <span
                  className="text-5xl leading-none text-[#2b1b16]/18"
                  style={angularDisplayFont}
                  aria-hidden="true"
                >
                  +
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
