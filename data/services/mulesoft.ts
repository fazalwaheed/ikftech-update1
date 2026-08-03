import { ServiceData } from "@/components/services/types";

export const muleSoft: ServiceData = {
  slug: "mulesoft",

  category: "Solutions & Integrations",

  title: "MuleSoft Integration Services",

  subtitle:
    "Connect applications, data, and systems through API-led integration using the MuleSoft Anypoint Platform.",

  heroImage: "/images/services/mulesoft.webp",

  stats: [
    {
      value: "250+",
      label: "APIs Delivered",
    },
    {
      value: "100+",
      label: "Enterprise Integrations",
    },
    {
      value: "99.99%",
      label: "Platform Availability",
    },
    {
      value: "60%",
      label: "Faster Integration Delivery",
    },
  ],

  overview:
    "IKFTECH helps enterprises modernize digital ecosystems with MuleSoft's API-led connectivity approach. We design scalable integrations, reusable APIs, and secure data exchanges that connect cloud, on-premises, SaaS, and legacy systems.",

  features: [
    {
      title: "API-Led Connectivity",
      description:
        "Build reusable System, Process, and Experience APIs following MuleSoft best practices.",
    },
    {
      title: "Enterprise Integration",
      description:
        "Connect ERP, CRM, HR, finance, cloud, and legacy applications through secure integrations.",
    },
    {
      title: "API Management",
      description:
        "Manage API security, monitoring, analytics, throttling, and lifecycle from Anypoint Platform.",
    },
    {
      title: "Cloud & Hybrid Integration",
      description:
        "Integrate applications across cloud, hybrid, and on-premises environments.",
    },
    {
      title: "Data Transformation",
      description:
        "Transform, enrich, and orchestrate data using DataWeave and Mule runtime.",
    },
    {
      title: "Monitoring & Support",
      description:
        "Ensure high availability with proactive monitoring, logging, performance tuning, and managed support.",
    },
  ],

  process: [
    "Integration Assessment",
    "API Strategy",
    "Architecture Design",
    "API Development",
    "System Integration",
    "Testing",
    "Deployment",
    "Monitoring & Optimization",
  ],

  techStack: [
    "MuleSoft Anypoint Platform",
    "DataWeave",
    "REST APIs",
    "SOAP",
    "RAML",
    "OpenAPI",
    "Java",
    "Salesforce",
    "SAP",
    "Oracle",
    "Azure",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Enterprise API Modernization",
      description:
        "Designed and implemented a MuleSoft integration platform connecting Salesforce, SAP, Oracle, and internal systems through reusable APIs, reducing integration delivery time by over 60%.",
      href: "/case-studies/mulesoft",
    },
  ],

  faqs: [
    {
      question: "What is MuleSoft used for?",
      answer:
        "MuleSoft enables organizations to integrate applications, systems, databases, and APIs through a unified API-led connectivity platform.",
    },
    {
      question: "Can MuleSoft integrate cloud and legacy systems?",
      answer:
        "Yes. MuleSoft securely connects SaaS applications, cloud platforms, on-premises systems, ERPs, CRMs, databases, and legacy applications.",
    },
    {
      question: "Do you provide API management services?",
      answer:
        "Yes. We provide API design, implementation, governance, monitoring, security, lifecycle management, and ongoing support using MuleSoft Anypoint Platform.",
    },
  ],
};