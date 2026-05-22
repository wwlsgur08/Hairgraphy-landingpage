import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BLOG_POSTS, SITE_URL } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "헤어 디자이너 블로그 가이드",
  description:
    "미용실 운영, 고객관리, 포트폴리오, 인스타 콘텐츠 운영까지 헤어 디자이너 실무 가이드 모음.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "헤어 디자이너 블로그 가이드",
    description:
      "미용실 운영, 고객관리, 포트폴리오, 인스타 콘텐츠 운영까지 실무 가이드 모음.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "ko_KR",
    siteName: "헤어그래피",
  },
  twitter: {
    card: "summary_large_image",
    title: "헤어 디자이너 블로그 가이드",
    description: "헤어 디자이너 실무에 바로 적용 가능한 운영/마케팅 가이드 모음",
    images: ["/twitter-image"],
  },
};

export default function BlogIndexPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "헤어그래피 블로그",
      url: `${SITE_URL}/blog`,
      inLanguage: "ko-KR",
      hasPart: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "블로그",
          item: `${SITE_URL}/blog`,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="py-14 md:py-20 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-4">
              헤어 디자이너를 위한 실전 가이드
            </h1>
            <p className="text-base md:text-lg text-text-secondary max-w-3xl leading-relaxed">
              현장 운영, 고객 상담, 콘텐츠 업로드에서 바로 적용할 수 있는 글만 모았습니다.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-border-light bg-card p-5 md:p-7 hover:-translate-y-0.5 transition-transform"
                >
                  <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    <span>·</span>
                    <span>{post.readingMinutes}분 읽기</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-4">{post.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-surface text-text-secondary text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
