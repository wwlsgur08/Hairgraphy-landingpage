import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "헤어그래피 - 헤어 디자이너를 위한 올인원 앱";
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
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.2, whiteSpace: "pre-wrap" }}>
          {"헤어 디자이너의\n기록/운영/업로드를 한 번에"}
        </div>
      </div>
    ),
    size,
  );
}
