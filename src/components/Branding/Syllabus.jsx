import React from 'react'

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
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                      Introduction to Web Development
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                      HTML Basics: tags, elements, attributes
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                      HTML Document Structure and Semantics
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                      HTML Forms and Tables
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                      HTML Media: Images, Audio, and Video
                    </p>
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
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    CSS Basics: selectors, properties, values
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    CSS Layouts:Box Model.Floats,Flexbox,Grid
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    CSS Typography and Colors
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    CSS Media Queries and Responsive Design
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    Bootstrap Framework: Introduction and Usage
                    </p>
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
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    JS Basics:variables,data types,operators,functions
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    JavaScript DOM Manipulation and Events
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    PHP Basics: variables, data types, operators, control structures
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    SQL: Introduction to Basic SQL and different operation
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    CRUD Operation: Data Manipulation
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    Session with PHP: Authentication, Authorization
                    </p>
                    <p className="text-sm md:text-base leading-snug text-purple-900 font-medium ring-2 text-opacity-100 rounded-full py-1 my-2 w-max px-2 ">
                    PHP Forms and Database Handling with SQL
                    </p>
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
