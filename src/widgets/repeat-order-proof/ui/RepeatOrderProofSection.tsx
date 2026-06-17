'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const summaryStats = [
  {
    label: '총 주문수',
    value: '951',
    unit: '건',
  },
  {
    label: '재주문수',
    value: '488',
    unit: '건',
  },
];

const graphCards = [
  {
    badge: '01',
    title: '매장 A 최근 일주일',
    total: '374건',
    newOrders: '204건',
    repeatOrders: '170건',
    image: '/new-asset/reorder/reorder-graph-01.webp',
    width: 553,
    height: 292,
  },
  {
    badge: '02',
    title: '매장 B 최근 일주일',
    total: '275건',
    newOrders: '89건',
    repeatOrders: '186건',
    image: '/new-asset/reorder/reorder-graph-02.webp',
    width: 548,
    height: 277,
  },
  {
    badge: '03',
    title: '매장 C 최근 일주일',
    total: '302건',
    newOrders: '170건',
    repeatOrders: '132건',
    image: '/new-asset/reorder/reorder-graph-03.webp',
    width: 544,
    height: 278,
  },
];

const backgroundWords = ['REORDER', 'REAL DATA', 'LOYALTY', 'TODAY UDON'];

export default function RepeatOrderProofSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -18% 0px' });

  return (
    <section
      id="repeat-order-proof"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#170902] py-20 text-[#fff2cf] md:py-28"
      aria-label="오늘은 볶음우동 재주문 데이터"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 10%, rgba(184, 121, 24, 0.2), transparent 30%), radial-gradient(circle at 86% 18%, rgba(166, 59, 36, 0.18), transparent 28%), linear-gradient(90deg, rgba(209, 157, 76, 0.05), transparent 12%, transparent 88%, rgba(209, 157, 76, 0.05)), repeating-linear-gradient(90deg, rgba(184, 121, 24, 0.07) 0 1px, transparent 1px 96px), repeating-linear-gradient(0deg, rgba(184, 121, 24, 0.04) 0 1px, transparent 1px 9px), linear-gradient(135deg, #120602 0%, #2a1005 48%, #5b260d 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[22%] bg-[#a96512]"
        style={{
          clipPath: 'polygon(58% 0, 100% 0, 100% 100%, 44% 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#9b6824]/70 to-transparent" />
      <div className="absolute inset-x-10 top-10 h-px bg-linear-to-r from-transparent via-[#b87918]/24 to-transparent" />
      <div className="absolute left-[5vw] top-14 bottom-14 w-px bg-linear-to-b from-transparent via-[#9b6824]/22 to-transparent" />
      <div className="absolute right-[5vw] top-14 bottom-14 w-px bg-linear-to-b from-transparent via-[#9b6824]/22 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block">
        {backgroundWords.map((word, index) => (
          <span
            key={word}
            className="absolute text-[8rem] font-black uppercase leading-none text-[#b87918]/10 xl:text-[11rem]"
            style={{
              left: `${4 + index * 25}%`,
              top: index % 2 === 0 ? '2rem' : 'auto',
              bottom: index % 2 === 0 ? 'auto' : '0.5rem',
            }}
            aria-hidden="true"
          >
            {word}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#b44728] md:text-sm">
              Real reorder data
            </p>
            <h2 className="text-4xl font-black leading-[0.98] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.34)] sm:text-5xl md:text-6xl lg:text-7xl">
              압도적인
              <br />
              <span className="text-[#c88724]">재주문 흐름</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base font-bold leading-8 text-[#ead2a1] md:text-lg">
              최근 7일 실제 주문 데이터에서 총 주문 951건 중 재주문이 488건을 차지했습니다.
              신규 유입만큼 중요한 반복 구매가 매장 운영의 안정감을 만듭니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {['최근 7일 기준', '신규·재주문 비교', '실제 주문 데이터'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#9b6824]/46 bg-[#2b1308]/78 px-4 py-2 text-xs font-black text-[#e8c783] shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg border border-[#9b6824]/46 bg-[#b87918] text-[#281207] shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.14 }}
          >
            <div
              className="absolute right-4 top-4 h-11 w-11 border-r-4 border-t-4 border-white/85"
              aria-hidden="true"
            />
            <div className="px-5 pt-5 sm:px-7 sm:pt-7">
              <span className="inline-flex rounded-full bg-[#6b3a14] px-4 py-2 text-xs font-black text-[#fff9e6]">
                실제 주문 데이터 기반
              </span>
            </div>
            <div className="grid gap-3 px-5 py-6 sm:grid-cols-2 sm:px-7 sm:py-7">
              {summaryStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-lg bg-[#fff8d6]/58 px-4 py-4 ${index > 0 ? 'sm:border-l sm:border-[#8b4513]/20' : ''}`}
                >
                  <p className="mb-2 text-xs font-black text-[#8b4513]">{stat.label}</p>
                  <p className="flex min-w-0 flex-wrap items-end gap-1 text-5xl font-black leading-none text-[#3b1a08] md:text-6xl">
                    {stat.value}
                    <span className="pb-1 text-2xl md:text-3xl">{stat.unit}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-4 bg-[#fff0bf] px-5 py-5 sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a63b24] text-lg font-black text-white">
                재
              </div>
              <p className="text-sm font-black leading-7 text-[#3a1a08] md:text-base">
                세 매장의 최근 일주일 주문 951건 중 488건이 재주문입니다. 반복되는 선택이
                브랜드 충성도와 운영 안정성을 함께 보여줍니다.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
          {graphCards.map((card, index) => (
            <motion.article
              key={card.badge}
              className="relative overflow-hidden rounded-lg border border-[#f1d08b]/28 bg-[#fffaf1] p-3 text-[#351808] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.62, delay: 0.24 + index * 0.1 }}
            >
              <div className="absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#a63b24] text-sm font-black text-white shadow-[0_10px_24px_rgba(166,59,36,0.32)]">
                {card.badge}
              </div>
              <Image
                src={card.image}
                alt={`${card.title} 신규 주문과 재주문 그래프`}
                width={card.width}
                height={card.height}
                className="h-auto w-full rounded-md"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={96}
              />
              <div className="grid grid-cols-3 gap-2 px-1 pt-3 text-center text-xs font-black">
                <div className="rounded-md bg-[#f6ead2] px-2 py-2 text-[#6b3a14]">
                  총 {card.total}
                </div>
                <div className="rounded-md bg-[#fff9e6] px-2 py-2 text-[#008f83]">
                  신규 {card.newOrders}
                </div>
                <div className="rounded-md bg-[#fff9e6] px-2 py-2 text-[#1f6fff]">
                  재주문 {card.repeatOrders}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 rounded-full border border-[#9b6824]/42 bg-[#211006]/88 px-5 py-4 text-sm font-black text-[#fff2cf] shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:flex-row sm:items-center sm:justify-between sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <span>3개 매장의 최근 7일 신규·재주문 데이터를 분석한 결과입니다.</span>
          <span className="text-[#c88724]">기준: 신규 주문 / 재주문 비교</span>
        </motion.div>
      </div>
    </section>
  );
}
