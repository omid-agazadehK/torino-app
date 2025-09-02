import { setCookie } from "@/core/utils/cookies";
import { useQueryClient } from "@tanstack/react-query";
import Icon from "../atoms/Icon";
import Link from "next/link";
import { useRef } from "react";
import useClickOutside from "@/core/hooks/useClickOutSide";

function ProfileDropDown({ phoneNumber, setIsProfileDropDown }) {
  const ref = useRef(null);
  const queryClient = useQueryClient();
  function logoutHandler() {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    queryClient.removeQueries("user");
    setIsProfileDropDown(false);
  }
  useClickOutside(ref, () => setIsProfileDropDown(false));
  return (
    <div
      ref={ref}
      className="absolute top-full flex -right-2 h-fit w-40 flex-col overflow-hidden rounded-xl bg-white md:right-1/2 lg:w-62 md:translate-x-1/2"
    >
      <div className="font-dana-medium bg-background flex items-center gap-x-2 overflow-hidden border-b border-b-black/12 px-3 py-2.5 max-lg:text-sm">
        <div className="rounded-full bg-gray-300 p-1.5">
          <Icon name="profile" className="size-4 text-gray-600" />
        </div>
        <span>{phoneNumber}</span>
      </div>
      <Link
        href="/dashboard"
        className="dropDown-border hover:bg-dark/3 text-dark relative flex gap-x-2 px-3 py-4.5 transition-colors max-lg:text-xs"
      >
        <Icon name="profile-1" className="size-4 md:size-5" />
        <span>اطلاعات حساب کاربری</span>
      </Link>
      <div className="flex cursor-pointer gap-x-2 border-t-black/25 px-3 py-4.5 text-red-500 transition-colors hover:bg-red-500/20 max-lg:text-xs">
        <Icon name="logout" className="size-4 md:size-5" />
        <span onClick={() => logoutHandler()}>خروج از حساب کاربری</span>
      </div>
    </div>
  );
}

export default ProfileDropDown;
