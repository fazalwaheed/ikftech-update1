import CompanyHero from "./CompanyHero";
import CompanyStats from "./CompanyStats";
import CompanyOverview from "./CompanyOverview";
import CompanyFeatures from "./CompanyFeatures";
import CompanyTimeline from "./CompanyTimeline";
import CompanyCTA from "./CompanyCTA";

import { CompanyData } from "./types";

interface Props {
  company: CompanyData;
}

export default function CompanyPage({ company }: any) {
  return (
    <>
      <CompanyHero
        badge="Company"
        title={company.title}
        description={company.description}
        heroImage={company.heroImage}
        success={company.success}
        delivery={company.delivery}
      />
      <CompanyStats stats={company.stats} />

      <CompanyOverview
        title={company.title}
        overview={company.overview}
      />

      <CompanyFeatures
        features={company.features}
      />

      <CompanyTimeline
        timeline={company.timeline}
      />

      <CompanyCTA />
    </>
  );
}