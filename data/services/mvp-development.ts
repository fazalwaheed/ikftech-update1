import { ServiceData } from "@/components/services/types";

export const mvpDevelopment: ServiceData = {
  slug: "mvp-development",
  category: "Engineering",
  title: "MVP Development",
  subtitle:
    "Launch your startup or product idea quickly with a scalable MVP built for validation and growth.",
  heroImage: "/images/servimg/ai-agents.png",

  stats: [
    { value: "4-8 Weeks", label: "Delivery" },
    { value: "100+", label: "Products" },
    { value: "90%", label: "Launch Success" },
    { value: "24/7", label: "Support" },
  ],

  overview:
    "We help startups and enterprises validate ideas with fast, scalable MVP development using modern technologies.",

  features: [
    {
      title: "Rapid Development",
      description: "Launch products in weeks instead of months.",
    },
    {
      title: "Scalable Architecture",
      description: "Built for future growth.",
    },
    {
      title: "Product Validation",
      description: "Test market demand before scaling.",
    },
    {
      title: "Investor Ready",
      description: "Professional products ready for demos.",
    },
  ],

  process: [
    "Discovery",
    "Planning",
    "Development",
    "Testing",
    "Launch",
  ],

  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
  ],

  caseStudies: [
    {
      title: "FinTech MVP",
      description: "Built a fintech platform in six weeks.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "How long does an MVP take?",
      answer: "Typically 4–8 weeks.",
    },
    {
      question: "Can it become a production system?",
      answer: "Yes. Every MVP is designed for scalability.",
    },
  ],
};
