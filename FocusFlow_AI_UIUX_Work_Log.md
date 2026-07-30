---
title: "FocusFlow AI UI/UX 디자인 시안 제작 작업 로그"
project: "AI Native Basic - Project A"
service: "개인 맞춤형 집중 루틴 앱"
status: "completed"
date: "2026-07-25"
final_image_count: 3
image_format: "PNG"
image_resolution: "941x1672"
bonus_completed: true
figma_url: "https://www.figma.com/design/k848SHx87aOxQwdo1xO40W"
---

# FocusFlow AI UI/UX 디자인 시안 제작 작업 로그

## 1. 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 프로젝트명 | FocusFlow |
| 서비스 유형 | 개인 맞춤형 집중 루틴 모바일 앱 |
| 주요 사용자 | 집중 계획과 실천에 어려움을 겪는 학생 및 직장인 |
| 문제 정의 | 사용자가 무엇부터 얼마나 집중해야 할지 결정하기 어렵고, 정한 계획을 지속하기도 어렵다. |
| 해결 방법 | 사용자가 입력한 목표와 가용 시간에 맞는 집중 루틴을 추천하고 타이머로 실행을 돕는다. |
| 핵심 기능 | 목표 설정, 집중 가능 시간 선택, 맞춤 루틴 추천, 집중 타이머 |
| 화면 형식 | 모바일 세로형, 약 9:16 |
| 최종 산출물 | UI 이미지 3장, Figma 프로토타입, 본 작업 로그 |

### 1.1 기획 의도

FocusFlow는 공부나 업무를 시작하기 전에 계획을 세우는 부담을 줄이고, 사용자가 바로 집중을 시작하도록 돕는 앱이다. 사용자는 오늘의 목표와 집중할 수 있는 시간을 입력하고, 추천된 루틴을 선택한 뒤 타이머를 실행한다.

### 1.2 핵심 사용자 흐름

1. 오늘의 목표와 집중 가능 시간을 입력한다.
2. 추천된 집중 루틴 가운데 하나를 선택한다.
3. 선택한 루틴을 타이머로 실행한다.
4. 필요하면 집중을 일시정지하거나 종료한다.

### 1.3 화면 구성

| 화면 | 역할 | 핵심 행동 |
|---|---|---|
| `01_Goal_Setup` | 목표와 집중 가능 시간을 입력한다. | 맞춤 루틴 만들기 |
| `02_Routine_Select` | 세 가지 집중 루틴을 비교하고 선택한다. | 이 루틴으로 시작 |
| `03_Focus_Timer` | 집중 시간, 세트, 다음 휴식을 확인한다. | 일시정지 / 집중 종료하기 |

## 2. 디자인 방향

| 항목 | 설정 | 적용 원칙 |
|---|---|---|
| 스타일 | 차분한 미니멀 UI | 목표·루틴·타이머를 우선하고 장식을 최소화한다. |
| 주색상 | Indigo `#5B5FEF` | 주요 버튼, 선택 상태, 타이머 진행에 사용한다. |
| 보조색상 | Mint `#9EE6CF` | 추천, 휴식, 보조 상태에 사용한다. |
| 배경 | Soft Gray `#F7F8FC` | 화면의 시각적 부담을 줄인다. |
| 카드 | White, 둥근 모서리 | 정보를 기능 단위로 구분한다. |
| 본문색 | Deep Navy | 가독성과 명확한 위계를 확보한다. |
| 타이포그래피 | 현대적인 한글 산세리프 | 제목, 정보, 행동의 위계를 분명히 한다. |
| 레이아웃 | 넓은 여백과 단일 주요 행동 | 사용자가 다음 행동을 빠르게 판단하도록 한다. |

## 3. 사용한 도구

| 도구 | 사용 목적 |
|---|---|
| ChatGPT/Codex | 아이디어 구체화, 사용자 흐름 설계, 프롬프트 작성·개선, 결과 검토, 작업 로그 작성 |
| OpenAI 이미지 생성 도구 | 초안 비교 시안과 최종 UI 이미지 생성 |
| Figma | 최종 이미지 배치, 화면 프레임 구성, Hotspot 기반 프로토타입 연결 |

