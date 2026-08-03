import { ServiceData } from "@/components/services/types";

export const aboutUs: ServiceData = {
  slug: "about-us",

  category: "Company",

  title: "About IKFTECH",

  subtitle:
    "Building AI-first digital products, scalable software, and modern engineering solutions for startups and enterprises worldwide.",

  overview:
    "IKFTECH is a global technology company specializing in AI, cloud engineering, enterprise software, product design, and digital transformation. Our multidisciplinary teams combine strategy, engineering, and innovation to help organizations launch products faster, modernize legacy systems, and create sustainable competitive advantages.",

  heroImage: "/images/company/about-us.jpg",

  stats: [
    {
      value: "250+",
      label: "Projects Delivered",
    },
    {
      value: "25+",
      label: "Industries Served",
    },
    {
      value: "50+",
      label: "Technology Experts",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
    },
  ],

  features: [
    {
      title: "AI-First Innovation",
      description:
        "Building intelligent products powered by modern AI technologies.",
    },
    {
      title: "Global Engineering",
      description:
        "Distributed engineering teams delivering worldwide.",
    },
    {
      title: "Product Development",
      description:
        "End-to-end software development from idea to launch.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and DevOps expertise.",
    },
    {
      title: "UX & Product Design",
      description:
        "Human-centered digital experiences that drive engagement.",
    },
    {
      title: "Long-Term Partnerships",
      description:
        "Helping businesses continuously innovate and scale.",
    },
  ],

  process: [
    "Discover",
    "Strategize",
    "Design",
    "Develop",
    "Deploy",
    "Scale",
    "Optimize",
  ],

  techStack: [
    "OpenAI",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
  ],

  caseStudies: [
    {
      title: "Enterprise Digital Transformation",
      description:
        "Modernized enterprise operations with AI-powered automation.",
      href: "/work",
    },
    {
      title: "Cloud Migration Success",
      description:
        "Migrated legacy systems to scalable cloud infrastructure.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "What does IKFTECH specialize in?",
      answer:
        "We specialize in AI solutions, software engineering, cloud infrastructure, enterprise systems, product design, and digital transformation.",
    },
    {
      question: "Do you work with startups and enterprises?",
      answer:
        "Yes. We partner with startups, SMEs, and global enterprises across multiple industries.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve fintech, healthcare, SaaS, logistics, retail, Web3, manufacturing, education, and many other sectors.",
    },
  ],
};