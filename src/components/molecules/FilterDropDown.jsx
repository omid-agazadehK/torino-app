import { FilterContext } from "@/core/context/FilterContext";
import { ToursContext } from "@/core/context/ToursContext";
import { cityHandler } from "@/core/helper/helper";
import useClickOutside from "@/core/hooks/useClickOutSide";
import { use, useRef } from "react";
import FilterCity from "../atoms/FilterCity";

function FilterDropDown({ name, title }) {
  const { dispatch } = use(FilterContext);
  const { tours } = use(ToursContext);

  const ref = useRef(null);
  useClickOutside(ref, () => dispatch({ type: "CLOSE_ALL" }));
  
  return (
    <div ref={ref} className="absolute top-full w-full bg-white">
      <span>{title}</span>
      <ul>
        {cityHandler(tours, name)?.map((city) => (
          <FilterCity key={city.id} city={city} name={name} />
        ))}
      </ul>
    </div>
  );
}

export default FilterDropDown;
