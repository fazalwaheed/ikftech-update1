import { ServiceData } from "@/components/services/types";

export const securityAutomation: ServiceData = {
  slug: "security-automation",

  category: "Cybersecurity",

  title: "Security Automation",

  subtitle:
    "Automate threat detection, incident response, vulnerability management, and compliance to strengthen your cybersecurity posture while reducing operational overhead.",

  heroImage: "/images/services/security-automation.webp",

  stats: [
    {
      value: "90%",
      label: "Faster Incident Response",
    },
    {
      value: "70%",
      label: "Reduced Manual Tasks",
    },
    {
      value: "24/7",
      label: "Threat Monitoring",
    },
    {
      value: "500+",
      label: "Automated Workflows",
    },
  ],

  overview:
    "Our Security Automation services help organizations reduce cyber risk by automating repetitive security operations. We integrate SIEM, SOAR, endpoint protection, vulnerability management, and compliance workflows to improve response time, reduce human error, and enable security teams to focus on high-value threats.",

  features: [
    {
      title: "SOAR Implementation",
      description:
        "Automate security operations and incident response using industry-leading SOAR platforms.",
    },
    {
      title: "Threat Detection Automation",
      description:
        "Continuously detect suspicious activity with automated alert correlation and response.",
    },
    {
      title: "Vulnerability Management",
      description:
        "Automatically scan, prioritize, and remediate vulnerabilities across infrastructure and applications.",
    },
    {
      title: "Compliance Automation",
      description:
        "Generate audit reports, monitor security controls, and automate regulatory compliance processes.",
    },
    {
      title: "Security Workflow Automation",
      description:
        "Automate repetitive security tasks including ticket creation, approvals, notifications, and remediation.",
    },
    {
      title: "Security Analytics",
      description:
        "Leverage AI-driven analytics to identify anomalies, reduce false positives, and improve decision-making.",
    },
  ],

  process: [
    "Security Assessment",
    "Workflow Design",
    "Automation Development",
    "Integration",
    "Testing",
    "Continuous Optimization",
  ],

  techStack: [
    "Microsoft Sentinel",
    "Splunk SOAR",
    "CrowdStrike",
    "Palo Alto Cortex XSOAR",
    "AWS Security Hub",
    "Azure Defender",
    "Google Chronicle",
    "Terraform",
    "Ansible",
    "Python",
    "PowerShell",
    "ServiceNow",
  ],

  caseStudies: [
    {
      title: "Enterprise Security Automation Platform",
      description:
        "Implemented automated incident response and vulnerability management workflows for a global enterprise, reducing response times by 85% while improving overall security operations efficiency.",
      href: "/case-studies/security-automation",
    },
  ],

  faqs: [
    {
      question: "What is Security Automation?",
      answer:
        "Security Automation uses software and workflows to automate repetitive cybersecurity tasks such as threat detection, incident response, vulnerability remediation, and compliance reporting.",
    },
    {
      question: "Can Security Automation integrate with our existing tools?",
      answer:
        "Yes. We integrate with SIEM, SOAR, EDR, firewalls, cloud platforms, ticketing systems, and enterprise security tools.",
    },
    {
      question: "Will automation replace our security team?",
      answer:
        "No. Automation reduces repetitive manual work, allowing security professionals to focus on investigation, strategy, and advanced threat analysis.",
    },
  ],
};