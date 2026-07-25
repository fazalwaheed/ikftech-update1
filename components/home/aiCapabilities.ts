import {
  Bot,
  CloudCog,
  Code2,
  Database,
  BriefcaseBusiness,
  Palette,
} from "lucide-react";

export const aiCapabilities = [
  {
    id: 1,
    title: "AI Engineering",
    icon: Bot,
    badge: "POPULAR",
    description:
      "Build intelligent AI-powered applications using LLMs, automation, and custom AI agents that streamline business operations.",

    features: [
      "AI Agents",
      "LLM Integration",
      "Chatbots",
      "RAG Systems",
      "Workflow Automation",
      "Prompt Engineering",
    ],

    className: "",
  },

  {
    id: 2,
    title: "Cloud & DevOps",
    icon: CloudCog,
    badge: "CLOUD",
    description:
      "Design secure, scalable cloud infrastructure with automated deployment pipelines and modern DevOps practices.",

    features: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
    ],

    className: "",
  },

  {
    id: 3,
    title: "Full Stack Development",
    icon: Code2,
    badge: "WEB",
    description:
      "Develop modern web and enterprise applications using scalable frontend and backend technologies.",

    features: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel",
      "Python",
      "REST APIs",
    ],

    className: "",
  },

  {
    id: 4,
    title: "Data & Analytics",
    icon: Database,
    badge: "DATA",
    description:
      "Transform raw business data into meaningful insights through dashboards, reporting, and intelligent analytics.",

    features: [
      "Power BI",
      "Dashboards",
      "ETL",
      "Data Warehousing",
      "Business Intelligence",
      "Reporting",
    ],

    className: "",
  },

  {
    id: 5,
    title: "Enterprise Solutions",
    icon: BriefcaseBusiness,
    badge: "ENTERPRISE",
    description:
      "Accelerate digital transformation with enterprise-grade software solutions tailored for growing organizations.",

    features: [
      "ERP",
      "CRM",
      "HRMS",
      "API Integration",
      "Digital Transformation",
      "Automation",
    ],

    className: "",
  },

  {
    id: 6,
    title: "UI / UX Design",
    icon: Palette,
    badge: "DESIGN",
    description:
      "Design intuitive digital experiences with user-centered research, modern interfaces, and scalable design systems.",

    features: [
      "Figma",
      "Wireframes",
      "Design Systems",
      "Prototypes",
      "User Research",
      "UI Audits",
    ],

    className: "",
  },
];

export type AICapability = (typeof aiCapabilities)[number];