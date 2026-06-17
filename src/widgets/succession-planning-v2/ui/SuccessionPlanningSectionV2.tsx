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

const backgroundColumns = [
  {
    text: 'SUCCESS ROADMAP',
    className: 'left-[5%] text-[#d4a34a]/18',
    animation: 'startup-benefit-marquee-up 34s linear infinite',
  },
  {
    text: 'TODAY UDON',
    className: 'left-[17%] text-[#8f2f19]/28',
    animation: 'startup-benefit-marquee-down 40s linear infinite',
  },
  {
    text: 'FAST OPERATION',
    className: 'right-[15%] text-[#d4a34a]/16',
    animation: 'startup-benefit-marquee-up 38s linear infinite',
  },
  {
    text: 'DELIVERY SYSTEM',
    className: 'right-[4%] text-[#8f2f19]/24',
    animation: 'startup-benefit-marquee-down 44s linear infinite',
  },
];

// 타임라인 아이템 컴포넌트
interface TimelineItemProps {
  strength: Strength;
  index: number;
  active: boolean;
}

const TimelineItem = ({ strength, index, active }: TimelineItemProps) => {
  return (
    <motion.div
      className="relative"
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
        className="h-full overflow-hidden rounded-lg border border-[#d4a34a]/38 bg-[#fff8e8]/95 shadow-[0_22px_64px_rgba(0,0,0,0.28)] backdrop-blur-sm"
        whileHover={{ scale: 1.02, boxShadow: '0 26px 70px rgba(0,0,0,0.34)' }}
        transition={{ duration: 0.3 }}
      >
        {/* 숫자 배지 - 카드 상단에 배치 */}
        <div className="absolute left-2 top-2 z-10 md:left-3 md:top-3">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-[#d4a34a]/45 bg-[#2b1208] shadow-xl backdrop-blur-sm md:h-12 md:w-12"
            whileHover={{
              scale: 1.1,
              borderColor: 'rgba(212, 163, 74, 0.72)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-black tracking-wider text-[#f3d38b] md:text-lg">
              {strength.number}
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {/* 이미지 영역 */}
          <div className="relative w-full aspect-4/3">
            <Image
              src={strength.image}
              alt={strength.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-linear-to-b from-black/8 via-transparent to-[#2b1208]/36" />
          </div>

          {/* 텍스트 영역 */}
          <div className="p-3.5 md:p-5">
            <h4 className="mb-2 break-keep text-base font-black leading-snug text-[#2b1208] md:text-xl">
              {strength.title}
            </h4>
            <div className="mb-3 h-0.5 w-10 bg-linear-to-r from-[#8f2f19] to-[#b9822a] md:mb-2.5" />
            <p className="text-xs font-bold leading-5 text-[#5b351f] md:text-sm md:leading-6 lg:text-base">
              {strength.desc}
            </p>
          </div>
        </div>
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
      className="relative overflow-hidden bg-[#160904] py-20 text-[#fff0c8] md:py-24 lg:py-32"
      ref={sectionRef}
    >
      {/* 배경 디자인 요소 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(212, 163, 74, 0.08) 0 16%, transparent 16% 100%), linear-gradient(45deg, transparent 0 58%, rgba(143, 47, 25, 0.2) 58% 72%, transparent 72% 100%), repeating-linear-gradient(90deg, rgba(255, 222, 151, 0.045) 0 1px, transparent 1px 112px), repeating-linear-gradient(0deg, rgba(255, 222, 151, 0.026) 0 1px, transparent 1px 10px), linear-gradient(135deg, #120602 0%, #261006 48%, #4a1f0f 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[24%] bg-[#7b2a14]/72"
        style={{
          clipPath: 'polygon(56% 0, 100% 0, 100% 100%, 38% 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4a34a]/68 to-transparent" />
      <div className="absolute inset-x-10 top-10 h-px bg-linear-to-r from-transparent via-[#b9822a]/24 to-transparent" />
      <div className="absolute left-[6vw] top-14 bottom-14 w-px bg-linear-to-b from-transparent via-[#d4a34a]/20 to-transparent" />
      <div className="absolute right-[6vw] top-14 bottom-14 w-px bg-linear-to-b from-transparent via-[#d4a34a]/20 to-transparent" />
      <div
        className="pointer-events-none absolute -left-14 top-16 h-36 w-36 rotate-45 border border-[#d4a34a]/20 bg-[#d4a34a]/6"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-24 h-48 w-48 rotate-45 border border-[#8f2f19]/24 bg-[#8f2f19]/14"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-16 left-[10vw] h-28 w-28 rotate-45 border border-[#d4a34a]/16"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block" aria-hidden="true">
        {backgroundColumns.map((column) => (
          <div
            key={column.text}
            className={`absolute top-[-16%] bottom-[-16%] flex w-10 justify-center ${column.className}`}
          >
            <div
              className="flex h-[200%] flex-col items-center gap-8 whitespace-nowrap text-[1.05rem] font-black uppercase leading-none tracking-[0.12em] [writing-mode:vertical-rl]"
              style={{ animation: column.animation }}
            >
              {[0, 1, 2, 3].map((item) => (
                <span key={item}>{column.text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute bottom-[-2.8rem] left-1/2 z-[1] hidden -translate-x-1/2 text-[10rem] font-black uppercase leading-none text-[#d4a34a]/8 md:block lg:text-[15rem]"
        aria-hidden="true"
      >
        ROADMAP
      </div>

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
            <div className="rounded-full border border-[#d4a34a]/42 bg-[#2b1208]/88 px-6 py-2 text-[#e0b95d] shadow-[0_16px_42px_rgba(0,0,0,0.26)] md:px-8 md:py-3">
              <span className="text-sm font-black tracking-[0.18em] md:text-base lg:text-lg">
                SUCCESS ROADMAP
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="mb-4 text-3xl font-black leading-tight text-[#fff8e8] drop-shadow-[0_12px_30px_rgba(0,0,0,0.32)] md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            성공으로 가는 6단계 로드맵
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg font-bold leading-relaxed text-[#ead5a5] md:text-xl"
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
          {/* 그리드 레이아웃 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
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
          <div className="inline-block rounded-lg border border-[#d4a34a]/36 bg-[#211006]/88 px-8 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm md:px-10">
            <p className="text-lg font-black text-[#f3d38b] md:text-xl">지금 바로 시작하세요</p>
            <p className="mt-2 text-sm font-bold text-[#d6c19a] md:text-base">
              점주님의 성공을 위한 모든 준비가 되어있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
