import { ServiceData } from "@/components/services/types";

export const financeOutsourcing: ServiceData = {
  slug: "finance-outsourcing",

  category: "Business Process",

  title: "Finance Outsourcing",

  subtitle:
    "Outsource accounting, payroll, and finance operations to reduce cost and increase accuracy.",

  overview:
    "IKFTECH helps businesses streamline finance operations with outsourced accounting, payroll, invoicing, and reporting services. We combine process automation, modern back-office platforms, and expert finance teams to improve compliance, reduce cycle time, and free internal resources for strategic work.",

  heroImage: "/images/servimg/bussiness.png",

  stats: [
    { value: "24/7", label: "Finance Support" },
    { value: "30%", label: "Cost Savings" },
    { value: "99%", label: "Reporting Accuracy" },
  ],

  features: [
    {
      title: "Accounts Payable & Receivable",
      description: "Automate vendor payments, collections, and cash flow management.",
    },
    {
      title: "Payroll & Compliance",
      description: "Manage payroll processing, tax filings, and statutory compliance.",
    },
    {
      title: "Financial Reporting",
      description: "Deliver timely financial statements, cash forecasts, and KPI dashboards.",
    },
    {
      title: "Expense Management",
      description: "Control costs through automated expense tracking and approvals.",
    },
    {
      title: "Cloud Finance Platforms",
      description: "Deploy modern finance systems for greater visibility and efficiency.",
    },
    {
      title: "Scalable Finance Teams",
      description: "Scale finance operations with skilled professionals and managed services.",
    },
  ],

  process: [
    "Assessment & Onboarding",
    "Process Standardization",
    "Automation Implementation",
    "Operational Handover",
    "Reporting & Optimization",
  ],

  techStack: [
    "SAP Business ByDesign",
    "Oracle NetSuite",
    "Microsoft Dynamics 365",
    "QuickBooks",
    "Xero",
    "Power BI",
  ],

  caseStudies: [
    {
      title: "Finance Transformation for a Global Retailer",
      description: "Reduced month-end close time by 40% and improved cash management visibility.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Can finance outsourcing support my current ERP system?",
      answer:
        "Yes. We integrate with your existing ERP and finance platforms to maintain continuity while improving process efficiency.",
    },
    {
      question: "How quickly can we start outsourcing finance operations?",
      answer:
        "Most clients begin with a transition and onboarding phase that takes 4–8 weeks depending on the scope and existing systems.",
    },
  ],
};
