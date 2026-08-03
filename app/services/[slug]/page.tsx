import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServicePage from "@/components/services/ServicePage";

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) return {};

  return {
    title: `${service.title} | IKFTECH`,
    description: service.subtitle,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}