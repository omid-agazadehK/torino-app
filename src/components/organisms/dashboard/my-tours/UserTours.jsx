import TourStatus from "@/components/atoms/dashboard/my-tours/TourStatus";
import Icon from "@/components/shared/Icon";
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
  return (
    <div className="relative flex flex-col gap-5 rounded-xl border border-black/20 py-4 text-sm *:px-4">
      <TourStatus status={getStatus(startDate, endDate)} />
      <div className="grid grid-cols-24 max-md:text-xs">
        <span className="col-span-9 flex items-center gap-x-2 whitespace-nowrap md:col-span-12">
          <Icon name={"sun-fog"} className="size-4 md:size-6" />
          {title}
        </span>
        <span className="col-span-15 flex items-center gap-x-2 whitespace-nowrap md:col-span-12">
          <Icon name={fleetVehicleIcon()} className="size-4 md:size-6" />
          سفر با {fleetVehicle}
        </span>
      </div>
      <div className="grid grid-cols-12 max-sm:space-y-6">
        <div className="col-span-12 items-center justify-between max-sm:flex sm:col-span-6">
          <span className="font-dana-semiBold">{`${origin?.name} به ${destination?.name} `}</span>
          <span>{formatToPersianDate(startDate)}</span>
        </div>
        <div className="col-span-12 items-center justify-between max-sm:flex sm:col-span-6">
          <span className="font-dana-semiBold"> تاریخ برگشت </span>
          <span>{formatToPersianDate(endDate)}</span>
        </div>
      </div>
      <div className="flex divide-x divide-black/20 border-t border-t-black/20 pt-4 text-xs max-lg:!px-0">
        <div className="flex items-center gap-x-2 px-1 md:px-5">
          <span className="whitespace-nowrap max-sm:text-[10px]">
            شماره تور
          </span>
          <span className="font-dana-semiBold max-lg:text-[10px] max-md:max-w-15 max-md:truncate max-md:text-[8px]">
            {id}
          </span>
        </div>
        <div className="flex gap-x-2 px-1 md:px-5">
          <span className="whitespace-nowrap max-sm:text-[10px]">
            مبلغ پرداخت شده
          </span>
          <span className="flex items-center gap-x-0.5">
            <span className="font-dana-semiBold max-sm:text-[10px]">
              {priceFormat(price)}
            </span>
            تومان
          </span>
        </div>
      </div>
    </div>
  );
}
