import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#090909",
          color: "#ffffff",
          display: "flex",
          fontSize: 30,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-2px",
          width: "100%",
        }}
      >
        ZO
      </div>
    ),
    size,
  );
}
