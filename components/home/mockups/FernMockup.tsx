import type { CSSProperties } from "react";
import type { ProjectPalette } from "@/lib/projects";
import { tint } from "./tint";

const PRODUCTS = [
  { name: "Stoneware planter", price: "48", motif: "pot" },
  { name: "Trailing pothos", price: "22", motif: "plant" },
  { name: "Ash side table", price: "180", motif: "table" },
  { name: "Hand-thrown vase", price: "64", motif: "vase" },
] as const;

/** Plant & pottery shop — a quiet product grid. */
export default function FernMockup({ palette }: { palette: ProjectPalette }) {
  const faint = (o: number): CSSProperties => ({
    color: palette.fg,
    opacity: o,
  });

  const Motif = ({ kind }: { kind: (typeof PRODUCTS)[number]["motif"] }) => {
    if (kind === "plant") {
      return (
        <div className="flex items-end gap-0.5">
          <span
            className="h-6 w-1.5 -rotate-12 rounded-full"
            style={{ backgroundColor: tint(palette.fg, 0.55) }}
          />
          <span
            className="h-8 w-1.5 rounded-full"
            style={{ backgroundColor: tint(palette.fg, 0.7) }}
          />
          <span
            className="h-5 w-1.5 rotate-12 rounded-full"
            style={{ backgroundColor: tint(palette.fg, 0.55) }}
          />
        </div>
      );
    }
    if (kind === "vase") {
      return (
        <div
          className="h-8 w-5 rounded-full rounded-t-sm"
          style={{ backgroundColor: palette.accent, opacity: 0.85 }}
        />
      );
    }
    if (kind === "table") {
      return (
        <div className="flex flex-col items-center">
          <span
            className="h-1.5 w-9 rounded-full"
            style={{ backgroundColor: tint(palette.fg, 0.6) }}
          />
          <div className="mt-0.5 flex w-9 justify-between px-1">
            <span
              className="h-6 w-1 rounded-full"
              style={{ backgroundColor: tint(palette.fg, 0.4) }}
            />
            <span
              className="h-6 w-1 rounded-full"
              style={{ backgroundColor: tint(palette.fg, 0.4) }}
            />
          </div>
        </div>
      );
    }
    // pot
    return (
      <div
        className="h-7 w-8"
        style={{
          backgroundColor: tint(palette.fg, 0.6),
          clipPath: "polygon(12% 0, 88% 0, 74% 100%, 26% 100%)",
        }}
      />
    );
  };

  return (
    <div className="flex h-full flex-col px-7 py-6 sm:px-9 sm:py-7">
      {/* nav */}
      <div className="flex items-center justify-between">
        <span
          className="font-display text-sm tracking-tight"
          style={{ color: palette.fg }}
        >
          Fern <span style={{ color: palette.accent }}>&amp;</span> Frame
        </span>
        <div className="flex items-center gap-3 text-[9px]" style={faint(0.55)}>
          <span>Shop</span>
          <span>Journal</span>
          <span
            className="rounded-full border px-2 py-0.5"
            style={{ borderColor: tint(palette.fg, 0.3) }}
          >
            Bag · 2
          </span>
        </div>
      </div>

      <p
        className="mt-4 text-[9px] tracking-[0.25em] uppercase"
        style={{ color: palette.accent }}
      >
        New this week
      </p>

      {/* product grid */}
      <div className="mt-3 grid flex-1 grid-cols-2 gap-2.5">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="flex flex-col">
            <div
              className="flex flex-1 items-center justify-center rounded-md"
              style={{ backgroundColor: tint(palette.fg, 0.09) }}
            >
              <Motif kind={p.motif} />
            </div>
            <div className="mt-1.5 flex items-baseline justify-between">
              <span className="text-[9px]" style={faint(0.85)}>
                {p.name}
              </span>
              <span
                className="font-display text-[10px]"
                style={{ color: palette.accent }}
              >
                ${p.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
