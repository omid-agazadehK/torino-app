import Icon from "@/components/atoms/Icon";
import { formatToPersianDate } from "@/core/utils/date";
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
        return "bus";
      case "اتوبوس":
        return "bus";
      case "هواپیما":
        return "air-plane";
    }
  };
  console.log(tour);
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-black/20 py-4 text-sm *:px-4">
      <div className="grid grid-cols-12">
        <span className="col-span-5 flex items-center gap-x-2">
          <Icon name={"sun-fog"} className="size-6" />
          {title}
        </span>
        <span className="col-span-7 flex items-center gap-x-2">
          <Icon name={fleetVehicleIcon()} className="size-6" />
          سفر با {fleetVehicle}
        </span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <span className="font-dana-semiBold">{`${origin?.name} به ${destination?.name} `}</span>
          <span>{formatToPersianDate(startDate)}</span>
        </div>
        <div className="col-span-7">
          <span className="font-dana-semiBold"> تاریخ برگشت </span>
          <span>{formatToPersianDate(endDate)}</span>
        </div>
      </div>
      <div className="flex divide-x divide-black/20 border-t border-t-black/20 pt-4">
        <div className="flex gap-x-2 px-5">
          <span>شماره تور</span>
          <span className="font-dana-semiBold">{id}</span>
        </div>
        <div className="flex gap-x-2 px-5">
          <span>مبلغ پرداخت شده</span>
          <span>
            <span className="font-dana-semiBold">{priceFormat(price)}</span>{" "}
            تومان
          </span>
        </div>
      </div>
    </div>
  );
}
