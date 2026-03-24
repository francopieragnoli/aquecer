import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import ImpactCounter from "@/components/ImpactCounter";
import DonationTiers from "@/components/DonationTiers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <UrgencyBanner />
      <Hero />
      <ImpactCounter />
      <DonationTiers />
      <Footer />
    </main>
  );
}
