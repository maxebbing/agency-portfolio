import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BrowserFrame from "@/components/home/mockups/BrowserFrame";
import { MOCKUP_BODIES } from "@/components/home/mockups/registry";
import type { Project } from "@/lib/projects";
import { CASE_ART } from "./caseArt";

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 flex max-w-2xl items-baseline gap-3 text-xs leading-relaxed text-ink-muted">
      <span className="h-px w-6 shrink-0 translate-y-[-3px] bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

const SWATCH_ROLES: Array<{ key: "bg" | "fg" | "accent"; role: string }> = [
  { key: "bg", role: "Ground" },
  { key: "fg", role: "Type" },
  { key: "accent", role: "Accent" },
];

export default function CaseSpread({ project }: { project: Project }) {
  const { palette, caseStudy } = project;
  const art = CASE_ART[project.slug];
  const mock = MOCKUP_BODIES[project.slug];

  return (
    <section aria-labelledby="case-decisions" className="border-t border-line">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="text-hairline text-[11px] text-ink-muted">03</span>
            <p className="text-hairline text-xs text-accent">
              Design decisions
            </p>
          </div>
          <h2
            id="case-decisions"
            className="mt-4 max-w-lg font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl"
          >
            The system, shown at size.
          </h2>
        </Reveal>

        {/* Full-width browser mockup */}
        <Reveal delay={80}>
          <div className="mt-12">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_24px_60px_-32px_rgba(23,21,18,0.35)] sm:aspect-[16/9]">
              <BrowserFrame palette={palette} domain={mock.domain}>
                {/* Body rendered at 3/4 size and scaled up so the
                    micro-layout's type reads larger in the big frame. */}
                <div className="h-full sm:h-[75%] sm:w-[75%] sm:origin-top-left sm:scale-[1.3334]">
                  <mock.Body palette={palette} />
                </div>
              </BrowserFrame>
            </div>
            <Caption>{art.mockupCaption}</Caption>
          </div>
        </Reveal>

        {/* Detail + specimen */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col">
              <div className="min-h-[320px] flex-1 overflow-hidden rounded-xl shadow-[0_16px_44px_-28px_rgba(23,21,18,0.35)]">
                <art.Detail palette={palette} />
              </div>
              <Caption>{art.detailCaption}</Caption>
            </div>
          </Reveal>

          {/* Typography specimen */}
          <Reveal delay={80} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-xl border border-line px-8 py-8">
              <p className="text-hairline text-[10px] text-ink-muted">
                Typography
              </p>

              <div className="mt-6">
                <span
                  className={`block text-6xl leading-none text-ink ${art.specimen.displayClass}`}
                  aria-hidden="true"
                >
                  Aa
                </span>
                <p className="mt-4 font-medium text-ink">
                  {caseStudy.typography.display}
                  <span className="ml-2 text-hairline text-[10px] text-ink-muted">
                    Display
                  </span>
                </p>
                <p
                  className={`mt-1 truncate text-lg text-ink-muted ${art.specimen.displayClass}`}
                  aria-hidden="true"
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-medium text-ink">
                  {caseStudy.typography.text}
                  <span className="ml-2 text-hairline text-[10px] text-ink-muted">
                    Text
                  </span>
                </p>
                <p
                  className={`mt-1 text-sm leading-relaxed text-ink-muted ${art.specimen.textClass}`}
                  aria-hidden="true"
                >
                  The quick brown fox jumps over the lazy dog, then reads the
                  fine print.
                </p>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-ink-muted">
                {caseStudy.typography.note}
              </p>

              <p className="mt-auto pt-6 text-[11px] leading-relaxed text-ink-muted/80">
                Specimens rendered in this site&apos;s own faces as stand-ins;
                the concept names the intended cuts.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Palette */}
        <Reveal>
          <div className="mt-16 grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-hairline text-[10px] text-ink-muted">
                Palette
              </p>
              <div className="mt-5 flex gap-3">
                {SWATCH_ROLES.map(({ key, role }) => (
                  <div key={key} className="flex-1">
                    <div
                      className="h-16 rounded-lg border border-ink/10"
                      style={{ backgroundColor: palette[key] }}
                    />
                    <p className="mt-2 text-xs font-medium text-ink">{role}</p>
                    <p className="text-[11px] uppercase tabular-nums text-ink-muted">
                      {palette[key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-xl text-base leading-relaxed text-ink-muted lg:pt-7">
                {caseStudy.paletteNote}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
