import Filter from "../organisms/Filter";
import Welcome from "../organisms/Welcome";

export default function MainPage() {
  return (
    <main className="mx-auto w-full max-w-360 flex-1">
      <Welcome />
      <Filter />
    </main>
  );
}
