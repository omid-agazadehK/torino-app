import Link from "next/link";
import { redirect } from "next/navigation";

export default async function OrderResult({ searchParams, ...rest }) {
  const order = await searchParams;
  if (!order.status) {
    redirect("/");
  }
  console.log(order);
  return (
    <main className="text-primary font-morabba-medium mt-10 flex flex-1 flex-col items-center justify-center gap-y-10 pt-16 md:pt-20">
      <span
        className={`xs:text-xl text-center text-sm max-md:px-4 sm:text-2xl md:text-3xl ${order.status == "failed" && "text-red-500"}`}
      >
        {order.status == "success" && "✅ درخواست شما با موفقیت انجام شد"}
        {order.status == "failed" &&
          "❌ متاسفانه درخواست شما انجام نشد. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید."}
      </span>
      <Link
        href={"/"}
        className="bg-primary hover:bg-secondary w-fit rounded-2xl px-5 py-4 text-white transition-colors duration-200 md:px-10 md:text-2xl"
      >
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
