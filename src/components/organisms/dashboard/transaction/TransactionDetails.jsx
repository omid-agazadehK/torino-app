import { formatJalaliWithTime } from "@/core/utils/date";
import { priceFormat } from "@/core/utils/helper";

export default function TransactionDetails({ transaction }) {
  const { createdAt, amount, orderId } = transaction;

  return (
    <div className="grid grid-cols-12 px-2 py-3.5 text-xs sm:text-sm ">
      <span className="col-span-3 max-sm:text-[8px] md:col-span-3">
        {formatJalaliWithTime(createdAt)}
      </span>
      <span className="col-span-3 md:col-span-2">{priceFormat(amount)}</span>
      <span className="hidden md:col-span-3 md:block">
        ثبت نام در تور گردشگری
      </span>
      <span className="col-span-6 whitespace-nowrap md:col-span-4">
        <span className="ml-1 hidden lg:inline-block">سفارش</span>
        {orderId}
      </span>
    </div>
  );
}
