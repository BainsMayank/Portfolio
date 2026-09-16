const GITHUB_USERNAME = "BainsMayank";
const REVALIDATE_SECONDS = 3600;

export interface GithubProfile {
  login: string;
  name: string | null;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  htmlUrl: string;
}

export interface GithubRepo {
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  stars: number;
  pushedAt: string;
  primaryLanguage: string | null;
  languages: string[];
  topics: string[];
  badge: "open source" | "closed source" | "coursework" | "hackathon" | "research";
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionData {
  totalLastYear: number;
  days: ContributionDay[];
}

function inferBadge(topics: string[]): GithubRepo["badge"] {
  const t = topics.map((x) => x.toLowerCase());
  if (t.some((x) => x.includes("hackathon"))) return "hackathon";
  if (t.some((x) => x.includes("coursework") || x.includes("course") || x.includes("assignment"))) return "coursework";
  if (t.some((x) => x.includes("research") || x.includes("paper"))) return "research";
  return "open source";
}

export async function getGithubProfile(): Promise<GithubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      login: data.login,
      name: data.name,
      avatarUrl: data.avatar_url,
      publicRepos: data.public_repos,
      followers: data.followers,
      htmlUrl: data.html_url,
    };
  } catch {
    return null;
  }
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );
    if (!res.ok) return [];
    const all = await res.json();

    const candidates = (all as Record<string, unknown>[]).filter(
      (r) => !r.fork && !r.archived && (r.size as number) > 0
    );

    const withLanguages = await Promise.all(
      candidates.map(async (r) => {
        let languages: string[] = [];
        try {
          const langRes = await fetch(r.languages_url as string, {
            headers: { Accept: "application/vnd.github+json" },
            next: { revalidate: REVALIDATE_SECONDS },
          });
          if (langRes.ok) {
            const langData = await langRes.json();
            languages = Object.keys(langData);
          }
        } catch {
          // languages endpoint failure is non-fatal, fall back below
        }
        if (languages.length === 0 && r.language) {
          languages = [r.language as string];
        }
        const repo: GithubRepo = {
          name: r.name as string,
          description: (r.description as string) || null,
          htmlUrl: r.html_url as string,
          homepage: (r.homepage as string) || null,
          stars: r.stargazers_count as number,
          pushedAt: r.pushed_at as string,
          primaryLanguage: (r.language as string) || languages[0] || null,
          languages,
          topics: (r.topics as string[]) || [],
          badge: inferBadge((r.topics as string[]) || []),
        };
        return repo;
      })
    );

    return withLanguages.sort(
      (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
    );
  } catch {
    return [];
  }
}

export async function getContributions(): Promise<ContributionData> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) return { totalLastYear: 0, days: [] };
    const data = await res.json();
    return {
      totalLastYear: data.total?.lastYear ?? 0,
      days: (data.contributions ?? []) as ContributionDay[],
    };
  } catch {
    return { totalLastYear: 0, days: [] };
  }
}
