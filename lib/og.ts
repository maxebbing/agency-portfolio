import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FONT_DIR = join(process.cwd(), "lib", "og-fonts");

/** Shared canvas size for every Open Graph image. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Loads the display/text fonts used across the OG image routes. Vendored as
 * static TTFs (next/og / satori cannot read next/font), read from disk at
 * build time so image generation never depends on the network.
 */
export async function loadOgFonts() {
  const [fraunces, frauncesItalic, inter] = await Promise.all([
    readFile(join(FONT_DIR, "Fraunces-Normal.ttf")),
    readFile(join(FONT_DIR, "Fraunces-Italic.ttf")),
    readFile(join(FONT_DIR, "Inter-Medium.ttf")),
  ]);

  return [
    { name: "Fraunces", data: fraunces, weight: 400 as const, style: "normal" as const },
    { name: "Fraunces", data: frauncesItalic, weight: 400 as const, style: "italic" as const },
    { name: "Inter", data: inter, weight: 500 as const, style: "normal" as const },
  ];
}
