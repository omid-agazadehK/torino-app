import Icon from "@/components/shared/Icon";

export default function PersonalInfoItem({ value, title }) {
  return (
    <div className="xs:col-span-11 col-span-10 flex items-center max-md:justify-between md:col-span-6">
      <span className="w-full max-w-30 whitespace-nowrap max-sm:text-sm md:max-w-40">
        {title}
      </span>
      {value && (
        <span className="font-dana-semiBold text-sm whitespace-nowrap">
          {value}
        </span>
      )}
      {!value && <Icon name={"line"} />}
    </div>
  );
}
