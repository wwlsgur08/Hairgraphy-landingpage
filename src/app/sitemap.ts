import type { MetadataRoute } from "next";
import {
  BLOG_POSTS,
  FEATURE_PAGES,
  INDEXABLE_PATHS,
  absoluteUrl,
} from "@/lib/seo-content";

const DEFAULT_LAST_MODIFIED = "2026-02-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const featureLastModified = new Map(
    FEATURE_PAGES.map((item) => [`/features/${item.slug}`, DEFAULT_LAST_MODIFIED]),
  );
  const blogLastModified = new Map(
    BLOG_POSTS.map((item) => [`/blog/${item.slug}`, item.updatedAt]),
  );

  return INDEXABLE_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified:
      blogLastModified.get(path) ??
      featureLastModified.get(path) ??
      DEFAULT_LAST_MODIFIED,
    changeFrequency:
      path === "/" ? "weekly" : path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));
}
