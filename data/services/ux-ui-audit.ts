import { ServiceData } from "@/components/services/types";

export const uxUiAudit: ServiceData = {
  slug: "ux-ui-audit",

  category: "Design Services",

  title: "UX/UI Audit",

  subtitle:
    "Identify usability issues, improve user journeys, and increase conversions through a comprehensive UX/UI evaluation.",

  heroImage: "/images/services/ux-ui-audit.webp",

  stats: [
    {
      value: "300+",
      label: "Audits Completed",
    },
    {
      value: "40%",
      label: "Average UX Improvement",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      value: "14+",
      label: "Years Experience",
    },
  ],

  overview:
    "Our UX/UI Audit evaluates every aspect of your digital product—from navigation and accessibility to visual design and conversion flows. We deliver actionable recommendations that improve usability, customer satisfaction, and business performance.",

  features: [
    {
      title: "Usability Review",
      description:
        "Evaluate navigation, user flows, task completion, and interaction patterns.",
    },
    {
      title: "UI Assessment",
      description:
        "Review typography, colors, spacing, consistency, and visual hierarchy.",
    },
    {
      title: "Accessibility Analysis",
      description:
        "Assess compliance with WCAG accessibility guidelines.",
    },
    {
      title: "Performance & Mobile Review",
      description:
        "Analyze responsiveness, loading speed, and mobile usability.",
    },
    {
      title: "Conversion Optimization",
      description:
        "Identify friction points affecting leads, sign-ups, and purchases.",
    },
    {
      title: "Actionable Recommendations",
      description:
        "Deliver a prioritized roadmap with practical UI/UX improvements.",
    },
  ],

  process: [
    "Product Review",
    "User Journey Analysis",
    "UX Evaluation",
    "UI Assessment",
    "Recommendations",
    "Presentation",
  ],

  techStack: [
    "Figma",
    "Hotjar",
    "Google Analytics",
    "Microsoft Clarity",
    "Maze",
    "Lighthouse",
    "Next.js",
    "React",
  ],

  caseStudies: [
    {
      title: "Enterprise SaaS UX Audit",
      description:
        "Performed a complete UX audit that reduced user friction, increased conversion rates by 34%, and improved customer satisfaction across the platform.",
      href: "/case-studies/ux-ui-audit",
    },
  ],

  faqs: [
    {
      question: "What do we receive after the audit?",
      answer:
        "You'll receive a comprehensive report with UX findings, UI improvements, usability issues, accessibility recommendations, and prioritized action items.",
    },
    {
      question: "Do you redesign the product after the audit?",
      answer:
        "Yes. We can redesign and implement all recommended improvements after completing the audit.",
    },
    {
      question: "Can you audit mobile applications as well?",
      answer:
        "Absolutely. We perform UX/UI audits for web platforms, mobile apps, SaaS products, and enterprise software.",
    },
  ],
};