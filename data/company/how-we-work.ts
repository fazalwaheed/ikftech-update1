import { CompanyData } from "@/components/company/types";

export const howWeWork: CompanyData = {
  slug: "how-we-work",

  title: "How We Work",

  subtitle:
    "A collaborative, engineering-led process designed to turn complex ideas into reliable digital products.",

  overview:
    "Great products are rarely created by throwing more people at a problem. Our process brings strategy, design, engineering, and AI expertise together early so important decisions are made with the full product in view.",

  heroImage: "/images/company/how-we-work.png",

  stats: [
    {
      value: "01",
      label: "Discover",
    },
    {
      value: "02",
      label: "Design",
    },
    {
      value: "03",
      label: "Build",
    },
    {
      value: "04",
      label: "Scale",
    },
  ],

  features: [
    {
      title: "Clear Discovery",
      description:
        "We start by understanding your users, business objectives, technical constraints, and success metrics.",
    },
    {
      title: "Collaborative Design",
      description:
        "Designers, engineers, and stakeholders work together to validate the right product experience before development accelerates.",
    },
    {
      title: "Focused Engineering",
      description:
        "Our teams prioritize clean architecture, scalable infrastructure, maintainable code, and measurable delivery.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Launch is not the finish line. We use real-world feedback and product data to continuously improve what we build.",
    },
  ],

  timeline: [
    {
      title: "01 — Discover",
      description:
        "We align on the problem, users, business goals, technical requirements, and measurable outcomes.",
    },
    {
      title: "02 — Design",
      description:
        "We transform requirements into user journeys, product architecture, prototypes, and a clear implementation plan.",
    },
    {
      title: "03 — Build",
      description:
        "Cross-functional teams build, test, integrate, and continuously validate the product.",
    },
    {
      title: "04 — Scale",
      description:
        "After launch, we optimize performance, introduce new capabilities, and help the product evolve with your business.",
    },
  ],
};