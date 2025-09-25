import ErrorMessage from "@/components/atoms/ErrorMessage";
import { bankInfoSchema } from "@/core/schema/bankInfo";
import { useUpdateUser } from "@/core/services/mutation";
import { cleanObject } from "@/core/utils/helper";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function UserBankInfoForm({ setFormStatus }) {
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(bankInfoSchema);
  const { mutate, isPending } = useUpdateUser();
  const submitHandler = (value) => {
    if (Object.values(value).every((i) => i === "")) {
      setFormStatus((prev) => ({ ...prev, bankForm: false }));
      return;
    }
    const userInfo = {
      payment: {
        ...value,
      },
    };
    mutate(cleanObject(userInfo), {
      onSuccess: (res) => {
        queryClient.invalidateQueries("user");
        setFormStatus((prev) => ({ ...prev, bankForm: false }));
        toast.success(res.message);
        console.log(res);
      },
      onError: (err) => console.log(err),
    });
  };
  const cancelHandler = () => {
    setFormStatus((prev) => ({ ...prev, bankForm: false }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 xl:justify-normal">
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="focus:border-primary hover:border-primary text-dark w-60 max-w-70 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs sm:w-70"
            placeholder="شماره شبا"
            {...register("shaba_code")}
          />
          <ErrorMessage message={errors?.shaba_code?.message} />
        </div>
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="focus:border-primary hover:border-primary text-dark w-60 max-w-70 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs sm:w-70"
            placeholder="شماره کارت"
            {...register("debitCard_code")}
          />
          <ErrorMessage message={errors?.debitCard_code?.message} />
        </div>
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="focus:border-primary hover:border-primary text-dark w-60 max-w-70 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs sm:w-70"
            placeholder="شماره حساب"
            {...register("accountIdentifier")}
          />
          <ErrorMessage message={errors?.accountIdentifier?.message} />
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

export default UserBankInfoForm;
