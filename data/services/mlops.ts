import { ServiceData } from "@/components/services/types";

export const mlops: ServiceData = {
  slug: "mlops",

  category: "AI & Data Innovation",

  title: "MLOps & AI Infrastructure",

  subtitle:
    "Deploy, monitor and scale machine learning models with enterprise-grade MLOps infrastructure.",

  heroImage: "/images/services/mlops.webp",

  stats: [
    { value: "99.99%", label: "Platform Uptime" },
    { value: "300+", label: "Model Deployments" },
    { value: "80%", label: "Deployment Automation" },
    { value: "24/7", label: "Monitoring" },
  ],

  overview:
    "Automate the entire AI lifecycle from training and versioning to deployment, monitoring and continuous optimization.",

  features: [
    { title: "Model Deployment", description: "Deploy ML models to production." },
    { title: "CI/CD Pipelines", description: "Automated testing and deployment." },
    { title: "Monitoring", description: "Detect drift, latency and failures." },
    { title: "Version Control", description: "Track datasets and model versions." },
    { title: "Containerization", description: "Docker & Kubernetes infrastructure." },
    { title: "Scalable Infrastructure", description: "Cloud-native AI platforms." },
  ],

  process: [
    "Infrastructure Assessment",
    "Pipeline Design",
    "Automation",
    "Deployment",
    "Monitoring",
  ],

  techStack: [
    "Python",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Redis",
    "PostgreSQL",
    "OpenAI",
  ],

  caseStudies: [
    {
      title: "Enterprise MLOps Platform",
      description:
        "Reduced model deployment time from days to less than one hour.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "What is MLOps?",
      answer:
        "MLOps combines machine learning, DevOps and automation for production AI.",
    },
    {
      question: "Can you modernize existing AI infrastructure?",
      answer:
        "Yes. We upgrade legacy ML environments into scalable cloud-native platforms.",
    },
  ],
};