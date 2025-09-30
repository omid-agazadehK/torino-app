import MainPage from "@/components/templates/MainPage";
import FilterProvider from "@/core/context/FilterContext";
import ToursProvider from "@/core/context/ToursContext";
import { serverFetch } from "@/core/services/https";
export const metadata = {
  title: "برگزارد کننده تورهای تورینو ",
  description:
    "رزرو آنلاین تور تورینو با بهترین قیمت و خدمات کامل؛ تجربه‌ای متفاوت از سفر همراه با راهنمای فارسی‌زبان.",
};

export default async function Home({ searchParams }) {
  const tours = serverFetch("/tour", await searchParams, "no-store");
  const allToursPromise =  serverFetch("/tour", "", "no-store");
  return (
    <ToursProvider tours={tours} allToursPromise={allToursPromise}>
      <FilterProvider searchParams={await searchParams}>
        <MainPage />
      </FilterProvider>
    </ToursProvider>
  );
}
