import type { ComponentType } from "react";

export interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}

export interface Step {
  number: number;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export * from "./seo";
