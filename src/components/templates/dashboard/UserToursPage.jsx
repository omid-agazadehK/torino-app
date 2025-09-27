"use client";
import UserTours from "@/components/organisms/dashboard/UserTours";
import { useGetUserTours } from "@/core/services/query";

export default function UserToursPage() {
  const { data: tours } = useGetUserTours();
  return (
    <section className="col-span-9 space-y-2 rounded-xl border border-black/20 px-5 py-3">
      {tours?.map((tour, index) => (
        <UserTours key={index} tour={tour} />
      ))}
    </section>
  );
}
