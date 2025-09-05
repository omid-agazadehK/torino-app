"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import qs from "qs";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import FilterOrigin from "../molecules/FilterOrigin";
import FilterDestination from "../molecules/FilterDestination";
import { FilterContext } from "@/core/context/FilterContext";
import { ToursContext } from "@/core/context/ToursContext";
import Icon from "../atoms/Icon";
import { DateObj } from "@/core/utils/date";

function Filter() {
  const { state, dispatch } = use(FilterContext);
  const route = useRouter();
  const queryHandler = () => {
    const { originId, destinationId, startDate, endDate } = state.query;

    const query = {
      ...(originId && { originId }),
      ...(destinationId && { destinationId }),
      ...(startDate && endDate && { startDate, endDate }),
    };
    return `?${qs.stringify(query)}`;
  };

  return (
    <section className="container mt-4 mb-21 flex flex-col items-center justify-center gap-y-7">
      <h2 className="font-dana-semiBold text-3xl">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>
      <div className="rounded-2.5xl x grid w-4xl grid-cols-4 gap-x-2 border border-black/20 p-2.5 text-xl backdrop-blur-sm">
        <FilterOrigin />
        <FilterDestination />
        <div className="hover:bg-primary/30 relative col-span-1 flex h-full items-center justify-center gap-x-1 rounded-lg px-2">
          <Icon
            name="calendar"
            className="absolute top-1/2 right-1 size-6 -translate-y-1/2"
          />
          <DatePicker
            range
            calendar={persian}
            locale={persian_fa}
            value={[
              DateObj(state.query.startDate),
              DateObj(state.query.endDate),
            ]}
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
            inputClass="!w-full !h-full placeholder:text-dark focus:outline-none text-sm  pr-6 placeholder:text-xl"
          />
        </div>
        <button
          onClick={() => route.push(queryHandler())}
          className="bg-primary col-span-1 rounded-2xl px-13 py-3 text-2xl text-white hover:bg-secondary transition-colors duration-200"
        >
          جستجو
        </button>
      </div>
    </section>
  );
}

export default Filter;
