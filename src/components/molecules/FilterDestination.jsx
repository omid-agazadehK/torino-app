import { use } from "react";
import FilterDropDown from "./FilterDropDown";
import { FilterContext } from "@/core/context/FilterContext";
import Icon from "../atoms/Icon";
import { ToursContext } from "@/core/context/ToursContext";
import { cityHandler } from "@/core/helper/helper";

function FilterDestination() {
  const { state, dispatch } = use(FilterContext);
  const { allTours } = use(ToursContext);
  const cityById = cityHandler(allTours, "destination").find(
    (tour) => tour.id === state?.query.destinationId,
  );
  return (
    <div className="relative col-span-1">
      <button
        onClick={() => dispatch({ type: "DESTINATION" })}
        className="hover:bg-primary/30 flex h-full w-full items-center justify-start gap-x-2 rounded-lg pr-1 text-right"
      >
        <Icon name="global-search" className="size-5" />

        {state?.query.destinationId ? cityById?.name : "مقصد"}
      </button>
      {state?.dropDown.destination && (
        <FilterDropDown name="destination" title="مقصد" />
      )}
    </div>
  );
}

export default FilterDestination;
