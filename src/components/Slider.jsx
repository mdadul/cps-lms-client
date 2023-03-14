import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import Testimonial from "./Testimonial";
import TestimonialCard from "./TestimonialCard";

export default function Slider() {
  return (
    <Testimonial>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
        modules={[EffectCube]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </Testimonial>
  );
}
