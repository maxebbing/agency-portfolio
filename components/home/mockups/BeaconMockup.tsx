import type { CSSProperties } from "react";
import type { ProjectPalette } from "@/lib/projects";
import { tint } from "./tint";

const BARS = [38, 52, 44, 68, 60, 82, 74];
const STATS = [
  { k: "Signal", v: "98.2%" },
  { k: "Latency", v: "40ms" },
];

/** SaaS analytics landing hero with an inline dashboard card. */
export default function BeaconMockup({ palette }: { palette: ProjectPalette }) {
  const faint = (o: number): CSSProperties => ({
    color: palette.fg,
    opacity: o,
  });

  return (
    <div className="flex h-full flex-col px-7 py-6 sm:px-9 sm:py-7">
      {/* top nav */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-sm"
            style={{ backgroundColor: palette.accent }}
          />
          <span
            className="text-[11px] font-semibold tracking-tight"
            style={{ color: palette.fg }}
          >
            Beacon
          </span>
        </div>
        <div className="flex items-center gap-3 text-[9px]" style={faint(0.55)}>
          <span>Product</span>
          <span>Pricing</span>
          <span
            className="rounded-full px-2.5 py-1 text-[9px] font-medium"
            style={{ backgroundColor: palette.accent, color: palette.bg }}
          >
            Start free
          </span>
        </div>
      </div>

      {/* hero headline */}
      <div className="mt-6">
        <p
          className="text-[9px] tracking-[0.25em] uppercase"
          style={{ color: palette.accent }}
        >
          Analytics, quietly
        </p>
        <h3
          className="mt-2 max-w-[16ch] font-display text-2xl leading-[1.05] sm:text-[1.7rem]"
          style={{ color: palette.fg }}
        >
          See the signal, not the noise.
        </h3>
      </div>

      {/* dashboard card */}
      <div
        className="mt-auto rounded-lg p-4"
        style={{ backgroundColor: palette.fg }}
      >
        <div className="flex items-start justify-between">
          <span
            className="text-[9px] font-medium tracking-wide"
            style={{ color: tint(palette.bg, 0.6) }}
          >
            Weekly signal
          </span>
          <span
            className="text-[9px] font-semibold"
            style={{ color: palette.accent }}
          >
            ▲ 12.4%
          </span>
        </div>
        {/* bar chart */}
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor:
                  i === BARS.length - 1 ? palette.accent : palette.bg,
                opacity: i === BARS.length - 1 ? 1 : 0.26,
              }}
            />
          ))}
        </div>
      </div>

      {/* stat row */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div
            key={s.k}
            className="rounded-md px-3 py-2"
            style={{ backgroundColor: tint(palette.fg, 0.08) }}
          >
            <span
              className="block font-display text-sm"
              style={{ color: palette.fg }}
            >
              {s.v}
            </span>
            <span className="text-[8px] tracking-wide" style={faint(0.5)}>
              {s.k}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
