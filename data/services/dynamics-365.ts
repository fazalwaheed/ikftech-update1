import { ServiceData } from "@/components/services/types";

export const dynamics365: ServiceData = {
  slug: "dynamics-365",

  category: "Solutions & Integrations",

  title: "Microsoft Dynamics 365",

  subtitle:
    "Modernize business operations with Microsoft Dynamics 365 CRM, ERP, automation, and intelligent business applications.",

  heroImage: "/images/services/dynamics-365.webp",

  stats: [
    {
      value: "150+",
      label: "Implementations",
    },
    {
      value: "40%",
      label: "Productivity Increase",
    },
    {
      value: "99.9%",
      label: "System Availability",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ],

  overview:
    "Our Microsoft Dynamics 365 experts help organizations streamline sales, customer service, finance, operations, supply chain, and field service through intelligent business applications integrated with the Microsoft ecosystem.",

  features: [
    {
      title: "Dynamics 365 CRM",
      description:
        "Improve sales, marketing, and customer engagement with intelligent CRM solutions.",
    },
    {
      title: "Finance & Operations",
      description:
        "Manage financials, procurement, inventory, and operations from a unified platform.",
    },
    {
      title: "Business Process Automation",
      description:
        "Automate approvals, workflows, and repetitive business processes using Power Platform.",
    },
    {
      title: "Microsoft 365 Integration",
      description:
        "Connect Dynamics 365 with Teams, Outlook, Excel, SharePoint, and Power BI.",
    },
    {
      title: "Custom Development",
      description:
        "Develop custom modules, plugins, dashboards, and enterprise applications.",
    },
    {
      title: "Migration & Support",
      description:
        "Seamlessly migrate legacy ERP/CRM systems while ensuring continuous support.",
    },
  ],

  process: [
    "Business Assessment",
    "Solution Design",
    "Implementation",
    "Customization",
    "Testing",
    "Training",
    "Go Live",
    "Support",
  ],

  techStack: [
    "Dynamics 365",
    "Microsoft Azure",
    "Power Platform",
    "Power Automate",
    "Power Apps",
    "Power BI",
    "Microsoft Teams",
    "SharePoint",
    "Dataverse",
    ".NET",
    "C#",
    "SQL Server",
  ],

  caseStudies: [
    {
      title: "Enterprise CRM Modernization",
      description:
        "Implemented Microsoft Dynamics 365 across multiple business units, improving sales productivity by 40% while automating finance and customer service operations.",
      href: "/case-studies/dynamics-365",
    },
  ],

  faqs: [
    {
      question: "Which Dynamics 365 modules do you implement?",
      answer:
        "We implement Sales, Customer Service, Finance, Supply Chain, Marketing, Field Service, Project Operations, and Business Central.",
    },
    {
      question: "Can Dynamics 365 integrate with Microsoft 365?",
      answer:
        "Yes. We integrate Dynamics 365 with Teams, Outlook, Excel, SharePoint, Power BI, and Azure services.",
    },
    {
      question: "Do you migrate existing ERP or CRM systems?",
      answer:
        "Yes. We provide complete migration services from legacy ERP/CRM platforms to Microsoft Dynamics 365 with minimal downtime.",
    },
  ],
};