import { ServiceData } from "@/components/services/types";

export const aiStrategy: ServiceData = {
  slug: "ai-strategy",

  category: "AI & Data Innovation",

  title: "AI Strategy Consulting",

  subtitle:
    "Create an AI roadmap aligned with business objectives, technology investments and measurable outcomes.",

  heroImage: "/images/services/ai-strategy.webp",

  stats: [
    {
      value: "150+",
      label: "AI Roadmaps",
    },
    {
      value: "40+",
      label: "Industries Served",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      value: "14+",
      label: "Years Experience",
    },
  ],

  overview:
    "Our AI Strategy Consulting service helps organizations discover AI opportunities, evaluate business readiness and create practical implementation roadmaps for enterprise AI adoption.",

  features: [
    {
      title: "AI Opportunity Assessment",
      description:
        "Identify the highest-impact AI opportunities across your business.",
    },
    {
      title: "Roadmap Planning",
      description:
        "Create phased AI implementation strategies.",
    },
    {
      title: "Technology Advisory",
      description:
        "Choose the right AI models, infrastructure and cloud platforms.",
    },
    {
      title: "ROI Analysis",
      description:
        "Estimate costs, business value and implementation timelines.",
    },
    {
      title: "Executive Workshops",
      description:
        "Align leadership teams around AI transformation.",
    },
    {
      title: "Digital Transformation",
      description:
        "Integrate AI initiatives into your long-term business strategy.",
    },
  ],

  process: [
    "Business Discovery",
    "AI Assessment",
    "Strategy Workshop",
    "Roadmap",
    "Execution Planning",
  ],

  techStack: [
    "OpenAI",
    "Claude",
    "Gemini",
    "LangChain",
    "Azure",
    "AWS",
    "Python",
    "Power BI",
  ],

  caseStudies: [
    {
      title: "Enterprise AI Transformation Strategy",
      description:
        "Created a company-wide AI roadmap identifying more than 30 automation initiatives.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Is AI Strategy suitable for companies new to AI?",
      answer:
        "Yes. We help organizations at every stage of AI maturity.",
    },
    {
      question: "Do you implement the roadmap as well?",
      answer:
        "Absolutely. Our engineering teams can design, build and deploy every recommended AI solution.",
    },
  ],
};