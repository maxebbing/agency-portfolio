import type { ProjectPalette } from "@/lib/projects";
import { tint } from "@/components/home/mockups/tint";

const POINTS = [18, 30, 24, 40, 36, 52, 48, 66, 60, 78];

/** Dashboard detail: the chart language at reading size. */
export default function BeaconChartDetail({
  palette,
}: {
  palette: ProjectPalette;
}) {
  const w = 300;
  const h = 120;
  const step = w / (POINTS.length - 1);
  const max = 100;
  const coords = POINTS.map(
    (p, i) => [i * step, h - (p / max) * h] as const
  );
  const path = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <div
      className="flex h-full flex-col justify-center rounded-xl px-8 py-10 sm:px-10"
      style={{ backgroundColor: palette.bg, color: palette.fg }}
    >
      <div className="flex items-baseline justify-between">
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: palette.accent }}
        >
          Chart language
        </p>
        <span
          className="text-xs tabular-nums"
          style={{ color: tint(palette.fg, 0.55) }}
        >
          Q2 · weekly
        </span>
      </div>

      <div className="mt-6">
        <svg
          viewBox={`0 0 ${w} ${h + 8}`}
          className="h-auto w-full"
          role="img"
          aria-label="Illustrative line chart rising steadily, drawn in the Beacon concept style"
        >
          {/* gridlines */}
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1="0"
              x2={w}
              y1={h * g}
              y2={h * g}
              stroke={tint(palette.fg, 0.12)}
              strokeWidth="1"
            />
          ))}
          {/* faint baseline series */}
          <path
            d={path}
            fill="none"
            stroke={tint(palette.fg, 0.22)}
            strokeWidth="1.5"
            transform={`translate(0 14)`}
          />
          {/* the line that matters */}
          <path
            d={path}
            fill="none"
            stroke={palette.accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={lastX} cy={lastY} r="4" fill={palette.accent} />
          <circle
            cx={lastX}
            cy={lastY}
            r="8"
            fill="none"
            stroke={palette.accent}
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="mt-6 flex items-baseline gap-6">
        <div>
          <span className="font-display text-3xl tabular-nums">78.4</span>
          <span
            className="ml-2 text-xs font-medium"
            style={{ color: palette.accent }}
          >
            ▲ 12.4%
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: tint(palette.fg, 0.55) }}>
          One accent color, one emphasized series. If everything glows,
          nothing does.
        </p>
      </div>
    </div>
  );
}
