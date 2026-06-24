'use client';

import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface Strength {
  number: string;
  title: string;
  desc: string;
  image: string;
}

const STRENGTHS: Strength[] = [
  {
    number: '01',
    title: '안정적인 원재료',
    desc: '식자재 비용 28~33%, 주 6회 전국 배송으로 원재료 수급을 안정화합니다.',
    image: '/asset/etc/1.jpg',
  },
  {
    number: '02',
    title: '간단하고 편리한 조리',
    desc: '평균 3분 내외 조리로 1~2인 운영과 초보자 교육에 최적화했습니다.',
    image: '/asset/etc/2.png',
  },
  {
    number: '03',
    title: '높은 만족도',
    desc: '높은 음식 퀄리티와 다양한 선택지로 만족도와 재주문을 높입니다.',
    image: '/asset/etc/3.png',
  },
  {
    number: '04',
    title: '비용의 최소화',
    desc: '7~10평 소형 매장과 최적 동선으로 고정비 부담을 줄입니다.',
    image: '/asset/etc/4.png',
  },
  {
    number: '05',
    title: '더불어 나아가는 본사',
    desc: '오픈 이후에도 매출과 운영 고민을 함께 점검하며 성장을 돕습니다.',
    image: '/asset/etc/5.png',
  },
  {
    number: '06',
    title: '배달 편의성',
    desc: '배달 포장에 맞춘 메뉴와 레시피로 효율과 고객 만족을 끌어올립니다.',
    image: '/asset/etc/6.png',
  },
];

const ROADMAP_SIGNALS = [
  { label: 'System', value: '06 steps' },
  { label: 'Cooking', value: '3 min' },
  { label: 'Supply', value: '6 days' },
];

interface TimelineItemProps {
  strength: Strength;
  index: number;
  active: boolean;
  reduceMotion: boolean;
}

