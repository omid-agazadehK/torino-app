import Icon from "@/components/atoms/Icon";
import AccountDetails from "@/components/molecules/dashboard/AccountDetails";
import AccountDetailsForm from "@/components/molecules/dashboard/AccountDetailsForm";

import { useGetUserData } from "@/core/services/query";

export default function UserDetails({ formStatus, setFormStatus }) {
  const { data: userData } = useGetUserData();

  return (
    <div className="grid grid-cols-12 content-center gap-y-10 pt-7 pb-4 md:px-0 lg:px-8">
      <div className="col-span-12 flex items-center gap-x-8 max-md:justify-between md:col-span-6">
        <span className="w-full max-w-25 max-sm:text-sm">شماره موبایل</span>
        <span>{userData?.mobile || <Icon name={"line"} />}</span>
      </div>
      {!formStatus.accountForm && (
        <AccountDetails setFormStatus={setFormStatus} />
      )}
      {formStatus.accountForm && (
        <AccountDetailsForm setFormStatus={setFormStatus} />
      )}
    </div>
  );
}
