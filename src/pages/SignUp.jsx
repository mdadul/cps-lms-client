import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div class="flex w-screen flex-wrap text-slate-800">
      <div class="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
       
      </div>
      <div class="flex w-full flex-col md:w-1/2">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" class="text-2xl font-bold text-blue-600">
            {" "}
            Cholo Programming Shikhi .{" "}
          </Link>
        </div>
        <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p class="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p class="mt-6 text-center font-medium md:text-left">
            Already using CPS? 
            <Link to="/signin" class="whitespace-nowrap font-semibold text-blue-700">
              Login here
            </Link>
          </p>
          <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img
              class="mr-2 h-5"
              src="/images/-9jfz8JJkYKu0yDYmD5WM.svg"
              alt=""
            />{" "}
            Get started with Google
          </button>
          <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div class="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div>
          <form class="flex flex-col items-stretch pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-name"
                  class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  id="login-email"
                  class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="mb-4 flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <div class="block">
              <input
                class="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                type="checkbox"
                id="remember-me"
                checked
              />
              <label class="inline-block" for="remember-me">
                {" "}
                I agree to the{" "}
                <Link class="underline" to="/">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              class="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
