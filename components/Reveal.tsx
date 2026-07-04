"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds applied to the reveal transition. */
  delay?: number;
}

const HIDDEN_CLASSES = ["opacity-0", "translate-y-4"];
const VISIBLE_CLASSES = ["opacity-100", "translate-y-0"];

/**
 * Fades and slides content into view once it enters the viewport.
 *
 * - Reveals only once (does not re-hide on scroll away).
 * - Honors `prefers-reduced-motion` by showing content immediately, unanimated.
 * - Renders visible by default (SSR and no-JS) and is only hidden imperatively
 *   once an effect confirms IntersectionObserver support, so content is never
 *   left hidden without a working observer to reveal it again.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      // Nothing to animate: leave content visible as rendered by default.
      return;
    }

    // JS + IntersectionObserver are available: hide, then reveal once the
    // element scrolls into view. Done imperatively (not via React state) so
    // there is never a render where the observer has failed to attach yet
    // content is hidden.
    node.classList.remove(...VISIBLE_CLASSES);
    node.classList.add(...HIDDEN_CLASSES);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.remove(...HIDDEN_CLASSES);
            node.classList.add(...VISIBLE_CLASSES);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-100 translate-y-0 transition-all duration-700 ease-out motion-reduce:transition-none ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
