import Image from "next/image";
import TourCardFooter from "../atoms/TourCardFooter";
import TourCardBody from "../atoms/TourCardBody";

function TourCard({ tour }) {
  const { image, title, startDate } = tour;
  const expire = new Date().getTime() > new Date(startDate).getTime();

  return (
    <div className="lg:col-span-3 md:col-span-4 sm:col-span-6  col-span-12 md:max-w-70 max-w-90 w-full overflow-hidden rounded-xl border border-black/12">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="z-0 md:h-40 md:w-70 max-md:max-w-90 w-full h-full transition-all duration-200 hover:scale-110"
      />
      <TourCardBody expire={expire} tour={tour} />
      <TourCardFooter expire={expire} tour={tour} />
    </div>
  );
}

export default TourCard;
