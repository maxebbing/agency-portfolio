import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

/** Oversized editorial hero statement — the moment the site lives or dies. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
        <Reveal>
          <p className="text-hairline text-xs text-accent">
            Independent web design &amp; development
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-5xl text-balance font-display text-[2.75rem] font-light leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[5.5rem]">
            I build websites the way
            <br className="hidden sm:block" /> good books are set
            <span className="text-accent">—</span>
            <br className="hidden sm:block" /> with{" "}
            <em className="font-normal italic text-ink">patience</em>, and a
            point of view.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex max-w-2xl flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-start sm:gap-10">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              I&apos;m Max Ebbing — a designer and developer running a small,
              deliberate studio. I make quiet, type-driven websites for studios,
              makers, and small teams who sweat the details.
            </p>
            <a
              href="#work"
              className="group inline-flex shrink-0 items-center gap-2 self-start whitespace-nowrap text-sm font-medium text-ink"
            >
              <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                See selected work
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-y-0.5 group-hover:text-accent"
              >
                ↓
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
