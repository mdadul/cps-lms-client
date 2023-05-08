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
          <TestimonialCard
            name="Mr. Shafiqul Islam"
            designation="CPP Batch 01"
            img="https://images.generated.photos/ayzWNpxQvy3lP6YLMEHRV2t9R-hpbfmvUxJ6dPNcDv4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODMxMDM5LmpwZw.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Mr. Aminul Islam"
            designation="CPP Batch 02 "
            img="https://images.generated.photos/gRpQMTax2XIQudzpvPNgx1G1OxG71cQBF-NEabHlkUA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTE2MTQzLmpwZw.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Testimonial>
  );
}
