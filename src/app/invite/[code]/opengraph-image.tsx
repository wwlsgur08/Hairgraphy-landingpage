import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "헤어그래피 초대 — AI 이용권 5회 받기";
export const contentType = "image/png";

interface Props {
  params: Promise<{ code: string }>;
}

export default async function Image({ params }: Props) {
  const { code } = await params;
  const displayCode = (code || "------").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "linear-gradient(135deg, #FFFDFA 0%, #F5F1FC 60%, #E8DFFB 100%)",
          color: "#141414",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#6337DA",
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          HAIRGRAPHY · INVITE
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          친구가 헤어그래피로
          <br />
          초대했어요
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#5f5f5f",
            marginBottom: 40,
          }}
        >
          디자이너로 가입하면 AI 이용권 5회 무료
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "20px 32px",
            background: "rgba(99,55,218, 0.10)",
            border: "3px dashed #6337DA",
            borderRadius: 24,
            alignSelf: "flex-start",
          }}
        >
          <div style={{ fontSize: 22, color: "#5f5f5f", fontWeight: 600 }}>
            초대 코드
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#6337DA",
              letterSpacing: 10,
            }}
          >
            {displayCode}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
