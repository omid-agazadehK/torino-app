import Image from "next/image";
import Icon from "@/components/atoms/Icon";

export default function BannerSection() {
  return (
    <section className="mt-27.5 grid h-50 grid-cols-12 rounded-xl border border-black/25 text-white max-lg:mx-7 md:h-63 lg:container">
      <div className="bg-primary relative col-span-12 scale-101 space-y-2 rounded-xl pr-2 md:col-span-9 md:space-y-8 lg:pr-14">
        <p className="font-morabba-bold xs:text-2xl mt-3 w-full text-xl sm:text-4xl md:mt-9 md:text-5xl">
          خرید تلفنی از <span className="text-[#015058]">تورینو</span>
        </p>
        <span className="font-morabba-medium xs:text-base text-sm sm:text-2xl lg:text-3xl">
          به هرکجا که میخواهید!
        </span>
        <Image
          src="/images/banner-man.png"
          width={150}
          height={150}
          alt="banner man"
          className="absolute bottom-0 left-0 xs:h-40 xs:w-50 w-40 h-30 md:h-55 md:w-75 lg:left-5"
        />
      </div>
      <div className="col-span-12 flex items-center justify-center max-md:gap-x-3 md:col-span-3 md:flex-col md:gap-y-3">
        <span className="font-dana-semiBold flex gap-x-2 text-xl text-black md:text-3xl">
          021-1840 <Icon name="call" className="size-5 fill-black md:size-6" />
        </span>
        <button className="rounded-xl bg-[#015058] px-7 py-2.5 text-sm md:px-10 md:text-base">
          اطلاعات بیشتر
        </button>
      </div>
    </section>
  );
}
