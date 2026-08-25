import { ImageResponse } from "next/og";

import { getIllustration } from "@/data/illustrations";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function IllustrationOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const illustration = getIllustration(slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(110deg, #e7d6cd, #e3eff2 70%, #eeeeef)",
          color: "#090909",
          display: "flex",
          height: "100%",
          padding: "68px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700 }}>ZOBO / ILUSTRACJE</div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
            <div style={{ display: "flex", fontSize: 25, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              {illustration?.eyebrow ?? "Autorskie ilustracje"}
            </div>
            <div style={{ display: "flex", fontSize: 100, fontWeight: 700, letterSpacing: "-5px", lineHeight: 0.92, marginTop: 18 }}>
              {illustration?.title ?? "Ilustracje"}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22 }}>
            {illustration?.services.join(" · ") ?? "Illustration · Character design · Packaging"}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
