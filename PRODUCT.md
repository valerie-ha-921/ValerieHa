# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Valerie Ha for internships and
early-career roles — mainly ML / research engineer and data science, and
increasingly neuro-ethics / law-adjacent positions. They typically arrive from a
job application, a resume link, or a referral, spend a short time on the first
visit, and are deciding whether to advance her.

Secondary: research collaborators, lab members, and faculty who encounter her
work. The site should not alienate an academic reader, but it is tuned for the
recruiter's short visit, not the committee's deep read.

Situation: active internship / job search as of September 2026.

## Product Purpose

A personal website that presents Valerie Ha's work across an unusually wide range
— computational neuroscience, machine learning, and quantum / molecular
engineering, plus self-directed non-academic work — to people evaluating her for
roles. Success: a recruiter leaves understanding what she can do, believes the
evidence, and can reach her CV and contact quickly; the breadth reads as coherent
range rather than a scattered list.

## Positioning

The through-line a neighboring portfolio could not truthfully copy: she works on
recovering hidden computation from indirect observation — the same inference
problem whether the system is a brain, a recurrent network, a developmental
assessment, or an epigenetic trace — paired with hands-on engineering range
across quantum / molecular work, software, data, architectural design, and
editorial work. The site's job is to make that intersection legible, not to claim
a single lane.

## Operating Context

- Static Astro site deployed to GitHub Pages as a project site under a base path
  (`/ValerieHa`); routing and assets go through a `withBase()` helper.
- Read quickly, usually on a first visit, often alongside a resume or application.
- Sections: Home, Research (three projects tied to a lab, PI, or publication),
  Projects (self-directed work, distinct from lab Research), Writing (in
  progress), CV (downloadable + embedded PDF), Contact. Philosophy exists as a
  page but is not in the nav; an About/bio page was removed as redundant and may
  return.
- Self-directed **Projects** named so far: ML / software builds, data analysis and
  visualization work, an architecture portfolio, a personal project website, a
  literary magazine, and a "research copilot" tool.
- Future extension: neuro-ethics writing (placement — section vs. blog —
  undecided).
- Real people and affiliations already named on the site and required to stay
  accurate: University of Chicago (Molecular Engineering, Quantum Track;
  Computational Neuroscience); Marlene Cohen Lab; Sihong Wang Research Group;
  Dorien Emmers and Scott Rozelle (mentors on the Bayley-III project).

## Capabilities and Constraints

- Static site, no backend. Framework is the incumbent Astro setup; not in scope to
  change during design work.
- Lives at a GitHub Pages URL with a base path; any routing or asset change must
  respect `withBase()`. Custom domain: undecided.
- CV is served as a downloadable and embedded PDF at `/resume.pdf`.
- Terminology to preserve: **Research** = work tied to a lab, PI, or publication;
  **Projects** (to be added) = self-directed non-academic work. Keep the two
  labels and structures separate.
- Explicitly undecided: information architecture once Projects is added; whether
  Skills and Philosophy remain standalone pages; custom domain; how and where
  neuro-ethics writing is housed.

## Brand Commitments

- Name: Valerie Ha.
- Voice in the existing copy: first person, plain, reflective, precise; willing to
  say what she changed her mind about and what a tradeoff cost; no hype. Preserve
  this voice.
- Assets on hand: headshot (`public/headshot.jpg`), favicon, resume PDF, research
  figures under `public/images/research/`.
- No tagline, logo, or binding color / type system has been set. Visual direction
  is open for new-work.

## Evidence on Hand

- Three research projects already written up in the repo with problem / methods /
  results prose:
  1. Latent dynamics in adaptive decision-making networks (RNNs on foraging
     tasks, fixed points, belief states) — status "In progress".
  2. "Big Data on Little People" — a shortened Bayley-III (n = 1,173, rural China;
     EFA / IRT / CFA; a 36-item short form) — existing copy reads "Submitted to
     Field Methods · Under Review".
  3. Transgenerational effects of trauma (uncontrollable stress, epigenetic
     mechanisms) — status "Completed".
- Real figures exist for project 1 (multiple PNG / SVG under
  `public/images/research/latent-dynamics-adaptive-decision-networks/`) and at
  least one shared figure used by project 2.
- The user states there are **no external links to publish** — no public
  preprints, papers, or code repositories. Do not fabricate URLs, venues, DOIs,
  or repo links. The "Submitted to Field Methods / Under Review" line is
  pre-existing copy; confirm with the user before repeating, amplifying, or
  removing it.
- The non-academic projects (architecture portfolio, literary magazine, research
  copilot, personal project website, ML / data builds) are named but not yet
  supplied. Real artifacts, descriptions, and any links must come from the user
  before they can be shown.
- No testimonials, metrics, employer names, awards, or dates of employment are on
  hand; none may be invented.

## Product Principles

1. Tuned for a recruiter's first short visit: what she can do, then the evidence,
   then CV and contact — reachable fast from any page.
2. Breadth is the asset; incoherence is the risk. Carry the range on a visible
   through-line (recovering hidden computation, inference under uncertainty,
   engineering rigor across media) rather than an undifferentiated list.
3. Keep lab Research and self-directed Projects clearly separated in language and
   structure, so neither borrows unearned credibility from the other.
4. Claims stay within what is verifiable. Prose without links is fine; invented
   links, venues, or numbers are not. Flag pre-existing claims for confirmation
   rather than propagating them.
5. Preserve the existing voice: first person, unhyped, willing to name tradeoffs
   and changed minds.

## Accessibility & Inclusion

No formal standard was set by the user. Because the Research pages are
figure-heavy and the figures carry information, real alt text and captions are
material, along with ordinary WCAG AA expectations for a professional portfolio
(contrast, keyboard navigation, readable line length).
