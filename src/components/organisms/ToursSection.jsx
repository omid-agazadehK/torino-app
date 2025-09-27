"use client";
import { ToursContext } from "@/core/context/ToursContext";
import { Suspense, use, useEffect } from "react";
import TourSectionGrid from "./TourSectionGrid";
import SkeletonCard from "../molecules/SkeletonCard";
import api from "@/core/config/axios";

function ToursSection() {
  const { tours } = use(ToursContext);

  return (
    <section className="mt-21 max-lg:px-7 lg:container">
      <h5 className="w-full text-right text-3xl"> همه تورها</h5>
      <Suspense fallback={<SkeletonCard />}>
        <TourSectionGrid tours={tours} />
      </Suspense>
    </section>
  );
}

export default ToursSection;
