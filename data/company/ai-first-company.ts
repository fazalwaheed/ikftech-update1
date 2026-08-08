import { CompanyData } from "@/components/company/types";

export const aiFirstCompany: CompanyData = {
  slug: "ai-first",

  title: "AI-First Company",

  subtitle:
    "We use artificial intelligence to rethink how products are designed, engineered, automated, and scaled.",

  overview:
    "Being AI-first means more than adding an AI feature to an existing product. At IKFTECH, we evaluate where intelligence can create genuine leverage across the entire product lifecycle—from discovery and architecture to automation, customer experiences, analytics, and operations.",

  heroImage: "/images/company/ai-first.png",

  stats: [
    {
      value: "AI",
      label: "First Mindset",
    },
    {
      value: "24/7",
      label: "Automation",
    },
    {
      value: "50+",
      label: "AI Capabilities",
    },
    {
      value: "100%",
      label: "Product Focus",
    },
  ],

  features: [
    {
      title: "AI-Native Products",
      description:
        "We design products where intelligent capabilities are part of the core experience rather than an isolated feature.",
    },
    {
      title: "Intelligent Automation",
      description:
        "We identify repetitive workflows and use AI-powered automation to reduce manual effort and operational overhead.",
    },
    {
      title: "AI-Powered Experiences",
      description:
        "From conversational interfaces to personalized workflows, we create experiences that adapt to users and context.",
    },
    {
      title: "Responsible AI Engineering",
      description:
        "Security, reliability, privacy, evaluation, and human oversight are considered throughout the AI product lifecycle.",
    },
  ],

  timeline: [
    {
      title: "Discover",
      description:
        "We identify where AI can solve a real business problem and where conventional engineering remains the better choice.",
    },
    {
      title: "Design",
      description:
        "We define the intelligence layer, user experience, data requirements, and interaction model.",
    },
    {
      title: "Build",
      description:
        "Engineering teams integrate models, agents, data pipelines, APIs, and product interfaces into a production-ready system.",
    },
    {
      title: "Scale",
      description:
        "We continuously evaluate performance, cost, reliability, and user outcomes as the product grows.",
    },
  ],
};