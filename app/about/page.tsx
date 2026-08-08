import CompanyPage from "@/components/company/CompanyPage";
import { aboutUs } from "@/data/company/about-us";

export default function Page() {
  return <CompanyPage company={aboutUs} />;
}