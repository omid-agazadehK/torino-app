import React from "react";
import Icons from "../atoms/Icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import phoneNumberSchema from "@/core/schema/phoneNumber";
import { useRegister } from "@/core/services/mutation";
import SendPhoneNumberButton from "../atoms/SendPhoneNumberButton";
import PhoneNumberInput from "../atoms/PhoneNumberInput";

function RegisterForm({ setIsModal, setStep, setPhoneNumber }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(phoneNumberSchema),
  });
  const { isPending, mutate } = useRegister(reset, setStep);
  const onSubmit = (inputData) => {
    setPhoneNumber(inputData.phoneNumber.trim());
    mutate(inputData);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="register-modal-animation bg-white transition-all duration-200 relative rounded-2xl  px-9 flex flex-col py-10"
    >
      <Icons
        name="cross"
        onclick={() => {
          setIsModal(false), reset(), setPhoneNumber("");
        }}
        className="size-6 absolute top-2 left-2 cursor-pointer"
      />
      <h4 className="mt-5 w-full text-center font-dana-semiBold text-3xl text-dark">
        ورود به تورینو
      </h4>
      <PhoneNumberInput register={register} errors={errors} />
      <SendPhoneNumberButton isPending={isPending} title="ارسال کد تایید" />
    </form>
  );
}

export default RegisterForm;
