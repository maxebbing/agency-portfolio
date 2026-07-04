import type { ProjectPalette } from "@/lib/projects";
import { tint } from "@/components/home/mockups/tint";

/** Product-card close-up: one-of-a-kind object, honestly presented. */
export default function FernProductDetail({
  palette,
}: {
  palette: ProjectPalette;
}) {
  return (
    <div
      className="flex h-full flex-col justify-center rounded-xl px-8 py-10 sm:px-10"
      style={{ backgroundColor: palette.bg, color: palette.fg }}
    >
      <div className="flex items-center gap-8">
        {/* object plate */}
        <div
          className="flex h-36 w-32 shrink-0 items-center justify-center rounded-lg sm:h-40 sm:w-36"
          style={{ backgroundColor: tint(palette.fg, 0.09) }}
        >
          <div
            className="h-20 w-12 rounded-full rounded-t-md"
            style={{ backgroundColor: palette.accent, opacity: 0.9 }}
            aria-hidden="true"
          />
        </div>

        {/* card copy */}
        <div className="min-w-0">
          <p
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: palette.accent }}
          >
            One of one
          </p>
          <h4 className="mt-2 font-display text-xl leading-tight sm:text-2xl">
            Hand-thrown vase, no. 14
          </h4>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: tint(palette.fg, 0.7) }}
          >
            Stoneware, ochre glaze. Slight lean to the left — it came off the
            wheel that way, and we like it.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span
              className="font-display text-lg"
              style={{ color: palette.accent }}
            >
              $64
            </span>
            <span
              className="rounded-full border px-4 py-1.5 text-xs"
              style={{
                borderColor: tint(palette.fg, 0.3),
                color: tint(palette.fg, 0.85),
              }}
            >
              Add to bag
            </span>
          </div>
        </div>
      </div>

      <p
        className="mt-8 border-t pt-5 text-xs leading-relaxed"
        style={{
          borderColor: tint(palette.fg, 0.18),
          color: tint(palette.fg, 0.55),
        }}
      >
        Scarcity stated plainly, no countdown timer in sight.
      </p>
    </div>
  );
}
