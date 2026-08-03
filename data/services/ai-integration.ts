import { ServiceData } from "@/components/services/types";

export const aiIntegration: ServiceData = {
  slug: "ai-integration",

  category: "AI & Data Innovation",

  title: "AI Integration & Deployment",

  subtitle:
    "Integrate AI into your existing applications, workflows and enterprise systems with secure, scalable deployments.",

  heroImage: "/images/services/ai-integration.webp",

  stats: [
    { value: "200+", label: "Integrations" },
    { value: "99.9%", label: "System Uptime" },
    { value: "40%", label: "Productivity Gain" },
    { value: "24/7", label: "Monitoring" },
  ],

  overview:
    "We integrate Generative AI, LLMs and machine learning services into existing enterprise software while ensuring security, scalability and reliability.",

  features: [
    { title: "Enterprise Integration", description: "Connect AI with CRMs, ERPs and internal platforms." },
    { title: "API Development", description: "Secure APIs for AI-powered applications." },
    { title: "Cloud Deployment", description: "AWS, Azure & GCP production deployments." },
    { title: "Security", description: "Authentication, RBAC and encryption." },
    { title: "Performance Monitoring", description: "Monitor usage, latency and costs." },
    { title: "Continuous Optimization", description: "Improve performance after launch." },
  ],

  process: [
    "Assessment",
    "Planning",
    "Development",
    "Deployment",
    "Support",
  ],

  techStack: [
    "OpenAI",
    "Claude",
    "Gemini",
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
  ],

  caseStudies: [
    {
      title: "Enterprise CRM AI Integration",
      description:
        "Integrated AI into an enterprise CRM reducing customer support effort by 65%.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can AI be integrated into existing software?",
      answer:
        "Yes. We integrate AI into web, mobile, SaaS and enterprise platforms.",
    },
    {
      question: "Which cloud platforms do you support?",
      answer:
        "AWS, Microsoft Azure and Google Cloud Platform.",
    },
  ],
};