import { useGetUserData } from "@/core/services/query";
import Icon from "./Icon";

function UserInfo({ onClick, isProfileDropDown }) {
  const { data } = useGetUserData();
  return (
    <div
      onClick={onClick}
      className="text-primary hover:text-secondary flex cursor-pointer items-center justify-center gap-x-1 transition-colors duration-200"
    >
      <Icon name="profile" className="size-3.5 sm:size-6" />
      <span className="text-sm sm:text-lg">{data.fullName || data.mobile}</span>
      <Icon
        name="arrow-down"
        className={`${!isProfileDropDown ? "-rotate-90" : "rotate-0"} size-4 transition-all sm:size-6`}
      />
    </div>
  );
}

export default UserInfo;
