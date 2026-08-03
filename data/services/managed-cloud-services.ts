import { ServiceData } from "@/components/services/types";

export const managedCloudServices: ServiceData = {
  slug: "managed-cloud-services",

  category: "Cloud & Infrastructure",

  title: "Support & Managed Cloud Services",

  subtitle:
    "Ensure your cloud infrastructure remains secure, optimized, and highly available with 24/7 managed cloud operations and expert support.",

  heroImage: "/images/services/managed-cloud-services.webp",

  stats: [
    {
      value: "24/7",
      label: "Monitoring",
    },
    {
      value: "99.99%",
      label: "Uptime",
    },
    {
      value: "<15 Min",
      label: "Incident Response",
    },
    {
      value: "300+",
      label: "Managed Servers",
    },
  ],

  overview:
    "Our Support & Managed Cloud Services provide continuous monitoring, proactive maintenance, cloud optimization, security management, and expert support for AWS, Azure, and Google Cloud environments. We ensure your cloud infrastructure operates efficiently, securely, and without interruption.",

  features: [
    {
      title: "24/7 Infrastructure Monitoring",
      description:
        "Continuous monitoring of cloud resources, applications, and services with real-time alerting.",
    },
    {
      title: "Cloud Administration",
      description:
        "Complete management of cloud environments including provisioning, scaling, backups, and maintenance.",
    },
    {
      title: "Incident Management",
      description:
        "Rapid issue detection, troubleshooting, and recovery to minimize downtime.",
    },
    {
      title: "Security Management",
      description:
        "Continuous security monitoring, vulnerability assessments, and compliance management.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize cloud resources for maximum performance while reducing infrastructure costs.",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Automated backup strategies and disaster recovery planning for business continuity.",
    },
  ],

  process: [
    "Assessment",
    "Onboarding",
    "Monitoring",
    "Maintenance",
    "Optimization",
    "Continuous Support",
  ],

  techStack: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "CloudWatch",
    "Azure Monitor",
    "Datadog",
    "PagerDuty",
  ],

  caseStudies: [
    {
      title: "24/7 Managed Cloud Operations",
      description:
        "Provided fully managed cloud services for a global SaaS platform, maintaining 99.99% uptime while reducing operational overhead by 45% through proactive monitoring and automation.",
      href: "/case-studies/managed-cloud-services",
    },
  ],

  faqs: [
    {
      question: "Do you provide 24/7 cloud support?",
      answer:
        "Yes. Our managed services team continuously monitors your cloud infrastructure and responds quickly to incidents around the clock.",
    },
    {
      question: "Which cloud providers do you support?",
      answer:
        "We manage cloud environments across AWS, Microsoft Azure, and Google Cloud Platform, including hybrid and multi-cloud deployments.",
    },
    {
      question: "Can you optimize our cloud costs?",
      answer:
        "Absolutely. We continuously monitor resource usage, recommend right-sizing, remove unused resources, and implement cost optimization strategies.",
    },
  ],
};