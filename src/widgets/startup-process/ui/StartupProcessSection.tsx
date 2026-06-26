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
      className="relative overflow-hidden bg-[#21160f] py-20 text-[#f0dfc0] md:py-28 lg:py-32"
      ref={ref}
    >
      <div
        data-startup-dark-background
        className="absolute inset-0 bg-[#35251b]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 10%, rgba(193,132,66,0.16), transparent 30%), radial-gradient(circle at 82% 82%, rgba(113,66,47,0.2), transparent 34%), linear-gradient(180deg, rgba(33,22,15,0.98) 0%, rgba(53,37,27,0.97) 52%, rgba(25,16,11,0.99) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(rgba(193,132,66,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(193,132,66,0.065) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#c18442]/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#a9824c]/45 to-transparent"
        aria-hidden="true"
      />

      {/* 앤티크 프레임 코너 장식 */}
      <div className="pointer-events-none absolute inset-3.5 z-[1] md:inset-6" aria-hidden="true">
        <div className="absolute inset-0 border border-[#a9824c]/[0.12]" />
        <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#c18442]/45 md:h-8 md:w-8" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[#c18442]/45 md:h-8 md:w-8" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#c18442]/45 md:h-8 md:w-8" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#c18442]/45 md:h-8 md:w-8" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-10 lg:mb-18 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.65fr)] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68 }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-11 w-px bg-[#c18442]/70" aria-hidden="true" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c18442] md:text-sm">
                  FRANCHISE OPENING
                </p>
                <p className="mt-2 text-[0.66rem] font-bold uppercase tracking-[0.3em] text-[#a9824c]">
                  6 STEPS TO OPEN
                </p>
              </div>
            </div>

            <h2 className="font-heading text-[2.85rem] font-bold leading-[1.12] text-[#f0dfc0] sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              가맹절차
            </h2>
            <p className="mt-6 max-w-2xl break-keep text-base font-semibold leading-8 text-[#c4ae91] md:text-lg md:leading-9">
              상담부터 오픈까지 필요한 결정을 한눈에 확인할 수 있도록 정리했습니다.
              <span className="text-[#f0dfc0]">
                {' '}
                복잡한 창업 과정을 여섯 단계의 실행 순서로 깔끔하게 관리합니다.
              </span>
            </p>
          </motion.div>

          <motion.div
            data-startup-image-accent
            className="relative min-h-[21rem] md:min-h-[25rem] overflow-hidden rounded-lg border border-[#a9824c]/45 bg-[#2b211a]/90 p-4 md:p-6 shadow-[0_28px_70px_rgba(16,9,5,0.3)] backdrop-blur-sm"
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.68, delay: 0.12 }}
          >
            <Image
              src="/asset/etc/hand-shake.jpg"
              alt=""
              fill
              className="object-cover opacity-60 saturate-[0.84]"
              sizes="(max-width: 1024px) 100vw, 380px"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-linear-to-b from-[#21160f]/54 via-[#35251b]/68 to-[#21160f]/90"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-linear-to-r from-[#21160f]/62 via-[#21160f]/22 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center justify-between border-b border-[#a9824c]/35 pb-3 md:pb-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#c18442]">
                  OPENING WITH TODAY
                </p>
                <p className="mt-1.5 text-lg font-black text-[#f0dfc0] md:mt-2 md:text-xl">
                  함께 준비하는 오픈
                </p>
              </div>
              <CircleDot className="h-7 w-7 text-[#c18442]" strokeWidth={1.7} />
            </div>

            <div className="relative z-10 mt-16 md:mt-28 grid grid-cols-3 divide-x divide-[#a9824c]/35 border-y border-[#a9824c]/35 bg-[#21160f]/46 backdrop-blur-[1px]">
              {highlights.map((highlight) => (
                <div key={highlight} className="px-2 py-3 text-center md:py-4">
                  <CheckCircle2 className="mx-auto mb-1.5 h-4 w-4 text-[#c18442] md:mb-2" />
                  <p className="break-keep text-xs font-black text-[#f0dfc0] md:text-sm">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <p className="relative z-10 mt-4 break-keep text-sm font-semibold leading-6 text-[#c4ae91] md:mt-5">
              각 단계는 본사 상담, 계약, 교육, 오픈 지원까지 이어지는 실제 진행 순서를 기준으로
              배치했습니다.
            </p>
          </motion.div>
        </div>

        <div ref={processGridRef} className="relative">
          <div
            data-startup-step-rail
            className="pointer-events-none absolute left-0 right-0 top-[5.15rem] hidden lg:block h-px bg-linear-to-r from-transparent via-[#c18442]/45 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {processes.map((process, index) => (
              <motion.article
                key={process.number}
                data-process-step-card
                className="group relative min-h-[14rem] sm:min-h-[18.5rem] overflow-hidden rounded-lg border border-[#a9824c]/45 bg-[#2b211a]/90 p-4 sm:p-6 shadow-[0_22px_65px_rgba(16,9,5,0.26)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c18442]/65 hover:bg-[#35251b]/92 hover:shadow-[0_30px_80px_rgba(16,9,5,0.38)]"
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={isProcessInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.62,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* 앤티크 프레임 이중 테두리 효과 */}
                <div className="absolute inset-[5px] rounded-md border border-[#a9824c]/15 pointer-events-none z-10" />

                {/* 은은한 배경 대형 숫자 워터마크 */}
                <span className="absolute -left-3.5 -bottom-5 font-heading text-[6.5rem] sm:text-[8rem] font-black leading-none tracking-[-0.09em] text-[#f0dfc0]/[0.02] pointer-events-none select-none z-0">
                  {process.number}
                </span>

                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#c18442]/0 via-[#c18442]/55 to-[#c18442]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -right-14 -top-16 h-32 w-32 rounded-full bg-[#c18442]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-60"
                  aria-hidden="true"
                />

                <div className="mb-4 sm:mb-7 flex items-start justify-between gap-2.5 sm:gap-4 relative z-10">
                  <div>
                    <p className="text-[0.55rem] sm:text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#c18442]">
                      STEP {process.number}
                    </p>
                    <h3 className="mt-2 sm:mt-3 break-keep text-lg font-black leading-tight text-[#f0dfc0] sm:text-2xl md:text-3xl">
                      {process.title}
                    </h3>
                  </div>

                  <div
                    data-process-step-marker
                    className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm border border-[#c18442]/60 bg-[#493229] text-sm sm:text-lg font-black text-[#f0dfc0] shadow-[0_8px_20px_rgba(16,9,5,0.24)]"
                  >
                    {process.number}
                  </div>
                </div>

                <p className="min-h-[3.5rem] sm:min-h-[4.75rem] break-keep text-xs sm:text-sm font-semibold leading-5 sm:leading-7 text-[#c4ae91] md:text-base md:leading-8 relative z-10">
                  {process.description}
                </p>

                <div className="mt-5 sm:mt-7 border-t border-[#a9824c]/35 pt-4 sm:pt-5 relative z-10">
                  <p className="text-[0.55rem] sm:text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#9b8069]">
                    CHECK POINT
                  </p>
                  <div className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <p className="break-keep text-xs sm:text-sm font-black text-[#f0dfc0]">
                      {process.checkpoint}
                    </p>
                    <span className="self-start sm:self-auto shrink-0 border border-[#a9824c]/45 bg-[#493229] px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-[0.68rem] font-black text-[#f0dfc0]">
                      {process.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-start justify-between gap-6 border-y border-[#a9824c]/45 py-7 md:mt-16 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, delay: 0.42 }}
        >
          <div>
            <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#c18442]">
              READY TO START
            </p>
            <p className="mt-3 break-keep text-xl font-black leading-8 text-[#f0dfc0] md:text-2xl">
              지금 상담하면 내 상권 기준의 오픈 순서를 바로 확인할 수 있습니다.
            </p>
          </div>

          <a
            href="tel:01099239502"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#c18442] px-6 text-base font-black text-[#21160f] shadow-[0_18px_45px_rgba(16,9,5,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d09a54] md:px-8 md:text-lg"
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
