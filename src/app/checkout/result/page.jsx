import Link from "next/link";
import { redirect } from "next/navigation";

export default async function OrderResult({ searchParams, ...rest }) {
  const moz = searchParams;
  console.log(!moz.status);
  if (!moz.status) {
    redirect("/");
  }
  return (
    <main className="text-primary font-morabba-medium mt-10 flex flex-1 flex-col items-center justify-center gap-y-10 text-3xl">
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
