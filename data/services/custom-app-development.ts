import { ServiceData } from "@/components/services/types";

export const customAppDevelopment: ServiceData = {
  slug: "custom-app-development",

  category: "Design Services",

  title: "Custom App Development Services",

  subtitle:
    "Build secure, scalable, and high-performance custom applications tailored to your unique business processes and long-term growth.",

  heroImage: "/images/services/custom-app-development.webp",

  overview:
    "Our custom app development service turns complex business requirements into secure, scalable software built around the way your team actually works. We handle discovery, architecture, UI/UX, engineering, integrations, testing and deployment so your application is ready for daily operations and future growth.",

  stats: [
    {
      value: "250+",
      label: "Applications Delivered",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "15+",
      label: "Industries",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ],

  features: [
    {
      title: "Business Analysis",
      description:
        "Understand workflows, business goals, and technical requirements before development.",
    },
    {
      title: "Custom Software Development",
      description:
        "Build applications specifically designed around your organization's needs.",
    },
    {
      title: "Cloud-Native Architecture",
      description:
        "Develop scalable applications optimized for AWS, Azure, and Google Cloud.",
    },
    {
      title: "API Integration",
      description:
        "Integrate CRMs, ERPs, payment gateways, AI services, and third-party platforms.",
    },
    {
      title: "Enterprise Security",
      description:
        "Implement authentication, authorization, encryption, and secure coding practices.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Continuous updates, monitoring, performance optimization, and long-term support.",
    },
  ],

  process: [
    "Discovery",
    "Planning",
    "UI/UX Design",
    "Development",
    "Testing",
    "Deployment",
  ],

  techStack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
  ],

  caseStudies: [
    {
      title: "Enterprise Operations Platform",
      description:
        "Developed a custom business platform that automated workflows, reduced manual effort by 65%, and improved operational efficiency across multiple departments.",
      href: "/case-studies/custom-enterprise-platform",
    },
  ],

  faqs: [
    {
      question: "Why choose custom software instead of off-the-shelf solutions?",
      answer:
        "Custom applications are designed specifically for your business, providing better scalability, flexibility, security, and long-term value.",
    },
    {
      question: "Can you modernize our existing application?",
      answer:
        "Yes. We upgrade legacy applications using modern technologies while preserving business continuity.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We offer maintenance, monitoring, feature enhancements, and long-term technical support.",
    },
  ],
};
