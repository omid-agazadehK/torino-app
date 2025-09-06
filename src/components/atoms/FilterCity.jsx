import { FilterContext } from "@/core/context/FilterContext";
import { use } from "react";
import Icon from "./Icon";

function FilterCity({ name, city }) {
  const { dispatch } = use(FilterContext);
  return (
    <>
      <li
        onClick={() =>
          dispatch({
            type: "ADD_QUERY",
            payload: { name, value: city?.id },
          })
        }
        className="flex cursor-pointer gap-x-2 px-3 py-4 hover:bg-black/12 max-md:text-sm"
      >
        <Icon
          name={name === "origin" ? "location" : "global-search"}
          className="size-5"
        />
        {city?.name}
      </li>
    </>
  );
}

export default FilterCity;
