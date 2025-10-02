"use client";

import { useRef } from "react";
import SliderNavigation from "./SliderNavigation";
import ImageSlider from "./ImageSlider";

export default function Slider() {
  const paginationRef = useRef(null);
  return (
    <div className="relative col-span-12 lg:col-span-7">
      <SliderNavigation paginationRef={paginationRef} />
      <ImageSlider paginationRef={paginationRef} />
    </div>
  );
}
