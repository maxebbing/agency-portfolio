import Link from "next/link";
import Container from "@/components/Container";
import { projects, type Project } from "@/lib/projects";

/** Prev/next chaining between the three case studies. */
export default function CaseNav({ current }: { current: Project }) {
  const index = projects.findIndex((p) => p.slug === current.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const items = [
    { label: "Previous", project: prev, arrow: "←", align: "left" as const },
    { label: "Next", project: next, arrow: "→", align: "right" as const },
  ];

  return (
    <nav aria-label="More case studies" className="border-t border-line">
      <Container className="grid sm:grid-cols-2">
        {items.map(({ label, project, arrow, align }) => (
          <Link
            key={label}
            href={`/work/${project.slug}`}
            className={`group flex flex-col gap-2 py-12 sm:py-16 ${
              align === "right"
                ? "border-t border-line sm:items-end sm:border-t-0 sm:border-l sm:pl-10 sm:text-right"
                : "sm:pr-10"
            }`}
          >
            <span className="text-hairline text-[10px] text-ink-muted">
              {label}
            </span>
            <span className="font-display text-3xl tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
              {align === "left" && (
                <span
                  aria-hidden="true"
                  className="mr-3 inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1.5"
                >
                  {arrow}
                </span>
              )}
              {project.client}
              {align === "right" && (
                <span
                  aria-hidden="true"
                  className="ml-3 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                >
                  {arrow}
                </span>
              )}
            </span>
            <span className="font-display text-sm italic text-ink-muted">
              {project.tagline}
            </span>
          </Link>
        ))}
      </Container>
    </nav>
  );
}
