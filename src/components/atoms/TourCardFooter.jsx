import { priceFormat } from "@/core/utils/helper";
import Link from "next/link";

function TourCardFooter({ tour, expire }) {
  return (
    <div className="flex justify-between border-t border-black/12 p-2">
      <Link
        href={expire ? "" : `/tours/${tour.id}`}
        scroll={false}
        className={`${expire ? "cursor-not-allowed grayscale" : null} bg-primary hover:bg-secondary rounded-sm px-5 py-0.5 text-white transition-colors duration-200`}
      >
        رزرو
      </Link>
      <span
        className={`${expire ? "text-gray-400 line-through" : "text-secondary"} flex items-center gap-x-1`}
      >
        {priceFormat(tour.price)}
        <p className="text-dark/80 text-xs">تومان</p>
      </span>
    </div>
  );
}

export default TourCardFooter;
