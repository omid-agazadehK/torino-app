export default function SkeletonTransaction() {
  return Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className="col-span-3 grid grid-cols-12 gap-x-5 p-4 text-xs sm:text-sm md:text-base"
    >
      <div className="bg-skeleton col-span-3 h-5 w-full rounded-xl md:col-span-3"></div>
      <div className="bg-skeleton col-span-3 h-5 w-full rounded-xl md:col-span-2"></div>
      <div className="bg-skeleton col-span-3 hidden h-5 w-full rounded-xl md:block"></div>
      <div className="bg-skeleton col-span-6 h-5 w-full rounded-xl md:col-span-4"></div>
    </div>
  ));
}
