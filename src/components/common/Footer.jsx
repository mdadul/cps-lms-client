
import logo from '../../img/ps-tb.png';

export const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className="px-4 pt-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="PROGRAMMIN SHIKHO"
              className="inline-flex items-center"
            >
              <img src={logo} alt="logo" className='w-16' />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-100">
                Choose Programming Shikho- PS as your go-to resource for learning programming. We are dedicated to providing you with the highest quality education possible and empowering you to reach your full potential as a programmer. Whether you're a beginner or an experienced coder, our interactive, flexible approach to learning will help you achieve your goals.
              </p>
              <p className="mt-4 text-sm text-gray-100">
                Join us on our mission to create a world where anyone can build something meaningful with technology!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-gray-100">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Tech News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Tech World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Programming Quizes
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Programming languages
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-100">
                Activities
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Web Seminar
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Ambassador
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-100">More About PS</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-100">We are In</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Open source software
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Artificial intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Programming communities
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    Programming Forums
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2023 PROGRAMMING SHIKHO- PS. All rights reserved. | <span className='text-gray-300'>Developed by : Emdadul Islam & Sorowar Mahabub</span>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">

            <a
              href="https://www.linkedin.com/company/ps-official"
              className="text-gray-300 transition-colors duration-300 hover:text-white"
            >
              <svg className="h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/programming.shikho/"
              className="text-gray-300 transition-colors duration-300 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
