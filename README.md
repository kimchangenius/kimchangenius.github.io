# Human-Data Interaction Lab. Website

Kwangwoon HDI Lab의 공식 웹사이트 소스 저장소입니다. Jekyll(al-folio) 기반으로 운영되며, Docker를 사용해 로컬에서 동일한 환경으로 테스트할 수 있습니다.

## 빠른 시작

### 1) 사전 준비

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Docker Compose (`docker compose` 명령 사용 가능 상태)

### 2) `.env` 파일 생성 (필수)

프로젝트 루트에 `.env` 파일을 만들고 아래 값을 설정하세요.

```env
SERVER_USER=your_username
SERVER_UID=1000
SERVER_GID=1000
SERVER_PORT=4000
```

각 항목의 의미:

- `SERVER_USER`: 컨테이너 사용자명 매핑에 사용
- `SERVER_UID`: 사용자 UID 매핑에 사용
- `SERVER_GID`: 그룹 GID 매핑에 사용
- `SERVER_PORT`: 로컬에서 접속할 포트 (예: 4000)

참고:

- Linux/WSL에서는 `whoami`, `id -u`, `id -g`로 값 확인 가능
- `.env`는 `.gitignore` 대상이므로 커밋되지 않음

### 3) 로컬 실행

```bash
docker compose pull
docker compose up
```

실행 후 브라우저에서 아래 주소로 확인:

`http://localhost:<SERVER_PORT>`

예: `SERVER_PORT=4000`이면 `http://localhost:4000`

## Windows + Docker 로컬 테스트 주의사항

Windows 바인드 마운트 환경에서는 파일 변경 감지가 불안정할 수 있습니다. 이 경우 `docker-compose.override.yml`을 로컬에서 만들고 Jekyll 실행 옵션에 `--force_polling`을 추가해야 합니다.

`docker-compose.override.yml` 예시:

```yaml
services:
  jekyll:
    command: >
      bundle exec jekyll serve --host 0.0.0.0 --port 8080 --watch --force_polling
```

중요:

- `docker-compose.override.yml`은 로컬 전용으로 사용
- 해당 파일도 `.gitignore` 대상이라 커밋하지 않음

## `deploy.sh`의 역할

`deploy.sh`는 서버/운영 환경에서 빠르게 배포 상태를 맞추기 위한 수동 배포 스크립트입니다.

현재 스크립트가 수행하는 주요 작업:

1. 실행 중 컨테이너 정리 (`docker compose down`)
2. 최신 코드 동기화 (`git pull origin main`)
3. 빌드 산출물/캐시 정리 (`_site`, `.jekyll-cache`, `.jekyll-metadata`)
4. 이미지 빌드 및 컨테이너 재기동 (`docker compose up -d --build`)

자동 배포(예: GitHub Actions)와 별개로, 운영자가 직접 재배포해야 할 때 사용합니다.

## 사이트 구조

### 콘텐츠 원본

- `_pages`: 고정 페이지(프로필, 소개, 랜딩 페이지)
- `_research`: 연구(Research) 항목 페이지
- `_courses`: 강의/코스 컬렉션(사용 시)
- `_bibliography`: 논문/출판 데이터
- `_data`: 구조화 데이터(YAML)

### 렌더링 레이어

- `_layouts`: 페이지 레이아웃 템플릿
- `_includes`: 재사용 컴포넌트 조각
- `_sass`: 스타일 소스
- `assets`: 이미지/JS/CSS 등 정적 자원

### 실행/배포 관련

- `_config.yml`: 사이트 전역 설정 (가장 영향 범위 큼)
- `docker-compose.yml`: 로컬 실행 기본 Compose 설정
- `docker-compose.override.yml`: 로컬 전용 오버라이드
- `deploy.sh`: 수동 배포 스크립트
- `.github/workflows/deploy.yml`: CI 자동 배포 워크플로

## 운영 흐름

1. 소스 수정 (`_pages`, `_research`, `_data` 등)
2. 로컬 확인 (`docker compose up`)
3. 정적 사이트 빌드 (Jekyll이 `_site` 생성)
4. 배포 (CI 자동 배포 또는 `deploy.sh` 수동 배포)

주의: `_site`는 생성물이므로 직접 수정하지 마세요.

## 주요 수정 포인트와 주의사항

- `_pages/profiles.md`
  - 역할: 멤버 그룹/노출 순서/프로필 연결 관리
  - 주의: 파일명/이미지 경로 오타 시 렌더링 누락 가능
- `_pages/about_*.md`
  - 역할: 구성원 개별 프로필 본문
  - 주의: front matter 누락/오타 시 페이지 깨짐 가능
- `_research/*`, `_bibliography/papers.bib`
  - 역할: 연구 항목/논문 업데이트 핵심 위치
  - 주의: YAML/BibTeX 문법 오류 시 목록 렌더링 실패 가능
- `_config.yml`
  - 역할: 전역 기능/플러그인/URL/수집 경로 제어
  - 주의: 작은 오타도 사이트 전체 동작에 영향

## 참고 문서

- 상세 설치/배포 가이드: [`INSTALL.md`](INSTALL.md)
