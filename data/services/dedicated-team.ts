import { ServiceData } from "@/components/services/types";

export const dedicatedTeam: ServiceData = {
  slug: "dedicated-team",

  category: "Business & Engagement",

  title: "Dedicated Development Teams",

  subtitle:
    "Scale your engineering capacity with experienced developers, designers and QA engineers working as an extension of your team.",

  overview:
    "IKFTECH provides fully managed dedicated teams that integrate into your workflows. We help startups and enterprises rapidly scale software development while maintaining quality, transparency and predictable delivery.",

  heroImage: "/images/servimg/bussiness.png",

  stats: [
    { value: "150+", label: "Engineers" },
    { value: "30+", label: "Technologies" },
    { value: "95%", label: "Retention Rate" },
  ],

  features: [
    {
      title: "Dedicated Developers",
      description: "Experienced engineers aligned with your project.",
    },
    {
      title: "Agile Delivery",
      description: "Sprint-based development with transparent reporting.",
    },
    {
      title: "Flexible Scaling",
      description: "Increase or reduce team size whenever required.",
    },
    {
      title: "Technical Leadership",
      description: "Architects and project managers included.",
    },
    {
      title: "QA & Testing",
      description: "Dedicated quality assurance specialists.",
    },
    {
      title: "Long-Term Partnership",
      description: "Reliable offshore development teams.",
    },
  ],

  process: [
    "Requirement Analysis",
    "Team Selection",
    "Onboarding",
    "Sprint Planning",
    "Development",
    "QA",
    "Continuous Delivery",
  ],

  techStack: [
    "React",
    "Next.js",
    "Node.js",
    ".NET",
    "Java",
    "Python",
    "AWS",
    "Azure",
  ],

  caseStudies: [
    {
      title: "Dedicated Product Engineering",
      description: "Scaled enterprise development team.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "How quickly can a team start?",
      answer:
        "Most dedicated teams can begin within 1–3 weeks depending on skill requirements.",
    },
    {
      question: "Can we manage the team directly?",
      answer:
        "Yes. Your dedicated team works as an extension of your organization.",
    },
  ],
};