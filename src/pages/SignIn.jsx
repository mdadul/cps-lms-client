export default function SignIn() {
  return (
    <div class="flex w-screen flex-wrap text-slate-800">
      <div class="flex w-full flex-col md:w-1/2">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="/" class="text-2xl font-bold text-blue-600">
            {" "}
            Cholo Programming Shikhi .{" "}
          </a>
        </div>
        <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p class="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span class="text-blue-600">CPS</span>
          </p>
          <p class="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>

          <form class="flex flex-col items-stretch pt-3 md:pt-8">
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
                  placeholder="Password"
                />
              </div>
            </div>
            <a
              href="/"
              class="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
            >
              Forgot password?
            </a>
            <button
              type="submit"
              class="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign in
            </button>
          </form>
          <div class="py-12 text-center">
            <p class="text-gray-600">
              Don't have an account?
              <a
                href="/signup"
                class="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                Sign up for free.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="relative hidden h-screen select-none md:block md:w-1/2">
        
      </div>
    </div>
  );
}
