import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ConceptBadge from "@/components/site/ConceptBadge";
import type { Project } from "@/lib/projects";
import { tint } from "@/components/home/mockups/tint";

/** Per-brand typographic wordmark treatment, painted in the project palette. */
function Wordmark({ project }: { project: Project }) {
  const { palette, slug } = project;

  if (slug === "beacon") {
    return (
      <span className="inline-flex items-baseline gap-4">
        <span
          className="inline-block h-5 w-5 translate-y-[-2px] rounded-sm sm:h-7 sm:w-7"
          style={{ backgroundColor: palette.accent }}
          aria-hidden="true"
        />
        <span className="font-sans text-6xl font-semibold tracking-tight sm:text-8xl">
          Beacon
        </span>
      </span>
    );
  }

  if (slug === "fern-and-frame") {
    return (
      <span className="font-display text-6xl font-light italic tracking-tight sm:text-8xl">
        Fern <span style={{ color: palette.accent }}>&amp;</span> Frame
      </span>
    );
  }

  // hearth-and-vine
  return (
    <span className="font-display text-6xl font-light tracking-tight sm:text-8xl">
      Hearth{" "}
      <em className="italic" style={{ color: palette.accent }}>
        &amp;
      </em>{" "}
      Vine
    </span>
  );
}

export default function CaseHero({ project }: { project: Project }) {
  const { palette, caseStudy } = project;

  return (
    <section aria-labelledby="case-heading">
      {/* Painted brand band */}
      <div style={{ backgroundColor: palette.bg, color: palette.fg }}>
        <Container className="flex min-h-[46vh] flex-col justify-between py-12 sm:min-h-[54vh] sm:py-14">
          <div className="flex items-center justify-between">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs"
              style={{ color: tint(palette.fg, 0.7) }}
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:-translate-x-1"
              >
                ←
              </span>
              <span className="text-hairline text-[10px]">All work</span>
            </Link>
            <ConceptBadge />
          </div>

          <Reveal>
            <div className="py-16 sm:py-20">
              <h1 id="case-heading">
                <Wordmark project={project} />
              </h1>
              <p
                className="mt-6 font-display text-xl italic sm:text-2xl"
                style={{ color: tint(palette.fg, 0.75) }}
              >
                {project.tagline}
              </p>
            </div>
          </Reveal>

          <div
            className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t pt-5 text-xs"
            style={{ borderColor: tint(palette.fg, 0.2) }}
          >
            <span className="text-hairline text-[10px]" style={{ color: tint(palette.fg, 0.6) }}>
              {project.sector}
            </span>
            <span className="text-hairline text-[10px]" style={{ color: tint(palette.fg, 0.6) }}>
              {project.year}
            </span>
            <span
              className="ml-auto text-hairline text-[10px]"
              style={{ color: tint(palette.fg, 0.6) }}
            >
              {project.services.join(" · ")}
            </span>
          </div>
        </Container>
      </div>

      {/* Editorial opener */}
      <Container className="py-20 sm:py-28">
        <Reveal>
          <p className="max-w-4xl text-balance font-display text-3xl font-light leading-[1.15] tracking-tight text-ink sm:text-5xl">
            {caseStudy.heroStatement}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
