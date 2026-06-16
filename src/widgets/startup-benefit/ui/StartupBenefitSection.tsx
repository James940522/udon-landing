'use client';

import { motion, useInView } from 'framer-motion';
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

const backgroundColumns = [
  {
    text: 'LOW INITIAL COST',
    className: 'left-[4%] text-[#8f361e]/42',
    animation: 'startup-benefit-marquee-up 24s linear infinite',
  },
  {
    text: 'STARTUP BENEFIT',
    className: 'left-[16%] text-[#d4a34a]/24',
    animation: 'startup-benefit-marquee-down 30s linear infinite',
  },
  {
    text: 'ONLY WHAT YOU NEED',
    className: 'right-[12%] text-[#8f361e]/38',
    animation: 'startup-benefit-marquee-up 28s linear infinite',
  },
  {
    text: 'PROTECTED AREA',
    className: 'right-[3%] text-[#d4a34a]/20',
    animation: 'startup-benefit-marquee-down 34s linear infinite',
  },
];

function StampMark({ index, active }: { index: number; active: boolean }) {
  return (
    <motion.span
      className="relative inline-flex h-11 w-[74px] rotate-[-5deg] items-center justify-center rounded-[5px] border-2 border-[#dd2636] text-2xl font-black leading-none text-[#dd2636] shadow-[0_0_18px_rgba(221,38,54,0.28)] md:h-12 md:w-20 md:text-3xl"
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
      <span className="absolute inset-[3px] rounded-[3px] border border-[#dd2636]/80" />
      無
    </motion.span>
  );
}

export default function StartupBenefitSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '0px 0px -18% 0px' });
  const tableInView = useInView(tableRef, { once: true, amount: 0.78 });

  return (
    <section
      id="startup-benefit"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1a0d06] py-20 text-[#f7e8c4] md:py-28"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 78% 18%, rgba(180, 60, 25, 0.22), transparent 28%), radial-gradient(circle at 10% 18%, rgba(212, 163, 74, 0.14), transparent 26%), repeating-linear-gradient(90deg, rgba(255, 222, 151, 0.045) 0 1px, transparent 1px 118px), repeating-linear-gradient(0deg, rgba(255, 222, 151, 0.03) 0 1px, transparent 1px 10px), linear-gradient(135deg, #120803 0%, #281207 48%, #3d1b0c 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4a34a]/70 to-transparent" />
      <div className="absolute left-[6vw] top-20 bottom-20 w-px bg-linear-to-b from-transparent via-[#d4a34a]/28 to-transparent" />
      <div className="absolute right-[6vw] top-20 bottom-20 w-px bg-linear-to-b from-transparent via-[#d4a34a]/28 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
        {backgroundColumns.map((column) => (
          <div
            key={column.text}
            className={`absolute top-[-18%] bottom-[-18%] hidden w-9 justify-center md:flex ${column.className}`}
          >
            <div
              className="flex h-[200%] flex-col items-center gap-8 whitespace-nowrap text-[1.15rem] font-black uppercase leading-none tracking-[0.08em] [writing-mode:vertical-rl]"
              style={{ animation: column.animation }}
            >
              {[0, 1, 2, 3].map((item) => (
                <span key={item}>{column.text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:mb-14 md:grid-cols-[1fr_0.9fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-[#d24a32]">
              Startup benefit
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#fff0c8] drop-shadow-[0_9px_24px_rgba(0,0,0,0.35)] md:text-6xl">
              초기 부담은 낮추고
              <br />
              필요한 것만 준비
            </h2>
          </motion.div>

          <motion.p
            className="text-base font-bold leading-8 text-[#dfc79d] md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            오늘은 볶음우동은 불필요한 초기 비용을 줄이고, 점주님 상황에 맞춰 준비할 수 있도록
            창업 항목을 투명하게 안내합니다.
          </motion.p>
        </div>

        <motion.div
          ref={tableRef}
          className="overflow-hidden rounded-md border border-[#d4a34a]/42 bg-[#0b0604] shadow-[0_28px_80px_rgba(0,0,0,0.38)]"
          initial={{ opacity: 0, y: 34 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="bg-black text-[#fff0c8]">
                  <th className="w-[23%] border-r border-[#d4a34a]/28 px-5 py-4 text-center text-xl font-black">
                    구분
                  </th>
                  <th className="w-[49%] border-r border-[#d4a34a]/28 px-5 py-4 text-center text-xl font-black">
                    내용
                  </th>
                  <th className="w-[28%] px-5 py-4 text-center text-xl font-black">금액</th>
                </tr>
              </thead>
              <tbody>
                {benefitRows.map((row, index) => (
                  <tr key={row.category} className="border-t border-[#d4a34a]/24">
                    <th className="bg-[#130c08] px-5 py-5 text-center text-lg font-black text-white md:text-2xl">
                      {row.category}
                    </th>
                    <td className="bg-[#eadfbc] px-5 py-5 text-center text-base font-black text-[#140905] md:text-lg">
                      <p>{row.description}</p>
                      {row.note && (
                        <p className="mt-2 text-xs font-bold text-[#7b6140] md:text-sm">{row.note}</p>
                      )}
                    </td>
                    <td className="bg-[#130c08] px-5 py-5 text-center text-base font-black text-[#fff0c8] md:text-lg">
                      {row.amount === 'stamp' ? (
                        <StampMark index={index} active={tableInView} />
                      ) : (
                        row.amount
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#d4a34a]/32">
                  <td
                    colSpan={2}
                    className="bg-black px-5 py-5 text-center text-xl font-black text-[#fff0c8] md:text-2xl"
                  >
                    최종 창업비용
                  </td>
                  <td className="bg-[#f1e5bd] px-5 py-5 text-center text-xl font-black text-[#170a04] md:text-2xl">
                    상담시 안내
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        <p className="mt-5 text-xs font-bold leading-6 text-[#e0cba2]/78">
          * 계약 조건 및 시점에 따라 혜택 내용은 달라질 수 있습니다. 계약이행보증금은 별도 안내되며
          계약 해지 시 조건에 따라 반환됩니다.
        </p>
      </div>
    </section>
  );
}
