"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Icon from "../atoms/Icon";
import { DateObj } from "@/core/utils/date";
import { use } from "react";
import { FilterContext } from "@/core/context/FilterContext";

function FilterDate() {
  const { state, dispatch } = use(FilterContext);
  const isIcon = !!state.query.startDate || !!state.query.endDate;
  return (
    <div className="hover:bg-primary/30 relative col-span-12 flex h-full items-center justify-center gap-x-1 rounded-lg border-black/15 px-2 text-black/50 max-md:border md:col-span-4 lg:col-span-3">
      <Icon
        name="calendar"
        className={`${isIcon && "max-md:hidden"} max-xs:right-2/6 absolute top-1/2 right-1 size-4 -translate-y-1/2 max-md:right-2/5 max-md:-translate-x-1/2 lg:size-6`}
      />
      <DatePicker
        range
        calendar={persian}
        locale={persian_fa}
        value={[DateObj(state.query.startDate), DateObj(state.query.endDate)]}
        onChange={(value) => {
          dispatch({
            type: "SET_DATE",
            payload: {
              startDate: value?.[0]?.format?.("YYYY/MM/DD"),
              endDate: value?.[1]?.format?.("YYYY/MM/DD"),
            },
          });
        }}
        placeholder="تاریخ"
        containerClassName="!w-full !h-full flex-1"
        inputClass="!w-full !h-full placeholder:text-dark py-3.5 max-md:text-center max-md:placeholder:text-black/50 max-md:placeholder:text-center focus:outline-none text-sm lg:pr-6 pr-4 placeholder:text-xl max-md:placeholder:text-sm"
      />
    </div>
  );
}

export default FilterDate;
