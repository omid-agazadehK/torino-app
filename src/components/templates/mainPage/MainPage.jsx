import BannerSection from "../../organisms/mainPage/BannerSection";
import TourFilter from "../../organisms/mainPage/TourFilter";
import ToursSection from "../../organisms/mainPage/ToursSection";
import Welcome from "../../organisms/mainPage/Welcome";
import BenefitsSection from "../../organisms/mainPage/BenefitsSection";
import WhyTorinoSection from "../../organisms/mainPage/WhyTorinoSection";

export default function MainPage() {
  return (
    <main className="mx-auto w-full max-w-360 flex-1 pt-16 md:pt-20">
      <Welcome />
      <TourFilter />
      <ToursSection />
      <BannerSection />
      <WhyTorinoSection />
      <BenefitsSection />
    </main>
  );
}
