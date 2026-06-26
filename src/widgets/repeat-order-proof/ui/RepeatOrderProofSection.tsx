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
      data-repeat-order-black-gold
      className="relative overflow-hidden bg-[#080504] py-20 text-[#f0dfc0] md:py-28 lg:py-32"
      style={{
        backgroundImage:
          'radial-gradient(circle at 84% 12%, rgba(201,162,77,0.16), transparent 28%), radial-gradient(circle at 12% 78%, rgba(169,130,76,0.14), transparent 32%), linear-gradient(180deg, rgba(8,5,4,1) 0%, rgba(21,16,13,0.98) 52%, rgba(7,4,3,1) 100%)',
      }}
      aria-label="오늘은 볶음우동 재주문 데이터"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,162,77,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,77,0.055) 1px, transparent 1px)',
          backgroundSize: '86px 86px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#c9a24d]/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#a9824c]/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-24 hidden rotate-90 text-[10px] font-black tracking-[0.45em] text-[#c9a24d]/22 lg:block"
        aria-hidden="true"
      >
        VERIFIED ORDER DATA · LAST 7 DAYS
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-end lg:gap-16">
          <motion.div {...reveal()}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a24d]" aria-hidden="true" />
              <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#c9a24d] sm:text-xs">
                Real reorder data
              </p>
            </div>

            <h2 className="break-keep font-heading text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#f0dfc0] sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              압도적인
              <br />
              <span className="text-[#c9a24d]">재주문 흐름</span>
            </h2>

            <p className="mt-7 max-w-xl break-keep text-sm font-semibold leading-7 text-[#c4ae91] sm:text-base sm:leading-8 md:text-lg">
              신규 주문으로 끝나는 매출이 아니라, 다시 선택받는 주문이 쌓입니다. 최근 7일 실제 주문
              데이터를 통해 반복 구매의 힘을 확인하세요.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#a9824c]/35 pt-5 text-[10px] font-black tracking-[0.14em] text-[#a9824c] sm:text-xs">
              <span>PERIOD · 7 DAYS</span>
              <span>SAMPLE · 3 STORES</span>
              <span>SOURCE · REAL ORDERS</span>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[1.5rem] border border-[#a9824c]/35 bg-[#15100d]/92 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-7"
            aria-label="최근 7일 재주문 488건"
            {...reveal(0.12)}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#a9824c] via-[#c9a24d] to-[#f0dfc0]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black tracking-[0.28em] text-[#c9a24d] sm:text-xs">
                  REPEAT ORDERS
                </p>
                <p className="mt-2 text-xs font-bold text-[#c4ae91] sm:text-sm">다시 선택된 주문</p>
              </div>
              <span className="rounded-full border border-[#c9a24d]/45 bg-[#c9a24d]/12 px-3 py-1.5 text-[9px] font-black tracking-[0.12em] text-[#f0dfc0]">
                3 STORE SAMPLE
              </span>
            </div>

            <div className="mt-7 flex items-end gap-3">
              <strong className="font-heading text-[4.7rem] font-black leading-[0.78] tracking-[-0.08em] text-[#f0dfc0] sm:text-[6.8rem]">
                {orderSummary.repeatOrders}
              </strong>
              <span className="pb-1 font-heading text-xl font-black text-[#c9a24d] sm:pb-2 sm:text-3xl">
                건
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3" aria-hidden="true">
              <span className="h-1.5 w-16 rounded-full bg-[#c9a24d]" />
              <span className="h-px flex-1 bg-linear-to-r from-[#c9a24d]/65 to-transparent" />
            </div>

            <div className="mt-6 grid grid-cols-2 border-t border-[#a9824c]/35">
              <div className="border-r border-[#a9824c]/35 pr-4 pt-5">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#a9824c]">
                  TOTAL ORDERS
                </p>
                <p className="mt-2 font-heading text-3xl font-black text-[#f0dfc0] sm:text-4xl">
                  {orderSummary.totalOrders}
                  <span className="ml-1 text-sm text-[#a9824c]">건</span>
                </p>
              </div>
              <div className="pl-4 pt-5">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#a9824c]">
                  NEW ORDERS
                </p>
                <p className="mt-2 font-heading text-3xl font-black text-[#7f8a63] sm:text-4xl">
                  {orderSummary.newOrders}
                  <span className="ml-1 text-sm text-[#a9824c]">건</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 border-t border-[#a9824c]/35 pt-7 lg:mt-20 lg:pt-9">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black tracking-[0.34em] text-[#c9a24d]">DATA REPORT</p>
              <h3 className="mt-2 font-heading text-xl font-black text-[#f0dfc0] sm:text-2xl">
                매장별 신규·재주문 비교
              </h3>
            </div>
            <p className="text-xs font-semibold text-[#c4ae91]">최근 일주일 실제 주문 데이터</p>
          </div>

          <div
            data-repeat-order-mobile-compact
            className="grid grid-cols-3 items-stretch gap-2 md:grid-cols-3 md:gap-4 lg:gap-6"
          >
            {graphCards.map((card, index) => (
              <motion.article
                key={card.badge}
                className="group relative grid grid-rows-[auto_minmax(0,1fr)_auto] h-full overflow-hidden rounded-xl border border-[#a9824c]/35 bg-[#d3b98e]/95 shadow-[0_14px_34px_rgba(0,0,0,0.28)] sm:rounded-[1.25rem] sm:shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
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
                        borderColor: 'rgba(201,162,77,0.62)',
                      }
                }
                transition={{
                  duration: reduceMotion ? 0.01 : 0.62,
                  delay: reduceMotion ? 0 : 0.24 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex min-h-[5.75rem] flex-col justify-between gap-2 border-b border-[#a9824c]/45 px-2.5 py-3 sm:min-h-0 sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-4">
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <span className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#080504]/45 bg-[#080504] text-[10px] font-black text-[#c9a24d] sm:flex">
                      {card.badge}
                    </span>
                    <div>
                      <p className="font-heading text-xs font-black leading-tight text-[#291911] sm:text-sm">
                        {card.title}
                      </p>
                      <p className="hidden sm:block mt-0.5 text-[9px] font-bold tracking-[0.12em] text-[#594334]">
                        {card.period}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="hidden sm:block text-[9px] font-black tracking-[0.12em] text-[#594334]">
                      REPEAT ORDERS
                    </p>
                    <p className="font-heading text-[1.05rem] font-black leading-none text-[#713e25] sm:mt-1 sm:text-lg">
                      <span className="sm:hidden">{card.repeatOrders}건</span>
                      <span className="hidden sm:inline">재주문 {card.repeatOrders}건</span>
                    </p>
                  </div>
                </div>

                <div className="bg-[#15100d]/92 p-1.5 sm:p-3">
                  <div className="relative aspect-[553/292] w-full">
                    <Image
                      src={card.image}
                      alt={`${card.title} 최근 일주일 신규 주문과 재주문 그래프`}
                      width={card.width}
                      height={card.height}
                      className="h-full w-full object-contain"
                      sizes="(max-width: 768px) 33vw, 33vw"
                      quality={96}
                    />
                  </div>
                </div>

                <div className="hidden sm:grid grid-cols-2 divide-x divide-[#a9824c]/45 border-t border-[#a9824c]/45">
                  <div className="px-2 py-4 text-center">
                    <p className="text-[9px] font-black tracking-[0.1em] text-[#594334]">TOTAL</p>
                    <p className="mt-1 text-sm font-black text-[#291911]">{card.total}건</p>
                  </div>
                  <div className="px-2 py-4 text-center">
                    <p className="text-[9px] font-black tracking-[0.1em] text-[#7f8a63]">NEW</p>
                    <p className="mt-1 text-sm font-black text-[#7f8a63]">{card.newOrders}건</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-8 grid gap-3 border-y border-[#a9824c]/35 py-5 text-xs font-bold text-[#c4ae91] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5"
          {...reveal(0.48)}
        >
          <span className="font-black tracking-[0.18em] text-[#c9a24d]">INSIGHT 01</span>
          <span className="break-keep">
            세 매장 모두 신규 주문과 함께 반복 구매가 꾸준히 발생하며, 안정적인 매출 흐름을 만들고
            있습니다.
          </span>
          <span className="font-black text-[#c9a24d]">신규 주문 / 재주문 비교</span>
        </motion.div>
      </div>
    </section>
  );
}
