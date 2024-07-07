
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
              <img src={logo} alt="logo" className='w-16'/>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
              <path
                fill="#0A66C2"
                d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
              ></path>
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
