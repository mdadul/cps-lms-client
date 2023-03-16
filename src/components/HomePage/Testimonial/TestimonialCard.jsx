import { useSwiper } from "swiper/react"

export default function TestimonialCard(props) {
  const { name, designation, img } = props;
    const swiper = useSwiper();
    return (
        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

          <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={img}
              alt="students"
            />

            <div class="mt-2 md:mx-6">
              <div>
                <p class="text-xl font-medium tracking-tight text-white">
                  {name}
                </p>
                <p class="text-blue-200 ">{designation}</p>
              </div>

              <p class="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {" "}
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda”.
              </p>
              <div class="flex items-center justify-between mt-6 md:justify-start">
                        <button onClick={()=>swiper.slidePrev()} title="left arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={()=>swiper.slideNext()} title="right arrow" class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
            </div>
          </div>
        </main>
    )
}