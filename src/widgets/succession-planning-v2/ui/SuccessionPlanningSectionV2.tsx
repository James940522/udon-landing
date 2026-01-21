'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
    desc: '매출액 대비 식자재 비용 28~33%로 신선한 식자재를 합리적인 가격에 공급받을 수 있으며, 안정적인 주 6회의 전국배송 시스템을 삼성 웰스토리 대기업과 함께 합니다.',
    image: '/asset/etc/1.jpg',
  },
  {
    number: '02',
    title: '간단하고 편리한 조리',
    desc: '조리과정을 최적화 하여 평균조리시간 3분 내외로 1~2인 운영에 특화되도록 간단한 조리입니다. 초보자도 빠른 습득이 가능하며, 그로인해 직원 의존도가 최소화됩니다.',
    image: '/asset/etc/2.png',
  },
  {
    number: '03',
    title: '높은 만족도',
    desc: '높은 퀄리티의 음식으로 소비자들의 만족을 추구합니다. 소비자들의 만족은 재주문으로 점주님께 돌아오며, 다양한 토핑옵션과 소스로 소비자들이 자신만의 취향을 찾도록 돕고 있습니다.',
    image: '/asset/etc/3.png',
  },
  {
    number: '04',
    title: '비용의 최소화',
    desc: '대형 평수가 아닌 7~10평 소형매장에서도 높은매출을 충분히 실현합니다. 넓은 면적에 따라 높아지는 고정비의 부담을 최소화 하며 조리 및 포장에 최적화된 동선으로 점주님들의 비용부담을 최소화합니다.',
    image: '/asset/etc/4.png',
  },
  {
    number: '05',
    title: '더불어 나아가는 본사',
    desc: '점주님들의 오픈 이후 방치하는 본사가 아닌 점주님들과 함께 나아가는 본사가 되도록 매출액 감소, 비용부담 등 고민중이신 내용들을 본사와 소통하며, 안정적인 운영과 성공을 위해 함께 나아갑니다.',
    image: '/asset/etc/5.png',
  },
  {
    number: '06',
    title: '배달 편의성',
    desc: '배달 포장에 최적화된 메뉴 구성과 레시피로 광고비 대비 매출효율과 만족도를 극대화합니다. 항상 고객들의 만족과 행복한 식사경험 제공을 최우선으로 생각합니다.',
    image: '/asset/etc/6.png',
  },
];

// 수직 진행 바 컴포넌트
const ProgressLine = ({ progress }: { progress: any }) => {
  return (
    <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 md:w-1">
      {/* 배경 라인 */}
      <div className="absolute inset-0 bg-stone-400/30" />
      {/* 진행 라인 */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-linear-to-b from-stone-700 via-stone-600 to-amber-700 origin-top"
        style={{ scaleY: progress }}
      />
    </div>
  );
};

// 타임라인 아이템 컴포넌트
interface TimelineItemProps {
  strength: Strength;
  index: number;
  totalItems: number;
}

const TimelineItem = ({ strength, index, totalItems }: TimelineItemProps) => {
  const itemRef = useRef(null);
  const isItemInView = useInView(itemRef, {
    once: true,
    margin: '-80px',
    amount: 0.3,
  });

  // 개별 아이템 스크롤 진행도
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 1]);
  const numberScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);

  const isLast = index === totalItems - 1;

  return (
    <motion.div
      ref={itemRef}
      className="relative pl-20 md:pl-28 pr-4 md:pr-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isItemInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
    >
      {/* 숫자 배지 */}
      <motion.div
        className="absolute left-0 top-8 md:top-12 flex items-center justify-center"
        style={{ scale: numberScale }}
      >
        <div className="relative">
          {/* 배경 원 - 고급스러운 스타일 */}
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-stone-800 border-2 border-amber-600/30 shadow-xl flex items-center justify-center backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05, 
              borderColor: 'rgba(217, 119, 6, 0.6)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl md:text-2xl font-light tracking-wider text-amber-100">
              {strength.number}
            </span>
          </motion.div>
          {/* 연결 도트 (마지막 제외) */}
          {!isLast && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-1.5 h-1.5 rounded-full bg-stone-600" />
          )}
        </div>
      </motion.div>

      {/* 콘텐츠 카드 */}
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg overflow-hidden"
        style={{ scale }}
        whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* 이미지 영역 */}
          <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto md:min-h-[280px]">
            <Image
              src={strength.image}
              alt={strength.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/20 to-transparent" />
          </div>

          {/* 텍스트 영역 */}
          <div className="flex-1 p-6 md:p-8 lg:p-10">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {strength.title}
            </h4>
            <div className="w-12 h-1 bg-linear-to-r from-yellow-500 to-amber-600 mb-4 md:mb-6" />
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
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
  
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // 타임라인 전체 스크롤 진행도
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  return (
    <section
      id="succession-planning-v2"
      className="relative overflow-hidden py-20 md:py-24 lg:py-32 bg-[#D4C4A8]"
      ref={sectionRef}
    >
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
            <div className="bg-stone-700 text-amber-100 px-6 py-2 md:px-8 md:py-3 rounded-full shadow-lg">
              <span className="text-sm md:text-base lg:text-lg font-bold tracking-wider">
                SUCCESS ROADMAP
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            성공으로 가는 6단계 로드맵
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed"
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
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* 진행 바 */}
          <ProgressLine progress={scrollYProgress} />

          {/* 타임라인 아이템들 */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {STRENGTHS.map((strength, index) => (
              <TimelineItem
                key={strength.number}
                strength={strength}
                index={index}
                totalItems={STRENGTHS.length}
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
          <div className="inline-block bg-stone-800/90 backdrop-blur-sm px-10 py-5 rounded-2xl shadow-xl border border-amber-600/20">
            <p className="text-lg md:text-xl font-semibold text-amber-100">
              지금 바로 시작하세요
            </p>
            <p className="text-sm md:text-base text-stone-300 mt-2">
              점주님의 성공을 위한 모든 준비가 되어있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
