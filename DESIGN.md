---
name: Mayank Bains — Portfolio
description: A booted-up 16-color pixel computer, not a decorated dev-blog.
colors:
  screen: "#0a0c12"
  screen-raised: "#12151f"
  screen-inset: "#05060a"
  grid-line: "#1b1f2c"
  bevel-light: "#3a4160"
  bevel-dark: "#020305"
  ink: "#e9ecdf"
  ink-dim: "#8b93ac"
  ink-faint: "#737d9c"
  cyan: "#52d9e6"
  cyan-dim: "#1f6b73"
  cyan-dark: "#0f2f33"
  green: "#5be07f"
  green-dim: "#2a6b3f"
  red: "#ff6b6b"
  red-dim: "#7a2f2f"
  amber: "#ffbd4f"
  amber-dim: "#7a5a1f"
  magenta: "#ff7ad1"
  magenta-dim: "#7a3562"
  blue: "#6f9dff"
  blue-dim: "#2f4a7a"
typography:
  display:
    fontFamily: "Silkscreen, monospace"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0"
  body:
    fontFamily: "VT323, ui-monospace, monospace"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.cyan-dark}"
    textColor: "{colors.cyan}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.screen}"
  badge-open-source:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    rounded: "{rounded.none}"
  badge-coursework:
    backgroundColor: "transparent"
    textColor: "{colors.amber}"
    rounded: "{rounded.none}"
---

# Design System: Mayank Bains — Portfolio

## Overview

**Creative North Star: "The Booted Screen"**

The site does not decorate itself with pixel motifs — it renders as an actual 16-color computer that has just powered on. Every surface lives inside a bordered, beveled "window" docked to a fixed region, the way a PC-98-era or early-Windows desktop composes itself from chrome, not cards. The system replaces the incumbent look (a smooth dark dev-blog with a soft finance-curve hero and a monospace-as-costume font) entirely; that look is anti-reference only, kept nowhere in the new build.

Two donated disciplines keep the world from reading as a costume: the site's own navigation is a literal git commit graph (one node per section, wired to real scroll position), and repo badges borrow judge-verdict coloring from competitive-programming scoreboards (AC-green, WA-adjacent tones) rather than an arbitrary tag palette. A third donation — a one-frame RGB channel misregistration pulse on hover/focus, lifted from risograph print misalignment — is the system's only "glitch" and it never runs continuously.

**Key Characteristics:**
- Fixed 24px pixel grid as the page's literal material, not a decorative afterthought
- Hard 2-tone bevel borders (inset/outset) stand in for all depth — no soft shadows anywhere
- Two bitmap/CRT-lineage faces only: Silkscreen for display, VT323 for everything read at length
- Live GitHub data (repos, followers, contributions) rendered as terminal-style readouts, never restyled as generic stat cards
- Repo preview images are ordered-dithered to the locked palette on canvas at load time, not shown as photographic thumbnails

## Colors

A locked palette in the PC-98/early-computer canon: a near-black screen ground, one phosphor-cyan primary, and four judge-verdict hues reserved for status meaning, never decoration.

### Primary
- **Phosphor Cyan** (`#52d9e6`): links, the primary button's default text, live-data numerals, the commit-rail's active node and indicator glow. The system's one accent that appears on interactive or "this is real data" content.

### Neutral
- **Screen** (`#0a0c12`): page ground.
- **Screen Raised** (`#12151f`): window body fill (the "bevel-out" surface).
- **Screen Inset** (`#05060a`): window title bars, borders, and the "bevel-in" recessed surface (live-stat panel, readouts).
- **Grid Line** (`#1b1f2c`): the page-wide 24px background lattice.
- **Bevel Light / Bevel Dark** (`#3a4160` / `#020305`): the two-tone highlight/shadow pair every raised or recessed edge is built from.
- **Ink** (`#e9ecdf`): primary text, headings.
- **Ink Dim** (`#8b93ac`): secondary text (body copy, descriptions).
- **Ink Faint** (`#737d9c`): tertiary labels (`dt` keys, inactive nav labels, tag text) — tinted blue-gray, never true gray, and kept at 4.79:1 against Screen so it stays legible rather than merely decorative-dim.

### Verdict Roles (judge-scoreboard donation — status only, never decorative)
- **Green** (`#5be07f`) / dim `#2a6b3f`: "open source" badge, contribution-graph activity levels.
- **Amber** (`#ffbd4f`) / dim `#7a5a1f`: "coursework" badge.
- **Magenta** (`#ff7ad1`) / dim `#7a3562`: "hackathon" badge.
- **Blue** (`#6f9dff`) / dim `#2f4a7a`: "research" badge.
- **Red** (`#ff6b6b`) / dim `#7a2f2f`: reserved verdict role; not currently assigned to a badge (closed-source uses the neutral Ink Dim, deliberately — "closed" isn't a failure state and doesn't earn the WA-red).

### Named Rules
**The Verdict Rule.** Color on a badge or status dot always means a classification a visitor could look up (repo visibility, contribution level), never a mood or a decorative accent. If a color can't be traced to a real state, it doesn't ship.

## Typography

**Display Font:** Silkscreen (with monospace fallback)
**Body Font:** VT323 (with ui-monospace, monospace fallback)

**Character:** Silkscreen is a true bitmap face — blocky, small-caps-adjacent, used only where a handful of words need to read as "this is a computer's own label" (name, section headings, window title bars, badges). VT323 is a wide CRT-terminal face built for legibility at small sizes; it carries every sentence of real content (bio, descriptions, data readouts) so the system never reaches for a system sans as a fallback voice.

