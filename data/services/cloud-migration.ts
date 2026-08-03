import { ServiceData } from "@/components/services/types";

export const cloudMigration: ServiceData = {
  slug: "cloud-migration",

  category: "Cloud & Infrastructure",

  title: "Cloud Migration",

  subtitle:
    "Seamlessly migrate applications, infrastructure, and data to the cloud with minimal downtime and maximum business continuity.",

  heroImage: "/images/services/cloud-migration.webp",

  stats: [
    {
      value: "200+",
      label: "Migrations",
    },
    {
      value: "99.9%",
      label: "Success Rate",
    },
    {
      value: "60%",
      label: "Faster Deployment",
    },
    {
      value: "24/7",
      label: "Migration Support",
    },
  ],

  overview:
    "Our Cloud Migration services help businesses modernize legacy infrastructure by securely moving applications, databases, and workloads to AWS, Azure, or Google Cloud. We ensure business continuity, improved scalability, enhanced security, and optimized cloud performance throughout the migration journey.",

  features: [
    {
      title: "Migration Assessment",
      description:
        "Analyze applications, infrastructure, and dependencies to create a detailed migration roadmap.",
    },
    {
      title: "Application Migration",
      description:
        "Move web, mobile, and enterprise applications to modern cloud platforms with minimal downtime.",
    },
    {
      title: "Database Migration",
      description:
        "Securely migrate SQL and NoSQL databases while maintaining data integrity and availability.",
    },
    {
      title: "Infrastructure Migration",
      description:
        "Transition servers, virtual machines, and storage systems to cloud-native infrastructure.",
    },
    {
      title: "Security & Compliance",
      description:
        "Protect sensitive workloads with enterprise-grade security, encryption, and compliance controls.",
    },
    {
      title: "Post-Migration Optimization",
      description:
        "Fine-tune cloud resources for better performance, reliability, and cost efficiency.",
    },
  ],

  process: [
    "Assessment",
    "Planning",
    "Migration",
    "Validation",
    "Optimization",
    "Support",
  ],

  techStack: [
    "AWS Migration Hub",
    "Azure Migrate",
    "Google Cloud Migrate",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Ansible",
    "CloudFormation",
    "GitHub Actions",
    "Jenkins",
    "Prometheus",
    "Grafana",
  ],

  caseStudies: [
    {
      title: "Global Enterprise Cloud Migration",
      description:
        "Migrated over 300 enterprise workloads from on-premises infrastructure to AWS, reducing operational costs by 40% while improving application availability and scalability.",
      href: "/case-studies/cloud-migration",
    },
  ],

  faqs: [
    {
      question: "Which cloud providers do you support?",
      answer:
        "We provide migration services for AWS, Microsoft Azure, and Google Cloud Platform.",
    },
    {
      question: "Can you migrate legacy applications?",
      answer:
        "Yes. We migrate legacy applications using rehosting, replatforming, refactoring, or rebuilding strategies based on business needs.",
    },
    {
      question: "Will there be downtime during migration?",
      answer:
        "We use phased migration strategies to minimize downtime and ensure business continuity throughout the migration process.",
    },
  ],
};