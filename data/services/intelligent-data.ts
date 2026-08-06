import { ServiceData } from "@/components/services/types";

export const intelligentData: ServiceData = {
  slug: "intelligent-data",

  category: "AI & Data Innovation",

  title: "Intelligent Data Solutions",

  subtitle:
    "Transform enterprise data into real-time intelligence with modern data engineering and AI.",

  heroImage: "/images/servimg/intelligent-data.png",

  stats: [
    { value: "500M+", label: "Records Processed" },
    { value: "99.9%", label: "Accuracy" },
    { value: "60%", label: "Faster Reporting" },
    { value: "24/7", label: "Availability" },
  ],

  overview:
    "We build modern data platforms that collect, transform, analyse and visualize enterprise data for AI, analytics and decision making.",

  features: [
    {
      title: "Data Engineering",
      description: "Modern ETL & ELT pipelines.",
    },
    {
      title: "Data Warehousing",
      description: "Cloud-native enterprise data platforms.",
    },
    {
      title: "Business Intelligence",
      description: "Interactive dashboards and executive reporting.",
    },
    {
      title: "Real-time Analytics",
      description: "Streaming analytics and KPI monitoring.",
    },
    {
      title: "AI Data Pipelines",
      description: "Prepare data for machine learning and LLMs.",
    },
    {
      title: "Data Automation",
      description: "Automated reporting and workflow optimization.",
    },
  ],

  process: [
    "Assessment",
    "Architecture",
    "Pipeline Development",
    "Analytics",
    "Optimization",
  ],

  techStack: [
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Redis",
    "OpenAI",
    "LangChain",
  ],

  caseStudies: [
    {
      title: "Enterprise Analytics Platform",
      description:
        "Unified data from multiple systems into one intelligent reporting platform.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can you integrate multiple data sources?",
      answer:
        "Yes. We connect databases, APIs, SaaS platforms and enterprise systems.",
    },
    {
      question: "Do you build dashboards?",
      answer:
        "Yes. We deliver executive dashboards with real-time business insights.",
    },
  ],
};