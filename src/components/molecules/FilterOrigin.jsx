import { use } from "react";
import FilterDropDown from "./FilterDropDown";
import { FilterContext } from "@/core/context/FilterContext";

function FilterOrigin() {
  const { state, dispatch } = use(FilterContext);

  return (
    <div className="relative col-span-1">
      <button
        onClick={() => dispatch({ type: "ORIGIN" })}
        className="h-full w-full text-right"
      >
        مبدا
      </button>
      {state?.dropDown.origin && <FilterDropDown name="origin" title="مبدا" />}
    </div>
  );
}

export default FilterOrigin;
