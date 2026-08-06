import { ServiceData } from "@/components/services/types";

export const applicationDevelopment: ServiceData = {
  slug: "application-development",
  category: "Engineering",
  title: "Application Development",
  subtitle:
    "Enterprise-grade web applications that streamline operations and improve customer experience.",
  heroImage: "/images/servimg/full-stack-development.png",

  stats: [
    { value: "250+", label: "Applications" },
    { value: "99.9%", label: "Uptime" },
    { value: "95%", label: "Satisfaction" },
    { value: "14+", label: "Years" },
  ],

  overview:
    "We design and develop secure, scalable applications tailored to business requirements.",

  features: [
    {
      title: "Custom Applications",
      description: "Business-focused software.",
    },
    {
      title: "Enterprise Systems",
      description: "ERP, CRM and internal portals.",
    },
    {
      title: "Cloud Native",
      description: "AWS, Azure and GCP deployment.",
    },
    {
      title: "API Integration",
      description: "Connect with existing systems.",
    },
  ],

  process: [
    "Discovery",
    "Design",
    "Development",
    "Testing",
    "Deployment",
  ],

  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],

  caseStudies: [
    {
      title: "Enterprise Portal",
      description: "Unified operations across departments.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Do you build enterprise software?",
      answer: "Yes.",
    },
    {
      question: "Can you integrate existing systems?",
      answer: "Absolutely.",
    },
  ],
};