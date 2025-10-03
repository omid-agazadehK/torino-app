"use client";
import SkeletonUserTours from "@/components/molecules/dashboard/my-tours/SkeletonUserTours";
import UserTours from "@/components/organisms/dashboard/my-tours/UserTours";
import { useGetUserTours } from "@/core/services/query";

export default function UserToursPage() {
  const { data: tours, isPending } = useGetUserTours();

  if (isPending) return <SkeletonUserTours />;
  if (!tours)
    return (
      <span className="font-morabba-medium col-span-9 mt-10 text-center text-3xl">
        شما هیچ توری ندارید
      </span>
    );
  return (
    <section className="col-span-12 space-y-2 rounded-xl border border-black/20 px-5 py-3 md:col-span-9">
      {tours?.map((tour, index) => (
        <UserTours key={index} tour={tour} />
      ))}
    </section>
  );
}
