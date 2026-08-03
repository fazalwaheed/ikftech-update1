import { ServiceData } from "@/components/services/types";

export const healthcareWellness: ServiceData = {
  slug: "healthcare-wellness",

  category: "Industries",

  title: "Healthcare & Wellness Solutions",

  subtitle:
    "Secure digital healthcare platforms, telemedicine solutions and patient-centric applications.",

  overview:
    "IKFTECH develops modern healthcare software that improves patient care, streamlines clinical workflows and enables secure digital health experiences. We build HIPAA-ready healthcare platforms, telemedicine applications, patient portals, wellness solutions and healthcare analytics systems for hospitals, clinics and health-tech startups.",

  heroImage: "/images/industries/healthcare-wellness.jpg",

  stats: [
    {
      value: "80+",
      label: "Healthcare Projects",
    },
    {
      value: "500K+",
      label: "Patients Served",
    },
    {
      value: "99.9%",
      label: "Platform Availability",
    },
  ],

  features: [
    {
      title: "Telemedicine Platforms",
      description:
        "Secure virtual consultation and video appointment systems.",
    },
    {
      title: "Patient Portals",
      description:
        "Online appointment booking, medical records and communication.",
    },
    {
      title: "Electronic Health Records",
      description:
        "Custom EHR and EMR solutions for hospitals and clinics.",
    },
    {
      title: "Healthcare Analytics",
      description:
        "Real-time dashboards and clinical reporting for better decisions.",
    },
    {
      title: "Wellness Applications",
      description:
        "Fitness, nutrition and remote patient monitoring platforms.",
    },
    {
      title: "Healthcare Integrations",
      description:
        "Integrate healthcare systems using HL7, FHIR and secure APIs.",
    },
  ],

  process: [
    "Requirements Discovery",
    "Compliance Planning",
    "UX/UI Design",
    "Application Development",
    "Security Testing",
    "Deployment",
    "Ongoing Support",
  ],

  techStack: [
    "React",
    "Next.js",
    "Node.js",
    "FHIR",
    "HL7",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
  ],

  caseStudies: [
    {
      title: "Telemedicine Platform",
      description:
        "Built a secure telehealth platform enabling remote consultations and digital patient management.",
      href: "/work",
    },
  ],

  faqs: [
    {
      question: "Do you build HIPAA-compliant healthcare software?",
      answer:
        "Yes. We develop secure healthcare applications following industry security and compliance best practices.",
    },
    {
      question: "Can you integrate hospital management systems?",
      answer:
        "Yes. We integrate EHR, EMR, laboratory systems and third-party healthcare APIs.",
    },
  ],
};