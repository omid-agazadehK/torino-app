"use client";
import SkeletonUserTours from "@/components/molecules/SkeletonUserTours";
import UserTours from "@/components/organisms/dashboard/UserTours";
import { useGetUserTours } from "@/core/services/query";

export default function UserToursPage() {
  const { data: tours, isPending } = useGetUserTours();
  if (isPending) return <SkeletonUserTours />;
  return (
    <section className="col-span-12 space-y-2 rounded-xl border border-black/20 px-5 py-3 md:col-span-9">
      {tours?.map((tour, index) => (
        <UserTours key={index} tour={tour} />
      ))}
    </section>
  );
}
