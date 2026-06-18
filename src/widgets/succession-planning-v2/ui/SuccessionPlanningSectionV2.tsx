'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// 강점 데이터 타입
interface Strength {
  number: string;
  title: string;
  desc: string;
  image: string;
}

// 강점 데이터
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

const ROADMAP_KEYWORDS = ['SUCCESS ROADMAP', 'TODAY UDON', 'FAST OPERATION', 'DELIVERY SYSTEM'];

const NOREN_PANELS = Array.from({ length: 9 }, (_, index) => index);

// 타임라인 아이템 컴포넌트
interface TimelineItemProps {
  strength: Strength;
  index: number;
  active: boolean;
}

const TimelineItem = ({ strength, index, active }: TimelineItemProps) => {
  const isRaised = index % 3 === 1;

  return (
    <motion.div
      className={`relative ${isRaised ? 'md:mt-10' : ''}`}
      initial={{ opacity: 0, y: 34, scale: 0.96, filter: 'blur(10px)' }}
      animate={active ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.68,
        delay: index * 0.11,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* 콘텐츠 카드 */}
      <motion.div
        className="group relative h-full overflow-hidden border border-[#c9a24d]/42 bg-[#3b2115]/96 shadow-[12px_16px_0_rgba(10,4,2,0.34),0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm"
        style={{
          clipPath:
            'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
        }}
        whileHover={{
          y: -7,
          boxShadow: '14px 22px 0 rgba(10,4,2,0.38), 0 30px 76px rgba(0,0,0,0.4)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-linear-to-r from-[#a66732] via-[#c9a24d] to-[#a66732]" />

        {/* 황동 메뉴 패찰 */}
        <div className="absolute left-0 top-0 z-20">
          <motion.div
            className="flex h-11 min-w-16 items-center justify-center border-b border-r border-[#fff2d8]/24 bg-[#c9a24d] px-3 shadow-[6px_7px_0_rgba(23,12,8,0.42)] md:h-14 md:min-w-20"
            whileHover={{
              x: 3,
              boxShadow: '3px 5px 0 rgba(23,12,8,0.42)',
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-roadmap-display text-[0.68rem] text-[#170c08] md:text-xs">
              STEP
            </span>
            <span className="ml-2 text-lg font-black leading-none text-[#170c08] md:text-2xl">
              {strength.number}
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {/* 이미지 영역 */}
          <div className="relative aspect-4/3 w-full overflow-hidden border-b border-[#c9a24d]/28">
            <Image
              src={strength.image}
              alt={strength.title}
              fill
              className="object-cover saturate-[0.82] sepia-[0.14] transition duration-700 group-hover:scale-[1.045] group-hover:saturate-100"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#170c08]/8 via-transparent to-[#170c08]/72" />
            <div
              className="absolute inset-0 opacity-18 mix-blend-soft-light"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0 6px, rgba(255,242,216,.22) 6px 7px)',
              }}
            />
          </div>

          {/* 텍스트 영역 */}
          <div className="relative min-h-40 p-4 md:min-h-48 md:p-6">
            <div className="absolute right-4 top-4 hidden text-[0.58rem] font-black tracking-[0.24em] text-[#c9a24d]/55 sm:block md:text-[0.65rem]">
              今日の成功条件
            </div>
            <h4 className="mb-3 max-w-[82%] break-keep text-base font-black leading-snug text-[#fff2d8] md:text-xl">
              {strength.title}
            </h4>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-10 bg-[#c9a24d]" />
              <span className="h-1.5 w-1.5 rotate-45 border border-[#c9a24d]" />
              <span className="h-px flex-1 bg-[#c9a24d]/20" />
            </div>
            <p className="break-keep text-xs font-semibold leading-5 text-[#fff2d8]/72 md:text-sm md:leading-6 lg:text-base">
              {strength.desc}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#c9a24d]/46" />
      </motion.div>
    </motion.div>
  );
};

// 메인 섹션 컴포넌트
export default function SuccessionPlanningSectionV2() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -22% 0px' });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.58 });

  return (
    <section
      id="succession-planning-v2"
      className="relative overflow-hidden bg-[#170c08] py-20 text-[#fff2d8] md:py-24 lg:py-32"
      ref={sectionRef}
    >
      {/* 이자카야의 목재 벽, 노렌, 황동 장식을 추상화한 배경 */}
      <div className="izakaya-roadmap-bg absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex h-20 opacity-80 md:h-28"
        aria-hidden="true"
      >
        {NOREN_PANELS.map((panel) => (
          <div
            key={panel}
            className="relative h-full flex-1 border-r border-[#170c08]/80 bg-[#3b2115]"
            style={{
              clipPath:
                panel % 2 === 0
                  ? 'polygon(0 0, 100% 0, 100% 82%, 52% 100%, 0 82%)'
                  : 'polygon(0 0, 100% 0, 100% 88%, 48% 96%, 0 88%)',
              opacity: 0.28 + (panel % 3) * 0.08,
            }}
          >
            <span className="absolute inset-x-[22%] top-0 h-full border-x border-[#c9a24d]/12" />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute left-[-10rem] top-[16%] h-[32rem] w-[32rem] rounded-full bg-[#a66732]/16 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-12rem] bottom-[8%] h-[36rem] w-[36rem] rounded-full bg-[#c9a24d]/10 blur-[130px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-[8%] top-[18%] z-[2] w-[118%] -rotate-[5deg] overflow-hidden border-y border-[#c9a24d]/16 bg-[#170c08]/64 py-2 opacity-55"
        aria-hidden="true"
      >
        <div className="font-roadmap-display roadmap-ribbon-left flex w-max whitespace-nowrap text-xs text-[#c9a24d]/52 md:text-sm">
          {[0, 1, 2].map((track) => (
            <div key={track} className="flex shrink-0 items-center gap-7 pr-7">
              {ROADMAP_KEYWORDS.map((keyword) => (
                <span key={`${track}-${keyword}`} className="flex items-center gap-7">
                  {keyword}
                  <i className="h-1.5 w-1.5 rotate-45 bg-[#a66732]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute -left-[8%] bottom-[14%] z-[2] w-[118%] rotate-[4deg] overflow-hidden border-y border-[#a66732]/18 bg-[#3b2115]/42 py-2 opacity-50"
        aria-hidden="true"
      >
        <div className="font-roadmap-display roadmap-ribbon-right flex w-max whitespace-nowrap text-xs text-[#fff2d8]/36 md:text-sm">
          {[0, 1, 2].map((track) => (
            <div key={track} className="flex shrink-0 items-center gap-7 pr-7">
              {[...ROADMAP_KEYWORDS].reverse().map((keyword) => (
                <span key={`${track}-${keyword}`} className="flex items-center gap-7">
                  {keyword}
                  <i className="h-1.5 w-1.5 border border-[#c9a24d]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-[4vw] top-28 bottom-24 z-[1] w-px bg-linear-to-b from-transparent via-[#c9a24d]/24 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[4vw] top-28 bottom-24 z-[1] w-px bg-linear-to-b from-transparent via-[#c9a24d]/24 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[4vw] top-32 z-[1] h-8 w-8 border-l border-t border-[#c9a24d]/46"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-28 right-[4vw] z-[1] h-8 w-8 border-b border-r border-[#c9a24d]/46"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 상단 타이틀 */}
        <motion.div
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 md:mb-8"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative border border-[#c9a24d]/58 bg-[#170c08]/90 px-7 py-3 text-[#c9a24d] shadow-[8px_8px_0_rgba(59,33,21,0.86)] md:px-10"
              style={{
                clipPath:
                  'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              }}
            >
              <span className="font-roadmap-display text-xs md:text-sm lg:text-base">
                SUCCESS ROADMAP
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="mb-5 break-keep text-3xl font-black leading-tight text-[#fff2d8] drop-shadow-[0_12px_30px_rgba(0,0,0,0.42)] md:text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            성공으로 가는 6단계 로드맵
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-base font-bold leading-relaxed text-[#fff2d8]/72 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            실제 데이터에 기반한
            <br />
            [오늘은 볶음우동]의 성공 전략
          </motion.p>
        </motion.div>

        {/* 타임라인 */}
        <motion.div
          ref={timelineRef}
          className="relative mx-auto max-w-6xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <svg
            className="pointer-events-none absolute inset-x-[5%] top-[8%] hidden h-[84%] w-[90%] md:block"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M70 145 C205 145 190 46 340 46 S470 154 500 180 S615 315 690 315 S805 214 930 214 L930 505 C805 505 812 580 660 580 S515 470 500 448 S405 340 310 340 S190 450 70 450"
              fill="none"
              stroke="#C9A24D"
              strokeDasharray="2 15"
              strokeLinecap="square"
              strokeWidth="2"
              opacity="0.34"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 그리드 레이아웃 */}
          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:gap-x-8">
            {STRENGTHS.map((strength, index) => (
              <TimelineItem
                key={strength.number}
                strength={strength}
                index={index}
                active={isTimelineInView}
              />
            ))}
          </div>
        </motion.div>

        {/* 하단 마무리 메시지 */}
        <motion.div
          className="text-center mt-16 md:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="relative inline-block border border-[#c9a24d]/58 bg-[#3b2115]/92 px-9 py-6 shadow-[12px_14px_0_rgba(23,12,8,0.66),0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-sm md:px-14"
            style={{
              clipPath:
                'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
            }}
          >
            <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[#c9a24d]/64" />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#c9a24d]/64" />
            <p className="text-lg font-black text-[#fff2d8] md:text-xl">지금 바로 시작하세요</p>
            <p className="mt-2 text-sm font-bold text-[#fff2d8]/65 md:text-base">
              점주님의 성공을 위한 모든 준비가 되어있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
