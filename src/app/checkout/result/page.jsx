import Link from "next/link";
import { redirect } from "next/navigation";

export default async function OrderResult({ searchParams, ...rest }) {
  const isOrder = searchParams;
  if (!isOrder.status) {
    redirect("/");
  }
  return (
    <main className="text-primary font-morabba-medium mt-10 flex flex-1 flex-col items-center justify-center gap-y-10 pt-16 text-3xl md:pt-20">
      <span>درخواست شما با موفقیت انجام شد</span>
      <Link
        href={"/"}
        className="bg-primary hover:bg-secondary w-fit rounded-2xl px-10 py-4 text-2xl text-white transition-colors duration-200"
      >
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
