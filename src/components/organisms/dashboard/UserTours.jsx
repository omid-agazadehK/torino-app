import Icon from "@/components/atoms/Icon";
import TourStatus from "@/components/atoms/TourStatus";
import { formatToPersianDate, getStatus } from "@/core/utils/date";
import { priceFormat } from "@/core/utils/helper";

export default function UserTours({ tour }) {
  const {
    title,
    fleetVehicle,
    price,
    id,
    startDate,
    endDate,
    origin,
    destination,
  } = tour;
  const fleetVehicleIcon = () => {
    switch (fleetVehicle) {
      case "SUV":
        return "suv";
      case "خودروی آفرود":
        return "suv";
      case "ون":
        return "van";
      case "اتوبوس":
        return "bus";
      case "هواپیما":
        return "air-plane";
    }
  };
  console.log(tour)
  return (
    <div className="relative flex flex-col gap-5 rounded-xl border border-black/20 py-4  text-sm *:px-4">
      <TourStatus status={getStatus(startDate, endDate)} />
      <div className="grid grid-cols-24 max-md:text-xs">
        <span className="md:col-span-12 col-span-9 flex items-center gap-x-2 whitespace-nowrap">
          <Icon name={"sun-fog"} className="md:size-6 size-4" />
          {title}
        </span>
        <span className="md:col-span-12 col-span-15 flex items-center gap-x-2 whitespace-nowrap">
          <Icon name={fleetVehicleIcon()} className="md:size-6 size-4" />
          سفر با {fleetVehicle}
        </span>
      </div>
      <div className="grid grid-cols-12 max-sm:space-y-6">
        <div className="sm:col-span-6 col-span-12 max-sm:flex items-center justify-between">
          <span className="font-dana-semiBold">{`${origin?.name} به ${destination?.name} `}</span>
          <span>{formatToPersianDate(startDate)}</span>
        </div>
        <div className="sm:col-span-6 col-span-12 max-sm:flex items-center justify-between">
          <span className="font-dana-semiBold"> تاریخ برگشت </span>
          <span>{formatToPersianDate(endDate)}</span>
        </div>
      </div>
      <div className="flex divide-x divide-black/20 border-t border-t-black/20 pt-4 text-xs max-lg:!px-0">
        <div className="flex items-center gap-x-2 md:px-5 px-1">
          <span className="max-sm:text-[10px] whitespace-nowrap">شماره تور</span>
          <span className="font-dana-semiBold max-md:text-[8px] max-lg:text-[10px] max-md:max-w-15 max-md:truncate">{id}</span>
        </div>
        <div className="flex gap-x-2 md:px-5 px-1 ">
          <span className="max-sm:text-[10px] whitespace-nowrap">مبلغ پرداخت شده</span>
          <span className="flex items-center gap-x-0.5">
            <span className="font-dana-semiBold max-sm:text-[10px]">{priceFormat(price)}</span>
            تومان
          </span>
        </div>
      </div>
    </div>
  );
}
