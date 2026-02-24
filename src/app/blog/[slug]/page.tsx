import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { FeatureSeoPage } from "@/types";
import {
  BLOG_POST_MAP,
  BLOG_POSTS,
  FEATURE_PAGE_MAP,
  SITE_URL,
} from "@/lib/seo-content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POST_MAP.get(slug);

  if (!post) {
    return {};
  }

  const canonicalPath = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${canonicalPath}`,
      type: "article",
      locale: "ko_KR",
      siteName: "헤어그래피",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POST_MAP.get(slug);

  if (!post) {
    notFound();
  }

  const relatedFeatures = post.relatedFeatureSlugs
    .map((featureSlug) => FEATURE_PAGE_MAP.get(featureSlug))
    .filter((feature): feature is FeatureSeoPage => feature !== undefined);

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: "ko-KR",
      author: {
        "@type": "Organization",
        name: "헤어그래피",
      },
      publisher: {
        "@type": "Organization",
        name: "헤어그래피",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
        },
      },
      mainEntityOfPage: canonicalUrl,
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <article>
          <header className="py-14 md:py-20 bg-background border-b border-border">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <nav className="text-sm text-text-secondary mb-5">
                <Link href="/" className="hover:text-coral transition-colors">
                  홈
                </Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-coral transition-colors">
                  블로그
                </Link>
              </nav>
              <div className="flex items-center gap-2 text-sm text-text-tertiary mb-4">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <span>·</span>
                <span>{post.readingMinutes}분 읽기</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {post.summary}
              </p>
            </div>
          </header>

          <section className="py-14 md:py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="space-y-10 md:space-y-14">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-text-secondary leading-relaxed text-base md:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-surface">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
                실무 체크리스트
              </h2>
              <ul className="space-y-3">
                {post.checklist.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border-light bg-card px-4 py-4 md:px-6 text-text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                자주 묻는 질문
              </h2>
              <div className="space-y-3">
                {post.faq.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-xl border border-border-light bg-card px-4 py-4 md:px-6"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-surface">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                관련 기능 페이지
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedFeatures.map((feature) => (
                  <Link
                    key={feature.slug}
                    href={`/features/${feature.slug}`}
                    className="block rounded-xl border border-border-light bg-card px-5 py-5 hover:-translate-y-0.5 transition-transform"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      {feature.heroTitle}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.heroDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="py-14 md:py-20 bg-background border-t border-border">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <div className="rounded-2xl border border-border-light bg-card p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  이 내용을 더 효과적으로 실행하고 싶다면
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  헤어그래피 랜딩에서 핵심 기능을 한 번에 확인하고, 바로 무료 체험으로
                  연결해 보세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                  >
                    랜딩 첫 화면으로 이동
                  </Link>
                  <a
                    href="https://apps.apple.com/kr/app/hairgraphy/id6758673452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-border text-primary font-semibold hover:bg-surface transition-colors"
                  >
                    App Store에서 다운로드
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </>
  );
}
