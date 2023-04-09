import { Link } from "react-router-dom";
import signup from '../img/welcome.svg'
import Layout from "../components/common/Layout";
import Input from "../components/Element/Input";
import Button from "../components/Element/Button";
export default function SignUp() {
  return (
  <Layout>
      <div class="flex w-screen flex-wrap text-slate-800">
      <div class="relative hidden h-screen select-none flex-col justify-center md:flex md:w-1/2">
       <img src={signup} alt="sign-up" class="absolute inset-0 w-4/5 object-cover mt-36 ml-20" />
      </div>
      <div class="flex w-full flex-col md:w-1/2 bg-gray-50">
        {/* <div class="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" class="text-2xl font-bold text-blue-600">
            {" "}
            Cholo Programming Shikhi .{" "}
          </Link>
        </div> */}
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
          
          <form class="flex flex-col items-stretch pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <Input type="text" placeholder="Name" required/>
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <Input type="email" placeholder="Email" required/>
              </div>
            </div>
            <div class="mb-4 flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <Input type="password" placeholder="Password (minimum 8 characters)"  required/>
              </div>
            </div>
            <Button type="submit" label="Sign up"/>
            
          </form>
        </div>
      </div>
    </div>
  </Layout>
  );
}
