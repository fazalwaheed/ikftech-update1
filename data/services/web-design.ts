import { ServiceData } from "@/components/services/types";

export const webDesign: ServiceData = {
  slug: "web-design",

  category: "Design Services",

  title: "Web Design",

  subtitle:
    "Create modern, responsive, and conversion-focused websites that elevate your brand and deliver exceptional user experiences.",

  heroImage: "/images/servimg/full-stack-development.png",

  overview:
    "Our web design service creates modern, responsive websites that communicate clearly, load quickly and support measurable business outcomes. We combine brand-aware visual design, intuitive page structure, performance-focused implementation and SEO-friendly foundations to help visitors move from interest to action.",

  stats: [
    { value: "150+", label: "Websites Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "20+", label: "Industries" },
    { value: "24/7", label: "Support" },
  ],

  features: [
    {
      title: "Responsive Design",
      description:
        "Pixel-perfect websites optimized for desktop, tablet, and mobile devices.",
    },
    {
      title: "Custom UI Design",
      description:
        "Unique visual experiences aligned with your brand identity and goals.",
    },
    {
      title: "SEO-Friendly Structure",
      description:
        "Search engine optimized layouts and clean HTML structure.",
    },
    {
      title: "Performance Optimization",
      description:
        "Fast-loading websites with Core Web Vitals optimization.",
    },
    {
      title: "CMS Integration",
      description:
        "Manage content easily with modern CMS platforms.",
    },
    {
      title: "Ongoing Maintenance",
      description:
        "Continuous improvements, updates, and technical support.",
    },
  ],

  process: [
    "Discovery",
    "Wireframing",
    "UI Design",
    "Development",
    "Launch",
  ],

  techStack: [
    "Figma",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "WordPress",
    "Framer Motion",
    "Vercel",
  ],

  caseStudies: [
    {
      title: "Corporate Website Redesign",
      description:
        "Designed and developed a high-performance corporate website that increased conversions by 40% and reduced bounce rates significantly.",
      href: "/case-studies/corporate-website-redesign",
    },
  ],

  faqs: [
    {
      question: "Can you redesign our existing website?",
      answer:
        "Yes. We modernize outdated websites while improving performance, SEO, and usability.",
    },
    {
      question: "Will the website be mobile responsive?",
      answer:
        "Absolutely. Every website we build is fully responsive across all screen sizes.",
    },
  ],
};
