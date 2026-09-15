import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "The Solo Syntax — Full-Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};

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
          padding: "80px",
          background: "#05070d",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            right: "-100px",
            top: "-160px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.28), rgba(139,92,246,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            left: "-180px",
            bottom: "-300px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.2), rgba(59,130,246,0))",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "42px",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            }}
          />

          The Solo Syntax
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "72px",
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: "-3px",
            maxWidth: "900px",
          }}
        >
          <span>I Build Modern Websites</span>

          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            That Make an Impact
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "34px",
            fontSize: "25px",
            color: "#a1a1aa",
          }}
        >
          Full-Stack Web Developer
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}