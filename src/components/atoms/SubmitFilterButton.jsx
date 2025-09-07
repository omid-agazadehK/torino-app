"use client";
import { use, useTransition } from "react";
import qs from "qs";

import { useRouter } from "next/navigation";
import { FilterContext } from "@/core/context/FilterContext";

function SubmitFilterButton() {
  const { state } = use(FilterContext);
  const { originId, destinationId, startDate, endDate } = state.query;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const queryHandler = () => {
    if (!originId && !destinationId && !startDate && !endDate) return;
    const query = {
      ...(originId && { originId }),
      ...(destinationId && { destinationId }),
      ...(startDate && endDate && { startDate, endDate }),
    };

    startTransition(() => {
      router.push(`?${qs.stringify(query)}`, { scroll: false });
    });
  };

  return (
    <button
      onClick={() => queryHandler()}
      className={`${isPending ? "hover:none cursor-not-allowed grayscale" : "hover:bg-secondary"} bg-primary col-span-12 rounded-2xl py-3 text-center text-lg text-white transition-colors duration-200 md:col-span-2 lg:col-span-3 lg:px-13 lg:text-2xl`}
      disabled={isPending}
    >
      جستجو
    </button>
  );
}

export default SubmitFilterButton;
