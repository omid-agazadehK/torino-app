import Icon from "@/components/shared/Icon";
import React from "react";

export default function SkeletonFilter() {
  return (
    <>
      <div className="hover:bg-primary/30 md:text-dark flex flex-1 items-center justify-start gap-x-2 rounded-lg border-black/15 pr-1 text-black/50 max-md:justify-center max-md:rounded-xl max-md:border max-md:py-3.5">
        <Icon name={"location"} className="size-6 max-md:size-4.5" />
        مبدا
      </div>
      <div className="hover:bg-primary/30 md:text-dark flex flex-1 items-center justify-start gap-x-2 rounded-lg border-black/15 pr-1 text-black/50 max-md:justify-center max-md:rounded-xl max-md:border max-md:py-3.5">
        <Icon name={"global-search"} className="size-6 max-md:size-4.5" />
        مقصد
      </div>
    </>
  );
}
