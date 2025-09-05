import { use } from "react";
import FilterDropDown from "./FilterDropDown";
import { FilterContext } from "@/core/context/FilterContext";
import Icon from "../atoms/Icon";
import { ToursContext } from "@/core/context/ToursContext";
import { cityHandler } from "@/core/helper/helper";

function FilterOrigin() {
  const { state, dispatch } = use(FilterContext);
  const { allTours } = use(ToursContext);
  const cityById = cityHandler(allTours, "origin").find(
    (tour) => tour.id === state?.query.originId,
  );
  return (
    <div className="relative col-span-1 pr-1">
      <button
        onClick={() => dispatch({ type: "ORIGIN" })}
        className="hover:bg-primary/30 flex pr-1 h-full w-full items-center justify-start gap-x-1 rounded-lg text-right"
      >
        <Icon name="location" className="size-6" />
        {state?.query.originId ? cityById?.name : " مبدا"}
      </button>
      {state?.dropDown.origin && <FilterDropDown name="origin" title="پرتدد" />}
    </div>
  );
}

export default FilterOrigin;
