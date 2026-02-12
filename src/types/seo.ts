export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface FeatureSeoPage extends SeoMeta {
  slug: string;
  heroTitle: string;
  heroDescription: string;
  problemStatement: string;
  solutionSteps: string[];
  outcomes: string[];
  faqs: SeoFaqItem[];
  relatedBlogSlugs: string[];
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost extends SeoMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  tags: string[];
  sections: BlogSection[];
  checklist: string[];
  faq: SeoFaqItem[];
  relatedFeatureSlugs: string[];
}