### Hierarchy
- **Display** (400, `clamp(1.5rem, 3vw, 2.25rem)`, 1.2): the `h1`/`h2` headings and window title-bar labels (`IDENTITY.SYS`, `ACTIVITY.LOG`) — always Silkscreen, always short.
- **Body** (400, 18px base / `text-lg` ≈ 18px, 1.5): bio copy, project descriptions, live-stat readouts, nav labels — always VT323.
- **Label** (400, 10–11px, Silkscreen): the smallest chrome-only labels (window-bar captions, F-key glyphs) where Silkscreen's blockiness reads even at tiny sizes.

### Named Rules
**The Two-Face Rule.** Nothing on the page is set in a third font. A word is either a computer's own label (Silkscreen) or content a person wrote (VT323); there is no system-sans fallback voice.

## Layout

The page is one continuous column (`max-w-5xl`, `px-4`/`sm:px-6`) laid over a fixed 24px background grid that never scrolls independently — it's the material the windows sit on, not a parallax layer. At `xl` (1280px+) a dedicated 144px left gutter (`xl:pl-36`) opens for the commit-graph rail; below that width the rail is hidden entirely rather than floated over content, since there's no safe margin for it to occupy without collision. Sections stack as full-bleed bordered windows (Nav, Hero, Activity, Projects, Footer), each separated by a 2px `screen-inset` rule rather than whitespace alone. Project cards are a two-column grid at `md:` and above, single column below.

## Elevation & Depth

No shadows exist anywhere in the system. Depth is entirely a two-tone bevel: `.bevel-out` (light edge top-left, dark edge bottom-right, on a `screen-raised` fill) reads as a raised window; `.bevel-in` (edges reversed, on `screen-inset`) reads as a recessed readout or pressed button. This is the system's literal, period-correct depth model — the pixel-computer world this build commits to never had blur-based shadows to draw from.

### Shadow Vocabulary
- **bevel-out** (`inset 1px 1px 0 var(--bevel-light), inset -1px -1px 0 var(--bevel-dark)`): default state for windows, nav links, and the button's resting face.
- **bevel-in** (`inset 1px 1px 0 var(--bevel-dark), inset -1px -1px 0 var(--bevel-light)`): live-stat panel, pressed/active button state.

### Named Rules
**The No-Blur Rule.** Every depth cue is a hard 1px bevel pair. A soft or colored glow shadow never ships; if something needs to look "elevated," it gets a bevel, not a blur.

## Shapes

Zero border-radius across the entire system — every corner is square, matching the pixel grid's own geometry. Borders are always 2px solid `screen-inset`. The only non-rectangular marks on the page are the commit-rail's circular node dots and the active-indicator glow, both deliberate exceptions marking "this is a graph, not a window."

## Components

### Buttons
- **Shape:** square corners, 2px border, `bevel-out` at rest (`0px` radius).
- **Primary ("RUN projects.exe"):** `cyan-dark` background, `cyan` text, Silkscreen-adjacent sizing via `font-pixel` class.
- **Hover / Focus:** inverts to `cyan` background with `screen` text (11.6:1 contrast) — a deliberate light-panel invert, not a color-shift.
- **Active:** bevel flips to `bevel-in` and the button nudges 1px down-right, simulating a physical key press.

### Badges (verdict chips)
- **Style:** transparent fill, 1px border and text in the verdict color, no radius, `font-term` label text.
- **State:** static — a badge reflects a repo's classification and never has an interactive state.

### Windows (the system's signature component)
- **Corner style:** square, 2px `screen-inset` border, `bevel-out`.
- **Title bar:** `screen-inset` fill, two small square "corner" marks (never circular traffic lights), a Silkscreen caption naming the window (`IDENTITY.SYS`, `ACTIVITY.LOG`, a repo's URL path).
- **Body:** `screen-raised` fill, standard content padding scale (`spacing.md`–`spacing.xl`).

### Navigation
- **Top bar (all widths):** sticky, `screen-raised` fill, logo in Silkscreen (`glitch-hover` on interaction), F-key-styled links (`bevel-out` chips) that show only the key glyph below `sm:` and the full label at `sm:` and above to avoid overflow on narrow viewports.
- **Commit rail (`xl:` and above only):** a vertical git-graph — one circular node per section on a `bevel-light` spine, a cyan glow indicator that glides (CSS `transition: top`, not the View Transitions API — see Do's and Don'ts) to the active node as `IntersectionObserver` reports scroll position.

## Do's and Don'ts

### Do:
- **Do** keep every badge color traceable to the repo's actual GitHub topics/visibility (`lib/github.ts`'s `inferBadge`); never assign verdict color decoratively.
- **Do** dither any new photographic or screenshot imagery through the same ordered Bayer 4×4 pass (`components/DitheredImage.tsx`) at the locked cyan/screen duotone before it ships, with a plain-`<img>` fallback if the source can't be read back from canvas (CORS).
- **Do** keep `ink-faint` and every other text token at or above 4.5:1 against its background; this system already had two accessibility regressions caught and fixed (`ink-faint` at 2.5:1, and the button's hover-state text at 3.2:1) — re-check contrast whenever a new token is introduced.

### Don't:
- **Don't** call `document.startViewTransition` from a scroll/IntersectionObserver callback in this codebase. It was tried for the commit-rail's active-node glide and reliably corrupted the page's paint when it fired near hydration (a real, reproduced bug, not a style preference) — the glide is a plain CSS `transition: top` instead.
- **Don't** introduce a soft or colored box-shadow anywhere. This world's only depth vocabulary is the two-tone bevel pair.
- **Don't** add a third typeface. Silkscreen is for the computer's own labels; VT323 is for everything a person wrote or a live number.
- **Don't** round a corner. `0px` radius is a system invariant, not a default that happened not to get overridden.
