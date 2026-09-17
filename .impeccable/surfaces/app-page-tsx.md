---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

## Scope

Full-site redesign (Experience mode): Nav, Hero, GitHub Activity (contribution graph), Projects grid, Footer — one page, `app/page.tsx` and all components under `components/`.

## Audience, job, action, constraints

Recruiters/hiring managers skimming quickly for signal that Mayank Bains can ship real software; secondary audience is the general tech/competitive-programming community. Job: assess projects and activity fast, then reach out (GitHub / email). Constraints: GitHub-sourced data (profile, repos, contribution graph) must stay live and unfabricated; email `bainsmayank@icloud.com` and GitHub `@BainsMayank` are the only contact channels; graceful empty states when the API is down; standard accessibility (keyboard focus, reduced-motion) preserved.

## Direction contract

**THESIS:** The site is not decorated with pixel motifs — it *is* a booted-up 16-color computer, and the visitor's own recruiting judgment is proven the same way Mayank's engineering is: by reading real, live data through a locked, honest system, not by a moody dark-mode dev-blog template (the category default this replaces) or a glossy gradient-and-3D personal-brand site (its predictable opposite).

**OWN-WORLD:** A locked 16-color palette (PC-98/early-computer canon: near-black ground, phosphor-cyan, verdict-green, verdict-red, warning-amber, paper-white, three tone-steps of each for dither) rendered through a pixel bitmap display face at a fixed cell grid; every photographic surface (repo OG images) passes through an ordered 2-color dither, never a soft photographic blend. Content lives in bordered, beveled "windows" docked to fixed screen regions (nav bar, hero window, activity window, project windows, status-bar footer) — regions swap content, they never reflow into cards-on-a-gradient. Navigation is a literal git commit graph: a branching node-and-line spine down the left/top of the page where each node is a section, donated from the Git-DAG direction that lost the roll but not its discipline. Repo badges (open source / closed source / coursework / hackathon / research) use judge-verdict coloring (AC-green / WA-red / TLE-amber-style), donated from the competitive-judge-scoreboard direction. Interactive hover/focus states get a one-frame RGB-channel misregistration ("glitch") pulse, donated from the declined riso-misregistration challenger. Motion is palette-cycling and per-cell wipes, never smooth gradients or blur.

**STORY:** A recruiter lands mid-"boot" and immediately reads a real terminal/profile window (identity, live GitHub stats) before anything decorative loads; scrolling traces the commit-graph spine through GitHub Activity and Projects windows, each repo rendered as its own bordered module with dithered preview art and verdict-colored badges; the footer reads as a status bar with the two fixed contact channels always visible.

**FIRST VIEWPORT:** Full-bleed pixel-grid background at the locked palette; top status bar (handle, live "boot" clock/counter motif, section jump keys) docked full-width; below it, a large bordered hero window occupies the upper two-thirds — left column: bitmap-face identity block (name, role, stat rows as `dt/dd` pairs restyled as a data readout) with the commit-graph spine's first node; right column or bottom strip: a live-data readout panel (repo count, follower count, contribution count for last year) rendered like a terminal stats block. Primary action ("view projects") is a beveled pixel button, bottom-left of the hero window, first in tab order after identity.

**FORM:** Winning fused challenger — `digital-design-canon-pc98-sixteen-color-field` (PC-98 sixteen-color field), beating the roll's assigned own-list direction (8-bit console UI, own-list index 6, seed key `07f5c197`) on both audience identification and product clarity; raised with donations from the Git-DAG and competitive-judge-scoreboard directions (own list, un-assigned) and the declined riso-misregistration and drum-machine-step-row challengers (timing discipline for scroll reveals). User confirmed this direction plus "Committed" overdrive level (View Transitions section morphs, scroll-timeline reveals, canvas scanline/dither post-process, palette-cycle accents — no WebGL) over AskUserQuestion.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

None outstanding — direction and overdrive level both confirmed by the user. Build path is code-led (no harness-native image generation tool available in this session); no comp round applies.
