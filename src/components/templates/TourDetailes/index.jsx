import SkeletonTourDetails from "@/components/molecules/SkeletonTourDetails";
import TourDetailsSection from "@/components/organisms/TourDetails/TourDetailsSection";
import { Suspense } from "react";

export default function TourDetailes({ tour }) {
  return (
    <main className="w-full flex-1 max-lg:px-7.5 lg:container">
      <Suspense fallback={<SkeletonTourDetails />}>
        <TourDetailsSection tour={tour} />
      </Suspense>
    </main>
  );
}
