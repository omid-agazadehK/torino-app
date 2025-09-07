function SkeletonCard() {
  return (
    <div className="mt-3 grid grid-cols-12 gap-x-6 gap-y-7.5 max-md:place-items-center">
      {Array.from({ length: 8 }).map((_, i) => {
        return (
          <div
            key={i}
            className="col-span-12 w-full max-w-90 animate-pulse overflow-hidden rounded-xl bg-white sm:col-span-6 md:col-span-4 md:max-w-70 lg:col-span-3"
          >
            <div className="z-0 h-40 w-full max-w-90 bg-gray-300"></div>
            <div className="mt-2 space-y-4 p-2">
              <p className="h-6 w-25 rounded-xl bg-gray-300"></p>
              <p className="h-4 w-full rounded-xl bg-gray-300"></p>
            </div>
            <div className="flex justify-between border-t border-black/12 p-2">
              <p className="h-7 w-15 rounded-xl bg-gray-300"></p>
              <p className="h-7 w-25 rounded-xl bg-gray-300"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkeletonCard;
