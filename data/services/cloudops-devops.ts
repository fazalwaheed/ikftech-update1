import { ServiceData } from "@/components/services/types";

export const cloudOpsDevOps: ServiceData = {
  slug: "cloudops-devops",

  category: "Cloud & Infrastructure",

  title: "CloudOps & DevOps",

  subtitle:
    "Accelerate software delivery with modern DevOps practices, cloud automation, CI/CD pipelines, and continuous infrastructure monitoring.",

  heroImage: "/images/services/cloudops-devops.webp",

  stats: [
    {
      value: "500+",
      label: "Deployments",
    },
    {
      value: "80%",
      label: "Faster Releases",
    },
    {
      value: "99.99%",
      label: "Platform Uptime",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
  ],

  overview:
    "Our CloudOps & DevOps services help organizations automate software delivery, improve infrastructure reliability, and enable continuous deployment. We build scalable DevOps pipelines, automate infrastructure management, and implement monitoring solutions that reduce downtime and increase development velocity.",

  features: [
    {
      title: "CI/CD Pipelines",
      description:
        "Automate build, testing, deployment, and release processes for faster software delivery.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Provision and manage cloud infrastructure using Terraform, CloudFormation, and Ansible.",
    },
    {
      title: "Container Orchestration",
      description:
        "Deploy and scale applications using Docker and Kubernetes.",
    },
    {
      title: "Cloud Monitoring",
      description:
        "Monitor applications, infrastructure, logs, and performance with real-time alerts.",
    },
    {
      title: "Security Automation",
      description:
        "Integrate security scanning, compliance checks, and vulnerability management into DevOps workflows.",
    },
    {
      title: "Site Reliability Engineering",
      description:
        "Improve platform reliability, scalability, disaster recovery, and operational excellence.",
    },
  ],

  process: [
    "Assessment",
    "Pipeline Design",
    "Automation",
    "Deployment",
    "Monitoring",
    "Continuous Improvement",
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
    "GitLab CI/CD",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "ArgoCD",
  ],

  caseStudies: [
    {
      title: "Enterprise DevOps Transformation",
      description:
        "Built automated CI/CD pipelines and Kubernetes infrastructure for a global SaaS company, reducing deployment time by 85% while increasing release frequency and platform reliability.",
      href: "/case-studies/cloudops-devops",
    },
  ],

  faqs: [
    {
      question: "What is the difference between DevOps and CloudOps?",
      answer:
        "DevOps focuses on automating software development and deployment, while CloudOps manages cloud infrastructure, operations, monitoring, security, and optimization. Together they create a reliable and scalable delivery platform.",
    },
    {
      question: "Can you modernize our existing CI/CD pipeline?",
      answer:
        "Yes. We assess existing DevOps workflows and redesign them using modern automation tools, Infrastructure as Code, and cloud-native best practices.",
    },
    {
      question: "Do you provide 24/7 monitoring?",
      answer:
        "Yes. We implement continuous monitoring, alerting, logging, incident response, and proactive infrastructure optimization.",
    },
  ],
};