import Icon from "@/components/shared/Icon";
import PersonalInfoItem from "@/components/molecules/dashboard/profile/PersonalInfoItem";
import { useGetUserData } from "@/core/services/query";
import { toJalaliDate } from "@/core/utils/date";

export default function UserPersonalDetails({ setFormStatus }) {
  const { data: userData } = useGetUserData();
  const InfoFields = [
    { title: "نام و نام خانوادگی", value: userData?.fullName },
    { title: "کد ملی", value: userData?.nationalCode },
    { title: "جنسیت", value: userData?.gender === "male" ? "مرد" : "زن" },
    { title: "تاریخ تولد", value: toJalaliDate(userData?.birthDate) },
  ];

  return (
    <div className="mt-7 grid grid-cols-12 gap-7 pb-6">
      {InfoFields?.map((field) => (
        <PersonalInfoItem
          key={field.title}
          title={field.title}
          value={field.value}
        />
      ))}
      <button
        onClick={() =>
          setFormStatus((prev) => ({ ...prev, personalForm: true }))
        }
        className="text-secondary absolute top-3 left-5 flex gap-x-2 text-sm transition-colors duration-200 hover:text-orange-500 max-sm:text-xs"
      >
        <Icon name={"edit"} className="size-4 sm:size-5" />
        ویرایش اطلاعات
      </button>
    </div>
  );
}
