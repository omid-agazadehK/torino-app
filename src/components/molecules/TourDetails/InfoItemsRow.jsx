import { getInfoItems } from "@/core/utils/helper";
import React, { use } from "react";
import InfoItem from "./InfoItem";

export default function InfoItemsRow({ tour, className }) {
  const infoItems = getInfoItems(use(tour));

  return (
    <div className={className}>
      {infoItems?.map((item, index) => (
        <InfoItem key={index} item={item} />
      ))}
    </div>
  );
}
