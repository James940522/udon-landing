'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// ========================================
// 이미지 자산 배열 (여기서 경로 변경 가능)
// ========================================
const MENU_IMAGES = [
  {
    src: '/asset/menu/오늘은_볶음우동/최신 메뉴모음컷/(최신)메뉴모음컷1.jpg',
    alt: '오늘은 볶음우동 메인 메뉴 1',
  },
  {
    src: '/asset/menu/오늘은_볶음우동/최신 메뉴모음컷/(최신)메뉴모음컷2.jpg',
    alt: '오늘은 볶음우동 메인 메뉴 2',
  },
  {
    src: '/asset/menu/오늘은_볶음우동/최신 메뉴모음컷/(최신)메뉴모음컷3.jpg',
    alt: '오늘은 볶음우동 메인 메뉴 3',
  },
  {
    src: '/asset/menu/오늘은_볶음우동/최신 메뉴모음컷/(최신)메뉴모음컷4.jpg',
    alt: '오늘은 볶음우동 메인 메뉴 4',
  },
  {
    src: '/asset/menu/오늘은_볶음우동/최신 메뉴모음컷/(최신)메뉴모음컷5.jpg',
    alt: '오늘은 볶음우동 메인 메뉴 5',
  },
];

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 자동 슬라이드 (3초마다 이미지 변경)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % MENU_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/bg-1/sec1-bg.jpg"
          alt="배경"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* 오버레이 (가독성 향상) */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* SEO: H1 타이틀 (검색엔진용, 시각적으로는 숨김) */}
      <h1 className="sr-only">
        볶음우동 프랜차이즈 창업 | 재영에프앤비(Jaeyoung F&B) 오늘은 볶음우동
      </h1>

      {/* 메인 컨테이너 */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 ">
        {/* 2열 그리드: 좌측(텍스트) + 우측(이미지) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ">
          {/* ========================================
              좌측: 타이포 / 카피 / CTA
          ======================================== */}
          <motion.div
            className="space-y-4 md:space-y-5 order-2 lg:order-1 flex flex-col items-center text-center "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 하이라이트 뱃지 */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center ">
              <span
                className="inline-block px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full border backdrop-blur-sm"
                style={{
                  color: '#F4EFE8',
                  borderColor: '#C9A24D',
                  backgroundColor: 'rgba(201, 162, 77, 0.2)',
                }}
              >
                단일 시그니처
              </span>
              <span
                className="inline-block px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full border backdrop-blur-sm"
                style={{
                  color: '#F4EFE8',
                  borderColor: '#C9A24D',
                  backgroundColor: 'rgba(201, 162, 77, 0.2)',
                }}
              >
                조리 표준화
              </span>
              <span
                className="inline-block px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full border backdrop-blur-sm"
                style={{
                  color: '#F4EFE8',
                  borderColor: '#C9A24D',
                  backgroundColor: 'rgba(201, 162, 77, 0.2)',
                }}
              >
                배달 최적화
              </span>
            </div>

            {/* 메인 로고 이미지 */}
            <div className="space-y-2 md:space-y-3 w-full flex flex-col items-center">
              <motion.div
                className="relative w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/asset/logo/오늘은_볶음우동_문구.png"
                  alt="오늘은 볶음우동"
                  width={500}
                  height={200}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                  quality={90}
                />
              </motion.div>

              {/* 서브 카피 */}
              <div className="space-y-1.5">
                <p
                  className="text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  볶음우동 하나로 장사되는 구조
                </p>
                <p
                  className="text-base md:text-lg drop-shadow-md"
                  style={{ color: '#F4EFE8', fontFamily: 'var(--font-body)' }}
                >
                  메뉴 고민 없이, 회전율에 집중합니다
                </p>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 w-full justify-center">
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg text-base md:text-lg font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                style={{
                  backgroundColor: '#C9A24D',
                  color: '#1A1A1A',
                  fontFamily: 'var(--font-heading)',
                }}
                whileHover={{ scale: 1.02, backgroundColor: '#D4B45F' }}
                whileTap={{ scale: 0.98 }}
              >
                가맹 문의하기
              </motion.a>
              <motion.a
                href="#menu"
                className="px-8 py-4 rounded-lg text-base md:text-lg font-bold text-center transition-all duration-300 border-2 shadow-md hover:shadow-lg backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(244, 239, 232, 0.15)',
                  color: '#FFFFFF',
                  borderColor: '#F4EFE8',
                  fontFamily: 'var(--font-heading)',
                }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(244, 239, 232, 0.25)' }}
                whileTap={{ scale: 0.98 }}
              >
                메뉴 보기
              </motion.a>
            </div>
          </motion.div>

          {/* ========================================
              우측: 메인 이미지 + 썸네일 스트립
          ======================================== */}
          <motion.div
            className="space-y-4 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 메인 이미지 (액자 스타일) */}
            <motion.div
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2"
              style={{ borderColor: 'rgba(201, 162, 77, 0.3)' }}
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={MENU_IMAGES[selectedIndex].src}
                alt={MENU_IMAGES[selectedIndex].alt}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </motion.div>

            {/* 썸네일 스트립 (Proof Strip) */}
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {MENU_IMAGES.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
                  style={{
                    opacity: selectedIndex === index ? 1 : 0.5,
                    borderColor: selectedIndex === index ? '#C9A24D' : 'rgba(244, 239, 232, 0.3)',
                    transform: selectedIndex === index ? 'scale(1.05)' : 'scale(0.95)',
                    boxShadow:
                      selectedIndex === index ? '0 0 20px rgba(201, 162, 77, 0.5)' : 'none',
                  }}
                  aria-label={`${index + 1}번 메뉴 이미지 보기`}
                  onMouseEnter={(e) => {
                    if (selectedIndex !== index) {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedIndex !== index) {
                      e.currentTarget.style.opacity = '0.5';
                      e.currentTarget.style.transform = 'scale(0.95)';
                    }
                  }}
                >
                  <Image
                    src={image.src}
                    alt={`썸네일 ${index + 1}`}
                    fill
                    className="object-cover"
                    quality={60}
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </button>
              ))}
            </div>

            {/* 이미지 인디케이터 텍스트 (optional) */}
            <p
              className="text-sm text-center drop-shadow-md"
              style={{ color: '#F4EFE8', fontFamily: 'var(--font-body)' }}
            >
              {selectedIndex + 1} / {MENU_IMAGES.length}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
