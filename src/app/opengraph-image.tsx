import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "헤어그래피 - 매일의 시술이 포트폴리오가 돼요";
export const contentType = "image/png";

export default function Image() {
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
            "linear-gradient(135deg, rgba(255,253,250,1) 0%, rgba(245,245,245,1) 100%)",
          color: "#141414",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, color: "#E26B5F", marginBottom: 12 }}>
          Hairgraphy
        </div>
        <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.2, whiteSpace: "pre-wrap" }}>
          {"매일의 시술이\n포트폴리오가 돼요"}
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#5f5f5f" }}>
          AI 비식별화 · 포트폴리오 · 고객관리 · 멀티 타이머
        </div>
      </div>
    ),
    size,
  );
}
