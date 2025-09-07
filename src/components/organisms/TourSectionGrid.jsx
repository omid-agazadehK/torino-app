import { use } from "react";
import TourCard from "../molecules/TourCard";

function TourSectionGrid({ tours: promise }) {
  const data = use(promise);
  return (
    <div className="mt-3 grid grid-cols-12 gap-x-6 gap-y-7.5 max-md:place-items-center">
      {data.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default TourSectionGrid;
