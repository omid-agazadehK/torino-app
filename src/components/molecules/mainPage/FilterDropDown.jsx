import { FilterContext } from "@/core/context/FilterContext";

import { cityHandler } from "@/core/utils/helper";
import useClickOutside from "@/core/hooks/useClickOutSide";
import { use, useRef } from "react";
import FilterCity from "@/components/atoms/mainPage/FilterCity";

function FilterDropDown({ name, title, tours }) {
  const { dispatch } = use(FilterContext);

  const ref = useRef(null);
  useClickOutside(ref, () => dispatch({ type: "CLOSE_ALL" }));

  return (
    <div
      ref={ref}
      className="no-scrollbar absolute top-full z-10 max-h-65 w-full overflow-auto rounded-lg border border-black/20 bg-white"
    >
      <span className="bg-background text-dark/70 sticky top-0 block rounded-t-lg p-2 text-sm">
        {title}
      </span>
      <ul className="text-dark textsm divide-y divide-black/12">
        {cityHandler(tours, name)?.map((city) => (
          <FilterCity key={city.id} city={city} name={name} />
        ))}
      </ul>
    </div>
  );
}

export default FilterDropDown;
