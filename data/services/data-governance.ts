import { ServiceData } from "@/components/services/types";

export const dataGovernance: ServiceData = {
  slug: "data-governance",

  category: "AI & Data Innovation",

  title: "Data Governance & Business Intelligence",

  subtitle:
    "Create trusted, secure and compliant enterprise data ecosystems with modern governance and business intelligence.",

  heroImage: "/images/servimg/ai-agents.png",

  stats: [
    { value: "100%", label: "Compliance Ready" },
    { value: "250+", label: "Data Sources" },
    { value: "99.9%", label: "Data Quality" },
    { value: "24/7", label: "Monitoring" },
  ],

  overview:
    "We establish governance frameworks that improve data quality, compliance, reporting consistency and executive decision-making.",

  features: [
    { title: "Data Quality", description: "Clean, validate and standardize enterprise data." },
    { title: "Compliance", description: "GDPR, HIPAA and SOC2 readiness." },
    { title: "Metadata Management", description: "Enterprise cataloging and ownership." },
    { title: "Business Intelligence", description: "Interactive executive dashboards." },
    { title: "Security", description: "Enterprise access control and governance." },
    { title: "Reporting", description: "Reliable reporting across departments." },
  ],

  process: [
    "Assessment",
    "Governance Design",
    "Implementation",
    "Compliance Review",
    "Continuous Improvement",
  ],

  techStack: [
    "Power BI",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Azure",
    "Redis",
    "Docker",
  ],

  caseStudies: [
    {
      title: "Enterprise Data Governance Program",
      description:
        "Improved reporting consistency and compliance across multiple business units.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Why is data governance important?",
      answer:
        "High-quality governed data improves AI accuracy, compliance and business trust.",
    },
    {
      question: "Do you build executive dashboards?",
      answer:
        "Yes. We build interactive BI dashboards tailored to leadership teams.",
    },
  ],
};