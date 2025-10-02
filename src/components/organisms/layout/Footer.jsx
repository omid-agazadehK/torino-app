import Image from "next/image";

function Footer() {
  return (
    <footer className="grid w-full grid-cols-12 border-y border-y-black/20 px-7 pb-2 lg:container lg:px-0">
      <div className="col-span-12 flex items-center justify-between text-right md:col-span-5 lg:col-span-4">
        <nav>
          <h5 className="font-dana-semiBold mb-4 text-2xl">تورینو</h5>
          <ul className="space-y-2">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>چرا تورینو</li>
            <li>بیمه مسافرتی</li>
          </ul>
        </nav>
        <nav>
          <h5 className="font-dana-semiBold mb-4 text-2xl">خدمات مشتریان</h5>
          <ul className="space-y-2">
            <li>پشتیبانی آنلاین</li>
            <li>راهنمای خرید</li>
            <li>راهنمای استرداد</li>
            <li>پرسش و پاسخ</li>
          </ul>
        </nav>
      </div>
      <div className="col-span-12 flex flex-row-reverse items-end justify-between gap-y-9 py-5 text-left md:col-span-7 md:flex-col lg:col-span-8">
        <div className="flex flex-col items-end gap-y-5 text-black">
          <Image
            className="h-auto w-auto max-md:h-6.5 max-md:w-25"
            src="/images/torino-icon.webp"
            width={146}
            height={44}
            alt="torino icon"
          />
          <span className="whitespace-nowrap max-md:text-sm">
            تلفن پشتیبانی:8574-021
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-7">
          <Image
            className="h-10 w-9 sm:h-14 sm:w-14 lg:h-15 lg:w-15"
            src="/images/state-airline.png"
            width={68}
            height={70}
            alt="state-airline icon"
          />
          <Image
            className="h-10 w-9 sm:h-14 sm:w-14 lg:h-15 lg:w-15"
            src="/images/passenger-rights.png"
            width={68}
            height={70}
            alt="passeger-rights icon"
          />
          <Image
            className="h-10 w-9 sm:h-14 sm:w-14 lg:h-15 lg:w-15"
            src="/images/ecunion.png"
            width={68}
            height={70}
            alt="ecunion icon"
          />
          <Image
            className="h-10 w-9 sm:h-14 sm:w-14 lg:h-15 lg:w-15"
            src="/images/samandehi.png"
            width={68}
            height={70}
            alt="samandehi icon"
          />
          <Image
            className="h-10 w-9 sm:h-14 sm:w-14 lg:h-17.5 lg:w-17"
            src="/images/aira.png"
            width={68}
            height={70}
            alt="aira icon"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
