import { useSwiper } from "swiper/react"

export default function TestimonialCard(props) {
  const { name, designation, img } = props;
    const swiper = useSwiper();
    return (
        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={img}
              alt="students"
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  {name}
                </p>
                <p className="text-blue-200 ">{designation}</p>
              </div>

              <p className="mt-4 text-lg text-justify leading-relaxed text-white md:text-sm">
                {" "}
                “I recently completed the C Programming with Problem Solving course offered by Cholo Programming Shikhi, and I must say, it was an exceptional learning experience. The course content was comprehensive, well-structured, and the instructors were extremely knowledgeable and supportive. The hands-on approach and practical exercises helped me develop a strong foundation in C programming concepts, and the problem-solving challenges pushed me to think creatively and apply my skills to real-world scenarios. The course also provided opportunities for collaboration and networking with other students, which added to the overall learning experience. I would highly recommend this course to anyone looking to build a solid foundation in C programming and problem-solving skills."
”.
              </p>
              <div className="flex items-center justify-between mt-6 md:justify-start">
                        <button onClick={()=>swiper.slidePrev()} title="left arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={()=>swiper.slideNext()} title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
            </div>
          </div>
        </main>
    )
}