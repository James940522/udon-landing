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
      className="relative overflow-hidden bg-[#fff0cf] pb-16 text-[#4c270d] md:pb-24"
      aria-label="고객 리뷰"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 18%, rgba(179, 37, 20, 0.22), transparent 32%), radial-gradient(circle at 86% 12%, rgba(246, 190, 71, 0.32), transparent 34%), radial-gradient(circle at 88% 80%, rgba(80, 32, 7, 0.2), transparent 30%), linear-gradient(rgba(134, 76, 23, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(134, 76, 23, 0.12) 1px, transparent 1px)',
          backgroundSize: 'auto, auto, auto, 42px 42px, 42px 42px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 top-24 h-24 w-[48vw] -rotate-6 bg-[#f0b53f]/26"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10vw] top-32 h-28 w-[50vw] rotate-8 bg-[#b32614]/14"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-36 w-full bg-linear-to-t from-[#5a2408]/18 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute right-8 top-24 h-16 w-80 opacity-35 md:right-12 md:top-28"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #c8451d 25%, transparent 25%), linear-gradient(-45deg, #c8451d 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #c8451d 75%), linear-gradient(-45deg, transparent 75%, #c8451d 75%)',
          backgroundPosition: '0 0, 0 9px, 9px -9px, -9px 0',
          backgroundSize: '18px 18px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute left-12 top-56 h-28 w-72 rounded-[50%] border-[10px] border-[#e8a932]/18"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-24 right-14 h-36 w-80 rounded-[50%] border-[12px] border-[#8b3a14]/12"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <span className="absolute -left-2 -top-12 hidden text-8xl font-black uppercase tracking-[0.08em] text-[#5f2d0d]/5 md:block">
              Review
            </span>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#d8471d]">
              Real delivery review
            </p>
            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#5a310f] md:text-6xl">
              고객들이
              <br />
              선택한 볶음우동
            </h2>
          </div>
          <div className="max-w-md lg:ml-auto lg:pt-8">
            <p className="mb-3 text-sm font-black text-[#e2481d]">
              한 번 주문한 고객이 다시 찾는 맛
            </p>
            <p className="text-base font-bold leading-7 text-[#6b421d]">
              배달앱 평점과 실제 고객 리뷰로 증명된 오늘은 볶음우동. 따뜻한 우동 한 그릇의 만족감을
              화면 안에서도 또렷하게 보여줍니다.
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

      <div className="relative z-20 -mt-36 overflow-hidden pb-12 pt-20 sm:-mt-48 sm:pt-24 md:-mt-64 md:pt-28 lg:-mt-[23.5rem] lg:pt-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-24 bottom-0 bg-white/96"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 -top-2 z-10 h-36 bg-linear-to-b from-[#fff0cf]/0 via-[#fff8eb]/72 to-white/96"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white/95 to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white/95 to-transparent md:w-24" />
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
