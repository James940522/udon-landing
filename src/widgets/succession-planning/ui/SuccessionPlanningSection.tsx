'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// 개별 강점 아이템 컴포넌트
interface StrengthItemProps {
  strength: {
    number: string;
    title: string;
    desc: string;
    image: string;
  };
  index: number;
}

const StrengthItem = ({ strength, index }: StrengthItemProps) => {
  const itemRef = useRef(null);
  const isItemInView = useInView(itemRef, {
    once: true,
    margin: '-100px',
    amount: 0.3, // 항목의 30%가 보일 때 트리거
  });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={itemRef}
      className="relative"
      initial={{
        opacity: 0,
        x: isEven ? 100 : -100,
      }}
      animate={
        isItemInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      <div
        className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
      >
        {/* 이미지 영역 */}
        <motion.div
          className="w-full md:w-1/2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-strong bg-linear-to-br from-gray-50 to-gray-100">
            <Image
              src={strength.image}
              alt={strength.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* 텍스트 영역 */}
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            {strength.title}
          </h4>
          <div className="w-12 h-1 bg-yellow-600 mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">{strength.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SuccessionPlanningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="succession-planning" className="relative overflow-hidden py-24 md:py-20 lg:py-24 bg-[#D4C4A8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 상단 타이틀 */}
        <motion.div
          className="text-center mb-20 md:mb-16 lg:mb-20"
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
            <div className="bg-stone-700 text-amber-100 px-6 py-2 md:px-8 md:py-3 rounded-full">
              <span className="text-sm md:text-base lg:text-lg font-bold tracking-wider">
                SUCCESSION PLANNING
              </span>
            </div>
          </motion.div>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            실제 데이터에 기반한
            <br className="" />
            [오늘은 볶음우동]의 플랜.
          </p>
        </motion.div>

        {/* 강점 목록 - 지그재그 레이아웃 */}
        <motion.div
          className="mb-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-16 md:space-y-20 lg:space-y-24 max-w-6xl mx-auto">
            {[
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
            ].map((strength, index) => (
              <StrengthItem key={strength.number} strength={strength} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
