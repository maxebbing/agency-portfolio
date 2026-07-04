import type { CSSProperties } from "react";
import type { ProjectPalette } from "@/lib/projects";

const MENU = [
  { name: "Chestnut & sage agnolotti", price: "24" },
  { name: "Wood-roast carrots, honey", price: "16" },
  { name: "Dry-aged sirloin, marrow", price: "38" },
];

/** Bistro menu page — warm, handset, seasonal. */
export default function HearthMockup({ palette }: { palette: ProjectPalette }) {
  const faint = (o: number): CSSProperties => ({
    color: palette.fg,
    opacity: o,
  });

  return (
    <div className="flex h-full flex-col px-7 py-6 sm:px-9 sm:py-7">
      {/* header row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[9px] tracking-[0.25em] uppercase"
          style={faint(0.6)}
        >
          Est. 2026
        </span>
        <span
          className="text-[9px] tracking-[0.25em] uppercase"
          style={faint(0.6)}
        >
          Dinner · Wed–Sun
        </span>
      </div>

      {/* wordmark */}
      <div className="mt-auto">
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: palette.accent }}
        >
          Seasonal Menu
        </p>
        <h3
          className="mt-2 font-display text-3xl leading-none sm:text-4xl"
          style={{ color: palette.fg }}
        >
          Hearth
          <span style={{ color: palette.accent }}> &amp; </span>
          Vine
        </h3>
      </div>

      {/* menu list with dotted leaders */}
      <ul className="mt-6 space-y-3">
        {MENU.map((item) => (
          <li key={item.name} className="flex items-baseline gap-2 text-xs">
            <span style={faint(0.92)}>{item.name}</span>
            <span
              className="min-w-4 flex-1 translate-y-[-2px] border-b border-dotted"
              style={{ borderColor: palette.fg, opacity: 0.3 }}
            />
            <span
              className="font-display tabular-nums"
              style={{ color: palette.accent }}
            >
              {item.price}
            </span>
          </li>
        ))}
      </ul>

      <p
        className="mt-6 max-w-[22ch] font-display text-[11px] leading-snug italic"
        style={faint(0.55)}
      >
        “The menu changes when the market does.”
      </p>
    </div>
  );
}
