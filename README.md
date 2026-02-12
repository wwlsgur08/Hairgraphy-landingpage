# Hairgraphy Landing Page

헤어 디자이너 대상 랜딩/기능/블로그 SEO 확장 페이지를 포함한 Next.js(App Router) 프로젝트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 스크립트

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## SEO 구조

- 홈: `/`
- 기능 페이지 6개: `/features/*`
- 블로그 목록: `/blog`
- 블로그 상세 8개: `/blog/*`
- robots: `/robots.txt`
- sitemap: `/sitemap.xml`
- RSS: `/rss.xml`
- OG 이미지: `/opengraph-image`
- Twitter 이미지: `/twitter-image`

## SEO 운영 체크리스트 (배포 직후)

1. Google Search Console
- 도메인 속성 등록: `https://hairgraphy.site`
- 사이트맵 제출: `https://hairgraphy.site/sitemap.xml`
- URL 검사/색인 요청:
  - `https://hairgraphy.site/`
  - 주요 기능 페이지 6개
  - 블로그 글 8개

2. 네이버 서치어드바이저
- 사이트 등록 및 소유 확인
- 사이트맵 제출: `https://hairgraphy.site/sitemap.xml`
- RSS 제출: `https://hairgraphy.site/rss.xml`
- 주요 페이지 수집 요청

3. 배포 후 7일 모니터링
- 색인 수(Submitted/Indexed)
- 노출/클릭/평균순위 변화
- 페이지별 CTR 저하 구간(타이틀/디스크립션 우선 보정)

## 콘텐츠 소스

- 기능/블로그 SEO 원문 데이터: `src/lib/seo-content.ts`
- 공통 타입: `src/types/seo.ts`
