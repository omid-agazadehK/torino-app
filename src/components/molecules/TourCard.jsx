import Image from "next/image";
import TourCardFooter from "../atoms/TourCardFooter";
import TourCardBody from "../atoms/TourCardBody";

function TourCard({ tour }) {
  const { image, title, startDate } = tour;
  const expire = new Date().getTime() > new Date(startDate).getTime();

  return (
    <div className="col-span-12 w-full max-w-90 overflow-hidden rounded-xl border border-black/12 sm:col-span-6 md:col-span-4 md:max-w-70 lg:col-span-3">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="h-full card-image w-full duration-200 max-md:max-w-90 md:h-40 md:w-70"
        />
      </div>
      <TourCardBody expire={expire} tour={tour} />
      <TourCardFooter expire={expire} tour={tour} />
    </div>
  );
}

export default TourCard;
