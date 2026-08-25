import { ImageResponse } from "next/og";

import { getCaseStudy } from "@/data/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const themeColors = {
  cloud9: { background: "#dedede", foreground: "#101010", accent: "#ff563f" },
  belloro: { background: "#dedad5", foreground: "#211d1a", accent: "#9d8778" },
  obstruo: { background: "#0a0710", foreground: "#f3f0f5", accent: "#8e5cff" },
  formel: { background: "#121518", foreground: "#f4f4f4", accent: "#2caeff" },
} as const;

export default async function CaseStudyOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  const colors = caseStudy ? themeColors[caseStudy.theme] : themeColors.cloud9;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: colors.background,
          color: colors.foreground,
          display: "flex",
          height: "100%",
          padding: "68px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700 }}>ZOBO / CASE STUDY</div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
            <div style={{ color: colors.accent, display: "flex", fontSize: 25, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              {caseStudy?.category ?? "Portfolio"}
            </div>
            <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: "-6px", lineHeight: 0.9, marginTop: 18 }}>
              {caseStudy?.displayTitle ?? "ZOBO"}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22 }}>
            {caseStudy?.services.join(" · ") ?? "Branding · Illustration · UI"}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
