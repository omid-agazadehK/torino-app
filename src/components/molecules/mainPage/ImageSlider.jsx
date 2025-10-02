import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { slider } from "@/core/constants/constans";

function ImageSlider({ paginationRef }) {
  return (
    <Swiper
      effect={"cards"}
      pagination={{
        el: ".custom-fraction",
        type: "fraction",
        renderFraction: (currentClass, totalClass) => {
          return `
                <span class="px-2 py-1 rounded-lg bg-gray-200 text-dark font-medium ${totalClass}"></span>
                <span class="mx-1 text-dark">/</span>
                <span class="px-2 py-1 rounded-lg bg-primary text-white font-bold ${currentClass}"></span>
                   `;
        },
      }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      grabCursor={true}
      modules={[Pagination, Navigation, EffectCards]}
      className="max-lg:max-w-100 lg:!pr-10 xl:!pr-30"
      onBeforeInit={(swiper) => {
        swiper.params.pagination.el = paginationRef.current;
      }}
    >
      {slider.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item.image}
            width={500}
            height={200}
            alt={item.title}
            className="xs:h-100 xs:w-80 h-70 w-50 rounded-2xl object-cover sm:h-120 sm:w-100"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
