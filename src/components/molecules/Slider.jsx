"use client";

import ImageSlider from "./ImageSlider";
import SliderNavigation from "./SliderNavigation";

export default function Slider() {
  const paginationRef = useRef(null);
  return (
    <div className="relative col-span-12 lg:col-span-7">
      <SliderNavigation paginationRef={paginationRef} />
      <ImageSlider paginationRef={paginationRef} />
    </div>
  );
}
