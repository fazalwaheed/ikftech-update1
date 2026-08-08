import CompanyPage from "@/components/company/CompanyPage";
import { careers } from "@/data/company/careers";

export default function Page() {
  return <CompanyPage company={careers} />;
}