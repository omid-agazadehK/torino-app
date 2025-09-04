"use client";

import FilterOrigin from "../molecules/FilterOrigin";
import FilterDestination from "../molecules/FilterDestination";

function Filter() {
  return (
    <section className="container mt-4 mb-21 flex flex-col items-center justify-center gap-y-7">
      <h2 className="font-dana-semiBold text-3xl">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>
      <div className="rounded-2.5xl x grid w-4xl grid-cols-4 gap-x-2 border border-black/20 p-2.5 text-xl backdrop-blur-sm">
        <FilterOrigin />
        <FilterDestination />
        <button className="col-span-1 text-right">تاریخ</button>
        <button className="bg-primary col-span-1 rounded-2xl px-13 py-3 text-2xl text-white">
          جستجو
        </button>
      </div>
    </section>
  );
}

export default Filter;
