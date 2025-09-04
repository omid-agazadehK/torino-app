import { use } from "react";
import FilterDropDown from "./FilterDropDown";
import { FilterContext } from "@/core/context/FilterContext";

function FilterDestination() {
  const { state, dispatch } = use(FilterContext);
  return (
    <div className="relative col-span-1">
      <button
        onClick={() => dispatch({ type: "DESTINATION" })}
        className="h-full w-full text-right"
      >
        مبدا
      </button>
      {state?.dropDown.destination && (
        <FilterDropDown name="destination" title="مقصد" />
      )}
    </div>
  );
}

export default FilterDestination;
