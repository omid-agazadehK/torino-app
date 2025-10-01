import React from "react";

export default function SkeletonUserTours() {
  return (
    <div className="col-span-12 space-y-2 rounded-xl border border-black/20 px-5 py-3 md:col-span-9">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="relative flex flex-col gap-5 rounded-xl border border-black/20 py-4 text-sm *:px-4"
        >
          <div className="bg-skeleton absolute top-4 left-5 h-7 w-15 rounded-full sm:w-20"></div>
          <div className="grid grid-cols-12">
            <div className="bg-skeleton xs:w-20 col-span-4 h-7 w-15 rounded-xl md:w-35"></div>
            <div className="bg-skeleton xs:w-20 col-span-5 h-7 w-15 rounded-xl md:w-35"></div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 flex h-7 items-center space-x-1 max-md:justify-between md:col-span-6">
              <div className="bg-skeleton h-5 w-30 rounded-xl"></div>
              <div className="bg-skeleton h-5 w-35 rounded-xl"></div>
            </div>
            <div className="col-span-12 flex h-7 items-center space-x-1 max-md:justify-between md:col-span-6">
              <div className="bg-skeleton h-5 w-30 rounded-xl"></div>
              <div className="bg-skeleton h-5 w-35 rounded-xl"></div>
            </div>
          </div>
          <div className="col-span-12 flex justify-between gap-x-2">
            <div className="bg-skeleton h-7 w-full rounded-xl"></div>
            <div className="bg-skeleton h-7 w-full rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
