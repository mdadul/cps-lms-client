import React from "react";
import MemberCard from "../components/AboutPage/MemberCard";
import Layout from "../components/common/Layout";
import Sorowar from "../img/member/Sorowar-t.png";
import Goni from "../img/member/goni-t.png";
import Jamil from "../img/member/jamil-t.png";
import Jobaer from "../img/member/jobaer-t.png";
import Moinul from "../img/member/moinul-t.png";
import Avater from "../img/logo-white.png";
import Emdadul from "../img/member/emdadul.png";


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
            <p className="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28 text-justify">
              Are you interested in learning programming, but not sure where to start? Look no further than <b>Programming Shikho</b>! Our different programs offer a comprehensive curriculum that teaches you the skills you need to become a basic to advanced lavel skilled programmer.
            </p>
            <p className="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28 text-justify">
              If you're ready to take the next step in your career and become a basic to advanced lavel skilled programmer, enroll in <b>Programming Shikho</b> courses today!
            </p>
          </div>
          <p className="hidden uppercase md:block md:text-7xl">
            Since <br />
            <span className="whitespace-nowrap text-blue-600">2 Years</span>
          </p>
        </div>
      </div>

      {/* Add a new section here for adding frame for platform Introduction */}
      <section class="py-2 sm:py-6 lg:py-2">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-5">
          <div class="flex flex-col items-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Inro of Our Platform, PS</h2>
            <div class="relative mt-10 md:order-2 md:mt-24">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7049786038881304576" height="500" width="1000" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
          </div>
        </div>
      </section>


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
                          <strong>Programming Shikho,</strong> our goal was
                          to give anyone in the world the ability to learn the
                          skills they’d need to succeed in the 21st century, Obiously that is Programming/ Coding. We
                          set out to create a new, interactive way of learning Programming—
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
                          At <b>Programming Shikho</b>, we are committed to empowering all
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
              PS Excellent Team
            </h2>
            <p className="text-white text-justify">
              Programming Shikho - where excellence is not just a goal, but a habit. Our team is a group of passionate individuals who strive for excellence in everything we do, from writing code to solving complex problems. We believe in collaboration, innovation, and pushing the boundaries of what is possible. Our commitment to excellence drives us forward, and we are proud to be part of such an outstanding team.
            </p>
          </div>

          <div>
            <h2 className="mt-5 text-5xl text-white text-center">CEO</h2>
            <MemberCard
              img={Sorowar}
              title="Md. Sorowar Mahabub Rabby"
              designation="CEO, Founder and Head Instructor, PS"
              description="B.Sc in CSE (pursuing), IIUC & Teaching Assistant, Dept. of CSE, IIUC"
              description1="Membership Executive, IIUC Data Science and Research Group & Ass. Press and Publication Secratery, IIUC Computer Club"
            />
          </div>
          <h1 className="text-center text-5xl text-white">Our Mentors</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 md:gap-8 lg:grid-cols-2">
            <MemberCard
              img={Goni}
              title="Sajjad Goni Shovon"
              designation="Instructor, C Programming, PS"
              description="B.Sc in CSE (pursuing), IIUC & Ass. Event Secratery, IIUC Computer Club"
            />
            <MemberCard
              img={Jobaer}
              title="Jobaer Hosain"
              designation="Instructor, CPP, PS"
              description="B.Sc in CSE (pursuing), IIUC & Teaching Assistant, IIUC"
            />
            <MemberCard
              img={Jamil}
              title="Jamil Ahmed"
              designation="Instructor, CPP, PS"
              description="B.Sc in CSE (pursuing), IIUC"
            />
            <MemberCard
              img={Moinul}
              title="Moinul Hosain"
              designation="Instructor, C Programming, PS"
              description="B.Sc in CSE (pursuing), IIUC"
            />

          </div>
          <h2 className="text-5xl text-white text-center">Our Teaching Assistants</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-8 lg:grid-cols-3">
            <MemberCard
              img={Avater}
              title="Nafisa Ayman Tanha"
              designation="TA, C Programming Batch-2, PS"
              description="B.Sc in CSE (pursuing), IIUC & Ass. Sports Secratery, IIUC Computer Club"
            />
            <MemberCard
              img={Avater}
              title="Tasfia Sultana Bhuiyan"
              designation="TA, C Programming Batch-3, PS"
              description="B.Sc in CSE (pursuing), IIUC & Ass. Press and Publication Secratery, IIUC Computer Club"
            />
            <MemberCard
              img={Avater}
              title="Sayeda Binte Sarnaly"
              designation="TA, C Programming Batch-4, PS"
              description="B.Sc in CSE (pursuing), IIUC"
            />

          </div>
          <h2 className="text-5xl text-white text-center">Developers</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 md:gap-8 lg:grid-cols-2 w-auto">
            <MemberCard
              img={Emdadul}
              title="Emdadul Islam"
              designation="Web Developer, PS"
              description="B.Sc in CSE (pursuing), IIUC"
            // description1= "Membership Executive, IIUC Data Science and Research Group & Ass. Press and Publication Secratery, IIUC Computer Club"
            />
            <MemberCard
              img={Sorowar}
              title="Sorowar Mahabub"
              designation="CEO & Web Developer, PS"
              description="B.Sc in CSE (pursuing), IIUC"
            // description1= "Membership Executive, IIUC Data Science and Research Group & Ass. Press and Publication Secratery, IIUC Computer Club"
            />
          </div>
        </div>
      </section>



    </Layout>
  );
}
