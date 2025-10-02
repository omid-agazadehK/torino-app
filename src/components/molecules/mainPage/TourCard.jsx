import TourCardBody from "@/components/atoms/mainPage/TourCardBody";
import TourCardFooter from "@/components/atoms/mainPage/TourCardFooter";
import Image from "next/image";

function TourCard({ tour }) {
  const { image, title, startDate } = tour;
  const expire = new Date().getTime() > new Date(startDate).getTime();

  return (
    <div className="col-span-12 w-full max-w-90 overflow-hidden rounded-xl border border-black/12 sm:col-span-6 md:col-span-4 md:max-w-70 lg:col-span-3">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="card-image h-full w-full max-md:max-w-90 md:h-40 md:w-70"
      />
      <TourCardBody expire={expire} tour={tour} />
      <TourCardFooter expire={expire} tour={tour} />
    </div>
  );
}

export default TourCard;
