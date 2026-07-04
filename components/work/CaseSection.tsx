import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

interface CaseSectionProps {
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
  id?: string;
}

/** Numbered editorial prose section: label column left, prose right. */
export default function CaseSection({
  number,
  label,
  title,
  paragraphs,
  id,
}: CaseSectionProps) {
  const headingId = id ?? `case-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <section aria-labelledby={headingId} className="border-t border-line">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="text-hairline text-[11px] text-ink-muted">
                  {number}
                </span>
                <p className="text-hairline text-xs text-accent">{label}</p>
              </div>
              <h2
                id={headingId}
                className="mt-4 max-w-xs font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl"
              >
                {title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <div className="max-w-2xl space-y-6 text-base leading-relaxed text-ink-muted">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
