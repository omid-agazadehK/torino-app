import Loading from "@/app/tours/[tourId]/loading";
import TourDetailsSection from "@/components/organisms/TourDetails/TourDetailsSection";
import { Suspense } from "react";

export default function TourDetailes({ tour }) {
  return (
    <main className="w-full flex-1 pt-16 max-lg:px-7.5 md:pt-20 lg:container">
      <Suspense fallback={<Loading />}>
        <TourDetailsSection tour={tour} />
      </Suspense>
    </main>
  );
}
