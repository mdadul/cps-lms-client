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
          <TestimonialCard name="Sorowar Mahabub" designation="CEO, CPS" img="https://media.licdn.com/dms/image/D5603AQHNmVyKIB25MA/profile-displayphoto-shrink_800_800/0/1676230025966?e=1684368000&v=beta&t=uNwol6YBU9IV-M5z-dur-liZqAX1ZRFWcHrBg0HvWUk" />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard name="Prof. Dr. Engr. Abdul Kadar Muhammad Masum" designation="Professor, Dept. of CSE, IIUC" img="https://i1.rgstatic.net/ii/profile.image/803821173370882-1568657310456_Q512/Abdul-Kadar-Muhammad-Masum.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard name="Jmail Ahmed" designation="Batch 01 Student, C Programming" img="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/241481769_548287143036434_8827861358349869236_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFYr0C2h-r-Tt_oGV9UIz_a2uP-E6kpmIPa4_4TqSmYg_HULjGZpeEtwputT1CKsrlRF9M77z0LZcPda8AzwbN_&_nc_ohc=AgNBU9oEVxEAX-1LFUo&_nc_ht=scontent.fdac27-1.fna&oh=00_AfAgoRVkMoI4m9wU0INOuq_EtbpGbQVef7RuRo2-2dp8uw&oe=64185BB5"/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard name="Jobair Uddin Jessan" designation="Batch 02 Student, C++" img="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/328954753_463967509280553_4378314476767669331_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF9KHzA3k8kjEDjCVzzyGjm5tOLYDA8C9nm04tgMDwL2S2biT7ilAuyUNBeRPylrVI1sZbidPA431CyK5JEOHs0&_nc_ohc=NYz_abkc77MAX9vmh8n&_nc_ht=scontent.fdac27-1.fna&oh=00_AfDuu4sSZACTkgFVJ0PPdp86yo2VE2UHs8UfUbJieHCe2w&oe=64186DEF"/>
        </SwiperSlide>
      </Swiper>
    </Testimonial>
  );
}
