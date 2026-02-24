import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Shield, Settings, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Android APK 다운로드",
  description:
    "헤어그래피 Android 버전을 APK로 직접 다운로드하세요. Play Store 정식 출시 전 미리 사용해 보실 수 있습니다.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    icon: Download,
    title: "APK 다운로드",
    desc: "아래 버튼을 눌러 파일을 다운로드하세요.",
  },
  {
    icon: Settings,
    title: "설치 허용",
    desc: '설정 → 보안 → "출처를 알 수 없는 앱 설치"를 허용해 주세요.',
  },
  {
    icon: CheckCircle,
    title: "설치 완료",
    desc: "다운로드된 APK 파일을 열어 설치하면 끝!",
  },
];

export default function AndroidPage() {
  return (
    <main className="min-h-dvh bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-md mx-auto text-center">
          {/* Logo */}
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/images/logo.png"
              alt="헤어그래피"
              width={48}
              height={48}
              className="mx-auto"
            />
          </Link>

          {/* Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-6">
            Android 베타
          </span>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            헤어그래피 Android
          </h1>
          <p className="text-text-secondary leading-relaxed mb-8">
            아직 플레이스토어엔 정식 출시하지 않았습니다.
            <br />
            APK 파일을 먼저 다운로드하고 싶다면
            <br />
            아래 버튼을 눌러주세요.
          </p>

          {/* Download Button */}
          <a
            href="/hairgraphy.apk"
            download
            className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-coral text-white text-lg font-semibold hover:bg-coral-dark transition-colors"
          >
            <Download className="w-5 h-5" />
            APK 다운로드
          </a>

          {/* Install Steps */}
          <div className="mt-12 text-left">
            <h2 className="text-lg font-bold text-primary mb-4 text-center">
              설치 방법
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-start gap-3 rounded-xl border border-border-light bg-card p-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center text-coral font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-primary">{step.title}</p>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Security note */}
          <div className="mt-8 flex items-start gap-2 rounded-xl bg-surface p-4 text-left">
            <Shield className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
            <p className="text-sm text-text-secondary">
              이 APK는 헤어그래피 공식 파일입니다. Play Store 출시 후에는
              자동 업데이트가 지원됩니다.
            </p>
          </div>

          {/* Back to landing */}
          <Link
            href="/"
            className="inline-block mt-8 text-sm text-text-tertiary hover:text-coral transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
