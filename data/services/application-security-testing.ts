import { ServiceData } from "@/components/services/types";

export const applicationSecurityTesting: ServiceData = {
  slug: "application-security-testing",

  category: "Cybersecurity",

  title: "Application Security & Penetration Testing",

  subtitle:
    "Secure your applications with comprehensive penetration testing, vulnerability assessments, and secure software development practices.",

  heroImage: "/images/servimg/full-stack-development.png",

  stats: [
    {
      value: "1,000+",
      label: "Applications Tested",
    },
    {
      value: "95%",
      label: "Critical Issues Resolved",
    },
    {
      value: "200+",
      label: "Security Assessments",
    },
    {
      value: "24/7",
      label: "Security Support",
    },
  ],

  overview:
    "Our Application Security & Penetration Testing services identify security vulnerabilities before attackers do. We perform manual and automated security testing across web, mobile, APIs, and cloud applications while helping development teams build secure software using industry best practices.",

  features: [
    {
      title: "Penetration Testing",
      description:
        "Simulate real-world cyber attacks to identify exploitable vulnerabilities.",
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Perform automated and manual scans to detect security weaknesses across applications.",
    },
    {
      title: "Secure Code Review",
      description:
        "Analyze application source code to identify security flaws and coding vulnerabilities.",
    },
    {
      title: "API Security Testing",
      description:
        "Assess REST, GraphQL, and microservice APIs against OWASP API Security risks.",
    },
    {
      title: "OWASP Security Testing",
      description:
        "Evaluate applications against the OWASP Top 10 security vulnerabilities.",
    },
    {
      title: "Secure SDLC Consulting",
      description:
        "Integrate security throughout the software development lifecycle with DevSecOps practices.",
    },
  ],

  process: [
    "Planning",
    "Reconnaissance",
    "Security Testing",
    "Exploitation",
    "Reporting",
    "Remediation Validation",
  ],

  techStack: [
    "OWASP ZAP",
    "Burp Suite",
    "Nessus",
    "Metasploit",
    "Kali Linux",
    "Nmap",
    "Nikto",
    "Postman",
    "GitHub Advanced Security",
    "SonarQube",
    "Snyk",
    "Veracode",
  ],

  caseStudies: [
    {
      title: "Enterprise Banking Application Security Review",
      description:
        "Conducted a full penetration test and secure code review for a financial platform, identifying and remediating over 120 vulnerabilities before production deployment.",
      href: "/case-studies/application-security-testing",
    },
  ],

  faqs: [
    {
      question: "What types of applications do you test?",
      answer:
        "We perform security testing for web applications, mobile apps, APIs, cloud platforms, SaaS products, and enterprise software.",
    },
    {
      question: "Do you follow industry security standards?",
      answer:
        "Yes. Our testing methodology follows OWASP Top 10, OWASP API Security Top 10, NIST, and PTES best practices.",
    },
    {
      question: "Will we receive a detailed security report?",
      answer:
        "Absolutely. Every engagement includes executive summaries, technical findings, risk ratings, remediation guidance, and optional retesting after fixes are applied.",
    },
  ],
};