'use client';

import Image from 'next/image';

const phoneScreens = [
  {
    src: '/new-asset/review/baemin.webp',
    alt: '오늘은 볶음우동 배달앱 매장 화면',
    label: '배달앱 평점 5점 만점!',
    width: 698,
    height: 1405,
  },
  {
    src: '/new-asset/review/coupang.webp',
    alt: '오늘은 볶음우동 쿠팡이츠 매장 화면',
    label: '지역 맛집 랭킹 1위!',
    width: 729,
    height: 1435,
  },
];

const reviewImages = [
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 001.jpeg',
    width: 1179,
    height: 1029,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 002.jpeg',
    width: 1179,
    height: 1205,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 003.jpeg',
    width: 1179,
    height: 1104,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 004.jpeg',
    width: 1179,
    height: 1197,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 005.jpeg',
    width: 1179,
    height: 1142,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 006.jpeg',
    width: 1179,
    height: 1329,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 007.jpeg',
    width: 1179,
    height: 1311,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 008.jpeg',
    width: 1179,
    height: 1452,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 009.jpeg',
    width: 1179,
    height: 1307,
  },
  {
    src: '/asset/review/KakaoTalk_Photo_2026-01-20-23-06-06 010.jpeg',
    width: 1179,
    height: 1297,
  },
];

function PhonePreview({
  src,
  alt,
  label,
  width,
  height,
  className,
  priority,
}: {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto flex w-full min-w-0 max-w-[186px] flex-col items-center sm:max-w-[390px] lg:max-w-[430px] ${className ?? ''}`}
    >
      <div className="mb-2 text-center sm:mb-4">
        <span className="inline-flex rounded-md bg-[#6b3a14] px-2.5 py-1.5 text-[0.68rem] font-extrabold leading-tight tracking-[-0.01em] text-[#ffd33f] shadow-[0_10px_24px_rgba(67,28,7,0.18)] sm:px-4 sm:py-2 sm:text-sm md:text-base">
          {label}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full select-none object-contain drop-shadow-[0_26px_42px_rgba(59,24,7,0.35)]"
        sizes="(max-width: 640px) calc((100vw - 38px) / 2), (max-width: 1024px) 38vw, 430px"
      />
    </div>
  );
}

export default function ReviewsSection() {
  const marqueeImages = [...reviewImages, ...reviewImages];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#1a0d06] text-[#f6e4bf]"
      aria-label="고객 리뷰"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(161, 63, 20, 0.36), transparent 42%), radial-gradient(circle at 14% 28%, rgba(213, 151, 58, 0.16), transparent 28%), linear-gradient(90deg, rgba(255, 231, 177, 0.05), transparent 12%, transparent 88%, rgba(255, 231, 177, 0.05)), repeating-linear-gradient(90deg, rgba(255, 218, 140, 0.06) 0 1px, transparent 1px 112px), repeating-linear-gradient(0deg, rgba(255, 222, 151, 0.035) 0 1px, transparent 1px 9px), linear-gradient(135deg, #120803 0%, #281207 46%, #4a2110 100%)',
          backgroundSize: 'auto, auto, auto, auto, auto, auto',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4a34a]/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-10 top-10 h-px bg-linear-to-r from-transparent via-[#f2d28a]/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-[6vw] top-24 bottom-64 w-px bg-linear-to-b from-transparent via-[#d4a34a]/34 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute right-[6vw] top-24 bottom-64 w-px bg-linear-to-b from-transparent via-[#d4a34a]/34 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute right-8 top-24 h-40 w-80 opacity-[0.13] md:right-16 md:top-28"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center bottom, transparent 58%, #f0c66e 60%, transparent 64%)',
          backgroundSize: '72px 34px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-16 top-36 h-48 w-48 rounded-full border border-[#d4a34a]/12"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-80 right-12 h-20 w-20 rotate-45 border border-[#b43a1c]/24 bg-[#7d2513]/12"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <span className="absolute -left-2 -top-12 hidden text-8xl font-black uppercase tracking-[0.08em] text-[#f5d99b]/10 md:block">
              Review
            </span>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#d8a84c]">
              Real customer review
            </p>
            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#fff0c8] drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)] md:text-6xl">
              고객들이
              <br />
              다시 찾는 볶음우동
            </h2>
          </div>
          <div className="max-w-md lg:ml-auto lg:pt-8">
            <p className="mb-3 text-sm font-black text-[#f06a2a]">
              한 그릇의 만족이 쌓인 후기
            </p>
            <p className="text-base font-bold leading-7 text-[#dfc79d]">
              묵직한 철판 향과 정갈한 우동 한 그릇. 실제 고객 리뷰로 오늘은 볶음우동의 만족감을
              확인해보세요.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 items-start justify-items-center gap-1.5 sm:gap-8 lg:min-h-[620px] lg:gap-16">
          {phoneScreens.map((screen, index) => (
            <PhonePreview
              key={screen.src}
              src={screen.src}
              alt={screen.alt}
              label={screen.label}
              width={screen.width}
              height={screen.height}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 -mt-36 overflow-hidden pt-20 sm:-mt-48 sm:pt-24 md:-mt-64 md:pt-28 lg:-mt-[23.5rem] lg:pt-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-24 bottom-0 bg-[#fffaf1]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 -top-2 z-10 h-36 bg-linear-to-b from-[#1a0d06]/0 via-[#2d1609]/34 to-[#fffaf1]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#fffaf1] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#fffaf1] to-transparent md:w-24" />
        <div
          className="relative z-20 flex w-max gap-4 px-4 will-change-transform sm:gap-5"
          style={{ animation: 'reviews-marquee-left 34s linear infinite' }}
        >
          {marqueeImages.map((review, index) => (
            <div
              key={`${review.src}-${index}`}
              className="relative flex h-[214px] w-auto shrink-0 overflow-hidden rounded-lg border border-[#e6b35b]/80 bg-linear-to-b from-white/92 via-white/70 to-white/42 shadow-[0_18px_42px_rgba(89,42,10,0.14)] backdrop-blur-[2px] sm:h-[246px] md:h-[282px]"
            >
              <Image
                src={review.src}
                alt=""
                width={review.width}
                height={review.height}
                className="h-full w-auto object-contain"
                sizes="(max-width: 640px) 260px, (max-width: 768px) 290px, 330px"
                quality={92}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
