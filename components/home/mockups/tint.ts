/**
 * Returns a hex color with an alpha channel appended (e.g. `#E8EDF7` + 0.08
 * → `#E8EDF714`). Used to tint backgrounds without applying `opacity` to a
 * container, which would also fade its children.
 */
export function tint(hex: string, alpha: number): string {
  const clamped = Math.max(0, Math.min(1, alpha));
  const a = Math.round(clamped * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${a}`;
}
