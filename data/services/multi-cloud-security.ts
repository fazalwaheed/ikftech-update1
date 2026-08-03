import { ServiceData } from "@/components/services/types";

export const multiCloudSecurity: ServiceData = {
  slug: "multi-cloud-security",

  category: "Cloud & Infrastructure",

  title: "Multi Cloud Security & Compliance",

  subtitle:
    "Protect multi-cloud environments with enterprise-grade security, governance, compliance, and continuous threat monitoring.",

  heroImage: "/images/services/multi-cloud-security.webp",

  stats: [
    {
      value: "99.99%",
      label: "Infrastructure Protection",
    },
    {
      value: "150+",
      label: "Security Assessments",
    },
    {
      value: "100%",
      label: "Compliance Support",
    },
    {
      value: "24/7",
      label: "Threat Monitoring",
    },
  ],

  overview:
    "Our Multi Cloud Security & Compliance services secure workloads across AWS, Microsoft Azure, and Google Cloud Platform through identity management, encryption, governance, compliance automation, and continuous monitoring. We help organizations reduce cyber risk while meeting industry and regulatory requirements.",

  features: [
    {
      title: "Cloud Security Assessment",
      description:
        "Identify vulnerabilities, misconfigurations, and security gaps across multi-cloud environments.",
    },
    {
      title: "Identity & Access Management",
      description:
        "Implement Zero Trust architecture, role-based access control (RBAC), and least-privilege policies.",
    },
    {
      title: "Compliance Automation",
      description:
        "Maintain compliance with GDPR, ISO 27001, HIPAA, SOC 2, PCI DSS, and other industry standards.",
    },
    {
      title: "Threat Detection & Monitoring",
      description:
        "Continuously monitor cloud infrastructure with SIEM, logging, and real-time security alerts.",
    },
    {
      title: "Data Protection",
      description:
        "Secure sensitive information using encryption, key management, backup, and disaster recovery strategies.",
    },
    {
      title: "Security Governance",
      description:
        "Establish cloud governance policies, auditing, risk management, and security best practices.",
    },
  ],

  process: [
    "Security Assessment",
    "Risk Analysis",
    "Architecture Design",
    "Implementation",
    "Compliance Validation",
    "Continuous Monitoring",
  ],

  techStack: [
    "AWS Security Hub",
    "Microsoft Defender for Cloud",
    "Google Security Command Center",
    "IAM",
    "Azure Active Directory",
    "HashiCorp Vault",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Splunk",
    "Elastic Stack",
    "Cloudflare",
  ],

  caseStudies: [
    {
      title: "Global Multi-Cloud Security Transformation",
      description:
        "Implemented a unified security and compliance framework across AWS, Azure, and Google Cloud, reducing critical security risks by 75% while achieving enterprise compliance requirements.",
      href: "/case-studies/multi-cloud-security",
    },
  ],

  faqs: [
    {
      question: "Which cloud platforms do you secure?",
      answer:
        "We provide security and compliance services for AWS, Microsoft Azure, Google Cloud Platform (GCP), hybrid cloud, and multi-cloud environments.",
    },
    {
      question: "Can you help with compliance certifications?",
      answer:
        "Yes. We assist organizations in implementing controls that support GDPR, ISO 27001, HIPAA, SOC 2, PCI DSS, and other regulatory frameworks.",
    },
    {
      question: "Do you provide continuous security monitoring?",
      answer:
        "Absolutely. We offer 24/7 monitoring, threat detection, vulnerability management, incident response, and ongoing security optimization.",
    },
  ],
};