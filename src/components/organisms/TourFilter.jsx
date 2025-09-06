import FilterDate from "../molecules/FilterDate";
import SubmitFilterButton from "../atoms/SubmitFilterButton";
import CityFilterField from "../molecules/CityFilterField";

function TourFilter() {
  return (
    <section className="mt-4 mb-21 flex flex-col items-center justify-center gap-y-7 px-7 lg:container">
      <h2 className="font-dana-semiBold text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>
      <div className="rounded-2.5xl grid w-full grid-cols-12 md:gap-x-2 gap-y-3 border-black/20 text-xl backdrop-blur-sm md:w-2xl md:border md:p-2.5 lg:w-4xl">
        <div className="col-span-12 flex md:col-span-6 max-md:gap-x-2">
          <CityFilterField type="origin" icon="location" label="مبدا" />
          <CityFilterField
            type="destination"
            icon="global-search"
            label="مقصد"
          />
        </div>
        <FilterDate />
        <SubmitFilterButton />
      </div>
    </section>
  );
}

export default TourFilter;
