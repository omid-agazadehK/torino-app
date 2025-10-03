import { diffDays } from "@/core/utils/date";
import { priceFormat } from "@/core/utils/helper";

export default function OrderItem({ tourData, isCheckout }) {
  const tourDay = diffDays(tourData?.startDate, tourData?.endDate);

  return (
    <div className="bg-header col-span-20 mt-5 h-fit space-y-6.5 rounded-lg border border-black/20 p-3 max-md:mb-5 md:col-span-7 md:mt-9 lg:col-span-6">
      <div className="flex items-center justify-between border-b border-black/20 pt-1 pb-6">
        <span className="font-dana-semiBold text-xl whitespace-nowrap lg:text-2xl">
          {tourData?.title}
        </span>
        <span className="text-dark/70 whitespace-nowrap">
          {tourDay} روز و {tourDay - 1} شب
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-dark whitespace-nowrap">قیمت نهایی</span>
        <span className="text-secondary font-dana-medium flex items-center gap-x-1 text-2xl whitespace-nowrap lg:text-3xl">
          {priceFormat(tourData?.price)}
          <p className="text-sm text-black">تومان</p>
        </span>
      </div>
      <button
        form="checkoutForm"
        disabled={isCheckout}
        className={`${isCheckout ? "cursor-not-allowed grayscale" : null} bg-primary hover:bg-secondary font-dana-medium w-full rounded-lg py-3 text-xl text-white transition-colors duration-200 md:text-2xl`}
      >
        ثبت و خرید نهایی
      </button>
    </div>
  );
}
