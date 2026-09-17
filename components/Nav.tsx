const LINKS = [
  { key: "F1", label: "projects", href: "#projects" },
  { key: "F2", label: "activity", href: "#activity" },
  { key: "F3", label: "contact", href: "#contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-screen-inset bg-screen-raised">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-2 px-3 sm:px-6">
        <a
          href="#top"
          className="font-pixel glitch-hover shrink-0 text-[11px] text-ink sm:text-sm"
        >
          mayank@bains
        </a>
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto">
          <span aria-hidden className="mr-1 h-2 w-2 shrink-0 cycle-dot sm:mr-2" />
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={`${link.key}: jump to ${link.label}`}
              className="bevel-out group flex shrink-0 items-center gap-1 px-1.5 py-1 text-sm text-ink-dim transition-colors hover:text-accent sm:gap-1.5 sm:px-2"
            >
              <span className="font-pixel text-[10px] text-accent-dim group-hover:text-accent">
                {link.key}
              </span>
              <span className="hidden font-term text-base leading-none sm:inline">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
