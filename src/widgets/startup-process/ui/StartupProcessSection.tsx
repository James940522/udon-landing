'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, CircleDot, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const processes = [
  {
    number: '01',
    title: '창업상담',
    description:
      '전화 상담 예약 후 본사 상담에서 상권, 예상 매출, 운영 조건을 함께 검토합니다.',
    checkpoint: '상담 예약 / 예상 매출 검토',
    status: '검토 완료',
  },
  {
    number: '02',
    title: '가게계약',
    description: '점포 조건 협의 후 가맹계약과 임대차계약을 안정적으로 진행합니다.',
    checkpoint: '점포 선정 / 계약 조건 정리',
    status: '조건 확정',
  },
  {
    number: '03',
    title: '본사 계약체결',
    description: '개설 의사를 확정하고 본사와 가맹계약을 체결해 오픈 준비를 시작합니다.',
    checkpoint: '계약서 확인 / 개설 일정 확정',
    status: '계약 준비',
  },
  {
    number: '04',
    title: '상권분석',
    description: '희망 지역과 추천 지역의 배달 상권, 입지, 경쟁 밀도를 세밀하게 분석합니다.',
    checkpoint: '배달권역 / 경쟁 지점 확인',
    status: '분석 완료',
  },
  {
    number: '05',
    title: '교육진행',
    description: '조리, 포장, 서비스, 운영 동선을 실제 매장 기준으로 교육합니다.',
    checkpoint: '레시피 / 운영 동선 교육',
    status: '운영 준비',
  },
  {
    number: '06',
    title: '그랜드오픈',
    description: '오픈 전 점검부터 초기 운영 안정화까지 본사가 함께 확인합니다.',
    checkpoint: '오픈 체크 / 초기 운영 지원',
    status: '오픈 확정',
  },
];

const highlights = ['상권 검토', '계약 정리', '운영 교육'];

