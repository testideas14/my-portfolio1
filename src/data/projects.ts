export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "tailorai",
    title: "TAILORAI",
    description:
      "Multi-agent LangGraph system that tailors LaTeX resumes to job descriptions. Provider-agnostic LLM layer supports OpenAI, Anthropic, Groq, and Gemini. Cuts tailoring time by 70–80%.",
    tags: ["LangGraph", "FastAPI", "Next.js", "Docker", "LangChain"],
    github: "https://github.com/mrcoffeebean14/TAILORAI",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-gradient-to-br from-indigo-500/95 to-violet-600/95",
    screenshots: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "chatty2",
    title: "Chatty 2.0",
    description:
      "Real-time full-stack chat application with JWT authentication, Socket.io messaging, and MongoDB persistence.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/mrcoffeebean14/Chatty2.0",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-gradient-to-br from-purple-500/95 to-pink-500/95",
    screenshots: [
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "news-summarizer",
    title: "News Summarizer Agent",
    description:
      "AI agent that fetches, filters, and summarizes news articles using LangChain. Delivers concise digests via an automated pipeline.",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
    github: "https://github.com/mrcoffeebean14/News_Summarizer_Agent",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-gradient-to-br from-amber-500/95 to-orange-500/95",
    screenshots: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "explora",
    title: "Explora",
    description:
      "Web application for discovering and exploring places with an interactive interface and curated location data.",
    tags: ["React", "Node.js", "Maps API"],
    github: "https://github.com/mrcoffeebean14/Explora",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-gradient-to-br from-teal-500/95 to-emerald-600/95",
    screenshots: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];
