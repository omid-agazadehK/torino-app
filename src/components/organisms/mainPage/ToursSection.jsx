"use client";
import { ToursContext } from "@/core/context/ToursContext";
import { Suspense, use } from "react";
import TourSectionGrid from "../mainPage/TourSectionGrid";
import SkeletonCard from "../../molecules/mainPage/SkeletonCard";
import TourHeader from "../../atoms/mainPage/TourHeader";

function ToursSection() {
  const { tours } = use(ToursContext);

  return (
    <section className="mt-21 max-lg:px-7 lg:container">
      <TourHeader />
      <Suspense fallback={<SkeletonCard />}>
        <TourSectionGrid tours={tours} />
      </Suspense>
    </section>
  );
}

export default ToursSection;
