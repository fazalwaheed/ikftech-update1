import { web3Blockchain } from "./web3-blockchain";
import { fintechBanking } from "./fintech-banking";
import { saasEnterprise } from "./saas-enterprise";
import { healthcareWellness } from "./healthcare-wellness";
import { ecommerceRetail } from "./ecommerce-retail";
import { logisticsSupplyChain } from "./logistics-supply-chain";

export const industries = {
  [web3Blockchain.slug]: web3Blockchain,
  [fintechBanking.slug]: fintechBanking,
  [saasEnterprise.slug]: saasEnterprise,
  [healthcareWellness.slug]: healthcareWellness,
  [ecommerceRetail.slug]: ecommerceRetail,
  [logisticsSupplyChain.slug]: logisticsSupplyChain,
};