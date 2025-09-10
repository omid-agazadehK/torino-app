"use client";
import { AuthContext } from "@/core/context/AuthContext";
import { ModalContext } from "@/core/context/ModalContext";
import { useAddBasket } from "@/core/services/mutation";
import { priceFormat } from "@/core/utils/helper";
import { useParams, useRouter } from "next/navigation";
import React, { use } from "react";

export default function TourActions({ price }) {
  const router = useRouter();
  const { setStep, setIsModal } = use(ModalContext);
  const { tourId } = useParams();
  const { isLogin } = use(AuthContext);
  const { mutate } = useAddBasket();

  const linkHandler = () => {
    if (!isLogin) {
      setIsModal(true);
      setStep(1);
      return;
    }
    mutate(tourId, {
      onSuccess: (data) => {
        console.log(data)
        router.push("/checkout")
      },
      onError: (err) => console.log(err),
    });
  };
  return (
    <div className="flex items-center justify-between max-md:flex-row-reverse md:items-end">
      <span className="text-secondary xs:text-2xl flex items-center gap-x-2 text-xl lg:text-3xl">
        {priceFormat(price)}
        <p className="text-dark text-sm">تومان</p>
      </span>
      <button
        onClick={() => linkHandler()}
        className="bg-primary hover:bg-secondary xs:px-8 rounded-lg px-4 py-2.5 text-xl text-white transition-colors duration-200 lg:px-12 lg:text-2xl"
      >
        رزرو و خرید
      </button>
    </div>
  );
}
