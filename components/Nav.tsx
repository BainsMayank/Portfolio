export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border-color bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 text-sm sm:px-6">
        <a href="#top" className="text-muted-strong hover:text-foreground">
          mayank@bains
        </a>
        <div className="flex items-center gap-5">
          <a href="#projects" className="text-muted hover:text-foreground">
            projects
          </a>
          <a href="#activity" className="text-muted hover:text-foreground">
            activity
          </a>
          <a href="#contact" className="text-muted hover:text-foreground">
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}
