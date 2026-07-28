import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AGENT BROWSER - Next-Gen Browser Automation for AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050508",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,229,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "400px",
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "100px",
            border: "1px solid rgba(0,229,204,0.3)",
            background: "rgba(0,229,204,0.06)",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00E5CC",
            }}
          />
          <span
            style={{
              color: "#00E5CC",
              fontSize: "14px",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            agentbrowser.fun
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#F0F0FF",
            textAlign: "center",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "20px",
          }}
        >
          AGENT
          <span
            style={{
              background: "linear-gradient(135deg, #00E5CC, #7C3AED)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {" "}
            BROWSER
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#9090A8",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            marginBottom: "40px",
          }}
        >
          Native Rust speed. Multichain identity. Built exclusively for AI
          agents.
        </div>

        {/* Command pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            "agent-browser open",
            "agent-browser snapshot",
            "agent-browser click @e1",
          ].map((cmd) => (
            <div
              key={cmd}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #1A1A2E",
                background: "#0D0D14",
                color: "#00E5CC",
                fontFamily: "monospace",
                fontSize: "14px",
              }}
            >
              {cmd}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
