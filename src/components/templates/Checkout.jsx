"use client";
import { useGetBasket, useGetUserData } from "@/core/services/query";
import React from "react";
import Icon from "../atoms/Icon";
import { useForm } from "react-hook-form";
import { diffDays } from "@/core/utils/date";
import { priceFormat } from "@/core/utils/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import checkoutSchema from "@/core/schema/checkout";

export default function Checkout() {
  const { data: basketData, isPending } = useGetBasket();
  const { data: user } = useGetUserData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });
  if (isPending) return <p>lodinggggasdasdasdasdasdasd</p>;
  console.log(basketData);
  const submitHandler = (value) => {
    console.log(value);
  };
  const tourDay = diffDays(
    basketData.tourData?.startDate,
    basketData.tourData?.endDate,
  );
  return (
    <main className="container grid flex-1 grid-cols-24 gap-x-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        id="chekoutForm"
        className="bg-header col-span-17 mt-9 h-fit space-y-5 rounded-lg border border-black/20 px-5 pt-5 pb-7.5"
      >
        <span className="flex items-center gap-x-3 text-2xl text-black">
          <Icon name={"profile"} className="size-6" />
          مشخصات مسافر
        </span>
        <div className="grid grid-cols-12 gap-x-4 gap-y-2 *:col-span-4 *:flex *:flex-col">
          <div>
            <input
              {...register("fullName")}
              type="text"
              className="hover:border-primary focus:border-secondary w-64 rounded-lg border border-black/50 px-2 py-3 transition-colors focus:outline-none"
              placeholder="نام نام خانوادگی"
            />
            <span className="flex h-8 items-center text-sm text-red-400">
              {errors?.fullName?.message}
            </span>
          </div>
          <div>
            <input
              {...register("nationalCode")}
              type="text"
              className="hover:border-primary focus:border-secondary w-64 rounded-lg border border-black/50 px-2 py-3 transition-colors focus:outline-none"
              placeholder="کدملی"
            />
            <span className="flex h-8 items-center text-sm text-red-400">
              {errors?.nationalCode?.message}
            </span>
          </div>
          <div>
            <input
              {...register("birthDate")}
              type="text"
              className="hover:border-primary focus:border-secondary w-64 rounded-lg border border-black/50 px-2 py-3 transition-colors focus:outline-none"
              placeholder="تاریخ تولد"
            />
            <span className="flex h-8 items-center text-sm text-red-400">
              {errors?.birthDate?.message}
            </span>
          </div>
          <div>
            <select
              {...register("gender")}
              defaultValue=""
              className="hover:border-primary focus:border-secondary w-64 cursor-pointer rounded-lg border border-black/50 px-2 py-3 text-gray-500 transition-colors focus:outline-none"
            >
              <option className="bg-black/20 text-white" value="" disabled>
                جنسیت
              </option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
            <span className="h-6">{errors?.gender?.message}</span>
          </div>
        </div>
      </form>
      <div className="bg-header col-span-7 mt-9 h-fit space-y-6.5 rounded-lg border border-black/20 p-3">
        <div className="flex items-center justify-between border-b border-black/20 pt-1 pb-6">
          <span className="font-dana-semiBold text-2xl">تور هوبیر</span>
          <span className="text-dark/70">
            {tourDay} روز و {tourDay - 1} شب
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-dark">قیمت نهایی</span>
          <span className="text-secondary font-dana-medium flex items-center gap-x-1 text-3xl">
            {priceFormat(basketData.tourData?.price)}
            <p className="text-sm text-black">تومان</p>
          </span>
        </div>
        <button
          form="chekoutForm"
          className="bg-primary w-full rounded-lg py-3 text-2xl text-white"
        >
          ثبت و خرید نهایی
        </button>
      </div>
    </main>
  );
}
