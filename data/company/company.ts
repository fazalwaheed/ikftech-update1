import { CompanyData } from "@/components/company/types";

import { aboutUs } from "./about-us";
import { aiFirstCompany } from "./ai-first-company";
import { howWeWork } from "./how-we-work";
import { careers } from "./careers";

export const companyPages: Record<string, CompanyData> = {
  [aboutUs.slug]: aboutUs,
  [aiFirstCompany.slug]: aiFirstCompany,
  [howWeWork.slug]: howWeWork,
  [careers.slug]: careers,
};