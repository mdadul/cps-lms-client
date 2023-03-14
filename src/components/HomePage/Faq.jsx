export default function Faq() {
  return (
    <div class="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
      <h2 class="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">
        Frequently asked Questions
      </h2>
      <p class="mb-12 text-center text-lg text-gray-600">
        We have written down answers to some of the frequently asked questions.
        But, if you still have any queries, feel free to ping us on chat.
      </p>
      <ul class="space-y-4">
        <li class="text-left">
          <label
            for="accordion-1"
            class="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input
              class="peer hidden"
              type="checkbox"
              id="accordion-1"
              checked
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
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
            <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 class="text-sm text-gray-600 lg:text-base">
                Is there a free trial with Appsy?
              </h3>
            </div>
            <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div class="p-5">
                <p class="text-sm">
                  Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi,
                  recusandae voluptatum distinctio facilis necessitatibus
                  aperiam ut? Dolor mollitia modi aliquam, non sint at
                  reprehenderit commodi dignissimos quo unde asperiores officiis
                  quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>

        <li class="text-left">
          <label
            for="accordion-2"
            class="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input class="peer hidden" type="checkbox" id="accordion-2" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
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
            <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 class="text-sm text-gray-600 lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </h3>
            </div>
            <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div class="p-5">
                <p class="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>

        <li class="text-left">
          <label
            for="accordion-3"
            class="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input class="peer hidden" type="checkbox" id="accordion-3" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
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
            <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 class="text-sm text-gray-600 lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio.?
              </h3>
            </div>
            <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div class="p-5">
                <p class="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>

        <li class="text-left">
          <label
            for="accordion-4"
            class="relative flex flex-col rounded-md border border-gray-100 shadow-md"
          >
            <input class="peer hidden" type="checkbox" id="accordion-4" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180"
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
            <div class="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
              <h3 class="text-sm text-gray-600 lg:text-base">
                Lorem ipsum dolor sit amet.?
              </h3>
            </div>
            <div class="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
              <div class="p-5">
                <p class="text-sm">
                  Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing
                  elit. Adipisci eligendi, recusandae voluptatum distinctio
                  facilis necessitatibus aperiam ut? Dolor mollitia modi
                  aliquam, non sint at reprehenderit commodi dignissimos quo
                  unde asperiores officiis quos laboriosam similique nihil.
                </p>
              </div>
            </div>
          </label>
        </li>
      </ul>
      <div class="mt-20 flex justify-center">
        <a
          class="inline-flex cursor-pointer rounded-lg bg-blue-500 py-3 px-5 text-lg text-white"
          href="/"
        >
          Still have questions?
        </a>
      </div>
    </div>
  );
}
