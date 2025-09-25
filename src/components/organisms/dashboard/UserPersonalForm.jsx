import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import { cleanObject, objDateToCa } from "@/core/utils/helper";
import { useUpdateUser } from "@/core/services/mutation";
import { useQueryClient } from "@tanstack/react-query";
import personalSchema from "@/core/schema/personalInfo";
import { toast } from "react-toastify";

export default function UserPersonalForm({ setFormStatus }) {
  const queryClient = useQueryClient();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(personalSchema),
  });
  const { mutate, isPending } = useUpdateUser();

  const submitHandler = (value) => {
    if (Object.values(value).every((i) => i === "")) {
      setFormStatus((prev) => ({ ...prev, personalForm: false }));
      return;
    }
    const userInfo = {
      ...value,
      birthDate: objDateToCa(value.birthDate),
    };
    mutate(cleanObject(userInfo), {
      onSuccess: (res) => {
        queryClient.invalidateQueries("user");
        setFormStatus((prev) => ({ ...prev, personalForm: false }));
        toast.success(res.message);
      },
      onError: (err) => console.log(err),
    });
  };

  const cancelHandler = () => {
    setFormStatus((prev) => ({ ...prev, personalForm: false }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="mt-7">
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 pb-6 lg:justify-normal">
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="focus:border-primary hover:border-primary text-dark w-60 max-w-70 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs sm:w-70"
            placeholder="نام و نام خانوادگی"
            {...register("fullName")}
          />
          <ErrorMessage message={errors?.fullName?.message} />
        </div>
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="focus:border-primary hover:border-primary text-dark w-60 max-w-70 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs sm:w-70"
            placeholder="کد ملی"
            {...register("nationalCode")}
          />
          <ErrorMessage message={errors?.nationalCode?.message} />
        </div>
        <Controller
          control={control}
          name="birthDate"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className="flex flex-col gap-y-1">
              <DatePicker
                value={value || null}
                onChange={(date) => {
                  onChange(date ? date.toDate?.() : null);
                }}
                placeholder="تاریخ تولد"
                format="YYYY/MM/DD"
                calendar={persian}
                className=""
                locale={persian_fa}
                inputClass=" hover:border-primary text-dark  sm:w-70 w-60 placeholder:text-black/50 focus:border-primary text-sm max-sm:text-xs max-w-70 rounded-lg border border-black/50 px-2 py-3 transition-colors focus:outline-none"
                calendarPosition="bottom-right"
              />
              <ErrorMessage message={error?.message} />
            </div>
          )}
        />
        <div className="flex flex-col gap-y-1">
          <select
            {...register("gender")}
            defaultValue=""
            className="focus:border-primary hover:border-primary text-dark w-60 max-w-70 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs sm:w-70"
          >
            <option className="bg-black/20 text-white" value="" disabled>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
          <ErrorMessage message={errors?.gender?.message} />
        </div>
      </div>
      <div className="font-dana-semiBold col-span-12 flex justify-center gap-x-3 border-black/20 md:justify-end md:border-t md:pt-2">
        <button
          type="submit"
          disabled={isPending}
          className={`bg-primary border-primary hover:border-secondary hover:bg-secondary w-full max-w-35 rounded-sm border-2 py-2 text-white transition-colors duration-200 ${isPending && "cursor-not-allowed grayscale"}`}
        >
          تایید
        </button>
        <button
          type="reset"
          onClick={() => cancelHandler()}
          className="border-primary text-primary hover:bg-secondary w-full max-w-35 rounded-sm border-2 py-2 transition-colors duration-200 hover:border-transparent hover:text-white"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
