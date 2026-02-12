import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { BlogPost } from "@/types";
import {
  BLOG_POST_MAP,
  FEATURE_PAGE_MAP,
  FEATURE_PAGES,
  SITE_URL,
} from "@/lib/seo-content";

type FeaturePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return FEATURE_PAGES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = FEATURE_PAGE_MAP.get(slug);

  if (!feature) {
    return {};
  }

  const canonicalPath = `/features/${feature.slug}`;

  return {
    title: feature.title,
    description: feature.description,
    keywords: feature.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: feature.title,
      description: feature.description,
      url: `${SITE_URL}${canonicalPath}`,
      type: "website",
      locale: "ko_KR",
      siteName: "헤어그래피",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: feature.title,
      description: feature.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature = FEATURE_PAGE_MAP.get(slug);

  if (!feature) {
    notFound();
  }

  const relatedBlogs = feature.relatedBlogSlugs
    .map((blogSlug) => BLOG_POST_MAP.get(blogSlug))
    .filter((blog): blog is BlogPost => blog !== undefined);

  const canonicalUrl = `${SITE_URL}/features/${feature.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: feature.heroTitle,
      description: feature.description,
      url: canonicalUrl,
      inLanguage: "ko-KR",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "헤어그래피",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS, Android",
      featureList: feature.solutionSteps,
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: feature.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
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
          name: "기능",
          item: `${SITE_URL}/#features`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: feature.heroTitle,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="py-14 md:py-20 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <nav className="text-sm text-text-secondary mb-5">
              <Link href="/" className="hover:text-coral transition-colors">
                홈
              </Link>
              <span className="mx-2">/</span>
              <span>기능</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-4">
              {feature.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              {feature.heroDescription}
            </p>
          </div>
        </section>

        <section className="py-14 md:py-18 bg-surface">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              현장에서 자주 겪는 문제
            </h2>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              {feature.problemStatement}
            </p>
          </div>
        </section>

        <section className="py-14 md:py-18 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
              헤어그래피에서 해결하는 방식
            </h2>
            <ol className="space-y-3">
              {feature.solutionSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-xl border border-border-light bg-card px-4 py-4 md:px-6"
                >
                  <p className="font-semibold text-coral mb-1">Step {index + 1}</p>
                  <p className="text-text-secondary leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-14 md:py-18 bg-surface">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
              기대할 수 있는 변화
            </h2>
            <ul className="space-y-3">
              {feature.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-xl border border-border-light bg-card px-4 py-4 md:px-6 text-text-secondary leading-relaxed"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-18 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              자주 묻는 질문
            </h2>
            <div className="space-y-3">
              {feature.faqs.map((faq) => (
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

        <section className="py-14 md:py-18 bg-surface">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              관련 가이드
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="block rounded-xl border border-border-light bg-card px-5 py-5 hover:-translate-y-0.5 transition-transform"
                >
                  <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {blog.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              헤어그래피로 바로 적용해 보세요
            </h2>
            <p className="text-white/70 mb-7">
              기능 설명만 보는 단계에서 끝내지 말고, 실제 현장에서 사용해 보세요.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Link
                href="/#download"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-coral text-white font-semibold hover:bg-coral-dark transition-colors"
              >
                사전 예약하고 알림 받기
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                관련 블로그 더 보기
              </Link>
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
