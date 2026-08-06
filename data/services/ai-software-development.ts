import { ServiceData } from "@/components/services/types";

export const aiSoftwareDevelopment: ServiceData = {
  slug: "ai-software-development",

  category: "Engineering",

  title: "AI Software Development",

  subtitle:
    "Design, build and deploy intelligent software powered by AI, machine learning and modern cloud technologies.",

  heroImage: "/images/servimg/full-stack-development.png",

  stats: [
    {
      value: "150+",
      label: "Projects Delivered",
    },
    {
      value: "14+",
      label: "Years Experience",
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
    "We build scalable AI-powered web applications, enterprise platforms and intelligent software products that automate processes, improve decision making and accelerate digital transformation.",

  features: [
    {
      title: "Custom AI Applications",
      description:
        "Develop intelligent software tailored to your business requirements.",
    },
    {
      title: "LLM Integration",
      description:
        "Integrate OpenAI, Claude, Gemini and custom AI models into your applications.",
    },
    {
      title: "Enterprise Platforms",
      description:
        "Develop scalable enterprise software with AI-powered automation.",
    },
    {
      title: "Cloud Native Architecture",
      description:
        "Deploy secure, scalable applications on AWS, Azure and Google Cloud.",
    },
  ],

  process: [
    "Discovery",
    "Architecture",
    "Development",
    "Testing",
    "Deployment",
  ],

  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "OpenAI",
    "LangChain",
    "Docker",
    "Kubernetes",
    "AWS",
  ],

  caseStudies: [
    {
      title: "AI Enterprise Platform",
      description:
        "Built an enterprise AI platform that automated internal workflows and reduced operational costs by over 50%.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can you build custom AI software?",
      answer:
        "Yes. We develop AI-powered web applications, SaaS platforms and enterprise software tailored to your business.",
    },
    {
      question: "Do you provide deployment and maintenance?",
      answer:
        "Yes. We handle deployment, monitoring, optimization and long-term support.",
    },
  ],
};
