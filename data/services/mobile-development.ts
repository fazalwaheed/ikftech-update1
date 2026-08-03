import { ServiceData } from "@/components/services/types";

export const mobileDevelopment: ServiceData = {
  slug: "mobile-development",
  category: "Engineering",
  title: "Mobile Development",
  subtitle:
    "Native and cross-platform mobile applications for Android and iOS.",
  heroImage: "/images/services/mobile-development.webp",

  stats: [
    { value: "150+", label: "Apps" },
    { value: "4.8★", label: "Average Rating" },
    { value: "95%", label: "Retention" },
    { value: "24/7", label: "Support" },
  ],

  overview:
    "We develop modern mobile applications using Flutter and React Native for startups and enterprises.",

  features: [
    {
      title: "Android Development",
      description: "Native Android apps.",
    },
    {
      title: "iOS Development",
      description: "Premium iPhone applications.",
    },
    {
      title: "Cross Platform",
      description: "React Native & Flutter.",
    },
    {
      title: "App Maintenance",
      description: "Continuous improvements.",
    },
  ],

  process: [
    "Planning",
    "UI Design",
    "Development",
    "Testing",
    "Publishing",
  ],

  techStack: [
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin",
    "Firebase",
    "AWS",
  ],

  caseStudies: [
    {
      title: "Healthcare Mobile App",
      description: "100k+ downloads.",
      href: "/case-studies",
    },
  ],

  faqs: [
    {
      question: "Do you build Android and iOS apps?",
      answer: "Yes.",
    },
    {
      question: "Can you publish to app stores?",
      answer: "Yes.",
    },
  ],
};