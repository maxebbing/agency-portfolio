import { ImageResponse } from "next/og";
import { loadOgFonts, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Max Ebbing — Web Design Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const PAPER = "#FAF7F2";
const INK = "#171512";
const INK_MUTED = "#6F675C";
const LINE = "#E4DDD1";
const ACCENT = "#C3401F";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: PAPER,
          color: INK,
          fontFamily: "Fraunces",
          padding: 64,
        }}
      >
        {/* Print-card frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            border: `1px solid ${LINE}`,
            padding: "56px 64px",
            justifyContent: "space-between",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Inter",
              fontSize: 20,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_MUTED,
            }}
          >
            <span>Web Design Studio</span>
            <span style={{ color: ACCENT }}>Est. 2026</span>
          </div>

          {/* Wordmark + statement */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: 150,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              Max Ebbing
              <span style={{ color: ACCENT }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 34,
                maxWidth: 820,
                fontSize: 34,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: INK_MUTED,
              }}
            >
              I build websites the way good books are set — with patience, and a
              point of view.
            </div>
          </div>

          {/* Footer rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontFamily: "Inter",
              fontSize: 19,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: INK_MUTED,
            }}
          >
            <span style={{ width: 40, height: 2, backgroundColor: ACCENT }} />
            Independent web design &amp; development
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
