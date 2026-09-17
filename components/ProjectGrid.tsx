import { ProjectCard } from "./ProjectCard";
import type { GithubRepo } from "@/lib/github";

export function ProjectGrid({ repos }: { repos: GithubRepo[] }) {
  return (
    <section id="projects" className="border-b-2 border-screen-inset">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="font-pixel text-xl text-ink">Projects</h2>
        <p className="mt-2 font-term text-lg text-ink-dim">
          Pulled live from{" "}
          <a
            href="https://github.com/BainsMayank"
            target="_blank"
            rel="noreferrer"
            className="text-cyan underline decoration-cyan-dim underline-offset-4 hover:decoration-cyan"
          >
            github.com/BainsMayank
          </a>
        </p>

        {repos.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.name} repo={repo} index={i} />
            ))}
          </div>
        ) : (
          <p className="mt-8 font-term text-lg text-ink-dim">
            Project data is temporarily unavailable. Check back shortly.
          </p>
        )}
      </div>
    </section>
  );
}
