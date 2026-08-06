import { ServiceData } from "@/components/services/types";

export const genaiConsulting: ServiceData = {
  slug: "genai-consulting",

  category: "AI & Data Innovation",

  title: "GenAI Consulting & Workshops",

  subtitle:
    "Identify high-impact AI opportunities through strategy sessions, executive workshops and implementation roadmaps.",

  heroImage: "/images/servimg/genai-consulting.png",

  stats: [
    { value: "100+", label: "AI Assessments" },
    { value: "50+", label: "Workshops" },
    { value: "14+", label: "Years Experience" },
    { value: "95%", label: "Client Satisfaction" },
  ],

  overview:
    "Our GenAI Consulting service helps organizations discover, prioritize and successfully implement Generative AI initiatives through structured workshops and strategic roadmaps.",

  features: [
    {
      title: "Executive Workshops",
      description:
        "Interactive leadership sessions focused on AI transformation.",
    },
    {
      title: "AI Readiness",
      description:
        "Evaluate data, infrastructure and organizational readiness.",
    },
    {
      title: "Opportunity Discovery",
      description:
        "Identify AI use cases with measurable ROI.",
    },
    {
      title: "Implementation Roadmap",
      description:
        "Build phased AI adoption strategies.",
    },
    {
      title: "Technology Advisory",
      description:
        "Select the right AI models and cloud platforms.",
    },
    {
      title: "ROI Planning",
      description:
        "Estimate investment, timelines and business outcomes.",
    },
  ],

  process: [
    "Discovery",
    "Assessment",
    "Workshop",
    "Roadmap",
    "Execution Planning",
  ],

  techStack: [
    "OpenAI",
    "Claude",
    "Gemini",
    "LangChain",
    "Python",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Enterprise AI Transformation Strategy",
      description:
        "Created an enterprise AI roadmap identifying 30+ automation opportunities.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Who should attend AI workshops?",
      answer:
        "Executives, product teams, engineering leaders and digital transformation stakeholders.",
    },
    {
      question: "Can you implement the roadmap?",
      answer:
        "Yes. Our engineering teams can build every solution recommended during consulting.",
    },
  ],
};