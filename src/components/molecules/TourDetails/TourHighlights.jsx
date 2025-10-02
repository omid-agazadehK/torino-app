import Icon from "../../shared/Icon";

export default function TourHighlights() {
  return (
    <div className="flex text-sm text-gray-500 *:flex *:items-center *:gap-x-2 max-md:justify-between sm:text-base sm:*:px-2 md:text-sm md:*:gap-x-0.5 lg:gap-x-6 lg:text-xl lg:*:gap-x-2">
      <span>
        <Icon name="user-tick" className="size-3 sm:size-4 lg:size-6" />
        تورلیدر از مبدا
      </span>
      <span>
        <Icon name="map" className="size-3 sm:size-4 lg:size-6" />
        برنامه سفر
      </span>
      <span>
        <Icon name="medal-star" className="size-3 sm:size-4 lg:size-6" />
        تضمین کیفیت
      </span>
    </div>
  );
}
