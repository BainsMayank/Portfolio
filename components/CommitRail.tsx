"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "top", label: "identity" },
  { id: "activity", label: "activity" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

const ROW_HEIGHT = 56;

/**
 * The site's navigation rendered as a git commit graph: one branch, one node
 * per section. The active node's glow glides along the line via a plain CSS
 * transition on `top` rather than the View Transitions API: calling
 * startViewTransition from an IntersectionObserver that can fire during
 * hydration reliably corrupted the page's paint in testing.
 */
export function CommitRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = NODES.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = sections.findIndex((s) => s === visible.target);
        if (index === -1) return;
        setActiveIndex(index);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section commit graph"
      className="fixed top-1/2 left-8 z-10 hidden -translate-y-1/2 xl:block"
    >
      <div ref={railRef} className="relative pl-5">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-bevel-light"
        />
        <div
          aria-hidden
          className="absolute left-0 h-4 w-4 rounded-full bg-cyan shadow-[0_0_0_4px_var(--cyan-dark)] transition-[top] duration-300 ease-out"
          style={{ top: activeIndex * ROW_HEIGHT + 4 }}
        />
        <ul className="flex flex-col" style={{ gap: `${ROW_HEIGHT - 16}px` }}>
          {NODES.map((node, i) => (
            <li key={node.id} className="relative h-4">
              <a
                href={`#${node.id}`}
                className="group -ml-5 flex items-center gap-3 py-2 pl-5"
              >
                <span
                  aria-hidden
                  className={`h-2.5 w-2.5 shrink-0 border ${
                    i === activeIndex
                      ? "border-cyan bg-cyan"
                      : "border-bevel-light bg-screen-inset group-hover:border-ink-dim"
                  }`}
                />
                <span
                  className={`font-term text-lg leading-none whitespace-nowrap transition-colors ${
                    i === activeIndex
                      ? "text-cyan"
                      : "text-ink-faint group-hover:text-ink-dim"
                  }`}
                >
                  {node.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
