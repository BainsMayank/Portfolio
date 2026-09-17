# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Mayank Bains for software engineering roles (internships/new-grad). Secondary: general tech community (peers, competitive programming, open-source collaborators) browsing activity and projects.

## Product Purpose

A personal portfolio site for Mayank Bains that proves engineering ability through live, verifiable GitHub signal (real repos, real commit activity) rather than static claims. Success = a recruiter can quickly assess his projects and activity and has a low-friction way to reach out (email/GitHub).

## Positioning

Unlike a static resume-as-webpage, the site pulls its evidence live from the GitHub API (profile, repos, contribution graph) at request time — the portfolio's credibility comes from data a visitor could independently verify on GitHub, not from copy the owner wrote about himself.

## Operating Context

- Single-page site (Next.js App Router): Nav → Hero → GitHub Activity (contribution graph) → Projects (GitHub-sourced grid) → Footer/contact.
- Data flows: `lib/github.ts` fetches `getGithubProfile`, `getGithubRepos` (filtered to non-fork, non-archived, sized repos, with per-repo language breakdown), and `getContributions` (via jogruber's contributions API), each revalidated hourly. All three fetches degrade gracefully to null/empty on failure and the UI must keep rendering (empty-state copy, not a crash).
- Repos are auto-badged (open source / closed source / coursework / hackathon / research) by inferring from GitHub topics — this classification logic is a product mechanism to preserve, not just current styling.

## Capabilities and Constraints

- GitHub username is `BainsMayank`; do not hardcode or fabricate repo names, stats, or contribution counts — all project and activity content must continue to come from the live API calls in `lib/github.ts`.
- No CMS/backend beyond the GitHub API integration; content changes happen by pushing repos to GitHub, not by editing site copy.
- Project preview images use GitHub's Open Graph image service (`opengraph.githubassets.com`) per repo — an external image dependency to keep working.

## Brand Commitments

- Name: Mayank Bains. Role truth: math & computing student, focused on software engineering, competitive programming, and growing ML interest.
- Contact channels are fixed and must remain exactly: email `bainsmayank@icloud.com` (shown obfuscated with a copy-to-clipboard control) and GitHub `@BainsMayank`. No other contact channels are to be introduced.
- Visual identity is explicitly NOT fixed: the current dark/monospace/teal-amber dev-terminal look is being fully replaced (see redesign in progress) — treat it as anti-reference only, not a constraint.

## Evidence on Hand

- Live data only: GitHub profile, repos, and contribution graph via the public GitHub REST API and the jogruber contributions API. No fabricated testimonials, case studies, employers, or metrics exist or should be invented.

## Product Principles

1. Real signal over self-description — let live GitHub data carry the credibility.
2. Never fabricate content where live data is absent; degrade to honest empty states.
3. Fast, low-friction path from landing to "view GitHub" / "copy email" for a recruiter skimming quickly.
4. One page, no fluff — every section earns its place for a time-constrained recruiter audience.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility (keyboard focus, reduced-motion support already present in current implementation).
