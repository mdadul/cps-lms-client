import React from 'react'
import RingText from '../Element/RingText'

export default function Syllabus() {
  return (
    <section>
    <div className="text-black py-8">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="text-3xl md:text-5xl text-gray-900 font-semibold leading-normal md:leading-relaxed mb-2">
            Course Syllabus
          </p>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 border-blue-800 absolute h-full border"
                style={{
                  right: "50%",
                  border: "2px solid #5f3767",
                  "border-radius": "1%",
                }}
              ></div>
              <div
                className="border-2-2 border-blue-800 absolute h-full border"
                style={{
                  left: "50%",
                  border: "2px solid #9771b4",
                  "border-radius": "1%",
                }}
              ></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Month 1
                  </h4>
                  <div className="flex flex-wrap justify-end">
                    <RingText text="Introduction to Web Development" />
                    <RingText text="HTML Basics: tags, elements, attributes" />
                    <RingText text="HTML Document Structure and Semantics" />
                    <RingText text="HTML Forms and Tables" />
                    <RingText text="HTML Media: Images, Audio, and Video" />
                  </div>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Month 2
                  </h4>
                  <div>
                    <RingText text="CSS Basics: selectors, properties, values" />
                    <RingText text="CSS Layouts:Box Model.Floats,Flexbox,Grid" />
                    <RingText text="CSS Typography and Colors" />
                    <RingText text="CSS Media Queries and Responsive Design" />
                    <RingText text="Bootstrap Framework: Introduction and Usage" />
                  </div>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                <h4 className="mb-3 font-bold text-lg md:text-2xl">
                    Month 3
                  </h4>
                  <div className="flex flex-wrap justify-end">
                    <RingText text="JS Basics:variables,data types,operators,functions" />
                    <RingText text="JavaScript DOM Manipulation and Events" />
                    <RingText text="PHP Basics: variables, data types, operators, control structures" />
                    <RingText text="SQL: Introduction to Basic SQL and different operation" />
                    <RingText text="CRUD Operation: Data Manipulation" />
                    <RingText text="Session with PHP: Authentication, Authorization" />
                    <RingText text="PHP Forms and Database Handling with SQL" />
                  </div>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>

                <div className="order-1  w-5/12 px-1 py-4">
                  <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                  Final Project
                  </h4>
                  <p className="text-sm md:text-base leading-snug text-gray-700 text-opacity-100">
                  Building a complete website using all the learned technologies

                  </p>
                </div>
              </div>
            </div>
            <img
              className="mx-auto -mt-36 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
