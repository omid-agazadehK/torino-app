"use client";
import FilterDate from "../molecules/FilterDate";
import SubmitFilterButton from "../atoms/SubmitFilterButton";
import CityFilterField from "../molecules/CityFilterField";
import { ToursContext } from "@/core/context/ToursContext";
import { Suspense, use } from "react";
import SkeletonFilter from "../molecules/SkeletonFilter";

function TourFilter() {
  const { allToursPromise } = use(ToursContext);
  return (
    <section className="mt-4 mb-21 flex flex-col items-center justify-center gap-y-7 px-7 lg:container">
      <h2 className="font-dana-semiBold text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>
      <div className="rounded-2.5xl grid w-full grid-cols-12 gap-y-3 border-black/20 text-xl backdrop-blur-sm md:w-2xl md:gap-x-2 md:border md:p-2.5 lg:w-4xl">
        <div className="col-span-12 flex max-md:gap-x-2 md:col-span-6">
          <Suspense fallback={<SkeletonFilter />}>
            <CityFilterField
              allToursPromise={allToursPromise}
              type="origin"
              icon="location"
              label="مبدا"
            />
            <CityFilterField
              allToursPromise={allToursPromise}
              type="destination"
              icon="global-search"
              label="مقصد"
            />
          </Suspense>
        </div>
        <FilterDate />
        <SubmitFilterButton />
      </div>
    </section>
  );
}

export default TourFilter;
