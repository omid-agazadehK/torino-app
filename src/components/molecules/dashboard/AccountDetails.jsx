import Icon from "@/components/atoms/Icon";
import { useGetUserData } from "@/core/services/query";

export default function AccountDetails({ setFormStatus }) {
  const { data: userData } = useGetUserData();
  return (
    <div className="col-span-12 flex gap-x-1 max-sm:text-sm md:col-span-6">
      <div className="flex w-full items-center max-md:justify-between">
        <span className="w-full max-w-10 sm:max-w-25">ایمیل</span>
        <span
          className="max-w-40 truncate text-xs md:text-sm"
          title={userData?.email}
        >
          {userData?.email || <Icon name={"line"} />}
        </span>
      </div>
      <button
        onClick={() =>
          setFormStatus((prev) => ({ ...prev, accountForm: true }))
        }
        className="text-secondary flex gap-x-2 sm:text-sm text-xs transition-colors duration-200 hover:text-orange-500"
      >
        <Icon name={"edit"} className="sm:size-5 size-4" />
        افزودن
      </button>
    </div>
  );
}
