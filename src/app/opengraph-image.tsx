import { ImageResponse } from "next/og";

export const alt = "Agnieszka Zobel — Graphic designer / UI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#eeeeef",
          color: "#090909",
          display: "flex",
          height: "100%",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>ZOBO / PORTFOLIO</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 104, fontWeight: 700, letterSpacing: "-5px", lineHeight: 0.94 }}>
              Agnieszka Zobel
            </div>
            <div style={{ display: "flex", fontSize: 45, marginTop: 26 }}>Graphic designer / UI</div>
          </div>
          <div style={{ display: "flex", fontSize: 24 }}>Branding · Illustration · Packaging · UI</div>
        </div>
      </div>
    ),
    size,
  );
}
