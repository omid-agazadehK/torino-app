import BannerSection from "../organisms/BannerSection";
import WhyTorinoSection from "../organisms/WhyTorinoSection";
import TourFilter from "../organisms/TourFilter";
import ToursSection from "../organisms/ToursSection";
import Welcome from "../organisms/Welcome";
import BenefitsSection from "../organisms/BenefitsSection";

export default function MainPage() {
  return (
    <main className="mx-auto w-full max-w-360 flex-1">
      <Welcome />
      <TourFilter />
      <ToursSection />
      <BannerSection />
      <WhyTorinoSection />
      <BenefitsSection />
    </main>
  );
}
