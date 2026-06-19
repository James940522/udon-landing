'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { normalizeMenuImagePath } from './normalize-menu-image-path';

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
  categories: MenuCategory[];
}

const brands: Brand[] = [
  {
    id: 'udon',
    name: '오늘은 볶음우동',
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
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/돈까스 김치볶음우동.jpeg',
          },
          {
            name: '베이컨 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/베이컨 김치볶음우동.jpeg',
          },
          {
            name: '삼겹 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/삼겹 김치볶음우동.jpeg',
          },
          {
            name: '새우튀김 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/새우튀김 김치볶음우동.jpeg',
          },
          {
            name: '소세지 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/소세지 김치볶음우동.jpeg',
          },
          {
            name: '우삼겹 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/우삼겹 김치볶음우동.jpeg',
          },
          {
            name: '치킨치즈까스 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/치킨치즈까스 김치볶음우동.jpeg',
          },
          {
            name: '항정 김치볶음우동',
            image: '/asset/menu/오늘은_볶음우동/김치볶음우동/항정 김치볶음우동.jpeg',
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
            name: '베이컨 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/베이컨 크림우동.jpg',
          },
          {
            name: '베이컨 매콤 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/베이컨 매콤 크림우동.jpg',
          },
          {
            name: '쉬림프 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/쉬림프 크림 우동.jpg',
          },
          {
            name: '쉬림프 매콤 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/쉬림프 매콤 크림우동.png',
          },
          {
            name: '새우 베이컨 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/새우 베이컨 크림우동.jpg',
          },
          {
            name: '새우 베이컨 매콤 크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/새우 베이컨 매콤 크림우동.jpg',
          },
          {
            name: '해물 매콤크림우동',
            image: '/asset/menu/오늘은_볶음우동/크림우동/해물 매콤크림우동.jpg',
          },
        ],
      },
      {
        id: 'teppan-bokkeumbap',
        name: '철판 볶음밥',
        items: [
          {
            name: '돈까스 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/돈까스 철판 볶음밥.jpeg',
          },
          {
            name: '베이컨 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/베이컨 철판 볶음밥.jpeg',
          },
          {
            name: '삼겹 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/삼겹 철판 볶음밥.jpeg',
          },
          {
            name: '새우튀김 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/새우튀김 철판 볶음밥.jpeg',
          },
          {
            name: '우삼겹 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/우삼겹 철판 볶음밥.jpeg',
          },
          {
            name: '치킨치즈 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/치킨치즈 철판 볶음밥.jpeg',
          },
          {
            name: '항정살 철판 볶음밥',
            image: '/asset/menu/오늘은_볶음우동/철판 볶음밥/항정살 철판 볶음밥.jpeg',
          },
        ],
      },
      {
        id: 'side',
        name: '사이드',
        items: [
          { name: '가라아게', image: '/asset/menu/오늘은_볶음우동/사이드/가라아게.jpeg' },
          { name: '대게튀김', image: '/asset/menu/오늘은_볶음우동/사이드/대게튀김.jpeg' },
          { name: '돈까스', image: '/asset/menu/오늘은_볶음우동/사이드/돈까스.jpeg' },
          { name: '떡갈비', image: '/asset/menu/오늘은_볶음우동/사이드/떡갈비.jpeg' },
          { name: '맛감자', image: '/asset/menu/오늘은_볶음우동/사이드/맛감자.jpeg' },
          { name: '버팔로봉', image: '/asset/menu/오늘은_볶음우동/사이드/버팔로봉.jpeg' },
          { name: '버팔로윙', image: '/asset/menu/오늘은_볶음우동/사이드/버팔로윙.jpeg' },
          { name: '짜장만두', image: '/asset/menu/오늘은_볶음우동/사이드/짜장만두.jpeg' },
          { name: '짬뽕만두', image: '/asset/menu/오늘은_볶음우동/사이드/짬뽕만두.jpeg' },
          { name: '치킨치즈까스', image: '/asset/menu/오늘은_볶음우동/사이드/치킨치즈까스.jpeg' },
          { name: '타코야끼', image: '/asset/menu/오늘은_볶음우동/사이드/타코야끼.jpeg' },
        ],
      },
    ],
  },
];

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const currentBrand = brands[0];
  const currentCategory = currentBrand.categories[activeCategory];

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden border-t border-[#d8c8b5] bg-[#f7f0e4] py-20 text-[#2b1b16] md:py-28 lg:py-32"
      ref={ref}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 0, transparent calc(100% - 1px), rgba(155,91,70,0.045) calc(100% - 1px))',
          backgroundSize: '88px 100%',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#9b5b46]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between border-b border-[#d8c8b5] pb-4 text-[10px] font-black tracking-[0.22em] text-[#9b5b46] sm:text-xs">
            <span className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#9b5b46]" aria-hidden="true" />
              08 / SIGNATURE MENU
            </span>
            <span className="hidden text-[#746054] sm:block">TODAY UDON SELECTION</span>
          </div>

          <div className="grid gap-8 pt-9 md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] md:items-end md:gap-14 md:pt-12">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#9b5b46]">
                {currentBrand.name}
              </p>
              <h2
                aria-label="오늘의 한 그릇을 고르는 즐거움"
                className="font-heading text-[2.7rem] font-bold leading-[1.08] tracking-[-0.055em] text-[#2b1b16] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              >
                오늘의 한 그릇을
                <br />
                고르는 즐거움
              </h2>
            </div>
            <div className="border-l border-[#d8c8b5] pl-5 md:pl-8">
              <p className="max-w-lg text-sm font-semibold leading-7 text-[#746054] sm:text-base sm:leading-8">
                불향을 입힌 볶음우동부터 부드러운 크림우동, 든든한 철판 볶음밥까지.
                취향에 맞는 오늘의 메뉴를 천천히 골라보세요.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="scrollbar-hide flex overflow-x-auto border-y border-[#d8c8b5]">
            {currentBrand.categories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(index)}
                aria-pressed={activeCategory === index}
                className={cn(
                  'group relative shrink-0 px-4 py-4 text-left transition-colors sm:px-6 md:flex-1 md:px-4 md:text-center lg:px-7',
                  activeCategory === index
                    ? 'text-[#2b1b16]'
                    : 'text-[#8a7568] hover:text-[#2b1b16]'
                )}
              >
                <span className="block text-[9px] font-black tracking-[0.18em] text-[#9b5b46]/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 block whitespace-nowrap font-heading text-sm font-bold sm:text-base">
                  {category.name}
                </span>
                <span
                  className={cn(
                    'absolute inset-x-4 bottom-0 h-0.5 origin-left bg-[#9b5b46] transition-transform duration-300 sm:inset-x-6',
                    activeCategory === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  )}
                  aria-hidden="true"
                />
                {category.isNew && (
                  <span className="absolute right-1 top-2 text-[8px] font-black tracking-[0.08em] text-[#8f3528]">
                    NEW
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mb-6 mt-9 flex items-end justify-between gap-4 md:mb-8 md:mt-12">
            <div>
              <p className="text-[10px] font-black tracking-[0.24em] text-[#9b5b46]">
                MENU ITEMS
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-[-0.04em] text-[#2b1b16] md:text-3xl">
                {currentCategory.name}
              </h3>
            </div>
            <p className="border-b border-[#9b5b46]/45 pb-1 font-heading text-sm font-bold text-[#746054]">
              {String(currentCategory.items.length).padStart(2, '0')} dishes
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              {currentCategory.items.map((item, index) => (
                <motion.article
                  key={item.name}
                  className="group overflow-hidden border border-[#d8c8b5] bg-[#fffaf2] shadow-[0_14px_35px_rgba(74,48,35,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#9b5b46]/65 hover:shadow-[0_20px_48px_rgba(74,48,35,0.13)]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.035 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative aspect-square overflow-hidden bg-[#eee4d5]">
                    <Image
                      src={normalizeMenuImagePath(item.image)}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                      priority={index < 4}
                      quality={90}
                      unoptimized
                    />
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#2b1b16]/5"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex min-h-20 items-start gap-3 border-t border-[#e4d7c6] p-3 sm:min-h-24 sm:p-4 lg:p-5">
                    <span className="mt-0.5 text-[9px] font-black tracking-[0.12em] text-[#9b5b46] sm:text-[10px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="break-keep font-heading text-sm font-bold leading-[1.45] tracking-[-0.025em] text-[#2b1b16] sm:text-base">
                      {item.name}
                    </h4>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex items-center gap-4 border-t border-[#d8c8b5] pt-5 text-[9px] font-black tracking-[0.2em] text-[#9b5b46]/70 md:mt-20">
          <span>FRESHLY PREPARED</span>
          <span className="h-px flex-1 bg-[#d8c8b5]" aria-hidden="true" />
          <span>ENJOY YOUR MEAL</span>
        </div>
      </div>
    </section>
  );
}
