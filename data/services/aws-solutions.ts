import { ServiceData } from "@/components/services/types";

export const awsSolutions: ServiceData = {
  slug: "aws-solutions",

  category: "Solutions & Integrations",

  title: "AWS Solutions",

  subtitle:
    "Build secure, scalable, and cloud-native applications on Amazon Web Services with certified AWS experts.",

  heroImage: "/images/servimg/cloud.png",

  stats: [
    {
      value: "200+",
      label: "AWS Deployments",
    },
    {
      value: "99.99%",
      label: "Infrastructure Uptime",
    },
    {
      value: "35%",
      label: "Cloud Cost Savings",
    },
    {
      value: "24/7",
      label: "Managed Support",
    },
  ],

  overview:
    "Our AWS Solutions help organizations design, migrate, modernize, and manage cloud infrastructure using AWS best practices. We deliver secure, resilient, and highly available cloud environments optimized for performance and cost efficiency.",

  features: [
    {
      title: "Cloud Architecture",
      description:
        "Design scalable and secure AWS architectures following the Well-Architected Framework.",
    },
    {
      title: "Cloud Migration",
      description:
        "Migrate applications, databases, and workloads to AWS with minimal downtime.",
    },
    {
      title: "DevOps & Automation",
      description:
        "Automate infrastructure deployment using Infrastructure as Code and CI/CD pipelines.",
    },
    {
      title: "Container & Kubernetes",
      description:
        "Deploy and manage Docker containers using Amazon ECS and Amazon EKS.",
    },
    {
      title: "Monitoring & Security",
      description:
        "Implement CloudWatch, GuardDuty, IAM, and AWS Security Hub for continuous monitoring.",
    },
    {
      title: "Cost Optimization",
      description:
        "Optimize AWS resources to reduce operational costs while maintaining performance.",
    },
  ],

  process: [
    "Cloud Assessment",
    "Architecture Design",
    "Migration Planning",
    "Implementation",
    "Security Hardening",
    "Optimization",
    "Monitoring",
    "Managed Support",
  ],

  techStack: [
    "AWS EC2",
    "Amazon S3",
    "Amazon RDS",
    "AWS Lambda",
    "Amazon ECS",
    "Amazon EKS",
    "CloudFormation",
    "Terraform",
    "AWS IAM",
    "CloudWatch",
    "AWS Security Hub",
    "Route 53",
  ],

  caseStudies: [
    {
      title: "Enterprise AWS Modernization",
      description:
        "Migrated a legacy enterprise platform to AWS, improving scalability, reducing infrastructure costs by 35%, and achieving 99.99% service availability.",
      href: "/case-studies/aws-solutions",
    },
  ],

  faqs: [
    {
      question: "Do you migrate existing applications to AWS?",
      answer:
        "Yes. We provide end-to-end migration services for applications, databases, and enterprise workloads.",
    },
    {
      question: "Can you manage our AWS infrastructure?",
      answer:
        "Yes. We offer 24/7 monitoring, maintenance, optimization, security, and managed cloud services.",
    },
    {
      question: "Do you optimize AWS costs?",
      answer:
        "Absolutely. We analyze resource utilization, implement autoscaling, reserved instances, and architectural improvements to reduce cloud spending.",
    },
  ],
};