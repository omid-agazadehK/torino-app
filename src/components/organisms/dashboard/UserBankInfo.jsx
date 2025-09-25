import Icon from "@/components/atoms/Icon";
import { useGetUserData } from "@/core/services/query";

export default function UserBankInfo({ setFormStatus }) {
  const { data: userData } = useGetUserData();
  return (
    <div className="mt-7 grid grid-cols-12 gap-7">
      <div className="col-span-10 flex w-full items-center max-md:justify-between sm:col-span-6">
        <span className="w-full max-w-10 whitespace-nowrap sm:max-w-25">
          شماره شبا
        </span>
        <span
          className="max-w-40 truncate text-xs md:text-sm"
          title={userData?.payment?.shaba_code}
        >
          {userData?.payment?.shaba_code || <Icon name={"line"} />}
        </span>
      </div>
      <div className="col-span-10 flex w-full items-center max-md:justify-between sm:col-span-6">
        <span className="w-full max-w-10 whitespace-nowrap sm:max-w-25">
          شماره کارت
        </span>
        <span
          className="max-w-40 truncate text-xs md:text-sm"
          title={userData?.payment?.debitCard_code}
        >
          {userData?.payment?.debitCard_code || <Icon name={"line"} />}
        </span>
      </div>
      <div className="col-span-10 flex w-full items-center max-md:justify-between sm:col-span-6">
        <span className="w-full max-w-10 whitespace-nowrap sm:max-w-25">
          شماره حساب
        </span>
        <span
          className="max-w-40 truncate text-xs md:text-sm"
          title={userData?.payment?.accountIdentifier}
        >
          {userData?.payment?.accountIdentifier || <Icon name={"line"} />}
        </span>
      </div>
      <button
        onClick={() => setFormStatus((prev) => ({ ...prev, bankForm: true }))}
        className="text-secondary absolute top-3 left-5 flex gap-x-2 text-xs transition-colors duration-200 hover:text-orange-500 sm:text-sm"
      >
        <Icon name={"edit"} className="size-4 sm:size-5" />
        ویرایش اطلاعات
      </button>
    </div>
  );
}
