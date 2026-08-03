import { ServiceData } from "@/components/services/types";

export const dataSecurityEncryption: ServiceData = {
  slug: "data-security-encryption",

  category: "Cybersecurity",

  title: "Data Security & Encryption",

  subtitle:
    "Protect sensitive business data with enterprise-grade encryption, secure access controls, and comprehensive data protection strategies.",

  heroImage: "/images/services/data-security-encryption.webp",

  stats: [
    {
      value: "256-bit",
      label: "AES Encryption",
    },
    {
      value: "99.99%",
      label: "Data Protection",
    },
    {
      value: "200+",
      label: "Security Deployments",
    },
    {
      value: "24/7",
      label: "Threat Monitoring",
    },
  ],

  overview:
    "Our Data Security & Encryption services safeguard business-critical information across cloud, on-premises, and hybrid environments. We implement encryption, key management, access controls, and data loss prevention solutions that protect your organization from cyber threats while ensuring regulatory compliance.",

  features: [
    {
      title: "Data Encryption",
      description:
        "Implement AES-256 encryption for data at rest and TLS encryption for data in transit.",
    },
    {
      title: "Key Management",
      description:
        "Securely generate, rotate, store, and manage encryption keys using enterprise key management systems.",
    },
    {
      title: "Data Loss Prevention",
      description:
        "Prevent accidental or malicious exposure of sensitive business information with DLP solutions.",
    },
    {
      title: "Identity & Access Control",
      description:
        "Protect sensitive data using role-based access control (RBAC), MFA, and Zero Trust principles.",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Maintain encrypted backups and resilient disaster recovery solutions for business continuity.",
    },
    {
      title: "Compliance & Data Privacy",
      description:
        "Meet GDPR, HIPAA, PCI DSS, ISO 27001, and other regulatory requirements with secure data management practices.",
    },
  ],

  process: [
    "Data Assessment",
    "Risk Analysis",
    "Encryption Strategy",
    "Implementation",
    "Validation",
    "Continuous Monitoring",
  ],

  techStack: [
    "AES-256",
    "TLS/SSL",
    "HashiCorp Vault",
    "AWS KMS",
    "Azure Key Vault",
    "Google Cloud KMS",
    "Microsoft Purview",
    "BitLocker",
    "OpenSSL",
    "Cloudflare",
    "CyberArk",
    "Splunk",
  ],

  caseStudies: [
    {
      title: "Healthcare Data Protection Platform",
      description:
        "Implemented enterprise encryption and secure key management for a healthcare provider, protecting millions of patient records while achieving HIPAA compliance.",
      href: "/case-studies/data-security-encryption",
    },
  ],

  faqs: [
    {
      question: "What types of data can you secure?",
      answer:
        "We secure customer information, financial records, healthcare data, intellectual property, databases, cloud storage, file systems, and enterprise applications.",
    },
    {
      question: "Do you support cloud encryption?",
      answer:
        "Yes. We implement encryption and key management solutions across AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments.",
    },
    {
      question: "Can you help with compliance requirements?",
      answer:
        "Absolutely. Our solutions help organizations meet GDPR, HIPAA, PCI DSS, ISO 27001, SOC 2, and other data protection regulations.",
    },
  ],
};