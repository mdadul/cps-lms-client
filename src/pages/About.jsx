import React from "react";
import MemberCard from "../components/AboutPage/MemberCard";
import Layout from "../components/common/Layout";

export default function About() {
  return (
    <Layout>
      <div className="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
        <div className="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
          <h2 className="mr-auto mb-4 text-4xl font-medium lg:text-3xl">
            Experience of{" "}
            <span className="whitespace-nowrap text-blue-600 md:text-gray-600">
              2 Years
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              omnis sint debitis sequi animi quaerat repellendus id distinctio
              dolores minus.
            </p>
            <p className="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              eos quod hic perspiciatis, consectetur suscipit maxime mollitia
              minima. Enim consequatur ab praesentium ipsum neque dolore
              expedita, earum rerum reiciendis nihil, deleniti id atque
              consequuntur necessitatibus distinctio aliquid explicabo quo
              obcaecati?
            </p>
          </div>
          <p className="hidden uppercase md:block md:text-7xl">
            Since <br />
            <span className="whitespace-nowrap text-blue-600">2 Years</span>
          </p>
        </div>
      </div>
      <section class="py-12 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-5">
          <div class="flex flex-col items-center">
            <div class="relative mt-10 md:order-2 md:mt-24">
              <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div class="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
              </div>

              <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:gap-10">
                <div class="relative flex flex-col overflow-hidden">
                  <svg
                    class="absolute top-6 text-4xl text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
                    />
                  </svg>
                  <div class="flex flex-1 flex-col justify-between p-6 lg:py-8 lg:px-7">
                    <div class="flex-1">
                      <blockquote class="mt-8 flex-1">
                        <h2 class="text-4xl font-bold text-fuchsia-900 my-3">
                          Our History
                        </h2>
                        <p class="text-justify text-black">
                          When we started{" "}
                          <strong>চলো, Programming শিখি,</strong> our goal was
                          to give anyone in the world the ability to learn the
                          skills they’d need to succeed in the 21st century. We
                          set out to create a new, interactive way of learning —
                          making it engaging, flexible, and accessible for as
                          many people as possible. Since then, we have helped
                          millions of people worldwide unlock modern technical
                          skills and reach their full potential through code.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col overflow-hidden">
                  <svg
                    class="absolute top-6 text-4xl text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"
                    />
                  </svg>
                  <div class="flex flex-1 flex-col justify-between p-6 lg:py-8 lg:px-7">
                    <div class="flex-1">
                      <blockquote class="mt-8 flex-1">
                        <h2 class="text-4xl font-bold text-fuchsia-900 my-3">
                          Our Mission
                        </h2>
                        <p class="text-black text-justify">
                          We want to create a world where anyone can build
                          something meaningful with technology, and everyone has
                          the learning tools, resources, and opportunities to do
                          so. Code contains a world of possibilities — all
                          that’s required is the curiosity and drive to learn.
                          At Codecademy, we are committed to empowering all
                          people, regardless of where they are in their coding
                          journeys, to continue to learn, grow, and make an
                          impact on the world around them.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-10 leading-6 text-blue-900 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl">
            <span className="absolute -top-4 h-2 w-14 bg-white"></span>
            <h2 className="text-xl font-medium leading-9 text-white sm:text-3xl sm:leading-tight">
              Impressive Results in 2 Years
            </h2>
            <p className="text-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae enim cupiditate necessitatibus tempore molestias?
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 md:gap-8 lg:mt-24 lg:grid-cols-3">
            <MemberCard
              img="https://media.licdn.com/dms/image/D5603AQHNmVyKIB25MA/profile-displayphoto-shrink_800_800/0/1676230025966?e=1684368000&v=beta&t=uNwol6YBU9IV-M5z-dur-liZqAX1ZRFWcHrBg0HvWUk"
              title="Sorowar Mahabub"
              description="CEO & Founder, CPS"
            />
            <MemberCard
              img="https://media.licdn.com/dms/image/D5603AQHNmVyKIB25MA/profile-displayphoto-shrink_800_800/0/1676230025966?e=1684368000&v=beta&t=uNwol6YBU9IV-M5z-dur-liZqAX1ZRFWcHrBg0HvWUk"
              title="Sorowar Mahabub"
              description="CEO & Founder, CPS"
            />
            <MemberCard
              img="https://media.licdn.com/dms/image/D5603AQHNmVyKIB25MA/profile-displayphoto-shrink_800_800/0/1676230025966?e=1684368000&v=beta&t=uNwol6YBU9IV-M5z-dur-liZqAX1ZRFWcHrBg0HvWUk"
              title="Sorowar Mahabub"
              description="CEO & Founder, CPS"
            />
            <MemberCard
              img="https://media.licdn.com/dms/image/D5603AQHNmVyKIB25MA/profile-displayphoto-shrink_800_800/0/1676230025966?e=1684368000&v=beta&t=uNwol6YBU9IV-M5z-dur-liZqAX1ZRFWcHrBg0HvWUk"
              title="Sorowar Mahabub"
              description="CEO & Founder, CPS"
            />
            
          </div>
        </div>
      </section>
    </Layout>
  );
}
