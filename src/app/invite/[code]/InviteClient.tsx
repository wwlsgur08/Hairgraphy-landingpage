"use client";

import { useCallback, useEffect, useState } from "react";

interface Props {
  code: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

type Platform = "ios" | "android" | "other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "other";
}

export default function InviteClient({ code, appStoreUrl, playStoreUrl }: Props) {
  const [platform, setPlatform] = useState<Platform>("other");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());

    // 클립보드 자동 복사 시도 — HTTPS + 사용자 활성 컨텍스트 필요. 실패해도 무시.
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).catch(() => {
        /* 권한 없음 / iOS Safari 첫 진입 등 */
      });
    }
  }, [code]);

  const handleCopy = useCallback(async () => {
    if (typeof navigator === "undefined") return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* 권한 거절: 사용자가 길게 눌러 직접 복사 가능하므로 무시 */
    }
  }, [code]);

  const storeUrl =
    platform === "ios" ? appStoreUrl : platform === "android" ? playStoreUrl : null;

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
        background:
          "linear-gradient(135deg, #FFFDFA 0%, #F5F1FC 50%, #F0EBFA 100%)",
        color: "#141414",
        fontFamily:
          "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "white",
          borderRadius: 24,
          padding: "32px 24px",
          boxShadow: "0 10px 40px rgba(99,55,218,0.12)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "#6337DA",
            letterSpacing: 1,
            marginBottom: 8,
          }}
        >
          HAIRGRAPHY · INVITE
        </div>

        <h1
          style={{
            fontSize: 26,
            fontWeight: 800,
            lineHeight: 1.3,
            margin: "0 0 12px",
          }}
        >
          친구가 헤어그래피로
          <br />
          초대했어요
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#5f5f5f",
            margin: "0 0 28px",
            lineHeight: 1.5,
          }}
        >
          디자이너로 가입하면
          <br />
          <strong style={{ color: "#141414" }}>AI 이용권 5회</strong>를 받아요
        </p>

        <button
          onClick={handleCopy}
          style={{
            width: "100%",
            padding: "20px 16px",
            border: "2px dashed #6337DA",
            borderRadius: 16,
            background: "rgba(99,55,218, 0.06)",
            color: "#6337DA",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 6,
            fontFamily: "inherit",
            cursor: "pointer",
            marginBottom: 12,
          }}
        >
          {code}
        </button>

        <div
          style={{
            fontSize: 13,
            color: copied ? "#6337DA" : "#8a9093",
            fontWeight: 600,
            marginBottom: 24,
            minHeight: 18,
          }}
        >
          {copied ? "코드가 복사됐어요" : "위 코드를 탭하면 복사돼요"}
        </div>

        {storeUrl ? (
          <a
            href={storeUrl}
            style={{
              display: "block",
              width: "100%",
              padding: "16px",
              background: "#141414",
              color: "white",
              textDecoration: "none",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            {platform === "ios" ? "App Store에서 받기" : "Play 스토어에서 받기"}
          </a>
        ) : (
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <a
              href={appStoreUrl}
              style={{
                flex: 1,
                padding: "14px 8px",
                background: "#141414",
                color: "white",
                textDecoration: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              App Store
            </a>
            <a
              href={playStoreUrl}
              style={{
                flex: 1,
                padding: "14px 8px",
                background: "#141414",
                color: "white",
                textDecoration: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Play Store
            </a>
          </div>
        )}

        <p
          style={{
            fontSize: 12,
            color: "#8a9093",
            lineHeight: 1.6,
            margin: "16px 0 0",
          }}
        >
          앱 설치 후 가입 단계에서 코드가 자동으로 적용돼요.
          <br />
          자동 입력이 안 되면 설정 → 초대 코드에서 입력하세요.
        </p>
      </div>

      <a
        href="https://hairgraphy.site"
        style={{
          marginTop: 24,
          fontSize: 13,
          color: "#5f5f5f",
          textDecoration: "none",
        }}
      >
        헤어그래피 알아보기 →
      </a>
    </main>
  );
}
