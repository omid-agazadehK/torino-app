import TourDetailes from "@/components/templates/TourDetailes";
import { serverFetch } from "@/core/services/https";

export default async function page(props) {
  const { tourId } = await props.params;
  const tour = serverFetch(`/tour/${tourId}`, null, "no-store");

  return <TourDetailes tour={tour} />;
}
