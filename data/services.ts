import { ServiceData } from "@/components/services/types";

import { aiPod } from "@/data/services/ai-pod";
import { genaiConsulting } from "@/data/services/genai-consulting";
import { aiPocMvp } from "@/data/services/ai-poc-mvp";
import { aiAgents } from "@/data/services/ai-agents";
import { machineLearning } from "@/data/services/machine-learning";
import { intelligentData } from "@/data/services/intelligent-data";
import { aiIntegration } from "@/data/services/ai-integration";
import { mlops } from "@/data/services/mlops";
import { dataGovernance } from "@/data/services/data-governance";
import { dataInsights } from "@/data/services/data-insights";
import { aiStrategy } from "@/data/services/ai-strategy";
import { aiSoftwareDevelopment } from "@/data/services/ai-software-development";
import { mvpDevelopment } from "@/data/services/mvp-development";
import { applicationDevelopment } from "@/data/services/application-development";
import { mobileDevelopment } from "@/data/services/mobile-development";
import { landingPage } from "@/data/services/landing-page";
import { customAiSolutions } from "@/data/services/custom-ai-solutions";
import { pitchDeck } from "@/data/services/pitch-deck";
import { brandIdentity } from "@/data/services/brand-identity";
import { logoDesign } from "@/data/services/logo-design";
import { graphicDesign } from "@/data/services/graphic-design";
import { rebranding } from "@/data/services/rebranding";
import { uiUxDesign } from "./services/ui-ux-design";
import { webDesign } from "./services/web-design";
import { customAppDevelopment } from "./services/custom-app-development";
import { websiteRedesign } from "./services/website-redesign";
import { uxUiAudit } from "./services/ux-ui-audit";
import { cloudStrategyArchitecture } from "./services/cloud-strategy-architecture";
import { cloudMigration } from "./services/cloud-migration";
import { infrastructureModernization } from "./services/infrastructure-modernization";
import { cloudEngineering } from "./services/cloud-engineering";
import { cloudOpsDevOps } from "./services/cloudops-devops";
import { managedCloudServices } from "./services/managed-cloud-services";
import { cloudCostOptimization } from "./services/cloud-cost-optimization";
import { multiCloudSecurity } from "./services/multi-cloud-security";
import { cybersecurityConsulting } from "./services/cybersecurity-consulting";

import { governanceRiskCompliance } from "./services/governance-risk-compliance";
import { applicationSecurityTesting } from "./services/application-security-testing";
import { dataSecurityEncryption } from "./services/data-security-encryption";
import { cloudSecurity } from "./services/cloud-security";
import { securityAutomation } from "./services/security-automation";
import { salesforce } from "./services/salesforce";
import { dynamics365 } from "./services/dynamics-365";
import { awsSolutions } from "./services/aws-solutions";
import { powerBI } from "./services/power-bi";
import { muleSoft } from "./services/mulesoft";
import { dedicatedTeam } from "./services/dedicated-team";
import { financeOutsourcing } from "./services/finance-outsourcing";
import { hrOutsourcing } from "./services/hr-outsourcing";
import { backOfficeAutomation } from "./services/back-office-automation";
import { digitalMarketing } from "./services/digital-marketing";
export const services: Record<string, ServiceData> = {
  [aiPod.slug]: aiPod,
  [genaiConsulting.slug]: genaiConsulting,
  [aiPocMvp.slug]: aiPocMvp,
  [aiAgents.slug]: aiAgents,
  [machineLearning.slug]: machineLearning,
  [intelligentData.slug]: intelligentData,
  [aiIntegration.slug]: aiIntegration,
  [mlops.slug]: mlops,
  [dataGovernance.slug]: dataGovernance,
  [dataInsights.slug]: dataInsights,
  [aiStrategy.slug]: aiStrategy,
  [aiSoftwareDevelopment.slug]: aiSoftwareDevelopment,
  [mvpDevelopment.slug]: mvpDevelopment,
  [applicationDevelopment.slug]: applicationDevelopment,
  [mobileDevelopment.slug]: mobileDevelopment,
  [landingPage.slug]: landingPage,
  [customAiSolutions.slug]: customAiSolutions,

  // Design Services
  [uiUxDesign.slug]: uiUxDesign,
  [webDesign.slug]: webDesign,
  [customAppDevelopment.slug]: customAppDevelopment,
  [websiteRedesign.slug]: websiteRedesign,
  [uxUiAudit.slug]: uxUiAudit,
  [pitchDeck.slug]: pitchDeck,
  [brandIdentity.slug]: brandIdentity,
  [logoDesign.slug]: logoDesign,
  [graphicDesign.slug]: graphicDesign,
  [rebranding.slug]: rebranding,

  [cloudStrategyArchitecture.slug]: cloudStrategyArchitecture,
[cloudMigration.slug]: cloudMigration,
[infrastructureModernization.slug]: infrastructureModernization,
[cloudEngineering.slug]: cloudEngineering,
[cloudOpsDevOps.slug]: cloudOpsDevOps,
[managedCloudServices.slug]: managedCloudServices,
[cloudCostOptimization.slug]: cloudCostOptimization,
[multiCloudSecurity.slug]: multiCloudSecurity,

[cybersecurityConsulting.slug]: cybersecurityConsulting,
[governanceRiskCompliance.slug]: governanceRiskCompliance,
[applicationSecurityTesting.slug]: applicationSecurityTesting,
[dataSecurityEncryption.slug]: dataSecurityEncryption,
[cloudSecurity.slug]: cloudSecurity,
[securityAutomation.slug]: securityAutomation,
[salesforce.slug]: salesforce,
[dynamics365.slug]: dynamics365,
[awsSolutions.slug]: awsSolutions,
[powerBI.slug]: powerBI,
[muleSoft.slug]: muleSoft,
[dedicatedTeam.slug]: dedicatedTeam,
[financeOutsourcing.slug]: financeOutsourcing,
[hrOutsourcing.slug]: hrOutsourcing,
[backOfficeAutomation.slug]: backOfficeAutomation,
[digitalMarketing.slug]: digitalMarketing,
};
