import { ServiceData } from "@/components/services/types";

export const landingPage: ServiceData = {
  slug: "landing-page",
  category: "Engineering",
  title: "Landing Page Development",
  subtitle:
    "High-converting landing pages built for marketing campaigns and lead generation.",
  
  heroImage: "/images/servimg/full-stack-development.png",

  stats: [
    { value: "300+", label: "Pages" },
    { value: "40%", label: "Higher Conversion" },
    { value: "95+", label: "PageSpeed" },
    { value: "SEO", label: "Optimized" },
  ],

  overview:
    "We build lightning-fast landing pages optimized for conversions and SEO.",

  features: [
    {
      title: "Responsive Design",
      description: "Perfect on every device.",
    },
    {
      title: "SEO Ready",
      description: "Optimized for search engines.",
    },
    {
      title: "Fast Performance",
      description: "Core Web Vitals optimized.",
    },
    {
      title: "Analytics",
      description: "GA4 & conversion tracking.",
    },
  ],

  process: [
    "Research",
    "Design",
    "Development",
    "Optimization",
    "Launch",
  ],

  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Vercel",
    "GA4",
  ],

  caseStudies: [
    {
      title: "SaaS Landing Page",
      description: "Increased conversion by 38%.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can you redesign existing pages?",
      answer: "Yes.",
    },
    {
      question: "Do you optimize for SEO?",
      answer: "Absolutely.",
    },
  ],
};