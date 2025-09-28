export default function Loading() {
  return (
    <div className="lg:container my-9 w-full rounded-xl border-black/20 md:border md:bg-white md:px-6 md:py-7">
      <div className="flex w-full flex-col gap-y-4 md:flex-row md:gap-x-2">
        <div className="bg-skeleton h-65 shrink-0 rounded-xl bg-gray-300 md:w-80 lg:w-100"></div>
        <div className="flex w-full flex-col gap-y-10">
          <div className="flex gap-y-2 max-md:items-center max-md:justify-between md:flex-col">
            <div className="bg-skeleton h-9 w-30 rounded-xl bg-gray-300"></div>
            <div className="bg-skeleton h-7 w-27 rounded-xl bg-gray-300"></div>
          </div>
          <div className="flex gap-x-5 max-md:items-center max-md:justify-center">
            <div className="bg-skeleton h-11 w-30 rounded-xl bg-gray-300 md:w-25 lg:w-40"></div>
            <div className="bg-skeleton h-11 w-30 rounded-xl bg-gray-300 md:w-25 lg:w-40"></div>
            <div className="bg-skeleton h-11 w-30 rounded-xl bg-gray-300 md:w-25 lg:w-40"></div>
          </div>
          <div className="flex justify-between md:hidden">
            <div className="bg-skeleton h-15 w-23 rounded-xl bg-gray-300 lg:w-40"></div>
            <div className="bg-skeleton h-15 w-23 rounded-xl bg-gray-300 lg:w-40"></div>
            <div className="bg-skeleton h-15 w-23 rounded-xl bg-gray-300 lg:w-40"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-skeleton h-10 w-30 rounded-xl bg-gray-300 lg:w-45"></div>
            <div className="bg-skeleton h-14 w-30 rounded-xl bg-gray-300 lg:w-50"></div>
          </div>
        </div>
      </div>
      <div className="mt-10 hidden justify-between md:flex">
        <div className="bg-skeleton h-20 w-25 rounded-xl bg-gray-300 lg:w-40"></div>
        <div className="bg-skeleton h-20 w-25 rounded-xl bg-gray-300 lg:w-40"></div>
        <div className="bg-skeleton h-20 w-25 rounded-xl bg-gray-300 lg:w-40"></div>
        <div className="bg-skeleton h-20 w-25 rounded-xl bg-gray-300 lg:w-40"></div>
        <div className="bg-skeleton h-20 w-25 rounded-xl bg-gray-300 lg:w-40"></div>
        <div className="bg-skeleton h-20 w-25 rounded-xl bg-gray-300 lg:w-40"></div>
      </div>
    </div>
  );
}
