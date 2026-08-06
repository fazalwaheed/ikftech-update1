import { ServiceData } from "@/components/services/types";

export const customAiSolutions: ServiceData = {
  slug: "custom-ai-solutions",
  category: "Engineering",
  title: "Custom AI Solutions",
  subtitle:
    "Tailor-made AI systems built around your business processes and goals.",
 
  heroImage: "/images/servimg/ai-agents.png",

  stats: [
    { value: "80+", label: "AI Systems" },
    { value: "95%", label: "Accuracy" },
    { value: "60%", label: "Automation" },
    { value: "24/7", label: "Support" },
  ],

  overview:
    "From conversational AI to intelligent automation, we design custom AI solutions that solve real business challenges.",

  features: [
    {
      title: "Generative AI",
      description: "LLM-powered applications.",
    },
    {
      title: "Automation",
      description: "Replace repetitive workflows.",
    },
    {
      title: "Computer Vision",
      description: "Image recognition solutions.",
    },
    {
      title: "Predictive Analytics",
      description: "Forecast business outcomes.",
    },
  ],

  process: [
    "Discovery",
    "AI Strategy",
    "Development",
    "Deployment",
    "Optimization",
  ],

  techStack: [
    "OpenAI",
    "Claude",
    "Gemini",
    "Python",
    "LangChain",
    "Docker",
    "AWS",
  ],

  caseStudies: [
    {
      title: "AI Document Processing",
      description: "Reduced manual processing by 75%.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can you build AI specifically for our business?",
      answer: "Yes. Every solution is custom-built around your workflows.",
    },
    {
      question: "Do you support deployment and maintenance?",
      answer: "Yes. We provide full lifecycle support.",
    },
  ],
};