// Sourced from GitHub Linguist's language-color list (the same colors
// GitHub itself renders next to a repo's primary language).
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Kotlin: "#A97BFF",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Swift: "#F05138",
  Ruby: "#701516",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  PLpgSQL: "#336790",
  SQL: "#e38c00",
  Shell: "#89e051",
  Dart: "#00B4AB",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Dockerfile: "#384d54",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
};

const FALLBACK_COLOR = "#8b8b93";

export function getLanguageColor(language: string): string {
  return LANGUAGE_COLORS[language] ?? FALLBACK_COLOR;
}
