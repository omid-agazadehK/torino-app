import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Icon from "../../shared/Icon";

export default function TourHeader() {
  const query = useSearchParams();

  return (
    <div className="flex items-center justify-between gap-x-5 pb-2 md:pl-6">
      <div className="flex justify-between gap-x-5">
        <Image src={"/icon1.png"} height={50} width={50} alt="moz" />
        <h5 className="text-right text-xl md:text-3xl">
          {query.size > 0 ? "تورهای انتخاب شده" : "همه تورها"}
        </h5>
      </div>
      {query.size > 0 && (
        <Link
          href={"/"}
          scroll={false}
          className="bg-secondary font-morabba-medium flex items-center gap-x-2 rounded-lg px-2 pt-1 pb-0.5 text-2xl text-white drop-shadow-lg drop-shadow-red-500 transition-all duration-200 hover:scale-105 hover:bg-red-500"
        >
          <span className="max-sm:hidden">حذف فیلتر</span>
          <Icon name={"cross-empty"} className="size-10 text-white" />
        </Link>
      )}
    </div>
  );
}
