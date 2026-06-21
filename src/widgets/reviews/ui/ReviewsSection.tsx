'use client';

import Image from 'next/image';

const phoneScreens = [
  {
    src: '/new-asset/review/baemin-updated.webp',
    alt: '오늘은 볶음우동 배달앱 매장 화면',
    label: '배달앱 평점 5점 만점!',
    width: 698,
    height: 1438,
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
        <span className="inline-flex rounded-md border border-[#fffaf2]/25 bg-[#9b5b46] px-2.5 py-1.5 text-[0.68rem] font-extrabold leading-tight tracking-[-0.01em] text-[#fffaf2] shadow-[0_10px_24px_rgba(43,27,22,0.2)] sm:px-4 sm:py-2 sm:text-sm md:text-base">
          {label}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full translate-y-5 select-none object-contain drop-shadow-[0_26px_42px_rgba(59,24,7,0.35)] sm:translate-y-10 md:translate-y-16 lg:translate-y-20"
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
      className="relative overflow-hidden bg-[#f0e9df] text-[#2b1b16]"
      aria-label="고객 리뷰"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffaf2]/92 via-[#f0e9df]/94 to-[#e5d5c1]/96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.16) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#9b5b46]/45 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <span className="absolute -left-2 -top-12 hidden text-8xl font-black uppercase tracking-[0.08em] text-[#9b5b46]/8 md:block">
              Review
            </span>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#9b5b46]">
              Real customer review
            </p>
            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#2b1b16] md:text-6xl">
              고객들이
              <br />
              <span className="text-[#8f3528]">다시 찾는 볶음우동</span>
            </h2>
          </div>
          <div className="max-w-md lg:ml-auto lg:pt-8">
            <p className="mb-3 text-sm font-black text-[#8f3528]">
              한 그릇의 만족이 쌓인 후기
            </p>
            <p className="text-base font-bold leading-7 text-[#746054]">
              묵직한 철판 향과 정갈한 우동 한 그릇. 실제 고객 리뷰로 오늘은 볶음우동의 만족감을
              확인해보세요.
            </p>
          </div>
        </div>

        <div
          data-review-phone-stage
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#9b5b46]/45 bg-[#2b1b16]/96 px-2 pt-8 shadow-[0_30px_80px_rgba(43,27,22,0.28)] sm:px-8 sm:pt-12 lg:min-h-[620px] lg:px-12"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 24% 18%, rgba(155,91,70,0.3), transparent 30%), radial-gradient(circle at 78% 24%, rgba(201,162,77,0.16), transparent 28%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 grid grid-cols-2 items-start justify-items-center gap-1.5 sm:gap-8 lg:gap-16">
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
      </div>

      <div className="relative z-20 -mt-12 overflow-hidden pt-20 sm:-mt-56 sm:pt-32 md:-mt-72 md:pt-40 lg:-mt-[26rem] lg:pt-44">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(255, 250, 241, 0) 0%, rgba(255, 250, 241, 0.88) 18%, #fff8eb 32%, #fff8eb 100%)',
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#fff8eb] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#fff8eb] to-transparent md:w-24" />
        <div
          className="relative z-20 flex w-max gap-4 px-4 will-change-transform sm:gap-5"
          style={{ animation: 'reviews-marquee-left 34s linear infinite' }}
        >
          {marqueeImages.map((review, index) => (
            <div
              key={`${review.src}-${index}`}
              className="relative flex h-[214px] w-auto shrink-0 overflow-hidden rounded-lg border border-[#d8c8b5]/90 bg-[#fffaf2] shadow-[0_18px_42px_rgba(73,50,41,0.14)] sm:h-[246px] md:h-[282px]"
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
