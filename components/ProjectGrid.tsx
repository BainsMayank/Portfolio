import { ProjectCard } from "./ProjectCard";
import type { GithubRepo } from "@/lib/github";

export function ProjectGrid({ repos }: { repos: GithubRepo[] }) {
  return (
    <section id="projects" className="border-b border-border-color">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="mt-2 text-sm text-muted">
          Pulled live from{" "}
          <a
            href="https://github.com/BainsMayank"
            target="_blank"
            rel="noreferrer"
            className="text-accent-teal hover:underline"
          >
            github.com/BainsMayank
          </a>
        </p>

        {repos.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {repos.map((repo) => (
              <ProjectCard key={repo.name} repo={repo} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted">
            Project data is temporarily unavailable. Check back shortly.
          </p>
        )}
      </div>
    </section>
  );
}
