import { ServiceData } from "@/components/services/types";

export const cloudSecurity: ServiceData = {
  slug: "cloud-security",

  category: "Cybersecurity",

  title: "Cloud Security",

  subtitle:
    "Protect cloud-native applications, workloads, and infrastructure with modern security architecture and continuous monitoring.",

  heroImage: "/images/servimg/cloud.png",

  stats: [
    {
      value: "300+",
      label: "Cloud Environments Secured",
    },
    {
      value: "99.99%",
      label: "Infrastructure Availability",
    },
    {
      value: "100%",
      label: "Compliance Ready",
    },
    {
      value: "24/7",
      label: "Security Monitoring",
    },
  ],

  overview:
    "Our Cloud Security services help organizations secure AWS, Microsoft Azure, Google Cloud Platform, and hybrid environments. We design Zero Trust architectures, protect cloud workloads, monitor threats in real time, and ensure compliance with global security standards.",

  features: [
    {
      title: "Cloud Security Assessment",
      description:
        "Identify vulnerabilities, misconfigurations, and security risks across cloud environments.",
    },
    {
      title: "Identity & Access Management",
      description:
        "Implement least-privilege access, multi-factor authentication, and Zero Trust identity controls.",
    },
    {
      title: "Cloud Infrastructure Protection",
      description:
        "Secure virtual machines, containers, Kubernetes clusters, storage, and networking resources.",
    },
    {
      title: "Threat Detection & Monitoring",
      description:
        "Continuously monitor cloud environments using SIEM, CSPM, and cloud-native security tools.",
    },
    {
      title: "Compliance & Governance",
      description:
        "Meet ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, and industry-specific compliance requirements.",
    },
    {
      title: "Incident Response",
      description:
        "Rapidly detect, investigate, contain, and recover from cloud security incidents.",
    },
  ],

  process: [
    "Cloud Assessment",
    "Security Architecture",
    "Implementation",
    "Monitoring",
    "Compliance Review",
    "Continuous Optimization",
  ],

  techStack: [
    "AWS Security Hub",
    "AWS GuardDuty",
    "Microsoft Defender for Cloud",
    "Azure Sentinel",
    "Google Security Command Center",
    "Cloudflare",
    "Prisma Cloud",
    "CrowdStrike",
    "Splunk",
    "Terraform",
    "Kubernetes",
    "Docker",
  ],

  caseStudies: [
    {
      title: "Multi-Cloud Enterprise Security",
      description:
        "Secured a global enterprise's AWS and Azure infrastructure by implementing Zero Trust access, continuous monitoring, and automated compliance checks, reducing security incidents by over 70%.",
      href: "/case-studies/cloud-security",
    },
  ],

  faqs: [
    {
      question: "Which cloud platforms do you support?",
      answer:
        "We secure AWS, Microsoft Azure, Google Cloud Platform, and hybrid or multi-cloud environments.",
    },
    {
      question: "Can you secure Kubernetes and containers?",
      answer:
        "Yes. We implement container image scanning, Kubernetes hardening, runtime protection, and workload security.",
    },
    {
      question: "Do you provide continuous cloud monitoring?",
      answer:
        "Absolutely. We offer 24/7 monitoring, threat detection, incident response, and compliance reporting.",
    },
  ],
};