외부 디자인 캡처나 출처 불명의 레퍼런스는 사용하지 않았다. 생성된 초안을 후속 화면의 스타일 레퍼런스로 사용해 화면 간 일관성을 유지했다.

## 4. 단계별 AI 협업 과정

| 단계 | 수행 내용 | 결과 |
|---:|---|---|
| 1 | 서비스 주제 후보를 검토하고 개인 맞춤형 집중 루틴 앱을 선택했다. | 주제: FocusFlow |
| 2 | 사용자와 문제 상황을 정의했다. | 학생·직장인의 계획 및 집중 지속 문제 |
| 3 | 해결 방법과 핵심 기능을 정리했다. | 맞춤 루틴 추천과 타이머 |
| 4 | 핵심 사용자 흐름을 3단계로 구성했다. | 목표 설정 → 루틴 선택 → 집중 타이머 |
| 5 | 공통 색상, 카드, 버튼, 글꼴, 여백 규칙을 정의했다. | 일관된 디자인 시스템 |
| 6 | 초안 프롬프트를 작성하고 세 화면 비교 시안을 생성했다. | `00_draft_board.png` |
| 7 | 초안의 문제를 분석하고 화면별 최종 프롬프트로 개선했다. | 독립된 최종 UI 3장 |
| 8 | 최종 이미지를 원본 해상도로 품질검사했다. | 결함 없음, 추가 후가공 불필요 |
| 9 | Figma에 세 화면을 배치하고 클릭 흐름을 연결했다. | 실행 가능한 프로토타입 |
| 10 | 기획부터 최종 결과까지의 작업 과정을 문서화했다. | 본 마크다운 작업 로그 |

## 5. 최초 프롬프트와 초안

### 5.1 최초 프롬프트

```text
Create one polished horizontal presentation board containing exactly three
separate portrait mobile UI screens for “FocusFlow”.

Screen 1: goal setup with “오늘은 무엇에 집중할까요?”, goal input
“영어 시험 공부하기”, time chips 25분, 50분, 90분, quick tags, and
“맞춤 루틴 만들기” button.

Screen 2: routine selection with three cards: 균형 집중, 빠른 몰입,
깊은 집중. Highlight 균형 집중 as recommended and add
“이 루틴으로 시작” button.

Screen 3: active timer with “집중 중”, “24:36”, “세트 1 / 2”,
“다음 휴식까지 24분”, “일시정지”, and “집중 종료하기”.

Use a calm minimal mobile productivity UI, soft gray background,
white rounded cards, indigo #5B5FEF primary color, subtle mint accents,
clean Korean typography, consistent rounded line icons, and a 9:16 layout.
No device mockup, perspective view, random letters, duplicated buttons,
decorative illustrations, dark theme, or watermark.
```

### 5.2 최초 생성 결과

![FocusFlow 최초 초안의 세 화면 비교 이미지](./00_draft_board.png)

### 5.3 초안에서 발견한 문제

- 화면 1에서는 `50분`을 선택했지만 화면 2의 추천 루틴은 `총 60분`으로 표시되어 정보가 일치하지 않았다.
- 화면 3에 요청하지 않은 메뉴 아이콘이 추가됐다.
- 세 화면이 한 장에 배치되어 개별 제출 이미지로 사용할 수 없었다.
- 주요 행동과 보조 행동의 시각적 위계가 충분히 분명하지 않았다.
- 화면별 요소를 더 정확하게 통제할 필요가 있었다.

## 6. 프롬프트 개선 과정

