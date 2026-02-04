# SEO 설정 가이드

> **오늘은 볶음우동** 프랜차이즈 랜딩 페이지 SEO 최적화 완료 문서

---

## 📋 SEO 설정 완료 내용

### 1️⃣ 글로벌 메타데이터 (`app/layout.tsx`)

#### 기본 메타데이터

- **Title**: `오늘은 볶음우동 | 볶음우동 창업 프랜차이즈`
- **Title Template**: `%s | 오늘은 볶음우동`
- **Description**: 오늘은에프앤비(Today F&B) 운영 볶음우동 프랜차이즈. 배달 중심 1~2인 운영, 소형 매장 최적화, 수익 구조 공개.

#### 타겟 키워드

```
볶음우동 창업, 오늘은 볶음우동, 오늘은에프앤비, 오늘은 F&B, Today F&B,
볶음우동 프랜차이즈, 배달 전문점 창업, 소자본 외식 창업,
1인 운영 음식점 창업, 볶음우동 창업 비용, 볶음우동 가맹 문의,
배달 볶음우동 창업, 소형 매장 창업
```

#### SEO 설정

- ✅ `metadataBase`: 환경변수 기반 동적 URL (`NEXT_PUBLIC_SITE_URL`)
- ✅ `canonical`: `/` (정규 URL)
- ✅ `robots`: Preview 환경은 `noindex`, 프로덕션은 `index, follow`
- ✅ `themeColor`: `#FFD700` (브랜드 골드)
- ✅ Favicon 전체 세트 (16x16, 32x32, 192x192, 512x512, Apple Touch Icon)

#### Open Graph & Twitter Card

- ✅ OG Type: `website`
- ✅ OG Locale: `ko_KR`
- ✅ OG Image: `https://todayudon.com/og.png` (1200x630px)
- ✅ Twitter Card: `summary_large_image`

#### 검색엔진 인증

- ✅ Google Site Verification: 환경변수 `GOOGLE_SITE_VERIFICATION`
- ✅ Naver Site Verification: 환경변수 `NAVER_SITE_VERIFICATION`

---

### 2️⃣ 페이지 내 SEO

#### H1 태그 (HeroSection)

```html
<h1 class="sr-only">볶음우동 프랜차이즈 창업 | 오늘은에프앤비(Today F&B) 오늘은 볶음우동</h1>
```

- 검색엔진용으로 명확한 H1 제공
- 시각적으로는 숨김 처리 (`sr-only`)

#### 섹션별 H2 태그

1. **Hero Section**: 볶음우동 프랜차이즈 창업 (H1)
2. **Brand Intro**: 오늘은 볶음우동 (H2)
3. **Succession Planning**: 승계 플래닝 (H2)
4. **Trusted Franchise**: 신뢰할 수 있는 프랜차이즈 선택하시겠습니까? (H2)
5. **Startup Process**: 가맹절차 (H2)
6. **Menu**: 메뉴 소개 (H2)
7. **Reviews**: 고객 리뷰 (H2)
8. **Contact**: 창업 문의 (H2)

#### 접근성 개선

- ✅ 장식용 배경 이미지: `alt=""` + `aria-hidden="true"`
- ✅ 반복되는 시각적 요소: `aria-hidden="true"`
- ✅ 의미 있는 이미지: 구체적인 alt 텍스트 제공

---

### 3️⃣ 구조화된 데이터 (JSON-LD)

#### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "오늘은 볶음우동",
  "legalName": "주식회사 오늘은에프앤비",
  "alternateName": ["오늘은에프앤비", "오늘은 F&B", "Today F&B"],
  "url": "https://todayudon.com",
  "logo": "https://todayudon.com/asset/logo/오늘은_볶음우동_문구.png",
  "description": "오늘은에프앤비(Today F&B) 운영. 배달 중심 볶음우동 프랜차이즈.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+82-10-9923-9502",
    "contactType": "가맹 상담",
    "areaServed": "KR",
    "availableLanguage": "Korean"
  }
}
```

#### FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "1~2인 운영이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 가능합니다. 배달 중심 운영 동선과 간소화된 조리 프로세스로 1~2인 운영이 가능하도록 설계되었습니다."
      }
    },
    {
      "@type": "Question",
      "name": "볶음우동 창업 비용은 어떻게 산정되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "창업 비용은 매장 규모, 입지, 인테리어 선택에 따라 달라집니다. 정확한 비용 산정과 수익 구조는 가맹 상담 시 개별적으로 안내해드립니다."
      }
    },
    {
      "@type": "Question",
      "name": "가맹 상담은 어떻게 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "홈페이지 창업 문의 또는 전화(010-9923-9502)로 1차 상담을 진행합니다. 이후 입지 분석, 수익 예상, 계약, 교육의 순서로 체계적인 창업 지원이 이루어집니다."
      }
    }
  ]
}
```

---

### 4️⃣ Sitemap & Robots

#### Sitemap (`app/sitemap.ts`)

- URL: `https://todayudon.com/sitemap.xml`
- 변경 빈도: `weekly`
- 우선순위: `1.0`
- 마지막 수정: 동적 생성 (현재 날짜)

#### Robots.txt (`app/robots.ts`)

- **프로덕션**: `User-agent: * / Allow: /`
- **Preview 환경**: `User-agent: * / Disallow: /`
- Sitemap: `https://todayudon.com/sitemap.xml`
- Host: `https://todayudon.com`

