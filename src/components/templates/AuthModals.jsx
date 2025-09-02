"use client";
import { ModalContext } from "@/core/context/ModalContext";
import { use, useState } from "react";
import ModalContainer from "../organisms/container/ModalContainer";
import RegisterForm from "../molecules/RegisterForm";
import LoginOtpForm from "../molecules/LoginOtpForm";

function AuthModals() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isModal, setIsModal, setStep, step } = use(ModalContext);
  return (
    <>
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
    </>
  );
}

export default AuthModals;
