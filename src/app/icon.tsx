import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #00E5CC 0%, #7C3AED 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 16,
          color: "#050508",
          letterSpacing: "-0.05em",
        }}
      >
        AB
      </div>
    ),
    { ...size }
  );
}
