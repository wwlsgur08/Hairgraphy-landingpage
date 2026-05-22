import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InviteClient from "./InviteClient";

const CODE_PATTERN = /^[A-Z0-9]{6}$/;
const APP_STORE_URL = "https://apps.apple.com/app/id6758673452";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.hairgraphy.app";

interface Params {
  code: string;
}

interface PageProps {
  params: Promise<Params>;
}

function normalizeCode(raw: string): string | null {
  if (!raw) return null;
  const upper = raw.trim().toUpperCase();
  if (!CODE_PATTERN.test(upper)) return null;
  return upper;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code: rawCode } = await params;
  const code = normalizeCode(rawCode);
  if (!code) return { title: "초대 코드를 찾을 수 없어요" };

  const title = `초대 코드 ${code} · 헤어그래피`;
  const description =
    "친구가 헤어그래피로 초대했어요. 디자이너로 가입하면 AI 이용권 5회를 무료로 받아요.";
  const ogPath = `/invite/${code}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: `/invite/${code}` },
    openGraph: {
      title,
      description,
      url: `https://hairgraphy.site/invite/${code}`,
      siteName: "헤어그래피",
      images: [{ url: ogPath, width: 1200, height: 630 }],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogPath],
    },
    robots: { index: false, follow: false },
  };
}

export default async function InvitePage({ params }: PageProps) {
  const { code: rawCode } = await params;
  const code = normalizeCode(rawCode);
  if (!code) notFound();

  return (
    <InviteClient
      code={code}
      appStoreUrl={APP_STORE_URL}
      playStoreUrl={PLAY_STORE_URL}
    />
  );
}
