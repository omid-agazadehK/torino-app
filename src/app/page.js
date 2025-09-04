import MainPage from "@/components/templates/MainPage";
import FilterProvider from "@/core/context/FilterContext";
import ToursProvider from "@/core/context/ToursContext";
import { serverFetch } from "@/core/services/https";

export default async function Home({ searchParams }) {
  const tours = await serverFetch("/tour", searchParams, "no-store");
  return (
    <ToursProvider tours={tours}>
      <FilterProvider>
        <MainPage />
      </FilterProvider>
    </ToursProvider>
  );
}