function TimelineItem({ strength, index, active, reduceMotion }: TimelineItemProps) {
  return (
    <motion.article
      data-roadmap-step-tile
      className="group relative flex h-full min-h-[15.5rem] flex-col overflow-hidden rounded-[1.35rem] border border-[#a9824c]/55 bg-[#21150f]/94 p-2.5 shadow-[0_22px_55px_rgba(18,10,6,0.38)] transition-all duration-300 md:min-h-[20rem] md:p-3.5"
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 22,
        scale: reduceMotion ? 1 : 0.96,
      }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: reduceMotion ? 0.01 : 0.58,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
              boxShadow: '0 30px 70px rgba(18, 10, 6, 0.58)',
              borderColor: '#d29a52',
            }
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(145deg, rgba(240,223,192,0.08), rgba(181,110,50,0.07) 38%, rgba(33,21,15,0) 72%)',
        }}
      />
      <div className="pointer-events-none absolute inset-[5px] rounded-[1.05rem] border border-[#a9824c]/18" />
      <span className="absolute inset-x-4 top-0 h-px bg-[#b56e32]" aria-hidden="true" />

      <div className="relative h-24 overflow-hidden rounded-[1rem] border border-[#a9824c]/30 md:h-32 lg:h-36">
        <Image
          src={strength.image}
          alt={strength.title}
          fill
          className="object-cover brightness-[0.62] saturate-[0.72] contrast-[1.1] transition duration-700 group-hover:scale-[1.06] group-hover:brightness-[0.82]"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#140c08]/12 via-[#21150f]/18 to-[#21150f]/82" />
        <div className="absolute bottom-2 left-2 rounded-full border border-[#a9824c]/35 bg-[#140c08]/72 px-2 py-1 text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#c8b69a] md:text-[0.64rem]">
          Strategy deck
        </div>
      </div>

      <div className="relative z-10 mt-3 flex flex-1 flex-col">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.22em] text-[#b56e32] md:text-[0.66rem]">
              Roadmap {strength.number}
            </p>
            <h4 className="mt-1 break-keep text-sm font-black leading-snug tracking-[-0.04em] text-[#f0dfc0] md:text-lg">
              {strength.title}
            </h4>
          </div>
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#a9824c]/55 bg-[#713e25] text-sm font-black text-[#f0dfc0] shadow-[0_10px_26px_rgba(18,10,6,0.34)] md:h-11 md:w-11 md:text-base">
            <span className="absolute inset-[3px] rounded-[0.55rem] border border-[#d3b98e]/18" />
            <span className="relative">{strength.number}</span>
          </div>
        </div>

        <div className="mb-3 flex items-center gap-2" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b56e32]" />
          <span className="h-px w-8 bg-[#b56e32]/75" />
          <span className="h-px flex-1 bg-[#a9824c]/20" />
        </div>

        <p className="break-keep text-[0.72rem] font-semibold leading-4 text-[#c8b69a] md:text-sm md:leading-6">
          {strength.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function SuccessionPlanningSectionV2() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -22% 0px' });

  return (
    <section
      id="succession-planning-v2"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2a1d16] py-20 text-[#f0dfc0] md:py-24 lg:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle at 16% 18%, rgba(181,110,50,0.25), transparent 28%), radial-gradient(circle at 84% 78%, rgba(199,160,97,0.18), transparent 32%), linear-gradient(180deg, rgba(22,14,10,0.96) 0%, rgba(42,29,22,0.97) 48%, rgba(18,11,8,0.99) 100%), url('/new-asset/background/startup-benefit-hanji.webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        data-roadmap-coordinate-grid
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(199,160,97,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(199,160,97,0.055) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div
        data-roadmap-gold-frame
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-3 border border-[#c7a061]/[0.24] md:inset-6" />
        <div className="absolute inset-6 border border-[#c7a061]/[0.12] md:inset-10" />
        <span className="absolute left-3 top-3 h-12 w-12 border-l-2 border-t-2 border-[#d29a52]/50 md:left-6 md:top-6 md:h-20 md:w-20" />
        <span className="absolute right-3 top-3 h-12 w-12 border-r-2 border-t-2 border-[#d29a52]/50 md:right-6 md:top-6 md:h-20 md:w-20" />
        <span className="absolute bottom-3 left-3 h-12 w-12 border-b-2 border-l-2 border-[#d29a52]/50 md:bottom-6 md:left-6 md:h-20 md:w-20" />
        <span className="absolute bottom-3 right-3 h-12 w-12 border-b-2 border-r-2 border-[#d29a52]/50 md:bottom-6 md:right-6 md:h-20 md:w-20" />
      </div>

      <div
        data-roadmap-corner-linework
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden text-[#c7a061]/[0.2]"
        aria-hidden="true"
      >
        <svg
          className="absolute -left-28 top-8 h-72 w-[36rem] opacity-80 md:-left-16 md:h-[27rem] md:w-[52rem]"
          viewBox="0 0 620 320"
          fill="none"
        >
          <path
            d="M-16 214C45 211 52 171 101 171C131 171 148 185 164 201C182 164 215 141 257 141C300 141 334 165 351 202C372 181 398 170 430 170C472 170 499 194 514 224C542 205 576 199 636 205"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M74 119C104 88 144 72 194 72C239 72 276 87 305 116M399 104C431 78 469 66 515 67"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute -bottom-24 -right-32 h-80 w-[42rem] opacity-75 md:-right-20 md:h-[31rem] md:w-[58rem]"
          viewBox="0 0 720 360"
          fill="none"
        >
          <path
            d="M-20 260C37 209 92 209 149 260C206 311 261 311 318 260C375 209 430 209 487 260C544 311 599 311 656 260C682 237 708 224 740 224"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M33 184C77 145 121 145 165 184C209 223 253 223 297 184C341 145 385 145 429 184C473 223 517 223 561 184C605 145 649 145 693 184"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          data-roadmap-command-deck
          className="relative overflow-hidden rounded-[2rem] border border-[#a9824c]/70 bg-[#140c08]/74 p-4 shadow-[0_32px_90px_rgba(18,10,6,0.46)] backdrop-blur-[2px] md:p-6 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-8 lg:p-8"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduceMotion ? 0.01 : 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="pointer-events-none absolute inset-[7px] rounded-[1.55rem] border border-[#d3b98e]/12" />
          <svg
            data-roadmap-route-linework
            className="pointer-events-none absolute inset-x-3 top-1/2 z-0 h-36 -translate-y-1/2 text-[#d29a52]/35 md:inset-x-6 md:h-52"
            viewBox="0 0 980 260"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M16 162C128 54 250 54 362 162C459 256 559 256 656 162C768 54 890 54 964 132"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="10 12"
              strokeLinecap="round"
            />
            <path
              d="M16 194C128 86 250 86 362 194C459 288 559 288 656 194C768 86 890 86 964 164"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.48"
            />
          </svg>

          <motion.aside
            data-roadmap-briefing-panel
            className="relative z-10 mb-7 rounded-[1.6rem] border border-[#a9824c]/35 bg-[#21150f]/82 p-5 shadow-[0_22px_55px_rgba(18,10,6,0.38)] md:p-7 lg:mb-0 lg:flex lg:min-h-[34rem] lg:flex-col lg:justify-between"
            initial={{ opacity: 0, x: reduceMotion ? 0 : -22 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.01 : 0.66,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a9824c]/45 bg-[#d3b98e]/95 px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#291911] shadow-[0_12px_28px_rgba(18,10,6,0.28)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#713e25]" />
                Strategy deck
              </div>

              <p className="mb-4 text-[0.7rem] font-black uppercase tracking-[0.34em] text-[#b56e32]">
                BOKKEUM UDON SUCCESS SYSTEM
              </p>

              <h2 className="break-keep text-3xl font-black leading-tight tracking-[-0.06em] text-[#f0dfc0] md:text-5xl lg:text-[3.35rem]">
                성공으로 가는
                <br />
                6단계 로드맵
              </h2>

              <p className="mt-5 max-w-xl break-keep text-sm font-bold leading-6 text-[#c8b69a] md:text-lg md:leading-8 lg:text-base">
                실제 운영 데이터와 현장 동선을 압축한 여섯 가지 성공 조건을 한눈에 읽히는 전략
                타일로 재정리했습니다.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 md:gap-3 lg:mt-10">
              {ROADMAP_SIGNALS.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-[#a9824c]/25 bg-[#140c08]/70 px-3 py-3"
                >
                  <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#594334] md:text-[0.62rem]">
                    {signal.label}
                  </p>
                  <p className="mt-1 text-sm font-black tracking-[-0.04em] text-[#f0dfc0] md:text-base">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-[#a9824c]/20 pt-5">
              <p className="text-base font-black text-[#f0dfc0] md:text-lg">지금 바로 시작하세요</p>
              <p className="mt-2 break-keep text-sm font-bold leading-6 text-[#c8b69a]">
                점주님의 성공을 위한 모든 준비가 되어있습니다.
              </p>
            </div>
          </motion.aside>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.01 : 0.68,
              delay: reduceMotion ? 0 : 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b56e32]">
                  01—06
                </p>
                <p className="mt-1 break-keep text-sm font-bold text-[#c8b69a] md:text-base">
                  데이터 기반 운영 강점
                </p>
              </div>
              <div className="h-px flex-1 bg-[#a9824c]/24" aria-hidden="true" />
            </div>

            <div
              data-roadmap-gallery-grid
              data-roadmap-grid
              data-roadmap-mobile-two-cols
              className="relative z-10 grid grid-cols-2 md:grid-cols-3 auto-rows-fr gap-3 md:gap-4 lg:gap-5"
            >
              {STRENGTHS.map((strength, index) => (
                <TimelineItem
                  key={strength.number}
                  strength={strength}
                  index={index}
                  active={isInView}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
