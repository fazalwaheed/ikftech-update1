import { ServiceData } from "@/components/services/types";

export const machineLearning: ServiceData = {
  slug: "machine-learning",

  category: "AI & Data Innovation",

  title: "Machine Learning Solutions",

  subtitle:
    "Build predictive machine learning systems that transform business data into intelligent decisions.",

  heroImage: "/images/servimg/machine-learning.png",

  stats: [
    { value: "150+", label: "ML Models" },
    { value: "98%", label: "Prediction Accuracy" },
    { value: "40%", label: "Cost Reduction" },
    { value: "24/7", label: "Monitoring" },
  ],

  overview:
    "We design, train and deploy custom machine learning models for forecasting, automation, recommendations and business intelligence.",

  features: [
    {
      title: "Predictive Analytics",
      description: "Forecast sales, demand and customer behaviour.",
    },
    {
      title: "Computer Vision",
      description: "Image recognition and object detection.",
    },
    {
      title: "Natural Language Processing",
      description: "Extract insights from text and documents.",
    },
    {
      title: "Recommendation Systems",
      description: "Deliver personalized customer experiences.",
    },
    {
      title: "Model Training",
      description: "Custom ML model development.",
    },
    {
      title: "Production Deployment",
      description: "Deploy scalable ML APIs and services.",
    },
  ],

  process: [
    "Data Collection",
    "Data Preparation",
    "Model Training",
    "Evaluation",
    "Deployment",
  ],

  techStack: [
    "Python",
    "OpenAI",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],

  caseStudies: [
    {
      title: "Retail Forecasting Platform",
      description:
        "Improved inventory forecasting accuracy by 35% using machine learning.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Do you build custom ML models?",
      answer:
        "Yes. Every model is designed specifically for your business data.",
    },
    {
      question: "Can ML integrate into existing software?",
      answer:
        "Absolutely. We expose models through APIs and cloud deployments.",
    },
  ],
};