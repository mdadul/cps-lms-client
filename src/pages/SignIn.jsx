import { Link } from "react-router-dom";
import singin from '../img/signin.gif'
import Layout from "../components/common/Layout";
import Input from "../components/Element/Input";
import Button from "../components/Element/Button";
export default function SignIn() {
 
  return (
  <Layout>
      <div class="flex w-screen flex-wrap text-slate-800">
      <div class="flex w-full flex-col md:w-1/2 bg-gray-50">
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
                <Input type="email" placeholder="Email" required/>
              </div>
            </div>
            <div class="mb-4 flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <Input type="password" placeholder="Password" required/>
                
              </div>
            </div>
            <Link
              to="/"
              class="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
            >
              Forgot password?
            </Link>
           <Button type="submit" label="Sign in"/>
          </form>
          <div class="py-12 text-center">
            <p class="text-gray-600">
              Don't have an account?
              <Link
                to="/signup"
                class="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div class="relative hidden h-screen select-none md:block md:w-1/2">
        <img src={singin} alt="sign in" class="absolute inset-0 mt-32 w-4/5 object-cover" />
      </div>
    </div>
  </Layout>
   
  );
}
