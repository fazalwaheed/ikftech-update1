import { ServiceData } from "@/components/services/types";

export const powerBI: ServiceData = {
  slug: "power-bi",

  category: "Solutions & Integrations",

  title: "Power BI Analytics & Business Intelligence",

  subtitle:
    "Turn business data into interactive dashboards, real-time reports, and actionable insights with Microsoft Power BI.",

  heroImage: "/images/services/power-bi.webp",

  stats: [
    {
      value: "300+",
      label: "Dashboards Built",
    },
    {
      value: "50+",
      label: "Enterprise Clients",
    },
    {
      value: "10M+",
      label: "Data Records Processed",
    },
    {
      value: "99.9%",
      label: "Reporting Accuracy",
    },
  ],

  overview:
    "IKFTECH helps organizations transform raw business data into meaningful visual dashboards using Microsoft Power BI. We design executive dashboards, automate reporting, integrate multiple data sources, and enable real-time decision-making across departments.",

  features: [
    {
      title: "Interactive Dashboards",
      description:
        "Build executive dashboards with real-time KPIs and business metrics.",
    },
    {
      title: "Data Integration",
      description:
        "Connect Power BI with SQL Server, Excel, Dynamics 365, Salesforce, APIs, Azure, and cloud platforms.",
    },
    {
      title: "Data Modeling",
      description:
        "Design optimized star schemas, relationships, and semantic models for high-performance reporting.",
    },
    {
      title: "DAX & Power Query",
      description:
        "Develop advanced calculations, KPIs, measures, and automated data transformation workflows.",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Monitor business performance using live dashboards and streaming datasets.",
    },
    {
      title: "Governance & Security",
      description:
        "Implement row-level security, workspace management, deployment pipelines, and governance.",
    },
  ],

  process: [
    "Business Discovery",
    "Data Assessment",
    "Data Modeling",
    "Dashboard Design",
    "Development",
    "Testing",
    "Deployment",
    "Training & Support",
  ],

  techStack: [
    "Power BI",
    "Power Query",
    "DAX",
    "SQL Server",
    "Azure",
    "Azure Synapse",
    "Microsoft Fabric",
    "Excel",
    "Dataverse",
    "SharePoint",
    "Snowflake",
    "REST APIs",
  ],

  caseStudies: [
    {
      title: "Enterprise Business Intelligence Platform",
      description:
        "Developed enterprise Power BI dashboards integrating ERP, CRM, finance, and operational systems, reducing manual reporting by 80% while enabling real-time executive decision-making.",
      href: "/case-studies/power-bi",
    },
  ],

  faqs: [
    {
      question: "Can Power BI connect to multiple data sources?",
      answer:
        "Yes. Power BI integrates with SQL Server, Azure, Salesforce, Dynamics 365, Excel, SharePoint, APIs, Snowflake, SAP, Oracle, and many other platforms.",
    },
    {
      question: "Do you build executive dashboards?",
      answer:
        "Yes. We create executive, operational, financial, sales, HR, and customer analytics dashboards tailored to business goals.",
    },
    {
      question: "Do you provide Power BI training?",
      answer:
        "Yes. We offer end-user training, dashboard documentation, governance guidance, and ongoing support.",
    },
  ],
};