import { use } from "react";
import Image from "next/image";

import { diffDays } from "@/core/utils/date";
import TourActions from "../../molecules/TourDetails/TourActions";
import TourHighlights from "../../molecules/TourDetails/TourHighlights";
import DetailsHeader from "@/components/atoms/TourDetails/DetailsHeader";
import InfoItemsRow from "@/components/molecules/TourDetails/InfoItemsRow";

export default function TourDetailsSection({ tour }) {
  const { image, title, price, startDate, endDate } = use(tour);

  const tourDay = diffDays(startDate, endDate);
  return (
    <section className="text-dark md:bg-header my-9 w-full flex-col rounded-lg border-black/20 py-7.5 md:border md:px-5">
      <div className="flex flex-col max-md:items-center md:flex-row md:gap-x-2 lg:gap-x-6">
        <Image
          src={image}
          alt={title}
          width={500}
          height={200}
          className="h-55 w-88 rounded-xl sm:h-66 sm:w-100 md:min-w-100"
        />
        <div className="flex w-full flex-col space-y-6">
          <DetailsHeader tourDay={tourDay} title={title} />
          <TourHighlights />
          {/* Mobile info items */}
          <InfoItemsRow
            tour={tour}
            className=" mt-10 flex gap-x-10 pb-4 divide-black/25 overflow-x-scroll text-lg text-black md:hidden"
          />
          <TourActions price={price} />
        </div>
      </div>
      {/* pc => 768 info items */}
      <InfoItemsRow
        tour={tour}
        className="mt-10 hidden grid-cols-24 divide-x divide-black/25 text-lg text-black md:grid"
      />
    </section>
  );
}
