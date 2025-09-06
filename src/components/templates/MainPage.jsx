
import TourFilter from "../organisms/TourFilter";
import Welcome from "../organisms/Welcome";

export default function MainPage() {
  return (
    <main className="mx-auto w-full max-w-360 flex-1">
      <Welcome />
      <TourFilter />
    </main>
  );
}
