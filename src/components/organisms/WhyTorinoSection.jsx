import SliderContent from "../atoms/SliderContent";
import Slider from "../molecules/Slider";

export default function WhyTorinoSection() {
  return (
    <section className="mt-50 grid grid-cols-12 overflow-hidden pb-12 max-lg:place-items-center max-lg:gap-y-5 lg:container lg:gap-x-10 xl:gap-x-26">
      <SliderContent />
      <Slider />
    </section>
  );
}
