"use client";

import { use, useState } from "react";
import { useGetUserData } from "@/core/services/query";
import { ModalContext } from "@/core/context/ModalContext";

import ProfileDropDown from "../molecules/ProfileDropDown";
import UserInfo from "../atoms/UserInfo";
import Spinner from "../atoms/Spinner";
import AuthButton from "../atoms/AuthButton";

function AccountControl() {
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const { setIsModal, setStep } = use(ModalContext);
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
      {data && (
        <UserInfo
          onClick={() =>
            setIsProfileDropDown((prev) => !isProfileDropDown && !prev)
          }
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