| 개선 항목 | 초안 | 수정 및 최종 |
|---|---|---|
| 시간 설정 | 50분 선택 / 총 60분 추천 | 60분 선택 / 총 60분 추천으로 통일 |
| 이미지 구성 | 3개 화면이 한 이미지에 배치 | 독립된 9:16 PNG 3장 생성 |
| 불필요 요소 | 메뉴·설정 아이콘 추가 가능 | 요청하지 않은 아이콘을 명시적으로 제외 |
| 화면 일관성 | 공통 색상만 지정 | 이전 결과의 타이포그래피, 여백, 카드, 버튼을 디자인 레퍼런스로 지정 |
| 텍스트 정확도 | 일반적인 화면 설명 중심 | 모든 한글 라벨을 그대로 렌더링하도록 요청 |
| 행동 위계 | 종료 행동도 강하게 표시될 수 있음 | 종료는 낮은 강조도의 텍스트 행동으로 지정 |

### 6.1 수정 프롬프트 — 중간 단계

```text
Create three separate standalone 9:16 mobile UI screenshots for “FocusFlow”.
Use the same calm minimal style in every screen: soft gray #F7F8FC background,
white rounded cards, indigo #5B5FEF primary actions, mint #9EE6CF accents,
deep navy text, clean Korean sans-serif typography, and generous spacing.

Screen 1: show the goal “영어 시험 공부하기” and time chips
“25분”, “60분”, “90분”. Show “60분” selected.

Screen 2: show three routine cards. Select “균형 집중” with
“25분 집중 · 5분 휴식 · 2세트” and “총 60분”.

Screen 3: make the “24:36” circular focus timer dominant.
Use a primary “일시정지” button and a low-emphasis “집중 종료하기” action.

Render all supplied Korean labels verbatim. Generate each screen as an
independent image. Do not add menu icons, settings icons, bottom navigation,
device frames, extra copy, random letters, cropping, or watermarks.
```

#### 중간 수정 결과

- 선택 시간을 `60분`으로 바꿔 추천 루틴의 `총 60분`과 일치시켰다.
- 독립된 화면 생성과 불필요한 아이콘 제외 조건이 반영됐다.
- 다만 화면별 문구와 선택 상태를 더 정밀하게 통제하기 위해 최종 단계에서는 프롬프트를 화면별로 분리했다.

### 6.2 수정한 이유

- 입력한 시간과 추천 결과가 다르면 개인 맞춤형 서비스의 신뢰도가 낮아진다.
- 과제 제출에 사용할 수 있도록 각 화면을 독립된 이미지로 확보해야 한다.
- 불필요한 아이콘은 사용자의 핵심 행동을 흐릴 수 있다.
- 동일한 스타일 기준을 반복해서 명시하면 화면별 색상, 카드, 버튼, 여백 차이를 줄일 수 있다.
- 주요 행동은 채워진 인디고 버튼, 종료 행동은 낮은 강조도의 텍스트로 구분해야 사용 흐름이 명확하다.

## 7. 최종 프롬프트와 결과

### 7.1 화면 1 — 목표 설정

```text
Generate one complete standalone portrait 9:16 app screenshot for FocusFlow.
Create the goal setup screen using a calm, minimal productivity-app design.

Include:
- “FocusFlow”
- “오늘은 무엇에 집중할까요?”
- goal input: “영어 시험 공부하기”
- section label: “집중 가능 시간”
- chips: “25분”, “60분”, “90분”; show “60분” selected
- section label: “빠른 선택”
- tags: “시험공부”, “과제”, “독서”, “업무”
- bottom button: “맞춤 루틴 만들기”

Use soft gray #F7F8FC, white rounded cards, indigo #5B5FEF,
mint #9EE6CF, deep navy text, clean modern Korean sans-serif typography,
generous spacing, and a front-facing flat UI screenshot.

Render every supplied label verbatim. Exactly one screen.
No bottom navigation, settings icon, menu icon, device frame,
extra copy, random letters, 3D, perspective, hands, cropping, or watermark.
```

![FocusFlow 목표 설정 최종 화면](./01_goal_setup.png)

### 7.2 화면 2 — 맞춤 루틴 선택

