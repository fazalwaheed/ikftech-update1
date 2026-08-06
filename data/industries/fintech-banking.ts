import { ServiceData } from "@/components/services/types";

export const fintechBanking: ServiceData = {
  slug: "fintech-banking",

  category: "Industries",

  title: "Fintech & Banking Solutions",

  subtitle:
    "Secure digital banking platforms, payment systems, financial automation and modern fintech applications.",

  overview:
    "IKFTECH develops enterprise-grade fintech solutions that help banks, financial institutions and startups deliver secure digital experiences. From payment gateways and digital wallets to lending platforms and regulatory compliance, we build scalable financial technology solutions that improve efficiency, security and customer engagement.",

  heroImage: "/images/servimg/finetech.PNG",

  stats: [
    {
      value: "100+",
      label: "Financial Solutions",
    },
    {
      value: "99.99%",
      label: "Platform Availability",
    },
    {
      value: "$500M+",
      label: "Transactions Processed",
    },
  ],

  features: [
    {
      title: "Digital Banking Platforms",
      description:
        "Modern online banking solutions with seamless customer experiences.",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Secure payment processing, cards, wallets and banking APIs.",
    },
    {
      title: "Digital Wallets",
      description:
        "Build secure e-wallets for businesses and fintech startups.",
    },
    {
      title: "Lending Platforms",
      description:
        "Loan management systems with automated approvals and workflows.",
    },
    {
      title: "Fraud Detection",
      description:
        "AI-powered fraud prevention and transaction monitoring systems.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "PCI DSS, AML, KYC and financial compliance implementation.",
    },
  ],

  process: [
    "Business Analysis",
    "Compliance Planning",
    "Architecture Design",
    "Application Development",
    "Security Testing",
    "Deployment",
    "Continuous Support",
  ],

  techStack: [
    "Java",
    ".NET",
    "Node.js",
    "Spring Boot",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Docker",
  ],

  caseStudies: [
    {
      title: "Digital Banking Platform",
      description:
        "Developed a secure online banking system serving thousands of daily users.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Do you build fintech applications?",
      answer:
        "Yes. We develop payment systems, digital banking platforms, lending software and financial automation solutions.",
    },
    {
      question: "Can you develop PCI DSS compliant systems?",
      answer:
        "Yes. Our fintech solutions follow industry security standards including PCI DSS, AML and KYC compliance.",
    },
  ],
};