import Link from "next/link";
import Container from "@/components/Container";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

/** Minimal, confident site header with a typographic wordmark. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5"
          aria-label="Max Ebbing — Web Design Studio, home"
        >
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Max Ebbing
          </span>
          <span className="hidden text-hairline text-[10px] text-ink-muted transition-colors group-hover:text-accent sm:inline">
            Web Design Studio
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative inline-block py-1 text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
