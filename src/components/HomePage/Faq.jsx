export default function Faq() {
  return (
    <div className="bg-gradient-to-r from-zinc-50 to-slate-100">
      <div className="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
        <h2 className="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">
          Frequently asked Questions
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          We have written down answers to some of the frequently asked
          questions. But, if you still have any queries, feel free to ping us on
          chat.
        </p>
        <ul className="space-y-4">
          <li className="text-left">
            <label
              for="accordion-2"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 className="text-sm text-gray-600 lg:text-base">
                  What programming languages are covered in{" "}
                  <b>Programming Shikho</b> Platform?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    <b>Programming Shikho</b> offers courses in several
                    programming languages, including{" "}
                    <b>C, C++, Problem Solving</b>, Python, Java and JavaScript.
                    We have <b>Web Design and Development Courses</b> as well to
                    help you learn the basic to advance of web development.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              for="accordion-3"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-3" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 className="text-sm text-gray-600 lg:text-base">
                  How much does it cost to enroll in Programming Shikho's
                  courses?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    The cost of each course varies, but{" "}
                    <b>Programming Shikho</b> offers both free and paid
                    courses. You can check the course page for pricing details.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              for="accordion-4"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-4" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 className="text-sm text-gray-600 lg:text-base">
                  Do I need any prior programming experience to enroll in Cholo
                  Programming Shikho's courses?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    No, <b>Programming Shikho</b>'s courses are designed
                    for both beginners and experienced programmers. The courses
                    cover the basics of programming as well as more advanced
                    topics.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              for="accordion-5"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-5" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 className="text-sm text-gray-600 lg:text-base">
                  Will I receive a certificate upon completing a course?
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    Yes, Programming Shikho provides a certificate of
                    completion for each course. You can download and print your
                    certificate once you have successfully completed the course.
                  </p>
                </div>
              </div>
            </label>
          </li>

          <li className="text-left">
            <label
              for="accordion-6"
              className="relative flex flex-col rounded-md border border-gray-100 shadow-md"
            >
              <input className="peer hidden" type="checkbox" id="accordion-6" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                <h3 className="text-sm text-gray-600 lg:text-base">
                  <b>
                    Are there any opportunities for interaction with instructors
                    or other students?
                  </b>
                </h3>
              </div>
              <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                <div className="p-5">
                  <p className="text-sm">
                    Yes, Programming Shikho provides opportunities for
                    students to interact with instructors and other students
                    through forums, live chat sessions, and other online
                    resources.
                  </p>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div className="mt-20 flex justify-center">
          <a
            className="inline-flex cursor-pointer rounded-lg bg-blue-500 py-3 px-5 text-lg text-white"
            href="/contact"
          >
            Still have questions?
          </a>
        </div>
      </div>
    </div>
  );
}