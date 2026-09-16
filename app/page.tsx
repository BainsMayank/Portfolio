import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ContributionGraph } from "@/components/ContributionGraph";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Footer } from "@/components/Footer";
import { getGithubProfile, getGithubRepos, getContributions } from "@/lib/github";

export default async function Home() {
  const [profile, repos, contributions] = await Promise.all([
    getGithubProfile(),
    getGithubRepos(),
    getContributions(),
  ]);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero profile={profile} />
        <ContributionGraph data={contributions} />
        <ProjectGrid repos={repos} />
      </main>
      <Footer githubHandle={profile?.login ?? "BainsMayank"} />
    </>
  );
}
