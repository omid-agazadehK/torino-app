"use client";
import Spinner from "@/components/atoms/Spinner";
import TransactionDetails from "@/components/organisms/Transactions/TransactionDetails";
import { useGetTransaction } from "@/core/services/query";

export default function TransactionsPage() {
  const { data: transactionsData, isPending } = useGetTransaction();
  if (isPending)
    return (
      <div className="col-span-12 flex items-center justify-center">
        <Spinner className="md:size-20 size-10 !border-8" />
      </div>
    );
  return (
    <section className="md:col-span-9 col-span-12 h-fit overflow-hidden rounded-xl border border-black/20 ">
      <div className="grid grid-cols-12 bg-gray-200 p-4 col-span-3 md:text-base sm:text-sm text-xs ">
        <span className="md:col-span-3 col-span-3">تاریخ و ساعت</span>
        <span className="md:col-span-2 col-span-3">مبلغ(تومان)</span>
        <span className="col-span-3 md:block hidden">نوع تراکنش</span>
        <span className="md:col-span-4 col-span-6">شماره سفارش</span>
      </div>
      {transactionsData.length === 0 && (
        <span className="font-morabba-medium inline-block w-full py-2 text-center text-2xl">
          هیچ تراکنشی وجود ندارد
        </span>
      )}
      {transactionsData?.map((transaction) => (
        <TransactionDetails key={transaction._id} transaction={transaction} />
      ))}
      {transactionsData?.map((transaction) => (
        <TransactionDetails key={transaction._id} transaction={transaction} />
      ))}
      {transactionsData?.map((transaction) => (
        <TransactionDetails key={transaction._id} transaction={transaction} />
      ))}
    </section>
  );
}
