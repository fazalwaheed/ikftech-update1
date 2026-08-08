import CompanyPage from "@/components/company/CompanyPage";
import { howWeWork } from "@/data/company/how-we-work";

export default function Page() {
  return <CompanyPage company={howWeWork} />;
}