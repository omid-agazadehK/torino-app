import MainPage from "@/components/templates/MainPage";
import FilterProvider from "@/core/context/FilterContext";
import ToursProvider from "@/core/context/ToursContext";
import { serverFetch } from "@/core/services/https";
export const metadata = {
  title: "برگزارد کننده تورهای تورینو ",
  description: "salam bamaram",
};

export default async function Home({ searchParams }) {
  const tours = serverFetch("/tour", await searchParams, "no-store");
  const allTours = await serverFetch("/tour", "", "no-store");
  return (
    <ToursProvider tours={tours} allTours={allTours}>
      <FilterProvider searchParams={await searchParams}>
        <MainPage />
      </FilterProvider>
    </ToursProvider>
  );
}
