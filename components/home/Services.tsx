import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    title: "Web design",
    body: "Editorial layouts, type systems, and a considered grid. Design done in the browser, at real widths, with real words in place.",
  },
  {
    title: "Development",
    body: "Fast, accessible front-ends in React and Next.js. Semantic markup, sensible performance, and code the next person can read.",
  },
  {
    title: "Brand & identity",
    body: "Wordmarks, type pairings, and the small rules that hold a brand together — enough system to be consistent, not so much it goes stiff.",
  },
  {
    title: "Art direction",
    body: "A point of view for how the work should look and feel: typography, colour, imagery, and the pace between them.",
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-line py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-hairline text-xs text-accent">What I do</p>
              <h2
                id="services-heading"
                className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl"
              >
                A small set of things, done properly.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
                I take a project from first sketch to shipped site. Usually all
                of the below; sometimes just the part you&apos;re missing.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <dl className="divide-y divide-line border-t border-line">
              {SERVICES.map((service, i) => (
                <Reveal key={service.title} delay={i * 60}>
                  <div className="group grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:gap-8">
                    <dt className="flex items-baseline gap-4 sm:col-span-5">
                      <span className="text-hairline text-[11px] text-ink-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-accent">
                        {service.title}
                      </span>
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink-muted sm:col-span-7">
                      {service.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
