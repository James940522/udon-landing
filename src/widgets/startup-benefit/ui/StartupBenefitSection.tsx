'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const benefitRows = [
  {
    category: '가맹비',
    description: '브랜드 상호 사용권, 지역 영업권 보장(최초비용)',
    amount: 'stamp',
  },
  {
    category: '교육비',
    description: '조리매뉴얼, 운영매뉴얼 교육',
    note: '*양도양수 계약시 교육비 200만원 발생',
    amount: 'stamp',
  },
  {
    category: '로열티',
    description: '상호/상표 사용료 및 경영지원에 대한 대가(정기적 비용)',
    amount: 'stamp',
  },
  {
    category: '재가맹비',
    description: '가맹계약 종료 후 재 가맹 계약 시',
    amount: 'stamp',
  },
  {
    category: '감리비',
    description: '인테리어 공사에 따른 감리비',
    amount: 'stamp',
  },
  {
    category: '인테리어',
    description: '목공사, 전기공사, 타일공사, 도색공사',
    amount: '자율 시공 가능',
  },
  {
    category: '간판',
    description: '매장 메인 간판',
    amount: '자율 시공 가능',
  },
  {
    category: '주방기기 및 기물',
    description: '냉장고, 화구, 조리대, 싱크, 작업대, 조리기구 등',
    amount: '필요한 만큼만 구입',
  },
];

function StampMark({ index, active }: { index: number; active: boolean }) {
  return (
    <motion.span
      className="relative inline-flex h-8 w-14 rotate-[-5deg] items-center justify-center rounded-[5px] border-2 border-[#8f3528] text-lg font-black leading-none text-[#8f3528] shadow-[0_0_18px_rgba(221,38,54,0.28)] sm:h-10 sm:w-16 sm:text-2xl md:h-12 md:w-20 md:text-3xl"
      initial={{ opacity: 0, y: -28, scale: 1.7, rotate: -18 }}
      animate={
        active
          ? {
              opacity: 1,
              y: 0,
              scale: [1.7, 0.86, 1.04, 1],
              rotate: [-18, -5, -8, -5],
            }
          : { opacity: 0, y: -28, scale: 1.7, rotate: -18 }
      }
      transition={{
        delay: index * 0.18,
        duration: 0.48,
        ease: [0.2, 0.95, 0.2, 1],
      }}
    >
      <span className="absolute inset-[3px] rounded-[3px] border border-[#8f3528]/80" />無
    </motion.span>
  );
}

export default function StartupBenefitSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const sectionInView = useInView(sectionRef, { once: true, margin: '0px 0px -18% 0px' });
  const tableInView = useInView(tableRef, { once: true, amount: 0.78 });

  return (
    <section
      id="startup-benefit"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f0e8] bg-cover bg-center bg-no-repeat py-20 text-[#2b1b16] md:py-28"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,250,242,0.82) 0%, rgba(245,240,232,0.9) 100%), url('/new-asset/background/startup-benefit-hanji.webp')",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:mb-14 md:grid-cols-[1fr_0.9fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.01 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-[#9b5b46]">
              Startup benefit
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#2b1b16] md:text-6xl">
              초기 부담은 낮추고
              <br />
              필요한 것만 준비
            </h2>
          </motion.div>

          <motion.p
            className="text-base font-bold leading-8 text-[#746054] md:text-lg"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reduceMotion ? 0.01 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            오늘은 볶음우동은 불필요한 초기 비용을 줄이고, 점주님 상황에 맞춰 준비할 수 있도록 창업
            항목을 투명하게 안내합니다.
          </motion.p>
        </div>

        <motion.div
          ref={tableRef}
          className="overflow-hidden rounded-xl border border-[#d8c8b5]/70 bg-[#fffaf2]/90 p-1 shadow-[0_24px_70px_rgba(73,50,41,0.12)] backdrop-blur-[1px] sm:p-2"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.99 }}
          animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: reduceMotion ? 0.01 : 0.75,
            delay: reduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="overflow-hidden rounded-lg border border-[#d8c8b5]/75">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="bg-[#493229] text-[#fffaf2]">
                  <th className="w-[22%] border-r border-[#d8c8b5]/30 px-2 py-3 text-center text-[0.78rem] font-black sm:px-3 sm:text-base md:px-5 md:py-4 md:text-xl">
                    구분
                  </th>
                  <th className="w-[50%] border-r border-[#d8c8b5]/30 px-2 py-3 text-center text-[0.78rem] font-black sm:px-3 sm:text-base md:px-5 md:py-4 md:text-xl">
                    내용
                  </th>
                  <th className="w-[28%] px-2 py-3 text-center text-[0.78rem] font-black sm:px-3 sm:text-base md:px-5 md:py-4 md:text-xl">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                {benefitRows.map((row, index) => (
                  <motion.tr
                    key={row.category}
                    className="border-t border-[#d8c8b5]/70"
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <th className="break-keep bg-[#493229] px-2 py-3 text-center text-[0.78rem] font-black leading-snug text-[#fffaf2] sm:px-3 sm:text-base md:px-5 md:py-5 md:text-2xl">
                      {row.category}
                    </th>
                    <td className="break-keep bg-[#fffaf2] px-2 py-3 text-center text-[0.72rem] font-black leading-snug text-[#2b1b16] sm:px-3 sm:text-sm md:px-5 md:py-5 md:text-lg">
                      <p>{row.description}</p>
                      {row.note && (
                        <p className="mt-1 text-[0.62rem] font-bold leading-snug text-[#746054] sm:text-xs md:mt-2 md:text-sm">
                          {row.note}
                        </p>
                      )}
                    </td>
                    <td className="break-keep bg-[#493229] px-2 py-3 text-center text-[0.72rem] font-black leading-snug text-[#fffaf2] sm:px-3 sm:text-sm md:px-5 md:py-5 md:text-lg">
                      {row.amount === 'stamp' ? (
                        <StampMark index={index} active={tableInView} />
                      ) : (
                        row.amount
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#d8c8b5]">
                  <td
                    colSpan={2}
                    className="bg-[#493229] px-2 py-4 text-center text-base font-black text-[#fffaf2] sm:px-3 sm:text-lg md:px-5 md:py-5 md:text-2xl"
                  >
                    최종 창업비용
                  </td>
                  <td className="break-keep bg-[#e8dccb] px-2 py-4 text-center text-sm font-black leading-snug text-[#2b1b16] sm:px-3 sm:text-base md:px-5 md:py-5 md:text-2xl">
                    상담시 안내
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        <motion.p
          className="mt-5 text-xs font-bold leading-6 text-[#746054]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduceMotion ? 0.01 : 0.55,
            delay: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          * 계약 조건 및 시점에 따라 혜택 내용은 달라질 수 있습니다. 계약이행보증금은 별도 안내되며
          계약 해지 시 조건에 따라 반환됩니다.
        </motion.p>
      </div>
    </section>
  );
}
