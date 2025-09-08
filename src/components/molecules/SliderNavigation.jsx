import Icon from "@/components/atoms/Icon";

export default function SliderNavigation({ paginationRef }) {
  return (
    <div className="max-xs:w-full max-xs:max-w-50 absolute right-1/2 -bottom-12 flex translate-x-1/2 items-center justify-center gap-x-2 select-none">
      <Icon
        name="arrow-left"
        className="custom-next size-10 rotate-180 cursor-pointer"
      />
      <div ref={paginationRef} className="custom-fraction text-center"></div>
      <Icon name="arrow-left" className="custom-prev size-10 cursor-pointer" />
    </div>
  );
}
