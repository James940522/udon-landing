'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface MenuItem {
  name: string;
  image: string;
}

interface MenuCategory {
  id: string;
  name: string;
  isNew?: boolean;
  items: MenuItem[];
}

interface Brand {
  id: string;
  name: string;
  logo: string;
  bgColor: string;
  accentColor: string;
  categories: MenuCategory[];
}

const brands: Brand[] = [
  {
    id: 'udon',
    name: '오늘은 볶음우동',
    logo: '/asset/logo/오늘은_볶음우동_풀로고.jpeg',
    bgColor: 'bg-amber-600',
    accentColor: 'amber',
    categories: [
      {
        id: 'bokkeumuldon',
        name: '볶음우동',
        items: [
          {
            name: '돈까스 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/돈까스 볶음우동.jpg',
          },
          {
            name: '베이컨 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/베이컨 볶음우동.jpg',
          },
          {
            name: '삼겹 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/삼겹 볶음우동.jpg',
          },
          {
            name: '새우오징어 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/새우오징어 볶음우동.jpg',
          },
          {
            name: '우삼겹 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/우삼겹 볶음우동.jpg',
          },
          {
            name: '치킨치즈까스 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/치킨치즈까스 볶음우동.jpg',
          },
          {
            name: '항정 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/볶음우동/항정 볶음우동.jpg',
          },
        ],
      },
      {
        id: 'kimchi-bokkeumuldon',
        name: '김치볶음우동',
        items: [
          {
            name: '돈까스 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/돈까스 김치볶음우동.jpg',
          },
          {
            name: '베이컨 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/베이컨 김치볶음우동.jpg',
          },
          {
            name: '삼겹 김치 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/삼겹 김치 볶음우동.jpg',
          },
          {
            name: '새우튀김 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/새우튀김 김치볶음우동.jpg',
          },
          {
            name: '소세지 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/소세지 김치볶음우동.jpg',
          },
          {
            name: '우삼겹 김치 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/우삼겹 김치 볶음우동.jpg',
          },
          {
            name: '치킨치즈까스 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/치킨치즈까스 김치볶음우동.jpg',
          },
          {
            name: '항정 김치 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/항정 김치 볶음우동.jpg',
          },
        ],
      },
      {
        id: 'spicy-bokkeumuldon',
        name: '매콤볶음우동',
        items: [
          {
            name: '돈까스 매콤볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/돈까스 매콤볶음우동.jpg',
          },
          {
            name: '베이컨 매콤볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/베이컨 매콤볶음우동.jpg',
          },
          {
            name: '새우튀김 매콤 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/새우튀김 매콤 볶음우동.jpg',
          },
          {
            name: '우삼겹 매콤볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/우삼겹 매콤볶음우동.jpg',
          },
          {
            name: '치킨치즈까스 매콤볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/치킨치즈까스 매콤볶음우동.jpg',
          },
          {
            name: '항정 매콤볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/항정 매콤볶음우동.jpg',
          },
          {
            name: '해물 매콤 볶음우동',
            image: '/asset/menu/오늘은_볶음우동/매콤볶음우동/해물 매콤 볶음우동.jpg',
          },
        ],
      },
      {
        id: 'cream-udon',
        name: '크림우동',
        items: [
          {
            name: '베이컨 명란 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/베이컨 명란 크림우동.jpg',
          },
          {
            name: '쉬림프 명란 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/쉬림프 명란 크림우동.jpg',
          },
          {
            name: '쉬림프 베이컨 명란 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/쉬림프 베이컨 명란 크림우동.jpg',
          },
          {
            name: '매콤 베이컨 명란크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/매콤 베이컨 명란크림우동.jpg',
          },
          {
            name: '매콤 쉬림프 명란 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/매콤 쉬림프 명란 크림우동.jpg',
          },
          {
            name: '매콤 쉬림프 베이컨 명란 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/매콤 쉬림프 베이컨 명란 크림우동.jpg',
          },
          {
            name: '매콤 해물 명란 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/매콤 해물 명란 크림우동.jpg',
          },
        ],
      },
      {
        id: 'teppan-bokkeumbap',
        name: '철판 볶음밥',
        items: [
          {
            name: '돈까스 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/돈까스 철판 볶음밥.jpg',
          },
          {
            name: '베이컨 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/베이컨 철판 볶음밥.jpg',
          },
          {
            name: '삼겹 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/삼겹 철판 볶음밥.jpg',
          },
          {
            name: '새우튀김 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/새우튀김 철판 볶음밥.jpg',
          },
          {
            name: '우삼겹 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/우삼겹 철판 볶음밥.jpg',
          },
          {
            name: '항정 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/항정 철판 볶음밥.jpg',
          },
        ],
      },
      {
        id: 'side',
        name: '사이드',
        items: [
          { name: '가라아게', image: '/asset/menu/오늘은_볶음우동/사이드/가라아게.jpg' },
          { name: '대게튀김', image: '/asset/menu/오늘은_볶음우동/사이드/대게튀김.jpg' },
          { name: '돈까스', image: '/asset/menu/오늘은_볶음우동/사이드/돈까스.jpg' },
          { name: '맛감자', image: '/asset/menu/오늘은_볶음우동/사이드/맛감자.jpg' },
          { name: '버팔로봉', image: '/asset/menu/오늘은_볶음우동/사이드/버팔로봉.jpg' },
          { name: '버팔로윙', image: '/asset/menu/오늘은_볶음우동/사이드/버팔로윙.jpg' },
          { name: '새우튀김', image: '/asset/menu/오늘은_볶음우동/사이드/새우튀김.jpg' },
          { name: '짜장만두', image: '/asset/menu/오늘은_볶음우동/사이드/짜장만두.jpg' },
          { name: '짬뽕만두', image: '/asset/menu/오늘은_볶음우동/사이드/짬뽕만두.jpg' },
          { name: '치킨치즈까스', image: '/asset/menu/오늘은_볶음우동/사이드/치킨치즈까스.jpg' },
          { name: '타코야끼', image: '/asset/menu/오늘은_볶음우동/사이드/타코야끼.jpg' },
        ],
      },
    ],
  },
];

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeBrand, setActiveBrand] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  const currentBrand = brands[activeBrand];
  const currentCategory = currentBrand.categories[activeCategory];

  const scrollToTop = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleBrandChange = (index: number) => {
    setActiveBrand(index);
    setActiveCategory(0);
    // 브랜드 변경 시 섹션 상단으로 스크롤
    setTimeout(scrollToTop, 50);
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <section id="menu" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image src="/asset/bg-1/sec6-bg.jpg" alt="배경" fill className="object-cover" quality={90} unoptimized />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 타이틀 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="typo-h1 text-gray-900 mb-6 [text-shadow:2px_2px_0_#fff,-2px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff,4px_4px_8px_rgba(255,255,255,0.8)]">
            메뉴 소개
          </h2>
          <p className="typo-body text-gray-900 bg-white/80 px-6 py-3 rounded-2xl inline-block mb-6 font-bold shadow-xl">
            브랜드를 선택하고 다양한 메뉴를 확인하세요
          </p>
        </motion.div>

        {/* 브랜드 선택 */}
        <motion.div
          className="flex justify-center items-center gap-6 sm:gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {brands.map((brand, index) => (
            <motion.button
              key={brand.id}
              onClick={() => handleBrandChange(index)}
              className={cn(
                'relative transition-all duration-300 overflow-hidden',
                // rounded 배경 적용
                (brand.id === 'udon' || brand.id === 'eggeats') && 'rounded-2xl',
                activeBrand === index ? 'scale-110' : 'opacity-50 hover:opacity-80 hover:scale-105'
              )}
              whileHover={{ scale: activeBrand === index ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* 로고 */}
              <div className="relative flex items-center justify-center h-28 sm:h-36 lg:h-40">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={280}
                  height={140}
                  className={cn(
                    'h-full w-auto object-contain',
                    // rounded 적용
                    (brand.id === 'udon' || brand.id === 'eggeats') && 'rounded-2xl'
                  )}
                  quality={90}
                  unoptimized
                />
              </div>

              {/* 선택 표시 - 하단 인디케이터 */}
              {activeBrand === index && (
                <motion.div
                  className={cn(
                    'absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full',
                    brand.accentColor === 'amber'
                      ? 'bg-amber-600'
                      : brand.accentColor === 'yellow'
                        ? 'bg-yellow-500'
                        : 'bg-orange-500'
                  )}
                  layoutId="brandIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* 카테고리 탭 + 메뉴 그리드 레이아웃 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* 왼쪽 세로 카테고리 탭 (데스크톱) / 상단 가로 스크롤 (모바일) */}
            <div className="lg:w-48 xl:w-56 flex-shrink-0">
              {/* 모바일: 가로 스크롤 */}
              <div className="lg:hidden flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {currentBrand.categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(index)}
                    className={cn(
                      'relative px-6 py-3.5 font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 border-2',
                      activeCategory === index
                        ? cn(
                            currentBrand.accentColor === 'amber'
                              ? 'bg-amber-600 border-amber-700 text-white'
                              : currentBrand.accentColor === 'yellow'
                                ? 'bg-yellow-600 border-yellow-700 text-white'
                                : 'bg-orange-600 border-orange-700 text-white',
                            'shadow-lg'
                          )
                        : 'bg-stone-800 border-stone-700 text-stone-300 hover:border-stone-600 hover:bg-stone-700 shadow-md'
                    )}
                    style={{ fontFamily: 'var(--font-heading)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category.name}
                    {category.isNew && (
                      <span className="absolute -top-1 -right-1 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-red-600 text-white shadow-lg">
                        NEW
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* 데스크톱: 세로 탭 */}
              <div className="hidden lg:flex flex-col gap-2.5">
                {currentBrand.categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(index)}
                    className={cn(
                      'relative px-6 py-4 font-semibold text-base transition-all duration-200 text-left border-l-4',
                      activeCategory === index
                        ? cn(
                            currentBrand.accentColor === 'amber'
                              ? 'bg-amber-600 border-amber-700 text-white'
                              : currentBrand.accentColor === 'yellow'
                                ? 'bg-yellow-600 border-yellow-700 text-white'
                                : 'bg-orange-600 border-orange-700 text-white',
                            'shadow-lg'
                          )
                        : 'bg-stone-800 border-stone-700 text-stone-300 hover:border-stone-500 hover:bg-stone-700 shadow-md hover:shadow-lg'
                    )}
                    style={{ fontFamily: 'var(--font-heading)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 block tracking-wide">
                      {category.name}
                    </span>
                    {category.isNew && (
                      <span className="absolute top-2 right-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-red-600 text-white shadow-lg">
                        NEW
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* 오른쪽 메뉴 그리드 */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeBrand}-${activeCategory}`}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 min-h-[700px] md:min-h-[800px] lg:min-h-[900px] auto-rows-max"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentCategory.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      className="bg-stone-50 overflow-hidden shadow-xl hover:shadow-2xl border-3 border-stone-600 hover:border-stone-700 transition-all duration-300"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {/* 메뉴 이미지 */}
                      <div className="aspect-square relative overflow-hidden bg-stone-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          priority={index < 3}
                          quality={90}
                        />
                      </div>

                      {/* 메뉴 이름 */}
                      <div className="p-3 md:p-4 lg:p-5">
                        <h3
                          className="text-sm md:text-base lg:text-lg font-medium text-foreground text-center break-keep"
                          style={{ fontFamily: 'var(--font-heading)', wordBreak: 'keep-all' }}
                        >
                          {item.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
