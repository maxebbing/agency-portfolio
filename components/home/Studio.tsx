import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-hairline text-xs text-accent">The studio</p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <h2
                id="studio-heading"
                className="max-w-3xl text-balance font-display text-2xl leading-[1.28] tracking-tight text-ink sm:text-[2rem]"
              >
                Max Ebbing is a one-person web design studio. New, on purpose —
                so the person you talk to is the person doing the work.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10 grid gap-8 text-sm leading-relaxed text-ink-muted sm:grid-cols-2 sm:gap-12">
                <p>
                  I&apos;ve spent my career designing and building for the web,
                  and started this studio to do that work the way I think it
                  ought to be done: fewer projects, more attention, and a bias
                  toward restraint. I&apos;d rather ship one page that&apos;s
                  right than ten that are merely fine.
                </p>
                <p>
                  I care about typography, load times, and the quiet decisions
                  most people never notice — which is usually why the result
                  feels calm. If that sounds like the kind of care your project
                  is missing, we should talk. The case studies here are concept
                  work, made to show how I think.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
