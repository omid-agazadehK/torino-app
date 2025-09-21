"use client";
import { useGetBasket } from "@/core/services/query";
import { diffDays } from "@/core/utils/date";
import { priceFormat } from "@/core/utils/helper";
import OrderSkeleton from "../molecules/OrderSkeleton";

function OrderDetails({ isCheckout }) {
  const { data: { tourData } = {}, isPending } = useGetBasket();
  const tourDay = diffDays(tourData?.startDate, tourData?.endDate);
  return (
    <>
      {!isPending ? (
        <div className="bg-header col-span-7 mt-9 h-fit space-y-6.5 rounded-lg border border-black/20 p-3">
          <div className="flex items-center justify-between border-b border-black/20 pt-1 pb-6">
            <span className="font-dana-semiBold text-2xl">
              {tourData?.title}
            </span>
            <span className="text-dark/70">
              {tourDay} روز و {tourDay - 1} شب
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-dark">قیمت نهایی</span>
            <span className="text-secondary font-dana-medium flex items-center gap-x-1 text-3xl">
              {priceFormat(tourData?.price)}
              <p className="text-sm text-black">تومان</p>
            </span>
          </div>
          <button
            form="checkoutForm"
            disabled={isCheckout}
            className={`${isCheckout ? "cursor-not-allowed grayscale" : null} bg-primary hover:bg-secondary font-dana-medium w-full rounded-lg py-3 text-2xl text-white transition-colors duration-200`}
          >
            ثبت و خرید نهایی
          </button>
        </div>
      ) : (
        <OrderSkeleton />
      )}
    </>
  );
}

export default OrderDetails;
