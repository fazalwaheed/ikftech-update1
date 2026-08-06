import { ServiceData } from "@/components/services/types";

export const cloudCostOptimization: ServiceData = {
  slug: "cloud-cost-optimization",

  category: "Cloud & Infrastructure",

  title: "Cloud Cost Optimization",

  subtitle:
    "Reduce cloud spending without sacrificing performance through intelligent optimization, automation, and continuous cost governance.",

  heroImage: "/images/servimg/cloud.png",

  stats: [
    {
      value: "45%",
      label: "Average Cost Savings",
    },
    {
      value: "$5M+",
      label: "Cloud Spend Optimized",
    },
    {
      value: "99.99%",
      label: "Service Availability",
    },
    {
      value: "24/7",
      label: "Cost Monitoring",
    },
  ],

  overview:
    "Our Cloud Cost Optimization service helps organizations maximize the value of their cloud investments by identifying waste, optimizing infrastructure, automating resource management, and implementing FinOps best practices. We continuously monitor cloud environments to ensure peak performance at the lowest possible cost.",

  features: [
    {
      title: "Cloud Cost Assessment",
      description:
        "Analyze cloud infrastructure, workloads, and billing reports to identify unnecessary spending.",
    },
    {
      title: "Resource Rightsizing",
      description:
        "Optimize compute, storage, and database resources based on actual usage patterns.",
    },
    {
      title: "Reserved & Savings Plans",
      description:
        "Reduce long-term cloud costs using Reserved Instances and Savings Plans.",
    },
    {
      title: "Automated Scaling",
      description:
        "Implement auto-scaling policies that adjust infrastructure based on real-time demand.",
    },
    {
      title: "FinOps Implementation",
      description:
        "Establish governance, budgeting, reporting, and cost accountability across cloud teams.",
    },
    {
      title: "Continuous Cost Monitoring",
      description:
        "Monitor cloud usage, generate reports, and receive proactive optimization recommendations.",
    },
  ],

  process: [
    "Assessment",
    "Usage Analysis",
    "Optimization",
    "Automation",
    "Monitoring",
    "Continuous Improvement",
  ],

  techStack: [
    "AWS Cost Explorer",
    "AWS Trusted Advisor",
    "Azure Cost Management",
    "Google Cloud Billing",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CloudWatch",
    "Grafana",
    "Prometheus",
    "Datadog",
    "Power BI",
  ],

  caseStudies: [
    {
      title: "Enterprise Cloud Cost Reduction",
      description:
        "Optimized cloud infrastructure for a global SaaS company, reducing annual cloud spending by 42% while improving application performance and maintaining high availability.",
      href: "/case-studies/cloud-cost-optimization",
    },
  ],

  faqs: [
    {
      question: "How much can cloud optimization reduce costs?",
      answer:
        "Most organizations reduce cloud spending by 20–45% after implementing optimization strategies, depending on workload efficiency and governance maturity.",
    },
    {
      question: "Do you support AWS, Azure, and Google Cloud?",
      answer:
        "Yes. We provide optimization services across Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud environments.",
    },
    {
      question: "Will optimization impact application performance?",
      answer:
        "No. Our recommendations focus on eliminating waste while maintaining or improving application performance, reliability, and scalability.",
    },
  ],
};