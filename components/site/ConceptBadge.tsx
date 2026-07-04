/**
 * Small pill labeling fictional-client work as concept — treated as a design
 * element (accent dot + hairline caps), not a disclaimer.
 */
export default function ConceptBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/80 px-3 py-1 text-[10px] text-hairline text-ink-muted backdrop-blur-sm ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      Concept
    </span>
  );
}
