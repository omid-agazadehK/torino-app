import PersonalInfoItem from "@/components/molecules/dashboard/PersonalInfoItem";
import { useGetUserData } from "@/core/services/query";

export default function PersonalInfoGrid() {
  const { userData } = useGetUserData();
  const InfoFields = [
    { title: "نام و نام خانوادگی", value: userData?.name },
    { title: "کد ملی", value: userData?.nationalCode },
    { title: "جنسیت", value: userData?.gender },
    { title: "تاریخ تولد", value: userData?.birthDate },
  ];

  return (
    <div className="grid grid-cols-12 gap-7 pb-6">
      {InfoFields?.map((field) => (
        <PersonalInfoItem
          key={field.title}
          title={field.title}
          value={field.value}
        />
      ))}
    </div>
  );
}
