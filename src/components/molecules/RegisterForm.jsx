"use client";
import Icon from "../atoms/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import phoneNumberSchema from "@/core/schema/phoneNumber";
import { useRegister } from "@/core/services/mutation";
import PhoneNumberInput from "../atoms/PhoneNumberInput";
import ModalButton from "../atoms/ModalButton";
import { toast } from "react-toastify";

function RegisterForm({ setIsModal, setStep, setPhoneNumber }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(phoneNumberSchema),
  });

  const { isPending, mutate } = useRegister();

  const onSubmit = (inputData) => {
    const phoneNumber = inputData.phoneNumber.trim();
    setPhoneNumber(phoneNumber);
    mutate(phoneNumber, {
      onSuccess: (data) => {
        toast.success(data.message + " " + data.code);
        setStep(2);
        reset();
      },
      onError: (err) => console.log(err),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="register-modal-animationm relative flex flex-col rounded-2xl bg-white px-9 py-10 transition-all duration-200"
    >
      <Icon
        name="cross"
        onclick={() => {
          (setIsModal(false), reset(), setPhoneNumber(""));
        }}
        className="absolute top-2 left-2 size-6 cursor-pointer"
      />
      <h4 className="font-dana-semiBold text-dark mt-5 w-full text-center text-3xl">
        ورود به تورینو
      </h4>
      <PhoneNumberInput register={register} errors={errors} />
      <ModalButton isPending={isPending} title="ارسال کد تایید" />
    </form>
  );
}

export default RegisterForm;
