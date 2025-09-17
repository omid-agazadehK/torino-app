import { diffDays, getJalaliMonth } from "@/core/utils/date";
import Link from "next/link";
import React from "react";

function TourCardBody({ expire, tour }) {
  const { startDate, endDate, fleetVehicle, options, title } = tour;
  const features = `${getJalaliMonth(startDate)} ماه . ${diffDays(startDate, endDate)} روزه - ${fleetVehicle} - ${options.join(" - ")}`;

  return (
    <div className="mt-2 space-y-2 p-2">
      <Link
        href={expire ? "" : `/tours/${tour.id}`}
        scroll={false}
        className={`${expire ? "cursor-default" : null} text-dark block text-xl`}
      >
        {title}
      </Link>
      <p
        className={`${expire ? "text-red-500" : "text-dark/70"} truncate text-sm`}
      >
        {expire ? "محلت رزرو به اتمام رسیده" : features}
      </p>
    </div>
  );
}

export default TourCardBody;
