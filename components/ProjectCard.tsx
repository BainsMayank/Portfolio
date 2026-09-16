import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BrowserChrome } from "./BrowserChrome";
import type { GithubRepo } from "@/lib/github";
import { getLanguageColor } from "@/lib/languageColors";

const BADGE_STYLES: Record<GithubRepo["badge"], string> = {
  "open source": "border-accent-teal/50 text-accent-teal",
  "closed source": "border-border-color-strong text-muted-strong",
  coursework: "border-accent-amber/50 text-accent-amber",
  hackathon: "border-[hsl(350_45%_58%)]/50 text-[hsl(350_45%_68%)]",
  research: "border-[hsl(210_50%_60%)]/50 text-[hsl(210_50%_70%)]",
};

export function ProjectCard({ repo }: { repo: GithubRepo }) {
  const urlPath = repo.htmlUrl.replace(/^https?:\/\//, "");
  const tags = repo.languages.slice(0, 4);

  return (
    <div className="group flex flex-col">
      <BrowserChrome
        url={urlPath}
        imageSrc={`https://opengraph.githubassets.com/1/${urlPath.replace("github.com/", "")}`}
        imageAlt={`${repo.name} repository preview`}
      />

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground">
          {repo.name}
        </h3>
        <span
          className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] ${BADGE_STYLES[repo.badge]}`}
        >
          {repo.badge}
        </span>
      </div>

      {repo.description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-strong">
          {repo.description}
        </p>
      )}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-md border border-border-color px-2 py-0.5 text-[11px] text-muted"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: getLanguageColor(tag) }}
              />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-4 text-sm">
        <a
          href={repo.htmlUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-accent-teal hover:underline"
        >
          GitHub
          <ArrowUpRight weight="bold" className="h-3.5 w-3.5" />
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-accent-teal hover:underline"
          >
            Live
            <ArrowUpRight weight="bold" className="h-3.5 w-3.5" />
          </a>
        )}
        {repo.stars > 0 && (
          <span className="text-muted">
            {repo.stars} star{repo.stars === 1 ? "" : "s"}
          </span>
        )}
      </div>
    </div>
  );
}
