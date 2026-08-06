import { ServiceData } from "@/components/services/types";

export const pitchDeck: ServiceData = {
  slug: "pitch-deck",

  category: "Branding Services",

  title: "Pitch Deck Design",

  subtitle:
    "Investor-ready pitch decks that communicate your vision, validate your business model and help you secure funding.",

  
  heroImage: "/images/servimg/branding.png",

  stats: [
    {
      value: "300+",
      label: "Pitch Decks",
    },
    {
      value: "$100M+",
      label: "Funding Raised",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      value: "7 Days",
      label: "Average Delivery",
    },
  ],

  overview:
    "Our pitch deck specialists combine storytelling, strategy and visual design to create compelling presentations that capture investor attention and clearly communicate your business opportunity.",

  features: [
    {
      title: "Investor Storytelling",
      description:
        "Present your startup story with clarity, confidence and impact.",
    },
    {
      title: "Professional Design",
      description:
        "Modern layouts with premium visuals that impress investors.",
    },
    {
      title: "Financial Presentation",
      description:
        "Clearly communicate business models, projections and growth plans.",
    },
    {
      title: "Fundraising Strategy",
      description:
        "Position your company for seed, Series A and enterprise investment.",
    },
  ],

  process: [
    "Discovery",
    "Research",
    "Content Strategy",
    "Design",
    "Final Delivery",
  ],

  techStack: [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "PowerPoint",
    "Google Slides",
    "Keynote",
  ],

  caseStudies: [
    {
      title: "AI Startup Fundraising Deck",
      description:
        "Designed an investor presentation that helped an AI startup successfully secure seed funding.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Can you redesign an existing pitch deck?",
      answer:
        "Yes. We can redesign, rewrite and modernize your current presentation.",
    },
    {
      question: "Do you help with presentation content?",
      answer:
        "Absolutely. We assist with messaging, storytelling and slide structure.",
    },
  ],
};