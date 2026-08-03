import { ServiceData } from "@/components/services/types";

export const backOfficeAutomation: ServiceData = {
  slug: "back-office-automation",

  category: "Business & Engagement",

  title: "Back-Office Automation",

  subtitle:
    "Automate repetitive business operations to improve efficiency, reduce costs, and increase operational accuracy.",

  overview:
    "IKFTECH helps organizations automate manual back-office processes including finance, procurement, HR operations, document processing, approvals, reporting, and workflow management. Using modern automation platforms and AI-powered technologies, we eliminate repetitive work so your teams can focus on strategic initiatives.",

  heroImage: "/images/services/back-office-automation.jpg",

  stats: [
    {
      value: "70%",
      label: "Manual Work Reduced",
    },
    {
      value: "99%",
      label: "Process Accuracy",
    },
    {
      value: "40%",
      label: "Operational Cost Savings",
    },
  ],

  features: [
    {
      title: "Workflow Automation",
      description:
        "Automate approvals, routing and repetitive business workflows.",
    },
    {
      title: "Document Processing",
      description:
        "Digitize invoices, contracts and forms with intelligent automation.",
    },
    {
      title: "Finance Automation",
      description:
        "Automate accounting, invoicing, reconciliation and reporting.",
    },
    {
      title: "HR Process Automation",
      description:
        "Simplify onboarding, leave management and employee records.",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Generate real-time operational insights through automated reporting.",
    },
    {
      title: "System Integration",
      description:
        "Connect ERP, CRM and internal systems into unified workflows.",
    },
  ],

  process: [
    "Process Assessment",
    "Workflow Design",
    "Automation Development",
    "System Integration",
    "Testing",
    "Deployment",
    "Continuous Optimization",
  ],

  techStack: [
    "Microsoft Power Automate",
    "UiPath",
    "Zapier",
    "Make",
    "Azure Logic Apps",
    "Python",
    "REST APIs",
    "SQL",
  ],

  caseStudies: [
    {
      title: "Enterprise Workflow Automation",
      description:
        "Reduced operational workload through intelligent workflow automation.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Which business processes can be automated?",
      answer:
        "Finance, HR, procurement, approvals, reporting, document processing and many other repetitive business workflows.",
    },
    {
      question: "Can automation integrate with existing systems?",
      answer:
        "Yes. We integrate automation solutions with ERP, CRM, HRMS and other enterprise applications.",
    },
  ],
};