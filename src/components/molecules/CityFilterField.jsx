"use client";

import { use } from "react";
import FilterDropDown from "./FilterDropDown";
import { FilterContext } from "@/core/context/FilterContext";
import Icon from "../atoms/Icon";
import { ToursContext } from "@/core/context/ToursContext";
import { cityHandler } from "@/core/utils/helper";

function CityFilterField({ type, icon, label }) {
  const { state, dispatch } = use(FilterContext);
  const { allTours } = use(ToursContext);
  const cityById = cityHandler(allTours, type).find(
    (tour) => tour.id === state?.query[`${type}Id`],
  );
  return (
    <div className="relative flex-1">
      <button
        onClick={() => dispatch({ type: type.toUpperCase() })}
        className="hover:bg-primary/30 md:text-dark flex h-full w-full items-center justify-start gap-x-2 rounded-lg border-black/15 pr-1 text-black/50 max-md:justify-center max-md:rounded-xl max-md:border max-md:py-3.5"
      >
        <Icon name={icon} className="size-6 max-md:size-4.5" />

        {state?.query[`${type}Id`] ? cityById?.name : label}
      </button>
      {state?.dropDown[type] && <FilterDropDown name={type} title={label} />}
    </div>
  );
}

export default CityFilterField;
