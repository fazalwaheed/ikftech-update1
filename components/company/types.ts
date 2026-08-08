export interface CompanyStat {
  value: string;
  label: string;
}

export interface CompanyFeature {
  title: string;
  description: string;
}

export interface CompanyTimeline {
  title: string;
  description: string;
}

export interface CompanyData {
  slug: string;

  title: string;

  subtitle: string;

  overview: string;

  heroImage: string;

  stats: CompanyStat[];

  features: CompanyFeature[];

  timeline: CompanyTimeline[];
}