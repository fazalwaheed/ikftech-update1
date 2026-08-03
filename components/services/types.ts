export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceCaseStudy {
  title: string;
  description: string;
  href: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;

  category: string;

  title: string;

  // Small text below hero heading
  subtitle: string;

  // Long section after hero
  overview: string;

  heroImage: string;

  heroVideo?: string;

  stats: ServiceStat[];

  features: ServiceFeature[];

  process: string[];

  techStack: string[];

  caseStudies: ServiceCaseStudy[];

  faqs: ServiceFAQ[];
}