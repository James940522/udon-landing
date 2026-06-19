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
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#d8c8b5]/90 bg-[#fffaf2]/92 shadow-[0_18px_45px_rgba(73,50,41,0.11)] backdrop-blur-[2px]"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                boxShadow: '0 26px 58px rgba(73,50,41,0.16)',
              }
        }
        transition={{ duration: 0.28 }}
      >
        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-[#9b5b46]" />

        <div className="absolute left-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#fffaf2] bg-[#9b5b46] shadow-[0_7px_18px_rgba(73,50,41,0.18)] md:h-14 md:w-14">
          <span className="text-sm font-black tracking-[-0.04em] text-[#fffaf2] md:text-base">
            {strength.number}
          </span>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden border-b border-[#d8c8b5]/70">
          <Image
            src={strength.image}
            alt={strength.title}
            fill
            className="object-cover saturate-[0.9] transition duration-700 group-hover:scale-[1.035] group-hover:saturate-100"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#493229]/16" />
        </div>

        <div className="relative flex min-h-40 flex-1 flex-col p-5 md:min-h-44 md:p-6">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.24em] text-[#9b5b46]/80">
            Step {strength.number}
          </p>
          <h4 className="mb-3 break-keep text-lg font-black leading-snug text-[#2b1b16] md:text-xl">
            {strength.title}
          </h4>
          <div className="mb-4 flex items-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9b5b46]" />
            <span className="h-px w-12 bg-[#9b5b46]/55" />
            <span className="h-px flex-1 bg-[#d8c8b5]" />
          </div>
          <p className="break-keep text-sm font-semibold leading-6 text-[#746054] md:text-base md:leading-7">
            {strength.desc}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function SuccessionPlanningSectionV2() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -22% 0px' });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.35 });

  return (
    <section
      id="succession-planning-v2"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f0e9df] py-20 text-[#2b1b16] md:py-24 lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,250,242,0.84) 0%, rgba(240,233,223,0.96) 100%), url('/new-asset/background/startup-benefit-hanji.webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center md:mb-18 lg:mb-22"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduceMotion ? 0.01 : 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#9b5b46]/35 sm:w-12" aria-hidden="true" />
            <p className="text-xs font-black uppercase tracking-[0.38em] text-[#9b5b46]">
              Success roadmap
            </p>
            <span className="h-px w-8 bg-[#9b5b46]/35 sm:w-12" aria-hidden="true" />
          </div>

          <motion.h2
            className="mb-5 break-keep text-3xl font-black leading-tight tracking-[-0.04em] text-[#2b1b16] md:text-4xl lg:text-6xl"
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
            className="mx-auto max-w-2xl text-base font-bold leading-relaxed text-[#746054] md:text-xl"
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
          ref={timelineRef}
          className="relative mx-auto max-w-6xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: reduceMotion ? 0.01 : 0.6, delay: reduceMotion ? 0 : 0.25 }}
        >
          <div
            data-roadmap-grid
            className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-fr md:grid-cols-3 md:gap-7 lg:gap-8"
          >
            {STRENGTHS.map((strength, index) => (
              <TimelineItem
                key={strength.number}
                strength={strength}
                index={index}
                active={isTimelineInView}
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
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#d8c8b5] bg-[#fffaf2]/92 px-7 py-7 shadow-[0_18px_50px_rgba(73,50,41,0.1)] backdrop-blur-[2px] md:px-12 md:py-8">
            <span className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]" aria-hidden="true" />
            <p className="text-lg font-black text-[#2b1b16] md:text-xl">지금 바로 시작하세요</p>
            <p className="mt-2 text-sm font-bold text-[#746054] md:text-base">
              점주님의 성공을 위한 모든 준비가 되어있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
