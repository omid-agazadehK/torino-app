import Image from "next/image";
const benefits = [
  {
    title: "بصرفه ترین قیمت",
    detail: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
    image: "/images/benefits/discount.png",
  },
  {
    title: "پشتیبانی",
    detail: "پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.",
    image: "/images/benefits/message.png",
  },
  {
    title: "رضایت کاربران",
    detail: "رضایت بیش از 10هزار کاربر از تور های ما. ",
    image: "/images/benefits/two-heart.png",
  },
];
export default function BenefitsSection() {
  return (
    <section className="text-dark pt-7.5 mt-7.5 mb-7 grid grid-cols-12 place-items-center gap-x-5 border-t border-black/25 max-lg:px-2 lg:container lg:grid-rows-1 lg:gap-x-15">
      {benefits.map((item, index) => (
        <div
          key={index}
          className="col-span-12 flex h-full items-center justify-center gap-x-2 max-md:max-w-70 md:col-span-4 md:w-full"
        >
          <Image
            src={item.image}
            alt="hi hi hi hi hi"
            width={100}
            height={100}
            className="size-20 lg:size-30"
          />
          <div className="flex h-full flex-col items-start gap-y-2 py-2">
            <span className="font-dana-medium block text-base md:text-xl lg:text-2xl">
              {item.title}
            </span>
            <p className="text-xs lg:text-base">{item.detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
