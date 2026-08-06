import { ServiceData } from "@/components/services/types";

export const brandIdentity: ServiceData = {
  slug: "brand-identity",

  category: "Branding Services",

  title: "Brand Identity",

  subtitle:
    "Create a memorable, consistent brand identity that builds trust and differentiates your business.",

  heroImage: "/images/servimg/branding.png",

  overview:
    "Our brand identity service turns your business strategy into a clear visual and verbal system. From discovery and positioning to logo systems, colors, typography, messaging and usage guidelines, we create a consistent identity your team can use confidently across every customer touchpoint.",

  stats: [
    {
      value: "100+",
      label: "Brands Created",
    },
    {
      value: "4 Weeks",
      label: "Delivery",
    },
    {
      value: "20+",
      label: "Industries",
    },
    {
      value: "100%",
      label: "Custom Design",
    },
  ],

  features: [
    {
      title: "Brand Discovery",
      description:
        "Understand your vision, audience, competitors, and business goals.",
    },
    {
      title: "Visual Identity",
      description:
        "Develop logos, colors, typography, and visual systems.",
    },
    {
      title: "Brand Messaging",
      description:
        "Craft brand voice, tone, mission, and messaging guidelines.",
    },
    {
      title: "Brand Guidelines",
      description:
        "Create comprehensive documentation for consistent branding.",
    },
    {
      title: "Marketing Assets",
      description:
        "Design business cards, presentations, social media kits, and more.",
    },
    {
      title: "Brand Support",
      description:
        "Ongoing design support to maintain consistency across channels.",
    },
  ],

  process: [
    "Discovery",
    "Research",
    "Design",
    "Refinement",
    "Delivery",
  ],

  techStack: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma",
    "Adobe InDesign",
    "Canva",
  ],

  caseStudies: [
    {
      title: "Complete Brand Identity for SaaS Startup",
      description:
        "Designed a modern visual identity that increased customer trust and improved brand recognition across digital platforms.",
      href: "/case-studies/saas-brand-identity",
    },
  ],

  faqs: [
    {
      question: "What does a brand identity package include?",
      answer:
        "Logo, typography, color palette, visual guidelines, messaging, and essential marketing assets.",
    },
    {
      question: "Can you redesign an existing brand?",
      answer:
        "Yes. We modernize existing brands while preserving their core identity.",
    },
  ],
};
