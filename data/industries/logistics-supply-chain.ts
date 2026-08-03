import { ServiceData } from "@/components/services/types";

export const logisticsSupplyChain: ServiceData = {
  slug: "logistics-supply-chain",

  category: "Industries",

  title: "Logistics & Supply Chain Solutions",

  subtitle:
    "Optimize transportation, warehousing and supply chain operations with intelligent digital solutions.",

  overview:
    "IKFTECH develops modern logistics and supply chain platforms that improve operational efficiency, enhance shipment visibility and automate business processes. From fleet management and warehouse systems to real-time tracking, route optimization and predictive analytics, we help logistics companies deliver faster, smarter and more reliable services.",

  heroImage: "/images/industries/logistics-supply-chain.jpg",

  stats: [
    {
      value: "150+",
      label: "Logistics Projects",
    },
    {
      value: "10M+",
      label: "Shipments Tracked",
    },
    {
      value: "35%",
      label: "Operational Efficiency",
    },
  ],

  features: [
    {
      title: "Fleet Management",
      description:
        "Monitor vehicles, drivers and fleet performance in real time.",
    },
    {
      title: "Shipment Tracking",
      description:
        "End-to-end shipment visibility with GPS tracking and live updates.",
    },
    {
      title: "Warehouse Management",
      description:
        "Optimize inventory, storage and warehouse operations.",
    },
    {
      title: "Route Optimization",
      description:
        "Reduce transportation costs using AI-powered route planning.",
    },
    {
      title: "Supply Chain Analytics",
      description:
        "Gain real-time operational insights through advanced reporting and dashboards.",
    },
    {
      title: "ERP & Logistics Integration",
      description:
        "Integrate logistics systems with ERP, CRM and third-party platforms.",
    },
  ],

  process: [
    "Business Assessment",
    "Solution Architecture",
    "System Design",
    "Platform Development",
    "Integration",
    "Testing",
    "Deployment",
    "Continuous Optimization",
  ],

  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
  ],

  caseStudies: [
    {
      title: "Digital Logistics Platform",
      description:
        "Built a cloud-based logistics management system with real-time shipment tracking and warehouse automation.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Do you build logistics management software?",
      answer:
        "Yes. We develop fleet management, warehouse management, shipment tracking and end-to-end logistics platforms.",
    },
    {
      question: "Can you integrate logistics software with ERP systems?",
      answer:
        "Yes. We integrate logistics platforms with ERP, CRM, inventory management and third-party transportation systems.",
    },
  ],
};