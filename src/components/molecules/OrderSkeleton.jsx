
export default function OrderSkeleton() {
  return (
    <div className="bg-header col-span-7 mt-9 h-fit space-y-10 rounded-lg border border-black/20 p-3">
      <div className="flex justify-between">
        <div className="bg-skeleton h-10 w-23 rounded-xl bg-gray-300"></div>
        <div className="bg-skeleton h-10 w-23 rounded-xl bg-gray-300"></div>
      </div>
      <div className="flex justify-between">
        <div className="bg-skeleton h-10 w-18 rounded-xl bg-gray-300"></div>
        <div className="bg-skeleton h-10 w-50 rounded-xl bg-gray-300"></div>
      </div>
      <div className="bg-skeleton h-20 w-full rounded-xl bg-gray-300"></div>
    </div>
  );
}
