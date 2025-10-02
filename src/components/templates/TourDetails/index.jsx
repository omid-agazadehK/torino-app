import TourDetailsSection from "@/components/organisms/TourDetails/TourDetailsSection";

export default function TourDetailes({ tour }) {
  return (
    <main className="w-full flex-1 pt-16 max-lg:px-7.5 md:pt-20 lg:container">
      <TourDetailsSection tour={tour} />
    </main>
  );
}
