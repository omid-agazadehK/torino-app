import { FilterContext } from "@/core/context/FilterContext";
import React, { use } from "react";

function FilterCity({ name, city }) {
  const { dispatch } = use(FilterContext);

  return (
    <li
      onClick={(e) =>
        dispatch({
          type: "ADD_QUERY",
          payload: { name, value: e.target.innerHTML },
        })
      }
      key={city.id}
    >
      {city.name}
    </li>
  );
}

export default FilterCity;
