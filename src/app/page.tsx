'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Widgets
import { Header } from '@/widgets/header';
import { HeroSection } from '@/widgets/hero';
import { BrandIntroSection } from '@/widgets/brand-intro';
import { BlueOceanAdvantageSection } from '@/widgets/blue-ocean-advantage';
import { TrustedFranchiseSection } from '@/widgets/trusted-franchise';
import { SuccessionPlanningSection } from '@/widgets/succession-planning';
import { SuccessionPlanningSectionV2 } from '@/widgets/succession-planning-v2';
import { StartupProcessSection } from '@/widgets/startup-process';
import { MenuSection } from '@/widgets/menu';
import { ReviewsSection } from '@/widgets/reviews';
import { ContactFormSection } from '@/widgets/contact-form';
import { Footer } from '@/widgets/footer';

// Features
import { FloatingInquiry } from '@/features/inquiry';
import { OwnerRecruitmentModal } from '@/features/owner-recruitment-modal';
import { FranchiseCostModal } from '@/features/franchise-cost-modal';
import { AchievementModal } from '@/features/achievement-modal';

// Shared Config
import { SITE_ORIGIN, absoluteUrl } from '@/shared/config/site';

export default function Home() {
  const [showRecruitmentModal, setShowRecruitmentModal] = useState(false);
  const [showFranchiseCostModal, setShowFranchiseCostModal] = useState(false);
  const [showAchievementModal, setShowAchievementModal] = useState(false);

  useEffect(() => {
    // 페이지 로드 1초 후 가맹비용 모달 표시
    const costModalTimer = setTimeout(() => {
      const hideCostModal = localStorage.getItem('hideModal_franchise-cost');
      const now = new Date().getTime();

      if (!hideCostModal || parseInt(hideCostModal) < now) {
        setShowFranchiseCostModal(true);
      }
    }, 1000);

    // 페이지 로드 1.5초 후 성과 모달 표시
    const achievementModalTimer = setTimeout(() => {
      const hideAchievementModal = localStorage.getItem('hideModal_achievement');
      const now = new Date().getTime();

      if (!hideAchievementModal || parseInt(hideAchievementModal) < now) {
        setShowAchievementModal(true);
      }
    }, 1500);

    return () => {
      clearTimeout(costModalTimer);
      clearTimeout(achievementModalTimer);
    };
  }, []);

  // 창업 문의 섹션으로 스크롤 이동 + 모든 모달 닫기
  const handleNavigateToContact = () => {
    setShowRecruitmentModal(false);
    setShowFranchiseCostModal(false);
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
        <Header />
        <HeroSection />
        <BrandIntroSection />
        <BlueOceanAdvantageSection />
        {/* 기존 지그재그 레이아웃 */}
        {/* <SuccessionPlanningSection /> */}
        {/* 새로운 로드맵 레이아웃 (V2) */}
        <SuccessionPlanningSectionV2 />
        <TrustedFranchiseSection />
        <StartupProcessSection />
        <MenuSection />
        {/* <StorePresetSection /> */}
        <ReviewsSection />
        <ContactFormSection />
        <Footer />
        <FloatingInquiry />

        {/* 모달들 */}
        <FranchiseCostModal
          isOpen={showFranchiseCostModal}
          onClose={() => setShowFranchiseCostModal(false)}
          onNavigateToContact={handleNavigateToContact}
        />
        <AchievementModal
          isOpen={showAchievementModal}
          onClose={() => setShowAchievementModal(false)}
          onNavigateToContact={handleNavigateToContact}
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
