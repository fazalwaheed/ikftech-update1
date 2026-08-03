import { ServiceData } from "@/components/services/types";

export const infrastructureModernization: ServiceData = {
  slug: "infrastructure-modernization",

  category: "Cloud & Infrastructure",

  title: "Infrastructure Modernization",

  subtitle:
    "Transform legacy infrastructure into secure, scalable, cloud-ready platforms that improve performance, resilience, and operational efficiency.",

  heroImage: "/images/services/infrastructure-modernization.webp",

  stats: [
    {
      value: "250+",
      label: "Modernized Systems",
    },
    {
      value: "50%",
      label: "Lower Infrastructure Costs",
    },
    {
      value: "99.99%",
      label: "Availability",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
  ],

  overview:
    "We help organizations modernize outdated infrastructure by replacing legacy systems with cloud-native, containerized, and automated environments. Our experts improve reliability, scalability, security, and performance while reducing operational costs and preparing businesses for future growth.",

  features: [
    {
      title: "Legacy Infrastructure Assessment",
      description:
        "Evaluate servers, storage, networks, and applications to identify modernization opportunities.",
    },
    {
      title: "Infrastructure Re-Architecture",
      description:
        "Redesign IT environments using modern cloud-native architecture and best practices.",
    },
    {
      title: "Containerization",
      description:
        "Modernize applications with Docker and Kubernetes for portability and scalability.",
    },
    {
      title: "Automation",
      description:
        "Implement Infrastructure as Code (IaC) and automated provisioning for faster deployments.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improve system speed, reliability, and resource utilization across infrastructure.",
    },
    {
      title: "Security Modernization",
      description:
        "Strengthen infrastructure security with zero-trust architecture, monitoring, and compliance controls.",
    },
  ],

  process: [
    "Assessment",
    "Planning",
    "Architecture",
    "Modernization",
    "Testing",
    "Optimization",
  ],

  techStack: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "GitHub Actions",
    "Jenkins",
    "CloudFormation",
    "Prometheus",
    "Grafana",
  ],

  caseStudies: [
    {
      title: "Legacy Infrastructure Transformation",
      description:
        "Modernized an enterprise infrastructure by migrating legacy workloads into containerized cloud environments, reducing operational costs by 45% and improving system reliability.",
      href: "/case-studies/infrastructure-modernization",
    },
  ],

  faqs: [
    {
      question: "Why modernize legacy infrastructure?",
      answer:
        "Modern infrastructure improves security, scalability, performance, business continuity, and reduces long-term operational costs.",
    },
    {
      question: "Can existing applications be modernized?",
      answer:
        "Yes. Applications can be rehosted, replatformed, refactored, or rebuilt depending on business objectives.",
    },
    {
      question: "Do you support hybrid environments?",
      answer:
        "Absolutely. We modernize on-premises, hybrid, and multi-cloud infrastructures while ensuring seamless integration.",
    },
  ],
};