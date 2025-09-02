"use client";
import { useState } from "react";
import Icon from "../atoms/Icon";
import OTPInput from "react-otp-input";
import { useLogin } from "@/core/services/mutation";
import ModalButton from "../atoms/ModalButton";
import { setCookie } from "@/core/utils/cookies";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import OtpTimer from "./OtpTimer";

function LoginOtpForm({ phoneNumber, setStep, setIsModal }) {
  const queryClient = useQueryClient();
  const [otp, setOtp] = useState("");

  const { mutate: loginHandler, isPending, error } = useLogin();

  function submitHandler(e) {
    e.preventDefault();
    if (otp.length < 6) return;
    loginHandler(
      { phoneNumber, otp },
      {
        onSuccess: (data) => {
          setStep(null);
          setIsModal(false);
          setOtp(1);
          setCookie("accessToken", data.accessToken, 30);
          setCookie("refreshToken", data.refreshToken, 30);
          queryClient.invalidateQueries("profile");
          toast.success("با موفقیت وارد شدید");
        },
        onError: (err) => console.log(err),
      },
    );
  }

  return (
    <form
      onSubmit={submitHandler}
      className="login-modal-animation text-dark relative flex flex-col items-center rounded-2xl bg-white md:px-9 px-6 py-10 transition-all duration-200"
    >
      <Icon
        onclick={() => setStep(1)}
        name="arrow-left"
        className="absolute top-2 left-2 size-6 cursor-pointer"
      />
      <h4 className="font-dana-semiBold mt-5 text-3xl max-sm:text-xl">
        کد تایید را وارد کنید.
      </h4>
      <span className="mt-2 max-sm:text-sm">کد تایید به شماره {phoneNumber} ارسال شد</span>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="number"
        containerStyle="flex items-center md:gap-x-3.5 gap-x-2 -scale-x-100 mt-4.5"
        renderInput={(props) => (
          <input
            {...props}
            className="otp-style hover:border-secondary focus:border-primary -scale-x-100 rounded-lg border border-black/25 focus:outline-0"
          />
        )}
      />
      <span className="flex h-10 flex-col items-center justify-center text-red-500">
        {error?.response?.data?.message}
      </span>
      <OtpTimer phoneNumber={phoneNumber} />

      <ModalButton title="ورود به تورینو" isPending={isPending} />
    </form>
  );
}

export default LoginOtpForm;
