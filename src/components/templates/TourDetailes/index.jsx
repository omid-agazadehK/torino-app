import TourDetailsSection from "@/components/organisms/TourDetails/TourDetailsSection";

export default function TourDetailes({ tour }) {
  return (
    <main className="w-full flex-1 max-md:px-7.5 lg:container">
      <TourDetailsSection tour={tour} />
    </main>
  );
}
