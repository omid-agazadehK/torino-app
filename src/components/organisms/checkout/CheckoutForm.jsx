"use client";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { yupResolver } from "@hookform/resolvers/yup";
import checkoutSchema from "@/core/schema/checkout";
import { objDateToCa } from "@/core/utils/helper";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Icon from "@/components/shared/Icon";
export default function CheckoutForm({ mutate }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });
  const submitHandler = (value) => {
    const userInfo = { ...value, birthDate: objDateToCa(value.birthDate) };
    mutate(userInfo, {
      onSuccess: async (res) => {
        await queryClient.refetchQueries({ queryKey: ["bookedTours"] });
        await queryClient.refetchQueries({ queryKey: ["transactions"] });
        toast.success(res.message);
        router.replace(`/checkout/result?status=success`);
      },
      onError: (err) => console.log(err),
    });
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      id="checkoutForm"
      className="bg-header col-span-20 mt-9 h-fit space-y-5 rounded-lg border border-black/20 px-5 pt-5 pb-7.5 md:col-span-13 lg:col-span-14"
    >
      <span className="flex items-center gap-x-3 text-2xl text-black">
        <Icon name={"profile"} className="size-6" />
        مشخصات مسافر
      </span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 *:col-span-4 *:flex *:flex-col max-lg:justify-center">
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
          <Controller
            control={control}
            name="birthDate"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <DatePicker
                  value={value || null}
                  onChange={(date) => {
                    onChange(date ? date.toDate?.() : null);
                  }}
                  placeholder="تاریخ تولد"
                  format="YYYY/MM/DD"
                  calendar={persian}
                  locale={persian_fa}
                  inputClass=" hover:border-primary focus:border-secondary w-64 rounded-lg border border-black/50 px-2 py-3 transition-colors focus:outline-none"
                  calendarPosition="bottom-right"
                />
                <span className="flex h-8 items-center text-sm text-red-400">
                  {error?.message}
                </span>
              </div>
            )}
          />
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
          <span className="flex h-8 items-center text-sm text-red-400">
            {errors?.gender?.message}
          </span>
        </div>
      </div>
    </form>
  );
}
