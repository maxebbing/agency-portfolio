import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ConceptBadge from "@/components/site/ConceptBadge";
import BrowserFrame from "@/components/home/mockups/BrowserFrame";
import { MOCKUP_BODIES } from "@/components/home/mockups/registry";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Max Ebbing",
  description:
    "Self-initiated concept projects exploring brand identity and web design for fictional clients.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {/* Index header */}
        <section aria-labelledby="work-index-heading">
          <Container className="pt-20 pb-14 sm:pt-28 sm:pb-16">
            <Reveal>
              <p className="text-hairline text-xs text-accent">Index</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
                <h1
                  id="work-index-heading"
                  className="font-display text-6xl font-light tracking-tight text-ink sm:text-8xl"
                >
                  Work
                </h1>
                <p className="max-w-sm pb-2 text-sm leading-relaxed text-ink-muted sm:pb-4">
                  Three self-initiated concept projects for fictional clients —
                  imagined stakes, real decisions. Each one is how I think
                  through a kind of work I want more of.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Table of contents */}
        <section aria-label="All case studies">
          <Container>
            <ol className="border-t border-line">
              {projects.map((project, index) => {
                const mock = MOCKUP_BODIES[project.slug];
                return (
                  <li key={project.slug} className="border-b border-line">
                    <Reveal delay={index * 70}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="group grid grid-cols-1 items-center gap-x-10 gap-y-6 py-10 sm:py-12 lg:grid-cols-12"
                      >
                        {/* Number + names */}
                        <div className="lg:col-span-6">
                          <div className="flex items-baseline gap-5">
                            <span className="text-hairline text-[11px] text-ink-muted">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h2 className="font-display text-4xl tracking-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-6xl">
                                {project.client}
                              </h2>
                              <p className="mt-3 font-display text-base italic text-ink-muted sm:text-lg">
                                {project.tagline}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Meta column */}
                        <div className="pl-10 lg:col-span-3 lg:pl-0">
                          <p className="text-hairline text-[10px] text-ink-muted">
                            {project.sector} · {project.year}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                            {project.services.join(" / ")}
                          </p>
                          <span className="mt-3 inline-block">
                            <ConceptBadge />
                          </span>
                        </div>

                        {/* Compact mockup plate (rendered large, scaled down) */}
                        <div className="hidden justify-end lg:col-span-3 lg:flex">
                          <div
                            aria-hidden="true"
                            className="h-[150px] w-[210px] overflow-hidden rounded-lg shadow-[0_10px_30px_-16px_rgba(23,21,18,0.4)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-1"
                          >
                            <div className="h-[300px] w-[420px] origin-top-left scale-50">
                              <BrowserFrame
                                palette={project.palette}
                                domain={mock.domain}
                              >
                                <mock.Body palette={project.palette} />
                              </BrowserFrame>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                );
              })}
            </ol>

            <p className="py-10 text-xs leading-relaxed text-ink-muted">
              All case studies on this site are self-initiated concept projects
              — the clients are fictional, the craft is not.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
