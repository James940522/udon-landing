# Blue Ocean Legacy Dark Restore Design

## Goal

`현시점 배달업계 최대의 블루오션` 섹션을 웜 에디토리얼 개편 전의 어두운 캠페인 톤으로
복원한다.

## Source of Truth

- 기준 버전: `72d5d48^`
- 대상 파일: `src/widgets/blue-ocean-advantage/ui/BlueOceanAdvantageSection.tsx`
- 현재 유효한 배경 이미지 경로 `/asset/bg-1/sec3-bg.png`는 그대로 사용한다.

## Scope

- `bg-stone-900`, 검은 오버레이와 어두운 그라데이션을 복원한다.
- 흰색 본문, 레드 경고색, 앰버 강조색을 복원한다.
- 문제 카드, 혜택 카드, 인용구, 최종 메시지의 어두운 스타일을 모두 복원한다.
- 기존 문구, 데이터 배열, 반응형 3열 구조, Framer Motion 애니메이션은 유지한다.
- 다른 섹션은 변경하지 않는다.

## Verification

- 어두운 스타일 토큰이 존재하고 웜 에디토리얼 토큰이 제거됐는지 계약 테스트로 확인한다.
- 대상 컴포넌트와 계약 테스트에 ESLint를 실행한다.
- 전체 Next.js 프로덕션 빌드를 실행한다.
