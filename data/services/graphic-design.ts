import { ServiceData } from "@/components/services/types";

export const graphicDesign: ServiceData = {
  slug: "graphic-design",

  category: "Branding Services",

  title: "Graphic Design",

  subtitle:
    "Creative graphic design services that strengthen your marketing, branding, and digital presence.",

  heroImage: "/images/services/graphic-design.webp",

  overview:
    "Our graphic design service creates polished marketing and brand assets for digital, print and campaign use. We combine strong visual direction with practical production workflows so every design feels on-brand, communicates clearly and is ready for real-world use.",

  stats: [
    {
      value: "500+",
      label: "Design Projects",
    },
    {
      value: "48 Hours",
      label: "Average Turnaround",
    },
    {
      value: "100%",
      label: "Custom Design",
    },
    {
      value: "24/7",
      label: "Support",
    },
  ],

  features: [
    {
      title: "Marketing Materials",
      description:
        "Brochures, flyers, posters, and promotional assets.",
    },
    {
      title: "Social Media Graphics",
      description:
        "High-performing visuals for all major platforms.",
    },
    {
      title: "Presentation Design",
      description:
        "Professional PowerPoint and investor presentations.",
    },
    {
      title: "Advertising Creatives",
      description:
        "Digital ads designed for better engagement.",
    },
    {
      title: "Print Design",
      description:
        "Business cards, packaging, banners, and more.",
    },
    {
      title: "Brand Consistency",
      description:
        "Maintain visual consistency across all assets.",
    },
  ],

  process: [
    "Brief",
    "Concept",
    "Design",
    "Revision",
    "Delivery",
  ],

  techStack: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Figma",
    "Canva",
  ],

  caseStudies: [
    {
      title: "Marketing Campaign Design",
      description:
        "Designed a complete campaign that improved engagement by over 40%.",
      href: "/case-studies/marketing-design",
    },
  ],

  faqs: [
    {
      question: "Can you create designs for social media?",
      answer:
        "Yes. We create graphics optimized for all major social platforms.",
    },
    {
      question: "Do you provide editable source files?",
      answer:
        "Yes. All final source files are included.",
    },
  ],
};
