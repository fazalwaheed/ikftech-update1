import { ServiceData } from "@/components/services/types";

export const cybersecurityConsulting: ServiceData = {
  slug: "cybersecurity-consulting",

  category: "Cybersecurity",

  title: "Cybersecurity Consulting & Risk Assessment",

  subtitle:
    "Protect your business with proactive cybersecurity strategies, risk assessments, and enterprise-grade security consulting.",

  heroImage: "/images/services/cybersecurity-consulting.webp",

  stats: [
    {
      value: "500+",
      label: "Security Assessments",
    },
    {
      value: "99%",
      label: "Threat Reduction",
    },
    {
      value: "150+",
      label: "Enterprise Clients",
    },
    {
      value: "24/7",
      label: "Security Advisory",
    },
  ],

  overview:
    "Our Cybersecurity Consulting & Risk Assessment services help organizations identify vulnerabilities, strengthen security posture, reduce cyber risks, and comply with industry regulations through expert security guidance and strategic planning.",

  features: [
    {
      title: "Security Risk Assessment",
      description:
        "Identify infrastructure, application, and operational security risks across your organization.",
    },
    {
      title: "Cybersecurity Strategy",
      description:
        "Develop long-term security roadmaps aligned with business objectives and compliance requirements.",
    },
    {
      title: "Threat Modeling",
      description:
        "Analyze attack surfaces and prioritize security controls before threats occur.",
    },
    {
      title: "Security Architecture Review",
      description:
        "Evaluate cloud, network, and enterprise architectures for security best practices.",
    },
    {
      title: "Compliance Readiness",
      description:
        "Prepare for ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, and other regulatory standards.",
    },
    {
      title: "Executive Security Advisory",
      description:
        "Provide strategic cybersecurity guidance for leadership teams and stakeholders.",
    },
  ],

  process: [
    "Assessment",
    "Risk Analysis",
    "Security Planning",
    "Implementation",
    "Validation",
    "Continuous Improvement",
  ],

  techStack: [
    "Microsoft Defender",
    "CrowdStrike",
    "Splunk",
    "Elastic",
    "AWS Security Hub",
    "Azure Security Center",
    "Google SCC",
    "Nessus",
    "Qualys",
    "Wireshark",
    "Burp Suite",
    "OWASP",
  ],

  caseStudies: [
    {
      title: "Enterprise Security Assessment",
      description:
        "Performed a comprehensive cybersecurity assessment for a multinational enterprise, reducing critical vulnerabilities by 80% and improving compliance readiness.",
      href: "/case-studies/cybersecurity-consulting",
    },
  ],

  faqs: [
    {
      question: "What does a cybersecurity assessment include?",
      answer:
        "We evaluate infrastructure, cloud environments, applications, networks, identities, and operational security processes.",
    },
    {
      question: "Can you help us achieve compliance?",
      answer:
        "Yes. We prepare organizations for standards including ISO 27001, SOC 2, HIPAA, PCI DSS, and GDPR.",
    },
    {
      question: "Do you provide ongoing security consulting?",
      answer:
        "Yes. We offer continuous advisory services, periodic assessments, and strategic security planning.",
    },
  ],
};