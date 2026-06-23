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

interface TimelineItemProps {
  strength: Strength;
  index: number;
  active: boolean;
  reduceMotion: boolean;
}

function TimelineItem({ strength, index, active, reduceMotion }: TimelineItemProps) {
  return (
    <motion.div
      className="relative h-full"
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 28,
        scale: reduceMotion ? 1 : 0.97,
      }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: reduceMotion ? 0.01 : 0.62,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.article
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#a9824c]/70 bg-[#d3b98e]/95 shadow-[0_22px_55px_rgba(18,10,6,0.38)] backdrop-blur-[2px]"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                boxShadow: '0 30px 68px rgba(18, 10, 6, 0.48)',
              }
        }
        transition={{ duration: 0.28 }}
      >
        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-[#b56e32]" />

        <div className="absolute left-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#e6cc9e] bg-[#713e25] shadow-[0_8px_20px_rgba(18,10,6,0.34)] md:h-14 md:w-14">
          <span className="text-sm font-black tracking-[-0.04em] text-[#f0dfc0] md:text-base">
            {strength.number}
          </span>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden border-b border-[#a9824c]/55">
          <Image
            src={strength.image}
            alt={strength.title}
            fill
            className="object-cover brightness-[0.9] saturate-[0.82] contrast-[1.04] transition duration-700 group-hover:scale-[1.035] group-hover:brightness-100 group-hover:saturate-[0.92]"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#2a1d16]/5 via-transparent to-[#3b291e]/38" />
        </div>

        <div className="relative flex min-h-40 flex-1 flex-col p-5 md:min-h-44 md:p-6">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.24em] text-[#713e25]/85">
            Step {strength.number}
          </p>
          <h4 className="mb-3 break-keep text-lg font-black leading-snug text-[#291911] md:text-xl">
            {strength.title}
          </h4>
          <div className="mb-4 flex items-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b56e32]" />
            <span className="h-px w-12 bg-[#b56e32]/70" />
            <span className="h-px flex-1 bg-[#a9824c]/60" />
          </div>
          <p className="break-keep text-sm font-semibold leading-6 text-[#594334] md:text-base md:leading-7">
            {strength.desc}
          </p>
        </div>
      </motion.article>
    </motion.div>
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
          "linear-gradient(180deg, rgba(42,29,22,0.94) 0%, rgba(59,41,30,0.96) 52%, rgba(33,21,15,0.98) 100%), url('/new-asset/background/startup-benefit-hanji.webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        data-roadmap-gold-frame
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-3 border border-[#c7a061]/[0.28] md:inset-6" />
        <div className="absolute inset-6 border border-[#c7a061]/[0.14] md:inset-10" />

        <span className="absolute left-3 top-3 h-12 w-12 border-l-2 border-t-2 border-[#d29a52]/55 md:left-6 md:top-6 md:h-20 md:w-20" />
        <span className="absolute right-3 top-3 h-12 w-12 border-r-2 border-t-2 border-[#d29a52]/55 md:right-6 md:top-6 md:h-20 md:w-20" />
        <span className="absolute bottom-3 left-3 h-12 w-12 border-b-2 border-l-2 border-[#d29a52]/55 md:bottom-6 md:left-6 md:h-20 md:w-20" />
        <span className="absolute bottom-3 right-3 h-12 w-12 border-b-2 border-r-2 border-[#d29a52]/55 md:bottom-6 md:right-6 md:h-20 md:w-20" />

        <span className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#d29a52]/70 bg-[#2a1d16] md:top-6 md:h-3 md:w-3" />
        <span className="absolute bottom-3 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#d29a52]/70 bg-[#21150f] md:bottom-6 md:h-3 md:w-3" />
      </div>

      <div
        data-roadmap-corner-linework
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-[#c7a061]/[0.22]"
        aria-hidden="true"
      >
        <svg
          className="absolute -left-24 top-4 h-80 w-[34rem] opacity-70 md:-left-16 md:top-8 md:h-[28rem] md:w-[52rem] md:opacity-100"
          viewBox="0 0 620 320"
          fill="none"
        >
          <path
            d="M-16 214C45 211 52 171 101 171C131 171 148 185 164 201C182 164 215 141 257 141C300 141 334 165 351 202C372 181 398 170 430 170C472 170 499 194 514 224C542 205 576 199 636 205"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M-8 242C64 242 81 211 121 211C154 211 176 225 191 247C214 205 249 181 291 181C334 181 369 204 388 244C407 224 432 213 464 213C504 213 531 231 550 257C576 240 602 235 640 237"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M74 119C104 88 144 72 194 72C239 72 276 87 305 116M399 104C431 78 469 66 515 67"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="306" cy="116" r="4" fill="currentColor" />
          <circle cx="398" cy="104" r="3" fill="currentColor" />
        </svg>

        <svg
          className="absolute -bottom-20 -right-28 h-80 w-[38rem] opacity-65 md:-bottom-16 md:-right-20 md:h-[30rem] md:w-[58rem] md:opacity-100"
          viewBox="0 0 720 360"
          fill="none"
        >
          <path
            d="M-20 260C37 209 92 209 149 260C206 311 261 311 318 260C375 209 430 209 487 260C544 311 599 311 656 260C682 237 708 224 740 224"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M-20 294C37 243 92 243 149 294C206 345 261 345 318 294C375 243 430 243 487 294C544 345 599 345 656 294C682 271 708 258 740 258"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M33 184C77 145 121 145 165 184C209 223 253 223 297 184C341 145 385 145 429 184C473 223 517 223 561 184C605 145 649 145 693 184"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M117 104C151 75 185 75 219 104C253 133 287 133 321 104C355 75 389 75 423 104C457 133 491 133 525 104"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative mb-14 text-center md:mb-18 lg:mb-22"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduceMotion ? 0.01 : 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <svg
            data-roadmap-title-halo
            className="pointer-events-none absolute left-1/2 top-[-4.25rem] -z-10 h-56 w-[26rem] -translate-x-1/2 text-[#d29a52]/[0.32] sm:w-[34rem] md:top-[-5.5rem] md:h-72 md:w-[48rem]"
            viewBox="0 0 760 280"
            fill="none"
            aria-hidden="true"
          >
            <path d="M120 224A260 260 0 0 1 640 224" stroke="currentColor" strokeWidth="1.5" />
            <path d="M174 224A206 206 0 0 1 586 224" stroke="currentColor" strokeWidth="1" />
            <path d="M228 224A152 152 0 0 1 532 224" stroke="currentColor" strokeWidth="0.8" />
            {[
              [380, 18, 380, 58],
              [290, 34, 307, 72],
              [470, 34, 453, 72],
              [210, 78, 242, 105],
              [550, 78, 518, 105],
              [151, 145, 193, 157],
              [609, 145, 567, 157],
            ].map(([x1, y1, x2, y2], index) => (
              <path
                key={`halo-ray-${index}`}
                d={`M${x1} ${y1}L${x2} ${y2}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
            <circle cx="380" cy="224" r="5" fill="currentColor" />
            <path d="M362 224H398M380 206V242" stroke="currentColor" strokeWidth="1" />
          </svg>

          <div className="relative z-10 mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b56e32]/55 sm:w-12" aria-hidden="true" />
            <p className="text-xs font-black uppercase tracking-[0.38em] text-[#b56e32]">
              Success roadmap
            </p>
            <span className="h-px w-8 bg-[#b56e32]/55 sm:w-12" aria-hidden="true" />
          </div>

          <motion.h2
            className="relative z-10 mb-5 break-keep text-3xl font-black leading-tight tracking-[-0.04em] text-[#f0dfc0] md:text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.01 : 0.72,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            성공으로 가는 6단계 로드맵
          </motion.h2>

          <motion.p
            className="relative z-10 mx-auto max-w-2xl text-base font-bold leading-relaxed text-[#c8b69a] md:text-xl"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.01 : 0.7,
              delay: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            실제 데이터에 기반한
            <br />
            [오늘은 볶음우동]의 성공 전략
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-6xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: reduceMotion ? 0.01 : 0.6, delay: reduceMotion ? 0 : 0.25 }}
        >
          <div
            data-roadmap-number-watermarks
            className="pointer-events-none absolute -inset-x-16 -inset-y-14 z-0 hidden md:grid md:grid-cols-3 md:grid-rows-2"
            aria-hidden="true"
          >
            {STRENGTHS.map((strength, index) => (
              <div
                key={`watermark-${strength.number}`}
                className={`flex ${index < 3 ? 'items-start pt-2' : 'items-end pb-2'} ${
                  index % 3 === 0
                    ? 'justify-start'
                    : index % 3 === 1
                      ? 'justify-center'
                      : 'justify-end'
                }`}
              >
                <span className="font-heading text-[clamp(8rem,15vw,14rem)] font-black leading-none tracking-[-0.09em] text-[#f0dfc0]/[0.11]">
                  {strength.number}
                </span>
              </div>
            ))}
          </div>

          <svg
            data-roadmap-antique-route
            className="pointer-events-none absolute -inset-x-10 -inset-y-8 z-[1] hidden md:block h-[calc(100%+4rem)] w-[calc(100%+5rem)] text-[#d29a52]/[0.36]"
            viewBox="0 0 1200 760"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M18 146C134 38 282 45 399 148C431 209 430 310 400 380C512 453 686 453 800 380C770 306 771 211 801 148C930 55 1086 80 1182 224C1104 316 1023 364 914 394C811 423 710 514 604 570C480 636 345 682 222 620C124 571 73 488 18 432"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              opacity="0.16"
            />
            <path
              d="M18 146C134 38 282 45 399 148C431 209 430 310 400 380C512 453 686 453 800 380C770 306 771 211 801 148C930 55 1086 80 1182 224C1104 316 1023 364 914 394C811 423 710 514 604 570C480 636 345 682 222 620C124 571 73 488 18 432"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="9 12"
              strokeLinecap="round"
            />
            {[
              [18, 146],
              [400, 148],
              [400, 380],
              [800, 380],
              [801, 148],
              [1182, 224],
            ].map(([cx, cy], index) => (
              <g data-roadmap-route-medal key={`route-stop-${index}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="25"
                  fill="#2a1d16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="18"
                  fill="#713e25"
                  stroke="#f0dfc0"
                  strokeOpacity="0.72"
                />
                <circle cx={cx} cy={cy} r="3.5" fill="#f0dfc0" />
                <text
                  x={cx}
                  y={cy + 4}
                  textAnchor="middle"
                  fill="#f0dfc0"
                  fontSize="10"
                  fontWeight="900"
                >
                  0{index + 1}
                </text>
              </g>
            ))}
          </svg>

          <div
            data-roadmap-grid
            className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-fr md:grid-cols-3 md:gap-7 lg:gap-8"
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

        <motion.div
          className="mt-16 text-center md:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#a9824c]/70 bg-[#21150f]/94 px-7 py-7 shadow-[0_24px_64px_rgba(18,10,6,0.42)] backdrop-blur-[3px] md:px-12 md:py-8">
            <span className="absolute inset-x-0 top-0 h-1 bg-[#b56e32]" aria-hidden="true" />
            <p className="text-lg font-black text-[#f0dfc0] md:text-xl">지금 바로 시작하세요</p>
            <p className="mt-2 text-sm font-bold text-[#c8b69a] md:text-base">
              점주님의 성공을 위한 모든 준비가 되어있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
