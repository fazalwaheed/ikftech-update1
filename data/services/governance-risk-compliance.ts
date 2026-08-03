import { ServiceData } from "@/components/services/types";

export const governanceRiskCompliance: ServiceData = {
  slug: "governance-risk-compliance",

  category: "Cybersecurity",

  title: "Governance, Risk & Compliance",

  subtitle:
    "Establish strong security governance, manage enterprise risk, and achieve regulatory compliance with confidence.",

  heroImage: "/images/services/governance-risk-compliance.webp",

  stats: [
    {
      value: "100+",
      label: "Compliance Projects",
    },
    {
      value: "30+",
      label: "Security Frameworks",
    },
    {
      value: "98%",
      label: "Audit Success",
    },
    {
      value: "24/7",
      label: "Risk Monitoring",
    },
  ],

  overview:
    "Our Governance, Risk & Compliance (GRC) services help organizations establish security policies, assess enterprise risks, implement governance frameworks, and maintain compliance with international standards. We enable businesses to reduce operational risks while building a mature cybersecurity program.",

  features: [
    {
      title: "Security Governance",
      description:
        "Develop enterprise security policies, governance frameworks, and operational procedures.",
    },
    {
      title: "Risk Management",
      description:
        "Identify, assess, prioritize, and mitigate cybersecurity and operational risks.",
    },
    {
      title: "Compliance Management",
      description:
        "Prepare organizations for ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, and NIST compliance.",
    },
    {
      title: "Internal Security Audits",
      description:
        "Perform regular security assessments and internal compliance reviews.",
    },
    {
      title: "Policy Development",
      description:
        "Create security standards, access control policies, disaster recovery, and business continuity plans.",
    },
    {
      title: "Continuous Compliance",
      description:
        "Monitor compliance posture with automated reporting and governance dashboards.",
    },
  ],

  process: [
    "Current State Assessment",
    "Risk Identification",
    "Governance Framework",
    "Policy Implementation",
    "Compliance Validation",
    "Continuous Monitoring",
  ],

  techStack: [
    "ISO 27001",
    "SOC 2",
    "NIST",
    "CIS Controls",
    "PCI DSS",
    "HIPAA",
    "GDPR",
    "Microsoft Purview",
    "AWS Audit Manager",
    "Azure Policy",
    "Google Security Command Center",
    "Power BI",
  ],

  caseStudies: [
    {
      title: "Enterprise Compliance Transformation",
      description:
        "Implemented a complete Governance, Risk & Compliance program for a financial organization, enabling successful ISO 27001 certification while reducing security risks by 60%.",
      href: "/case-studies/governance-risk-compliance",
    },
  ],

  faqs: [
    {
      question: "What is Governance, Risk & Compliance (GRC)?",
      answer:
        "GRC is a structured approach that aligns governance policies, risk management, and regulatory compliance to strengthen organizational security.",
    },
    {
      question: "Which compliance standards do you support?",
      answer:
        "We support ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST, CIS Controls, and other industry-specific regulations.",
    },
    {
      question: "Can you prepare us for external audits?",
      answer:
        "Yes. We perform gap assessments, implement required controls, prepare documentation, and support organizations throughout certification and audit processes.",
    },
  ],
};