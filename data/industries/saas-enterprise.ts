import { ServiceData } from "@/components/services/types";

export const saasEnterprise: ServiceData = {
  slug: "saas-enterprise",

  category: "Industries",

  title: "SaaS & Enterprise Software Solutions",

  subtitle:
    "Scalable cloud-native SaaS platforms and enterprise applications that accelerate business growth.",

  overview:
    "IKFTECH designs and develops secure, high-performance SaaS platforms and enterprise software tailored to modern organizations. From CRM and ERP systems to workflow automation and multi-tenant cloud applications, we deliver scalable digital products that improve operational efficiency and customer experience.",

  heroImage: "/images/servimg/supply.PNG",

  stats: [
    {
      value: "150+",
      label: "Enterprise Projects",
    },
    {
      value: "99.9%",
      label: "Platform Uptime",
    },
    {
      value: "1M+",
      label: "Users Supported",
    },
  ],

  features: [
    {
      title: "Multi-Tenant SaaS Platforms",
      description:
        "Build scalable cloud-based SaaS products with secure tenant isolation.",
    },
    {
      title: "CRM & ERP Development",
      description:
        "Custom enterprise systems that streamline business operations.",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive business processes to improve productivity.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Deploy secure, scalable applications on AWS, Azure and Google Cloud.",
    },
    {
      title: "API Integrations",
      description:
        "Connect enterprise software with third-party systems and services.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Real-time dashboards and reporting for informed business decisions.",
    },
  ],

  process: [
    "Business Discovery",
    "Solution Architecture",
    "UI/UX Design",
    "Development",
    "Quality Assurance",
    "Deployment",
    "Maintenance & Scaling",
  ],

  techStack: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Enterprise SaaS Platform",
      description:
        "Delivered a cloud-native SaaS application supporting over one million users worldwide.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Do you build custom SaaS platforms?",
      answer:
        "Yes. We develop secure multi-tenant SaaS applications tailored to your business model.",
    },
    {
      question: "Can you modernize legacy enterprise software?",
      answer:
        "Yes. We migrate and modernize legacy systems using modern cloud-native technologies.",
    },
  ],
};