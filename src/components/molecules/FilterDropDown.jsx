import { FilterContext } from "@/core/context/FilterContext";
import { ToursContext } from "@/core/context/ToursContext";
import { cityHandler } from "@/core/helper/helper";
import useClickOutside from "@/core/hooks/useClickOutSide";
import { use, useRef } from "react";
import FilterCity from "../atoms/FilterCity";

function FilterDropDown({ name, title }) {
  const { dispatch } = use(FilterContext);
  const { allTours } = use(ToursContext);

  const ref = useRef(null);
  useClickOutside(ref, () => dispatch({ type: "CLOSE_ALL" }));

  return (
    <div
      ref={ref}
      className="no-scrollbar absolute top-full max-h-65 w-full overflow-auto rounded-lg border border-black/20 bg-white"
    >
      <span className="bg-background text-dark/70 sticky top-0 block rounded-t-lg p-2 text-sm">
        {title}
      </span>
      <ul className="divide-y divide-black/12 text-dark textsm">
        {cityHandler(allTours, name)?.map((city) => (
          <FilterCity key={city.id} city={city} name={name} />
        ))}
      </ul>
    </div>
  );
}

export default FilterDropDown;
