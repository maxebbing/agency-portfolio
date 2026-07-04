import type { CSSProperties, ReactNode } from "react";
import type { ProjectPalette } from "@/lib/projects";
import { tint } from "./tint";

interface BrowserFrameProps {
  palette: ProjectPalette;
  domain: string;
  children: ReactNode;
}

/**
 * Hand-built browser-chrome wrapper. Renders traffic-light controls and an
 * address pill, then paints the body in the project's own palette. The mockup
 * bodies passed as children are abstract-but-evocative micro-layouts.
 */
export default function BrowserFrame({
  palette,
  domain,
  children,
}: BrowserFrameProps) {
  const bodyStyle: CSSProperties = {
    backgroundColor: palette.bg,
    color: palette.fg,
  };

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/[0.03]"
      style={{ borderColor: palette.bg }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{ backgroundColor: palette.bg }}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          {[0.9, 0.55, 0.3].map((o) => (
            <span
              key={o}
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: palette.fg, opacity: o * 0.35 }}
            />
          ))}
        </div>
        <div
          className="mx-auto flex w-1/2 min-w-0 items-center justify-center gap-1.5 rounded-full px-3 py-1"
          style={{ backgroundColor: tint(palette.fg, 0.08) }}
        >
          <span
            className="truncate text-[10px] tracking-wide"
            style={{ color: tint(palette.fg, 0.75) }}
          >
            {domain}
          </span>
        </div>
        <div className="w-[42px]" aria-hidden="true" />
      </div>

      {/* Painted body */}
      <div className="relative flex-1 overflow-hidden" style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
