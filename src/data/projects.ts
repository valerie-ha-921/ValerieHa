// Self-directed projects — distinct from lab Research.
//
// NOTE FOR VALERIE: entries flagged `draft: true` ship with an honest short
// description only. Expand each with method, tools, outcomes, real figures, and a
// live/repo link when you have them; set `year`, `status`, and remove the flag.
// Add the ML / data-visualization build you mentioned as a new entry here.

export interface Project {
  slug: string;
  title: string;
  summary: string;
  domain: string;
  year: string | null;
  status: string | null;
  link?: { label: string; href: string };
  draft?: boolean;
  body?: { heading: string; paras: string[] }[];
}

export const projects: Project[] = [
  {
    slug: "research-copilot",
    title: "Research copilot",
    summary:
      "A tool that shortens the loop from reading papers to running analysis, built around my own research workflow.",
    domain: "tool",
    year: null,
    status: null,
    draft: true,
  },
  {
    slug: "architecture-portfolio",
    title: "Architecture portfolio",
    summary:
      "Drawings and models from architectural studio work — plan, section, and structure as ways of thinking through a problem.",
    domain: "design",
    year: null,
    status: null,
    draft: true,
  },
  {
    slug: "literary-magazine",
    title: "Literary magazine",
    summary:
      "An independent magazine I help run — editing, selection, and the design of each issue as an object.",
    domain: "editorial",
    year: null,
    status: null,
    draft: true,
  },
  {
    slug: "this-website",
    title: "This website",
    summary:
      "The site you're reading. A static Astro build whose visual identity is carried by motion: the cursor behaves like a spiking neuron, and every navigation draws an arc.",
    domain: "web",
    year: String(new Date().getFullYear()),
    status: "live",
    body: [
      {
        heading: "Idea",
        paras: [
          "My work is about trajectories through state space — how a system moves between internal configurations while it solves a task. I wanted the site itself to move that way rather than to illustrate it with a diagram.",
          "The layout stays deliberately plain: a warm single column, a flat list of everything, hierarchy from type and hairline rules instead of boxes. All of the expression lives in how the page behaves.",
        ],
      },
      {
        heading: "Build",
        paras: [
          "Astro with self-hosted type. A single requestAnimationFrame loop, parked when idle, draws everything on one canvas behind the page. Ordinary cursor movement leaves an ochre afterglow that decays over about a second; crossing a speed threshold makes it fire a few short tendrils, with a refractory pause before it can fire again. Hovering a link grows a couple of hairline roots that retract on leave. Reveals arrive along a short curved path, and every internal navigation springs an arc from the click point to the incoming content using the View Transitions API.",
          "Everything degrades cleanly: the motion is gone under prefers-reduced-motion and on coarse pointers, and with JavaScript disabled the site is a plain, fully navigable document.",
        ],
      },
    ],
  },
];

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
