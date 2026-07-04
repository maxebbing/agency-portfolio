import type { ProjectPalette } from "@/lib/projects";
import { tint } from "@/components/home/mockups/tint";

/** Menu-card close-up: the dotted-leader system at reading size. */
export default function HearthMenuDetail({
  palette,
}: {
  palette: ProjectPalette;
}) {
  return (
    <div
      className="flex h-full flex-col justify-center rounded-xl px-8 py-10 sm:px-10"
      style={{ backgroundColor: palette.bg, color: palette.fg }}
    >
      <p
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ color: palette.accent }}
      >
        Tonight
      </p>

      <div className="mt-5 flex items-baseline gap-3">
        <h4 className="font-display text-xl leading-tight sm:text-2xl">
          Chestnut &amp; sage agnolotti
        </h4>
        <span
          className="min-w-6 flex-1 translate-y-[-3px] border-b border-dotted"
          style={{ borderColor: tint(palette.fg, 0.35) }}
          aria-hidden="true"
        />
        <span
          className="font-display text-xl tabular-nums sm:text-2xl"
          style={{ color: palette.accent }}
        >
          24
        </span>
      </div>

      <p
        className="mt-3 max-w-md text-sm leading-relaxed"
        style={{ color: tint(palette.fg, 0.7) }}
      >
        Brown butter, crisped sage, pecorino. Pasta rolled this afternoon;
        gone when it&apos;s gone.
      </p>

      <div
        className="mt-8 border-t pt-5"
        style={{ borderColor: tint(palette.fg, 0.18) }}
      >
        <p
          className="font-display text-sm italic leading-relaxed"
          style={{ color: tint(palette.fg, 0.6) }}
        >
          “The chef writes the specials; the type system keeps them from
          looking like a ransom note.”
        </p>
      </div>
    </div>
  );
}
