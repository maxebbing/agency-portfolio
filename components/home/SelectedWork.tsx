import type { ComponentType } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/lib/projects";
import BrowserFrame from "./mockups/BrowserFrame";
import HearthMockup from "./mockups/HearthMockup";
import BeaconMockup from "./mockups/BeaconMockup";
import FernMockup from "./mockups/FernMockup";

const MOCKUPS: Record<
  string,
  { domain: string; Body: ComponentType<{ palette: Project["palette"] }> }
> = {
  "hearth-and-vine": { domain: "hearthandvine.cafe", Body: HearthMockup },
  beacon: { domain: "beacon.io", Body: BeaconMockup },
  "fern-and-frame": { domain: "fernandframe.shop", Body: FernMockup },
};

function ConceptBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/80 px-3 py-1 text-[10px] text-hairline text-ink-muted backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      Concept
    </span>
  );
}

function WorkCard({ project, index }: { project: Project; index: number }) {
  const mock = MOCKUPS[project.slug];
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
      >
        {/* Mockup */}
        <div
          className={`lg:col-span-7 ${flip ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="relative aspect-[4/3] w-full transition-all duration-500 ease-out will-change-transform group-hover:-translate-y-1.5 sm:aspect-[16/10]">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-line/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="h-full overflow-hidden rounded-xl shadow-[0_1px_2px_rgba(23,21,18,0.06)] transition-shadow duration-500 group-hover:shadow-[0_24px_60px_-24px_rgba(23,21,18,0.35)]">
              <BrowserFrame palette={project.palette} domain={mock.domain}>
                <mock.Body palette={project.palette} />
              </BrowserFrame>
            </div>
            <div className="absolute left-3 top-3">
              <ConceptBadge />
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="flex items-center gap-3 text-hairline text-[11px] text-ink-muted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-line" aria-hidden="true" />
            <span>{project.sector}</span>
          </div>

          <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            {project.client}
          </h3>

          <p className="mt-3 font-display text-lg italic leading-snug text-accent">
            {project.tagline}
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
            {project.services.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    className="h-1 w-1 rounded-full bg-line"
                    aria-hidden="true"
                  />
                )}
                {s}
              </span>
            ))}
          </div>

          <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink">
            <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
              View the concept
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-hairline text-xs text-accent">
                Selected work
              </p>
              <h2
                id="work-heading"
                className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl"
              >
                Three concepts, made to think through the details.
              </h2>
            </div>
            <p className="hidden max-w-[16ch] text-sm leading-relaxed text-ink-muted lg:block">
              Self-initiated projects — imagined clients, real craft.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
          {projects.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
