"use client";
import { useGetUserData } from "@/core/services/query";
import Icons from "../atoms/Icons";
import Spinner from "../atoms/Spinner";
import { useState } from "react";
import ProfileDropDown from "../atoms/ProfileDropDown";
import UserInfo from "../atoms/UserInfo";
import ModalContainer from "./container/ModalContainer";
import RegisterForm from "../molecules/RegisterForm";

function AccountControl() {
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [step, setStep] = useState(1);
  const { data, error, isPending } = useGetUserData();
  // if (isPending)
  //   return (
  //     <div className="w-30">
  //       <Spinner className="size-5 mx-auto" />
  //     </div>
  //   );
  return (
    <div className="relative">
      {!data && (
        <button
          onClick={() => setIsModal(true)}
          className="py-1.5 px-4 text-lg rounded-xl border-2 font-dana-medium border-primary text-primary flex items-center gap-x-1 hover:bg-primary hover:text-white  ease-out transition-colors duration-300 "
        >
          <Icons name="profile" className="size-6 " />
          ورود | خروج
        </button>
      )}
      <ModalContainer onClose={() => setIsModal(false)} isModal={isModal}>
        <RegisterForm setIsModal={setIsModal} setStep={setStep} step={step} />
      </ModalContainer>
      {data && (
        <UserInfo onClick={() => setIsProfileDropDown((prev) => !prev)} />
      )}
      {isProfileDropDown && <ProfileDropDown />}
    </div>
  );
}

export default AccountControl;
