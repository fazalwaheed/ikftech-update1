import { ServiceData } from "@/components/services/types";

export const aiPocMvp: ServiceData = {
  slug: "ai-poc-mvp",

  category: "AI & Data Innovation",

  title: "AI PoC & MVP Development",

  subtitle:
    "Validate AI ideas rapidly with production-ready Proof of Concepts and Minimum Viable Products.",

  heroImage: "/images/servimg/ai-poc-mvp.png",

  stats: [
    { value: "4 Weeks", label: "Average MVP" },
    { value: "50+", label: "AI Products" },
    { value: "90%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
  ],

  overview:
    "We help startups and enterprises validate AI ideas quickly by building production-ready MVPs that can scale into full enterprise products.",

  features: [
    {
      title: "Rapid Development",
      description:
        "Launch MVPs within weeks.",
    },
    {
      title: "Proof of Concept",
      description:
        "Validate feasibility before full investment.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Enterprise-ready technical foundation.",
    },
    {
      title: "Investor Demo",
      description:
        "Polished demos for fundraising.",
    },
    {
      title: "Cloud Deployment",
      description:
        "AWS, Azure and GCP deployment.",
    },
    {
      title: "Product Roadmap",
      description:
        "Plan future product evolution.",
    },
  ],

  process: [
    "Idea Validation",
    "Architecture",
    "Development",
    "Testing",
    "Launch",
  ],

  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "OpenAI",
    "LangChain",
    "Docker",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Healthcare AI Assistant",
      description:
        "Delivered a patient assistant MVP within six weeks reducing manual work by 60%.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "How long does an MVP take?",
      answer:
        "Typically between 4–8 weeks.",
    },
    {
      question: "Can it scale later?",
      answer:
        "Yes. Every MVP is built on production-grade architecture.",
    },
  ],
};