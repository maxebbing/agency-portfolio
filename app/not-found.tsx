import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Not found",
  description: "The page you were after isn't here.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <section aria-labelledby="not-found-heading">
          <Container className="flex min-h-[60vh] flex-col justify-center py-24 sm:py-32">
            <Reveal>
              <p className="text-hairline text-xs text-accent">
                Error 404
              </p>
              <h1
                id="not-found-heading"
                className="mt-6 max-w-3xl text-balance font-display text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl"
              >
                This page was never set
                <span className="text-accent">.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                A missing page, a mistyped address, or something I&apos;ve since
                taken down. Nothing here worth reading — but the work is a click
                away.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-10">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-300 ease-out group-hover:-translate-x-1"
                  >
                    ←
                  </span>
                  <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                    Back to the studio
                  </span>
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                    See selected work
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
