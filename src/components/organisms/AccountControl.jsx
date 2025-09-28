"use client";

import { use, useState } from "react";
import { useGetUserData } from "@/core/services/query";
import { ModalContext } from "@/core/context/ModalContext";

import ProfileDropDown from "../molecules/ProfileDropDown";
import UserInfo from "../atoms/UserInfo";
import Spinner from "../atoms/Spinner";
import AuthButton from "../atoms/AuthButton";
import { AuthContext } from "@/core/context/AuthContext";

function AccountControl() {
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const { setIsModal, setStep } = use(ModalContext);
  const { data, isPending } = useGetUserData();
  const { isLogin } = use(AuthContext);

  if (isPending)
    return (
      <div className="w-30">
        <Spinner className="mx-auto size-5" />
      </div>
    );

  return (
    <div className="relative">
      {!isLogin && <AuthButton setIsModal={setIsModal} setStep={setStep} />}
      {isLogin && (
        <UserInfo
          isProfileDropDown={isProfileDropDown}
          onClick={() =>
            setIsProfileDropDown((prev) => !isProfileDropDown && !prev)
          }
        />
      )}
      {isProfileDropDown && (
        <ProfileDropDown
          userTag={data?.fullName||data?.mobile}
          setIsProfileDropDown={setIsProfileDropDown}
        />
      )}
    </div>
  );
}

export default AccountControl;
