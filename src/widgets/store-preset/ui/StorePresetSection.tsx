'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';

interface PresetOption {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface BrandPreset {
  id: string;
  name: string;
  logo: string;
  options: PresetOption[];
}

const brandPresets: BrandPreset[] = [
  {
    id: 'omurice',
    name: '오늘은 볶음우동',
    logo: '/asset/logo/오늘은_오므라이스_풀로고.jpeg',
    options: [
      {
        id: 'omu_a',
        title: 'A',
        description: '밝고 활기찬\n모던한 분위기',
        image: '/asset/store/omu_a.jpeg',
      },
      {
        id: 'omu_b',
        title: 'B',
        description: '따뜻하고\n아늑한 분위기',
        image: '/asset/store/omu_b.jpeg',
      },
    ],
  },
];

export function StorePresetSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="store-preset"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, #FFF8EB 0%, #f7eddb 100%)',
      }}
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="typo-h1 text-gray-900 mb-6"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            매장 인테리어
          </h2>
          <p
            className="typo-body text-gray-800 bg-[#fff8eb]/80 px-6 py-3 rounded-2xl inline-block font-bold shadow-xl"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
            }}
          >
            브랜드별로 선택 가능한 2가지 디자인
          </p>
        </motion.div>

        {/* 모바일 레이아웃 (브랜드별 세로 배치) */}
        <div className="md:hidden space-y-12">
          {brandPresets.map((brand, brandIndex) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: brandIndex * 0.2 }}
            >
              {/* 브랜드 타이틀 */}
              <div className="flex justify-center mb-6">
                <h3
                  className="text-2xl font-black"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#C9A24D',
                    textShadow:
                      '-1.5px -1.5px 0 #5c351f, 1.5px -1.5px 0 #5c351f, -1.5px 1.5px 0 #5c351f, 1.5px 1.5px 0 #5c351f, 3px 3px 0 #6B3410, 4px 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 193, 7, 0.5)',
                  }}
                >
                  오늘은 볶음우동
                </h3>
              </div>

              {/* 프리셋 옵션들 (2열) */}
              <div className="grid grid-cols-2 gap-4">
                {brand.options.map((option, optionIndex) => (
                  <motion.div
                    key={option.id}
                    className="group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: brandIndex * 0.2 + optionIndex * 0.1 + 0.3,
                    }}
                  >
                    <div className="bg-[#fff8eb] rounded-2xl overflow-hidden shadow-lg border-3 border-yellow-200">
                      {/* 이미지 */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                        <Image
                          src={option.image}
                          alt={`${brand.name} - ${option.title}`}
                          fill
                          className="object-contain"
                        />
                        {/* 오버레이 배지 */}
                        <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold shadow-lg text-sm">
                          <span style={{ fontFamily: 'var(--font-heading)' }}>{option.title}</span>
                        </div>
                      </div>

                      {/* 설명 */}
                      <div className="p-3 text-center">
                        <p
                          className="text-xs font-bold text-gray-800 whitespace-pre-line leading-snug"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 데스크탑 레이아웃 (브랜드별 그룹) */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16">
          {brandPresets.map((brand, brandIndex) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: brandIndex * 0.2 }}
            >
              {/* 브랜드 타이틀 */}
              <div className="flex justify-center mb-8">
                <h3
                  className="text-3xl lg:text-4xl font-black"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#C9A24D',
                    textShadow:
                      '-2px -2px 0 #5c351f, 2px -2px 0 #5c351f, -2px 2px 0 #5c351f, 2px 2px 0 #5c351f, 4px 4px 0 #6B3410, 6px 6px 0 #5c351f, 8px 8px 12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 193, 7, 0.6)',
                  }}
                >
                  오늘은 볶음우동
                </h3>
              </div>

              {/* 이미지 2개 (A, B) */}
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                {brand.options.map((option, optionIndex) => (
                  <motion.div
                    key={option.id}
                    className="group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: brandIndex * 0.2 + optionIndex * 0.1 + 0.3,
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="bg-[#fff8eb] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-3 border-yellow-200">
                      {/* 이미지 */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                        <Image
                          src={option.image}
                          alt={`${brand.name} - ${option.title}`}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* 오버레이 배지 */}
                        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full font-bold shadow-lg text-sm">
                          <span style={{ fontFamily: 'var(--font-heading)' }}>{option.title}</span>
                        </div>
                      </div>

                      {/* 설명 */}
                      <div className="p-4 lg:p-5 text-center">
                        <p
                          className="text-sm lg:text-base font-bold text-gray-800 whitespace-pre-line leading-snug"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 안내 문구 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p
            className="typo-body text-gray-700 bg-gradient-to-r from-yellow-50 to-orange-50 px-8 py-4 rounded-2xl inline-block shadow-md border-2 border-yellow-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            💡 창업 시 선택 가능한 인테리어 디자인입니다
            <br />
            <span className="text-sm text-gray-600">
              실제 매장 상황에 따라 일부 조정될 수 있습니다
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