```text
Generate one complete standalone portrait 9:16 app screenshot for FocusFlow.
Match the goal setup screen’s typography, palette, margins, rounded cards,
button shape, line weight, and overall polish.

Include:
- back arrow
- “맞춤 집중 루틴”
- goal summary: “영어 시험 공부하기”
- selected card: “균형 집중”, “추천”,
  “25분 집중 · 5분 휴식 · 2세트”, “총 60분”
- second card: “빠른 몰입”, “25분 집중 · 1세트”
- third card: “깊은 집중”, “50분 집중 · 10분 휴식”
- bottom button: “이 루틴으로 시작”

Show the first card selected with an indigo border and checkmark.
Use soft gray #F7F8FC, white rounded cards, indigo #5B5FEF,
mint #9EE6CF, deep navy text, and clean Korean sans-serif typography.

Render every supplied label verbatim. Exactly one screen.
No bottom navigation, settings icon, menu icon, device frame,
extra copy, random letters, 3D, perspective, hands, cropping, or watermark.
```

![FocusFlow 맞춤 집중 루틴 최종 화면](./02_routine_select.png)

### 7.3 화면 3 — 집중 타이머

```text
Generate one complete standalone portrait 9:16 app screenshot for FocusFlow.
Match the previous screens’ typography, palette, margins, button shape,
line weight, and overall polish.

Include:
- “집중 중”
- goal: “영어 시험 공부하기”
- large centered circular progress timer: “24:36”
- “집중 시간”
- “세트 1 / 2”
- “다음 휴식까지 24분”
- indigo primary button: “일시정지” with a pause icon
- low-emphasis text action: “집중 종료하기”

Make the circular timer the dominant element.
Use soft gray #F7F8FC, indigo #5B5FEF timer progress,
mint #9EE6CF accents, deep navy text, and generous whitespace.

Render every supplied label verbatim. Exactly one screen.
No back arrow, bottom navigation, settings icon, menu icon,
device frame, extra copy, random letters, 3D, perspective,
hands, cropping, or watermark.
```

![FocusFlow 집중 타이머 최종 화면](./03_focus_timer.png)

## 8. 최종 이미지 품질검사

### 8.1 공통 검사 결과

| 검사 항목 | 결과 |
|---|---|
| 파일 형식 | PNG |
| 이미지 수 | 3장 |
| 해상도 | 각 941 × 1672px |
| 화면 방향 | 모바일 세로형 |
| 화면 비율 | 약 9:16 |
| 한글 텍스트 | 깨짐 없음 |
| 요소 잘림·겹침 | 없음 |
| 색상·카드·버튼·여백 | 세 화면 간 일관성 유지 |
| 추가 후가공 | 진행하지 않음 (아래 판단 참고) |

초안에서 발견된 시간 불일치와 불필요한 메뉴 아이콘은 프롬프트 수정 후 이미지를 다시 생성하는 방식으로 수정했다. 자소가 분리되거나 뭉개진 글자, 잘림·겹침은 최종 3장에서 발견되지 않았다.

다만 `03_focus_timer.png` 상단 상태 라벨 `집중  중` 은 두 어절 사이 간격이 다른 텍스트보다 넓다. 글자가 깨지거나 다른 글자로 바뀐 것은 아니고 읽는 데 지장이 없다. 이 한 곳을 고치려고 화면을 다시 생성하면 세 화면 사이에 맞춰 둔 색·여백·타이포그래피가 다시 흔들릴 위험이 더 크다고 판단해 인페인팅이나 수동 보정을 하지 않고 남겼다. 발견하지 못한 것이 아니라 발견하고 남긴 것이므로 여기에 기록한다.

### 8.2 화면별 검사

#### `01_goal_setup.png`

- `FocusFlow`, `오늘은 무엇에 집중할까요?`, `영어 시험 공부하기`가 정상적으로 표시된다.
- `25분 / 60분 / 90분` 중 `60분`의 선택 상태가 명확하다.
- 빠른 선택 태그 4개와 `맞춤 루틴 만들기` 버튼이 정상이다.
- 잘림, 겹침, 깨진 텍스트가 없다.

#### `02_routine_select.png`

- `균형 집중`, `빠른 몰입`, `깊은 집중`의 정보가 정상적으로 표시된다.
- 추천 표시, 선택 테두리, 체크 표시가 일관되게 적용됐다.
- `60분` 선택과 `총 60분` 추천 결과가 서로 일치한다.
- `이 루틴으로 시작` 버튼과 뒤로가기가 정상이다.

