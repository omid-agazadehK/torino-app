import Icon from "../../shared/Icon";

function InfoItem({ item }) {
  const { label, icon, value, formatter } = item;
  return (
    <div className={`col-span-4 flex shrink-0 flex-col items-center gap-y-3`}>
      <span className="flex gap-x-2">
        <Icon name={icon} className="size-4 md:size-5" />
        {label}
      </span>
      <span className="font-dana-medium text-sm md:text-base">
        {formatter ? formatter(value) : value}
      </span>
    </div>
  );
}

export default InfoItem;
