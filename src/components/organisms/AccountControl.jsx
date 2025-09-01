"use client";
import { useGetUserData } from "@/core/services/query";

import { useState } from "react";
import ProfileDropDown from "../molecules/ProfileDropDown";
import UserInfo from "../atoms/UserInfo";
import ModalContainer from "./container/ModalContainer";
import RegisterForm from "../molecules/RegisterForm";
import LoginOtpForm from "../molecules/LoginOtpForm";
import Spinner from "../atoms/Spinner";
import AuthButton from "../atoms/AuthButton";

function AccountControl() {
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const { data, isPending } = useGetUserData();

  if (isPending)
    return (
      <div className="w-30">
        <Spinner className="mx-auto size-5" />
      </div>
    );

  return (
    <div className="relative">
      {!data && <AuthButton setIsModal={setIsModal} setStep={setStep} />}
      {step === 1 && (
        <ModalContainer onClose={() => setIsModal(false)} isModal={isModal}>
          <RegisterForm
            setIsModal={setIsModal}
            setStep={setStep}
            setPhoneNumber={setPhoneNumber}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer onClose={() => setIsModal(false)} isModal={isModal}>
          <LoginOtpForm
            setIsModal={setIsModal}
            setStep={setStep}
            phoneNumber={phoneNumber}
          />
        </ModalContainer>
      )}
      {data && (
        <UserInfo
          onClick={(e) => {
            if (isProfileDropDown === true) {
              e.stopPropagation();
              return;
            }
            setIsProfileDropDown((prev) => !prev);
          }}
        />
      )}
      {isProfileDropDown && (
        <ProfileDropDown
          phoneNumber={data?.mobile}
          setIsProfileDropDown={setIsProfileDropDown}
        />
      )}
    </div>
  );
}

export default AccountControl;
