import { ServiceData } from "@/components/services/types";

export const aiPod: ServiceData = {
  slug: "ai-pod",

  category: "AI & Data Innovation",

  title: "AI Pod",

  subtitle:
    "Build production-ready AI systems in weeks with a dedicated AI engineering team.",

  heroImage: "/images/services/ai-pod.webp",

  overview:
    "Our AI Pod brings AI engineers, product specialists and cloud experts together to design, build and launch production-ready AI systems. We help teams move from idea to working product quickly while keeping architecture, security and long-term scalability in view.",

  stats: [
    {
      value: "8 Weeks",
      label: "Delivery",
    },
    {
      value: "95%",
      label: "Accuracy",
    },
    {
      value: "50+",
      label: "Projects",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ],

  features: [
  {
    title: "AI Strategy",
    description:
      "Identify high-impact AI opportunities aligned with your business goals.",
  },
  {
    title: "LLM Integration",
    description:
      "Integrate GPT, Claude, Gemini and custom AI models into your products.",
  },
  {
    title: "Vector Database",
    description:
      "Deploy Retrieval-Augmented Generation using Pinecone, Weaviate or Chroma.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Production deployment on AWS, Azure or Google Cloud with CI/CD.",
  },
  {
    title: "Security & Governance",
    description:
      "Enterprise-grade security, compliance and AI governance practices.",
  },
  {
    title: "Continuous Optimization",
    description:
      "Monitor, improve and scale your AI platform after launch.",
  },
],
  process: [
  'Discovery',
  'Strategy',
  'Development',
  'Deployment',
  'Optimization',
],

  techStack: [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'Kubernetes',
  'OpenAI',
  'Claude',
  'Gemini',
  'LangChain',
],

caseStudies: [
  {
    title: "Enterprise AI Customer Support Platform",
    description:
      "Built a GPT-powered support assistant integrated with Salesforce, reducing manual ticket handling by 60% while improving response quality and customer satisfaction.",
    href: "/case-studies/enterprise-ai-support",
  },
],

  faqs: [
    {
      question: "How long does an AI Pod engagement take?",
      answer:
        "Most MVPs are delivered within 6–10 weeks depending on scope.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We integrate with CRMs, ERPs, APIs and internal platforms.",
    },
  ],
};
