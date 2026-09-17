"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { BrowserChrome } from "./BrowserChrome";
import type { GithubRepo } from "@/lib/github";
import { getLanguageColor } from "@/lib/languageColors";

const BADGE_STYLES: Record<GithubRepo["badge"], string> = {
  "open source": "verdict-open",
  "closed source": "verdict-closed",
  coursework: "verdict-coursework",
  hackathon: "verdict-hackathon",
  research: "verdict-research",
};

export function ProjectCard({
  repo,
  index,
}: {
  repo: GithubRepo;
  index: number;
}) {
  const urlPath = repo.htmlUrl.replace(/^https?:\/\//, "");
  const tags = repo.languages.slice(0, 4);
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: reduce ? 0 : (index % 2) * 0.06 }}
      className="group flex flex-col"
    >
      <BrowserChrome
        url={urlPath}
        imageSrc={`https://opengraph.githubassets.com/1/${urlPath.replace("github.com/", "")}`}
        imageAlt={`${repo.name} repository preview`}
      />

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="font-pixel text-sm text-ink">{repo.name}</h3>
        <span
          className={`shrink-0 border px-2 py-0.5 font-term text-sm ${BADGE_STYLES[repo.badge]}`}
        >
          {repo.badge}
        </span>
      </div>

      {repo.description && (
        <p className="mt-2 font-term text-lg leading-snug text-ink-dim">
          {repo.description}
        </p>
      )}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 border border-grid-line px-2 py-0.5 font-term text-base text-ink-faint"
            >
              <span
                className="h-2 w-2"
                style={{ backgroundColor: getLanguageColor(tag) }}
              />
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-4 font-term text-lg">
        <a
          href={repo.htmlUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-cyan hover:underline"
        >
          GitHub
          <ArrowUpRight weight="bold" className="h-3.5 w-3.5" />
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-cyan hover:underline"
          >
            Live
            <ArrowUpRight weight="bold" className="h-3.5 w-3.5" />
          </a>
        )}
        {repo.stars > 0 && (
          <span className="text-ink-faint">
            {repo.stars} star{repo.stars === 1 ? "" : "s"}
          </span>
        )}
      </div>
    </motion.div>
  );
}
