export default function DetailsHeader({ tourDay ,title}) {
  return (
    <div className="flex justify-between gap-y-5 max-md:mt-4 max-md:items-center md:flex-col">
      <h2 className="font-morabba-bold text-2xl text-black md:text-4xl">
        {title}
      </h2>
      <span className="md:text-xl">
        {tourDay} روز و{tourDay - 1} شب
      </span>
    </div>
  );
}
