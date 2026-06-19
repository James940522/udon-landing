'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Widgets
import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero';
import { TextMarquee } from '@/widgets/text-marquee';
import { BrandIntroSection } from '@/widgets/brand-intro';
import { BlueOceanAdvantageSection } from '@/widgets/blue-ocean-advantage';
import { TrustedFranchiseSection } from '@/widgets/trusted-franchise';
import { RepeatOrderProofSection } from '@/widgets/repeat-order-proof';
import { SuccessionPlanningSection } from '@/widgets/succession-planning';
import { SuccessionPlanningSectionV2 } from '@/widgets/succession-planning-v2';
import { StartupProcessSection } from '@/widgets/startup-process';
import { StartupBenefitSection } from '@/widgets/startup-benefit';
import { TerritoryProtectionSection } from '@/widgets/territory-protection';
import { MenuSection } from '@/widgets/menu';
import { ReviewsSection } from '@/widgets/reviews';
import { ContactFormSection } from '@/widgets/contact-form';
import { Footer } from '@/widgets/footer';

// Features
import { FloatingInquiry } from '@/features/inquiry';
import { OwnerRecruitmentModal } from '@/features/owner-recruitment-modal';
import { AchievementModal } from '@/features/achievement-modal';
import { CustomCursorState } from '@/features/custom-cursor';

// Shared Config
import { SITE_ORIGIN, absoluteUrl } from '@/shared/config/site';

const marqueeSets = {
  brand: ['TODAY UDON', 'YAKI UDON BRAND', 'DELIVERY FIRST', 'WARM JAPANESE DINING'],
  operation: ['SMALL STORE', 'FAST COOKING', '1-2 PERSON OPERATION', 'LOW FIXED COST'],
  reorder: ['REAL ORDER DATA', 'REORDER FLOW', 'STABLE SALES', 'OWNER SUCCESS'],
  menu: ['SIGNATURE NOODLE', 'FRESH TOPPING', 'TAKEOUT READY', 'DELIVERY RECIPE'],
};

export default function Home() {
  const [showRecruitmentModal, setShowRecruitmentModal] = useState(false);
  const [showAchievementModal, setShowAchievementModal] = useState(false);

  useEffect(() => {
    const achievementModalTimer = setTimeout(() => {
      const hideAchievementModal = localStorage.getItem('hideModal_achievement');
      const now = new Date().getTime();

      setShowAchievementModal(!hideAchievementModal || parseInt(hideAchievementModal) < now);
    }, 1000);

    return () => clearTimeout(achievementModalTimer);
  }, []);

  // 창업 문의 섹션으로 스크롤 이동 + 모든 모달 닫기
  const handleNavigateToContact = () => {
    setShowRecruitmentModal(false);
    setShowAchievementModal(false);

    // 약간의 딜레이 후 스크롤
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // SEO: JSON-LD Structured Data (Google Search Console용)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '오늘은 볶음우동',
    legalName: '주식회사 오늘은에프앤비',
    alternateName: ['오늘은에프앤비', '오늘은 F&B', 'Today F&B', 'Today F and B'],
    url: SITE_ORIGIN,
    logo: absoluteUrl('/asset/logo/오늘은_볶음우동_문구.png'),
    brand: {
      '@type': 'Brand',
      name: '오늘은 볶음우동',
      alternateName: 'Today Udon Rice',
    },
    description:
      '오늘은에프앤비(Today F&B) 운영. 배달 중심 볶음우동 프랜차이즈. 오늘은 볶음우동 1~2인 운영, 소형 매장 최적화, 수익 구조 공개.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-9923-9502',
      contactType: '가맹 상담',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '1~2인 운영이 가능한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 가능합니다. 배달 중심 운영 동선과 간소화된 조리 프로세스로 1~2인 운영이 가능하도록 설계되었습니다. 소형 매장 최적화로 효율적인 운영이 가능합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '볶음우동 창업 비용은 어떻게 산정되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '창업 비용은 매장 규모, 입지, 인테리어 선택에 따라 달라집니다. 정확한 비용 산정과 수익 구조는 가맹 상담 시 개별적으로 안내해드립니다.',
        },
      },
      {
        '@type': 'Question',
        name: '가맹 상담은 어떻게 진행되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '홈페이지 창업 문의 또는 전화(010-9923-9502)로 1차 상담을 진행합니다. 이후 입지 분석, 수익 예상, 계약, 교육의 순서로 체계적인 창업 지원이 이루어집니다.',
        },
      },
    ],
  };

  return (
    <>
      {/* SEO: Structured Data (JSON-LD) */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen font-sans">
        <CustomCursorState />
        <Header />
        <HeroSection />
        {/* <TextMarquee
          items={marqueeSets.brand}
          variant="flame"
          speed={24}
          ariaLabel="오늘은 볶음우동 브랜드 키워드"
        /> */}
        <BrandIntroSection />
        <BlueOceanAdvantageSection />
        <TrustedFranchiseSection />
        {/* <TextMarquee
          items={marqueeSets.operation}
          variant="cream"
          direction="right"
          speed={30}
          ariaLabel="오늘은 볶음우동 운영 강점"
        /> */}
        {/* 기존 지그재그 레이아웃 */}
        {/* <SuccessionPlanningSection /> */}
        {/* 새로운 로드맵 레이아웃 (V2) */}
        <SuccessionPlanningSectionV2 />
        {/* <TextMarquee
          items={marqueeSets.operation}
          variant="flame"
          speed={30}
          ariaLabel="오늘은 볶음우동 운영 강점"
        /> */}
        <RepeatOrderProofSection />
        {/* <TextMarquee
          items={marqueeSets.reorder}
          variant="charcoal"
          direction="right"
          speed={26}
          ariaLabel="오늘은 볶음우동 재주문 데이터 키워드"
        /> */}
        <StartupBenefitSection />
        <TerritoryProtectionSection />
        {/* <TextMarquee
          items={marqueeSets.menu}
          variant="flame"
          speed={28}
          ariaLabel="오늘은 볶음우동 메뉴 운영 키워드"
        /> */}
        <MenuSection />
        {/* <StorePresetSection /> */}
        <StartupProcessSection />
        <ReviewsSection />
        {/* <TextMarquee
          items={marqueeSets.menu}
          variant="flame"
          direction="right"
          speed={28}
          ariaLabel="오늘은 볶음우동 메뉴 운영 키워드"
        /> */}
        <ContactFormSection />
        <Footer />
        <FloatingInquiry />

        {/* 모달들 */}
        <AchievementModal
          isOpen={showAchievementModal}
          onClose={() => setShowAchievementModal(false)}
        />
        <OwnerRecruitmentModal
          isOpen={showRecruitmentModal}
          onClose={() => setShowRecruitmentModal(false)}
          onNavigateToContact={handleNavigateToContact}
        />
      </main>
    </>
  );
}
