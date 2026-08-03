import { ServiceData } from "@/components/services/types";

export const aiPod: ServiceData = {
  slug: "ai-pod",

  category: "AI & Data Innovation",

  title: "AI Pod",

  subtitle:
    "Build production-ready AI systems in weeks with a dedicated AI engineering team.",

  heroImage: "/images/services/ai-pod.webp",

  stats: [
    {
      value: "8 Weeks",
      label: "Average Delivery",
    },
    {
      value: "50+",
      label: "AI Projects",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ],

  overview:
    "Our AI Pod combines senior AI engineers, solution architects, data scientists and product experts into one dedicated delivery team. We rapidly design, develop and deploy enterprise-grade AI products using modern LLMs, Retrieval-Augmented Generation (RAG), AI agents and cloud-native infrastructure.",

  features: [
    {
      title: "AI Strategy",
      description:
        "Identify high-impact AI opportunities aligned with your business goals.",
    },
    {
      title: "LLM Integration",
      description:
        "Integrate OpenAI, Claude, Gemini and custom language models into your products.",
    },
    {
      title: "Vector Databases",
      description:
        "Build enterprise RAG solutions using Pinecone, Weaviate or Chroma.",
    },
    {
      title: "AI Agents",
      description:
        "Develop autonomous AI agents capable of executing business workflows.",
    },
    {
      title: "Cloud Deployment",
      description:
        "Deploy production-ready AI applications on AWS, Azure or Google Cloud.",
    },
    {
      title: "Continuous Optimization",
      description:
        "Monitor, evaluate and continuously improve AI model performance after launch.",
    },
  ],

  process: [
    "Discovery Workshop",
    "Solution Architecture",
    "AI Development",
    "Testing & Validation",
    "Deployment",
    "Continuous Improvement",
  ],

  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "OpenAI",
    "Claude",
    "Gemini",
    "LangChain",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Enterprise AI Customer Support Platform",
      description:
        "Built an AI-powered customer support platform that reduced manual ticket handling by 60% while improving response quality and customer satisfaction.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "How long does an AI Pod engagement take?",
      answer:
        "Most AI Pod engagements are completed within 6–10 weeks depending on project complexity and integrations.",
    },
    {
      question: "Can AI Pod integrate with our existing systems?",
      answer:
        "Yes. We integrate with CRMs, ERPs, internal APIs, databases, cloud platforms and third-party SaaS products.",
    },
    {
      question: "Which AI models do you support?",
      answer:
        "We work with OpenAI, Claude, Gemini, open-source LLMs and custom machine learning models depending on your business requirements.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We continuously monitor, optimize and scale AI solutions after deployment to ensure long-term success.",
    },
  ],
};