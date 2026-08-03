import { notFound } from "next/navigation";

import ServicePage from "@/components/services/ServicePage";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return Object.values(industries).map((industry) => ({
    slug: industry.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const industry = industries[params.slug];

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.title} | IKFTECH`,
    description: industry.subtitle,
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = industries[params.slug];

  if (!industry) {
    notFound();
  }

  return <ServicePage service={industry} />;
}