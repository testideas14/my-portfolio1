/**
 * Every project below is a real repository. Every number in a description is one the
 * repository actually shows — node counts, endpoint counts, question types, tool counts.
 * Nothing here is rounded up or invented.
 */

/** Which hand-built UI fragment stands in the card's panel. */
export type Panel = "router" | "builder" | "auth" | "diff";

export interface Project {
  id: string;
  title: string;
  /** What it does, plainly, category first. */
  summary: string;
  /** One checkable fact from the repository. */
  fact: string;
  stack: string[];
  repo: string;
  live?: string;
  panel: Panel;
}

export const featured: Project[] = [
  {
    id: "adapt-rag",
    title: "Adapt-RAG",
    summary:
      "A retrieval chatbot that decides, per question, whether to read your documents, search the web, or answer directly.",
    fact: "7 LangGraph nodes, 3 routes",
    stack: ["Python", "LangGraph", "FastAPI", "Qdrant", "MongoDB"],
    repo: "https://github.com/mrcoffeebean14/Adapt-RAG",
    panel: "router",
  },
  {
    id: "typeclone",
    title: "Typeclone",
    summary:
      "A form builder with drag-and-drop editing and the one-question-at-a-time flow, published behind a shareable link.",
    fact: "8+ question types, 10+ REST endpoints",
    stack: ["Next.js", "TypeScript", "FastAPI", "Tailwind"],
    repo: "https://github.com/mrcoffeebean14/TypeForm",
    live: "https://type-form-smoky.vercel.app",
    panel: "builder",
  },
  {
    id: "spendwise",
    title: "SpendWise",
    summary:
      "A personal finance API with budgets, recurring transactions and PDF or Excel reports, shipped in a container.",
    fact: "Access and refresh tokens, rate limited",
    stack: ["Java", "Spring Boot", "MySQL", "Docker"],
    repo: "https://github.com/mrcoffeebean14/SpendWise",
    live: "https://spendwise-1.up.railway.app/",
    panel: "auth",
  },
  {
    id: "tailorai",
    title: "TAILORAI",
    summary:
      "An agent that rewrites the sections of a LaTeX resume against a job description and leaves the facts alone.",
    fact: "4 model providers, certifications never touched",
    stack: ["Python", "LangGraph", "LangChain", "Next.js"],
    repo: "https://github.com/mrcoffeebean14/TAILORAI",
    live: "https://tailorai-xi.vercel.app",
    panel: "diff",
  },
];

export interface Repo {
  title: string;
  /** The repository's own name, short enough to print. */
  slug: string;
  summary: string;
  stack: string[];
  repo: string;
  live?: string;
}

/** The rest of the public work, as a list. */
export const alsoShipped: Repo[] = [
  {
    title: "News Summarizer Agent",
    slug: "News_Summarizer_Agent",
    summary:
      "Fetches headlines, writes a podcast-style digest, speaks it with Amazon Polly and sends it to Telegram and WhatsApp.",
    stack: ["Python", "LangChain", "Polly"],
    repo: "https://github.com/mrcoffeebean14/News_Summarizer_Agent",
  },
  {
    title: "Healthcare Backend",
    slug: "healthcare-backend",
    summary:
      "REST API for patients, doctors and patient-doctor assignments, secured with JWT access and refresh tokens.",
    stack: ["Django", "DRF", "PostgreSQL"],
    repo: "https://github.com/mrcoffeebean14/Whatbytes-Building-a-Healthcare-Backend-",
  },
  {
    title: "Journal App",
    slug: "Journal_App",
    summary:
      "REST API for users and their journal entries, linked through MongoDB DBRef references.",
    stack: ["Java", "Spring Boot", "MongoDB"],
    repo: "https://github.com/mrcoffeebean14/Journal_App",
  },
  {
    title: "Explora",
    slug: "Explora",
    summary:
      "Property listing, search filtering and booking, in the shape of Airbnb.",
    stack: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/mrcoffeebean14/Explora",
    live: "https://majorproject-llja.onrender.com/listings",
  },
];
