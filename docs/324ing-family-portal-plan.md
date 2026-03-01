# 324.ing Family Portal 기획서

## 1. 개요

**324.ing** 메인 도메인에 위치하는 패밀리 사이트 모음집.
서브도메인으로 운영 중인 각종 서비스/프로젝트를 한눈에 보여주는 크리에이티브 포털 페이지.

- **URL**: https://324.ing
- **성격**: 정적 랜딩 페이지 (Single Page)
- **타겟**: 방문자, 협업자, 포트폴리오 열람자

---

## 2. 현재 패밀리 사이트 목록

| 서브도메인 | 프로젝트명 | 설명 | 상태 |
|-----------|-----------|------|------|
| ing.324.ing | 사미사 프로젝트 (BIP) | AI 실시간 코딩 로그 사이트 | shipped |
| stock.324.ing | Stock 포트폴리오 | 한국/미국 ETF/주식 시세 대시보드 | shipped |
| (추가 예정) | 324-OS Logger | OpenClaw 세션 로그 시스템 | shipped |
| (추가 예정) | PO 기획 에이전트 | 시장조사 → 기획서 자동 생성 | dev |

> 향후 사이트가 추가될 때 카드만 추가하면 되는 구조로 설계

---

## 3. 페이지 구성

### 3-1. Hero 섹션
- **324.ing** 로고/타이포 (대형, 임팩트)
- 한 줄 태그라인: "1인 + AI가 만드는 서비스 모음집" 등
- 배경: 그라데이션 or 미니멀 애니메이션

### 3-2. 사이트 갤러리 (메인 콘텐츠)
- 각 서브도메인 사이트를 **비주얼 카드**로 표현
- 카드 구성:
  - 사이트 스크린샷 or 대표 이미지
  - 서브도메인 주소 (예: `ing.324.ing`)
  - 프로젝트명 + 한 줄 설명
  - 상태 뱃지 (운영중 / 개발중 / 준비중)
  - 클릭 시 해당 사이트로 이동
- 레이아웃: **벤토 그리드** (크기가 다른 카드들이 조합되는 형태)
  - 주요 사이트는 큰 카드, 서브 프로젝트는 작은 카드

### 3-3. Footer
- "Built by 사미사프로젝트" 크레딧
- GitHub 링크
- 연락처 (선택)

---

## 4. 디자인 방향

### 톤 & 무드
- **다크 베이스** + 포인트 컬러 (네온/그라데이션)
- 크리에이티브 스튜디오 느낌
- 각 카드에 hover 시 미세한 인터랙션 (scale, glow, tilt 등)

### 타이포그래피
- 메인 타이틀: 굵은 sans-serif (Pretendard 또는 Inter)
- 도메인 주소: 모노스페이스 계열로 코딩 감성 표현

### 반응형
- 데스크톱: 벤토 그리드 (2~3열)
- 태블릿: 2열
- 모바일: 1열 스택

---

## 5. 기술 스택

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 기존 BIP 프로젝트와 동일 스택 |
| 스타일링 | Tailwind CSS | 기존 프로젝트 일관성 |
| 애니메이션 | Framer Motion | 기존 사용 중, 카드 인터랙션에 적합 |
| 배포 | Vercel or Firebase Hosting | 324.ing 도메인 연결 |
| 데이터 | JSON 파일 (정적) | 사이트 목록이 자주 변경되지 않음 |

---

## 6. 사이트 데이터 구조

```typescript
interface FamilySite {
  id: string;
  subdomain: string;        // "ing.324.ing"
  name: string;             // "사미사 프로젝트"
  description: string;      // 한 줄 설명
  thumbnail?: string;       // 스크린샷/이미지 경로
  status: "live" | "dev" | "soon";
  tags?: string[];          // ["AI", "실시간", "코딩로그"]
  size: "lg" | "md" | "sm"; // 벤토 그리드 카드 크기
}
```

---

## 7. 사이트 목록 데이터 (초기)

```json
[
  {
    "id": "bip",
    "subdomain": "ing.324.ing",
    "name": "사미사 프로젝트",
    "description": "AI와 나누는 모든 대화를 실시간 공개",
    "status": "live",
    "tags": ["AI", "실시간", "코딩로그"],
    "size": "lg"
  },
  {
    "id": "stock",
    "subdomain": "stock.324.ing",
    "name": "Stock 포트폴리오",
    "description": "한국/미국 ETF/주식 실시간 시세",
    "status": "live",
    "tags": ["금융", "대시보드"],
    "size": "md"
  },
  {
    "id": "logger",
    "subdomain": "github.com/...",
    "name": "324-OS Logger",
    "description": "세션 로그 자동 업로드 시스템",
    "status": "live",
    "tags": ["인프라", "Python"],
    "size": "sm"
  },
  {
    "id": "planner",
    "subdomain": "(준비중)",
    "name": "PO 기획 에이전트",
    "description": "시장 조사 → 기획서 자동 생성",
    "status": "dev",
    "tags": ["AI", "자동화"],
    "size": "sm"
  }
]
```

---

## 8. 주요 인터랙션

| 요소 | 인터랙션 |
|------|---------|
| 카드 hover | scale(1.02) + subtle glow + shadow 증가 |
| 카드 클릭 | 해당 서브도메인으로 새 탭 이동 |
| 페이지 로드 | 카드가 순차적으로 fade-in (stagger) |
| 상태 뱃지 | live: 초록 pulse 애니메이션 |

---

## 9. 확장 계획

- 새 서브도메인 사이트 추가 시 JSON에 항목만 추가
- 향후 필요 시 Firestore 연동으로 동적 관리 가능
- OG 이미지 자동 생성 (Next.js OG Image)으로 공유 시 각 사이트 미리보기

---

## 10. 예상 작업량

| 단계 | 내용 | 예상 파일 수 |
|------|------|-------------|
| 1 | Next.js 프로젝트 초기화 + Tailwind 설정 | ~5 |
| 2 | Hero 섹션 구현 | 1~2 |
| 3 | 벤토 그리드 카드 컴포넌트 | 2~3 |
| 4 | 데이터 연결 + 반응형 | 1~2 |
| 5 | 배포 + 도메인 연결 | 설정 |

**총 파일**: 약 10개 내외의 심플한 프로젝트
