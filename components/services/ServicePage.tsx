import ServiceHero from "@/components/services/ServiceHero";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import ServiceCaseStudy from "@/components/services/ServiceCaseStudy";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

import { ServiceData } from "@/components/services/types";

export default function ServicePage({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <>
      <ServiceHero service={service} />

      <ServiceStats stats={service.stats} />

      <ServiceOverview
        title={service.title}
        description={service.subtitle}
      />

      <ServiceFeatures features={service.features} />

      <ServiceProcess process={service.process} />

      <ServiceTechStack tech={service.techStack} />

      <ServiceCaseStudy cases={service.caseStudies} />

      <ServiceFAQ faqs={service.faqs} />

      <ServiceCTA />
    </>
  );
}
