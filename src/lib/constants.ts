export const PIX_KEY = "franco.pieragnoli@gmail.com"; // Substitua pela chave PIX real
export const MERCHANT_NAME = "Campanha Aquecer";
export const MERCHANT_CITY = "SAO PAULO";

export const DONATION_TIERS = [
  { amount: 30, blankets: 1, txId: "AQUECER30", label: "1 cobertor" },
  {
    amount: 50,
    blankets: 2,
    txId: "AQUECER50",
    label: "2 cobertores",
    isPopular: true,
  },
  { amount: 100, blankets: 4, txId: "AQUECER100", label: "4 cobertores" },
] as const;

export const CAMPAIGN_END_DATE = "2026-06-30T23:59:59-03:00";
export const CAMPAIGN_GOAL = 1000;
export const CAMPAIGN_DONATED = 400;
export const TOTAL_DONORS = 150;

export const HERO_IMAGES = ["/images/rua.jpg", "/images/rua-mulher.jpg"];
