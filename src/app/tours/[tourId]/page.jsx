import TourDetailes from "@/components/templates/TourDetails";
import { serverFetch } from "@/core/services/https";
import { diffDays, toJalaliString } from "@/core/utils/date";
export async function generateMetadata(props) {
  const { tourId } = await props.params;
  const { title, startDate, endDate, origin, destination, options } =
    await serverFetch(`/tour/${tourId}`, null, "no-store");
  const tourDays = diffDays(startDate, endDate);
  return {
    title: `تور ${title} | ${tourDays} روزه از ${origin.name}`,
    description: `تور ${tourDays} ${destination.name} از ${origin.name} با ${options?.join("، ")}. رزرو آسان با ظرفیت محدود و قیمت ویژه برای تاریخ های ${toJalaliString(startDate)}`,
  };
}
export default async function page(props) {
  const { tourId } = await props.params;
  const tour = serverFetch(`/tour/${tourId}`, null, "no-store");

  return <TourDetailes tour={tour} />;
}
