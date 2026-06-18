'use client';

import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const orderSummary = {
  totalOrders: 951,
  repeatOrders: 488,
  newOrders: 463,
};

const graphCards = [
  {
    badge: '01',
    title: '매장 A',
    period: '최근 일주일',
    total: 374,
    newOrders: 204,
    repeatOrders: 170,
    image: '/new-asset/reorder/reorder-graph-01.webp',
    width: 553,
    height: 292,
  },
  {
    badge: '02',
    title: '매장 B',
    period: '최근 일주일',
    total: 275,
    newOrders: 89,
    repeatOrders: 186,
    image: '/new-asset/reorder/reorder-graph-02.webp',
    width: 548,
    height: 277,
  },
  {
    badge: '03',
    title: '매장 C',
    period: '최근 일주일',
    total: 302,
    newOrders: 170,
    repeatOrders: 132,
    image: '/new-asset/reorder/reorder-graph-03.webp',
    width: 544,
    height: 278,
  },
];

export default function RepeatOrderProofSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -18% 0px' });

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: {
      duration: reduceMotion ? 0.01 : 0.68,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="repeat-order-proof"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#181311] py-20 text-[#f8ead2] md:py-28 lg:py-32"
      aria-label="오늘은 볶음우동 재주문 데이터"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 82% 14%, rgba(168,75,60,0.2), transparent 27%), radial-gradient(circle at 12% 76%, rgba(201,162,77,0.1), transparent 30%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(135deg, #181311 0%, #211613 52%, #181311 100%)',
          backgroundSize: 'auto, auto, 48px 48px, 48px 48px, auto',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#c9a24d]/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#a84b3c]/65 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-24 hidden rotate-90 text-[10px] font-black tracking-[0.45em] text-[#f8ead2]/20 lg:block"
        aria-hidden="true"
      >
        VERIFIED ORDER DATA · LAST 7 DAYS
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-end lg:gap-16">
          <motion.div {...reveal()}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#a84b3c]" aria-hidden="true" />
              <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#d98976] sm:text-xs">
                Real reorder data
              </p>
            </div>

            <h2 className="break-keep font-heading text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#fff8eb] sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              압도적인
              <br />
              <span className="text-[#d9ad55]">재주문 흐름</span>
            </h2>

            <p className="mt-7 max-w-xl break-keep text-sm font-semibold leading-7 text-[#cbb8a5] sm:text-base sm:leading-8 md:text-lg">
              신규 주문으로 끝나는 매출이 아니라, 다시 선택받는 주문이 쌓입니다. 최근 7일 실제 주문
              데이터를 통해 반복 구매의 힘을 확인하세요.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#f8ead2]/10 pt-5 text-[10px] font-black tracking-[0.14em] text-[#9f8879] sm:text-xs">
              <span>PERIOD · 7 DAYS</span>
              <span>SAMPLE · 3 STORES</span>
              <span>SOURCE · REAL ORDERS</span>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[1.5rem] border border-[#f8ead2]/12 bg-[#211917]/86 p-5 shadow-[0_34px_90px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-7"
            aria-label="최근 7일 재주문 488건"
            {...reveal(0.12)}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#a84b3c] via-[#c66d54] to-[#c9a24d]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black tracking-[0.28em] text-[#d98976] sm:text-xs">
                  REPEAT ORDERS
                </p>
                <p className="mt-2 text-xs font-bold text-[#a99483] sm:text-sm">다시 선택된 주문</p>
              </div>
              <span className="rounded-full border border-[#c9a24d]/35 bg-[#c9a24d]/8 px-3 py-1.5 text-[9px] font-black tracking-[0.12em] text-[#e2c67f]">
                3 STORE SAMPLE
              </span>
            </div>

            <div className="mt-7 flex items-end gap-3">
              <strong className="font-heading text-[4.7rem] font-black leading-[0.78] tracking-[-0.08em] text-[#fff8eb] sm:text-[6.8rem]">
                {orderSummary.repeatOrders}
              </strong>
              <span className="pb-1 font-heading text-xl font-black text-[#d98976] sm:pb-2 sm:text-3xl">
                건
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3" aria-hidden="true">
              <span className="h-1.5 w-16 rounded-full bg-[#a84b3c]" />
              <span className="h-px flex-1 bg-linear-to-r from-[#c9a24d]/70 to-transparent" />
            </div>

            <div className="mt-6 grid grid-cols-2 border-t border-[#f8ead2]/10">
              <div className="border-r border-[#f8ead2]/10 pr-4 pt-5">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#9f8879]">
                  TOTAL ORDERS
                </p>
                <p className="mt-2 font-heading text-3xl font-black text-[#f8ead2] sm:text-4xl">
                  {orderSummary.totalOrders}
                  <span className="ml-1 text-sm text-[#9f8879]">건</span>
                </p>
              </div>
              <div className="pl-4 pt-5">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#9f8879]">
                  NEW ORDERS
                </p>
                <p className="mt-2 font-heading text-3xl font-black text-[#c7ddd7] sm:text-4xl">
                  {orderSummary.newOrders}
                  <span className="ml-1 text-sm text-[#9f8879]">건</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 border-t border-[#f8ead2]/12 pt-7 lg:mt-20 lg:pt-9">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black tracking-[0.34em] text-[#d98976]">DATA REPORT</p>
              <h3 className="mt-2 font-heading text-xl font-black text-[#fff8eb] sm:text-2xl">
                매장별 신규·재주문 비교
              </h3>
            </div>
            <p className="text-xs font-semibold text-[#8f796c]">최근 일주일 실제 주문 데이터</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
            {graphCards.map((card, index) => (
              <motion.article
                key={card.badge}
                className={`group relative overflow-hidden rounded-[1.25rem] border border-[#f8ead2]/12 bg-[#211917] shadow-[0_24px_65px_rgba(0,0,0,0.3)] ${
                  index === 1 ? 'md:-translate-y-5' : ''
                }`}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 26,
                  scale: reduceMotion ? 1 : 0.98,
                }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: index === 1 ? -25 : -5,
                        borderColor: 'rgba(217,137,118,0.45)',
                      }
                }
                transition={{
                  duration: reduceMotion ? 0.01 : 0.62,
                  delay: reduceMotion ? 0 : 0.24 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center justify-between border-b border-[#f8ead2]/10 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#a84b3c]/60 bg-[#a84b3c]/12 text-[10px] font-black text-[#e49a87]">
                      {card.badge}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-black text-[#fff8eb]">{card.title}</p>
                      <p className="mt-0.5 text-[9px] font-bold tracking-[0.12em] text-[#8f796c]">
                        {card.period}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black tracking-[0.12em] text-[#8f796c]">
                      REPEAT ORDERS
                    </p>
                    <p className="mt-1 font-heading text-base font-black text-[#d9ad55] sm:text-lg">
                      재주문 {card.repeatOrders}건
                    </p>
                  </div>
                </div>

                <div className="bg-[#f7f7f5] p-2.5 sm:p-3">
                  <Image
                    src={card.image}
                    alt={`${card.title} 최근 일주일 신규 주문과 재주문 그래프`}
                    width={card.width}
                    height={card.height}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={96}
                  />
                </div>

                <div className="grid grid-cols-2 divide-x divide-[#f8ead2]/10 border-t border-[#f8ead2]/10">
                  <div className="px-2 py-4 text-center">
                    <p className="text-[9px] font-black tracking-[0.1em] text-[#8f796c]">TOTAL</p>
                    <p className="mt-1 text-sm font-black text-[#f8ead2]">{card.total}건</p>
                  </div>
                  <div className="px-2 py-4 text-center">
                    <p className="text-[9px] font-black tracking-[0.1em] text-[#76b9ad]">NEW</p>
                    <p className="mt-1 text-sm font-black text-[#d6e4df]">{card.newOrders}건</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 grid gap-3 border-y border-[#f8ead2]/10 py-5 text-xs font-bold text-[#a99483] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5"
          {...reveal(0.48)}
        >
          <span className="font-black tracking-[0.18em] text-[#d98976]">INSIGHT 01</span>
          <span className="break-keep">
            세 매장 모두 신규 주문과 함께 반복 구매가 꾸준히 발생하며, 안정적인 매출 흐름을 만들고
            있습니다.
          </span>
          <span className="font-black text-[#d9ad55]">신규 주문 / 재주문 비교</span>
        </motion.div>
      </div>
    </section>
  );
}