#### `03_focus_timer.png`

- 상태, 목표, 타이머 `24:36`, `세트 1 / 2`, 다음 휴식 정보가 정상이다.
- 상단 상태 라벨 `집중  중` 은 두 어절 사이 간격이 넓다 — 유일하게 남긴 미세 결함(§8.1 판단).
- 원형 타이머가 화면의 주요 요소로 표현됐다.
- `일시정지`는 주요 버튼, `집중 종료하기`는 낮은 강조도의 행동으로 구분됐다.
- 잘림, 겹침, 불필요한 메뉴 아이콘이 없다.

## 9. Figma 프로토타입

- 프로젝트 링크: [FocusFlow Figma 프로토타입](https://www.figma.com/design/k848SHx87aOxQwdo1xO40W)
- 시작 화면: `01_Goal_Setup`

### 9.1 화면 전환

| 출발 화면 | 사용자 행동 | 도착 화면 |
|---|---|---|
| `01_Goal_Setup` | `맞춤 루틴 만들기` 클릭 | `02_Routine_Select` |
| `02_Routine_Select` | 뒤로가기 클릭 | `01_Goal_Setup` |
| `02_Routine_Select` | `이 루틴으로 시작` 클릭 | `03_Focus_Timer` |
| `03_Focus_Timer` | `집중 종료하기` 클릭 | `01_Goal_Setup` |

### 9.2 공유 전 확인 사항

Figma 제출 전 `Share` 설정에서 `Anyone with the link`와 `Can view` 권한을 확인한다.

## 10. 최종 산출물 목록

| 파일 | 용도 |
|---|---|
| [`00_draft_board.png`](./00_draft_board.png) | 최초 초안 비교 시안 |
| [`01_goal_setup.png`](./01_goal_setup.png) | 최종 화면 1 — 목표 설정 |
| [`02_routine_select.png`](./02_routine_select.png) | 최종 화면 2 — 맞춤 루틴 선택 |
| [`03_focus_timer.png`](./03_focus_timer.png) | 최종 화면 3 — 집중 타이머 |
| [`bonus-web/index.html`](./bonus-web/index.html) | 보너스 — 실행 가능한 웹앱 |
| [`bonus-web/styles.css`](./bonus-web/styles.css) | 보너스 — 반응형 UI 스타일 |
| [`bonus-web/app.js`](./bonus-web/app.js) | 보너스 — 화면 이동, 선택, 타이머 동작 |
| [`FocusFlow_AI_UIUX_Work_Log.md`](./FocusFlow_AI_UIUX_Work_Log.md) | 전체 작업 과정 및 결과 |
| [Figma 프로토타입](https://www.figma.com/design/k848SHx87aOxQwdo1xO40W) | 클릭 가능한 사용자 흐름 |

## 11. 최종 체크리스트

- [x] 개인 맞춤형 집중 루틴 앱의 사용자와 문제를 정의했다.
- [x] 서로 역할이 다른 UI 화면을 3장 제작했다.
- [x] 각 최종 이미지를 독립된 9:16 PNG로 저장했다.
- [x] 초안의 문제, 수정 내용, 수정 이유를 기록했다.
- [x] 최초 프롬프트와 화면별 최종 프롬프트를 기록했다.
- [x] 이미지 속 깨진 글자, 잘림, 겹침, 불필요한 요소를 검사했다.
- [x] 최종 화면의 시간과 루틴 정보가 일치하는지 확인했다.
- [x] 사용한 AI 도구와 디자인 도구를 명시했다.
- [x] Figma에서 클릭 가능한 화면 전환을 구성했다.
- [x] 외부 디자인 캡처나 출처 불명의 레퍼런스를 사용하지 않았다.
- [x] 보너스 과제의 HTML/CSS 코드 변환을 완료했다.

## 12. 과제 요구사항 충족표

| 과제 요구사항 | 대응 산출물 | 상태 |
|---|---|---|
| UI 디자인 이미지 3장 이상 | `01_goal_setup.png`, `02_routine_select.png`, `03_focus_timer.png` | 충족 |
| 화면 역할 구분 | 목표 설정, 루틴 선택, 집중 타이머 | 충족 |
| 모바일 9:16 비율 | 각 941 × 1672px | 충족 |
| PNG 또는 JPG 형식 | PNG 3장 | 충족 |
| 이미지 내 텍스트 깨짐 수정 | 제8장 품질검사 기록 | 충족 |
| 사용한 이미지 생성 도구 명시 | OpenAI 이미지 생성 도구 | 충족 |
| 프롬프트 초안 → 수정 → 최종 기록 | 5장, 6장, 7장 | 충족 |
| 각 수정 이유와 결과 차이 기록 | 6장 개선표와 수정 이유 | 충족 |
| Figma 프로젝트 링크 | 9장 프로젝트 링크 | 충족 |
| Hotspot 또는 화면 전환 흐름 | 9.1 화면 전환표 | 충족 |
| 레퍼런스 출처 기록 | 외부 레퍼런스 미사용 명시 | 충족 |
| 보너스 HTML/CSS 코드 변환 | `bonus-web` 정적 웹앱 | 충족 |

## 13. 보너스 과제 — HTML/CSS 코드 변환

완성된 세 개의 모바일 UI 시안을 외부 라이브러리 없이 HTML, CSS, JavaScript로 변환했다.

### 13.1 구현 범위

| 파일 | 역할 |
|---|---|
| `bonus-web/index.html` | 목표 설정, 루틴 선택, 집중 타이머 화면의 시맨틱 HTML |
| `bonus-web/styles.css` | 디자인 토큰, 9:16 모바일 레이아웃, 데스크톱 반응형 처리 |
| `bonus-web/app.js` | 빠른 목표 선택, 루틴 선택, 화면 이동, 타이머 일시정지·재개 |

### 13.2 구현 원칙

- 별도의 설치나 빌드 과정 없이 `index.html`을 브라우저에서 실행할 수 있도록 구성했다.
- 인디고, 민트, 연한 회색, 둥근 카드와 주요 버튼 등 원본 시안의 디자인 시스템을 CSS로 재현했다.
- 입력, 라디오 그룹, 버튼과 제목 구조를 사용해 키보드 조작과 기본 접근성을 확보했다.
- 외부 프레임워크, 아이콘 패키지, 서버, 데이터베이스는 보너스 범위에 필요하지 않아 사용하지 않았다.

### 13.3 구현된 상호작용

1. 빠른 선택 태그를 누르면 목표 입력값이 변경된다.
2. `맞춤 루틴 만들기`를 누르면 입력한 목표가 다음 화면으로 전달된다.
3. 세 가지 집중 루틴 중 하나를 선택할 수 있다.
4. `이 루틴으로 시작`을 누르면 선택한 루틴의 타이머가 시작된다.
5. 타이머를 일시정지하거나 다시 시작할 수 있다.
6. `집중 종료하기`를 누르면 목표 설정 화면으로 돌아간다.

### 13.4 검수 결과

- 모바일 390 × 844px 화면에서 세 화면의 잘림과 겹침이 없음을 확인했다.
- 데스크톱 1280 × 900px에서 모바일 앱이 중앙에 배치됨을 확인했다.
- 목표 전달, 루틴 선택, 타이머 시작·일시정지·종료가 정상 동작했다.
- 브라우저 콘솔 오류와 경고가 없음을 확인했다.

## 14. 결론

FocusFlow 프로젝트는 서비스 기획, 사용자 흐름 설계, 생성형 AI 이미지 제작, 프롬프트 개선, 품질검사, Figma 프로토타입 제작의 전 과정을 완료했다. 초안에서 발견된 시간 정보 불일치, 불필요한 아이콘, 제출 형식 문제를 프롬프트에 구체적으로 반영했다. 그 결과 세 화면의 정보 구조와 디자인 시스템이 일관되고, 사용자가 목표 설정부터 집중 실행까지 자연스럽게 이동할 수 있는 UI/UX 시안을 완성했다.
