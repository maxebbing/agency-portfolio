import { ImageResponse } from "next/og";
import { loadOgFonts, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { projects } from "@/lib/projects";

export const alt = "Concept project — Max Ebbing";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** hex (#RRGGBB) + alpha → rgba() string, for satori-safe tinting. */
function rgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fonts = await loadOgFonts();
  const project = projects.find((p) => p.slug === slug) ?? projects[0];
  const { palette, client, tagline, sector, year, services } = project;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: palette.bg,
          color: palette.fg,
          fontFamily: "Fraunces",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            border: `1px solid ${rgba(palette.fg, 0.18)}`,
            padding: "56px 64px",
            justifyContent: "space-between",
          }}
        >
          {/* Eyebrow: concept label + accent dot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "Inter",
              fontSize: 20,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: rgba(palette.fg, 0.6),
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: palette.accent,
              }}
            />
            Concept project
          </div>

          {/* Client name + tagline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: 138,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {client}
              <span style={{ color: palette.accent }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 30,
                fontSize: 40,
                fontStyle: "italic",
                color: rgba(palette.fg, 0.78),
              }}
            >
              {tagline}
            </div>
          </div>

          {/* Footer: meta + studio attribution */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 28,
              borderTop: `1px solid ${rgba(palette.fg, 0.18)}`,
              fontFamily: "Inter",
              fontSize: 18,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: rgba(palette.fg, 0.55),
            }}
          >
            <span>
              {sector} — {year}
            </span>
            <span>Max Ebbing · {services[0]}</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
