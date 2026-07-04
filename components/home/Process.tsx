import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Orient",
    body: "We start with questions, not layouts. Who is this for, what has to be true, and what does success actually look like? I read the room before I open the canvas.",
  },
  {
    n: "02",
    title: "Shape",
    body: "Structure first — content order, hierarchy, and typography. We agree on the bones and the voice while they're still cheap to change.",
  },
  {
    n: "03",
    title: "Build",
    body: "I design in code with real content, at real widths. You see the site working in a browser early and often, not as a flat picture of one.",
  },
  {
    n: "04",
    title: "Launch & tend",
    body: "We ship, then refine the edges. You get a site you can run yourself, plus a short window where I'm still on hand for the details.",
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="border-t border-line py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <p className="text-hairline text-xs text-accent">How it goes</p>
          <h2
            id="process-heading"
            className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink sm:text-5xl"
          >
            A calm process, from first question to launch.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <li className="border-t border-line pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl leading-none text-accent">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
