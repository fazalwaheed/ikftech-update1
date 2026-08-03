import { ServiceData } from "@/components/services/types";

export const aiFirstCompany: ServiceData = {
  slug: "ai-first-company",

  category: "Company",

  title: "AI-First at IKFTECH",

  subtitle:
    "We build AI-first products and systems that put intelligent automation at the heart of software.",

  overview:
    "IKFTECH focuses on building AI-native applications, integrating ML pipelines into products, and enabling businesses to leverage data for smarter decisions.",

  heroImage: "/images/company/ai-first.jpg",

  stats: [
    {
      value: "100+",
      label: "AI Projects",
    },
    {
      value: "50+",
      label: "ML Deployments",
    },
    {
      value: "30+",
      label: "Data Scientists",
    },
  ],

  features: [
    {
      title: "MLOps",
      description: "Production-ready ML pipelines, monitoring, and governance.",
    },
    {
      title: "Custom Models",
      description: "Tailored models for domain-specific intelligence.",
    },
    {
      title: "AI Integration",
      description: "Embedding AI capabilities into existing products and workflows.",
    },
  ],

  process: ["Discover", "Data", "Train", "Integrate", "Deploy", "Monitor"],

  techStack: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Kubernetes", "AWS"],

  caseStudies: [
    {
      title: "Conversational Agent for Support",
      description: "Reduced support costs by 40% with an AI assistant.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "How do you start an AI project?",
      answer: "We begin with data discovery, prototyping, then iterate to production.",
    },
  ],
};

export default aiFirstCompany;
