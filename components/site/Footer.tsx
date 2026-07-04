import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const EMAIL = "max.k.ebbing@gmail.com";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-line bg-ink text-paper"
    >
      <Container className="py-24 sm:py-32">
        <Reveal>
          <p className="text-hairline text-xs text-accent">Contact</p>
          <h2 className="mt-8 max-w-4xl text-balance font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Have something worth
            <br className="hidden sm:block" /> making{" "}
            <em className="italic text-accent">well</em>?
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/60">
            I take on a handful of projects at a time. Tell me what you&apos;re
            building and where it&apos;s stuck — I&apos;ll tell you honestly
            whether I&apos;m the right person for it.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={`mailto:${EMAIL}?subject=Project%20enquiry`}
            className="group mt-12 inline-flex items-baseline gap-3 font-display text-2xl tracking-tight text-paper sm:text-4xl"
          >
            <span className="border-b border-paper/25 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
              {EMAIL}
            </span>
            <span
              aria-hidden="true"
              className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-sm text-paper/80">
            Max Ebbing — Web Design Studio
          </p>
          <p className="max-w-md leading-relaxed sm:text-right">
            © 2026 Max Ebbing. Portfolio case studies are self-initiated concept
            projects for fictional clients.
          </p>
        </div>
      </Container>
    </footer>
  );
}
