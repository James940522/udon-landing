'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisonCards = [
  {
    eyebrow: '일반 브랜드',
    title: '한 상권에 여러 지점',
    description: '같은 배달권역 안에서 2개 이상 지점이 매출을 나눠 갖는 구조',
    tone: 'quiet',
  },
  {
    eyebrow: '오늘은 볶음우동',
    title: '배달 구역 보장',
    description: '신규 출점 제한지역을 두고 상권 충돌을 최소화합니다.',
    tone: 'brand',
  },
];

const backgroundWords = [
  'TERRITORY PROTECTION',
  'DELIVERY AREA',
  'STABLE SALES',
  'NO OVERLAPPED STORE',
];

export default function TerritoryProtectionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -18% 0px' });

  return (
    <section
      id="territory-protection"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6ead2] py-20 text-[#5f351d] md:py-28"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 252, 243, 0.62), transparent 18%, transparent 82%, rgba(255, 247, 225, 0.55)), repeating-linear-gradient(90deg, rgba(170, 116, 45, 0.09) 0 1px, transparent 1px 104px), repeating-linear-gradient(0deg, rgba(170, 116, 45, 0.045) 0 1px, transparent 1px 14px), linear-gradient(135deg, #fff8e8 0%, #f6e2ba 50%, #e8c986 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#b57c2e]/60 to-transparent" />
      <div className="absolute inset-x-10 top-10 h-px bg-linear-to-r from-transparent via-[#c99a4a]/22 to-transparent" />
      <div className="absolute left-[6vw] top-20 bottom-20 w-px bg-linear-to-b from-transparent via-[#b57c2e]/20 to-transparent" />
      <div className="absolute right-[6vw] top-20 bottom-20 w-px bg-linear-to-b from-transparent via-[#b57c2e]/20 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block">
        {backgroundWords.map((word, index) => (
          <div
            key={word}
            className="absolute top-[-16%] bottom-[-16%] flex w-10 justify-center text-[#8f5a24]/16"
            style={{
              left: `${8 + index * 26}%`,
            }}
            aria-hidden="true"
          >
            <div
              className="flex h-[200%] flex-col items-center gap-8 whitespace-nowrap text-[1.05rem] font-black uppercase leading-none tracking-[0.1em] [writing-mode:vertical-rl]"
              style={{
                animation:
                  index % 2 === 0
                    ? 'startup-benefit-marquee-up 32s linear infinite'
                    : 'startup-benefit-marquee-down 38s linear infinite',
              }}
            >
              {[0, 1, 2, 3].map((item) => (
                <span key={item}>{word}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-[#a6601c] md:text-sm">
            Territory protection
          </p>
          <h2 className="text-4xl font-black leading-tight text-[#4a2717] drop-shadow-[0_8px_20px_rgba(145,91,26,0.16)] md:text-6xl lg:text-7xl">
            안정적인 매출은
            <br />
            상권 보장부터 시작됩니다.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base font-bold leading-8 text-[#7a5438] md:text-lg">
            오늘은 볶음우동은 배달 상권 기준으로 신규 출점 제한지역을 설정해 무리한 중복 출점을
            막고, 점주님의 안정적인 운영 가능성을 높입니다.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {comparisonCards.map((card, index) => {
              const isBrand = card.tone === 'brand';

              return (
                <motion.div
                  key={card.title}
                  className={`relative overflow-hidden rounded-lg border p-6 md:p-8 lg:p-9 ${
                    isBrand
                      ? 'border-[#b77a24]/55 bg-[#fff1cc]/92 shadow-[0_24px_70px_rgba(156,105,37,0.18)]'
                      : 'border-[#d7bd7d]/60 bg-[#fffaf0]/82 shadow-[0_22px_60px_rgba(122,84,45,0.12)]'
                  }`}
                  initial={{ opacity: 0, x: -28 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.18 + index * 0.12 }}
                >
                  <div
                    className={`absolute inset-0 ${
                      isBrand
                        ? 'bg-linear-to-br from-[#d6a246]/30 via-transparent to-[#fff8df]/54'
                        : 'bg-linear-to-br from-white/70 via-transparent to-[#ead29a]/18'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <p
                      className={`mb-5 text-xs font-black tracking-[0.16em] ${
                        isBrand ? 'text-[#a35a17]' : 'text-[#8c6a3b]'
                      }`}
                    >
                      {card.eyebrow}
                    </p>
                    <h3 className="text-3xl font-black leading-tight text-[#4b2717] md:text-4xl">
                      {card.title}
                    </h3>
                    <p className="mt-5 text-sm font-bold leading-7 text-[#7a5438] md:text-base">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 34 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.34 }}
          >
            <div className="relative overflow-hidden rounded-lg border border-[#c7973e]/45 bg-[#fffaf0] shadow-[0_30px_90px_rgba(122,84,45,0.2)]">
              <Image
                src="/new-asset/territory/gangnam-territory.png"
                alt="강남구 배달 상권 비교 지도"
                width={1672}
                height={941}
                className="h-auto w-full select-none"
                sizes="(max-width: 1024px) 100vw, 760px"
                quality={92}
              />

              <div className="pointer-events-none absolute left-1/2 top-[59%] z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#fff8e8] bg-[#4a2717] text-xl font-black text-[#ffd36d] shadow-[0_14px_40px_rgba(98,58,20,0.28)] sm:h-16 sm:w-16 sm:text-2xl md:h-20 md:w-20 md:text-3xl">
                VS
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 text-center text-[0.68rem] font-black leading-tight sm:text-sm md:text-base">
                <div className="flex min-h-11 items-center justify-center bg-[#4a2717] px-2 text-[#fff3d5] sm:min-h-14 sm:px-4">
                  일반 브랜드: 복수 지점 경쟁
                </div>
                <div className="flex min-h-11 items-center justify-center bg-[#b77a24] px-2 text-white sm:min-h-14 sm:px-4">
                  오늘은 볶음우동: 배달 구역 보장
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs font-black text-[#6d452a] sm:text-sm">
              <div className="rounded-md border border-[#d7bd7d]/58 bg-[#fffaf0]/78 px-3 py-3 shadow-[0_14px_36px_rgba(122,84,45,0.1)]">
                상권 내 지점 간섭 최소화
              </div>
              <div className="rounded-md border border-[#b77a24]/42 bg-[#fff1cc]/86 px-3 py-3 text-[#5a321d] shadow-[0_14px_36px_rgba(156,105,37,0.12)]">
                제한 구역 기준 운영 안정화
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
