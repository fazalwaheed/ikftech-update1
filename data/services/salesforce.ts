import { ServiceData } from "@/components/services/types";

export const salesforce: ServiceData = {
  slug: "salesforce",

  category: "Solutions & Integrations",

  title: "Salesforce",

  subtitle:
    "Accelerate sales, automate workflows and improve customer relationships with Salesforce CRM solutions.",

  overview:
    "Our Salesforce experts help organizations implement, customize and optimize Salesforce for sales, marketing and customer service. We build scalable CRM ecosystems with automation, integrations, analytics and secure cloud architecture that improve operational efficiency and customer engagement.",

  heroImage: "/images/servimg/cloud.png",

  stats: [
    {
      value: "120+",
      label: "CRM Projects",
    },
    {
      value: "600+",
      label: "Automation Workflows",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
    },
  ],

  features: [
    {
      title: "Sales Cloud",
      description:
        "Lead management, opportunity tracking and sales automation.",
    },
    {
      title: "Service Cloud",
      description:
        "Customer support, case management and service workflows.",
    },
    {
      title: "CRM Automation",
      description:
        "Workflow automation, approvals and business process optimization.",
    },
    {
      title: "System Integration",
      description:
        "Connect Salesforce with ERP, finance and third-party applications.",
    },
    {
      title: "Analytics & Dashboards",
      description:
        "Real-time business intelligence and executive reporting.",
    },
    {
      title: "Security & Governance",
      description:
        "Role-based access, compliance and enterprise-grade security.",
    },
  ],

  process: [
    "Discovery",
    "CRM Strategy",
    "Implementation",
    "Customization",
    "Integration",
    "Testing",
    "Training",
    "Support",
  ],

  techStack: [
    "Salesforce",
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "Lightning",
    "Apex",
    "Flow Builder",
    "REST API",
    "MuleSoft",
  ],

  caseStudies: [
    {
      title: "Enterprise CRM Transformation",
      description:
        "Implemented Salesforce across multiple business units with automated workflows.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Do you customize Salesforce?",
      answer:
        "Yes. We build custom Lightning components, Apex development, automation workflows and CRM integrations.",
    },
    {
      question: "Can Salesforce integrate with ERP systems?",
      answer:
        "Yes. We integrate Salesforce with ERP, accounting, HR, marketing and other enterprise platforms.",
    },
  ],
};