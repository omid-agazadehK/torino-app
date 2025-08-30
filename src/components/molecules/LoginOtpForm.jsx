import { useEffect, useState } from "react";
import Icons from "../atoms/Icons";
import OTPInput from "react-otp-input";
import SendPhoneNumberButton from "../atoms/SendPhoneNumberButton";
import { useLogin } from "@/core/services/mutation";
import Timer from "../atoms/Timer";

function LoginOtpForm({ phoneNumber, setStep }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const { mutate, isPending } = useLogin(setError);
  const submitHandler = (e) => {
    e.preventDefault();
    mutate({ phoneNumber, otp });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="login-modal-animation bg-white transition-all duration-200 relative rounded-2xl  px-9 flex flex-col items-center py-10 text-dark"
    >
      <Icons
        onclick={() => setStep(1)}
        name="arrow-left"
        className="size-6 absolute left-2 top-2 cursor-pointer"
      />
      <h4 className="font-dana-semiBold text-3xl mt-5">
        کد تایید را وارد کنید.
      </h4>
      <span className="mt-2">کد تایید به شماره {phoneNumber} ارسال شد</span>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="number"
        containerStyle="flex items-center gap-x-3.5 -scale-x-100 mt-4.5"
        renderInput={(props) => (
          <input
            {...props}
            className="otp-style border border-black/25 rounded-lg focus:outline-0 -scale-x-100 hover:border-secondary   focus:border-primary"
          />
        )}
      />
      <span className="h-10 text-red-500">{error?.message}</span>
      <Timer />

      <SendPhoneNumberButton title="ورود به تورینو" isPending={isPending} />
    </form>
  );
}

export default LoginOtpForm;
