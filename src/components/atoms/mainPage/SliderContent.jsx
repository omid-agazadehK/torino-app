
function SliderContent() {
  return (
    <div className="col-span-12 w-full max-lg:px-7 lg:col-span-5">
      <div className="flex gap-x-2 lg:items-center">
        <p className="bg-primary flex h-13 w-13 flex-shrink-0 -scale-x-100 items-center justify-center rounded-full pt-2 text-4xl font-extrabold text-white">
          ?
        </p>
        <h5 className="text-dark font-morabba-bold w-90 gap-x-1 text-2xl md:text-4xl">
          چرا <span className="text-primary">تورینو</span> ؟
        </h5>
      </div>
      <span className="font-morabba-medium mt-8 hidden text-2xl lg:block">
        تور طبیعت گردی و تاریخی
      </span>
      <p className="mt-4 hidden text-justify text-xl/12 lg:block">
        اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت
        چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
        طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار
        تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را
        خریداری کنید.
      </p>
    </div>
  );
}

export default SliderContent;
