'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function TrustedFranchiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const checkPoints = [
    {
      title: '투명한 수익 공개',
      description: '특정 가맹점만이 아닌, 전체 매장의 실제 매출 데이터를 투명하게 공개합니다',
    },
    {
      title: '체계적인 매출 교육',
      description: '오픈만 시키고 끝이 아닌, 지속적인 매출 증대 노하우와 운영 교육을 제공합니다',
    },
    {
      title: '검증된 레시피와 시스템',
      description: '실제 현장에서 검증된 레시피와 운영 시스템으로 안정적인 창업을 지원합니다',
    },
  ];

  return (
    <section id="trusted-franchise" className="relative overflow-hidden py-20 md:py-32" ref={ref}>
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image src="/asset/bg/main-section1-bg.jpg" alt="배경" fill className="object-cover" quality={90} />
        {/* 다크 오버레이 */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 메인 타이틀 */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-amber-400 text-lg md:text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            여러분이라면 어떤 프랜차이즈를
          </motion.p>
          <motion.h2
            className="typo-h1 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            선택하시겠습니까?
          </motion.h2>
          <motion.p
            className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            특정 가맹점의 높은 매출만 보여주며 현혹하는 그런 영업 방식에 속지 마세요
          </motion.p>
        </motion.div>

        {/* 비교 카드 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto mb-16 md:mb-20">
          {/* 일반 프랜차이즈 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 제목 */}
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-red-400 mb-6 text-center"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              일반 프랜차이즈
            </motion.h3>

            {/* 이미지 박스 */}
            <motion.div
              className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500 cursor-pointer mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/asset/etc/James_A_small_Korean_delivery-only_restaurant_kitchen_interio_7cfcd300-163b-4281-a8a5-939a92a729fa_1.png"
                  alt="일반 프랜차이즈"
                  fill
                  className="object-cover brightness-90"
                  quality={90}
                />
              </motion.div>
              <div className="relative z-10 h-[400px] md:h-[500px]" />
            </motion.div>

            {/* 설명 텍스트 */}
            <motion.p
              className="text-lg md:text-xl text-white text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              높은 매출만 보여주고
              <br />
              실제 운영 노하우는 없는 프랜차이즈
            </motion.p>
          </motion.div>

          {/* 오늘은 볶음우동 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* 제목 (로고) */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }} transition={{ duration: 0.3 }}>
                <Image
                  src="/asset/logo/오늘은_볶음우동_문구.png"
                  alt="오늘은 볶음우동"
                  width={240}
                  height={96}
                  className="w-48 md:w-60 h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                  quality={90}
                />
              </motion.div>
            </motion.div>

            {/* 이미지 박스 */}
            <motion.div
              className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500 cursor-pointer mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/asset/etc/James_Inside_the_same_small_Korean_delivery-only_restaurant_k_dedc14fb-e27b-47a6-b722-f09ae535adfe_3.png"
                  alt="오늘은 볶음우동"
                  fill
                  className="object-cover brightness-90"
                  quality={90}
                />
              </motion.div>
              <div className="relative z-10 h-[400px] md:h-[500px]" />
            </motion.div>

            {/* 설명 텍스트 */}
            <motion.p
              className="text-lg md:text-xl text-white text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              매출 올리는 확실한 방법과
              <br />
              노하우를 교육하는 진정성 있는 파트너
            </motion.p>
          </motion.div>
        </div>

        {/* 하단 안내 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white text-lg md:text-xl font-semibold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            정말 실력 있는 프랜차이즈인지
            <br className="sm:hidden" />
            <span className="text-amber-400"> 이 세 가지를 꼭 확인</span>해 보시기 바랍니다
          </p>
        </motion.div>

        {/* 체크포인트 리스트 */}
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {checkPoints.map((point, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-r from-stone-900/95 to-stone-800/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-transparent hover:border-amber-500/50 transition-all duration-300"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(28, 25, 23, 0.95) 0%, rgba(41, 37, 36, 0.95) 100%)',
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(245, 158, 11, 0.2)' }}
            >
              {/* 불꽃 테두리 효과 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <div className="relative flex items-start gap-6">
                {/* 번호 - 불꽃 스타일 */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative w-14 h-14 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 animate-pulse opacity-50" />
                    <span
                      className="relative text-2xl font-bold text-white z-10"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* 텍스트 */}
                <div className="flex-1">
                  <h4
                    className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {point.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{point.description}</p>
                </div>

                {/* 체크 아이콘 - 불꽃 스타일 */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
