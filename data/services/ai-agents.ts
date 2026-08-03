import { ServiceData } from "@/components/services/types";

export const aiAgents: ServiceData = {
  slug: "ai-agents",

  category: "AI & Data Innovation",

  title: "AI Agents",

  subtitle:
    "Build intelligent autonomous AI agents that automate workflows, integrate with your systems and work 24/7.",

  heroImage: "/images/services/ai-agents.webp",

  stats: [
    { value: "100+", label: "Automated Workflows" },
    { value: "75%", label: "Time Saved" },
    { value: "24/7", label: "Availability" },
    { value: "95%", label: "Accuracy" },
  ],

  overview:
    "We develop enterprise AI agents capable of understanding context, using tools, accessing knowledge bases and automating complex business workflows.",

  features: [
    {
      title: "Autonomous Agents",
      description: "AI agents capable of executing multi-step tasks.",
    },
    {
      title: "Tool Integration",
      description: "Connect with APIs, CRMs, databases and enterprise software.",
    },
    {
      title: "Memory & Context",
      description: "Persistent conversations and contextual reasoning.",
    },
    {
      title: "Multi-Agent Systems",
      description: "Specialized AI agents working collaboratively.",
    },
    {
      title: "Knowledge Retrieval",
      description: "Enterprise RAG and document intelligence.",
    },
    {
      title: "Monitoring",
      description: "Analytics, observability and continuous improvement.",
    },
  ],

  process: [
    "Discovery",
    "Architecture",
    "Agent Development",
    "Integration",
    "Deployment",
  ],

  techStack: [
    "OpenAI",
    "Claude",
    "Gemini",
    "LangChain",
    "Python",
    "Node.js",
    "Docker",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Enterprise Customer Support Agent",
      description:
        "Reduced support workload by 75% through autonomous AI-powered ticket handling.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can AI agents integrate with our software?",
      answer:
        "Yes. We integrate with CRMs, ERPs, Slack, Teams, databases and custom APIs.",
    },
    {
      question: "Can multiple AI agents collaborate?",
      answer:
        "Yes. We build coordinated multi-agent systems for complex workflows.",
    },
  ],
};