/**
 * Single source of truth for everything the site says about Mandeep.
 * The About section, the footer and the /api/chat system prompt all read from here,
 * so the bio cannot drift between the page and the assistant.
 * Every value is taken from the resume or a public profile — nothing here is invented.
 */

export const profile = {
  name: "Mandeep Singh",
  role: "Backend and agentic AI engineer",
  location: "New Delhi, India",
  email: "singhmps14@gmail.com",
  resume:
    "https://drive.google.com/file/d/1GRPfHpulFemiu9hGWHZ5QiyU0e_nDC7Y/view?usp=sharing",
} as const;

export const links = {
  github: "https://github.com/mrcoffeebean14",
  linkedin: "https://www.linkedin.com/in/mrcoffeebean14",
  leetcode: "https://leetcode.com/u/Mrcoffeebean14",
  repos: "https://github.com/mrcoffeebean14?tab=repositories",
} as const;

export const education = {
  school: "Bennett University",
  degree: "B.Tech, Computer Science and Engineering",
  from: "August 2023",
  to: "May 2027",
  cgpa: "8.9/10.0",
} as const;

export interface Role {
  title: string;
  org: string;
  from: string;
  to: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Software Engineer Intern",
    org: "Corporate Cruise",
    from: "May 2025",
    to: "July 2025",
    points: [
      "Built 6+ REST APIs for authentication and session management in Node.js, all live within the first month.",
      "Shipped production features on the OpenAI API and LangChain, taking the prototype to production in 3 weeks.",
      "Integrated third-party payment and email APIs, cutting transaction handling time by about 60%.",
      "Caught a critical payment flow bug in code review across 10+ React and Node.js pull requests before release.",
    ],
  },
];

export interface Position {
  title: string;
  org: string;
  years: string;
  note: string;
}

export const positions: Position[] = [
  {
    title: "Operations Head",
    org: "Full Stack Club, Bennett University",
    years: "2024–2025",
    note: "Managed a 7-member team across 10+ events, tracking deliverables and reporting blockers to club leadership.",
  },
  {
    title: "Social-Media Head",
    org: "DevOps BU Club, Bennett University",
    years: "2024–2025",
    note: "Owned event promotion and cross-team content outreach.",
  },
];

export interface Achievement {
  figure: string;
  label: string;
  note: string;
  href?: string;
}

export const achievements: Achievement[] = [
  {
    figure: "1786",
    label: "LeetCode rating",
    note: "500+ problems solved across competitive programming platforms.",
    href: links.leetcode,
  },
  {
    figure: "1639",
    label: "CodeChef rating",
    note: "Contest rating on CodeChef, on the same problem set.",
  },
  {
    figure: "81.04%",
    label: "Overall accuracy, Globe2Dox",
    note: "Co-authored a remote sensing paper (DVCOE, ICCET-2026) on a 7-channel segmentation framework built on SegFormer.",
  },
];

/** Grouped the way the resume groups them, used by the skills section and the assistant. */
export const skills = [
  {
    group: "LLM and agentic systems",
    items: ["LangChain", "LangGraph", "Agentic RAG pipelines", "Autonomous query routing"],
  },
  {
    group: "Retrieval",
    items: ["Retrieval-augmented generation", "Qdrant", "Relevance grading", "Retriever tuning"],
  },
  {
    group: "Backend and APIs",
    items: ["FastAPI", "Flask", "Express.js", "Node.js", "REST APIs", "Spring Boot", "Postman"],
  },
  {
    group: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL", "Bash"],
  },
  {
    group: "Data stores",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub", "Docker", "Linux", "Vercel", "Railway"],
  },
] as const;