---

## 🔧 필수 환경 변수

`.env.local` 파일에 다음 환경 변수를 설정하세요:

```bash
# 사이트 기본 URL (필수)
NEXT_PUBLIC_SITE_URL=https://todayudon.com

# Google Search Console 인증 (선택)
GOOGLE_SITE_VERIFICATION=nPY2HRr-Df2G-TBHGl48dm5CCAkH_TgHKQ6p728TmDE

# Naver 웹마스터 도구 인증 (선택)
NAVER_SITE_VERIFICATION=0bec18c43879c43633a343c8ff44c33615d52f5d
```

---

## 🚀 배포 후 확인사항

### 1. 기본 SEO 점검

#### URL 접근 확인

- [ ] `https://todayudon.com` 접속
- [ ] `https://todayudon.com/favicon.ico` 접근
- [ ] `https://todayudon.com/robots.txt` 생성 확인
- [ ] `https://todayudon.com/sitemap.xml` 생성 확인

#### 메타 태그 확인

- [ ] `view-source:https://todayudon.com`에서 메타 태그 확인
- [ ] Title, Description 정확히 표시되는지 확인
- [ ] Open Graph 태그 확인
- [ ] JSON-LD 스키마 확인

### 2. 검색엔진 등록

#### Google Search Console

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 사이트 추가: `https://todayudon.com`
3. 소유권 확인: HTML 태그 방식 (환경변수에 코드 추가됨)
4. Sitemap 제출: `https://todayudon.com/sitemap.xml`
5. URL 검사 도구로 크롤링 요청

#### Naver Search Advisor

1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속
2. 사이트 추가: `https://todayudon.com`
3. 소유권 확인: HTML 태그 방식 (환경변수에 코드 추가됨)
4. 사이트맵 제출: `https://todayudon.com/sitemap.xml`
5. 수집 요청

### 3. Open Graph 미리보기 테스트

#### 카카오톡

- [카카오 개발자 도구](https://developers.kakao.com/tool/debugger/sharing) 접속
- URL 입력 후 미리보기 확인
- 이미지, 제목, 설명 정확한지 확인

#### Facebook

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 접속
- URL 입력 후 "Scrape Again" 클릭
- OG 태그 정상 작동 확인

#### Twitter/X

- [Twitter Card Validator](https://cards-dev.twitter.com/validator) 접속
- URL 입력 후 미리보기 확인

### 4. 구조화된 데이터 검증

#### Google Rich Results Test

- [Rich Results Test](https://search.google.com/test/rich-results) 접속
- URL 입력: `https://todayudon.com`
- Organization, FAQPage 스키마 유효성 확인

#### Schema Markup Validator

- [Schema.org Validator](https://validator.schema.org/) 접속
- URL 입력 후 검증
- 에러 없는지 확인

---

## 📊 SEO 성과 모니터링

### 주요 지표

- **검색 노출**: Google Search Console "실적" 탭
- **클릭률(CTR)**: 검색 결과 클릭 / 노출
- **검색 순위**: 주요 키워드 순위 추적
  - 볶음우동 창업
  - 볶음우동 프랜차이즈
  - 오늘은 볶음우동
  - 배달 창업
  - 소자본 외식 창업

### 권장 도구

- **Google Search Console**: 검색 성과 분석
- **Google Analytics 4**: 트래픽 분석
- **Naver Analytics**: 네이버 유입 분석
- **Ahrefs / SEMrush**: 키워드 순위 추적

---

## 🎨 OG 이미지 관리

### 현재 OG 이미지

- 경로: `/public/og.png`
- 크기: 1200x630px
- 형식: PNG

### OG 이미지 교체 방법

1. 새 이미지 준비 (1200x630px, PNG/JPG)
2. `/public/og.png` 파일 교체
3. 배포 후 SNS 미리보기 테스트
4. 캐시 초기화가 필요하면:
   - 카카오: 디버거에서 "캐시 초기화"
   - Facebook: "Scrape Again"

### 디자인 가이드라인

- **브랜드 컬러**: 웜 그레이, 다크 브라운, 골드 계열
- **텍스트**: 최소화 (브랜드명 + 핵심 메시지)
- **로고 위치**: 중앙 또는 좌상단
- **모바일 고려**: 작은 화면에서도 가독성 확보

---

## ⚠️ 주의사항

### 과장 광고 금지

- ❌ "대한민국 1등", "최고", "최대" 등 검증 불가능한 표현 사용 금지
- ✅ 실제 데이터 기반 사실만 기재
- ✅ "투명한 수익 공개", "체계적인 교육" 등 구체적 표현 사용

### 구조화된 데이터 품질

- **정확성**: 허위 정보 절대 금지 (검색 페널티)
- **업데이트**: 정보 변경 시 즉시 반영
- **검증**: 배포 전 Rich Results Test 필수

### Robots.txt 실수 방지

- ❌ 프로덕션에서 `Disallow: /` 설정 금지
- ✅ Preview 환경만 `noindex, nofollow`
- ✅ 배포 전 `robots.txt` 확인 필수

---

## 📚 참고 자료

### 공식 문서

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/docs/documents.html)

### SEO 검증 도구

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🤝 문의

SEO 관련 문의사항이 있으시면 개발팀에 문의하세요.

**Last Updated**: 2026-02-03
