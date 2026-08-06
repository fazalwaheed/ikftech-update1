import { ServiceData } from "@/components/services/types";

export const cloudEngineering: ServiceData = {
  slug: "cloud-engineering",

  category: "Cloud & Infrastructure",

  title: "Cloud Engineering",

  subtitle:
    "Design, build, and manage secure cloud-native applications and infrastructure that scale with your business.",

 heroImage: "/images/servimg/cloud.png",

  stats: [
    {
      value: "300+",
      label: "Cloud Projects",
    },
    {
      value: "99.99%",
      label: "Availability",
    },
    {
      value: "40%",
      label: "Lower Infrastructure Cost",
    },
    {
      value: "24/7",
      label: "Cloud Monitoring",
    },
  ],

  overview:
    "Our Cloud Engineering services help organizations build reliable, secure, and scalable cloud environments using AWS, Microsoft Azure, and Google Cloud. From cloud-native application development to infrastructure automation and continuous delivery, we enable businesses to innovate faster while optimizing operational efficiency.",

  features: [
    {
      title: "Cloud Architecture",
      description:
        "Design scalable, resilient, and secure cloud architectures tailored to business needs.",
    },
    {
      title: "Cloud-Native Development",
      description:
        "Develop modern applications using microservices, containers, and serverless technologies.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible.",
    },
    {
      title: "Container Orchestration",
      description:
        "Deploy and manage Kubernetes clusters for highly available workloads.",
    },
    {
      title: "CI/CD Automation",
      description:
        "Implement automated build, testing, and deployment pipelines for rapid delivery.",
    },
    {
      title: "Monitoring & Optimization",
      description:
        "Continuously monitor infrastructure health, security, and cloud resource utilization.",
    },
  ],

  process: [
    "Discovery",
    "Architecture",
    "Development",
    "Deployment",
    "Monitoring",
    "Optimization",
  ],

  techStack: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CloudFormation",
    "Ansible",
    "GitHub Actions",
    "Jenkins",
    "Prometheus",
    "Grafana",
  ],

  caseStudies: [
    {
      title: "Cloud-Native Platform for SaaS Company",
      description:
        "Designed and deployed a Kubernetes-based cloud platform serving millions of monthly users while reducing infrastructure costs by 38% and improving deployment speed by 70%.",
      href: "/case-studies/cloud-engineering",
    },
  ],

  faqs: [
    {
      question: "Which cloud platforms do you support?",
      answer:
        "We specialize in Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
    },
    {
      question: "Can you modernize existing applications?",
      answer:
        "Yes. We modernize legacy applications into cloud-native architectures using containers, microservices, and serverless technologies.",
    },
    {
      question: "Do you provide ongoing cloud support?",
      answer:
        "Yes. We provide continuous monitoring, optimization, maintenance, and 24/7 cloud operations support.",
    },
  ],
};