import {
  Target,
  PenTool,
  Code2,
  TrendingUp,
} from "lucide-react";

export const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    icon: Target,
    duration: "1–2 Weeks",
    description:
      "Align on goals, scope, and success metrics before any design or engineering begins.",

    points: [
      "Strategy Workshop",
      "Requirements",
      "Roadmap",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Design",
    icon: PenTool,
    duration: "2–3 Weeks",
    description:
      "Prototype the product experience and validate ideas before development.",

    points: [
      "UX/UI Design",
      "Wireframes",
      "Prototype",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Build",
    icon: Code2,
    duration: "Sprint Based",
    description:
      "Senior engineers build production-ready software with AI-assisted workflows.",

    points: [
      "Development",
      "QA Testing",
      "Deployment",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Scale",
    icon: TrendingUp,
    duration: "Ongoing",
    description:
      "Monitor, optimise and continuously improve after launch.",

    points: [
      "Monitoring",
      "Optimisation",
      "Support",
    ],
  },
];