export default function StartupProcessSection() {
  const ref = useRef(null);
  const processGridRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -22% 0px' });
  const isProcessInView = useInView(processGridRef, { once: true, amount: 0.34 });

  return (
    <section
      id="startup-process"
      className="relative overflow-hidden bg-[#090504] py-20 text-[#fff2d8] md:py-28 lg:py-32"
      ref={ref}
    >
      <div
        data-startup-dark-background
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 10%, rgba(201,162,77,0.16), transparent 28%), radial-gradient(circle at 82% 82%, rgba(166,103,50,0.18), transparent 32%), linear-gradient(180deg, rgba(9,5,4,1) 0%, rgba(23,12,8,0.98) 48%, rgba(5,3,2,1) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,162,77,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,77,0.07) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#c9a24d]/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#a66732]/45 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-10 lg:mb-18 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.65fr)] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68 }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-11 w-px bg-[#c9a24d]/70" aria-hidden="true" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c9a24d] md:text-sm">
                  FRANCHISE OPENING
                </p>
                <p className="mt-2 text-[0.66rem] font-bold uppercase tracking-[0.3em] text-[#a66732]">
                  6 STEPS TO OPEN
                </p>
              </div>
            </div>

            <h2 className="font-heading text-[2.85rem] font-bold leading-[1.12] text-[#fff2d8] sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              가맹절차
            </h2>
            <p className="mt-6 max-w-2xl break-keep text-base font-semibold leading-8 text-[#cbb79b] md:text-lg md:leading-9">
              상담부터 오픈까지 필요한 결정을 한눈에 확인할 수 있도록 정리했습니다.
              <span className="text-[#fff2d8]">
                {' '}
                복잡한 창업 과정을 여섯 단계의 실행 순서로 깔끔하게 관리합니다.
              </span>
            </p>
          </motion.div>

          <motion.div
            data-startup-image-accent
            className="relative min-h-[25rem] overflow-hidden rounded-lg border border-[#a66732]/35 bg-[#15100d]/88 p-5 shadow-[0_28px_70px_rgba(0,0,0,0.36)] backdrop-blur-sm md:p-6"
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.68, delay: 0.12 }}
          >
            <Image
              src="/asset/etc/hand-shake.jpg"
              alt=""
              fill
              className="object-cover opacity-62 saturate-[0.82]"
              sizes="(max-width: 1024px) 100vw, 380px"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-linear-to-b from-[#090504]/62 via-[#120b08]/78 to-[#090504]/96"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-linear-to-r from-[#090504]/70 via-[#090504]/24 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center justify-between border-b border-[#a66732]/30 pb-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c9a24d]">
                  OPENING WITH TODAY
                </p>
                <p className="mt-2 text-xl font-black text-[#fff2d8]">함께 준비하는 오픈</p>
              </div>
              <CircleDot className="h-7 w-7 text-[#c9a24d]" strokeWidth={1.7} />
            </div>

            <div className="relative z-10 mt-28 grid grid-cols-3 divide-x divide-[#a66732]/30 border-y border-[#a66732]/30 bg-[#090504]/42 backdrop-blur-[1px]">
              {highlights.map((highlight) => (
                <div key={highlight} className="px-2 py-4 text-center">
                  <CheckCircle2 className="mx-auto mb-2 h-4 w-4 text-[#c9a24d]" />
                  <p className="break-keep text-xs font-black text-[#d9c49f] md:text-sm">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <p className="relative z-10 mt-5 break-keep text-sm font-semibold leading-6 text-[#cbb79b]">
              각 단계는 본사 상담, 계약, 교육, 오픈 지원까지 이어지는 실제 진행 순서를 기준으로
              배치했습니다.
            </p>
          </motion.div>
        </div>

        <div ref={processGridRef} className="relative">
          <div
            data-startup-step-rail
            className="pointer-events-none absolute left-0 right-0 top-[5.15rem] hidden lg:block h-px bg-linear-to-r from-transparent via-[#c9a24d]/45 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {processes.map((process, index) => (
              <motion.article
                key={process.number}
                data-process-step-card
                className="group relative min-h-[18.5rem] overflow-hidden rounded-lg border border-[#a66732]/35 bg-[#15100d]/88 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a24d]/60 hover:bg-[#1d1511]/92 hover:shadow-[0_30px_80px_rgba(0,0,0,0.46)] md:p-6"
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={isProcessInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.62,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#c9a24d]/0 via-[#c9a24d]/55 to-[#c9a24d]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-14 -top-16 h-32 w-32 rounded-full bg-[#c9a24d]/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-60"
                  aria-hidden="true"
                />

                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#c9a24d]">
                      STEP {process.number}
                    </p>
                    <h3 className="mt-3 break-keep text-2xl font-black leading-tight text-[#fff2d8] md:text-3xl">
                      {process.title}
                    </h3>
                  </div>

                  <div
                    data-process-step-marker
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[#c9a24d]/55 bg-[#090504] text-lg font-black text-[#c9a24d] shadow-[0_14px_35px_rgba(0,0,0,0.38)]"
                  >
                    {process.number}
                  </div>
                </div>

                <p className="min-h-[4.75rem] break-keep text-sm font-semibold leading-7 text-[#cbb79b] md:text-base md:leading-8">
                  {process.description}
                </p>

                <div className="mt-7 border-t border-[#a66732]/30 pt-5">
                  <p className="text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#7b634f]">
                    CHECK POINT
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="break-keep text-sm font-black text-[#d9c49f]">
                      {process.checkpoint}
                    </p>
                    <span className="shrink-0 border border-[#a66732]/35 bg-[#21160f] px-3 py-1 text-[0.68rem] font-black text-[#c9a24d]">
                      {process.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-start justify-between gap-6 border-y border-[#a66732]/35 py-7 md:mt-16 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.42 }}
        >
          <div>
            <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#c9a24d]">
              READY TO START
            </p>
            <p className="mt-3 break-keep text-xl font-black leading-8 text-[#fff2d8] md:text-2xl">
              지금 상담하면 내 상권 기준의 오픈 순서를 바로 확인할 수 있습니다.
            </p>
          </div>

          <a
            href="tel:01099239502"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#c9a24d] px-6 text-base font-black text-[#170c08] shadow-[0_18px_45px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e2b957] md:px-8 md:text-lg"
          >
            <PhoneCall className="h-5 w-5" />
            창업 상담 신청
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
