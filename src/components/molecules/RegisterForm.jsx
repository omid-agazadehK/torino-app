import React from "react";
import Icons from "../atoms/Icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import phoneNumberSchema from "@/core/schema/phoneNumber";
import { useRegister } from "@/core/services/mutation";
import Spinner from "../atoms/Spinner";

function RegisterForm({ setIsModal, setStep, step }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(phoneNumberSchema),
  });
  const { isPending, mutate } = useRegister(reset, setStep);
  const onSubmit = (phoneNumber) => {
    mutate(phoneNumber);
  };
  if (step !== 1) return;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`modal-animation bg-white transition-all duration-200 relative rounded-2xl  px-9 flex flex-col py-10 `}
    >
      <Icons
        name="cross"
        onclick={() => {
          setIsModal(false), reset();
        }}
        className="size-6 absolute top-2 left-2 cursor-pointer"
      />
      <h4 className="mt-5 w-full text-center font-dana-semiBold text-3xl text-dark">
        ورود به تورینو
      </h4>
      <div className="flex flex-col gap-y-2.5 mt-9  ">
        <label htmlFor="register" className="font-morabba-light w-fit">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          {...register("phoneNumber")}
          type="number"
          id="register"
          placeholder="4253***0912"
          className={`${
            errors?.phoneNumber?.message && "border-red-500"
          } border rounded-lg border-black/25 outline-0 text-dark px-2 py-3.5 w-125 hover:border-primary focus:border-secondary transition-colors duration-100`}
        />
        <span className="h-10 text-red-500">
          {errors?.phoneNumber?.message}
        </span>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className={` w-full bg-primary hover:bg-secondary text-lg font-dana-medium transition-colors duration-200 py-3.5 text-white rounded-lg ${
          isPending ? "grayscale cursor-not-allowed" : null
        }`}
      >
        ارسال کد تایید
      </button>
    </form>
  );
}

export default RegisterForm;
