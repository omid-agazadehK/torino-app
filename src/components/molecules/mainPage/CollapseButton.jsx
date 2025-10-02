import Icon from "@/components/shared/Icon";

function CollapseButton({ isCollapsed, setIsCollapsed }) {
  return (
    <button
      onClick={() => setIsCollapsed((prev) => !prev)}
      className="col-span-12 flex items-center gap-x-2 text-sm text-black/50 sm:hidden"
    >
      {!isCollapsed ? "مشاهده کمتر" : "مشاهده بیشتر"}
      <Icon
        name="arrow-down"
        className={`${!isCollapsed ? "rotate-180" : ""} size-4 transition-transform`}
      />
    </button>
  );
}

export default CollapseButton;
