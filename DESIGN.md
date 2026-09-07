---
name: Valerie Ha — Personal Site
description: A quiet warm-editorial page where the identity is carried entirely by drawn motion.
colors:
  paper: "#f6f2ea"
  paper-sunk: "#efe9dd"
  ink: "#1c1a17"
  ink-2: "#55504a"
  ink-3: "#6b6259"
  rule: "rgba(28, 26, 23, 0.14)"
  rule-strong: "rgba(28, 26, 23, 0.32)"
  bronze: "#8a5a2b"
  bronze-strong: "#74491f"
  selection: "rgba(138, 90, 43, 0.18)"
  ochre-glow: "rgba(169, 118, 47, 0.22)"
typography:
  display:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.4rem + 3vw, 3.15rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(1.32rem, 1.1rem + 0.9vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "1.24rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(1.18rem, 1.05rem + 0.6vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.66
    letterSpacing: "normal"
    fontFeature: "\"kern\", \"liga\", \"onum\""
  label:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  meta:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
    fontFeature: "\"kern\", \"tnum\""
rounded:
  none: "0"
spacing:
  gutter: "clamp(1.35rem, 5vw, 3rem)"
  measure: "66ch"
  wrap: "40rem"
  wrap-wide: "52rem"
  row: "1.5rem"
  section: "2.9rem"
components:
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 0 1px"
  link-inline-hover:
    textColor: "{colors.bronze-strong}"
  link-list:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
  link-list-hover:
    textColor: "{colors.bronze-strong}"
  action:
    textColor: "{colors.bronze-strong}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 2px"
  nav-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
    padding: "0.15rem 0"
  nav-link-current:
    textColor: "{colors.ink}"
  index-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
  figure-media:
    backgroundColor: "{colors.paper-sunk}"
    rounded: "{rounded.none}"
    width: "100%"
---

# Design System: Valerie Ha — Personal Site

## Overview

**Creative North Star: "Motion Is the Identity"**

The page is a still, warm sheet of editorial paper — cream ground, warm near-black ink, one restrained bronze accent — and it is deliberately understated. Every expressive gesture on the site is a *trajectory*: a thin line that draws itself. An arc springs from the upper-right on the home page and lands at the through-line sentence. A cursor leaves an ochre afterglow that cools over about a second, and a fast flick fires two to four bronze tendrils. Hovering a link sprouts hairline roots that grow downward over half a second and retract on leave. Every internal navigation throws an arc from the click point toward the incoming content. The static layer holds still so the motion layer can speak.

Structure is a flat list. Hierarchy is built from type weight and hairline rules, never from a box, a card, or a shadow. The reading column is narrow (40rem) and the measure is capped at 66ch. Serif (Spectral) carries all display and reading text; a grotesk (Archivo) with tabular figures carries navigation, labels, and metadata. The whole system is one stylesheet plus one motion component, and the site is fully navigable with JavaScript disabled — motion is enhancement, not scaffolding.

Two things are explicitly rejected: the card grid (replaced everywhere by the `.index-list` hairline-ruled list), and the centered single-column serif "researcher homepage" (replaced by a left-set through-line with an incoming arc). This is a redesign that keeps the incumbent warm-serif temperament and tightens it.

**Key Characteristics:**
- Warm paper ground (#f6f2ea), warm ink (#1c1a17), a single muted bronze accent
- Flat: zero shadows, zero radius, no cards — depth is hairline rules and one recessed fill
- Serif for reading and display, grotesk with tabular figures for the small voice
- All expression lives in drawn motion; the static page is intentionally quiet
- No JavaScript required; all motion gated behind `prefers-reduced-motion` and `(pointer: fine)`
- No imagery in the primary layout; figures appear only inside research write-ups

## Colors

A warm monochrome: one paper, one ink graded into two tinted greys, hairline ink rules, and a single bronze accent held in reserve.

### Primary
- **Muted Bronze** (#8a5a2b): The only accent hue. Reserved for interactive and moving elements — active trajectory linework, link underlines on hover, the persistent underline under the CV and Contact actions, the `aria-current` nav marker, and the drawn hero arc. Meets AA on paper (5.2:1).
- **Deep Bronze** (#74491f): The pressed/committed shade of the accent — text color for `.action` links and `:focus-visible` outlines, and the hover text color for list and inline links.

### Tertiary
- **Cursor Ochre** (rgba(169, 118, 47, …)): A warmer, redder relative of the bronze used *only* on the motion canvas as the cursor afterglow. Never appears as a fill or text color in the DOM.

### Neutral
- **Warm Paper** (#f6f2ea): The single page ground on every surface.
- **Sunk Paper** (#efe9dd): A slightly darker recessed fill — the well behind figure images and the embedded CV PDF. The only tonal-layering move in the system.
- **Warm Ink** (#1c1a17): Primary text and headings.
- **Ink Grey 2** (#55504a): Secondary prose, list-row descriptions, identity/descriptor lines. Tinted from the ink hue; ≥7:1 on paper.
- **Ink Grey 3** (#6b6259): Faint metadata, nav rest state, footer. AA on paper (5.2:1).
- **Hairline Rule** (rgba(28,26,23,0.14)): Default divider — list separators, section rules, figure/CV borders, footer top border.
- **Strong Rule** (rgba(28,26,23,0.32)): Emphasis hairline — dot separators between metadata spans, figcaption left border, scrollbar thumb.
- **Selection** (rgba(138,90,43,0.18)): Bronze-tinted text selection highlight.

### Named Rules
**The Reserved Accent Rule.** Bronze appears only on things that move or respond: trajectory linework, links, the `aria-current` nav marker, and the CV/Contact actions. It is never a decorative fill, a heading color, or a divider. If a bronze mark is not interactive or in motion, it is wrong.

**The Warm-Only Rule.** Every neutral is tinted toward the ink's warm hue. No pure black, no pure white (print media block excepted), no cool grey.

## Typography

**Display / Reading Font:** Spectral (self-hosted; weights 400, 500, 600, plus 400 italic) with Iowan Old Style, Palatino Linotype, Georgia fallback.
**Label / Metadata Font:** Archivo (self-hosted variable grotesk, 400–620) with the system-sans stack.

**Character:** A quiet literary serif does all the talking; the grotesk is the clerk — small, tracked, tabular, and used only for wayfinding and data. Body text runs old-style figures (`onum`); the sans voice runs tabular figures (`tnum`) so metadata columns align.

### Hierarchy
- **Display** (Spectral 500, clamp 2.1–3.15rem, line-height 1.08–1.14, tracking −0.022em): The home through-line sentence (≤14 words, max 20ch) and every page `<h1>`. `text-wrap: balance`.
- **Headline** (Spectral 600, clamp 1.32–1.6rem, line-height 1.15, tracking −0.015em): `<h2>` section breaks, with generous top margin (~2.9rem).
- **Title** (Spectral 500, 1.24rem, line-height 1.25, tracking −0.015em): List-row titles in `.index-list`. Inline sub-headings (`<h3>`) are the Spectral 600 / 1.08rem variant.
- **Lede** (Spectral 400, clamp 1.18–1.4rem, line-height 1.5): The opening paragraph on inner pages and the home page's through-line elaboration.
- **Body** (Spectral 400, 1.0625rem rising to 1.125rem at ≥40rem, line-height 1.66): All reading prose. Measure capped at 66ch.
- **Label** (Archivo ~500, 0.86rem, tracking 0.06em, uppercase): Identity/descriptor lines beneath the through-line. The `.action` links and `.skills-grid` headings are tighter tracked-uppercase relatives (0.03em / 0.1em).
- **Meta** (Archivo 400, 0.76–0.82rem, tracking 0.02–0.03em, tabular figures, Ink Grey 3): Row metadata, `.entry-meta`, nav items, footer. Sibling values are joined by a middot (`·`) in Strong Rule color.

### Named Rules
**The Two-Voice Rule.** Serif reads and proclaims; grotesk labels and counts. Never set body copy in Archivo; never set metadata or nav in Spectral. The one crossover is the nav wordmark ("Valerie Ha"), which is Spectral 600 to anchor the sans nav row.

**The Tabular Figures Rule.** Anything in the Archivo voice that can contain a number uses `font-variant-numeric: tabular-nums` so years and counts stay column-aligned.

## Layout

Single centered reading column, no grid. The shell is `nav` / `main` / `footer`, each capped: `main` at `--wrap` 40rem (or `--wrap-wide` 52rem on CV and other wide pages), `nav` and `footer` at 52rem. Horizontal padding is `--gutter` (clamp 1.35rem–3rem); `main` top padding is clamp 2.5rem–4.5rem with 5rem below.

Vertical rhythm is set by element margins rather than a spacing scale: paragraphs ~1.15rem apart, `<h2>` ~2.9rem above / 0.85rem below, `.index-row` 1.5rem top-and-bottom padding between hairline rules. The home hero reserves `min(78vh, 40rem)` and vertically centers its content; on screens ≥64rem it shifts left of the reading column (`margin-left` up to −9rem) so the incoming arc reads as arriving toward the statement.

Breakpoints: **34rem** (nav gaps tighten, wordmark wraps to its own line, skills grid collapses to one column), **40rem** (body type steps up; hero drops forced centering so the statement and its arc stay in the first viewport), **56rem** (`.figure--wide` breaks out to the wide measure), **64rem** (hero shifts left of the column). Figures and the `.index-list` opt out of the 66ch measure and run full column width.

## Elevation & Depth

Flat by rule. There is not a single `box-shadow` in the system. Depth is expressed three ways: (1) **hairline rules** (`--rule` / `--rule-strong`) that separate list rows, sections, and the footer; (2) **one recessed fill** — Sunk Paper (#efe9dd) behind figure images and the embedded CV, each also outlined with a hairline border — reading as a shallow well pressed into the page; (3) **the motion canvas** fixed at `z-index: 0` behind the content shell (`z-index: 1`), with the route-arc canvas above everything at `z-index: 40`. Elevation, where it reads at all, is drawn — an arc rising over the page — not cast.

### Named Rules
**The No-Box Rule.** Content is never enclosed. No card, no panel, no drop shadow, no filled container. To group or separate, use a 1px hairline rule and whitespace. The only bordered rectangles in the system are media wells (figure image, CV embed).

## Shapes

Zero radius everywhere — every corner is square, including the custom scrollbar thumb. The form vocabulary is the straight hairline (1px borders at 14% or 32% ink) and the drawn curve (quadratic and cubic Bézier arcs rendered on canvas or as inline SVG `<path>`, stroke-width 1–1.25px, bronze at ~40–55% alpha, round line caps). Rectangles are for media only and always carry a hairline border over a Sunk Paper fill. No clipping, no masks, no rounded anything.

## Components

### Links
Three link treatments, all built from an animated `background-size` underline (draws over 0.42s on `--ease-traj`), never `text-decoration`.
- **Inline prose link:** rest state carries a full-width hairline underline in Strong Rule color; on hover/focus the underline recolors to bronze and text goes to Deep Bronze. Padding `0 0 1px`.
- **List / affordance link** (`.index-row a`, `a.link`, `.links-row a`): no underline at rest; on hover/focus the bronze underline draws in left-to-right from 0 to 100% and text goes to Deep Bronze. The motion engine can also trigger this state via `.is-attracting`.
- **Action link** (`.action`, used only for CV and Contact): Archivo, tracked 0.03em, Deep Bronze text, a persistent bronze underline, and a leading `→` glyph. On hover/focus the letter-spacing opens to 0.05em and the arrow slides 3px right. Padding `0 0 2px`.

### Navigation
Flat baseline-aligned row, wrapping, no separators. Wordmark "Valerie Ha" in Spectral 600 (0.98rem); items in Archivo 0.82rem tracked 0.03em, Ink Grey 3 at rest, Warm Ink on hover/focus. The current page is Warm Ink with a 1px bronze underline bar pinned 2px below the baseline (`aria-current="page"`). Below 34rem the row tightens and the wordmark takes its own line. No hamburger, no dropdown — the whole nav always shows.

### List (`.index-list`) — signature pattern
The system's replacement for card grids. An unbulleted `<ul>` with a hairline top border; each `.index-row` is a CSS grid (0.4rem gap) with 1.5rem vertical padding and a hairline bottom border. Row contents: a Spectral 500 title link, an Ink Grey 2 description (capped 60ch), and a metadata line in Archivo 0.76rem where the second span is a lowercase bronze `.tag` and pending items render italic in Ink Grey 3. Rows have no background, no hover fill — only the title link's underline responds.

### Figure (`.figure` / `Figure.astro`)
Full-column (opts out of the 66ch measure). Image sits on a Sunk Paper fill with a 1px hairline border, no radius. Caption in Archivo 0.82rem, Ink Grey 3, set off by a 1px Strong Rule left border with 0.9rem inset, capped at 46ch. `.figure--wide` breaks out to the wide measure at ≥56rem. Lazy-loaded.

### Media embed (`.cv-embed`)
Same treatment as a figure image: `min(80vh, 900px)` tall, 1px hairline border, Sunk Paper fill, no radius.

### Motion field (`Trajectories.astro`) — signature component
Two fixed, `pointer-events: none`, `aria-hidden` canvases that persist across View Transitions: `#field` (z-index 0, behind the shell) and `#route-arc` (z-index 40, above). A single `requestAnimationFrame` loop runs only while something is animating and parks itself after ~24 idle frames. Two independent systems share one pointer position, plus two supporting ones — all modeled on a spiking neuron: cursor **afterglow** (a short-lived trail of ochre radial-gradient blobs whose radius and opacity shrink with age, reading as glow rather than a stroke; ~1s decay), **spike** (exponentially-smoothed cursor speed above ~0.55px/ms fires 2–4 bronze tendrils that ease their length over ~700ms and fade as they finish, each with a random bend on its Bézier control point; ~260ms cooldown), **hover roots** (2–3 hairline bronze roots grow downward from a link over ~500ms, retract over ~320ms), and the **route arc** (460ms bronze Bézier from click point toward the incoming content on every internal navigation). Entirely disabled under `prefers-reduced-motion: reduce` or a coarse pointer. The static site is complete without it.

### Reveal-on-scroll
Content is visible by default (no-JS safe). Below-the-fold `[data-reveal]` elements start at `opacity: 0` / `translate(-6px, 9px)` and settle over a 0.4s opacity + 0.52s transform (`--ease-traj`) with a 38ms stagger capped at 8 steps — a short curved entrance, not a fade-up.

## Do's and Don'ts

### Do:
- **Do** carry all visual expression in drawn motion (bronze Bézier linework, `background-size` underline draws, curved reveals) and keep the static page quiet.
- **Do** separate and group content with 1px hairline rules (`--rule` at 14%, `--rule-strong` at 32%) and whitespace.
- **Do** use the `.index-list` hairline row pattern anywhere a collection of items needs listing.
- **Do** keep reading prose in Spectral within a 66ch measure, and set all nav / labels / metadata in Archivo with tabular figures.
- **Do** reserve bronze for interactive and moving elements; use Deep Bronze (#74491f) for `:focus-visible` outlines (2px, 3px offset).
- **Do** keep every surface functional with JavaScript disabled and gate all motion behind `prefers-reduced-motion` and `(pointer: fine)`.
- **Do** place images only inside research/project write-ups, on a Sunk Paper well with a hairline border.

### Don't:
- **Don't** add `box-shadow`, `border-radius`, or any filled card/panel container. The only bordered rectangles are media wells.
- **Don't** introduce a second accent color or use bronze as a decorative fill, heading color, or divider.
- **Don't** use a card grid for collections, or center the home page as a single serif column — both are the confirmed anti-references.
- **Don't** set body copy in Archivo or set nav/metadata in Spectral (the Spectral nav wordmark is the sole crossover).
- **Don't** use pure black or pure white on screen, or a cool-toned neutral; every neutral is tinted from the warm ink hue.
- **Don't** make motion load-bearing — no content, navigation, or affordance may depend on the canvas or on JS reveals.
- **Don't** rely on `text-decoration` for links; underlines are animated `background-image` gradients.
