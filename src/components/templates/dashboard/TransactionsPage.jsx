"use client";
import SkeletonTransaction from "@/components/molecules/SkeletonTransaction";
import TransactionDetails from "@/components/organisms/Transactions/TransactionDetails";
import { useGetTransaction } from "@/core/services/query";

export default function TransactionsPage() {
  const { data: transactionsData, isPending } = useGetTransaction();

  return (
    <section className="col-span-12 h-fit overflow-hidden rounded-xl border border-black/20 md:col-span-9">
      <div className="grid grid-cols-12 bg-gray-200 p-4 text-xs sm:text-sm md:text-base">
        <span className="col-span-3 md:col-span-3">تاریخ و ساعت</span>
        <span className="col-span-3 md:col-span-2">مبلغ(تومان)</span>
        <span className="col-span-3 hidden md:block">نوع تراکنش</span>
        <span className="col-span-6 md:col-span-4">شماره سفارش</span>
      </div>
      {isPending && <SkeletonTransaction />}
      {transactionsData?.length === 0 && !isPending && (
        <span className="font-morabba-medium inline-block w-full py-2 text-center text-2xl">
          هیچ تراکنشی وجود ندارد
        </span>
      )}
      {transactionsData?.map((transaction) => (
        <TransactionDetails key={transaction._id} transaction={transaction} />
      ))}
    </section>
  );
}
