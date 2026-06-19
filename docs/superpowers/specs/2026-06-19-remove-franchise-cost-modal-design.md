# FranchiseCostModal 제거 설계

## 목표

홈 진입 시 `FranchiseCostModal`을 먼저 보여주고 닫은 뒤 가맹점 리스트인
`AchievementModal`을 보여주는 연속 모달 흐름을 제거한다.

## 변경 범위

- `FranchiseCostModal` 컴포넌트와 feature export를 삭제한다.
- 홈 페이지에서 비용 모달 import, 렌더링, 저장값 조회를 제거한다.
- 프로모션 모달 큐 대신 `AchievementModal`의 표시 여부만 관리한다.
- `AchievementModal`은 기존과 동일하게 홈 진입 1초 후 표시한다.
- `hideModal_achievement` 만료 여부는 계속 확인하여 사용자의 숨김 선택을 유지한다.
- 문의 섹션 이동 시 열려 있는 `AchievementModal`도 닫는다.

## 데이터 흐름

1. 홈이 마운트되면 1초 타이머를 시작한다.
2. `hideModal_achievement` 값과 현재 시간을 비교한다.
3. 숨김 기간이 끝났거나 저장값이 없으면 `AchievementModal`을 연다.
4. 모달을 닫으면 표시 상태를 `false`로 바꾼다.

## 삭제 대상

- `src/features/franchise-cost-modal/ui/FranchiseCostModal.tsx`
- `src/features/franchise-cost-modal/index.ts`
- `src/app/page.tsx`의 `FranchiseCostModal` 관련 코드와 프로모션 큐

## 검증

- 정적 검증 스크립트에서 비용 모달 참조와 큐가 제거되었는지 확인한다.
- 홈 페이지가 `AchievementModal`만 렌더링하고 관련 숨김 키만 읽는지 확인한다.
- ESLint와 프로덕션 빌드를 실행한다.
