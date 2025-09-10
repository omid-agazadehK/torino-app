import { use, useEffect, useState } from "react";
import TourCard from "../molecules/TourCard";
import CollapseButton from "../molecules/CollapseButton";

function TourSectionGrid({ tours: promise }) {
  const data = use(promise);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dataSplice = isCollapsed ? data.slice(0, 4) : data;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsCollapsed(mediaQuery.matches);

    const handler = (e) => setIsCollapsed(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="mt-3 grid grid-cols-12 gap-x-6 gap-y-7.5 max-md:place-items-center">
      {dataSplice.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
      <CollapseButton
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
    </div>
  );
}

export default TourSectionGrid;
