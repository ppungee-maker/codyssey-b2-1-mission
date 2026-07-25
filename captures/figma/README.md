# Figma 작업 지시서 (담당: 홍동완 / `dongwandev`)

이 repo 에서 **남은 미완 항목은 Figma 하나**입니다. 나머지(이미지 3화면, 작업 로그,
보너스 HTML/CSS, 설계 근거 문서)는 전부 완료돼 있고, 세이AI 사전평가도 **11개 중 10개 통과**
상태입니다. 떨어지는 1개가 아래 항목입니다.

> **평가기준 3**: "Figma에서 화면이 배치되어 있고 화면 전환 흐름(Hotspot)이 확인되는가?"
> 현재 판정: **Fail** — "제작 절차는 작성되어 있으나 실제 링크·캡처가 첨부되지 않음"

`dongwandev` 계정은 이 repo 에 **write 권한이 이미 있습니다** — 직접 커밋·푸시하면 됩니다.

---

## 1. 만들 것 (총 15~20분)

Figma 파일 1개에 프레임 3개를 만들고, 이미 완성된 PNG 3장을 넣고, 클릭 이동 3개를 연결합니다.

배치할 이미지 (이 repo `images/final/`):

| 프레임 이름 | 이미지 | 화면 역할 |
|---|---|---|
| `01-Main` | `01-main-destination-search.png` | 메인 — 여행지 검색·카드 3개 |
| `02-Detail` | `02-detail-flight-booking.png` | 상세 — `JFK → LAX`, `$482`, `Book Now` |
| `03-MyPage` | `03-mypage-reservation-history.png` | 마이페이지 — 예약 3건 + 체크 배지 |

연결할 핫스팟 3개 (이 흐름이 곧 채점 대상):

| # | 누르는 곳 | 이동 대상 |
|---|---|---|
| 1 | 메인의 `Beach` 카드 | `02-Detail` |
| 2 | 상세의 `Book Now` 버튼 | `03-MyPage` |
| 3 | 상세의 뒤로가기(←) 아이콘 | `01-Main` |

## 2. 클릭 순서

상세 절차는 repo 루트 [`README.md`](../../README.md) **§7** 에 초보자 기준으로 적혀 있습니다. 요약:

1. figma.com → `+ Design file`
2. `F` 로 프레임 3개 생성(`Phone` 프리셋 또는 `1024×1536` 직접 입력), 좌우로 나란히 배치
3. PNG 3장을 드래그 앤 드롭 → 프레임 크기에 맞춤(`W`/`H` 를 프레임과 동일하게)
4. 프레임 이름을 위 표대로 변경 — **프로토타입 흐름 화면에 그대로 노출됩니다**
5. 우측 상단 탭을 `Design` → **`Prototype`** 으로 전환
6. 각 핫스팟 위치에 `R` 로 사각형을 그리고 **Fill 투명도 0%** → 선택 후 우측 **⊕ 를 드래그**해 대상 프레임에 연결
7. 뒤로가기(3번)만 Animation `Move out` 권장. 나머지는 기본값
8. 우측 상단 ▶ `Present` 로 3개 이동이 실제로 되는지 확인
9. `Share` → `Anyone with the link` → **Copy link**

## 3. 제출물 (파일명 그대로)

이 디렉터리에 캡처 3장:

| 파일명 | 무엇이 보여야 하나 |
|---|---|
| `01-overall-structure.png` | 프레임 3개가 나란히 있고 **프레임 이름**(`01-Main` 등)이 읽히는 전체 화면 |
| `02-hotspot-setup.png` | `Prototype` 탭 상태에서 **연결선 3개**가 프레임 사이로 이어진 화면 |
| `03-present-flow.png` | `Present` 모드에서 실제로 이동한 화면(예: 카드를 눌러 상세로 넘어간 상태) |

그리고 **Figma 링크 1줄**: repo 루트 `README.md` 상단의

```
**Figma 프로젝트 링크**: _(§7 절차로 만든 뒤 여기에 붙여넣기)_
```

이 줄의 괄호 부분을 실제 링크로 교체.

## 4. 커밋 방법

```bash
git clone git@github.com:ppungee-maker/codyssey-b2-1-mission.git
cd codyssey-b2-1-mission
# 캡처 3장을 captures/figma/ 에 넣고, README.md 상단 링크 줄 교체
git add captures/figma README.md
git commit -m "feat(figma): 프로토타입 배치·hotspot 3개 연결 + 캡처 3장"
git push origin main
```

브라우저에서 해도 됩니다: GitHub 웹 UI → `captures/figma` → `Add file` → `Upload files`.

## 5. 주의

- **캡처에 계정 이메일·결제 정보가 보이면 가려주세요.** 이 repo 는 public 입니다.
- 이미지 재생성은 필요 없습니다. `images/final/` 3장을 **그대로** 씁니다(텍스트 깨짐이 이미 해소된 최종본).
- 시안의 배경색·강조 파랑이 화면마다 미세하게 다릅니다(루트 README §6-3 에 실측·기록됨).
  여유가 있으면 §7-3 의 보완(배경 레이어 `#F4F6FA` 통일, 체크 배지 색 맞춤)까지 해주면 좋지만
  **채점 필수는 아닙니다** — 필수는 §1~§3.

## 6. 완료 후

캡처와 링크가 push 되면 세이AI 사전평가를 3회 재실행해 수렴을 확인합니다(B2-2·B2-3 와 함께).
예상 결과: **11/11 통과**.
