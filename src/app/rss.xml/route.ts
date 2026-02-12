import { BLOG_POSTS, SITE_URL, absoluteUrl } from "@/lib/seo-content";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const items = BLOG_POSTS.map((post) => {
    const link = absoluteUrl(`/blog/${post.slug}`);
    const description = post.summary;
    return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        <description>${escapeXml(description)}</description>
      </item>
    `;
  }).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>헤어그래피 블로그</title>
        <link>${SITE_URL}</link>
        <description>헤어 디자이너를 위한 운영/마케팅/고객관리 가이드</description>
        <language>ko-KR</language>
        ${items}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
