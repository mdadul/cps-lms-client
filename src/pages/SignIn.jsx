import { Link } from "react-router-dom";
import singin from "../img/signin.gif";
import Layout from "../components/common/Layout";
import Input from "../components/Element/Input";
import Button from "../components/Element/Button";
import { useState } from "react";
import {  toast } from "react-toastify";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ps-server.shikbo.xyz/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.user) {
          toast.success("Successfully log in ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          
          if(data.user.role === "admin"){
            window.location.href = "/course";
          } else if(data.user.role === "student"){
            window.location.href = "/dashboard";
          }
        } else {
          toast.error(data.msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <Layout>
      <div class="flex w-screen flex-wrap text-slate-800">
        <div class="flex w-full flex-col md:w-1/2 bg-gray-50">
          <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[32rem]">
            <p class="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome back
              <br />
              to <span class="text-blue-600">CPS</span>
            </p>
            <p class="mt-6 text-center font-medium md:text-left">
              Sign in to your account below.
            </p>

            <form
              class="flex flex-col items-stretch pt-3 md:pt-8"
              onSubmit={handleSubmit}
            >
              <div class="flex flex-col pt-4">
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="mb-4 flex flex-col pt-4">
                <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <Link
                to="/"
                class="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
              >
                Forgot password?
              </Link>
              <Button type="submit" label="Sign in" />
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
          <img
            src={singin}
            alt="sign in"
            class="absolute inset-0 mt-32 w-4/5 object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}
